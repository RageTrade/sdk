import { config } from 'dotenv';
import { ethers } from 'ethers';

import {
  EthersProviderDataSource,
  getDefaultDataSourceSync,
  tricryptoVault,
  pools,
} from '../dist';

config();

jest.setTimeout(200_000);

const provider = new ethers.providers.StaticJsonRpcProvider(
  'https://arb1.arbitrum.io/rpc'
);

describe('default data source', () => {
  describe('arbmain', () => {
    it('getAccountIdsByAddress', async () => {
      const ds = getDefaultDataSourceSync('arbmain', provider);
      const { curveYieldStrategy } = await tricryptoVault.getContracts(
        provider
      );

      try {
        const resp = await ds.getAccountIdsByAddress(
          curveYieldStrategy.address
        );
        expect(resp.result).toEqual([0]);
      } catch (e) {
        console.log(e);
        throw e;
      }
    });

    it('findBlockByTimestamp', async () => {
      const ds = getDefaultDataSourceSync('arbmain', [provider]);
      const resp = await ds.findBlockByTimestamp(1660048813);

      expect(resp.result).toEqual(19803868);
    });

    it('getPrices', async () => {
      const ds = getDefaultDataSourceSync(
        'arbmain',
        new EthersProviderDataSource(provider)
      );
      const resp = await ds.getPrices(Number(pools.arbmain[0].poolId));

      expect(resp.result.realPrice).toBeGreaterThan(0);
      expect(resp.result.realTwapPrice).toBeGreaterThan(0);
      expect(resp.result.virtualPrice).toBeGreaterThan(0);
      expect(resp.result.virtualTwapPrice).toBeGreaterThan(0);
    });

    it('getVaultInfo', async () => {
      const ds = getDefaultDataSourceSync('arbmain', [
        new EthersProviderDataSource(provider),
      ]);
      const resp = await ds.getVaultInfo('tricrypto');

      expect(resp.result.totalSupply).toBeGreaterThan(0);
      expect(resp.result.totalAssets).toBeGreaterThan(0);
      expect(resp.result.assetPrice).toBeGreaterThan(0);
      expect(resp.result.sharePrice).toBeGreaterThan(0);
      expect(resp.result.depositCap).toBeGreaterThan(0);
      expect(resp.result.vaultMarketValue).toBeGreaterThan(0);
    });
  });
});
