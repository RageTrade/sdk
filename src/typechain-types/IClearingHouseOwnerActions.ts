/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import { FunctionFragment, Result } from '@ethersproject/abi';
import { Listener, Provider } from '@ethersproject/providers';
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from './common';

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
    initialMarginRatio: BigNumberish;
    maintainanceMarginRatio: BigNumberish;
    twapDuration: BigNumberish;
    isAllowedForTrade: boolean;
    isCrossMargined: boolean;
    oracle: string;
  };

  export type PoolSettingsStructOutput = [
    number,
    number,
    number,
    boolean,
    boolean,
    string
  ] & {
    initialMarginRatio: number;
    maintainanceMarginRatio: number;
    twapDuration: number;
    isAllowedForTrade: boolean;
    isCrossMargined: boolean;
    oracle: string;
  };

  export type LiquidationParamsStruct = {
    liquidationFeeFraction: BigNumberish;
    tokenLiquidationPriceDeltaBps: BigNumberish;
    insuranceFundFeeShareBps: BigNumberish;
    maxRangeLiquidationFees: BigNumberish;
  };

  export type LiquidationParamsStructOutput = [
    number,
    number,
    number,
    BigNumber
  ] & {
    liquidationFeeFraction: number;
    tokenLiquidationPriceDeltaBps: number;
    insuranceFundFeeShareBps: number;
    maxRangeLiquidationFees: BigNumber;
  };
}

export interface IClearingHouseOwnerActionsInterface extends utils.Interface {
  contractName: 'IClearingHouseOwnerActions';
  functions: {
    'updateCollateralSettings(address,(address,uint32,bool))': FunctionFragment;
    'updatePoolSettings(uint32,(uint16,uint16,uint32,bool,bool,address))': FunctionFragment;
    'updateProtocolSettings((uint16,uint16,uint16,uint128),uint256,uint256,uint256)': FunctionFragment;
    'withdrawProtocolFee(address[])': FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: 'updateCollateralSettings',
    values: [string, IClearingHouseStructures.CollateralSettingsStruct]
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
    values: [string[]]
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

  events: {};
}

export interface IClearingHouseOwnerActions extends BaseContract {
  contractName: 'IClearingHouseOwnerActions';
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IClearingHouseOwnerActionsInterface;

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

  functions: {
    updateCollateralSettings(
      cToken: string,
      collateralSettings: IClearingHouseStructures.CollateralSettingsStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updatePoolSettings(
      poolId: BigNumberish,
      newSettings: IClearingHouseStructures.PoolSettingsStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateProtocolSettings(
      liquidationParams: IClearingHouseStructures.LiquidationParamsStruct,
      removeLimitOrderFee: BigNumberish,
      minimumOrderNotional: BigNumberish,
      minRequiredMargin: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawProtocolFee(
      wrapperAddresses: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  updateCollateralSettings(
    cToken: string,
    collateralSettings: IClearingHouseStructures.CollateralSettingsStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updatePoolSettings(
    poolId: BigNumberish,
    newSettings: IClearingHouseStructures.PoolSettingsStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateProtocolSettings(
    liquidationParams: IClearingHouseStructures.LiquidationParamsStruct,
    removeLimitOrderFee: BigNumberish,
    minimumOrderNotional: BigNumberish,
    minRequiredMargin: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawProtocolFee(
    wrapperAddresses: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    updateCollateralSettings(
      cToken: string,
      collateralSettings: IClearingHouseStructures.CollateralSettingsStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    updatePoolSettings(
      poolId: BigNumberish,
      newSettings: IClearingHouseStructures.PoolSettingsStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    updateProtocolSettings(
      liquidationParams: IClearingHouseStructures.LiquidationParamsStruct,
      removeLimitOrderFee: BigNumberish,
      minimumOrderNotional: BigNumberish,
      minRequiredMargin: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawProtocolFee(
      wrapperAddresses: string[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    updateCollateralSettings(
      cToken: string,
      collateralSettings: IClearingHouseStructures.CollateralSettingsStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updatePoolSettings(
      poolId: BigNumberish,
      newSettings: IClearingHouseStructures.PoolSettingsStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateProtocolSettings(
      liquidationParams: IClearingHouseStructures.LiquidationParamsStruct,
      removeLimitOrderFee: BigNumberish,
      minimumOrderNotional: BigNumberish,
      minRequiredMargin: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawProtocolFee(
      wrapperAddresses: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    updateCollateralSettings(
      cToken: string,
      collateralSettings: IClearingHouseStructures.CollateralSettingsStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updatePoolSettings(
      poolId: BigNumberish,
      newSettings: IClearingHouseStructures.PoolSettingsStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateProtocolSettings(
      liquidationParams: IClearingHouseStructures.LiquidationParamsStruct,
      removeLimitOrderFee: BigNumberish,
      minimumOrderNotional: BigNumberish,
      minRequiredMargin: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawProtocolFee(
      wrapperAddresses: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
