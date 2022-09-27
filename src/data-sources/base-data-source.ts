import { BigNumber, BigNumberish } from 'ethers';
import { NetworkName, VaultName } from '../contracts';
import {
  PricesResult,
  PoolInfoResult,
  VaultInfoResult,
  GmxVaultInfoResult,
  GmxVaultInfoByTokenAddressResult,
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
  | 'getGmxVaultInfoByTokenAddress';

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

  getNetworkName(): Promise<NetworkName> {
    return this.perform('getNetworkName', []);
  }

  getAccountIdsByAddress(address: string): Promise<number[]> {
    return this.perform('getAccountIdsByAddress', [address]);
  }

  // TODO remove
  findBlockByTimestamp(timestamp: number): Promise<number> {
    console.log(
      'The method findBlockByTimestamp is deprecated, please use getBlockByTimestamp'
    );

    return this.perform('findBlockByTimestamp', [timestamp]);
  }

  getBlockByTimestamp(timestamp: number): Promise<number> {
    return this.perform('getBlockByTimestamp', [timestamp]);
  }

  getPrices(poolId: BigNumberish): Promise<PricesResult> {
    return this.perform('getPrices', [poolId]);
  }

  getPoolInfo(poolId: BigNumberish): Promise<PoolInfoResult> {
    return this.perform('getPoolInfo', [poolId]);
  }

  getVaultInfo(vaultName: VaultName): Promise<VaultInfoResult> {
    return this.perform('getVaultInfo', [vaultName]);
  }

  getGmxVaultInfo(): Promise<GmxVaultInfoResult> {
    return this.perform('getGmxVaultInfo', []);
  }

  getGmxVaultInfoByTokenAddress(
    tokenAddress: string
  ): Promise<GmxVaultInfoByTokenAddressResult> {
    return this.perform('getGmxVaultInfoByTokenAddress', [tokenAddress]);
  }

  perform<MethodName extends MethodNames>(
    method: MethodName,
    _args: Parameters<InstanceType<typeof BaseDataSource>[MethodName]>
  ): ReturnType<InstanceType<typeof BaseDataSource>[MethodName]> {
    throw new Error(
      `${this.constructor.name}.perform[${method}] Not implemented`
    );
  }

  // helper methods that use the above methods to calculate something

  async getDerivedAssetAmount(
    tokenAddress: string,
    depositAmount: BigNumber,
    decimals: number
  ) {
    const slippageThreshold = BigNumber.from(200); // 2%
    const PRICE_PRECISION = BigNumber.from(10).pow(30);
    const MAX_BPS = BigNumber.from(10_000);

    const { underlyingVaultMinPrice } =
      await this.getGmxVaultInfoByTokenAddress(tokenAddress);

    const usdgUnit = BigNumber.from(10).pow(18);
    const depositAmountUnit = BigNumber.from(10).pow(decimals);

    const usdg = depositAmount
      .mul(underlyingVaultMinPrice)
      .mul(MAX_BPS.sub(slippageThreshold))
      .div(MAX_BPS)
      .div(PRICE_PRECISION)
      .mul(usdgUnit)
      .div(depositAmountUnit);

    const { aumInUsdg, glpSupply } = await this.getGmxVaultInfo();

    const sGLPAmount = usdg.mul(glpSupply).div(aumInUsdg);

    return sGLPAmount;
  }
}
