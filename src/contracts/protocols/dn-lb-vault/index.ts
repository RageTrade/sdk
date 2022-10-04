import {
  DnGmxSeniorVault__factory,
  DnGmxJuniorVault__factory,
  DnGmxBatchingManager__factory,
} from '../../../typechain';
import { newError } from '../../../utils/loggers';
import {
  ContractDeployment,
  getChainIdFromProvider,
  getNetworkName,
  NetworkName,
  SignerOrProvider,
} from '../../common';
import { getProvider } from '../../providers';

export function getDeployments(networkNameOrChainId: NetworkName | number): {
  DnGmxJuniorVaultDeployment: ContractDeployment;
  DnGmxSeniorVaultDeployment: ContractDeployment;
  DnGmxBatchingManagerDeployment: ContractDeployment;
} {
  const networkName = getNetworkName(networkNameOrChainId);
  switch (networkName) {
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
