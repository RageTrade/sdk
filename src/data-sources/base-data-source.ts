import { BigNumberish, toBigInt, toNumber } from 'ethers';
import { NetworkName, VaultName } from '../contracts';
import { ResultWithMetadata } from '../utils';
import { newError, warn } from '../utils/loggers';
import {
  DnGmxVaultsInfoResult,
  GmxVaultInfoResult,
  GmxVaultInfoByTokenAddressResult,
  MintBurnConversionIntermediateResult,
  PoolInfoResult,
  PricesResult,
  VaultInfoResult,
} from './scripts';

export type MethodNames =
  | 'getNetworkName'
  | 'getAccountIdsByAddress'
  | 'findBlockByTimestamp'
  | 'getBlockByTimestamp'
  | 'getPrices'
  | 'getPoolInfo'
  | 'getVaultInfo'
  | 'getGmxVaultInfo'
  | 'getGmxVaultInfoByTokenAddress'
  | 'getDnGmxVaultsInfo'
  | 'getDnGmxVaultsApyBreakdown'
  | 'getDnGmxVaultsMaxDepositWithdraw'
  | 'getGlpMintBurnConversionIntermediate'
  | 'getGlpMintBurnConversion';

export abstract class BaseDataSource {
  _isDataSource: boolean;
  _queryingDataSource: BaseDataSource; // can be changed to a fallback data source
  constructor() {
    this._isDataSource = true;
    this._queryingDataSource = this;
  }

  static isDataSource(obj: any): obj is BaseDataSource {
    return typeof obj === 'object' && obj?._isDataSource;
  }

  getNetworkName(): Promise<ResultWithMetadata<NetworkName>> {
    return this.perform('getNetworkName', []);
  }

  getAccountIdsByAddress(
    address: string
  ): Promise<ResultWithMetadata<number[]>> {
    return this.perform('getAccountIdsByAddress', [address]);
  }

  // TODO remove
  findBlockByTimestamp(timestamp: number): Promise<ResultWithMetadata<number>> {
    console.log(
      'The method findBlockByTimestamp is deprecated, please use getBlockByTimestamp'
    );

    return this.perform('findBlockByTimestamp', [timestamp]);
  }

  getBlockByTimestamp(timestamp: number): Promise<ResultWithMetadata<number>> {
    return this.perform('getBlockByTimestamp', [timestamp]);
  }

  getPrices(poolId: BigNumberish): Promise<ResultWithMetadata<PricesResult>> {
    return this.perform('getPrices', [poolId]);
  }

  getPoolInfo(
    poolId: BigNumberish
  ): Promise<ResultWithMetadata<PoolInfoResult>> {
    return this.perform('getPoolInfo', [poolId]);
  }

  getVaultInfo(
    vaultName: VaultName
  ): Promise<ResultWithMetadata<VaultInfoResult>> {
    return this.perform('getVaultInfo', [vaultName]);
  }

  getGmxVaultInfo(): Promise<ResultWithMetadata<GmxVaultInfoResult>> {
    return this.perform('getGmxVaultInfo', []);
  }

  getGmxVaultInfoByTokenAddress(
    tokenAddress: string
  ): Promise<ResultWithMetadata<GmxVaultInfoByTokenAddressResult>> {
    return this.perform('getGmxVaultInfoByTokenAddress', [tokenAddress]);
  }

  getDnGmxVaultsInfo(): Promise<ResultWithMetadata<DnGmxVaultsInfoResult>> {
    return this.perform('getDnGmxVaultsInfo', []);
  }

  getDnGmxVaultsApyBreakdown(): Promise<
    ResultWithMetadata<{
      seniorVault: {
        aaveSupplyApy: number;
        glpRewardsPct: number;
      };
      juniorVault: {
        btcBorrowApy: number;
        ethBorrowApy: number;
        glpTraderPnl: number;
        glpRewardsPct: number;
        esGmxRewards: number;
      };
    }>
  > {
    return this.perform('getDnGmxVaultsApyBreakdown', []);
  }
  getDnGmxVaultsMaxDepositWithdraw(): Promise<
    ResultWithMetadata<{
      maxDepositInUsd: string;
      maxWithdrawInUsd: string;
    }>
  > {
    return this.perform('getDnGmxVaultsMaxDepositWithdraw', []);
  }

