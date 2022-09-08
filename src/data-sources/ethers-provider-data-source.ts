import { BigNumberish, ethers } from 'ethers';

import { getContracts, VaultName } from '../contracts';
import { BaseDataSource } from './base-data-source';
import { getVaultInfo } from './scripts';
import { getPrices } from './scripts/get-prices';

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

  async getPrices(_poolId: BigNumberish) {
    return await getPrices(this._provider, _poolId);
  }

  async getVaultInfo(vaultName: VaultName) {
    return await getVaultInfo(this._provider, vaultName);
  }
}
