import { ContractRunner } from 'ethers';
import { newError } from '../../utils/loggers';
import { getChainIdFromRunner, getNetworkName, NetworkName } from '../common';
import { getProvider } from '../providers';

export interface templateAddresses {}

export function getAddresses(
  networkNameOrChainId: NetworkName | number
): templateAddresses {
  const networkName = getNetworkName(networkNameOrChainId);
  switch (networkName) {
    case 'arbmain':
    case 'mainnetfork':
      return {};
    case 'arbgoerli':
      return {};
    default:
      throw newError(
        `template addresses not present for ${networkName} network`
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
  const addresses = getAddresses(getNetworkName(networkNameOrChainId));
  if (runner === undefined) {
    runner = getProvider(networkNameOrChainId);
  }
  return { addresses };
}
