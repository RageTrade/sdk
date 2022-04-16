import { ethers } from 'ethers';

import { config } from 'dotenv';
import { getContracts } from '../dist';
config();

describe('curve strategy', () => {
  it('works', async () => {
    const provider = new ethers.providers.StaticJsonRpcProvider(
      'https://arb-rinkeby.g.alchemy.com/v2/' + process.env.ALCHEMY_KEY
    );
    const { curveYieldStrategy } = await getContracts(provider);
    const fee = await curveYieldStrategy.FEE();
    expect(fee.toNumber()).toEqual(0);
  });
});