  perform<MethodName extends MethodNames>(
    method: MethodName,
    _args: Parameters<InstanceType<typeof BaseDataSource>[MethodName]>
  ): ReturnType<InstanceType<typeof BaseDataSource>[MethodName]> {
    throw newError(
      `${this.constructor.name}.perform[${method}] Not implemented`
    );
  }

  // helper methods that use the above methods to calculate something

  async getDerivedAssetAmount(
    tokenAddress: string,
    depositAmount: bigint,
    decimals: number
  ) {
    warn(
      'getDerivedAssetAmount is deprecated and will be removed in future, please use deriveSglpAmountForGmxVault'
    );
    return this.deriveSglpAmountForGmxVault(
      tokenAddress,
      depositAmount,
      decimals
    );
  }

  /**
   * Derive amount of sGLP, when any supported token is deposited.
   * This is used for GMX vaults.
   * @param tokenAddress Address of the token that will be deposited
   * @param depositAmount Amount of the token that will be deposited
   * @param decimals Decimals of the token that will be deposited
   * @returns Amount of sGLP that might be minted when actually deposited
   */
  async deriveSglpAmountForGmxVault(
    tokenAddress: string,
    depositAmount: bigint,
    decimals: BigNumberish
  ): Promise<ResultWithMetadata<bigint>> {
    decimals = toBigInt(decimals);
    const slippageThreshold = toBigInt(200); // 2%
    const PRICE_PRECISION = toBigInt(10) ** 30n;
    const MAX_BPS = toBigInt(10_000);

    const {
      result: { underlyingVaultMinPriceD30 },
      cacheTimestamp: timestamp1,
    } = await this.getGmxVaultInfoByTokenAddress(tokenAddress);

    const usdgUnit = toBigInt(10) ** 18n;
    const depositAmountUnit = toBigInt(10) ** decimals;

    const usdg =
      (((depositAmount *
        underlyingVaultMinPriceD30 *
        (MAX_BPS - slippageThreshold)) /
        MAX_BPS /
        PRICE_PRECISION) *
        usdgUnit) /
      depositAmountUnit;

    const {
      result: { aumInUsdgD18, glpSupplyD18 },
      cacheTimestamp: timestamp2,
    } = await this.getGmxVaultInfo();
    const sGLPAmount = (usdg * glpSupplyD18) / aumInUsdgD18;
    return {
      result: sGLPAmount,
      cacheTimestamp:
        timestamp1 !== undefined && timestamp2 !== undefined
          ? Math.min(timestamp1, timestamp2)
          : undefined,
    };
  }

  async getGlpMintBurnConversionIntermediate(): Promise<
    ResultWithMetadata<MintBurnConversionIntermediateResult>
  > {
    return this.perform('getGlpMintBurnConversionIntermediate', []);
  }

  async getGlpMintBurnConversion(
    dollarValueD18: bigint,
    isUsdcToGlp: boolean
  ): Promise<ResultWithMetadata<number>> {
    const {
      result: {
        initialAmount,
        usdgSupply,
        usdcWeight,
        totalWeights,
        feeBasisPoints,
        taxBasisPoints,
      },
      ...other
    } = await this.getGlpMintBurnConversionIntermediate();

    let nextAmount = initialAmount + dollarValueD18;

    if (!isUsdcToGlp) {
      nextAmount =
        dollarValueD18 > initialAmount
          ? toBigInt(0)
          : initialAmount - dollarValueD18;
    }

    const targetAmount = (usdgSupply * usdcWeight) / totalWeights;

    if (!targetAmount || targetAmount === 0n) {
      return returnResult(toNumber(feeBasisPoints));
    }

    const initialDiff =
      initialAmount > targetAmount
        ? initialAmount - targetAmount
        : targetAmount - initialAmount;

    const nextDiff =
      nextAmount > targetAmount
        ? nextAmount - targetAmount
        : targetAmount - nextAmount;

    if (nextDiff < initialDiff) {
      const rebateBps = (taxBasisPoints * initialDiff) / targetAmount;

      return returnResult(
        rebateBps > feeBasisPoints ? 0 : toNumber(feeBasisPoints - rebateBps)
      );
    }

    let averageDiff = (initialDiff + nextDiff) / 2n;

    if (averageDiff > targetAmount) {
      averageDiff = targetAmount;
    }

    const taxBps = (taxBasisPoints * averageDiff) / targetAmount;

    return returnResult(toNumber(feeBasisPoints + taxBps));

    function returnResult(result: number) {
      return { result, ...other };
    }
  }
}
