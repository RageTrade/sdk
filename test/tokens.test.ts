import { ethers } from 'ethers';

import { config } from 'dotenv';
import {
  getCoreContracts,
  getGmxVaultContracts,
  getTokenContracts,
  getTricryptoVaultContracts,
} from '../dist';

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

      it('crv3 is same', async () => {
        const { curveYieldStrategy } = await getTricryptoVaultContracts(
          provider
        );
        const { crv3 } = await getTokenContracts(provider);
        expect(await curveYieldStrategy.asset()).toEqual(crv3.address);
      });

      // TODO remove if check after mainnet deploy
      if (name === 'arbtest') {
        it('gmx is same', async () => {
          const gvc = await getGmxVaultContracts(provider);
          const tc = await getTokenContracts(provider);
          expect(gvc.gmx.address).toEqual(tc.gmx.address);
        });
      }
    });
  }
});
