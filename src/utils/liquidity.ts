import {
  TickMath,
  maxLiquidityForAmounts as maxLiquidityForAmounts_,
  SqrtPriceMath,
} from '@uniswap/v3-sdk';
import { toBigInt, BigNumberish, toNumber } from 'ethers';
import JSBI from 'jsbi';

export function maxLiquidityForAmounts(
  sqrtPriceCurrent: BigNumberish,
  tickLower: BigNumberish,
  tickUpper: BigNumberish,
  vQuoteAmount: BigNumberish,
  vTokenAmount: BigNumberish,
  useFullPrecision: boolean
) {
  sqrtPriceCurrent = toBigInt(sqrtPriceCurrent);
  tickLower = toNumber(tickLower);
  tickUpper = toNumber(tickUpper);
  vQuoteAmount = toBigInt(vQuoteAmount);
  vTokenAmount = toBigInt(vTokenAmount);
  let [amount0, amount1] = [
    JSBI.BigInt(vTokenAmount.toString()),
    JSBI.BigInt(vQuoteAmount.toString()),
  ];

  return toBigInt(
    maxLiquidityForAmounts_(
      JSBI.BigInt(sqrtPriceCurrent.toString()),
      TickMath.getSqrtRatioAtTick(tickLower),
      TickMath.getSqrtRatioAtTick(tickUpper),
      JSBI.BigInt(amount0.toString()),
      JSBI.BigInt(amount1.toString()),
      useFullPrecision
    ).toString()
  );
}

export function amountsForLiquidity(
  tickLower: BigNumberish,
  sqrtPriceCurrent: BigNumberish,
  tickUpper: BigNumberish,
  liquidity: BigNumberish,
  roundUp?: boolean
) {
  tickLower = toNumber(tickLower);
  tickUpper = toNumber(tickUpper);
  if (roundUp === undefined) roundUp = liquidity > 0;
  const liquidityJSBI = JSBI.BigInt(toBigInt(liquidity).toString());
  const sqrtPriceLowerJSBI = TickMath.getSqrtRatioAtTick(tickLower);
  const sqrtPriceUpperJSBI = TickMath.getSqrtRatioAtTick(tickUpper);
  const sqrtPriceCurrentJSBI = JSBI.BigInt(sqrtPriceCurrent.toString());
  let sqrtPriceMiddleJSBI = sqrtPriceCurrentJSBI;
  if (JSBI.lessThan(sqrtPriceMiddleJSBI, sqrtPriceLowerJSBI)) {
    sqrtPriceMiddleJSBI = sqrtPriceLowerJSBI;
  } else if (JSBI.greaterThan(sqrtPriceMiddleJSBI, sqrtPriceUpperJSBI)) {
    sqrtPriceMiddleJSBI = sqrtPriceUpperJSBI;
  }

  let amount0 = SqrtPriceMath.getAmount0Delta(
    sqrtPriceMiddleJSBI,
    sqrtPriceUpperJSBI,
    liquidityJSBI,
    roundUp
  );
  let amount1 = SqrtPriceMath.getAmount1Delta(
    sqrtPriceLowerJSBI,
    sqrtPriceMiddleJSBI,
    liquidityJSBI,
    roundUp
  );

  let vTokenAmount = amount0;
  let vQuoteAmount = amount1;

  return {
    vQuoteAmount: toBigInt(vQuoteAmount.toString()),
    vTokenAmount: toBigInt(vTokenAmount.toString()),
  };
}
