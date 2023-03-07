import { Provider } from 'ethers';

export function isProvider(provider: any): provider is Provider {
  return (
    typeof provider === 'object' && !!provider.getBlockNumber && !!provider.call
  );
}
