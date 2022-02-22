import { ethers } from 'ethers';
import { getDefaultPoolContracts } from '../src/';

import defaultPools from '../dist/default-pools.json';

import { config } from 'dotenv';
config();

describe('default pools', () => {
  it('works', async () => {
    const provider = new ethers.providers.StaticJsonRpcProvider(
      'https://arb-rinkeby.g.alchemy.com/v2/' + process.env.ALCHEMY_KEY
    );
    const { vToken, vPool } = await getDefaultPoolContracts(provider);
    if (vToken && vPool) {
      expect(ethers.utils.isHexString(vToken.address)).toBeTruthy();
      expect(ethers.utils.isHexString(vPool.address)).toBeTruthy();
    } else {
      // vTokena or vPool is undefined
      expect(false).toBeTruthy();
    }
  });

  it('works2', async () => {
    expect(
      ethers.utils.isHexString(defaultPools.arbtest.vTokenAddress)
    ).toBeTruthy();
    expect(
      ethers.utils.isHexString(defaultPools.arbtest.vPoolAddress)
    ).toBeTruthy();
  });
});
