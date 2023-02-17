import { BigNumber, ethers } from 'ethers';
import { formatEther, formatUnits, parseEther } from 'ethers/lib/utils';
import { aave, deltaNeutralGmxVaults } from '../../contracts';
import { Amount, bigNumberToAmount, safeDiv } from '../../utils';
import { DnGmxVaultsInfoFastResult } from './get-dn-gmx-vaults-info-fast';

export interface DnGmxVaultsInfoResult extends DnGmxVaultsInfoFastResult {
  juniorVault: {
    currentExposureInGlp: {
      btcD8: BigNumber;
      ethD18: BigNumber;
    };
    currentShortPositionInAave: {
      btcD8: BigNumber;
      ethD18: BigNumber;
    };
    currentBorrowValueD6: BigNumber;
    ethRewardsSplitRate: number;
    assetPriceMinimized: Amount;
    assetPriceMaximized: Amount;
  };
  seniorVault: {
    usdcLentToAaveD6: BigNumber;
    positionD6: BigNumber;
    withdrawableAmountD6: BigNumber;
    earnedInterestRate: number;
    utilizationRatio: number;
    ethRewardsSplitRate: number;
  };
  dnGmxBatchingManager: {
    paused: boolean;
    depositCap: Amount;
    roundUsdcBalance: Amount;
  };
}

export async function getDnGmxVaultsInfo(
  provider: ethers.providers.Provider
): Promise<DnGmxVaultsInfoResult> {
  const { dnGmxJuniorVault, dnGmxSeniorVault, dnGmxBatchingManager } =
    await deltaNeutralGmxVaults.getContracts(provider);

  const { aUsdc } = await aave.getContracts(provider);

  const [
    // junior vault
    dnGmxJuniorVault_getOptimalBorrows_of_totalAssets,
    dnGmxJuniorVault_getCurrentBorrows,
    dnGmxJuniorVault_dnUsdcDeposited,
    dnGmxJuniorVault_getUsdcBorrowed,
    dnGmxJuniorVault_getPrice_false,
    dnGmxJuniorVault_getPrice_true,
    // senior vault
    dnGmxSeniorVault_totalUsdcBorrowed,
    dnGmxSeniorVault_totalAssets,
    dnGmxSeniorVault_maxUtilizationBps,
    dnGmxSeniorVault_getEthRewardsSplitRate,
    // batching manager
    dnGmxBatchingManager_paused,
    dnGmxBatchingManager_depositCap,
    dnGmxBatchingManager_roundUsdcBalance,
    // other
    aUsdc_balanceOf_dnGmxSeniorVault,
  ] = await Promise.all([
    // junior vault
    (async () => {
      // TODO remove this IIFE and use following call the upgrade is complete
      // dnGmxJuniorVault.getOptimalBorrows(dnGmxJuniorVault.totalAssets(), false);
      const totalAssets = await dnGmxJuniorVault.totalAssets();
      try {
        return await dnGmxJuniorVault.getOptimalBorrows(totalAssets, false);
      } catch {
        return new ethers.Contract(
          dnGmxJuniorVault.address,
          [
            'function getOptimalBorrows(uint256 glpDeposited) external view returns (uint256 optimalBtcBorrow, uint256 optimalEthBorrow)',
          ],
          dnGmxJuniorVault.provider
        ).getOptimalBorrows(totalAssets) as {
          optimalBtcBorrow: BigNumber;
          optimalEthBorrow: BigNumber;
        };
      }
    })(),
    dnGmxJuniorVault.getCurrentBorrows(),
    dnGmxJuniorVault.dnUsdcDeposited(), // TODO remove; this call is failing
    dnGmxJuniorVault.getUsdcBorrowed(),
    dnGmxJuniorVault.getPrice(false),
    dnGmxJuniorVault.getPrice(true),
    // senior vault
    dnGmxSeniorVault.totalUsdcBorrowed(),
    dnGmxSeniorVault.totalAssets(),
    dnGmxSeniorVault.maxUtilizationBps(),
    dnGmxSeniorVault.getEthRewardsSplitRate(),
    // batching manager
    dnGmxBatchingManager.paused(),
    dnGmxBatchingManager.depositCap(),
    dnGmxBatchingManager.roundUsdcBalance(),
    // other
    aUsdc.balanceOf(dnGmxSeniorVault.address),
  ] as const);

  const D18 = parseEther('1');

  const utilizationRatioD18 = safeDiv(
    D18.mul(dnGmxSeniorVault_totalUsdcBorrowed),
    dnGmxSeniorVault_totalAssets
  );

  const earnedInterestRateD18 = safeDiv(
    D18.mul(dnGmxJuniorVault_dnUsdcDeposited.add(dnGmxSeniorVault_totalAssets)),
    dnGmxSeniorVault_totalAssets
  );

  const withdrawableAmountD6_A = dnGmxSeniorVault_totalAssets.sub(
    dnGmxJuniorVault_getUsdcBorrowed
  );
  const withdrawableAmountD6_B = dnGmxSeniorVault_totalAssets
    .sub(dnGmxSeniorVault_totalUsdcBorrowed)
    .mul(dnGmxSeniorVault_maxUtilizationBps)
    .div(10_000);

  const seniorVault_ethRewardsSplitRate = Number(
    formatUnits(dnGmxSeniorVault_getEthRewardsSplitRate, 30)
  );
  return {
    juniorVault: {
      currentExposureInGlp: {
        btcD8:
          dnGmxJuniorVault_getOptimalBorrows_of_totalAssets.optimalBtcBorrow,
        ethD18:
          dnGmxJuniorVault_getOptimalBorrows_of_totalAssets.optimalEthBorrow,
      },
      currentShortPositionInAave: {
        btcD8: dnGmxJuniorVault_getCurrentBorrows.currentBtcBorrow,
        ethD18: dnGmxJuniorVault_getCurrentBorrows.currentEthBorrow,
      },
      // check with finquant, done, awaiting findev
      currentBorrowValueD6: dnGmxJuniorVault_getUsdcBorrowed,
      ethRewardsSplitRate: 1 - seniorVault_ethRewardsSplitRate,
      assetPriceMinimized: bigNumberToAmount(
        dnGmxJuniorVault_getPrice_false,
        18
      ),
      assetPriceMaximized: bigNumberToAmount(
        dnGmxJuniorVault_getPrice_true,
        18
      ),
    },
    seniorVault: {
      usdcLentToAaveD6: aUsdc_balanceOf_dnGmxSeniorVault,
      positionD6: dnGmxSeniorVault_totalUsdcBorrowed,
      earnedInterestRate: Number(formatEther(earnedInterestRateD18)),
      utilizationRatio: Number(formatEther(utilizationRatioD18)),
      withdrawableAmountD6: withdrawableAmountD6_A.lt(withdrawableAmountD6_B)
        ? withdrawableAmountD6_A
        : withdrawableAmountD6_B,
      ethRewardsSplitRate: seniorVault_ethRewardsSplitRate,
    },
    dnGmxBatchingManager: {
      paused: dnGmxBatchingManager_paused,
      depositCap: bigNumberToAmount(dnGmxBatchingManager_depositCap, 6),
      roundUsdcBalance: bigNumberToAmount(
        dnGmxBatchingManager_roundUsdcBalance,
        6
      ),
    },
  };
}
