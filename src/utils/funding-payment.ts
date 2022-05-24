import { BigNumberish, BigNumber } from 'ethers';
import { fromQ128, Q128 } from './fixed-point';

export function formatFundingRate(fundingRateX128: BigNumberish) {
  fundingRateX128 = BigNumber.from(fundingRateX128);
  return fromQ128(fundingRateX128) * 3600 * 100;
}

export function getFundingRate(
  realPriceX128: BigNumberish,
  virtualPriceX128: BigNumberish
) {
  realPriceX128 = BigNumber.from(realPriceX128);
  virtualPriceX128 = BigNumber.from(virtualPriceX128);

  return Q128.mul(realPriceX128.sub(virtualPriceX128))
    .div(realPriceX128)
    .div(1 * 24 * 60 * 60);
}

export function nextAX128(
  timestampLast: number,
  blockTimestamp: number,
  fundingRateX128: BigNumberish,
  virtualPriceX128: BigNumberish
) {
  fundingRateX128 = BigNumber.from(fundingRateX128);
  virtualPriceX128 = BigNumber.from(virtualPriceX128);

  return fundingRateX128
    .mul(virtualPriceX128)
    .div(Q128)
    .mul(blockTimestamp - timestampLast);
}

export function extrapolatedSumAX128(
  sumAX128: BigNumberish,
  timestampLast: number,
  blockTimestamp: number,
  fundingRateX128: BigNumberish,
  virtualPriceX128: BigNumberish
) {
  sumAX128 = BigNumber.from(sumAX128);
  fundingRateX128 = BigNumber.from(fundingRateX128);
  virtualPriceX128 = BigNumber.from(virtualPriceX128);
  return sumAX128.add(
    nextAX128(timestampLast, blockTimestamp, fundingRateX128, virtualPriceX128)
  );
}

export function extrapolatedSumFpX128(
  sumAX128: BigNumberish,
  sumBX128: BigNumberish,
  sumFpX128: BigNumberish,
  sumAGlobalX128: BigNumberish
) {
  sumAX128 = BigNumber.from(sumAX128);
  sumBX128 = BigNumber.from(sumBX128);
  sumFpX128 = BigNumber.from(sumFpX128);
  sumAGlobalX128 = BigNumber.from(sumAGlobalX128);

  return sumFpX128.add(sumBX128.mul(sumAGlobalX128.sub(sumAX128)).div(Q128));
}

export function fpBillForLp(
  sumAX128: BigNumberish,
  sumFpInsideX128: BigNumberish,
  sumALastX128: BigNumberish,
  sumBInsideLastX128: BigNumberish,
  sumFpInsideLastX128: BigNumberish,
  liquidity: BigNumberish
) {
  sumAX128 = BigNumber.from(sumAX128);
  sumFpInsideX128 = BigNumber.from(sumFpInsideX128);
  sumALastX128 = BigNumber.from(sumALastX128);
  sumBInsideLastX128 = BigNumber.from(sumBInsideLastX128);
  sumFpInsideLastX128 = BigNumber.from(sumFpInsideLastX128);
  liquidity = BigNumber.from(liquidity);
  const intermediate = sumFpInsideX128
    .sub(
      extrapolatedSumFpX128(
        sumALastX128,
        sumBInsideLastX128,
        sumFpInsideLastX128,
        sumAX128
      )
    )
    .mul(liquidity);
  // mulDivRoundingDown
  return intermediate.div(Q128).sub(intermediate.mod(Q128).eq(0) ? 0 : 1);
}

export function fpBillForTrader(
  sumAX128: BigNumberish,
  sumALastX128: BigNumberish,
  netTraderPosition: BigNumberish
) {
  sumAX128 = BigNumber.from(sumAX128);
  sumALastX128 = BigNumber.from(sumALastX128);
  netTraderPosition = BigNumber.from(netTraderPosition);
  return netTraderPosition.mul(sumAX128.sub(sumALastX128)).div(Q128);
}
