import deepEqual from 'fast-deep-equal';
import { NetworkName } from '../contracts';

import { BaseDataSource, MethodNames } from './base-data-source';

export interface FallbackDataSourceOptions {
  quorum?: number;
}

export class FallbackDataSource extends BaseDataSource {
  _dataSources: BaseDataSource[];
  _quorum: number;
  _networkName: NetworkName | undefined;

  constructor(
    dataSources: BaseDataSource[],
    { quorum }: FallbackDataSourceOptions = {}
  ) {
    super();
    for (let i = 0; i < dataSources.length; i++) {
      if (!dataSources[i]._isDataSource) {
        throw new Error(`The ${i}th array element is not a valid data source`);
      }
    }
    this._dataSources = dataSources;
    this._quorum = quorum ?? 1;
  }

  async getNetworkName(): Promise<NetworkName> {
    return (
      this._networkName ??
      (this._networkName = await this.perform(
        'getNetworkName',
        [],
        this._dataSources.length
      ))
    );
  }

  perform<MethodName extends MethodNames>(
    method: MethodName,
    args: Parameters<InstanceType<typeof BaseDataSource>[MethodName]>,
    quorum?: number
  ): ReturnType<InstanceType<typeof BaseDataSource>[MethodName]>;

  async perform(method: string, args: any[], quorum = this._quorum) {
    if (method !== 'getNetworkName') {
      // ensure all data sources are on the same network
      try {
        await this.getNetworkName();
      } catch (e: any) {
        if (Array.isArray(e.uniqueResults)) {
          throw new Error(
            `Found ${
              e.uniqueResults.length
                ? `multiple networks: ${e.uniqueResults
                    .map((ur: any) => ur.value)
                    .join(', ')}`
                : 'no networks'
            }.${
              e.successCount < this._dataSources.length
                ? ' Some of the data sources failed to resolve networkNames.'
                : ''
            } Please ensure that data sources have the same network.`
          );
        } else {
          throw e;
        }
      }
    }

    const responses: { result?: any; error?: any }[] = [];
    const uniqueResults: { count: number; value: any }[] = [];
    for (let i = 0; i < this._dataSources.length; i++) {
      const dataSource = this._dataSources[i];
      try {
        const response = await (dataSource as any)[method](...args);
        responses.push({ result: response });
        const resultObj = uniqueResults.find((ur) =>
          deepEqual(ur.value, response)
        );
        if (!resultObj) {
          uniqueResults.push({ count: 1, value: response });
        } else {
          resultObj.count++;
        }
      } catch (error) {
        responses.push({ error });
      }
      const resultObj = uniqueResults.find((ur) => ur.count >= quorum);
      if (resultObj) {
        return resultObj.value;
      }
    }
    let maxQuorum = 0;
    let successCount = 0;
    uniqueResults.forEach((ur) => {
      if (ur.count > maxQuorum) maxQuorum = ur.count;
      successCount += ur.count;
    });
    const error: any = new Error(
      `Quorum of ${quorum} was not achieved, got ${uniqueResults.length} unique results and max quorum is ${maxQuorum}.`
    );
    error.responses = responses;
    error.numberOfUniqueResults = uniqueResults.length;
    error.uniqueResults = uniqueResults;
    error.maxQuorum = maxQuorum;
    error.successCount = successCount;
    throw error;
  }
}
