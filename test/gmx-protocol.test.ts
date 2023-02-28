import { gmxProtocol, tokens } from '../dist';

describe('gmx protocol', () => {
  describe('#getGlobalShortAveragePrice', () => {
    it('works', async () => {
      const { glpManager } = gmxProtocol.getContractsSync('arbmain');
      const { weth } = tokens.getContractsSync('arbmain');
      const someVal = await glpManager.getGlobalShortAveragePrice(weth.address);
      expect(someVal.gt(0)).toBeTruthy();
    });
  });
});
