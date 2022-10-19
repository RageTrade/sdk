import { BigNumber, ethers } from 'ethers';
import { formatEther, parseEther } from 'ethers/lib/utils';
import { aave, dnLbVault } from '../../contracts';

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
    withdrawableAmountD18: BigNumber;
    earnedInterestRate: number;
    utilizationRatio: number;
  };
}

export async function getDnGmxVaultsInfo(
  provider: ethers.providers.Provider
): Promise<DnGmxVaultsInfoResult> {
  const { dnGmxJuniorVault, dnGmxSeniorVault } = await dnLbVault.getContracts(
    provider
  );

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
    dnGmxSeniorVault_previewWithdraw_totalSupply,
    // other
    aUsdc_balanceOf_dnGmxSeniorVault,
  ] = await Promise.all([
    // junior vault
    dnGmxJuniorVault.getOptimalBorrows(dnGmxJuniorVault.totalAssets()),
    dnGmxJuniorVault.getCurrentBorrows(),
    dnGmxJuniorVault.dnUsdcDeposited(),
    dnGmxJuniorVault.getUsdcBorrowed(),
    // senior vault
    dnGmxSeniorVault.totalUsdcBorrowed(),
    dnGmxSeniorVault.totalAssets(),
    dnGmxSeniorVault.previewWithdraw(dnGmxSeniorVault.totalSupply()),
    // other
    aUsdc.balanceOf(dnGmxSeniorVault.address),
  ] as const);

  const oneEther = parseEther('1');

  const utilizationRatioD18 = oneEther.mul(
    dnGmxSeniorVault_totalUsdcBorrowed.div(dnGmxSeniorVault_totalAssets)
  );

  const earnedInterestRateD18 = oneEther.mul(
    dnGmxJuniorVault_dnUsdcDeposited
      .add(dnGmxSeniorVault_totalAssets)
      .div(dnGmxSeniorVault_totalAssets)
  );

  const withdrawableAmountD18 = dnGmxSeniorVault_previewWithdraw_totalSupply;

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
      withdrawableAmountD18,
    },
  };
}
