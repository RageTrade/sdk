import { BigNumber, BigNumberish } from 'ethers';
import { toQ96, Q96 } from './fixed-point';

/**
 *
 * @param slippage A fractional number between 0 and 1. 3% slippage is 0.03
 * @param sqrtPriceCurrent The current sqrt price of the token in the market
 * @returns
 */
export function slippageToSqrtPriceLimit(
  slippage: number,
  sqrtPriceCurrent: BigNumberish
) {
  sqrtPriceCurrent = BigNumber.from(sqrtPriceCurrent);
  const slippageX96 = toQ96(slippage);
  return {
    sqrtPriceLimitX96ForBuy: sqrtPriceCurrent
      .mul(Q96.add(slippageX96))
      .div(Q96),
    sqrtPriceLimitX96ForSell: sqrtPriceCurrent
      .mul(Q96.sub(slippageX96))
      .div(Q96),
  };
}
