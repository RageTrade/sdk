import { formatError } from '../dist';

describe('formatError', () => {
  it('check', async () => {
    expect(
      formatError(
        '0xc8a3942dfffffffffffffffffffffffffffffffffffffffffffffffffffffff99ee12e5b00000000000000000000000000000000000000000000000000000000d26b8755'
      )
    ).toEqual('InvalidTransactionNotEnoughMargin(-27399213477,3530262357)');
  });
});
