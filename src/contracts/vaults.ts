import { ethers, Signer } from 'ethers';

import { Provider } from '@ethersproject/abstract-provider';

import {
  ContractDeployment,
  getChainIdFromProvider,
  getDeployment,
  getNetworkNameFromChainId,
  NetworkName,
} from './common';
import {
  CurveYieldStrategy__factory,
  IERC20Metadata__factory,
  Logic__factory,
  SwapManager__factory,
  VaultPeriphery__factory,
} from '../typechain';
import { getGmxVaultContracts } from './gmx-vault';

export const vaultMetaData = {
  name: '80-20 TriCrypto Strategy',
  assetName: 'TriCrypto Shares',
};

export type VaultName = 'tricrypto' | 'gmx' | 'unknown';

export interface VaultDeployments {
  CollateralTokenDeployment: ContractDeployment;
  LogicLibraryDeployment: ContractDeployment;
  SwapManagerLibraryDeployment: ContractDeployment;
  VaultPeripheryDeployment: ContractDeployment;
  CurveYieldStrategyDeployment: ContractDeployment;
  CurveYieldStrategyLogicDeployment: ContractDeployment;
}

export async function getVaultContractsWithDeployments(
  signerOrProvider: Signer | Provider,
  deployments: VaultDeployments
) {
  return {
    collateralToken: IERC20Metadata__factory.connect(
      deployments.CollateralTokenDeployment.address,
      signerOrProvider
    ),
    logicLibrary: Logic__factory.connect(
      deployments.LogicLibraryDeployment.address,
      signerOrProvider
    ),
    swapManagerLibrary: SwapManager__factory.connect(
      deployments.SwapManagerLibraryDeployment.address,
      signerOrProvider
    ),
    vaultPeriphery: VaultPeriphery__factory.connect(
      deployments.VaultPeripheryDeployment.address,
      signerOrProvider
    ),
    curveYieldStrategy: CurveYieldStrategy__factory.connect(
      deployments.CurveYieldStrategyDeployment.address,
      signerOrProvider
    ),
    curveYieldStrategyLogic: CurveYieldStrategy__factory.connect(
      deployments.CurveYieldStrategyLogicDeployment.address,
      signerOrProvider
    ),
  };
}

export async function getVaultContracts(signerOrProvider: Signer | Provider) {
  console.log(
    'from @ragetrade/sdk: sdk.getVaultContracts is deprecated and will be changed in future versions, please use sdk.getTricryptoVaultContracts'
  );
  return getTricryptoVaultContracts(signerOrProvider);
}

export async function getTricryptoVaultContracts(
  signerOrProvider: Signer | Provider
) {
  const chainId = await getChainIdFromProvider(signerOrProvider);
  return getVaultContractsWithChainId(signerOrProvider, chainId);
}

export async function getVaultContractsWithChainId(
  signerOrProvider: Signer | Provider,
  chainId: number
) {
  const d = await getVaultDeployments(getNetworkNameFromChainId(chainId));
  return getVaultContractsWithDeployments(signerOrProvider, d);
}

export async function getVaultDeployments(
  network: NetworkName
): Promise<VaultDeployments> {
  const CollateralTokenDeployment = await getDeployment(
    'vaults',
    network,
    'CollateralToken'
  );
  const LogicLibraryDeployment = await getDeployment(
    'vaults',
    network,
    'LogicLibrary'
  );
  const SwapManagerLibraryDeployment = await getDeployment(
    'vaults',
    network,
    'SwapManagerLibrary'
  );
  const VaultPeripheryDeployment = await getDeployment(
    'vaults',
    network,
    'VaultPeriphery'
  );
  const CurveYieldStrategyDeployment = await getDeployment(
    'vaults',
    network,
    'CurveYieldStrategy'
  );
  const CurveYieldStrategyLogicDeployment = await getDeployment(
    'vaults',
    network,
    'CurveYieldStrategyLogic'
  );

  return {
    CollateralTokenDeployment,
    LogicLibraryDeployment,
    SwapManagerLibraryDeployment,
    VaultPeripheryDeployment,
    CurveYieldStrategyDeployment,
    CurveYieldStrategyLogicDeployment,
  };
}

export async function getVaultAddressFromVaultName(
  provider: ethers.providers.Provider,
  vaultName: VaultName
): Promise<string> {
  switch (vaultName) {
    case 'tricrypto':
      const { curveYieldStrategy } = await getTricryptoVaultContracts(provider);
      return curveYieldStrategy.address;
    case 'gmx':
      const { gmxYieldStrategy } = await getGmxVaultContracts(provider);
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
