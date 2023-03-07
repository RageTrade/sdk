import { BigNumberish, toBigInt } from 'ethers';
import { fromQ128, Q128 } from './fixed-point';

export function formatFundingRate(fundingRateX128: BigNumberish) {
  fundingRateX128 = toBigInt(fundingRateX128);
  return fromQ128(fundingRateX128) * 3600 * 100;
}

export function getFundingRate(
  realPriceX128: BigNumberish,
  virtualPriceX128: BigNumberish
) {
  realPriceX128 = toBigInt(realPriceX128);
  virtualPriceX128 = toBigInt(virtualPriceX128);

  return (
    (Q128 * (realPriceX128 - virtualPriceX128)) /
    realPriceX128 /
    toBigInt(1 * 24 * 60 * 60)
  );
}

export function nextAX128(
  timestampLast: number,
  blockTimestamp: number,
  fundingRateX128: BigNumberish,
  virtualPriceX128: BigNumberish
) {
  fundingRateX128 = toBigInt(fundingRateX128);
  virtualPriceX128 = toBigInt(virtualPriceX128);

  return (
    ((fundingRateX128 * virtualPriceX128) / Q128) *
    toBigInt(blockTimestamp - timestampLast)
  );
}

export function extrapolatedSumAX128(
  sumAX128: BigNumberish,
  timestampLast: number,
  blockTimestamp: number,
  fundingRateX128: BigNumberish,
  virtualPriceX128: BigNumberish
) {
  sumAX128 = toBigInt(sumAX128);
  fundingRateX128 = toBigInt(fundingRateX128);
  virtualPriceX128 = toBigInt(virtualPriceX128);
  return (
    sumAX128 +
    nextAX128(timestampLast, blockTimestamp, fundingRateX128, virtualPriceX128)
  );
}

export function extrapolatedSumFpX128(
  sumAX128: BigNumberish,
  sumBX128: BigNumberish,
  sumFpX128: BigNumberish,
  sumAGlobalX128: BigNumberish
) {
  sumAX128 = toBigInt(sumAX128);
  sumBX128 = toBigInt(sumBX128);
  sumFpX128 = toBigInt(sumFpX128);
  sumAGlobalX128 = toBigInt(sumAGlobalX128);

  return sumFpX128 + (sumBX128 * (sumAGlobalX128 - sumAX128)) / Q128;
}

export function fpBillForLp(
  sumAX128: BigNumberish,
  sumFpInsideX128: BigNumberish,
  sumALastX128: BigNumberish,
  sumBInsideLastX128: BigNumberish,
  sumFpInsideLastX128: BigNumberish,
  liquidity: BigNumberish
) {
  sumAX128 = toBigInt(sumAX128);
  sumFpInsideX128 = toBigInt(sumFpInsideX128);
  sumALastX128 = toBigInt(sumALastX128);
  sumBInsideLastX128 = toBigInt(sumBInsideLastX128);
  sumFpInsideLastX128 = toBigInt(sumFpInsideLastX128);
  liquidity = toBigInt(liquidity);
  const intermediate =
    (sumFpInsideX128 -
      extrapolatedSumFpX128(
        sumALastX128,
        sumBInsideLastX128,
        sumFpInsideLastX128,
        sumAX128
      )) *
    liquidity;
  // mulDivRoundingDown
  return intermediate / Q128 - (intermediate % Q128 === 0n ? 0n : 1n);
}

export function fpBillForTrader(
  sumAX128: BigNumberish,
  sumALastX128: BigNumberish,
  netTraderPosition: BigNumberish
) {
  sumAX128 = toBigInt(sumAX128);
  sumALastX128 = toBigInt(sumALastX128);
  netTraderPosition = toBigInt(netTraderPosition);
  return (netTraderPosition * (sumAX128 - sumALastX128)) / Q128;
}
