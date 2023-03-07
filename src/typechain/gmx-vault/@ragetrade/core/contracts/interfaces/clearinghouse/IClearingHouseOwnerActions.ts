/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from 'ethers';
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from '../../../../../common';

export declare namespace IClearingHouseStructures {
  export type CollateralSettingsStruct = {
    oracle: AddressLike;
    twapDuration: BigNumberish;
    isAllowedForDeposit: boolean;
  };

  export type CollateralSettingsStructOutput = [
    oracle: string,
    twapDuration: bigint,
    isAllowedForDeposit: boolean
  ] & { oracle: string; twapDuration: bigint; isAllowedForDeposit: boolean };

  export type PoolSettingsStruct = {
    initialMarginRatioBps: BigNumberish;
    maintainanceMarginRatioBps: BigNumberish;
    maxVirtualPriceDeviationRatioBps: BigNumberish;
    twapDuration: BigNumberish;
    isAllowedForTrade: boolean;
    isCrossMargined: boolean;
    oracle: AddressLike;
  };

  export type PoolSettingsStructOutput = [
    initialMarginRatioBps: bigint,
    maintainanceMarginRatioBps: bigint,
    maxVirtualPriceDeviationRatioBps: bigint,
    twapDuration: bigint,
    isAllowedForTrade: boolean,
    isCrossMargined: boolean,
    oracle: string
  ] & {
    initialMarginRatioBps: bigint;
    maintainanceMarginRatioBps: bigint;
    maxVirtualPriceDeviationRatioBps: bigint;
    twapDuration: bigint;
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
    rangeLiquidationFeeFraction: bigint,
    tokenLiquidationFeeFraction: bigint,
    closeFactorMMThresholdBps: bigint,
    partialLiquidationCloseFactorBps: bigint,
    insuranceFundFeeShareBps: bigint,
    liquidationSlippageSqrtToleranceBps: bigint,
    maxRangeLiquidationFees: bigint,
    minNotionalLiquidatable: bigint
  ] & {
    rangeLiquidationFeeFraction: bigint;
    tokenLiquidationFeeFraction: bigint;
    closeFactorMMThresholdBps: bigint;
    partialLiquidationCloseFactorBps: bigint;
    insuranceFundFeeShareBps: bigint;
    liquidationSlippageSqrtToleranceBps: bigint;
    maxRangeLiquidationFees: bigint;
    minNotionalLiquidatable: bigint;
  };
}

export interface IClearingHouseOwnerActionsInterface extends Interface {
  getFunction(
    nameOrSignature:
      | 'updateCollateralSettings'
      | 'updatePoolSettings'
      | 'updateProtocolSettings'
      | 'withdrawProtocolFee'
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'updateCollateralSettings',
    values: [AddressLike, IClearingHouseStructures.CollateralSettingsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: 'updatePoolSettings',
    values: [BigNumberish, IClearingHouseStructures.PoolSettingsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: 'updateProtocolSettings',
    values: [
      IClearingHouseStructures.LiquidationParamsStruct,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: 'withdrawProtocolFee',
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: 'updateCollateralSettings',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'updatePoolSettings',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'updateProtocolSettings',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'withdrawProtocolFee',
    data: BytesLike
  ): Result;
}

export interface IClearingHouseOwnerActions extends BaseContract {
  connect(runner?: ContractRunner | null): BaseContract;
  attach(addressOrName: AddressLike): this;
  deployed(): Promise<this>;

  interface: IClearingHouseOwnerActionsInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  updateCollateralSettings: TypedContractMethod<
    [
      cToken: AddressLike,
      collateralSettings: IClearingHouseStructures.CollateralSettingsStruct
    ],
    [void],
    'nonpayable'
  >;

  updatePoolSettings: TypedContractMethod<
    [
      poolId: BigNumberish,
      newSettings: IClearingHouseStructures.PoolSettingsStruct
    ],
    [void],
    'nonpayable'
  >;

  updateProtocolSettings: TypedContractMethod<
    [
      liquidationParams: IClearingHouseStructures.LiquidationParamsStruct,
      removeLimitOrderFee: BigNumberish,
      minimumOrderNotional: BigNumberish,
      minRequiredMargin: BigNumberish
    ],
    [void],
    'nonpayable'
  >;

  withdrawProtocolFee: TypedContractMethod<
    [numberOfPoolsToUpdateInThisTx: BigNumberish],
    [void],
    'nonpayable'
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: 'updateCollateralSettings'
  ): TypedContractMethod<
    [
      cToken: AddressLike,
      collateralSettings: IClearingHouseStructures.CollateralSettingsStruct
    ],
    [void],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'updatePoolSettings'
  ): TypedContractMethod<
    [
      poolId: BigNumberish,
      newSettings: IClearingHouseStructures.PoolSettingsStruct
    ],
    [void],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'updateProtocolSettings'
  ): TypedContractMethod<
    [
      liquidationParams: IClearingHouseStructures.LiquidationParamsStruct,
      removeLimitOrderFee: BigNumberish,
      minimumOrderNotional: BigNumberish,
      minRequiredMargin: BigNumberish
    ],
    [void],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'withdrawProtocolFee'
  ): TypedContractMethod<
    [numberOfPoolsToUpdateInThisTx: BigNumberish],
    [void],
    'nonpayable'
  >;

  filters: {};
}
