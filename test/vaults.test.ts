import {
  getProvider,
  sdk,
  supportedVaultNames,
  supportedNetworkNames,
  getDefaultDataSourceSync,
} from '../dist';

jest.setTimeout(200_000);

const skipIf: any = {
  tricrypto: {
    mainnetfork: true,
  },
  gmx: {
    arbmain: true,
    mainnetfork: true,
  },
  dn_gmx_senior: {
    arbmain: true,
    arbgoerli: true,
    mainnetfork: true,
  },
  dn_gmx_junior: {
    arbmain: true,
    arbgoerli: true,
    mainnetfork: true,
  },
};

describe('vaults', () => {
  for (const vaultName of supportedVaultNames) {
    ((skipIf?.[vaultName as any] as any) === true ? describe.skip : describe)(
      vaultName,
      () => {
        for (const networkName of supportedNetworkNames) {
          ((skipIf?.[vaultName as any]?.[networkName as any] as any) === true
            ? describe.skip
            : describe)(networkName, () => {
            it('getVaultName', async () => {
              expect(sdk.getVaultName(vaultName)).toEqual(vaultName);
            });
            it('getVaultSync', async () => {
              sdk.getVaultSync(vaultName);
            });
            it('getVault', async () => {
              await sdk.getVault(getProvider(networkName), vaultName);
            });
            it('getVaultDeployBlockNumber', async () => {
              const blockNumber = sdk.getVaultDeployBlockNumber(
                networkName,
                vaultName
              );
              expect(blockNumber).toBeGreaterThan(0);
            });
            it('getVaultDeployBlockNumber', async () => {
              const blockNumber = sdk.getVaultDeployBlockNumber(
                networkName,
                vaultName
              );
              expect(blockNumber).toBeGreaterThan(0);
            });
            it('getVaultInfo', async () => {
              const vaultInfo = await sdk.getVaultInfo(
                getProvider(networkName),
                vaultName,
                getDefaultDataSourceSync(networkName)
              );
              expect(+vaultInfo.assetPrice.formatted).toBeGreaterThan(0);
              expect(+vaultInfo.depositCap.formatted).toBeGreaterThan(0);
            });
          });
        }
      }
    );
  }
});
