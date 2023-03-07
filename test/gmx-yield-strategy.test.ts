import { JsonRpcProvider, stripZerosLeft, zeroPadBytes } from 'ethers';

import { config } from 'dotenv';
import { GMXYieldStrategy, gmxProtocol, gmxVault, tokens } from '../dist';

let gmxYieldStrategy: GMXYieldStrategy;

config();

describe('gmx strategy', () => {
  describe('arbmain', () => {
    const provider = new JsonRpcProvider('https://arb1.arbitrum.io/rpc');

    // it('works', async () => {
    //   ({ curveYieldStrategy } = await getTricryptoVaultContracts(provider));
    //   const fee = await curveYieldStrategy.FEE();
    //   expect(fee.toNumber()).toEqual(1000);
    // });

    it('works token contracts', async () => {
      const { sGLP } = await gmxProtocol.getContracts(provider);
      const { fsGLP } = await tokens.getContracts(provider);
      const sgt = await sGLP.stakedGlpTracker();
      expect(await fsGLP.getAddress()).toEqual(sgt);
    });

    // it('works vault', async () => {
    //   const { gmxUnderlyingVault, glpManager } = await getGmxVaultContracts(
    //     provider
    //   );
    //   const vaultAddr = await glpManager.vault();
    //   expect(gmxUnderlyingVault.address).toEqual(vaultAddr);
    // });
  });

  describe('arbgoerli', () => {
    const provider = new JsonRpcProvider(
      'https://arb-goerli.g.alchemy.com/v2/' + process.env.ALCHEMY_KEY
    );

    it('works', async () => {
      ({ gmxYieldStrategy } = await gmxVault.getContracts(provider));
      const fee = await gmxYieldStrategy.MAX_BPS();
      expect(fee).toEqual(10000);
    });

    it('works token contracts', async () => {
      const { sGLP } = await gmxProtocol.getContracts(provider);
      const { fsGLP } = await tokens.getContracts(provider);
      const sgt = await sGLP.stakedGlpTracker();
      expect(sgt).toEqual(await fsGLP.getAddress());
    });

    it('works vault', async () => {
      const { gmxUnderlyingVault, glpManager } = await gmxProtocol.getContracts(
        provider
      );
      const vaultAddr = await glpManager.vault();
      expect(await gmxUnderlyingVault.getAddress()).toEqual(vaultAddr);
    });

    it('works strategy contracts', async () => {
      const { glpManager } = await gmxProtocol.getContracts(provider);
      const { glpStakingManager } = await gmxVault.getContracts(provider);

      const val = await provider.getStorage(glpStakingManager, 261);

      expect(zeroPadBytes(stripZerosLeft(val), 20)).toEqual(
        (await glpManager.getAddress()).toLocaleLowerCase()
      );
    });
  });
});
