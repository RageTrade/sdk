import {
  EthersProviderDataSource,
  getProvider,
  tricryptoVault,
  pools,
  tokens,
  parseUsdc,
} from '../dist';

jest.setTimeout(200_000);

describe('ethers data source', () => {
  describe('arbmain', () => {
    const networkName = 'arbmain';
    let ds: EthersProviderDataSource;
    beforeAll(() => {
      ds = new EthersProviderDataSource(getProvider(networkName));
    });

    it('getAccountIdsByAddress', async () => {
      const { curveYieldStrategy } =
        tricryptoVault.getContractsSync(networkName);
      const {
        result: [accountId],
      } = await ds.getAccountIdsByAddress(curveYieldStrategy.address);

      expect((await curveYieldStrategy.rageAccountNo()).toNumber()).toEqual(
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
      expect(vaultInfo.depositCap).toBeGreaterThan(0);
      expect(vaultInfo.nativeProtocolName).toEqual('CurveFinance');
    });

    it.skip('getVaultInfo gmx', async () => {
      const { result: vaultInfo } = await ds.getVaultInfo('gmx');
      expect(vaultInfo.depositCap).toBeGreaterThan(0);
      expect(vaultInfo.nativeProtocolName).toEqual('GMX');
    });

    it.skip('getGmxVaultInfo', async () => {
      const { result: gmxInfo } = await ds.getGmxVaultInfo();
      expect(gmxInfo.aumInUsdg).toBeGreaterThan(0);
    });

    it.skip('getGmxVaultInfoByTokenAddress', async () => {
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
      expect(sglpAmount.gt(0)).toBeTruthy();
    });
  });

  describe('arbgoerli', () => {
    const networkName = 'arbgoerli';
    let ds: EthersProviderDataSource;
    beforeAll(() => {
      ds = new EthersProviderDataSource(getProvider(networkName));
    });

    it('getAccountIdsByAddress', async () => {
      const { curveYieldStrategy } =
        tricryptoVault.getContractsSync(networkName);
      const {
        result: [accountId],
      } = await ds.getAccountIdsByAddress(curveYieldStrategy.address);

      expect((await curveYieldStrategy.rageAccountNo()).toNumber()).toEqual(
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
      expect(vaultInfo.depositCap).toBeGreaterThan(0);
      expect(vaultInfo.nativeProtocolName).toEqual('CurveFinance');
    });

    it('getVaultInfo gmx', async () => {
      const { result: vaultInfo } = await ds.getVaultInfo('gmx');
      expect(vaultInfo.depositCap).toBeGreaterThan(0);
      expect(vaultInfo.nativeProtocolName).toEqual('GMX');
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
      expect(sglpAmount.gt(0)).toBeTruthy();
    });

    it('getGmxVaultInfoByTokenAddress', async () => {
      const { result: dnGmxInfo } = await ds.getDnGmxVaultsInfo();
      console.log(dnGmxInfo);

      // expect(gmxInfo.seniorVault).toBeGreaterThan(0);
    });
  });
});
