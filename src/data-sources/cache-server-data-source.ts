import { BigNumber, BigNumberish, ethers } from 'ethers';
import { parseUnits } from 'ethers/lib/utils';
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

    realPriceD18: BigNumber;
    virtualPriceD18: BigNumber;
    realTwapPriceD18: BigNumber;
    virtualTwapPriceD18: BigNumber;
  }> {
    const response = (await ethers.utils.fetchJson(
      `${this._baseUrl}/data/get-prices?networkName=${
        this._networkName
      }&poolId=${BigNumber.from(poolId).toNumber()}`
    )) as {
      result: {
        realPrice: number;
        virtualPrice: number;
        realTwapPrice: number;
        virtualTwapPrice: number;
      };
    };
    const result = getResult(response);
    return {
      realPrice: result.realPrice,
      virtualPrice: result.virtualPrice,
      realTwapPrice: result.realTwapPrice,
      virtualTwapPrice: result.virtualTwapPrice,

      realPriceD18: parseUnits(String(result.realPrice), 18),
      virtualPriceD18: parseUnits(String(result.virtualPrice), 18),
      realTwapPriceD18: parseUnits(String(result.realTwapPrice), 18),
      virtualTwapPriceD18: parseUnits(String(result.virtualTwapPrice), 18),
    };
  }

  async getVaultInfo(vaultName: string): Promise<{
    totalSupply: number;
    totalAssets: number;
    assetPrice: number;
    sharePrice: number;
    depositCap: number;
    vaultMarketValue: number;

    totalSupplyD18: BigNumber;
    totalAssetsD18: BigNumber;
    assetPriceD18: BigNumber;
    sharePriceD18: BigNumber;
    depositCapD18: BigNumber;
    vaultMarketValueD6: BigNumber;
  }> {
    const response = (await ethers.utils.fetchJson(
      `${this._baseUrl}/data/get-vault-info?networkName=${this._networkName}&vaultName=${vaultName}`
    )) as {
      result: {
        totalSupply: number;
        totalAssets: number;
        assetPrice: number;
        sharePrice: number;
        depositCap: number;
        vaultMarketValue: number;
      };
    };
    const result = getResult(response);
    return {
      totalSupply: result.totalSupply,
      totalAssets: result.totalAssets,
      assetPrice: result.assetPrice,
      sharePrice: result.sharePrice,
      depositCap: result.depositCap,
      vaultMarketValue: result.vaultMarketValue,

      totalSupplyD18: parseUnits(String(result.totalSupply), 18),
      totalAssetsD18: parseUnits(String(result.totalAssets), 18),
      assetPriceD18: parseUnits(String(result.assetPrice), 18),
      sharePriceD18: parseUnits(String(result.sharePrice), 18),
      depositCapD18: parseUnits(String(result.depositCap), 18),
      vaultMarketValueD6: parseUnits(String(result.vaultMarketValue), 6),
    };
  }
}

function getResult<T>(response: { result?: T; [key: string]: any }): T;

function getResult(response: any) {
  if ('result' in response) {
    return response.result;
  } else {
    const error = new Error();
    error.stack = JSON.stringify(response);
    throw error;
  }
}
