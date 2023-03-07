import { BigNumberish, toNumber, ContractRunner } from 'ethers';
import { newError } from '../utils/loggers';

export const supportedNetworkNames = [
  'arbmain',
  'arbgoerli',
  'mainnetfork',
] as const;

export type ChainIds = {
  [K in typeof supportedNetworkNames[number]]: number;
};
export const chainIds: ChainIds = {
  arbmain: 42161,
  arbgoerli: 421613,
  mainnetfork: 31337,
};

export type NetworkName = keyof typeof chainIds;

export interface ContractDeployment {
  address: string;
  receipt?: {
    blockNumber: number;
    transactionHash: string;
  };
}

export function getNetworkNameFromChainId(chainId: BigNumberish): NetworkName {
  chainId = toNumber(chainId);
  for (const networkName of supportedNetworkNames) {
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

export async function getChainIdFromRunner(runner?: ContractRunner | null) {
  if (!runner) {
    throw newError('runner is nullish');
  }
  if (!runner.provider) {
    throw newError('provider is not present in runner');
  }

  const network = await runner.provider.getNetwork();
  return toNumber(network.chainId);
}

export async function getNetworkNameFromRunner(runner?: ContractRunner | null) {
  const chainId = await getChainIdFromRunner(runner);
  return getNetworkNameFromChainId(chainId);
}

export interface ContractDeployment {
  address: string;
}
