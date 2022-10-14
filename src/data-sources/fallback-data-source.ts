import deepEqual from 'fast-deep-equal';
import { NetworkName } from '../contracts';
import { ResultWithMetadata } from '../utils';
import { newError } from '../utils/loggers';

import { BaseDataSource, MethodNames } from './base-data-source';

export interface FallbackDataSourceOptions {
  quorum?: number;
}

export class FallbackDataSource extends BaseDataSource {
  _dataSources: BaseDataSource[];
  _quorum: number;
  _networkName: ResultWithMetadata<NetworkName> | undefined;

  constructor(
    dataSources: BaseDataSource[],
    { quorum }: FallbackDataSourceOptions = {}
  ) {
    super();
    for (let i = 0; i < dataSources.length; i++) {
      if (!dataSources[i]._isDataSource) {
        throw newError(`The ${i}th array element is not a valid data source`);
      }
      dataSources[i]._queryingDataSource = this; // set the querying data source to this fallback data source
    }
    this._dataSources = dataSources;
    this._quorum = quorum ?? 1;
  }

  async getNetworkName() {
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
        if (Array.isArray(e.uniqueResponses)) {
          throw newError(
            `Found ${
              e.uniqueResponses.length
                ? `multiple networks: ${e.uniqueResponses
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

    const responses: { response?: any; error?: any }[] = [];
    const uniqueResponses: { count: number; response: any }[] = [];
    for (let i = 0; i < this._dataSources.length; i++) {
      const dataSource = this._dataSources[i];
      try {
        const response: ResultWithMetadata<any> = await (dataSource as any)[
          method
        ](...args);
        responses.push({ response });
        const responseObj = uniqueResponses.find((ur) =>
          deepEqual(ur.response.result, response.result)
        );
        if (!responseObj) {
          uniqueResponses.push({ count: 1, response });
        } else {
          responseObj.count++;
        }
      } catch (error) {
        responses.push({ error });
      }
      const resultObj = uniqueResponses.find((ur) => ur.count >= quorum);

      if (resultObj) {
        return resultObj.response;
      }
    }
    let maxQuorum = 0;
    let successCount = 0;
    uniqueResponses.forEach((ur) => {
      if (ur.count > maxQuorum) maxQuorum = ur.count;
      successCount += ur.count;
    });
    const failedQueriesCount = responses.reduce(
      (acc, val) => (!!val.error ? acc + 1 : acc),
      0
    );
    const error: any = newError(
      `Quorum target of ${quorum} not achieved. Achieved quorum: ${maxQuorum}, Unique responses: ${uniqueResponses.length}, Failed queries: ${failedQueriesCount}.`
    );
    error.responses = responses;
    error.numberOfUniqueResponses = uniqueResponses.length;
    error.uniqueResponses = uniqueResponses;
    error.maxQuorum = maxQuorum;
    error.successCount = successCount;
    throw error;
  }
}
