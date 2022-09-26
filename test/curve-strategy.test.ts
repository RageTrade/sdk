import { ethers } from 'ethers';

import { config } from 'dotenv';
import { CurveYieldStrategy, tricryptoVault } from '../dist';

let curveYieldStrategy: CurveYieldStrategy;

config();

describe('curve strategy', () => {
  describe('arbmain', () => {
    const provider = new ethers.providers.StaticJsonRpcProvider(
      'https://arb1.arbitrum.io/rpc'
    );

    it('works', async () => {
      ({ curveYieldStrategy } = await tricryptoVault.getContracts(provider));
      const fee = await curveYieldStrategy.FEE();
      expect(fee.toNumber()).toEqual(1000);
    });
  });

  describe('arbtest', () => {
    const provider = new ethers.providers.StaticJsonRpcProvider(
      'https://arb-rinkeby.g.alchemy.com/v2/' + process.env.ALCHEMY_KEY
    );

    it('works', async () => {
      ({ curveYieldStrategy } = await tricryptoVault.getContracts(provider));
      const fee = await curveYieldStrategy.FEE();
      expect(fee.toNumber()).toEqual(1000);
    });
  });
});
