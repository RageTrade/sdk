import { config } from 'dotenv';
import { ethers } from 'ethers';

import {
  getTricryptoVaultContracts,
  CacheServerDataSource,
  pools,
} from '../dist';

config();

const provider = new ethers.providers.StaticJsonRpcProvider(
  'https://arb1.arbitrum.io/rpc'
);

describe('cache data source', () => {
  describe('arbmain', () => {
    it('getAccountIdsByAddress', async () => {
      const ds = new CacheServerDataSource('arbmain');
      const { curveYieldStrategy } = await getTricryptoVaultContracts(provider);
      const resp = await ds.getAccountIdsByAddress(curveYieldStrategy.address);

      expect(resp).toEqual([0]);
    });

    it('findBlockByTimestamp', async () => {
      const ds = new CacheServerDataSource('arbmain');
      const resp = await ds.findBlockByTimestamp(1660048813);

      expect(resp).toEqual(19803868);
    });

    it('getPrices', async () => {
      const ds = new CacheServerDataSource('arbmain');
      const resp = await ds.getPrices(Number(pools.arbmain[0].poolId));

      expect(resp.realPrice).toBeGreaterThan(0);
      expect(resp.realTwapPrice).toBeGreaterThan(0);
      expect(resp.virtualPrice).toBeGreaterThan(0);
      expect(resp.virtualTwapPrice).toBeGreaterThan(0);
    });

    it('getVaultInfo', async () => {
      const ds = new CacheServerDataSource('arbmain');
      const resp = await ds.getVaultInfo('tricrypto');

      expect(resp.totalSupply).toBeGreaterThan(0);
      expect(resp.totalAssets).toBeGreaterThan(0);
      expect(resp.assetPrice).toBeGreaterThan(0);
      expect(resp.sharePrice).toBeGreaterThan(0);
      expect(resp.depositCap).toBeGreaterThan(0);
      expect(resp.vaultMarketValue).toBeGreaterThan(0);
    });
  });
});
