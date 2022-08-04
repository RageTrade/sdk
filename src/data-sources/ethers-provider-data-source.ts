import { ethers } from 'ethers';

import { getContracts } from '../contracts';
import { BaseDataSource } from './base-data-source';

export class EthersProviderDataSource extends BaseDataSource {
  _provider: ethers.providers.Provider;
  _contracts: ReturnType<typeof getContracts>;
  constructor(provider: ethers.providers.Provider) {
    super();
    this._provider = provider;
    this._contracts = getContracts(provider);
  }

  async getAccountIdsByAddress(address: string): Promise<number[]> {
    const { clearingHouse } = await this._contracts;
    const logs = await clearingHouse.queryFilter(
      clearingHouse.filters.AccountCreated(address)
    );
    return logs.map((log) => log.args.accountId.toNumber());
  }
}
