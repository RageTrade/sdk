import { NetworkName } from '../contracts';
import {
  ArbiscanProvider,
  getBlockByTimestampEtherscan,
  getResultWithMetadata,
} from '../utils';
import { BaseDataSource } from './base-data-source';

export class EtherscanDataSource extends BaseDataSource {
  networkName: NetworkName;
  baseUrl: string;

  constructor(networkName: NetworkName) {
    super();
    this.networkName = networkName;
    this.baseUrl = new ArbiscanProvider(this.networkName).getBaseUrl();
  }

  async getNetworkName() {
    return getResultWithMetadata(this.networkName);
  }

  async getBlockByTimestamp(timestamp: number) {
    return getResultWithMetadata(
      await getBlockByTimestampEtherscan(this.baseUrl, timestamp)
    );
  }
}
