import { chainlink, NetworkName } from '../dist';

describe('chainlink', () => {
  const networkNames: NetworkName[] = ['arbmain', 'arbgoerli'];
  for (const networkName of networkNames) {
    const { ethUsdAggregator, btcUsdAggregator } =
      chainlink.getContractsSync(networkName);
    describe(networkName, () => {
      it('eth price', async () => {
        const { answer } = await ethUsdAggregator.latestRoundData();
        expect(answer.gt(0)).toBeTruthy();
      });
      it('btc price', async () => {
        const { answer } = await btcUsdAggregator.latestRoundData();
        expect(answer.gt(0)).toBeTruthy();
      });
    });
  }
});
