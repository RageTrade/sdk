import { BigNumber, BigNumberish } from 'ethers';
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
  GeneralDataResult,
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
  | 'getGlpMintBurnConversion'
  | 'getGeneralData';

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

  getGlpMintBurnConversionIntermediate(): Promise<
    ResultWithMetadata<MintBurnConversionIntermediateResult>
  > {
    return this.perform('getGlpMintBurnConversionIntermediate', []);
  }

  getGeneralData(): Promise<ResultWithMetadata<GeneralDataResult>> {
    return this.perform('getGeneralData', []);
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
    depositAmount: BigNumber,
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
    depositAmount: BigNumber,
    decimals: number
  ): Promise<ResultWithMetadata<BigNumber>> {
    const slippageThreshold = BigNumber.from(200); // 2%
    const PRICE_PRECISION = BigNumber.from(10).pow(30);
    const MAX_BPS = BigNumber.from(10_000);

    const {
      result: { underlyingVaultMinPriceD30 },
      cacheTimestamp: timestamp1,
    } = await this.getGmxVaultInfoByTokenAddress(tokenAddress);

    const usdgUnit = BigNumber.from(10).pow(18);
    const depositAmountUnit = BigNumber.from(10).pow(decimals);

    const usdg = depositAmount
      .mul(underlyingVaultMinPriceD30)
      .mul(MAX_BPS.sub(slippageThreshold))
      .div(MAX_BPS)
      .div(PRICE_PRECISION)
      .mul(usdgUnit)
      .div(depositAmountUnit);

    const {
      result: { aumInUsdgD18, glpSupplyD18 },
      cacheTimestamp: timestamp2,
    } = await this.getGmxVaultInfo();
    const sGLPAmount = usdg.mul(glpSupplyD18).div(aumInUsdgD18);
    return {
      result: sGLPAmount,
      cacheTimestamp:
        timestamp1 !== undefined && timestamp2 !== undefined
          ? Math.min(timestamp1, timestamp2)
          : undefined,
    };
  }

  async getGlpMintBurnConversion(
    dollarValueD18: BigNumber,
    isTokenToGlp: boolean,
    tokenName: 'usdc' | 'weth' = 'usdc'
  ): Promise<ResultWithMetadata<number>> {
    const {
      result: {
        initialAmount,
        usdgSupply,
        usdcWeight,
        wethWeight,
        totalWeights,
        feeBasisPoints,
        taxBasisPoints,
      },
      ...other
    } = await this.getGlpMintBurnConversionIntermediate();

    let nextAmount = initialAmount.add(dollarValueD18);

    if (!isTokenToGlp) {
      nextAmount = dollarValueD18.gt(initialAmount)
        ? BigNumber.from(0)
        : initialAmount.sub(dollarValueD18);
    }

    const targetAmount = usdgSupply
      .mul(tokenName === 'usdc' ? usdcWeight : wethWeight)
      .div(totalWeights);

    if (!targetAmount || targetAmount.eq(0)) {
      return returnResult(feeBasisPoints.toNumber());
    }

    const initialDiff = initialAmount.gt(targetAmount)
      ? initialAmount.sub(targetAmount)
      : targetAmount.sub(initialAmount);

    const nextDiff = nextAmount.gt(targetAmount)
      ? nextAmount.sub(targetAmount)
      : targetAmount.sub(nextAmount);

    if (nextDiff.lt(initialDiff)) {
      const rebateBps = taxBasisPoints.mul(initialDiff).div(targetAmount);

      return returnResult(
        rebateBps.gt(feeBasisPoints)
          ? 0
          : feeBasisPoints.sub(rebateBps).toNumber()
      );
    }

    let averageDiff = initialDiff.add(nextDiff).div(2);

    if (averageDiff.gt(targetAmount)) {
      averageDiff = targetAmount;
    }

    const taxBps = taxBasisPoints.mul(averageDiff).div(targetAmount);

    return returnResult(feeBasisPoints.add(taxBps).toNumber());

    function returnResult(result: number) {
      return { result, ...other };
    }
  }
}
