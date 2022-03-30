import { BigNumber, BigNumberish } from '@ethersproject/bignumber';
import {
  priceToPriceX128,
  priceToSqrtPriceX96,
  priceX128ToPrice,
  priceX128ToSqrtPriceX96,
  sqrtPriceX96ToPrice,
  sqrtPriceX96ToPriceX128,
} from '../';

describe('price-tick util', () => {
  const vQuote = 18;
  const vToken = 18;

  const testCases: Array<{
    price: number;
    priceX128: BigNumberish;
    sqrtPriceX96: BigNumberish;
  }> = [
    {
      price: 1,
      priceX128: BigNumber.from(1).shl(128), // 1n << 128n,
      sqrtPriceX96: BigNumber.from(1).shl(96), // 1n << 96n,
    },
    {
      price: 0.25,
      priceX128: BigNumber.from(1).shl(126), // 1n << 126n,
      sqrtPriceX96: BigNumber.from(1).shl(95), // 1n << 95n,
    },
    {
      price: 4,
      priceX128: BigNumber.from(1).shl(130), // 1n << 130n,
      sqrtPriceX96: BigNumber.from(1).shl(97), // 1n << 97n,
    },
  ];

  describe('#priceToPriceX128', () => {
    for (const { price, priceX128 } of testCases) {
      it(`${price} == ${priceX128}(X128)`, async () => {
        expect(await priceToPriceX128(price, vQuote, vToken)).toEqual(
          priceX128
        );
        expect(
          roundUp(await priceX128ToPrice(priceX128, vQuote, vToken))
        ).toEqual(price);
      });
    }
  });

  describe('#priceX128ToSqrtPriceX96', () => {
    for (const { priceX128, sqrtPriceX96 } of testCases) {
      it(`sqrt(${priceX128}(X128)) == ${sqrtPriceX96}(X96)`, async () => {
        expect(priceX128ToSqrtPriceX96(priceX128)).toEqual(sqrtPriceX96);
        expect(sqrtPriceX96ToPriceX128(sqrtPriceX96)).toEqual(priceX128);
      });
    }
  });

  describe('#priceToSqrtPriceX96', () => {
    for (const { price, sqrtPriceX96 } of testCases) {
      it(`sqrt(${price}) == ${sqrtPriceX96}(X96)`, async () => {
        expect(await priceToSqrtPriceX96(price, vQuote, vToken)).toEqual(
          sqrtPriceX96
        );
        expect(
          roundUp(await sqrtPriceX96ToPrice(sqrtPriceX96, vQuote, vToken))
        ).toEqual(price);
      });
    }
  });
});

function roundUp(num: number) {
  return Math.ceil(num * 10 ** 10) / 10 ** 10;
}
