import { parseUnits, toNumber } from 'ethers';
import {
  EthersProviderDataSource,
  getProvider,
  tricryptoVault,
  pools,
  tokens,
  parseUsdc,
  NetworkName,
} from '../dist';

jest.setTimeout(200_000);

describe('ethers data source', () => {
  const networkNames: NetworkName[] = ['arbmain', 'arbgoerli'];
  for (const networkName of networkNames) {
    describe(networkName, () => {
      let ds: EthersProviderDataSource;
      beforeAll(() => {
        ds = new EthersProviderDataSource(getProvider(networkName));
      });

      it('getAccountIdsByAddress', async () => {
        const { curveYieldStrategy } =
          tricryptoVault.getContractsSync(networkName);
        const {
          result: [accountId],
        } = await ds.getAccountIdsByAddress(
          await curveYieldStrategy.getAddress()
        );

        expect(toNumber(await curveYieldStrategy.rageAccountNo())).toEqual(
          accountId
        );
      });

      it('getPrices', async () => {
        const { result: prices } = await ds.getPrices(
          pools[networkName][0].poolId
        );
        expect(prices.realPrice).toBeGreaterThan(0);
        expect(prices.virtualPrice).toBeGreaterThan(0);
        expect(prices.virtualTwapPrice).toBeGreaterThan(0);
      });

      it('getPoolInfo', async () => {
        const { result: poolInfo } = await ds.getPoolInfo(
          pools[networkName][0].poolId
        );
        expect(poolInfo.realPrice).toBeGreaterThan(0);
        expect(poolInfo.virtualPrice).toBeGreaterThan(0);
        expect(poolInfo.virtualTwapPrice).toBeGreaterThan(0);
      });

      it('getVaultInfo tricrypto', async () => {
        const { result: vaultInfo } = await ds.getVaultInfo('tricrypto');
        expect(+vaultInfo.depositCap.formatted).toBeGreaterThan(0);
        expect(vaultInfo.nativeProtocolName).toEqual('CurveFinance');

        expect(Number(vaultInfo.assetPrice.formatted)).toBeLessThan(10000);
        expect(Number(vaultInfo.assetPrice.formatted)).toBeGreaterThan(0.00001);
        expect(Number(vaultInfo.sharePrice.formatted)).toBeLessThan(10000);
        expect(Number(vaultInfo.sharePrice.formatted)).toBeGreaterThan(0.00001);
      });

      if (networkName === 'arbgoerli') {
        it('getVaultInfo gmx', async () => {
          const { result: vaultInfo } = await ds.getVaultInfo('gmx');
          expect(+vaultInfo.depositCap.formatted).toBeGreaterThan(0);
          expect(vaultInfo.nativeProtocolName).toEqual('GMX');

          expect(Number(vaultInfo.assetPrice.formatted)).toBeLessThan(10000);
          expect(Number(vaultInfo.assetPrice.formatted)).toBeGreaterThan(
            0.00001
          );
          expect(Number(vaultInfo.sharePrice.formatted)).toBeLessThan(10000);
          expect(Number(vaultInfo.sharePrice.formatted)).toBeGreaterThan(
            0.00001
          );
        });

        it('getGmxVaultInfo', async () => {
          const { result: gmxInfo } = await ds.getGmxVaultInfo();
          expect(gmxInfo.aumInUsdg).toBeGreaterThan(0);
        });

        it('getGmxVaultInfoByTokenAddress', async () => {
          const { usdcAddress } = tokens.getAddresses(networkName);
          const { result: gmxInfo } = await ds.getGmxVaultInfoByTokenAddress(
            usdcAddress
          );
          expect(gmxInfo.underlyingVaultMinPrice).toBeGreaterThan(0);
        });

        it('deriveSglpAmountForGmxVault', async () => {
          const { usdcAddress } = tokens.getAddresses(networkName);
          const { result: sglpAmount } = await ds.deriveSglpAmountForGmxVault(
            usdcAddress,
            parseUsdc('100'),
            6
          );
          expect(sglpAmount > 0n).toBeTruthy();
        });
      }

      it('getVaultInfo dn_gmx_junior', async () => {
        const { result: vaultInfo } = await ds.getVaultInfo('dn_gmx_junior');
        expect(+vaultInfo.depositCap.formatted).toBeGreaterThan(0);
        expect(vaultInfo.nativeProtocolName).toEqual('GMX');
        expect(+vaultInfo.sharePrice.formatted).toBeGreaterThan(0);

        expect(Number(vaultInfo.assetPrice.formatted)).toBeLessThan(10000);
        expect(Number(vaultInfo.assetPrice.formatted)).toBeGreaterThan(0.00001);
        expect(Number(vaultInfo.sharePrice.formatted)).toBeLessThan(10000);
        expect(Number(vaultInfo.sharePrice.formatted)).toBeGreaterThan(0.00001);
      });

      it('getVaultInfo dn_gmx_senior', async () => {
        const { result: vaultInfo } = await ds.getVaultInfo('dn_gmx_senior');
        expect(+vaultInfo.depositCap.formatted).toBeGreaterThan(0);
        expect(vaultInfo.nativeProtocolName).toEqual('GMX');
        expect(+vaultInfo.sharePrice.formatted).toBeGreaterThan(0);

        expect(Number(vaultInfo.assetPrice.formatted)).toBeLessThan(10000);
        expect(Number(vaultInfo.assetPrice.formatted)).toBeGreaterThan(0.00001);
        expect(Number(vaultInfo.sharePrice.formatted)).toBeLessThan(10000);
        expect(Number(vaultInfo.sharePrice.formatted)).toBeGreaterThan(0.00001);
      });

      it('getDnGmxVaultsInfo', async () => {
        const { result: dnGmxInfo } = await ds.getDnGmxVaultsInfo();
        console.log(dnGmxInfo);

        // expect(gmxInfo.seniorVault).toBeGreaterThan(0);
      });

      it('getGlpMintBurnConversion', async () => {
        const { result: amount } = await ds.getGlpMintBurnConversion(
          parseUnits('10', 18),
          true
        );
        expect(amount).toBeGreaterThan(0);
      });
    });
  }
});

