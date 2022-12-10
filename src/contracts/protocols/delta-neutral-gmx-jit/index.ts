import { JITManager__factory, DnGmxRouter__factory } from '../../../typechain';
import { newError } from '../../../utils/loggers';
import {
  getChainIdFromProvider,
  getNetworkName,
  NetworkName,
  SignerOrProvider,
} from '../../common';
import { getProvider } from '../../providers';

import * as arbmain from './arbmain';
import * as arbgoerli from './arbgoerli';
import { DnGmxJITDeployments } from './interface';

export function getDeployments(
  networkNameOrChainId: NetworkName | number
): DnGmxJITDeployments {
  const networkName = getNetworkName(networkNameOrChainId);
  switch (networkName) {
    case 'arbmain':
      return arbmain.getDeployments();
    case 'arbgoerli':
      return arbgoerli.getDeployments();
    default:
      throw newError(
        `delta-neutral-gmx-jit deployment not present for ${networkName} network`
      );
  }
}

export async function getContracts(signerOrProvider: SignerOrProvider) {
  const chainId = await getChainIdFromProvider(signerOrProvider);
  return getContractsSync(chainId, signerOrProvider);
}

export function getContractsSync(
  networkNameOrChainId: NetworkName | number,
  signerOrProvider?: SignerOrProvider
) {
  const deployments = getDeployments(getNetworkName(networkNameOrChainId));
  if (signerOrProvider === undefined) {
    signerOrProvider = getProvider(networkNameOrChainId);
  }
  return {
    jitManager1: JITManager__factory.connect(
      deployments.JITManager1Deployment.address,
      signerOrProvider
    ),
    jitManager2: JITManager__factory.connect(
      deployments.JITManager2Deployment.address,
      signerOrProvider
    ),
    dnGmxRouter: DnGmxRouter__factory.connect(
      deployments.DnGmxRouterDeployment.address,
      signerOrProvider
    ),
    dnGmxRouterLogic: DnGmxRouter__factory.connect(
      deployments.DnGmxRouterLogicDeployment.address,
      signerOrProvider
    ),
  };
}
