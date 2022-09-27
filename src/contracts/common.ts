import { Signer, providers } from 'ethers';
import { warn } from '../utils/loggers';

const aliasNetworkNames = ['arbtest'];
export const chainIds = {
  arbmain: 42161,
  arbtest: 421611, // alias TODO remove
  arbrinkeby: 421611,
  arbgoerli: 421613,
};

export type NetworkName = keyof typeof chainIds;

export type SignerOrProvider = Signer | providers.Provider;
export interface ContractDeployment {
  address: string;
}

export function getNetworkNameFromChainId(chainId: number): NetworkName {
  for (const [key, val] of Object.entries(chainIds)) {
    if (aliasNetworkNames.includes(key)) continue; // ignore alias

    if (val === chainId) {
      return key as NetworkName;
    }
  }

  throw new Error(`chainId ${chainId} not recognized`);
}

export function sanitizeNetworkName(networkName: NetworkName): NetworkName {
  const chainId = chainIds[networkName];
  if (chainId === undefined) {
    throw new Error(`networkName ${networkName} not recognized`);
  }

  const networkNameSanitized = getNetworkNameFromChainId(chainId);

  if (aliasNetworkNames.includes(networkName)) {
    warn(
      `use of networkName "${networkName}" is deprecated, please use "${networkNameSanitized}"`
    );
  }

  return networkNameSanitized;
}

export function getNetworkName(
  networkNameOrChainId: NetworkName | number
): NetworkName {
  const networkName =
    typeof networkNameOrChainId === 'number'
      ? getNetworkNameFromChainId(networkNameOrChainId)
      : networkNameOrChainId;
  return sanitizeNetworkName(networkName);
}

export async function getChainIdFromProvider(
  signerOrProvider: SignerOrProvider
) {
  const provider = providers.Provider.isProvider(signerOrProvider)
    ? signerOrProvider
    : signerOrProvider.provider;
  if (provider === undefined) {
    throw new Error('provider is not present in signerOrProvider');
  }

  const network = await provider.getNetwork();
  return network.chainId;
}

export async function getNetworkNameFromProvider(
  signerOrProvider: SignerOrProvider
) {
  const chainId = await getChainIdFromProvider(signerOrProvider);
  return getNetworkNameFromChainId(chainId);
}

export interface ContractDeployment {
  address: string;
}
