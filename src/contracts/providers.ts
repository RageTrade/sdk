import { ethers } from 'ethers';
import { newError } from '../utils/loggers';
import { getNetworkName, NetworkName } from './common';

export function getProvider(networkNameOrChainId: NetworkName | number) {
  const networkName = getNetworkName(networkNameOrChainId);
  switch (networkName) {
    case 'arbmain':
      return new ethers.providers.JsonRpcProvider(
        'https://arb1.arbitrum.io/rpc'
      );
    case 'mainnetfork':
      return new ethers.providers.JsonRpcProvider(
        'https://internal-rpc.rage.trade'
      );
    case 'arbgoerli':
      return new ethers.providers.JsonRpcProvider(
        'https://goerli-rollup.arbitrum.io/rpc'
      );
    default:
      throw newError(`provider not present for ${networkName} network`);
  }
}
