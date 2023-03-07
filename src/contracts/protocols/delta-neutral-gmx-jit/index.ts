import { JITManager__factory, DnGmxRouter__factory } from '../../../typechain';
import { newError } from '../../../utils/loggers';
import {
  getChainIdFromRunner,
  getNetworkName,
  NetworkName,
} from '../../common';
import { getProvider } from '../../providers';

import * as arbmain from './arbmain';
import * as arbgoerli from './arbgoerli';
import { DnGmxJITDeployments } from './interface';
import { ContractRunner } from 'ethers';

export function getDeployments(
  networkNameOrChainId: NetworkName | number
): DnGmxJITDeployments {
  const networkName = getNetworkName(networkNameOrChainId);
  switch (networkName) {
    case 'arbmain':
    case 'mainnetfork':
      return arbmain.getDeployments();
    case 'arbgoerli':
      return arbgoerli.getDeployments();
    default:
      throw newError(
        `delta-neutral-gmx-jit deployment not present for ${networkName} network`
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
    jitManager1: JITManager__factory.connect(
      deployments.JITManager1Deployment.address,
      runner
    ),
    jitManager2: JITManager__factory.connect(
      deployments.JITManager2Deployment.address,
      runner
    ),
    dnGmxRouter: DnGmxRouter__factory.connect(
      deployments.DnGmxRouterDeployment.address,
      runner
    ),
    dnGmxRouterLogic: DnGmxRouter__factory.connect(
      deployments.DnGmxRouterLogicDeployment.address,
      runner
    ),
  };
}
