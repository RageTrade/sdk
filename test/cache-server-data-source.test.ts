import { config } from 'dotenv';

import {
  tricryptoVault,
  CacheServerDataSource,
  pools,
  NetworkName,
  getProvider,
  supportedVaultNames,
} from '../dist';

config();

jest.setTimeout(200_000);

// const baseUrl = 'http://localhost:3000';
const baseUrl = 'https://apis.rage.trade';

describe('cache data source', () => {
  const networkNames: NetworkName[] = ['arbmain', 'arbgoerli'];
  for (const networkName of networkNames) {
    describe(networkName, () => {
      it(`getAccountIdsByAddress ${networkName}`, async () => {
        const ds = new CacheServerDataSource(networkName, baseUrl);
        const { curveYieldStrategy } = await tricryptoVault.getContracts(
          getProvider(networkName)
        );
        const resp = await ds.getAccountIdsByAddress(
          curveYieldStrategy.address
        );
        expect(resp.result).toEqual([
          (await curveYieldStrategy.rageAccountNo()).toNumber(),
        ]);
      });

      if (networkName === 'arbmain') {
        it(`findBlockByTimestamp ${networkName}`, async () => {
          const ds = new CacheServerDataSource(networkName, baseUrl);
          const resp = await ds.findBlockByTimestamp(1660048813);

          expect(resp.result).toEqual(19803868);
        });
      }

      it(`getPrices ${networkName}`, async () => {
        const ds = new CacheServerDataSource(networkName, baseUrl);
        const resp = await ds.getPrices(Number(pools[networkName][0].poolId));

        expect(resp.result.realPrice).toBeGreaterThan(0);
        expect(resp.result.realTwapPrice).toBeGreaterThan(0);
        expect(resp.result.virtualPrice).toBeGreaterThan(0);
        expect(resp.result.virtualTwapPrice).toBeGreaterThan(0);
      });

      describe(`getPoolInfo ${networkName}`, () => {
        for (const pool of pools[networkName]) {
          it(`getPoolInfo ${networkName} ${pool.symbol}`, async () => {
            const ds = new CacheServerDataSource(networkName, baseUrl);
            const resp = await ds.getPoolInfo(pool.poolId);

            expect(resp.result.realPrice).toBeGreaterThan(0);
            expect(resp.result.virtualPrice).toBeGreaterThan(0);
            expect(resp.result.realTwapPrice).toBeGreaterThan(0);
            expect(resp.result.virtualTwapPrice).toBeGreaterThan(0);
            // expect(resp.result.fundingRate).toBeGreaterThan(0);
          });
        }
      });

      describe(`getVaultInfo ${networkName}`, () => {
        const skipIf: any = {
          gmx: {
            arbmain: true,
          },
          dn_gmx_senior: {
            arbmain: true,
            arbtest: true,
            arbrinkeby: true,
          },
          dn_gmx_junior: {
            arbmain: true,
            arbtest: true,
            arbrinkeby: true,
          },
        };

        const vaultNames = supportedVaultNames;
        for (const vaultName of vaultNames) {
          const _it =
            skipIf?.[vaultName as any] === true ||
            (skipIf?.[vaultName as any]?.[networkName as any] as any) === true
              ? it.skip
              : it;

          _it(`getVaultInfo ${vaultName}`, async () => {
            const ds = new CacheServerDataSource(networkName, baseUrl);
            const resp = await ds.getVaultInfo(vaultName);

            expect(resp.result.totalSupply).toBeGreaterThan(0);
            expect(resp.result.totalAssets).toBeGreaterThan(0);
            expect(resp.result.assetPrice).toBeGreaterThan(0);
            expect(resp.result.sharePrice).toBeGreaterThan(0);
            expect(resp.result.depositCap).toBeGreaterThan(0);
            expect(resp.result.vaultMarketValue).toBeGreaterThan(0);
            expect(resp.result.avgVaultMarketValue).toBeGreaterThan(0);
          });
        }
      });
    });
  }
});
