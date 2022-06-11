import { BigNumber } from 'ethers';
import { fromQ128, fromQ96 } from '../';

const ONE = BigNumber.from(1);
describe('', () => {
  it('works 1', async () => {
    expect(fromQ128(ONE.shl(128))).toEqual(1);
    expect(fromQ96(ONE.shl(96))).toEqual(1);
  });

  it('works 0.5', async () => {
    expect(fromQ128(ONE.shl(127))).toEqual(0.5);
    expect(fromQ96(ONE.shl(95))).toEqual(0.5);
  });

  it('works 2', async () => {
    expect(fromQ128(ONE.shl(129))).toEqual(2);
    expect(fromQ96(ONE.shl(97))).toEqual(2);
  });

  it('works huge', async () => {
    expect(fromQ128(ONE.shl(128 + 100))).toBeGreaterThan(
      Number.MAX_SAFE_INTEGER
    );
    expect(fromQ96(ONE.shl(96 + 100))).toBeGreaterThan(Number.MAX_SAFE_INTEGER);
  });
});
