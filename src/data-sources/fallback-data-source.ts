import deepEqual from 'fast-deep-equal';

import { BaseDataSource, MethodNames } from './base-data-source';

export class FallbackDataSource extends BaseDataSource {
  _dataSources: BaseDataSource[];
  _quorum: number;
  constructor(dataSources: BaseDataSource[], quorum: number) {
    super();
    for (let i = 0; i < dataSources.length; i++) {
      if (!dataSources[i]._isDataSource) {
        throw new Error(`The ${i}th array element is not a valid data source`);
      }
    }
    this._dataSources = dataSources;
    this._quorum = quorum;
  }

  perform<MethodName extends MethodNames>(
    method: MethodName,
    args: Parameters<InstanceType<typeof BaseDataSource>[MethodName]>
  ): ReturnType<InstanceType<typeof BaseDataSource>[MethodName]>;

  async perform(method: string, args: any[]) {
    const results: { count: number; value: any }[] = [];
    for (let i = 0; i < this._dataSources.length; i++) {
      const dataSource = this._dataSources[i];
      try {
        const response = await (dataSource as any)[method](...args);

        const resultObj = results.find((r) => deepEqual(r.value, response));
        if (!resultObj) {
          results.push({ count: 1, value: response });
        } else {
          resultObj.count++;
        }
      } catch {}
      const resultObj = results.find((ur) => ur.count >= this._quorum);
      if (resultObj) {
        return resultObj.value;
      }
    }
    let maxQuorum = 0;
    results.forEach((ur) => {
      if (ur.count > maxQuorum) maxQuorum = ur.count;
    });
    const error: any = new Error(
      `Quorum of ${this._quorum} was not achieved, got ${results.length} unique results and max quorum is ${maxQuorum}.`
    );
    error.numberOfUniqueResults = results.length;
    error.maxQuorum = maxQuorum;
    throw error;
  }
}
