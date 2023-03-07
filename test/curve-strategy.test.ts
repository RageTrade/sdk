import { JsonRpcProvider, toNumber } from 'ethers';

import { config } from 'dotenv';
import { CurveYieldStrategy, tricryptoVault } from '../dist';

let curveYieldStrategy: CurveYieldStrategy;

config();

describe('curve strategy', () => {
  describe('arbmain', () => {
    const provider = new JsonRpcProvider('https://arb1.arbitrum.io/rpc');

    it('works', async () => {
      ({ curveYieldStrategy } = await tricryptoVault.getContracts(provider));
      const fee = await curveYieldStrategy.FEE();
      expect(toNumber(fee)).toEqual(1000);
    });
  });

  describe('arbgoerli', () => {
    const provider = new JsonRpcProvider(
      'https://arb-goerli.g.alchemy.com/v2/' + process.env.ALCHEMY_KEY
    );

    it('works', async () => {
      ({ curveYieldStrategy } = await tricryptoVault.getContracts(provider));
      const fee = await curveYieldStrategy.FEE();
      expect(toNumber(fee)).toEqual(1000);
    });
  });
});
