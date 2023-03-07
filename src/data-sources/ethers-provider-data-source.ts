import { BigNumberish, Provider, toNumber } from 'ethers';

import { core, getNetworkNameFromRunner, VaultName } from '../contracts';
import { getBlockByTimestamp, ResultWithMetadata } from '../utils';
import { BaseDataSource } from './base-data-source';
import {
  getVaultInfo,
  getDnGmxVaultsInfo,
  getGmxVaultInfo,
  getGmxVaultInfoByTokenAddress,
  getPoolInfo,
  getPrices,
  getGlpMintBurnConversionIntermediate,
} from './scripts';

export class EthersProviderDataSource extends BaseDataSource {
  _provider: Provider;
  _contracts: ReturnType<typeof core.getContracts>;
  constructor(provider: Provider) {
    super();
    this._provider = provider;
    this._contracts = core.getContracts(provider);
  }

  async getNetworkName() {
    return getResultWithMetadata(
      await getNetworkNameFromRunner(this._provider)
    );
  }

  async getBlockByTimestamp(timestamp: number) {
    return getResultWithMetadata(
      await getBlockByTimestamp(this._provider, timestamp)
    );
  }

  async getAccountIdsByAddress(address: string) {
    const { clearingHouse } = await this._contracts;
    const logs = await clearingHouse.queryFilter(
      clearingHouse.filters.AccountCreated(address)
    );
    return getResultWithMetadata(
      logs.map((log) => toNumber(log.args.accountId))
    );
  }

  async getPrices(_poolId: BigNumberish) {
    return getResultWithMetadata(await getPrices(this._provider, _poolId));
  }

  async getPoolInfo(_poolId: BigNumberish) {
    return getResultWithMetadata(await getPoolInfo(this._provider, _poolId));
  }

  async getVaultInfo(vaultName: VaultName) {
    return getResultWithMetadata(
      await getVaultInfo(this._provider, vaultName, this._queryingDataSource)
    );
  }

  async getGmxVaultInfo() {
    return getResultWithMetadata(await getGmxVaultInfo(this._provider));
  }

  async getGmxVaultInfoByTokenAddress(tokenAddress: string) {
    return getResultWithMetadata(
      await getGmxVaultInfoByTokenAddress(this._provider, tokenAddress)
    );
  }

  async getDnGmxVaultsInfo() {
    return getResultWithMetadata(await getDnGmxVaultsInfo(this._provider));
  }

  async getGlpMintBurnConversionIntermediate() {
    return getResultWithMetadata(
      await getGlpMintBurnConversionIntermediate(this._provider)
    );
  }
}

function getResultWithMetadata<T>(result: T): ResultWithMetadata<T> {
  return { result, cacheTimestamp: Math.floor(Date.now() / 1000) };
}
