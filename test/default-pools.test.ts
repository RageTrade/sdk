import { ethers } from 'ethers';
// import { getDefaultPoolContracts } from '../src/';

import pools from '../dist/pools.json';

import { config } from 'dotenv';
import { parseName, parseSymbol } from '../dist';
config();

describe('default pools', () => {
  // it('works', async () => {
  //   const provider = new ethers.providers.StaticJsonRpcProvider(
  //     'https://arb-rinkeby.g.alchemy.com/v2/' + process.env.ALCHEMY_KEY
  //   );
  //   const { vToken, vPool } = await getDefaultPoolContracts(provider);
  //   if (vToken && vPool) {
  //     expect(ethers.utils.isHexString(vToken.address)).toBeTruthy();
  //     expect(ethers.utils.isHexString(vPool.address)).toBeTruthy();
  //   } else {
  //     // vTokena or vPool is undefined
  //     expect(false).toBeTruthy();
  //   }
  // });

  it('defaultPool', async () => {
    expect(
      ethers.utils.isHexString(pools.defaultPool.arbtest.vTokenAddress)
    ).toBeTruthy();
    expect(
      ethers.utils.isHexString(pools.defaultPool.arbtest.vPoolAddress)
    ).toBeTruthy();
  });
  it('defaultPool', async () => {
    expect(
      ethers.utils.isHexString(pools.poolsList.arbtest[0].vTokenAddress)
    ).toBeTruthy();
    expect(
      ethers.utils.isHexString(pools.poolsList.arbtest[0].vPoolAddress)
    ).toBeTruthy();
  });

  it('parseName', async () => {
    expect(parseName(pools.defaultPool.arbtest.name)).toEqual('ETH');
    expect(parseSymbol(pools.defaultPool.arbtest.symbol)).toEqual('ETH');
  });
});
