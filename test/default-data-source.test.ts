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
      const resp = await ds.getAccountIdsByAddress(curveYieldStrategy.address);

      expect(resp).toEqual([0]);
    });

    it('findBlockByTimestamp', async () => {
      const ds = getDefaultDataSourceSync('arbmain', [provider]);
      const resp = await ds.findBlockByTimestamp(1660048813);

      expect(resp).toEqual(19803868);
    });

    it('getPrices', async () => {
      const ds = getDefaultDataSourceSync(
        'arbmain',
        new EthersProviderDataSource(provider)
      );
      const resp = await ds.getPrices(Number(pools.arbmain[0].poolId));

      expect(resp.realPrice).toBeGreaterThan(0);
      expect(resp.realTwapPrice).toBeGreaterThan(0);
      expect(resp.virtualPrice).toBeGreaterThan(0);
      expect(resp.virtualTwapPrice).toBeGreaterThan(0);
    });

    it('getVaultInfo', async () => {
      const ds = getDefaultDataSourceSync('arbmain', [
        new EthersProviderDataSource(provider),
      ]);
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
