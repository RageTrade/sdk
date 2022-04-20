import { ethers } from 'ethers';
import { findBlockNearTimestamp } from '../dist';

const arbtest = new ethers.providers.StaticJsonRpcProvider(
  'https://arb-rinkeby.g.alchemy.com/v2/gh1-tm4X9f0pxljEGsnFnPe693FZ-gim'
);

describe('find old block', () => {
  it('works', async () => {
    const block = await findBlockNearTimestamp(arbtest, 1622744793);
    expect(block.timestamp).toEqual(1622744793);
  }, 70000);
  it('works2', async () => {
    const block = await findBlockNearTimestamp(arbtest, 1622744794);
    expect(block.timestamp).toEqual(1622744793);
  }, 70000);
});
