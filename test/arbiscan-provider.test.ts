import { ArbiscanProvider, getContracts, getPoolContracts } from '../dist';

import { config } from 'dotenv';
config();

describe('arbiscan provider', () => {
  it('arbmain', async () => {
    const provider = new ArbiscanProvider('arbmain', process.env.ARBISCAN_KEY);
    const bn = await provider.getBlockNumber();
    expect(bn).toBeGreaterThan(0);
  });

  it('arbmain getLogs', async () => {
    const provider = new ArbiscanProvider('arbmain', process.env.ARBISCAN_KEY);
    const { rageTradeFactory } = await getContracts(provider);
    const pools = await getPoolContracts(rageTradeFactory);
    expect(pools.length).toBeGreaterThan(0);
  });

  it('arbtest', async () => {
    const provider = new ArbiscanProvider('arbtest', process.env.ARBISCAN_KEY);
    const bn = await provider.getBlockNumber();
    expect(bn).toBeGreaterThan(0);
  });

  it('arbmain getLogs', async () => {
    const provider = new ArbiscanProvider('arbtest', process.env.ARBISCAN_KEY);
    const { rageTradeFactory } = await getContracts(provider);
    const pools = await getPoolContracts(rageTradeFactory);
    expect(pools.length).toBeGreaterThan(0);
  });
});
