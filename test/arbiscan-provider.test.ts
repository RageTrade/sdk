import {
  ArbiscanProvider,
  getContracts,
  getPoolContracts,
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
      const { rageTradeFactory } = await getContracts(provider);
      const pools = await getPoolContracts(rageTradeFactory);
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
      const { rageTradeFactory } = await getContracts(provider);
      const pools = await getPoolContracts(rageTradeFactory);
      expect(pools.length).toBeGreaterThan(0);
    });

    it('getAccountIdsByAddress', async () => {
      const provider = new ArbiscanProvider(
        'arbtest',
        process.env.ARBISCAN_KEY
      );
      const { clearingHouse } = await getContracts(provider);
      const accountIds = await getAccountIdsByAddress(
        '0x5F326710bD6b9f3F525fdAa4241b37ee68984052',
        clearingHouse
      );
      expect(accountIds.length).toBeGreaterThan(0);
    });
  });
});
