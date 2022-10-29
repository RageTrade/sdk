import {
  DnGmxBatchingManager__factory,
  DnGmxJuniorVault__factory,
  DnGmxSeniorVault__factory,
} from '../../../typechain';
import { newError } from '../../../utils/loggers';
import {
  getChainIdFromProvider,
  getNetworkName,
  NetworkName,
  SignerOrProvider,
} from '../../common';
import { getProvider } from '../../providers';
import * as arbgoerli from './arbgoerli';
import { DnGmxVaultDeployments } from './interface';

export function getDeployments(
  networkNameOrChainId: NetworkName | number
): DnGmxVaultDeployments {
  const networkName = getNetworkName(networkNameOrChainId);
  switch (networkName) {
    case 'arbgoerli':
      return arbgoerli.getDeployments();
    default:
      throw newError(
        `dn-lb-vault deployment not present for ${networkName} network`
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
    dnGmxSeniorVault: DnGmxSeniorVault__factory.connect(
      deployments.DnGmxSeniorVaultDeployment.address,
      signerOrProvider
    ),
    dnGmxJuniorVault: DnGmxJuniorVault__factory.connect(
      deployments.DnGmxJuniorVaultDeployment.address,
      signerOrProvider
    ),
    dnGmxBatchingManager: DnGmxBatchingManager__factory.connect(
      deployments.DnGmxBatchingManagerDeployment.address,
      signerOrProvider
    ),
  };
}
