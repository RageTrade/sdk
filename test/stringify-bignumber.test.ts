import { toBigInt } from 'ethers';
import { stringifyBigNumber } from '../dist';

describe('stringify-bignumber', () => {
  it('works for BigNumber', async () => {
    stringifyBigNumber('12');
  });

  it('works for object containing BigNumber 1', async () => {
    const input = {
      val1: 2,
      val2: 3,
      val3: toBigInt(49),
    };
    const result = stringifyBigNumber(input);

    expect(result.val1).toEqual(input.val1);
    expect(result.val2).toEqual(input.val2);

    // typescript test to ensure val3 is string
    const temp: string = result.val3;
    expect(temp).toEqual(input.val3.toString());
  });

  it('works for nested object containing BigNumber', async () => {
    const input = {
      val1: 2,
      val2: 3,
      val3: { a: toBigInt(49), b: 34 },
    };
    const result = stringifyBigNumber(input);

    expect(result.val1).toEqual(input.val1);
    expect(result.val2).toEqual(input.val2);
    expect(result.val3.b).toEqual(input.val3.b);

    // typescript test to ensure val3 is string
    const temp: string = result.val3.a;
    expect(temp).toEqual(input.val3.a.toString());
  });
});
