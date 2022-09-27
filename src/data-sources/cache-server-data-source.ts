import { BigNumber, BigNumberish, ethers } from 'ethers';
import { parseUnits } from 'ethers/lib/utils';
import { NetworkName, getNetworkName } from '../contracts';
import { BigNumberStringified } from '../utils';

import { BaseDataSource } from './base-data-source';
import {
  GmxVaultInfoByTokenAddressResult,
  GmxVaultInfoResult,
  PoolInfoResult,
  PricesResult,
  VaultInfoResult,
} from './scripts';

export class CacheServerDataSource extends BaseDataSource {
  // _baseUrl = 'http://localhost:3000';
  _baseUrl = 'https://apis.rage.trade';
  _networkName: NetworkName;

  constructor(networkNameOrChainId: NetworkName | number) {
    super();
    this._networkName = getNetworkName(networkNameOrChainId);
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

  // TODO remove
  async findBlockByTimestamp(timestamp: number): Promise<number> {
    const response = await ethers.utils.fetchJson(
      `${this._baseUrl}/data/get-block-by-timestamp?networkName=${this._networkName}&timestamp=${timestamp}`
    );
    return getResult(response);
  }

  async getBlockByTimestamp(timestamp: number): Promise<number> {
    const response = await ethers.utils.fetchJson(
      `${this._baseUrl}/data/get-block-by-timestamp?networkName=${this._networkName}&timestamp=${timestamp}`
    );
    return getResult(response);
  }

  async getPrices(poolId: BigNumberish) {
    const response = (await ethers.utils.fetchJson(
      `${this._baseUrl}/data/get-prices?networkName=${
        this._networkName
      }&poolId=${BigNumber.from(poolId).toNumber()}`
    )) as ApiResponse<BigNumberStringified<PricesResult>>;
    const result = getResult(response);

    return {
      realPrice: result.realPrice,
      virtualPrice: result.virtualPrice,
      realTwapPrice: result.realTwapPrice,
      virtualTwapPrice: result.virtualTwapPrice,

      realPriceD18: BigNumber.from(result.realPriceD18),
      virtualPriceD18: BigNumber.from(result.virtualPriceD18),
      realTwapPriceD18: BigNumber.from(result.realTwapPriceD18),
      virtualTwapPriceD18: BigNumber.from(result.virtualTwapPriceD18),
    };
  }

  async getPoolInfo(poolId: BigNumberish) {
    const response = (await ethers.utils.fetchJson(
      `${this._baseUrl}/data/get-pool-info?networkName=${
        this._networkName
      }&poolId=${BigNumber.from(poolId).toNumber()}`
    )) as ApiResponse<BigNumberStringified<PoolInfoResult>>;
    const result = getResult(response);
    return {
      realPrice: result.realPrice,
      virtualPrice: result.virtualPrice,
      realTwapPrice: result.realTwapPrice,
      virtualTwapPrice: result.virtualTwapPrice,
      fundingRate: result.fundingRate,

      realSqrtPriceX96: BigNumber.from(result.realSqrtPriceX96),
      virtualSqrtPriceX96: BigNumber.from(result.virtualSqrtPriceX96),
      realPriceX128: BigNumber.from(result.realPriceX128),
      virtualPriceX128: BigNumber.from(result.virtualPriceX128),
      realTwapPriceX128: BigNumber.from(result.realTwapPriceX128),
      virtualTwapPriceX128: BigNumber.from(result.virtualTwapPriceX128),
      fundingRateX128: BigNumber.from(result.fundingRateX128),
      sumAX128: BigNumber.from(result.sumAX128),

      realPriceD18: BigNumber.from(result.realPriceD18),
      virtualPriceD18: BigNumber.from(result.virtualPriceD18),
      realTwapPriceD18: BigNumber.from(result.realTwapPriceD18),
      virtualTwapPriceD18: BigNumber.from(result.virtualTwapPriceD18),
      fundingRateD18: BigNumber.from(result.fundingRateD18),
    };
  }

  async getVaultInfo(vaultName: string) {
    const response = (await ethers.utils.fetchJson(
      `${this._baseUrl}/data/get-vault-info?networkName=${this._networkName}&vaultName=${vaultName}`
    )) as ApiResponse<BigNumberStringified<VaultInfoResult>>;
    const result = getResult(response);
    return {
      nativeProtocolName: result.nativeProtocolName,

      poolComposition: {
        rageAmountD6: BigNumber.from(result.poolComposition.rageAmountD6),
        nativeAmountD6: BigNumber.from(result.poolComposition.nativeAmountD6),
        rageAmount: result.poolComposition.rageAmount,
        nativeAmount: result.poolComposition.nativeAmount,
        ragePercentage: result.poolComposition.ragePercentage,
        nativePercentage: result.poolComposition.nativePercentage,
      },

      totalSupply: result.totalSupply,
      totalShares: result.totalSupply,
      totalAssets: result.totalAssets,
      assetPrice: result.assetPrice,
      sharePrice: result.sharePrice,
      depositCap: result.depositCap,
      vaultMarketValue: result.vaultMarketValue,
      avgVaultMarketValue: result.avgVaultMarketValue,

      // TODO change this to using D things in the result
      totalSupplyD18: parseUnits(String(result.totalSupply), 18),
      totalSharesD18: parseUnits(String(result.totalSupply), 18),
      totalAssetsD18: parseUnits(String(result.totalAssets), 18),
      assetPriceD18: parseUnits(String(result.assetPrice), 18),
      sharePriceD18: parseUnits(String(result.sharePrice), 18),
      depositCapD18: parseUnits(String(result.depositCap), 18),
      vaultMarketValueD6: parseUnits(String(result.vaultMarketValue), 6),
      avgVaultMarketValueD6: parseUnits(String(result.avgVaultMarketValue), 6),
    };
  }

  async getGmxVaultInfo() {
    const response = (await ethers.utils.fetchJson(
      `${this._baseUrl}/data/get-gmx-vault-info?networkName=${this._networkName}`
    )) as ApiResponse<BigNumberStringified<GmxVaultInfoResult>>;
    const result = getResult(response);
    return {
      aumInUsdg: result.aumInUsdg,
      glpSupply: result.glpSupply,
      aumInUsdgD18: BigNumber.from(result.aumInUsdg),
      glpSupplyD18: BigNumber.from(result.glpSupply),
    };
  }

  async getGmxVaultInfoByTokenAddress(tokenAddress: string) {
    const response = (await ethers.utils.fetchJson(
      `${this._baseUrl}/data/get-gmx-vault-info-by-token-address?networkName=${this._networkName}&tokenAddress=${tokenAddress}`
    )) as ApiResponse<BigNumberStringified<GmxVaultInfoByTokenAddressResult>>;
    const result = getResult(response);
    return {
      underlyingVaultMinPrice: result.underlyingVaultMinPrice,
      underlyingVaultMinPriceD30: BigNumber.from(
        result.underlyingVaultMinPriceD30
      ),
    };
  }
}

type ApiResponse<T> = { result?: T; [key: string]: any };

function getResult<T>(response: ApiResponse<T>): T;

function getResult(response: any) {
  if ('result' in response) {
    return response.result;
  } else {
    const error = new Error();
    error.stack = JSON.stringify(response);
    throw error;
  }
}
