import { config } from 'dotenv';
import { ethers } from 'ethers';

import {
  tricryptoVault,
  CacheServerDataSource,
  pools,
  NetworkName,
} from '../dist';

config();

const provider = new ethers.providers.StaticJsonRpcProvider(
  'https://arb1.arbitrum.io/rpc'
);

describe('cache data source', () => {
  // TODO add tests for arbtest
  const networkNames: NetworkName[] = ['arbmain' /*'arbtest'*/];
  for (const networkName of networkNames) {
    describe(networkName, () => {
      it(`getAccountIdsByAddress ${networkName}`, async () => {
        const ds = new CacheServerDataSource(networkName);
        const { curveYieldStrategy } = await tricryptoVault.getContracts(
          provider
        );
        const resp = await ds.getAccountIdsByAddress(
          curveYieldStrategy.address
        );

        expect(resp).toEqual([0]);
      });

      if (networkName === 'arbmain') {
        it(`findBlockByTimestamp ${networkName}`, async () => {
          const ds = new CacheServerDataSource(networkName);
          const resp = await ds.findBlockByTimestamp(1660048813);

          expect(resp).toEqual(19803868);
        });
      }

      it(`getPrices ${networkName}`, async () => {
        const ds = new CacheServerDataSource(networkName);
        const resp = await ds.getPrices(Number(pools.arbmain[0].poolId));

        expect(resp.realPrice).toBeGreaterThan(0);
        expect(resp.realTwapPrice).toBeGreaterThan(0);
        expect(resp.virtualPrice).toBeGreaterThan(0);
        expect(resp.virtualTwapPrice).toBeGreaterThan(0);
      });

      describe(`getPoolInfo ${networkName}`, () => {
        for (const pool of pools[networkName]) {
          it(`getPoolInfo ${networkName} ${pool.symbol}`, async () => {
            const ds = new CacheServerDataSource(networkName);
            const resp = await ds.getPoolInfo(pool.poolId);

            expect(resp.realPrice).toBeGreaterThan(0);
            expect(resp.virtualPrice).toBeGreaterThan(0);
            expect(resp.realTwapPrice).toBeGreaterThan(0);
            expect(resp.virtualTwapPrice).toBeGreaterThan(0);
            // expect(resp.fundingRate).toBeGreaterThan(0);
          });
        }
      });

      describe(`getVaultInfo ${networkName}`, () => {
        const vaultNames = ['tricrypto', 'gmx'];
        for (const vaultName of vaultNames) {
          // TODO remove if check after mainnet deploy
          if (networkName === 'arbmain' && vaultName === 'gmx') return; // skip

          it(`getVaultInfo ${vaultName}`, async () => {
            const ds = new CacheServerDataSource(networkName);
            const resp = await ds.getVaultInfo(vaultName);

            expect(resp.totalSupply).toBeGreaterThan(0);
            expect(resp.totalAssets).toBeGreaterThan(0);
            expect(resp.assetPrice).toBeGreaterThan(0);
            expect(resp.sharePrice).toBeGreaterThan(0);
            expect(resp.depositCap).toBeGreaterThan(0);
            expect(resp.vaultMarketValue).toBeGreaterThan(0);
            expect(resp.avgVaultMarketValue).toBeGreaterThan(0);
          });
        }
      });
    });
  }
});
