import { ethers, logger } from 'ethers';

export class ArbiscanProvider extends ethers.providers.EtherscanProvider {
  constructor(network: 'arbmain' | 'arbtest', apiKey?: string) {
    super(
      (() => {
        switch (network) {
          case 'arbmain':
            return {
              name: 'arbmain',
              chainId: 42161,
            };
          case 'arbtest':
            return {
              name: 'arbtest',
              chainId: 421611,
            };
        }
      })(),
      apiKey
    );
  }

  getBaseUrl(): string {
    switch (this.network ? this.network.name : 'invalid') {
      case 'arbmain':
        return 'https://api.arbiscan.io';
      case 'arbtest':
        return 'https://api-testnet.arbiscan.io';
      default:
    }
    return logger.throwArgumentError(
      'unsupported network',
      'network',
      this.network.name
    );
  }
}
