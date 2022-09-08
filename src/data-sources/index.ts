import { ethers } from 'ethers';
import { getNetworkNameFromProvider, NetworkName } from '../contracts';
import { CacheServerDataSource } from './cache-server-data-source';
import { EthersProviderDataSource } from './ethers-provider-data-source';
import {
  FallbackDataSource,
  FallbackDataSourceOptions,
} from './fallback-data-source';

export async function getDefaultDataSource(
  ethersProvider: ethers.providers.Provider | ethers.providers.Provider[],
  fallbackDataSourceOptions?: FallbackDataSourceOptions
) {
  const networkName = await getNetworkNameFromProvider(
    Array.isArray(ethersProvider) ? ethersProvider[0] : ethersProvider
  );
  getDefaultDataSourceSync(
    networkName,
    ethersProvider,
    fallbackDataSourceOptions
  );
}

export function getDefaultDataSourceSync(
  networkName: NetworkName,
  ethersProvider?: ethers.providers.Provider | ethers.providers.Provider[],
  fallbackDataSourceOptions?: FallbackDataSourceOptions
) {
  const cacheDS = new CacheServerDataSource(networkName);
  const ethersDSArray = [];

  if (Array.isArray(ethersProvider)) {
    for (const provider of ethersProvider) {
      ethersDSArray.push(new EthersProviderDataSource(provider));
    }
  } else if (ethersProvider) {
    ethersDSArray.push(new EthersProviderDataSource(ethersProvider));
  }

  return new FallbackDataSource(
    [cacheDS, ...ethersDSArray],
    fallbackDataSourceOptions
  );
}

export * from './base-data-source';
export * from './fallback-data-source';
export * from './ethers-provider-data-source';
export * from './cache-server-data-source';
