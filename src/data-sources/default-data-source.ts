import { Provider } from 'ethers';
import { getNetworkNameFromRunner, NetworkName } from '../contracts';
import { isProvider } from '../utils';
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
  providerOrSource?: Provider | Provider[] | BaseDataSource | BaseDataSource[],
  fallbackDataSourceOptions?: FallbackDataSourceOptions
) {
  const cacheDS = new CacheServerDataSource(networkName);
  // const etherscanDS = new EtherscanDataSource(networkName);
  const sourcesArray: BaseDataSource[] = [];

  if (Array.isArray(providerOrSource)) {
    for (const obj of providerOrSource) {
      if (BaseDataSource.isDataSource(obj)) {
        sourcesArray.push(obj);
      } else if (isProvider(obj)) {
        sourcesArray.push(new EthersProviderDataSource(obj));
      }
    }
  } else if (BaseDataSource.isDataSource(providerOrSource)) {
    sourcesArray.push(providerOrSource);
  } else if (isProvider(providerOrSource)) {
    sourcesArray.push(new EthersProviderDataSource(providerOrSource));
  }

  return new FallbackDataSource(
    [cacheDS, ...sourcesArray],
    fallbackDataSourceOptions
  );
}

export async function getDefaultDataSource(
  provider: Provider,
  fallbackDataSourceOptions?: FallbackDataSourceOptions
) {
  const networkName = await getNetworkNameFromRunner(provider);
  return getDefaultDataSourceSync(
    networkName,
    provider,
    fallbackDataSourceOptions
  );
}
