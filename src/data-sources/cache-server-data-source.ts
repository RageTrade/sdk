import { BigNumber, BigNumberish, ethers } from 'ethers';
import { NetworkName } from '../contracts';

import { BaseDataSource } from './base-data-source';

export class CacheServerDataSource extends BaseDataSource {
  // _baseUrl = 'http://localhost:3000';
  _baseUrl = 'https://apis.rage.trade';
  _networkName: NetworkName;

  constructor(networkName: NetworkName) {
    super();
    this._networkName = networkName;
    if (!['arbmain', 'arbtest'].includes(this._networkName)) {
      throw new Error(
        `Currently CacheServer only supports arbmain and arbtest, but got ${this._networkName}`
      );
    }
  }

  async getNetworkName(): Promise<NetworkName> {
    return this._networkName;
  }

  async getAccountIdsByAddress(address: string): Promise<number[]> {
    const response = await ethers.utils.fetchJson(
      `${this._baseUrl}/data/get-account-ids-by-address?networkName=${this._networkName}&userAddress=${address}`
    );
    return getResult(response);
  }

  async findBlockByTimestamp(timestamp: number): Promise<number> {
    const response = await ethers.utils.fetchJson(
      `${this._baseUrl}/data/get-block-by-timestamp?networkName=${this._networkName}&timestamp=${timestamp}`
    );
    return getResult(response);
  }

  async getPrices(poolId: BigNumberish): Promise<{
    realPrice: number;
    virtualPrice: number;
    realTwapPrice: number;
    virtualTwapPrice: number;
  }> {
    const response = await ethers.utils.fetchJson(
      `${this._baseUrl}/data/get-prices?networkName=${
        this._networkName
      }&poolId=${BigNumber.from(poolId).toNumber()}`
    );
    return getResult(response);
  }

  async getVaultInfo(vaultName: string): Promise<{
    totalSupply: number;
    totalAssets: number;
    assetPrice: number;
    sharePrice: number;
    depositCap: number;
    vaultMarketValue: number;
  }> {
    const response = await ethers.utils.fetchJson(
      `${this._baseUrl}/data/get-vault-info?networkName=${this._networkName}&vaultName=${vaultName}`
    );
    return getResult(response);
  }
}

function getResult(response: any) {
  if ('result' in response) {
    return response.result;
  } else {
    const error = new Error();
    error.stack = JSON.stringify(response);
    throw error;
  }
}
