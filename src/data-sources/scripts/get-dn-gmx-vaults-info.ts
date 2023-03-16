import { BigNumber, ethers } from 'ethers';
import { formatEther, formatUnits, parseEther } from 'ethers/lib/utils';
import { aave, deltaNeutralGmxVaults, gmxProtocol } from '../../contracts';
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
  dnGmxBatchingManagerGlp: {
    paused: boolean;
    depositCap: Amount;
  };
  __debug?: any;
}

export async function getDnGmxVaultsInfo(
  provider: ethers.providers.Provider
): Promise<DnGmxVaultsInfoResult> {
  const {
    dnGmxJuniorVault,
    dnGmxSeniorVault,
    dnGmxBatchingManager,
    dnGmxBatchingManagerGlp,
  } = await deltaNeutralGmxVaults.getContracts(provider);

  const { aUsdc } = await aave.getContracts(provider);
  const { glpManager, fsGLP } = await gmxProtocol.getContracts(provider);

  const [
    // junior vault
    dnGmxJuniorVault_getOptimalBorrows_of_totalAssets,
    dnGmxJuniorVault_getCurrentBorrows,
    dnGmxJuniorVault_dnUsdcDeposited,
    dnGmxJuniorVault_getUsdcBorrowed,
    dnGmxJuniorVault_getPrice_false,
    dnGmxJuniorVault_getPrice_true,
    dnGmxJuniorVault_totalAssets,
    // senior vault
    dnGmxSeniorVault_totalUsdcBorrowed,
    dnGmxSeniorVault_totalAssets,
    dnGmxSeniorVault_maxUtilizationBps,
    dnGmxSeniorVault_getEthRewardsSplitRate,
    // batching manager
    dnGmxBatchingManager_paused,
    dnGmxBatchingManager_depositCap,
    dnGmxBatchingManager_roundUsdcBalance,
    dnGmxBatchingManager_targetAssetCap,
    dnGmxBatchingManager_roundGlpStaked,
    // batching manager
    dnGmxBatchingManagerGlp_paused,
    dnGmxBatchingManagerGlp_depositCap,
    dnGmxBatchingManagerGlp_roundAssetBalance,
    dnGmxBatchingManagerGlp_targetAssetCap,
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
    dnGmxJuniorVault.totalAssets(),
    // senior vault
    dnGmxSeniorVault.totalUsdcBorrowed(),
    dnGmxSeniorVault.totalAssets(),
    dnGmxSeniorVault.maxUtilizationBps(),
    dnGmxSeniorVault.getEthRewardsSplitRate(),
    // batching manager
    dnGmxBatchingManager.paused(),
    dnGmxBatchingManager.depositCap(),
    dnGmxBatchingManager.roundUsdcBalance(),
    dnGmxBatchingManager.targetAssetCap(),
    dnGmxBatchingManager.roundGlpStaked(),
    // batching manager glp
    dnGmxBatchingManagerGlp.paused(),
    dnGmxBatchingManagerGlp.depositCap(),
    dnGmxBatchingManagerGlp.roundAssetBalance(),
    dnGmxBatchingManagerGlp.targetAssetCap(),
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
      depositCap: bigNumberToAmount(
        max(
          ethers.constants.Zero,
          min(
            dnGmxBatchingManager_depositCap,
            await glpToUsdc(
              dnGmxBatchingManager_targetAssetCap.sub(
                dnGmxJuniorVault_totalAssets
                  .add(dnGmxBatchingManagerGlp_roundAssetBalance)
                  .add(await usdcToGlp(dnGmxBatchingManager_roundUsdcBalance))
              )
            )
          )
        ),
        6
      ),
      roundUsdcBalance: bigNumberToAmount(
        dnGmxBatchingManager_roundUsdcBalance,
        6
      ),
    },
    dnGmxBatchingManagerGlp: {
      paused: dnGmxBatchingManagerGlp_paused,
      depositCap: bigNumberToAmount(
        max(
          ethers.constants.Zero,
          min(
            dnGmxBatchingManagerGlp_depositCap,
            dnGmxBatchingManagerGlp_targetAssetCap.sub(
              dnGmxJuniorVault_totalAssets
                .add(dnGmxBatchingManagerGlp_roundAssetBalance)
                .add(await usdcToGlp(dnGmxBatchingManager_roundUsdcBalance))
                .sub(dnGmxBatchingManager_roundGlpStaked)
            )
          )
        ),
        18
      ),
    },
    __debug: {
      // junior vault
      dnGmxJuniorVault_getOptimalBorrows_of_totalAssets,
      dnGmxJuniorVault_getCurrentBorrows,
      dnGmxJuniorVault_dnUsdcDeposited,
      dnGmxJuniorVault_getUsdcBorrowed,
      dnGmxJuniorVault_getPrice_false,
      dnGmxJuniorVault_getPrice_true,
      dnGmxJuniorVault_totalAssets,
      // senior vault
      dnGmxSeniorVault_totalUsdcBorrowed,
      dnGmxSeniorVault_totalAssets,
      dnGmxSeniorVault_maxUtilizationBps,
      dnGmxSeniorVault_getEthRewardsSplitRate,
      // batching manager
      dnGmxBatchingManager_paused,
      dnGmxBatchingManager_depositCap,
      dnGmxBatchingManager_roundUsdcBalance,
      dnGmxBatchingManager_targetAssetCap,
      dnGmxBatchingManager_roundGlpStaked,
      // batching manager
      dnGmxBatchingManagerGlp_paused,
      dnGmxBatchingManagerGlp_depositCap,
      dnGmxBatchingManagerGlp_roundAssetBalance,
      dnGmxBatchingManagerGlp_targetAssetCap,
      // other
      aUsdc_balanceOf_dnGmxSeniorVault,
    },
  };

  async function usdcToGlp(amount: BigNumber) {
    // aum is in 1e30
    const aum = await glpManager.getAum(false);
    // totalSupply is in 1e18
    const totalSupply = await fsGLP.totalSupply();

    // 6 + 18 + 24 - 30 = 18 (glp decimals)
    return amount.mul(totalSupply).mul(BigNumber.from(10).pow(24)).div(aum);
  }

  async function glpToUsdc(amount: BigNumber) {
    // aum is in 1e30
    const aum = await glpManager.getAum(false);
    // totalSupply is in 1e18
    const totalSupply = await fsGLP.totalSupply();

    return amount.mul(aum).div(totalSupply).div(BigNumber.from(10).pow(24));
  }
}

function min(a: BigNumber, b: BigNumber) {
  return a.gt(b) ? b : a;
}

function max(a: BigNumber, b: BigNumber) {
  return a.lt(b) ? b : a;
}
