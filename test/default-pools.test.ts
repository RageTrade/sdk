import { ethers } from 'ethers';
// import { getDefaultPoolContracts } from '../src/';

import defaultPools from '../dist/default_pools.json';
import allPools from '../dist/pools.json';

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

  describe('arbmain', () => {
    it('defaultPool', async () => {
      expect(
        ethers.utils.isHexString(defaultPools.arbmain.vTokenAddress)
      ).toBeTruthy();
      expect(
        ethers.utils.isHexString(defaultPools.arbmain.vPoolAddress)
      ).toBeTruthy();
    });
    it('defaultPool', async () => {
      expect(
        ethers.utils.isHexString(allPools.arbmain[0].vTokenAddress)
      ).toBeTruthy();
      expect(
        ethers.utils.isHexString(allPools.arbmain[0].vPoolAddress)
      ).toBeTruthy();
    });
  });

  describe('arbgoerli', () => {
    it('defaultPool', async () => {
      expect(
        ethers.utils.isHexString(defaultPools.arbgoerli.vTokenAddress)
      ).toBeTruthy();
      expect(
        ethers.utils.isHexString(defaultPools.arbgoerli.vPoolAddress)
      ).toBeTruthy();
    });
    it('defaultPool', async () => {
      expect(
        ethers.utils.isHexString(allPools.arbgoerli[0].vTokenAddress)
      ).toBeTruthy();
      expect(
        ethers.utils.isHexString(allPools.arbgoerli[0].vPoolAddress)
      ).toBeTruthy();
    });
  });

  describe('arbgoerli', () => {
    it('defaultPool', async () => {
      expect(
        ethers.utils.isHexString(defaultPools.arbgoerli.vTokenAddress)
      ).toBeTruthy();
      expect(
        ethers.utils.isHexString(defaultPools.arbgoerli.vPoolAddress)
      ).toBeTruthy();
    });
    it('defaultPool', async () => {
      expect(
        ethers.utils.isHexString(allPools.arbgoerli[0].vTokenAddress)
      ).toBeTruthy();
      expect(
        ethers.utils.isHexString(allPools.arbgoerli[0].vPoolAddress)
      ).toBeTruthy();
    });
  });

  it('parseName', async () => {
    expect(parseName(defaultPools.arbgoerli.name)).toEqual('Ether');
    expect(parseSymbol(defaultPools.arbgoerli.symbol)).toEqual('ETH');
  });
});
