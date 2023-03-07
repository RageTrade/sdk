import * as sdk from '../';

describe('delta neutral gmx vaults', () => {
  beforeEach(async () => {});

  describe('#getContracts', () => {
    const networkNames: sdk.NetworkName[] = ['arbmain', 'arbgoerli'];
    for (const networkName of networkNames) {
      it(networkName, async () => {
        const {
          dnGmxSeniorVault,
          dnGmxJuniorVault,
          dnGmxBatchingManager,
          withdrawPeriphery,
          batchingManagerBypass,
        } = await sdk.deltaNeutralGmxVaults.getContracts(
          sdk.getProvider(networkName)
        );

        const addresses = [
          await dnGmxSeniorVault.getAddress(),
          await dnGmxJuniorVault.getAddress(),
          await dnGmxBatchingManager.getAddress(),
          await withdrawPeriphery.getAddress(),
          await batchingManagerBypass.getAddress(),
        ];

        // ensure no addresses are repeated
        expect(addresses.length).toEqual(new Set(addresses).size);
      });
    }
  });
});
