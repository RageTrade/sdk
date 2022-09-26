import { BaseVault__factory } from '../typechain';
import { SignerOrProvider } from './common';

export const tricryptoVaultMetaData: VaultMetadata = {
  name: '80-20 TriCrypto Strategy',
  assetName: 'TriCrypto Shares',
};

export const gmxVaultMetaData: VaultMetadata = {
  name: '80-20 GLP Strategy',
  assetName: 'GLP Shares',
};

export type VaultName = 'tricrypto' | 'gmx' | 'unknown';

import { tricryptoVault, gmxVault } from './protocols';

export interface VaultMetadata {
  name: string;
  assetName: string;
}

export async function getVault(
  signerOrProvider: SignerOrProvider,
  vaultName: VaultName
) {
  const vaultSync = getVaultSync(vaultName);
  switch (vaultName) {
    case 'tricrypto':
      const { curveYieldStrategy } = await tricryptoVault.getContracts(
        signerOrProvider
      );
      return {
        ...vaultSync,
        vault: BaseVault__factory.connect(
          curveYieldStrategy.address,
          signerOrProvider
        ),
      };
    case 'gmx':
      const { gmxYieldStrategy } = await gmxVault.getContracts(
        signerOrProvider
      );
      return {
        ...vaultSync,
        vault: BaseVault__factory.connect(
          gmxYieldStrategy.address,
          signerOrProvider
        ),
      };
    default:
      throw new Error(`vaultName should be either tricrypto or gmx`);
  }
}

export function getVaultSync(vaultName: VaultName) {
  switch (vaultName) {
    case 'tricrypto':
      return {
        metadata: tricryptoVaultMetaData,
        nativeProtocolName: 'CurveFinance',
      };
    case 'gmx':
      return {
        metadata: tricryptoVaultMetaData,
        nativeProtocolName: 'GMX',
      };
    default:
      throw new Error(`vaultName should be either tricrypto or gmx`);
  }
}

// export async function getVaultAddressFromVaultName(
//   provider: ethers.providers.Provider,
//   vaultName: VaultName
// ): Promise<string> {
//   switch (vaultName) {
//     case 'tricrypto':
//       const { curveYieldStrategy } = await tricryptoVault.getContracts(
//         provider
//       );
//       return curveYieldStrategy.address;
//     case 'gmx':
//       const { gmxYieldStrategy } = await gmxVault.getContracts(provider);
//       return gmxYieldStrategy.address;
//     default:
//       throw new Error(`vaultName should be either tricrypto or gmx`);
//   }
// }

// export function getNativeProtocolName(vaultName: VaultName) {
//   switch (vaultName) {
//     case 'tricrypto':
//       return 'Curve';
//     case 'gmx':
//       return 'GMX';
//     default:
//       throw new Error(`vaultName should be either tricrypto or gmx`);
//   }
// }
