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
} from '../../../../../common';

export declare namespace IClearingHouseStructures {
  export type CollateralSettingsStruct = {
    oracle: string;
    twapDuration: BigNumberish;
    isAllowedForDeposit: boolean;
  };

  export type CollateralSettingsStructOutput = [string, number, boolean] & {
    oracle: string;
    twapDuration: number;
    isAllowedForDeposit: boolean;
  };

  export type PoolSettingsStruct = {
    initialMarginRatioBps: BigNumberish;
    maintainanceMarginRatioBps: BigNumberish;
    maxVirtualPriceDeviationRatioBps: BigNumberish;
    twapDuration: BigNumberish;
    isAllowedForTrade: boolean;
    isCrossMargined: boolean;
    oracle: string;
  };

  export type PoolSettingsStructOutput = [
    number,
    number,
    number,
    number,
    boolean,
    boolean,
    string
  ] & {
    initialMarginRatioBps: number;
    maintainanceMarginRatioBps: number;
    maxVirtualPriceDeviationRatioBps: number;
    twapDuration: number;
    isAllowedForTrade: boolean;
    isCrossMargined: boolean;
    oracle: string;
  };

  export type LiquidationParamsStruct = {
    rangeLiquidationFeeFraction: BigNumberish;
    tokenLiquidationFeeFraction: BigNumberish;
    closeFactorMMThresholdBps: BigNumberish;
    partialLiquidationCloseFactorBps: BigNumberish;
    insuranceFundFeeShareBps: BigNumberish;
    liquidationSlippageSqrtToleranceBps: BigNumberish;
    maxRangeLiquidationFees: BigNumberish;
    minNotionalLiquidatable: BigNumberish;
  };

  export type LiquidationParamsStructOutput = [
    number,
    number,
    number,
    number,
    number,
    number,
    BigNumber,
    BigNumber
  ] & {
    rangeLiquidationFeeFraction: number;
    tokenLiquidationFeeFraction: number;
    closeFactorMMThresholdBps: number;
    partialLiquidationCloseFactorBps: number;
    insuranceFundFeeShareBps: number;
    liquidationSlippageSqrtToleranceBps: number;
    maxRangeLiquidationFees: BigNumber;
    minNotionalLiquidatable: BigNumber;
  };
}

export interface IClearingHouseEventsInterface extends utils.Interface {
  functions: {};

  events: {
    'AccountCreated(address,uint256)': EventFragment;
    'CollateralSettingsUpdated(address,tuple)': EventFragment;
    'PausedUpdated(bool)': EventFragment;
    'PoolSettingsUpdated(uint32,tuple)': EventFragment;
    'ProtocolSettingsUpdated(tuple,uint256,uint256,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'AccountCreated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'CollateralSettingsUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'PausedUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'PoolSettingsUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'ProtocolSettingsUpdated'): EventFragment;
}

export interface AccountCreatedEventObject {
  ownerAddress: string;
  accountId: BigNumber;
}
export type AccountCreatedEvent = TypedEvent<
  [string, BigNumber],
  AccountCreatedEventObject
>;

export type AccountCreatedEventFilter = TypedEventFilter<AccountCreatedEvent>;

export interface CollateralSettingsUpdatedEventObject {
  cToken: string;
  cTokenInfo: IClearingHouseStructures.CollateralSettingsStructOutput;
}
export type CollateralSettingsUpdatedEvent = TypedEvent<
  [string, IClearingHouseStructures.CollateralSettingsStructOutput],
  CollateralSettingsUpdatedEventObject
>;

export type CollateralSettingsUpdatedEventFilter =
  TypedEventFilter<CollateralSettingsUpdatedEvent>;

export interface PausedUpdatedEventObject {
  paused: boolean;
}
export type PausedUpdatedEvent = TypedEvent<
  [boolean],
  PausedUpdatedEventObject
>;

export type PausedUpdatedEventFilter = TypedEventFilter<PausedUpdatedEvent>;

export interface PoolSettingsUpdatedEventObject {
  poolId: number;
  settings: IClearingHouseStructures.PoolSettingsStructOutput;
}
export type PoolSettingsUpdatedEvent = TypedEvent<
  [number, IClearingHouseStructures.PoolSettingsStructOutput],
  PoolSettingsUpdatedEventObject
>;

export type PoolSettingsUpdatedEventFilter =
  TypedEventFilter<PoolSettingsUpdatedEvent>;

export interface ProtocolSettingsUpdatedEventObject {
  liquidationParams: IClearingHouseStructures.LiquidationParamsStructOutput;
  removeLimitOrderFee: BigNumber;
  minimumOrderNotional: BigNumber;
  minRequiredMargin: BigNumber;
}
export type ProtocolSettingsUpdatedEvent = TypedEvent<
  [
    IClearingHouseStructures.LiquidationParamsStructOutput,
    BigNumber,
    BigNumber,
    BigNumber
  ],
  ProtocolSettingsUpdatedEventObject
>;

export type ProtocolSettingsUpdatedEventFilter =
  TypedEventFilter<ProtocolSettingsUpdatedEvent>;

export interface IClearingHouseEvents extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IClearingHouseEventsInterface;

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
    'AccountCreated(address,uint256)'(
      ownerAddress?: string | null,
      accountId?: null
    ): AccountCreatedEventFilter;
    AccountCreated(
      ownerAddress?: string | null,
      accountId?: null
    ): AccountCreatedEventFilter;

    'CollateralSettingsUpdated(address,tuple)'(
      cToken?: null,
      cTokenInfo?: null
    ): CollateralSettingsUpdatedEventFilter;
    CollateralSettingsUpdated(
      cToken?: null,
      cTokenInfo?: null
    ): CollateralSettingsUpdatedEventFilter;

    'PausedUpdated(bool)'(paused?: null): PausedUpdatedEventFilter;
    PausedUpdated(paused?: null): PausedUpdatedEventFilter;

    'PoolSettingsUpdated(uint32,tuple)'(
      poolId?: null,
      settings?: null
    ): PoolSettingsUpdatedEventFilter;
    PoolSettingsUpdated(
      poolId?: null,
      settings?: null
    ): PoolSettingsUpdatedEventFilter;

    'ProtocolSettingsUpdated(tuple,uint256,uint256,uint256)'(
      liquidationParams?: null,
      removeLimitOrderFee?: null,
      minimumOrderNotional?: null,
      minRequiredMargin?: null
    ): ProtocolSettingsUpdatedEventFilter;
    ProtocolSettingsUpdated(
      liquidationParams?: null,
      removeLimitOrderFee?: null,
      minimumOrderNotional?: null,
      minRequiredMargin?: null
    ): ProtocolSettingsUpdatedEventFilter;
  };

  estimateGas: {};

  populateTransaction: {};
}