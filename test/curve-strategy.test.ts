import { ethers } from 'ethers';

import { config } from 'dotenv';
import { CurveYieldStrategy, getVaultContracts } from '../dist';

let curveYieldStrategy: CurveYieldStrategy;

config();

describe('curve strategy', () => {
  const provider = new ethers.providers.StaticJsonRpcProvider(
    'https://arb-rinkeby.g.alchemy.com/v2/' + process.env.ALCHEMY_KEY
  );

  it('works', async () => {
    ({ curveYieldStrategy } = await getVaultContracts(provider));
    const fee = await curveYieldStrategy.FEE();
    expect(fee.toNumber()).toEqual(0);
  });
});
