import { Signer, providers } from 'ethers';
import { newError, warn } from '../utils/loggers';

export const supportedNetworkNames = [
  'arbmain',
  'arbrinkeby',
  'arbgoerli',
  'arbtest',
] as const;
export const aliasNetworkNames = ['arbtest'];

export type ChainIds = {
  [K in typeof supportedNetworkNames[number]]: number;
};
export const chainIds: ChainIds = {
  arbmain: 42161,
  arbtest: 421611, // alias TODO remove
  arbrinkeby: 421611,
  arbgoerli: 421613,
};

export type NetworkName = keyof typeof chainIds;

export type SignerOrProvider = Signer | providers.Provider;
export interface ContractDeployment {
  address: string;
  receipt?: {
    blockNumber: number;
    transactionHash: string;
  };
}

export function getNetworkNameFromChainId(chainId: number): NetworkName {
  for (const networkName of supportedNetworkNames) {
    if (aliasNetworkNames.includes(networkName)) continue; // ignore alias

    if (chainIds[networkName] === chainId) {
      return networkName;
    }
  }

  throw newError(`chainId ${chainId} not recognized`);
}

export function sanitizeNetworkName(networkName: string): NetworkName {
  const chainId = (chainIds as any)[networkName] as number | undefined;
  if (chainId === undefined) {
    throw newError(`networkName ${networkName} not recognized`);
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
  networkNameOrChainId: string | number
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
    throw newError('provider is not present in signerOrProvider');
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
