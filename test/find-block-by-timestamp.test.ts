import { ethers } from 'ethers';
import { findBlockByTimestamp } from '../dist';

import { config } from 'dotenv';
config();

const arbtest = new ethers.providers.StaticJsonRpcProvider(
  'https://arb-rinkeby.g.alchemy.com/v2/' + process.env.ALCHEMY_KEY
);

describe('find block by timestamp', () => {
  it('works on arbitrum', async () => {
    const target = 1648524243;
    const block = await findBlockByTimestamp(arbtest, target);
    expect(Math.abs(block.timestamp - target)).toBeLessThan(100);
  }, 20000);

  it('works on arbiturm 2', async () => {
    const target = 1650186554;
    const block = await findBlockByTimestamp(arbtest, target);
    expect(Math.abs(block.timestamp - target)).toBeLessThan(100);
  }, 20000);
});
