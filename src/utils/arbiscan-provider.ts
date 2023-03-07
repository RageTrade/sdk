import { ethers } from 'ethers';
import { chainIds, NetworkName } from '../contracts';

export class ArbiscanProvider extends ethers.EtherscanProvider {
  constructor(network: NetworkName, apiKey?: string) {
    let ethersNetwork: 'arbitrum' | 'arbitrum-goerli';
    switch (network) {
      case 'arbmain':
        ethersNetwork = 'arbitrum';
        break;
      case 'arbgoerli':
        ethersNetwork = 'arbitrum-goerli';
        break;
      default:
        throw new Error(
          `ArbiscanProvider: network name ${network} not supported`
        );
    }
    super({ name: ethersNetwork, chainId: chainIds[network] }, apiKey);
  }
}
