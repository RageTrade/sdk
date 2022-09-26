import {
  ArbiscanProvider,
  core,
  tricryptoVault,
  getAccountIdsByAddress,
} from '../dist';

import { config } from 'dotenv';
config();

describe('arbiscan provider', () => {
  describe('arbmain network', () => {
    it('getBlockNumber', async () => {
      const provider = new ArbiscanProvider(
        'arbmain',
        process.env.ARBISCAN_KEY
      );
      const bn = await provider.getBlockNumber();
      expect(bn).toBeGreaterThan(0);
    });

    it('getLogs', async () => {
      const provider = new ArbiscanProvider(
        'arbmain',
        process.env.ARBISCAN_KEY
      );
      const { rageTradeFactory } = await core.getContracts(provider);
      const pools = await core.getPoolContracts(rageTradeFactory);
      expect(pools.length).toBeGreaterThan(0);
    });
  });

  describe('arbtest network', () => {
    it('getBlockNumber', async () => {
      const provider = new ArbiscanProvider(
        'arbtest',
        process.env.ARBISCAN_KEY
      );
      const bn = await provider.getBlockNumber();
      expect(bn).toBeGreaterThan(0);
    });

    it('getLogs', async () => {
      const provider = new ArbiscanProvider(
        'arbtest',
        process.env.ARBISCAN_KEY
      );
      const { rageTradeFactory } = await core.getContracts(provider);
      const pools = await core.getPoolContracts(rageTradeFactory);
      expect(pools.length).toBeGreaterThan(0);
    });

    it('getAccountIdsByAddress', async () => {
      const provider = new ArbiscanProvider(
        'arbtest',
        process.env.ARBISCAN_KEY
      );
      const { clearingHouse } = await core.getContracts(provider);
      const { curveYieldStrategy } = await tricryptoVault.getContracts(
        provider
      );
      const accountIds = await getAccountIdsByAddress(
        curveYieldStrategy.address,
        clearingHouse
      );
      expect(accountIds.length).toBeGreaterThan(0);
    });
  });
});
