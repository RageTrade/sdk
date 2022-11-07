import * as sdk from '../';

describe('delta neutral gmx vaults', () => {
  beforeEach(async () => {});

  describe('#getContracts', () => {
    it('arbgoerli', async () => {
      const {
        dnGmxSeniorVault,
        dnGmxJuniorVault,
        dnGmxBatchingManager,
        withdrawPeriphery,
        batchingManagerBypass,
      } = await sdk.deltaNeutralGmxVaults.getContracts(
        sdk.getProvider('arbgoerli')
      );

      const addresses = [
        dnGmxSeniorVault.address,
        dnGmxJuniorVault.address,
        dnGmxBatchingManager.address,
        withdrawPeriphery.address,
        batchingManagerBypass.address,
      ];

      // ensure no addresses are repeated
      expect(addresses.length).toEqual(new Set(addresses).size);
    });
  });
});
