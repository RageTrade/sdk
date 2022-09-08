import { ethers } from 'ethers';

import { BaseDataSource } from './base-data-source';

export class Web2ServerDataSource extends BaseDataSource {
  // _baseUrl = 'http://localhost:3000';
  _baseUrl = 'https://apis.rage.trade';
  _network: 'arbmain' | 'arbtest';

  constructor(network: 'arbmain' | 'arbtest') {
    super();
    this._network = network;
  }

  async getAccountIdsByAddress(address: string): Promise<number[]> {
    const response = await ethers.utils.fetchJson(
      `${this._baseUrl}/data/get-account-ids-by-address?networkName=${this._network}&userAddress=${address}`
    );
    return getResult(response);
  }

  async findBlockByTimestamp(timestamp: number): Promise<number> {
    const response = await ethers.utils.fetchJson(
      `${this._baseUrl}/data/get-block-by-timestamp?networkName=${this._network}&timestamp=${timestamp}`
    );
    return getResult(response);
  }

  async getPrices(poolId: number): Promise<{
    realPrice: number;
    virtualPrice: number;
    realTwapPrice: number;
    virtualTwapPrice: number;
  }> {
    const response = await ethers.utils.fetchJson(
      `${this._baseUrl}/data/get-prices?networkName=${this._network}&poolId=${poolId}`
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
      `${this._baseUrl}/data/get-vault-info?networkName=${this._network}&vaultName=${vaultName}`
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
