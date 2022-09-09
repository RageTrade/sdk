import { ethers } from 'ethers';
import { NetworkName } from '../contracts';
import { BaseDataSource } from './base-data-source';
import { CacheServerDataSource } from './cache-server-data-source';
import { EthersProviderDataSource } from './ethers-provider-data-source';
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

export * from './base-data-source';
export * from './fallback-data-source';
export * from './ethers-provider-data-source';
export * from './cache-server-data-source';
export * from './scripts';
