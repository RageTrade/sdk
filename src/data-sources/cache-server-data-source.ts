import { BigNumber, BigNumberish, ethers } from 'ethers';
import { NetworkName, getNetworkName } from '../contracts';
import {
  ApiResponse,
  BigNumberStringified,
  getResultWithMetadata,
  parseAmount,
  ResultWithMetadata,
} from '../utils';

import { BaseDataSource } from './base-data-source';
import {
  DnGmxVaultsInfoResult,
  GmxVaultInfoByTokenAddressResult,
  GmxVaultInfoResult,
  PoolInfoResult,
  PricesResult,
  VaultInfoResult,
  VaultMarketValueResult,
} from './scripts';

export class CacheServerDataSource extends BaseDataSource {
  // _baseUrl = 'http://localhost:3000'; // use constructor arg
  _baseUrl = 'https://apis.rage.trade';
  _networkName: NetworkName;

  constructor(networkNameOrChainId: NetworkName | number, baseUrl?: string) {
    super();
    this._networkName = getNetworkName(networkNameOrChainId);
    if (baseUrl) {
      this._baseUrl = baseUrl;
    }
  }

  async getNetworkName(): Promise<ResultWithMetadata<NetworkName>> {
    return getResultWithMetadata(this._networkName);
  }

  async getAccountIdsByAddress(
    address: string
  ): Promise<ResultWithMetadata<number[]>> {
    const response = await ethers.utils.fetchJson(
      `${this._baseUrl}/data/get-account-ids-by-address?networkName=${this._networkName}&userAddress=${address}`
    );
    return getResultWithMetadata(response);
  }

  // TODO remove
  async findBlockByTimestamp(
    timestamp: number
  ): Promise<ResultWithMetadata<number>> {
    const response = await ethers.utils.fetchJson(
      `${this._baseUrl}/data/get-block-by-timestamp?networkName=${this._networkName}&timestamp=${timestamp}`
    );
    return getResultWithMetadata(response);
  }

  async getBlockByTimestamp(
    timestamp: number
  ): Promise<ResultWithMetadata<number>> {
    const response = await ethers.utils.fetchJson(
      `${this._baseUrl}/data/get-block-by-timestamp?networkName=${this._networkName}&timestamp=${timestamp}`
    );
    return getResultWithMetadata(response);
  }

  async getPrices(
    poolId: BigNumberish
  ): Promise<ResultWithMetadata<PricesResult>> {
    const response = (await ethers.utils.fetchJson(
      `${this._baseUrl}/data/v2/get-prices?networkName=${
        this._networkName
      }&poolId=${BigNumber.from(poolId).toNumber()}`
    )) as ApiResponse<BigNumberStringified<PricesResult>>;

    return getResultWithMetadata(response, (result) => ({
      realPrice: result.realPrice,
      virtualPrice: result.virtualPrice,
      realTwapPrice: result.realTwapPrice,
      virtualTwapPrice: result.virtualTwapPrice,

      realPriceD18: BigNumber.from(result.realPriceD18),
      virtualPriceD18: BigNumber.from(result.virtualPriceD18),
      realTwapPriceD18: BigNumber.from(result.realTwapPriceD18),
      virtualTwapPriceD18: BigNumber.from(result.virtualTwapPriceD18),
    }));
  }

  async getPoolInfo(poolId: BigNumberish) {
    const response = (await ethers.utils.fetchJson(
      `${this._baseUrl}/data/v2/get-pool-info?networkName=${
        this._networkName
      }&poolId=${BigNumber.from(poolId).toNumber()}`
    )) as ApiResponse<BigNumberStringified<PoolInfoResult>>;
    return getResultWithMetadata(response, (result) => ({
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

      info: result.info,
    }));
  }

