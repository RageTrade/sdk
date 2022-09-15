import { BigNumber, BigNumberish } from 'ethers';
import { NetworkName, VaultName } from '../contracts';

export type MethodNames =
  | 'getNetworkName'
  | 'getAccountIdsByAddress'
  | 'findBlockByTimestamp'
  | 'getPrices'
  | 'getPoolInfo'
  | 'getVaultInfo'
  | 'getGmxVaultInfo'
  | 'getGmxVaultInfoByTokenAddress';

export abstract class BaseDataSource {
  _isDataSource: boolean;
  constructor() {
    this._isDataSource = true;
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

  findBlockByTimestamp(timestamp: number): Promise<number> {
    return this.perform('findBlockByTimestamp', [timestamp]);
  }

  getPrices(poolId: BigNumberish): Promise<{
    realPrice: number;
    virtualPrice: number;
    realTwapPrice: number;
    virtualTwapPrice: number;

    realPriceD18: BigNumber;
    virtualPriceD18: BigNumber;
    realTwapPriceD18: BigNumber;
    virtualTwapPriceD18: BigNumber;
  }> {
    return this.perform('getPrices', [poolId]);
  }

  getPoolInfo(poolId: BigNumberish): Promise<{
    realPrice: number;
    virtualPrice: number;
    realTwapPrice: number;
    virtualTwapPrice: number;
    fundingRate: number;

    realSqrtPriceX96: BigNumber;
    virtualSqrtPriceX96: BigNumber;
    realPriceX128: BigNumber;
    virtualPriceX128: BigNumber;
    realTwapPriceX128: BigNumber;
    virtualTwapPriceX128: BigNumber;
    fundingRateX128: BigNumber;
    sumAX128: BigNumber;

    realPriceD18: BigNumber;
    virtualPriceD18: BigNumber;
    realTwapPriceD18: BigNumber;
    virtualTwapPriceD18: BigNumber;
    fundingRateD18: BigNumber;
  }> {
    return this.perform('getPoolInfo', [poolId]);
  }

  getVaultInfo(vaultName: VaultName): Promise<{
    poolComposition: {
      rageAmount: string;
      nativeAmount: string;
      ragePercentage: string;
      nativePercentage: string;
      nativeProtocolName: string;
    };

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
    return this.perform('getVaultInfo', [vaultName]);
  }

  getGmxVaultInfo(): Promise<{
    aumInUsdg: BigNumber;
    glpSupply: BigNumber;
  }> {
    return this.perform('getGmxVaultInfo', []);
  }

  getGmxVaultInfoByTokenAddress(tokenAddress: string): Promise<{
    underlyingVaultMinPrice: BigNumber;
  }> {
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
