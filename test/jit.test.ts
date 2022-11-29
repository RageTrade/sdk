import { ethers } from 'ethers';

import { config } from 'dotenv';
import { deltaNeutralGmxJIT, deltaNeutralGmxVaults } from '../dist';

config();

describe('curve strategy', () => {
  describe('arbmain', () => {
    const provider = new ethers.providers.StaticJsonRpcProvider(
      'https://arb1.arbitrum.io/rpc'
    );

    it('junior vault used in JIT is consistent', async () => {
      const { dnGmxRouter } = await deltaNeutralGmxJIT.getContracts(provider);
      const { dnGmxBatchingManager, dnGmxJuniorVault } =
        await deltaNeutralGmxVaults.getContracts(provider);

      expect(await dnGmxRouter.dnGmxJuniorVault()).toEqual(
        dnGmxJuniorVault.address
      );
      expect(await dnGmxRouter.dnGmxBatchingManager()).toEqual(
        dnGmxBatchingManager.address
      );
    });
  });
});
