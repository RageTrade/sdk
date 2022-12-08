import { ethers } from 'ethers';

import { config } from 'dotenv';
import {
  deltaNeutralGmxJIT,
  deltaNeutralGmxVaults,
  getProvider,
} from '../dist';

config();

jest.setTimeout(200_000);

describe('jit', () => {
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

    // it(
    //   'should have same proxy admin as junior vault'
    //   // , async () => {
    //   //   const { dnGmxRouter } = await deltaNeutralGmxJIT.getContracts(provider);
    //   //   const { proxyAdmin, dnGmxJuniorVault } =
    //   //     await deltaNeutralGmxVaults.getContracts(provider);

    //   // }
    // );
  });
  describe('arbgoerli', () => {
    const provider = getProvider('arbgoerli');

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
