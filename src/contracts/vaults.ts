import { ethers } from 'ethers';

export const vaultMetaData = {
  name: '80-20 TriCrypto Strategy',
  assetName: 'TriCrypto Shares',
};

export const gmxVaultMetaData = {
  name: '80-20 GLP Strategy',
  assetName: 'GLP Shares',
};

export type VaultName = 'tricrypto' | 'gmx' | 'unknown';

import { tricryptoVault, gmxVault } from './protocols';

export async function getVaultAddressFromVaultName(
  provider: ethers.providers.Provider,
  vaultName: VaultName
): Promise<string> {
  switch (vaultName) {
    case 'tricrypto':
      const { curveYieldStrategy } = await tricryptoVault.getContracts(
        provider
      );
      return curveYieldStrategy.address;
    case 'gmx':
      const { gmxYieldStrategy } = await gmxVault.getContracts(provider);
      return gmxYieldStrategy.address;
    default:
      throw new Error(`vaultName should be either tricrypto or gmx`);
  }
}

export function getNativeProtocolName(vaultName: VaultName) {
  switch (vaultName) {
    case 'tricrypto':
      return 'Curve';
    case 'gmx':
      return 'GMX';
    default:
      throw new Error(`vaultName should be either tricrypto or gmx`);
  }
}
