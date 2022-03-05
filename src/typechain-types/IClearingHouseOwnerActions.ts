/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from 'ethers';
import { BytesLike } from '@ethersproject/bytes';
import { Listener, Provider } from '@ethersproject/providers';
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi';
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from './common';

export type CollateralSettingsStruct = {
  oracle: string;
  twapDuration: BigNumberish;
  supported: boolean;
};

export type CollateralSettingsStructOutput = [string, number, boolean] & {
  oracle: string;
  twapDuration: number;
  supported: boolean;
};

export type PoolSettingsStruct = {
  initialMarginRatio: BigNumberish;
  maintainanceMarginRatio: BigNumberish;
  twapDuration: BigNumberish;
  supported: boolean;
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
  supported: boolean;
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

export interface IClearingHouseOwnerActionsInterface
  extends ethers.utils.Interface {
  functions: {
    'updateCollateralSettings(address,(address,uint32,bool))': FunctionFragment;
    'updatePoolSettings(uint32,(uint16,uint16,uint32,bool,bool,address))': FunctionFragment;
    'updateProtocolSettings((uint16,uint16,uint16,uint128),uint256,uint256,uint256)': FunctionFragment;
    'withdrawProtocolFee(address[])': FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: 'updateCollateralSettings',
    values: [string, CollateralSettingsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: 'updatePoolSettings',
    values: [BigNumberish, PoolSettingsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: 'updateProtocolSettings',
    values: [LiquidationParamsStruct, BigNumberish, BigNumberish, BigNumberish]
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
      collateralSettings: CollateralSettingsStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updatePoolSettings(
      poolId: BigNumberish,
      newSettings: PoolSettingsStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateProtocolSettings(
      liquidationParams: LiquidationParamsStruct,
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
    collateralSettings: CollateralSettingsStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updatePoolSettings(
    poolId: BigNumberish,
    newSettings: PoolSettingsStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateProtocolSettings(
    liquidationParams: LiquidationParamsStruct,
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
      collateralSettings: CollateralSettingsStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    updatePoolSettings(
      poolId: BigNumberish,
      newSettings: PoolSettingsStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    updateProtocolSettings(
      liquidationParams: LiquidationParamsStruct,
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
      collateralSettings: CollateralSettingsStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updatePoolSettings(
      poolId: BigNumberish,
      newSettings: PoolSettingsStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateProtocolSettings(
      liquidationParams: LiquidationParamsStruct,
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
      collateralSettings: CollateralSettingsStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updatePoolSettings(
      poolId: BigNumberish,
      newSettings: PoolSettingsStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateProtocolSettings(
      liquidationParams: LiquidationParamsStruct,
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
