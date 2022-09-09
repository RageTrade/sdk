import { BigNumberish, ethers } from 'ethers';

import {
  getCoreContracts,
  getNetworkNameFromProvider,
  NetworkName,
  VaultName,
} from '../contracts';
import { BaseDataSource } from './base-data-source';
import { getVaultInfo } from './scripts';
import { getPrices } from './scripts/get-prices';

export class EthersProviderDataSource extends BaseDataSource {
  _provider: ethers.providers.Provider;
  _contracts: ReturnType<typeof getCoreContracts>;
  constructor(provider: ethers.providers.Provider) {
    super();
    this._provider = provider;
    this._contracts = getCoreContracts(provider);
  }

  async getNetworkName(): Promise<NetworkName> {
    return await getNetworkNameFromProvider(this._provider);
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
