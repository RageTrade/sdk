import {
  GlpStakingManager__factory,
  GMXBatchingManager__factory,
  GMXYieldStrategy__factory,
} from '../../../typechain';
import { newError } from '../../../utils/loggers';
import {
  getChainIdFromProvider,
  getNetworkName,
  NetworkName,
  SignerOrProvider,
} from '../../common';
import { getProvider } from '../../providers';
import * as arbrinkeby from './arbrinkeby';
import * as arbgoerli from './arbrinkeby';

export function getDeployments(networkNameOrChainId: NetworkName | number) {
  const networkName = getNetworkName(networkNameOrChainId);
  switch (networkName) {
    case 'arbrinkeby':
    case 'arbtest':
      return arbrinkeby.getDeployments();
    case 'arbgoerli':
      return arbgoerli.getDeployments();
    default:
      throw newError(
        `gmx vault deployment not present for ${networkName} network`
      );
  }
}

export async function getContracts(signerOrProvider: SignerOrProvider) {
  const chainId = await getChainIdFromProvider(signerOrProvider);
  return getContractsSync(chainId, signerOrProvider);
}

export async function getContractsSync(
  networkNameOrChainId: NetworkName | number,
  signerOrProvider?: SignerOrProvider
) {
  const deployments = getDeployments(getNetworkName(networkNameOrChainId));
  if (signerOrProvider === undefined) {
    signerOrProvider = getProvider(networkNameOrChainId);
  }
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
