import { slippageToSqrtPriceLimit, Q96, fromQ96 } from '../src/';

describe('slippage', () => {
  it('works', () => {
    const {
      sqrtPriceLimitX96ForBuy,
      sqrtPriceLimitX96ForSell,
    } = slippageToSqrtPriceLimit(0.01, Q96.mul(3000));

    expect(fromQ96(sqrtPriceLimitX96ForBuy, 2)).toEqual(3030);
    expect(fromQ96(sqrtPriceLimitX96ForSell, 2)).toEqual(2970);
  });
});
