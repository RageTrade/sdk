import { ethers } from 'ethers';

import { config } from 'dotenv';
import { getCoreContracts, getTokenContracts } from '../dist';

config();

describe('tokens', () => {
  const providers: [string, ethers.providers.Provider][] = [
    [
      'arbmain',
      new ethers.providers.StaticJsonRpcProvider(
        'https://arb1.arbitrum.io/rpc'
      ),
    ],
    [
      'arbtest',
      new ethers.providers.StaticJsonRpcProvider(
        'https://arb-rinkeby.g.alchemy.com/v2/' + process.env.ALCHEMY_KEY
      ),
    ],
  ];

  for (const [name, provider] of providers) {
    describe(name, () => {
      it('usdc is same', async () => {
        const { settlementToken } = await getCoreContracts(provider);
        const { usdc } = await getTokenContracts(provider);
        expect(settlementToken.address).toEqual(usdc.address);
      });
    });
  }
});
