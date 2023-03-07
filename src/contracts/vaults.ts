import { ContractRunner } from 'ethers';
import { BaseVault__factory } from '../typechain';
import { newError } from '../utils/loggers';
import { NetworkName } from './common';
import { deltaNeutralGmxVaults, gmxVault, tricryptoVault } from './protocols';

export const supportedVaultNames = [
  'tricrypto',
  'gmx',
  'dn_gmx_senior',
  'dn_gmx_junior',
] as const;

export type VaultName = typeof supportedVaultNames[number];

export interface VaultMetadata {
  name: string;
  assetName: string;
}

export function getVaultName(vaultName: string): VaultName {
  vaultName = vaultName.toLowerCase();
  if (!supportedVaultNames.includes(vaultName.toLowerCase() as VaultName)) {
    throw newError(
      `vaultName ${vaultName} not recognized, supported: ${supportedVaultNames.join(
        ', '
      )}`
    );
  }
  return vaultName as VaultName;
}

export async function getVault(runner: ContractRunner, vaultName: VaultName) {
  vaultName = getVaultName(vaultName);
  const vaultSync = getVaultSync(vaultName);
  switch (vaultName) {
    case 'tricrypto':
      const { curveYieldStrategy } = await tricryptoVault.getContracts(runner);
      return {
        ...vaultSync,
        vault: BaseVault__factory.connect(
          await curveYieldStrategy.getAddress(),
          runner
        ),
      };
    case 'gmx':
      const { gmxYieldStrategy } = await gmxVault.getContracts(runner);
      return {
        ...vaultSync,
        vault: BaseVault__factory.connect(
          await gmxYieldStrategy.getAddress(),
          runner
        ),
      };
    case 'dn_gmx_senior':
      const { dnGmxSeniorVault } = await deltaNeutralGmxVaults.getContracts(
        runner
      );
      return {
        ...vaultSync,
        vault: BaseVault__factory.connect(
          await dnGmxSeniorVault.getAddress(),
          runner
        ),
      };
    case 'dn_gmx_junior':
      const { dnGmxJuniorVault } = await deltaNeutralGmxVaults.getContracts(
        runner
      );
      return {
        ...vaultSync,
        vault: BaseVault__factory.connect(
          await dnGmxJuniorVault.getAddress(),
          runner
        ),
      };
    default:
      throw newError(
        `this should not happen: contracts/vaults/getVault(${vaultName})`
      );
  }
}

export function getVaultSync(vaultName: VaultName) {
  vaultName = getVaultName(vaultName);
  switch (vaultName) {
    case 'tricrypto':
      return {
        metadata: {
          name: '80-20 TriCrypto Strategy',
          assetName: 'TriCrypto Shares',
        },
        nativeProtocolName: 'CurveFinance',
      };
    case 'gmx':
      return {
        metadata: {
          name: '80-20 GLP Strategy',
          assetName: 'GLP Shares',
        },
        nativeProtocolName: 'GMX',
      };
    case 'dn_gmx_junior':
      return {
        metadata: {
          name: '80-20 DN GMX Junior Strategy',
          assetName: 'GLP Shares',
        },
        nativeProtocolName: 'GMX',
      };
    case 'dn_gmx_senior':
      return {
        metadata: {
          name: '80-20 DN GMX Senior Strategy',
          assetName: 'GLP Shares',
        },
        nativeProtocolName: 'GMX',
      };
    default:
      throw newError(
        `this should not happen: contracts/vaults/getVaultSync(${vaultName})`
      );
  }
}

export function getVaultDeployBlockNumber(
  networkName: NetworkName,
  vaultName: VaultName
) {
  vaultName = getVaultName(vaultName);
  switch (vaultName) {
    case 'tricrypto':
      return (
        tricryptoVault.getDeployments(networkName).CurveYieldStrategyDeployment
          ?.receipt?.blockNumber || 0
      );
    case 'gmx':
      return (
        gmxVault.getDeployments(networkName).GMXYieldStrategyDeployment?.receipt
          ?.blockNumber || 0
      );
    case 'dn_gmx_junior':
    case 'dn_gmx_senior':
      return (
        deltaNeutralGmxVaults.getDeployments(networkName)
          .DnGmxJuniorVaultDeployment?.receipt?.blockNumber || 0
      );
    default:
      return 0;
  }
}
