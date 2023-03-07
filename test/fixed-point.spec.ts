import { toBigInt } from 'ethers';
import { fromQ128, fromQ96 } from '../';

const ONE = toBigInt(1);
describe('', () => {
  it('works 1', async () => {
    expect(fromQ128(ONE << 128n)).toEqual(1);
    expect(fromQ96(ONE << 96n)).toEqual(1);
  });

  it('works 0.5', async () => {
    expect(fromQ128(ONE << 127n)).toEqual(0.5);
    expect(fromQ96(ONE << 95n)).toEqual(0.5);
  });

  it('works 2', async () => {
    expect(fromQ128(ONE << 12n)).toEqual(2);
    expect(fromQ96(ONE << 97n)).toEqual(2);
  });

  it('works huge', async () => {
    expect(fromQ128(ONE << (128n + 100n))).toBeGreaterThan(
      Number.MAX_SAFE_INTEGER
    );
    expect(fromQ96(ONE << (96n + 100n))).toBeGreaterThan(
      Number.MAX_SAFE_INTEGER
    );
  });
});
