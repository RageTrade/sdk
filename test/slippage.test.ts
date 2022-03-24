import { sqrtPriceX96ToPrice } from '../dist';
import { slippageToSqrtPriceLimit } from '../src/';

describe('slippage', () => {
  it('works 2', async () => {
    const sqrtPriceCurrent = '0x036b55100d8147fc7ac63a';
    const priceCurrent = await sqrtPriceX96ToPrice(sqrtPriceCurrent, 6, 18);
    const slippage = 0.001;
    const {
      sqrtPriceLimitX96ForBuy,
      sqrtPriceLimitX96ForSell,
    } = slippageToSqrtPriceLimit(slippage, sqrtPriceCurrent);

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
});
