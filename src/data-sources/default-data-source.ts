import { ethers } from 'ethers';
import { getNetworkNameFromProvider, NetworkName } from '../contracts';
import { BaseDataSource } from './base-data-source';
import { CacheServerDataSource } from './cache-server-data-source';
import { EthersProviderDataSource } from './ethers-provider-data-source';
// import { EtherscanDataSource } from './etherscan-data-source';
import {
  FallbackDataSource,
  FallbackDataSourceOptions,
} from './fallback-data-source';

export function getDefaultDataSourceSync(
  networkName: NetworkName,
  providerOrSource?:
    | ethers.providers.Provider
    | ethers.providers.Provider[]
    | BaseDataSource
    | BaseDataSource[],
  fallbackDataSourceOptions?: FallbackDataSourceOptions
) {
  const cacheDS = new CacheServerDataSource(networkName);
  // const etherscanDS = new EtherscanDataSource(networkName);
  const sourcesArray: BaseDataSource[] = [];

  if (Array.isArray(providerOrSource)) {
    for (const obj of providerOrSource) {
      if (BaseDataSource.isDataSource(obj)) {
        sourcesArray.push(obj);
      } else if (ethers.providers.Provider.isProvider(obj)) {
        sourcesArray.push(new EthersProviderDataSource(obj));
      }
    }
  } else if (BaseDataSource.isDataSource(providerOrSource)) {
    sourcesArray.push(providerOrSource);
  } else if (ethers.providers.Provider.isProvider(providerOrSource)) {
    sourcesArray.push(new EthersProviderDataSource(providerOrSource));
  }

  return new FallbackDataSource(
    [cacheDS, ...sourcesArray],
    fallbackDataSourceOptions
  );
}

export async function getDefaultDataSource(
  provider: ethers.providers.Provider,
  fallbackDataSourceOptions?: FallbackDataSourceOptions
) {
  const networkName = await getNetworkNameFromProvider(provider);
  return getDefaultDataSourceSync(
    networkName,
    provider,
    fallbackDataSourceOptions
  );
}
