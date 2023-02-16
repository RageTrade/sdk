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

/**
 * Get a default data source for a given network
 * @param networkName Name of the network
 * @param providerOrSource Provider(s) or data source(s) to use as fallback, in addition to cache server.
 * @param options Options for the fallback data source and cache server data source
 * @returns Fallback data source
 */
export function getDefaultDataSourceSync(
  networkName: NetworkName,
  providerOrSource?:
    | ethers.providers.Provider
    | ethers.providers.Provider[]
    | BaseDataSource
    | BaseDataSource[],
  options?: FallbackDataSourceOptions & { cacheServerBaseUrl?: string }
) {
  const cacheDS = new CacheServerDataSource(
    networkName,
    options?.cacheServerBaseUrl
  );
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
  } else if (providerOrSource !== undefined) {
    throw new Error(
      'Invalid providerOrSource argument: ' + JSON.stringify(providerOrSource)
    );
  }

  return new FallbackDataSource([cacheDS, ...sourcesArray], options);
}

export async function getDefaultDataSource(
  provider: ethers.providers.Provider,
  options?: FallbackDataSourceOptions & { cacheServerBaseUrl?: string }
) {
  const networkName = await getNetworkNameFromProvider(provider);
  return getDefaultDataSourceSync(networkName, provider, options);
}
