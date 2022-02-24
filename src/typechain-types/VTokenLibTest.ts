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

export type LiquidationParamsStruct = {
  liquidationFeeFraction: BigNumberish;
  tokenLiquidationPriceDeltaBps: BigNumberish;
  insuranceFundFeeShareBps: BigNumberish;
};

export type LiquidationParamsStructOutput = [number, number, number] & {
  liquidationFeeFraction: number;
  tokenLiquidationPriceDeltaBps: number;
  insuranceFundFeeShareBps: number;
};

export type RageTradePoolSettingsStruct = {
  initialMarginRatio: BigNumberish;
  maintainanceMarginRatio: BigNumberish;
  twapDuration: BigNumberish;
  supported: boolean;
  isCrossMargined: boolean;
  oracle: string;
};

export type RageTradePoolSettingsStructOutput = [
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

export type RageTradePoolStruct = {
  vPool: string;
  vPoolWrapper: string;
  settings: RageTradePoolSettingsStruct;
};

export type RageTradePoolStructOutput = [
  string,
  string,
  RageTradePoolSettingsStructOutput
] & {
  vPool: string;
  vPoolWrapper: string;
  settings: RageTradePoolSettingsStructOutput;
};

export interface VTokenLibTestInterface extends ethers.utils.Interface {
  functions: {
    'fixFee()': FunctionFragment;
    'getMarginRatio(address,bool)': FunctionFragment;
    'getRealTwapSqrtPrice(address)': FunctionFragment;
    'getVirtualTwapSqrtPrice(address)': FunctionFragment;
    'protocol()': FunctionFragment;
    'registerPool(address,(address,address,(uint16,uint16,uint32,bool,bool,address)))': FunctionFragment;
    'setAccountStorage((uint16,uint16,uint16),uint256,uint256,uint256,uint256)': FunctionFragment;
    'setVBaseAddress(address)': FunctionFragment;
    'vPool(address)': FunctionFragment;
    'vPoolWrapper(address)': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'fixFee', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'getMarginRatio',
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: 'getRealTwapSqrtPrice',
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: 'getVirtualTwapSqrtPrice',
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: 'protocol', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'registerPool',
    values: [string, RageTradePoolStruct]
  ): string;
  encodeFunctionData(
    functionFragment: 'setAccountStorage',
    values: [
      LiquidationParamsStruct,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: 'setVBaseAddress',
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: 'vPool', values: [string]): string;
  encodeFunctionData(
    functionFragment: 'vPoolWrapper',
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: 'fixFee', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'getMarginRatio',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getRealTwapSqrtPrice',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getVirtualTwapSqrtPrice',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'protocol', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'registerPool',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'setAccountStorage',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'setVBaseAddress',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'vPool', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'vPoolWrapper',
    data: BytesLike
  ): Result;

  events: {};
}

export interface VTokenLibTest extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: VTokenLibTestInterface;

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
    fixFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    getMarginRatio(
      vToken: string,
      isInitialMargin: boolean,
      overrides?: CallOverrides
    ): Promise<[number]>;

    getRealTwapSqrtPrice(
      vToken: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getVirtualTwapSqrtPrice(
      vToken: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    protocol(
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        LiquidationParamsStructOutput,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        vBase: string;
        rBase: string;
        liquidationParams: LiquidationParamsStructOutput;
        minRequiredMargin: BigNumber;
        removeLimitOrderFee: BigNumber;
        minimumOrderNotional: BigNumber;
      }
    >;

    registerPool(
      full: string,
      rageTradePool: RageTradePoolStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setAccountStorage(
      _liquidationParams: LiquidationParamsStruct,
      _minRequiredMargin: BigNumberish,
      _removeLimitOrderFee: BigNumberish,
      _minimumOrderNotional: BigNumberish,
      _fixFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setVBaseAddress(
      _vBase: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    vPool(vToken: string, overrides?: CallOverrides): Promise<[string]>;

    vPoolWrapper(vToken: string, overrides?: CallOverrides): Promise<[string]>;
  };

  fixFee(overrides?: CallOverrides): Promise<BigNumber>;

  getMarginRatio(
    vToken: string,
    isInitialMargin: boolean,
    overrides?: CallOverrides
  ): Promise<number>;

  getRealTwapSqrtPrice(
    vToken: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getVirtualTwapSqrtPrice(
    vToken: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  protocol(
    overrides?: CallOverrides
  ): Promise<
    [
      string,
      string,
      LiquidationParamsStructOutput,
      BigNumber,
      BigNumber,
      BigNumber
    ] & {
      vBase: string;
      rBase: string;
      liquidationParams: LiquidationParamsStructOutput;
      minRequiredMargin: BigNumber;
      removeLimitOrderFee: BigNumber;
      minimumOrderNotional: BigNumber;
    }
  >;

  registerPool(
    full: string,
    rageTradePool: RageTradePoolStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setAccountStorage(
    _liquidationParams: LiquidationParamsStruct,
    _minRequiredMargin: BigNumberish,
    _removeLimitOrderFee: BigNumberish,
    _minimumOrderNotional: BigNumberish,
    _fixFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setVBaseAddress(
    _vBase: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  vPool(vToken: string, overrides?: CallOverrides): Promise<string>;

  vPoolWrapper(vToken: string, overrides?: CallOverrides): Promise<string>;

  callStatic: {
    fixFee(overrides?: CallOverrides): Promise<BigNumber>;

    getMarginRatio(
      vToken: string,
      isInitialMargin: boolean,
      overrides?: CallOverrides
    ): Promise<number>;

    getRealTwapSqrtPrice(
      vToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getVirtualTwapSqrtPrice(
      vToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    protocol(
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        LiquidationParamsStructOutput,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        vBase: string;
        rBase: string;
        liquidationParams: LiquidationParamsStructOutput;
        minRequiredMargin: BigNumber;
        removeLimitOrderFee: BigNumber;
        minimumOrderNotional: BigNumber;
      }
    >;

    registerPool(
      full: string,
      rageTradePool: RageTradePoolStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    setAccountStorage(
      _liquidationParams: LiquidationParamsStruct,
      _minRequiredMargin: BigNumberish,
      _removeLimitOrderFee: BigNumberish,
      _minimumOrderNotional: BigNumberish,
      _fixFee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setVBaseAddress(_vBase: string, overrides?: CallOverrides): Promise<void>;

    vPool(vToken: string, overrides?: CallOverrides): Promise<string>;

    vPoolWrapper(vToken: string, overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    fixFee(overrides?: CallOverrides): Promise<BigNumber>;

    getMarginRatio(
      vToken: string,
      isInitialMargin: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRealTwapSqrtPrice(
      vToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getVirtualTwapSqrtPrice(
      vToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    protocol(overrides?: CallOverrides): Promise<BigNumber>;

    registerPool(
      full: string,
      rageTradePool: RageTradePoolStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setAccountStorage(
      _liquidationParams: LiquidationParamsStruct,
      _minRequiredMargin: BigNumberish,
      _removeLimitOrderFee: BigNumberish,
      _minimumOrderNotional: BigNumberish,
      _fixFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setVBaseAddress(
      _vBase: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    vPool(vToken: string, overrides?: CallOverrides): Promise<BigNumber>;

    vPoolWrapper(vToken: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    fixFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getMarginRatio(
      vToken: string,
      isInitialMargin: boolean,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRealTwapSqrtPrice(
      vToken: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getVirtualTwapSqrtPrice(
      vToken: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    protocol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    registerPool(
      full: string,
      rageTradePool: RageTradePoolStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setAccountStorage(
      _liquidationParams: LiquidationParamsStruct,
      _minRequiredMargin: BigNumberish,
      _removeLimitOrderFee: BigNumberish,
      _minimumOrderNotional: BigNumberish,
      _fixFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setVBaseAddress(
      _vBase: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    vPool(
      vToken: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    vPoolWrapper(
      vToken: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
