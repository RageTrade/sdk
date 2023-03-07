import { toBigInt } from 'ethers';
import { toQ128, nextAX128, getFundingRate, Q128 } from '../';

const p99 = toQ128(99);
const p100 = toQ128(100);
const p101 = toQ128(101);

describe('FundingPayment', () => {
  describe('#getFundingRate', () => {
    it('works', () => {
      const fr = getFundingRate(p100, p100);
      expect(fr).toEqual(toBigInt(0));
    });
    it('works2', () => {
      const fr = getFundingRate(p101, p100);
      expect(fr).toEqual(
        (Q128 * (p101 - p100)) / p101 / toBigInt(1 * 24 * 60 * 60)
      );
    });
  });
  describe('#a', () => {
    it('rp=101 vp=100 dt=10', async () => {
      const fr = getFundingRate(p101, p100);
      const a = nextAX128(10, 20, fr, p100);
      expect(a > 0n).toBeTruthy();
      expect(a).toEqual(((fr * p100) / Q128) * (20n - 10n)); // (101-100)/101 * 100 * (20-10) / DAY
    });

    it('rp=99 vp=100 dt=10', async () => {
      const fr = getFundingRate(p99, p100);
      const a = nextAX128(10, 20, fr, p100);
      expect(a > 0n).toBeFalsy();
      expect(a).toEqual(((fr * p100) / Q128) * (20n - 10n)); // (101-100)/101 * 100 * (20-10) / DAY
    });
  });
});
