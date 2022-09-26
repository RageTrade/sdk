import { ethers } from 'ethers';

import { config } from 'dotenv';
import { GMXYieldStrategy, gmxProtocol, gmxVault, tokens } from '../dist';
import { hexStripZeros, hexZeroPad } from 'ethers/lib/utils';

let gmxYieldStrategy: GMXYieldStrategy;

config();

describe('gmx strategy', () => {
  describe('arbmain', () => {
    const provider = new ethers.providers.StaticJsonRpcProvider(
      'https://arb1.arbitrum.io/rpc'
    );

    // it('works', async () => {
    //   ({ curveYieldStrategy } = await getTricryptoVaultContracts(provider));
    //   const fee = await curveYieldStrategy.FEE();
    //   expect(fee.toNumber()).toEqual(1000);
    // });

    it('works token contracts', async () => {
      const { sGLP } = await gmxProtocol.getContracts(provider);
      const { fsGLP } = await tokens.getContracts(provider);
      const sgt = await sGLP.stakedGlpTracker();
      expect(fsGLP.address).toEqual(sgt);
    });

    // it('works vault', async () => {
    //   const { gmxUnderlyingVault, glpManager } = await getGmxVaultContracts(
    //     provider
    //   );
    //   const vaultAddr = await glpManager.vault();
    //   expect(gmxUnderlyingVault.address).toEqual(vaultAddr);
    // });
  });

  describe('arbtest', () => {
    const provider = new ethers.providers.StaticJsonRpcProvider(
      'https://arb-rinkeby.g.alchemy.com/v2/' + process.env.ALCHEMY_KEY
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
      expect(sgt).toEqual(fsGLP.address);
    });

    it('works vault', async () => {
      const { gmxUnderlyingVault, glpManager } = await gmxProtocol.getContracts(
        provider
      );
      const vaultAddr = await glpManager.vault();
      expect(gmxUnderlyingVault.address).toEqual(vaultAddr);
    });

    it('works strategy contracts', async () => {
      const { glpManager } = await gmxProtocol.getContracts(provider);
      const { glpStakingManager } = await gmxVault.getContracts(provider);

      const val = await provider.getStorageAt(glpStakingManager.address, 261);

      expect(hexZeroPad(hexStripZeros(val), 20)).toEqual(
        glpManager.address.toLocaleLowerCase()
      );
    });
  });

  describe('arbgoerli', () => {
    const provider = new ethers.providers.StaticJsonRpcProvider(
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
      expect(sgt).toEqual(fsGLP.address);
    });

    it('works vault', async () => {
      const { gmxUnderlyingVault, glpManager } = await gmxProtocol.getContracts(
        provider
      );
      const vaultAddr = await glpManager.vault();
      expect(gmxUnderlyingVault.address).toEqual(vaultAddr);
    });

    it('works strategy contracts', async () => {
      const { glpManager } = await gmxProtocol.getContracts(provider);
      const { glpStakingManager } = await gmxVault.getContracts(provider);

      const val = await provider.getStorageAt(glpStakingManager.address, 261);

      expect(hexZeroPad(hexStripZeros(val), 20)).toEqual(
        glpManager.address.toLocaleLowerCase()
      );
    });
  });
});
