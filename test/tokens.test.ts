import { JsonRpcProvider, Provider } from 'ethers';

import { config } from 'dotenv';
import { core, tokens, tricryptoVault, gmxProtocol, aave } from '../dist';

config();

describe('tokens', () => {
  const providers: [string, Provider][] = [
    ['arbmain', new JsonRpcProvider('https://arb1.arbitrum.io/rpc')],
    [
      'arbgoerli',
      new JsonRpcProvider(
        'https://arb-goerli.g.alchemy.com/v2/' + process.env.ALCHEMY_KEY
      ),
    ],
  ];

  for (const [name, provider] of providers) {
    describe(name, () => {
      it('usdc is same', async () => {
        const { settlementToken } = await core.getContracts(provider);
        const { usdc } = await tokens.getContracts(provider);
        expect(await settlementToken.getAddress()).toEqual(
          await usdc.getAddress()
        );
      });

      it('crv3 is same', async () => {
        const { curveYieldStrategy } = await tricryptoVault.getContracts(
          provider
        );
        const { crv3 } = await tokens.getContracts(provider);
        expect(await curveYieldStrategy.asset()).toEqual(
          await crv3.getAddress()
        );
      });

      // TODO remove if check after mainnet deploy
      if (name === 'arbgoerli') {
        it('gmx is same', async () => {
          const gpc = await gmxProtocol.getContracts(provider);
          const tc = await tokens.getContracts(provider);
          expect(gpc.gmx.getAddress()).toEqual(await tc.gmx.getAddress());
        });

        it('aUsdc is proper', async () => {
          const { aUsdc } = await aave.getContracts(provider);
          const { usdc } = await tokens.getContracts(provider);
          expect(await aUsdc.UNDERLYING_ASSET_ADDRESS()).toEqual(
            await usdc.getAddress()
          );
        });

        it('aUsdt is proper', async () => {
          const { aUsdt } = await aave.getContracts(provider);
          const { usdt } = await tokens.getContracts(provider);
          expect(await aUsdt.UNDERLYING_ASSET_ADDRESS()).toEqual(
            await usdt.getAddress()
          );
        });

        it('aWeth is proper', async () => {
          const { aWeth } = await aave.getContracts(provider);
          const { weth } = await tokens.getContracts(provider);
          expect(await aWeth.UNDERLYING_ASSET_ADDRESS()).toEqual(
            await weth.getAddress()
          );
        });

        it('aWeth is proper', async () => {
          const { aWeth } = await aave.getContracts(provider);
          const { weth } = await tokens.getContracts(provider);
          expect(await aWeth.UNDERLYING_ASSET_ADDRESS()).toEqual(
            await weth.getAddress()
          );
        });
      }
    });
  }
});
