import { BigNumberish, ethers } from 'ethers';

import {
  core,
  getNetworkNameFromProvider,
  NetworkName,
  VaultName,
} from '../contracts';
import { getBlockByTimestamp } from '../utils';
import { BaseDataSource } from './base-data-source';
import { getVaultInfo } from './scripts';
import { getGmxVaultInfo } from './scripts/get-gmx-vault-info';
import { getGmxVaultInfoByTokenAddress } from './scripts/get-gmx-vault-info-by-token-address';
import { getPoolInfo } from './scripts/get-pool-info';
import { getPrices } from './scripts/get-prices';

export class EthersProviderDataSource extends BaseDataSource {
  _provider: ethers.providers.Provider;
  _contracts: ReturnType<typeof core.getContracts>;
  constructor(provider: ethers.providers.Provider) {
    super();
    this._provider = provider;
    this._contracts = core.getContracts(provider);
  }

  async getNetworkName(): Promise<NetworkName> {
    return await getNetworkNameFromProvider(this._provider);
  }

  async getBlockByTimestamp(timestamp: number): Promise<number> {
    return getBlockByTimestamp(this._provider, timestamp);
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

  async getPoolInfo(_poolId: BigNumberish) {
    return await getPoolInfo(this._provider, _poolId);
  }

  async getVaultInfo(vaultName: VaultName) {
    return await getVaultInfo(
      this._provider,
      vaultName,
      this._queryingDataSource
    );
  }

  async getGmxVaultInfo() {
    return getGmxVaultInfo(this._provider);
  }

  async getGmxVaultInfoByTokenAddress(tokenAddress: string) {
    return getGmxVaultInfoByTokenAddress(this._provider, tokenAddress);
  }
}
