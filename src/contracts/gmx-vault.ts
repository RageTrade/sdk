import { Signer } from 'ethers';

import { Provider } from '@ethersproject/abstract-provider';

import {
  ContractDeployment,
  getChainIdFromProvider,
  getDeployment,
  getNetworkNameFromChainId,
  NetworkName,
} from './common';
import {
  GlpStakingManager__factory,
  GMXBatchingManager__factory,
  GMXYieldStrategy__factory,
} from '../typechain/vaults';

export const gmxVaultMetaData = {
  name: '80-20 GLP Strategy',
  assetName: 'GLP Shares',
};

export interface GmxVaultDeployments {
  GlpStakingManagerDeployment: ContractDeployment;
  GlpStakingManagerLogicDeployment: ContractDeployment;
  GMXBatchingManagerDeployment: ContractDeployment;
  GMXBatchingManagerLogicDeployment: ContractDeployment;
  GMXYieldStrategyDeployment: ContractDeployment;
  GMXYieldStrategyLogicDeployment: ContractDeployment;
}

export async function getGmxVaultContractsWithDeployments(
  signerOrProvider: Signer | Provider,
  deployments: GmxVaultDeployments
) {
  return {
    glpStakingManager: GlpStakingManager__factory.connect(
      deployments.GlpStakingManagerDeployment.address,
      signerOrProvider
    ),
    glpStakingManagerLogic: GlpStakingManager__factory.connect(
      deployments.GlpStakingManagerLogicDeployment.address,
      signerOrProvider
    ),
    gmxBatchingManager: GMXBatchingManager__factory.connect(
      deployments.GMXBatchingManagerDeployment.address,
      signerOrProvider
    ),
    gmxBatchingManagerLogic: GMXBatchingManager__factory.connect(
      deployments.GMXBatchingManagerLogicDeployment.address,
      signerOrProvider
    ),
    gmxYieldStrategy: GMXYieldStrategy__factory.connect(
      deployments.GMXYieldStrategyDeployment.address,
      signerOrProvider
    ),
    gmxYieldStrategyLogic: GMXYieldStrategy__factory.connect(
      deployments.GMXYieldStrategyLogicDeployment.address,
      signerOrProvider
    ),
  };
}

export async function getGmxVaultContracts(
  signerOrProvider: Signer | Provider
) {
  const chainId = await getChainIdFromProvider(signerOrProvider);
  return getGmxVaultContractsWithChainId(signerOrProvider, chainId);
}

export async function getGmxVaultContractsWithChainId(
  signerOrProvider: Signer | Provider,
  chainId: number
) {
  const d = await getGmxVaultDeployments(getNetworkNameFromChainId(chainId));
  return getGmxVaultContractsWithDeployments(signerOrProvider, d);
}

export async function getGmxVaultDeployments(
  network: NetworkName
): Promise<GmxVaultDeployments> {
  const GlpStakingManagerDeployment = await getDeployment(
    'vaults',
    network,
    'GlpStakingManager'
  );
  const GlpStakingManagerLogicDeployment = await getDeployment(
    'vaults',
    network,
    'GlpStakingManagerLogic'
  );
  const GMXBatchingManagerDeployment = await getDeployment(
    'vaults',
    network,
    'GMXBatchingManager'
  );
  const GMXBatchingManagerLogicDeployment = await getDeployment(
    'vaults',
    network,
    'GMXBatchingManagerLogic'
  );
  const GMXYieldStrategyDeployment = await getDeployment(
    'vaults',
    network,
    'GMXYieldStrategy'
  );
  const GMXYieldStrategyLogicDeployment = await getDeployment(
    'vaults',
    network,
    'GMXYieldStrategyLogic'
  );

  return {
    GlpStakingManagerDeployment,
    GlpStakingManagerLogicDeployment,
    GMXBatchingManagerDeployment,
    GMXBatchingManagerLogicDeployment,
    GMXYieldStrategyDeployment,
    GMXYieldStrategyLogicDeployment,
  };
}
