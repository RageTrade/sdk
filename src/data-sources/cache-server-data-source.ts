import { BigNumberish, toBigInt, toNumber } from 'ethers';
import { NetworkName, getNetworkName } from '../contracts';
import {
  ApiResponse,
  BigNumberStringified,
  getResultWithMetadata,
  parseAmount,
  ResultWithMetadata,
} from '../utils';
import { fetchJson } from '../utils/fetch-json';

import { BaseDataSource } from './base-data-source';
import {
  DnGmxVaultsInfoFastResult,
  DnGmxVaultsInfoResult,
  GmxVaultInfoByTokenAddressResult,
  GmxVaultInfoResult,
  PoolInfoResult,
  PricesResult,
  VaultInfoResult,
} from './scripts';
import { MintBurnConversionIntermediateResult } from './scripts/get-mint-burn-conversion-intermediate';

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
    const response = await fetchJson(
      `${this._baseUrl}/data/get-account-ids-by-address?networkName=${this._networkName}&userAddress=${address}`
    );
    return getResultWithMetadata(response);
  }

  // TODO remove
  async findBlockByTimestamp(
    timestamp: number
  ): Promise<ResultWithMetadata<number>> {
    const response = await fetchJson(
      `${this._baseUrl}/data/get-block-by-timestamp?networkName=${this._networkName}&timestamp=${timestamp}`
    );
    return getResultWithMetadata(response);
  }

  async getBlockByTimestamp(
    timestamp: number
  ): Promise<ResultWithMetadata<number>> {
    const response = await fetchJson(
      `${this._baseUrl}/data/get-block-by-timestamp?networkName=${this._networkName}&timestamp=${timestamp}`
    );
    return getResultWithMetadata(response);
  }

  async getPrices(
    poolId: BigNumberish
  ): Promise<ResultWithMetadata<PricesResult>> {
    const response = (await fetchJson(
      `${this._baseUrl}/data/v2/get-prices?networkName=${
        this._networkName
      }&poolId=${toNumber(poolId)}`
    )) as ApiResponse<BigNumberStringified<PricesResult>>;

    return getResultWithMetadata(response, (result) => ({
      realPrice: result.realPrice,
      virtualPrice: result.virtualPrice,
      realTwapPrice: result.realTwapPrice,
      virtualTwapPrice: result.virtualTwapPrice,

      realPriceD18: toBigInt(result.realPriceD18),
      virtualPriceD18: toBigInt(result.virtualPriceD18),
      realTwapPriceD18: toBigInt(result.realTwapPriceD18),
      virtualTwapPriceD18: toBigInt(result.virtualTwapPriceD18),
    }));
  }

  async getPoolInfo(poolId: BigNumberish) {
    const response = (await fetchJson(
      `${this._baseUrl}/data/v2/get-pool-info?networkName=${
        this._networkName
      }&poolId=${toNumber(poolId)}`
    )) as ApiResponse<BigNumberStringified<PoolInfoResult>>;
    return getResultWithMetadata(response, (result) => ({
      realPrice: result.realPrice,
      virtualPrice: result.virtualPrice,
      realTwapPrice: result.realTwapPrice,
      virtualTwapPrice: result.virtualTwapPrice,
      fundingRate: result.fundingRate,

      realSqrtPriceX96: toBigInt(result.realSqrtPriceX96),
      virtualSqrtPriceX96: toBigInt(result.virtualSqrtPriceX96),
      realPriceX128: toBigInt(result.realPriceX128),
      virtualPriceX128: toBigInt(result.virtualPriceX128),
      realTwapPriceX128: toBigInt(result.realTwapPriceX128),
      virtualTwapPriceX128: toBigInt(result.virtualTwapPriceX128),
      fundingRateX128: toBigInt(result.fundingRateX128),
      sumAX128: toBigInt(result.sumAX128),

      realPriceD18: toBigInt(result.realPriceD18),
      virtualPriceD18: toBigInt(result.virtualPriceD18),
      realTwapPriceD18: toBigInt(result.realTwapPriceD18),
      virtualTwapPriceD18: toBigInt(result.virtualTwapPriceD18),
      fundingRateD18: toBigInt(result.fundingRateD18),

      info: result.info,
    }));
  }

  async getVaultInfo(vaultName: string) {
    const response = (await fetchJson(
      `${this._baseUrl}/data/v2/get-vault-info?networkName=${this._networkName}&vaultName=${vaultName}`
    )) as ApiResponse<BigNumberStringified<VaultInfoResult>>;
    let response2:
      | ApiResponse<BigNumberStringified<VaultInfoResult>>
      | undefined;
    try {
      response2 = await fetchJson(
        `${this._baseUrl}/data/v2/get-vault-info-fast?networkName=${this._networkName}&vaultName=${vaultName}`
      );
    } catch {}

    // if response1 is latest then use it and ignore response2
    if (
      response?.cacheTimestamp &&
      response2?.cacheTimestamp &&
      response.cacheTimestamp > response2.cacheTimestamp
    ) {
      response2 = undefined;
    }

    return getResultWithMetadata(response, (result) => ({
      // uses response1
      nativeProtocolName:
        response2?.result?.nativeProtocolName ?? result.nativeProtocolName,
      poolComposition: {
        rageAmountD6: toBigInt(
          response2?.result?.poolComposition?.rageAmountD6 ??
            result.poolComposition.rageAmountD6
        ),
        nativeAmountD6: toBigInt(
          response2?.result?.poolComposition?.nativeAmountD6 ??
            result.poolComposition.nativeAmountD6
        ),
        rageAmount:
          response2?.result?.poolComposition?.rageAmount ??
          result.poolComposition.rageAmount,
        nativeAmount:
          response2?.result?.poolComposition?.nativeAmount ??
          result.poolComposition.nativeAmount,
        ragePercentage:
          response2?.result?.poolComposition?.ragePercentage ??
          result.poolComposition.ragePercentage,
        nativePercentage:
          response2?.result?.poolComposition?.nativePercentage ??
          result.poolComposition.nativePercentage,
      },
      totalSupply: parseAmount(
        response2?.result?.totalSupply ?? result.totalSupply
      ),
      totalShares: parseAmount(
        response2?.result?.totalSupply ?? result.totalSupply
      ),
      totalAssets: parseAmount(
        response2?.result?.totalAssets ?? result.totalAssets
      ),
      assetsPerShare: parseAmount(
        response2?.result?.assetsPerShare ??
          result.assetsPerShare ?? {
            value: '0',
            decimals: 18,
            formatted: '0.0',
          }
      ),
      assetPrice: parseAmount(
        response2?.result?.assetPrice ?? result.assetPrice
      ),
      sharePrice: parseAmount(
        response2?.result?.sharePrice ?? result.sharePrice
      ),
      depositCap: parseAmount(
        response2?.result?.depositCap ?? result.depositCap
      ),
      vaultMarketValue: parseAmount(
        response2?.result?.vaultMarketValue ?? result.vaultMarketValue
      ),
      vaultMarketValuePending: parseAmount(
        response2?.result?.vaultMarketValuePending ??
          result.vaultMarketValuePending
      ),
      avgVaultMarketValue: parseAmount(
        response2?.result?.avgVaultMarketValue ?? result.avgVaultMarketValue
      ),
    }));
  }

  async getGmxVaultInfo() {
    const response = (await fetchJson(
      `${this._baseUrl}/data/v2/get-gmx-vault-info?networkName=${this._networkName}`
    )) as ApiResponse<BigNumberStringified<GmxVaultInfoResult>>;
    return getResultWithMetadata(response, (result) => ({
      aumInUsdg: result.aumInUsdg,
      glpSupply: result.glpSupply,
      aumInUsdgD18: toBigInt(result.aumInUsdg),
      glpSupplyD18: toBigInt(result.glpSupply),
      gmxBatchingManager: result.gmxBatchingManager,
    }));
  }

  async getGmxVaultInfoByTokenAddress(tokenAddress: string) {
    const response = (await fetchJson(
      `${this._baseUrl}/data/v2/get-gmx-vault-info-by-token-address?networkName=${this._networkName}&tokenAddress=${tokenAddress}`
    )) as ApiResponse<BigNumberStringified<GmxVaultInfoByTokenAddressResult>>;
    return getResultWithMetadata(response, (result) => ({
      underlyingVaultMinPrice: result.underlyingVaultMinPrice,
      underlyingVaultMinPriceD30: toBigInt(result.underlyingVaultMinPriceD30),
    }));
  }

  async getDnGmxVaultsInfo() {
    const response = (await fetchJson(
      `${this._baseUrl}/data/v2/get-dn-gmx-vault-info?networkName=${this._networkName}`
    )) as ApiResponse<BigNumberStringified<DnGmxVaultsInfoResult>>;
    let response2:
      | ApiResponse<BigNumberStringified<DnGmxVaultsInfoFastResult>>
      | undefined;
    try {
      response2 = await fetchJson(
        `${this._baseUrl}/data/v2/get-dn-gmx-vault-info-fast?networkName=${this._networkName}`
      );
    } catch {}

    // if response1 is latest then use it and ignore response2
    if (
      response?.cacheTimestamp &&
      response2?.cacheTimestamp &&
      response.cacheTimestamp > response2.cacheTimestamp
    ) {
      response2 = undefined;
    }

    return getResultWithMetadata(response, (result) => ({
      juniorVault: {
        currentExposureInGlp: {
          btcD8: toBigInt(result.juniorVault.currentExposureInGlp.btcD8),
          ethD18: toBigInt(result.juniorVault.currentExposureInGlp.ethD18),
        },
        currentShortPositionInAave: {
          btcD8: toBigInt(result.juniorVault.currentShortPositionInAave.btcD8),
          ethD18: toBigInt(
            result.juniorVault.currentShortPositionInAave.ethD18
          ),
        },
        currentBorrowValueD6: toBigInt(result.juniorVault.currentBorrowValueD6),
        ethRewardsSplitRate:
          response2?.result?.juniorVault.ethRewardsSplitRate ??
          result.juniorVault.ethRewardsSplitRate,
        assetPriceMinimized: parseAmount(
          response2?.result?.juniorVault.assetPriceMinimized ??
            result.juniorVault.assetPriceMinimized ?? {
              value: '0',
              decimals: 18,
              formatted: '0.0',
            }
        ),
        assetPriceMaximized: parseAmount(
          response2?.result?.juniorVault.assetPriceMaximized ??
            result.juniorVault.assetPriceMaximized ?? {
              value: '0',
              decimals: 18,
              formatted: '0.0',
            }
        ),
      },
      seniorVault: {
        usdcLentToAaveD6: toBigInt(result.seniorVault.usdcLentToAaveD6),
        positionD6: toBigInt(result.seniorVault.positionD6),
        withdrawableAmountD6: toBigInt(result.seniorVault.withdrawableAmountD6),
        earnedInterestRate: result.seniorVault.earnedInterestRate,
        utilizationRatio:
          response2?.result?.seniorVault.utilizationRatio ??
          result.seniorVault.utilizationRatio,
        ethRewardsSplitRate:
          response2?.result?.seniorVault.ethRewardsSplitRate ??
          result.seniorVault.ethRewardsSplitRate,
      },
      dnGmxBatchingManager: {
        paused:
          response2?.result?.dnGmxBatchingManager.paused ??
          result.dnGmxBatchingManager.paused,
        depositCap: parseAmount(result.dnGmxBatchingManager.depositCap),
        roundUsdcBalance: parseAmount(
          response2?.result?.dnGmxBatchingManager.roundUsdcBalance ??
            result.dnGmxBatchingManager.roundUsdcBalance
        ),
      },
    }));
  }

  async getDnGmxVaultsApyBreakdown() {
    const response = await fetchJson(
      `${this._baseUrl}/data/v2/get-dn-gmx-apy-breakdown?networkName=${this._networkName}`
    );
    return getResultWithMetadata(response) as Awaited<
      ReturnType<
        InstanceType<typeof BaseDataSource>['getDnGmxVaultsApyBreakdown']
      >
    >;
  }

  async getDnGmxVaultsMaxDepositWithdraw() {
    // https://apis.rage.trade/data/v2/get-dn-gmx-max-deposit-withdraw?networkName=arbgoerli
    const response = await fetchJson(
      `${this._baseUrl}/data/v2/get-dn-gmx-max-deposit-withdraw?networkName=${this._networkName}`
    );
    return getResultWithMetadata(response) as Awaited<
      ReturnType<
        InstanceType<typeof BaseDataSource>['getDnGmxVaultsMaxDepositWithdraw']
      >
    >;
  }

  async getGlpMintBurnConversionIntermediate() {
    const response = (await fetchJson(
      `${this._baseUrl}/data/v2/get-mint-burn-conversion-intermediate?networkName=${this._networkName}`
    )) as ApiResponse<
      BigNumberStringified<MintBurnConversionIntermediateResult>
    >;
    return getResultWithMetadata(response, (result) => ({
      initialAmount: toBigInt(result.initialAmount),
      usdgSupply: toBigInt(result.usdgSupply),
      usdcWeight: toBigInt(result.usdcWeight),
      totalWeights: toBigInt(result.totalWeights),
      feeBasisPoints: toBigInt(result.feeBasisPoints),
      taxBasisPoints: toBigInt(result.taxBasisPoints),
    })) as Awaited<
      ReturnType<
        InstanceType<
          typeof BaseDataSource
        >['getGlpMintBurnConversionIntermediate']
      >
    >;
  }
}
