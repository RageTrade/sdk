import { TickMath } from '@uniswap/v3-sdk';
import { BigNumber } from 'ethers';
import { sqrtPriceX96ToPrice } from '../dist';
import { slippageToSqrtPriceLimit } from '../src/';

const MIN_SQRT_RATIO = BigNumber.from(
  '0x' + TickMath.MIN_SQRT_RATIO.toString(16)
);

describe('slippage', () => {
  it('works for small slippage', async () => {
    const sqrtPriceCurrent = '0x036b55100d8147fc7ac63a';
    const priceCurrent = await sqrtPriceX96ToPrice(sqrtPriceCurrent, 6, 18);
    const slippage = 0.001;
    const { sqrtPriceLimitX96ForBuy, sqrtPriceLimitX96ForSell } =
      slippageToSqrtPriceLimit(slippage, sqrtPriceCurrent);

    const priceLimitBuy = await sqrtPriceX96ToPrice(
      sqrtPriceLimitX96ForBuy,
      6,
      18
    );
    const priceLimitSell = await sqrtPriceX96ToPrice(
      sqrtPriceLimitX96ForSell,
      6,
      18
    );

    expect(
      Math.round(
        (Math.abs(priceLimitBuy - priceCurrent) / priceCurrent) * 1000
      ) / 1000
    ).toEqual(slippage);
    expect(
      Math.round(
        (Math.abs(priceLimitSell - priceCurrent) / priceCurrent) * 1000
      ) / 1000
    ).toEqual(slippage);
  });

  it('works for huge slippage', async () => {
    const sqrtPriceCurrent = '0x036b55100d8147fc7ac63a';
    const priceCurrent = await sqrtPriceX96ToPrice(sqrtPriceCurrent, 6, 18);
    const slippage = 100;
    const { sqrtPriceLimitX96ForBuy, sqrtPriceLimitX96ForSell } =
      slippageToSqrtPriceLimit(slippage, sqrtPriceCurrent);

    const priceLimitBuy = await sqrtPriceX96ToPrice(
      sqrtPriceLimitX96ForBuy,
      6,
      18
    );

    expect(
      Math.round(
        (Math.abs(priceLimitBuy - priceCurrent) / priceCurrent) * 1000
      ) / 1000
    ).toEqual(slippage);
    expect(sqrtPriceLimitX96ForSell).toEqual(MIN_SQRT_RATIO);
  });
});
