/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  Signer,
  utils,
} from 'ethers';
import type { EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from '../../common';

export interface DnGmxJuniorVaultManagerInterface extends utils.Interface {
  functions: {};

  events: {
    'GlpSwapped(uint256,uint256,bool)': EventFragment;
    'ProtocolFeeAccrued(uint256)': EventFragment;
    'RewardsHarvested(uint256,uint256,uint256,uint256,uint256,uint256)': EventFragment;
    'TokenSwapped(address,address,uint256,uint256)': EventFragment;
    'VaultState(uint256,uint256,uint256,uint256,uint256,int256,int256,uint256,uint256,uint256,int256,uint256,uint256,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'GlpSwapped'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'ProtocolFeeAccrued'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'RewardsHarvested'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'TokenSwapped'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'VaultState'): EventFragment;
}

export interface GlpSwappedEventObject {
  glpQuantity: BigNumber;
  usdcQuantity: BigNumber;
  fromGlpToUsdc: boolean;
}
export type GlpSwappedEvent = TypedEvent<
  [BigNumber, BigNumber, boolean],
  GlpSwappedEventObject
>;

export type GlpSwappedEventFilter = TypedEventFilter<GlpSwappedEvent>;

export interface ProtocolFeeAccruedEventObject {
  fees: BigNumber;
}
export type ProtocolFeeAccruedEvent = TypedEvent<
  [BigNumber],
  ProtocolFeeAccruedEventObject
>;

export type ProtocolFeeAccruedEventFilter =
  TypedEventFilter<ProtocolFeeAccruedEvent>;

export interface RewardsHarvestedEventObject {
  wethHarvested: BigNumber;
  esGmxStaked: BigNumber;
  juniorVaultWeth: BigNumber;
  seniorVaultWeth: BigNumber;
  juniorVaultGlp: BigNumber;
  seniorVaultAUsdc: BigNumber;
}
export type RewardsHarvestedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber],
  RewardsHarvestedEventObject
>;

export type RewardsHarvestedEventFilter =
  TypedEventFilter<RewardsHarvestedEvent>;

export interface TokenSwappedEventObject {
  fromToken: string;
  toToken: string;
  fromQuantity: BigNumber;
  toQuantity: BigNumber;
}
export type TokenSwappedEvent = TypedEvent<
  [string, string, BigNumber, BigNumber],
  TokenSwappedEventObject
>;

export type TokenSwappedEventFilter = TypedEventFilter<TokenSwappedEvent>;

export interface VaultStateEventObject {
  eventType: BigNumber;
  btcBorrows: BigNumber;
  ethBorrows: BigNumber;
  btcPoolAmount: BigNumber;
  ethPoolAmount: BigNumber;
  btcTraderOIHedge: BigNumber;
  ethTraderOIHedge: BigNumber;
  glpPrice: BigNumber;
  glpBalance: BigNumber;
  totalAssets: BigNumber;
  dnUsdcDeposited: BigNumber;
  unhedgedGlpInUsdc: BigNumber;
  juniorVaultAusdc: BigNumber;
  seniorVaultAusdc: BigNumber;
}
export type VaultStateEvent = TypedEvent<
  [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ],
  VaultStateEventObject
>;

export type VaultStateEventFilter = TypedEventFilter<VaultStateEvent>;

export interface DnGmxJuniorVaultManager extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DnGmxJuniorVaultManagerInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {};

  callStatic: {};

  filters: {
    'GlpSwapped(uint256,uint256,bool)'(
      glpQuantity?: null,
      usdcQuantity?: null,
      fromGlpToUsdc?: null
    ): GlpSwappedEventFilter;
    GlpSwapped(
      glpQuantity?: null,
      usdcQuantity?: null,
      fromGlpToUsdc?: null
    ): GlpSwappedEventFilter;

    'ProtocolFeeAccrued(uint256)'(fees?: null): ProtocolFeeAccruedEventFilter;
    ProtocolFeeAccrued(fees?: null): ProtocolFeeAccruedEventFilter;

    'RewardsHarvested(uint256,uint256,uint256,uint256,uint256,uint256)'(
      wethHarvested?: null,
      esGmxStaked?: null,
      juniorVaultWeth?: null,
      seniorVaultWeth?: null,
      juniorVaultGlp?: null,
      seniorVaultAUsdc?: null
    ): RewardsHarvestedEventFilter;
    RewardsHarvested(
      wethHarvested?: null,
      esGmxStaked?: null,
      juniorVaultWeth?: null,
      seniorVaultWeth?: null,
      juniorVaultGlp?: null,
      seniorVaultAUsdc?: null
    ): RewardsHarvestedEventFilter;

    'TokenSwapped(address,address,uint256,uint256)'(
      fromToken?: PromiseOrValue<string> | null,
      toToken?: PromiseOrValue<string> | null,
      fromQuantity?: null,
      toQuantity?: null
    ): TokenSwappedEventFilter;
    TokenSwapped(
      fromToken?: PromiseOrValue<string> | null,
      toToken?: PromiseOrValue<string> | null,
      fromQuantity?: null,
      toQuantity?: null
    ): TokenSwappedEventFilter;

    'VaultState(uint256,uint256,uint256,uint256,uint256,int256,int256,uint256,uint256,uint256,int256,uint256,uint256,uint256)'(
      eventType?: PromiseOrValue<BigNumberish> | null,
      btcBorrows?: null,
      ethBorrows?: null,
      btcPoolAmount?: null,
      ethPoolAmount?: null,
      btcTraderOIHedge?: null,
      ethTraderOIHedge?: null,
      glpPrice?: null,
      glpBalance?: null,
      totalAssets?: null,
      dnUsdcDeposited?: null,
      unhedgedGlpInUsdc?: null,
      juniorVaultAusdc?: null,
      seniorVaultAusdc?: null
    ): VaultStateEventFilter;
    VaultState(
      eventType?: PromiseOrValue<BigNumberish> | null,
      btcBorrows?: null,
      ethBorrows?: null,
      btcPoolAmount?: null,
      ethPoolAmount?: null,
      btcTraderOIHedge?: null,
      ethTraderOIHedge?: null,
      glpPrice?: null,
      glpBalance?: null,
      totalAssets?: null,
      dnUsdcDeposited?: null,
      unhedgedGlpInUsdc?: null,
      juniorVaultAusdc?: null,
      seniorVaultAusdc?: null
    ): VaultStateEventFilter;
  };

  estimateGas: {};

  populateTransaction: {};
}
