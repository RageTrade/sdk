import { TickMath } from '@uniswap/v3-sdk';
import { BigNumber, BigNumberish } from 'ethers';
import { toQ96, Q96 } from './fixed-point';

const MIN_SQRT_RATIO = BigNumber.from(
  '0x' + TickMath.MIN_SQRT_RATIO.toString(16)
);
const MAX_SQRT_RATIO = BigNumber.from(
  '0x' + TickMath.MAX_SQRT_RATIO.toString(16)
);

/**
 * Calculate the sqrt price limit given the slippage.
 * @param slippage A fractional number between 0 and 1. 3% slippage is 0.03
 * @param sqrtPriceCurrent The current sqrt price of the token in the market
 * @returns
 */
export function slippageToSqrtPriceLimit(
  slippage: number,
  sqrtPriceCurrent: BigNumberish
) {
  sqrtPriceCurrent = BigNumber.from(sqrtPriceCurrent);
  const slippagePlusX96 = toQ96(Math.sqrt(1 + slippage));
  const slippageMinusX96 = toQ96(Math.sqrt(slippage < 1 ? 1 - slippage : 0));

  let sqrtPriceLimitX96ForBuy = sqrtPriceCurrent.mul(slippagePlusX96).div(Q96);
  if (sqrtPriceLimitX96ForBuy.gt(MAX_SQRT_RATIO)) {
    sqrtPriceLimitX96ForBuy = MAX_SQRT_RATIO;
  }

  let sqrtPriceLimitX96ForSell = sqrtPriceCurrent
    .mul(slippageMinusX96)
    .div(Q96);
  if (sqrtPriceLimitX96ForSell.lt(MIN_SQRT_RATIO)) {
    sqrtPriceLimitX96ForSell = MIN_SQRT_RATIO;
  }
  return { sqrtPriceLimitX96ForBuy, sqrtPriceLimitX96ForSell };
}
