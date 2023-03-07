import { formatEther, formatUnits, parseEther, Provider } from 'ethers';
import { aave, deltaNeutralGmxVaults } from '../../contracts';
import { Amount, bigNumberToAmount, safeDiv } from '../../utils';
import { DnGmxVaultsInfoFastResult } from './get-dn-gmx-vaults-info-fast';

export interface DnGmxVaultsInfoResult extends DnGmxVaultsInfoFastResult {
  juniorVault: {
    currentExposureInGlp: {
      btcD8: bigint;
      ethD18: bigint;
    };
    currentShortPositionInAave: {
      btcD8: bigint;
      ethD18: bigint;
    };
    currentBorrowValueD6: bigint;
    ethRewardsSplitRate: number;
    assetPriceMinimized: Amount;
    assetPriceMaximized: Amount;
  };
  seniorVault: {
    usdcLentToAaveD6: bigint;
    positionD6: bigint;
    withdrawableAmountD6: bigint;
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
  provider: Provider
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
    dnGmxJuniorVault.getOptimalBorrows(
      await dnGmxJuniorVault.totalAssets(),
      false
    ),
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
    aUsdc.balanceOf(dnGmxSeniorVault),
  ] as const);

  const D18 = parseEther('1');

  const utilizationRatioD18 = safeDiv(
    D18 * dnGmxSeniorVault_totalUsdcBorrowed,
    dnGmxSeniorVault_totalAssets
  );

  const earnedInterestRateD18 = safeDiv(
    D18 * (dnGmxJuniorVault_dnUsdcDeposited + dnGmxSeniorVault_totalAssets),
    dnGmxSeniorVault_totalAssets
  );

  const withdrawableAmountD6_A =
    dnGmxSeniorVault_totalAssets - dnGmxJuniorVault_getUsdcBorrowed;
  const withdrawableAmountD6_B =
    ((dnGmxSeniorVault_totalAssets - dnGmxSeniorVault_totalUsdcBorrowed) *
      dnGmxSeniorVault_maxUtilizationBps) /
    10_000n;

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
      withdrawableAmountD6:
        withdrawableAmountD6_A < withdrawableAmountD6_B
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
