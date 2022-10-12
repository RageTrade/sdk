import { findBlockByTimestamp, getProvider } from '../dist';

import { config } from 'dotenv';
config();

// const arbtest = new ethers.providers.StaticJsonRpcProvider(
//   'https://arb-rinkeby.g.alchemy.com/v2/' + process.env.ALCHEMY_KEY
// );

const arbmain = getProvider('arbmain');

describe('find block by timestamp', () => {
  it.only('works on arbitrum 24 hr', async () => {
    const target = Math.floor(Date.now() / 1000) - 24 * 60 * 60;
    const block = await findBlockByTimestamp(arbmain, target);
    expect(Math.abs(block.timestamp - target)).toBeLessThan(1000);
  }, 20000);

  it('works on arbitrum', async () => {
    const target = 1648524243;
    const block = await findBlockByTimestamp(arbmain, target);
    expect(Math.abs(block.timestamp - target)).toBeLessThan(100);
  }, 20000);

  it('works on arbiturm 2', async () => {
    const target = 1650186554;
    const block = await findBlockByTimestamp(arbmain, target);
    expect(Math.abs(block.timestamp - target)).toBeLessThan(100);
  }, 20000);

  it('works on arbiturm 3', async () => {
    const target = 2650186554; // very future timestamp
    try {
      await findBlockByTimestamp(arbmain, target);
    } catch (error: any) {
      expect(error.message).toEqual('Timestamp is in the future');
    }
  }, 20000);

  it('works on arbiturm 4', async () => {
    const target = 2650186554; // very future timestamp
    const block = await findBlockByTimestamp(arbmain, target, {
      allowFutureTimestamp: true,
    });
    const blockLatest = await arbmain.getBlock('latest');
    expect(Math.abs(block.timestamp - blockLatest.timestamp)).toBeLessThan(100);
  }, 20000);
});