  async getVaultInfo(vaultName: string) {
    const response = (await ethers.utils.fetchJson(
      `${this._baseUrl}/data/v2/get-vault-info?networkName=${this._networkName}&vaultName=${vaultName}`
    )) as ApiResponse<BigNumberStringified<VaultInfoResult>>;
    const response2 = (await ethers.utils.fetchJson(
      `${this._baseUrl}/data/v2/get-vault-market-value?networkName=${this._networkName}&vaultName=${vaultName}`
    )) as ApiResponse<BigNumberStringified<VaultMarketValueResult>>;
    return getResultWithMetadata(response, (result) => ({
      nativeProtocolName: result.nativeProtocolName,

      poolComposition: {
        rageAmountD6: BigNumber.from(result.poolComposition.rageAmountD6),
        nativeAmountD6: BigNumber.from(result.poolComposition.nativeAmountD6),
        rageAmount: result.poolComposition.rageAmount,
        nativeAmount: result.poolComposition.nativeAmount,
        ragePercentage: result.poolComposition.ragePercentage,
        nativePercentage: result.poolComposition.nativePercentage,
      },

      totalSupply: parseAmount(result.totalSupply),
      totalShares: parseAmount(result.totalSupply),
      totalAssets: parseAmount(result.totalAssets),
      assetPrice: parseAmount(result.assetPrice),
      sharePrice: parseAmount(result.sharePrice),
      depositCap: parseAmount(result.depositCap),
      vaultMarketValue: parseAmount(
        response2.result!.vaultMarketValue ?? result.vaultMarketValue
      ),
      avgVaultMarketValue: parseAmount(result.avgVaultMarketValue),
    }));
  }

  async getGmxVaultInfo() {
    const response = (await ethers.utils.fetchJson(
      `${this._baseUrl}/data/v2/get-gmx-vault-info?networkName=${this._networkName}`
    )) as ApiResponse<BigNumberStringified<GmxVaultInfoResult>>;
    return getResultWithMetadata(response, (result) => ({
      aumInUsdg: result.aumInUsdg,
      glpSupply: result.glpSupply,
      aumInUsdgD18: BigNumber.from(result.aumInUsdg),
      glpSupplyD18: BigNumber.from(result.glpSupply),
      gmxBatchingManager: result.gmxBatchingManager,
    }));
  }

  async getGmxVaultInfoByTokenAddress(tokenAddress: string) {
    const response = (await ethers.utils.fetchJson(
      `${this._baseUrl}/data/v2/get-gmx-vault-info-by-token-address?networkName=${this._networkName}&tokenAddress=${tokenAddress}`
    )) as ApiResponse<BigNumberStringified<GmxVaultInfoByTokenAddressResult>>;
    return getResultWithMetadata(response, (result) => ({
      underlyingVaultMinPrice: result.underlyingVaultMinPrice,
      underlyingVaultMinPriceD30: BigNumber.from(
        result.underlyingVaultMinPriceD30
      ),
    }));
  }

  async getDnGmxVaultsInfo() {
    const response = (await ethers.utils.fetchJson(
      `${this._baseUrl}/data/v2/get-dn-gmx-vault-info?networkName=${this._networkName}`
    )) as ApiResponse<BigNumberStringified<DnGmxVaultsInfoResult>>;
    return getResultWithMetadata(response, (result) => ({
      juniorVault: {
        currentExposureInGlp: {
          btcD8: BigNumber.from(result.juniorVault.currentExposureInGlp.btcD8),
          ethD18: BigNumber.from(
            result.juniorVault.currentExposureInGlp.ethD18
          ),
        },
        currentShortPositionInAave: {
          btcD8: BigNumber.from(
            result.juniorVault.currentShortPositionInAave.btcD8
          ),
          ethD18: BigNumber.from(
            result.juniorVault.currentShortPositionInAave.ethD18
          ),
        },
        currentBorrowValueD6: BigNumber.from(
          result.juniorVault.currentBorrowValueD6
        ),
      },
      seniorVault: {
        usdcLentToAaveD6: BigNumber.from(result.seniorVault.usdcLentToAaveD6),
        positionD6: BigNumber.from(result.seniorVault.positionD6),
        withdrawableAmountD6: BigNumber.from(
          result.seniorVault.withdrawableAmountD6
        ),
        earnedInterestRate: result.seniorVault.earnedInterestRate,
        utilizationRatio: result.seniorVault.utilizationRatio,
        ethRewardsSplitRate: result.seniorVault.ethRewardsSplitRate,
      },
      dnGmxBatchingManager: result.dnGmxBatchingManager,
    }));
  }
}
