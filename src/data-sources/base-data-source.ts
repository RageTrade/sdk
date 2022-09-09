import { BigNumber, BigNumberish } from 'ethers';
import { NetworkName, VaultName } from '../contracts';

export type MethodNames =
  | 'getNetworkName'
  | 'getAccountIdsByAddress'
  | 'findBlockByTimestamp'
  | 'getPrices'
  | 'getVaultInfo';

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

  getVaultInfo(vaultName: VaultName): Promise<{
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

  perform<MethodName extends MethodNames>(
    method: MethodName,
    _args: Parameters<InstanceType<typeof BaseDataSource>[MethodName]>
  ): ReturnType<InstanceType<typeof BaseDataSource>[MethodName]> {
    throw new Error(
      `${this.constructor.name}.perform[${method}] Not implemented`
    );
  }
}
