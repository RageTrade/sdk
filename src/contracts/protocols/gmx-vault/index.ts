import { ContractRunner } from 'ethers';
import {
  GlpStakingManager__factory,
  GMXBatchingManager__factory,
  GMXYieldStrategy__factory,
} from '../../../typechain';
import { newError } from '../../../utils/loggers';
import {
  getChainIdFromRunner,
  getNetworkName,
  NetworkName,
} from '../../common';
import { getProvider } from '../../providers';

import * as arbgoerli from './arbgoerli';

export function getDeployments(networkNameOrChainId: NetworkName | number) {
  const networkName = getNetworkName(networkNameOrChainId);
  switch (networkName) {
    case 'arbgoerli':
      return arbgoerli.getDeployments();
    default:
      throw newError(
        `gmx vault deployment not present for ${networkName} network`
      );
  }
}

export async function getContracts(runner: ContractRunner) {
  const chainId = await getChainIdFromRunner(runner);
  return getContractsSync(chainId, runner);
}

export function getContractsSync(
  networkNameOrChainId: NetworkName | number,
  runner?: ContractRunner
) {
  const deployments = getDeployments(getNetworkName(networkNameOrChainId));
  if (runner === undefined) {
    runner = getProvider(networkNameOrChainId);
  }
  return {
    glpStakingManager: GlpStakingManager__factory.connect(
      deployments.GlpStakingManagerDeployment.address,
      runner
    ),
    glpStakingManagerLogic: GlpStakingManager__factory.connect(
      deployments.GlpStakingManagerLogicDeployment.address,
      runner
    ),
    gmxBatchingManager: GMXBatchingManager__factory.connect(
      deployments.GMXBatchingManagerDeployment.address,
      runner
    ),
    gmxBatchingManagerLogic: GMXBatchingManager__factory.connect(
      deployments.GMXBatchingManagerLogicDeployment.address,
      runner
    ),
    gmxYieldStrategy: GMXYieldStrategy__factory.connect(
      deployments.GMXYieldStrategyDeployment.address,
      runner
    ),
    gmxYieldStrategyLogic: GMXYieldStrategy__factory.connect(
      deployments.GMXYieldStrategyLogicDeployment.address,
      runner
    ),
  };
}
