import { BigNumber, ethers } from 'ethers';
import { formatEther, formatUnits, parseEther } from 'ethers/lib/utils';
import { aave, deltaNeutralGmxVaults } from '../../contracts';
import { safeDiv } from '../../utils';

export interface DnGmxVaultsInfoResult {
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
    // senior vault
    dnGmxSeniorVault_totalUsdcBorrowed,
    dnGmxSeniorVault_totalAssets,
    dnGmxSeniorVault_maxUtilizationBps,
    dnGmxSeniorVault_getEthRewardsSplitRate,
    // batching manager
    dnGmxBatchingManager_paused,
    // other
    aUsdc_balanceOf_dnGmxSeniorVault,
  ] = await Promise.all([
    // junior vault
    dnGmxJuniorVault.getOptimalBorrows(dnGmxJuniorVault.totalAssets()),
    dnGmxJuniorVault.getCurrentBorrows(),
    dnGmxJuniorVault.dnUsdcDeposited(), // TODO remove; this call is failing
    dnGmxJuniorVault.getUsdcBorrowed(),
    // senior vault
    dnGmxSeniorVault.totalUsdcBorrowed(),
    dnGmxSeniorVault.totalAssets(),
    dnGmxSeniorVault.maxUtilizationBps(),
    dnGmxSeniorVault.getEthRewardsSplitRate(),
    // batching manager
    dnGmxBatchingManager.paused(),
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
    },
    seniorVault: {
      usdcLentToAaveD6: aUsdc_balanceOf_dnGmxSeniorVault,
      positionD6: dnGmxSeniorVault_totalUsdcBorrowed,
      earnedInterestRate: Number(formatEther(earnedInterestRateD18)),
      utilizationRatio: Number(formatEther(utilizationRatioD18)),
      withdrawableAmountD6: withdrawableAmountD6_A.lt(withdrawableAmountD6_B)
        ? withdrawableAmountD6_A
        : withdrawableAmountD6_B,
      ethRewardsSplitRate: Number(
        formatUnits(dnGmxSeniorVault_getEthRewardsSplitRate, 30)
      ),
    },
    dnGmxBatchingManager: {
      paused: dnGmxBatchingManager_paused,
    },
  };
}