// describe('arbmain', () => {
//   let ds: EthersProviderDataSource;
//   beforeAll(() => {
//     ds = new EthersProviderDataSource(getProvider(networkName));
//   });

//   it('getAccountIdsByAddress', async () => {
//     const { curveYieldStrategy } =
//       tricryptoVault.getContractsSync(networkName);
//     const {
//       result: [accountId],
//     } = await ds.getAccountIdsByAddress(curveYieldStrategy.address);

//     expect((await curveYieldStrategy.rageAccountNo()).toNumber()).toEqual(
//       accountId
//     );
//   });

//   it('getPrices', async () => {
//     const { result: prices } = await ds.getPrices(
//       pools[networkName][0].poolId
//     );
//     expect(prices.realPrice).toBeGreaterThan(0);
//     expect(prices.virtualPrice).toBeGreaterThan(0);
//     expect(prices.virtualTwapPrice).toBeGreaterThan(0);
//   });

//   it('getPoolInfo', async () => {
//     const { result: poolInfo } = await ds.getPoolInfo(
//       pools[networkName][0].poolId
//     );
//     expect(poolInfo.realPrice).toBeGreaterThan(0);
//     expect(poolInfo.virtualPrice).toBeGreaterThan(0);
//     expect(poolInfo.virtualTwapPrice).toBeGreaterThan(0);
//   });

//   it('getVaultInfo tricrypto', async () => {
//     const { result: vaultInfo } = await ds.getVaultInfo('tricrypto');
//     expect(+vaultInfo.depositCap.formatted).toBeGreaterThan(0);
//     expect(vaultInfo.nativeProtocolName).toEqual('CurveFinance');
//   });

//   // TODO skip until gmx-vault contracts are deployed on arbmain
//   it.skip('getVaultInfo gmx', async () => {
//     const { result: vaultInfo } = await ds.getVaultInfo('gmx');
//     expect(+vaultInfo.depositCap.formatted).toBeGreaterThan(0);
//     expect(vaultInfo.nativeProtocolName).toEqual('GMX');
//   });

//   it.skip('getGmxVaultInfo', async () => {
//     const { result: gmxInfo } = await ds.getGmxVaultInfo();
//     expect(gmxInfo.aumInUsdg).toBeGreaterThan(0);
//   });

//   it.skip('getGmxVaultInfoByTokenAddress', async () => {
//     const { usdcAddress } = tokens.getAddresses(networkName);
//     const { result: gmxInfo } = await ds.getGmxVaultInfoByTokenAddress(
//       usdcAddress
//     );
//     expect(gmxInfo.underlyingVaultMinPrice).toBeGreaterThan(0);
//   });

//   it.skip('deriveSglpAmountForGmxVault', async () => {
//     const { usdcAddress } = tokens.getAddresses(networkName);
//     const { result: sglpAmount } = await ds.deriveSglpAmountForGmxVault(
//       usdcAddress,
//       parseUsdc('100'),
//       6
//     );
//     expect(sglpAmount.gt(0)).toBeTruthy();
//   });
// });
