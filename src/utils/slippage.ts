import { BigNumber, BigNumberish } from 'ethers';
import { toQ96, Q96 } from './fixed-point';

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
  const slippageMinusX96 = toQ96(Math.sqrt(1 - slippage));

  return {
    sqrtPriceLimitX96ForBuy: sqrtPriceCurrent.mul(slippagePlusX96).div(Q96),
    sqrtPriceLimitX96ForSell: sqrtPriceCurrent.mul(slippageMinusX96).div(Q96),
  };
}
