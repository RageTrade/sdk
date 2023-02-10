import { config } from 'dotenv';
import { parseUnits } from 'ethers/lib/utils';

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

          expect(resp.result).toEqual(19803869);
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
          },
          dn_gmx_junior: {
            arbmain: true,
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

            expect(+resp.result.totalSupply.formatted).toBeGreaterThan(0);
            expect(+resp.result.totalAssets.formatted).toBeGreaterThan(0);
            expect(+resp.result.assetPrice.formatted).toBeGreaterThan(0);
            expect(+resp.result.sharePrice.formatted).toBeGreaterThan(0);
            expect(+resp.result.depositCap.formatted).toBeGreaterThan(0);
            expect(+resp.result.vaultMarketValue.formatted).toBeGreaterThan(0);
            expect(+resp.result.avgVaultMarketValue.formatted).toBeGreaterThan(
              0
            );
          });
        }
      });
      if (networkName === 'arbgoerli') {
        it(`getDnGmxVaultsApyBreakdown ${networkName}`, async () => {
          const ds = new CacheServerDataSource(networkName, baseUrl);
          const resp = await ds.getDnGmxVaultsApyBreakdown();

          expect(resp.result.seniorVault.aaveSupplyApy).toBeTruthy();
          expect(typeof resp.result.seniorVault.aaveSupplyApy).toEqual(
            'number'
          );
          // expect(resp.result.seniorVault.glpRewardsPct).toBeGreaterThan(0);

          expect(resp.result.juniorVault.btcBorrowApy).toBeTruthy();
          expect(resp.result.juniorVault.ethBorrowApy).toBeTruthy();
          expect(resp.result.juniorVault.glpTraderPnl).toBeTruthy();
          expect(typeof resp.result.juniorVault.btcBorrowApy).toEqual('number');
          expect(typeof resp.result.juniorVault.ethBorrowApy).toEqual('number');
          expect(typeof resp.result.juniorVault.glpTraderPnl).toEqual('number');
          // expect(resp.result.juniorVault.glpRewardsPct).toBeGreaterThan(0);
        });
        it(`getDnGmxVaultsMaxDepositWithdraw ${networkName}`, async () => {
          const ds = new CacheServerDataSource(networkName, baseUrl);
          const resp = await ds.getDnGmxVaultsMaxDepositWithdraw();

          expect(resp.result.maxDepositInUsd).toBeTruthy();
          expect(typeof resp.result.maxDepositInUsd).toEqual('string');
          expect(typeof resp.result.maxWithdrawInUsd).toEqual('string');
        });
      }

      it('getGlpMintBurnConversion', async () => {
        const ds = new CacheServerDataSource(networkName, baseUrl);
        const { result: amount } = await ds.getGlpMintBurnConversion(
          parseUnits('10', 18),
          true
        );
        expect(amount).toBeGreaterThan(0);
      });
    });
  }
});
