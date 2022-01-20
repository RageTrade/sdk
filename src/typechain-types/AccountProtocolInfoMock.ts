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
  whitelisted: boolean;
  oracle: string;
};

export type RageTradePoolSettingsStructOutput = [
  number,
  number,
  number,
  boolean,
  string
] & {
  initialMarginRatio: number;
  maintainanceMarginRatio: number;
  twapDuration: number;
  whitelisted: boolean;
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

export interface AccountProtocolInfoMockInterface
  extends ethers.utils.Interface {
  functions: {
    'fixFee()': FunctionFragment;
    'protocol()': FunctionFragment;
    'registerPool(address,(address,address,(uint16,uint16,uint32,bool,address)))': FunctionFragment;
    'setAccountStorage((uint16,uint16,uint16),uint256,uint256,uint256,uint256)': FunctionFragment;
    'setVBaseAddress(address)': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'fixFee', values?: undefined): string;
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

  decodeFunctionResult(functionFragment: 'fixFee', data: BytesLike): Result;
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

  events: {};
}

export interface AccountProtocolInfoMock extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AccountProtocolInfoMockInterface;

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

    protocol(
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        LiquidationParamsStructOutput,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        vBase: string;
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
  };

  fixFee(overrides?: CallOverrides): Promise<BigNumber>;

  protocol(
    overrides?: CallOverrides
  ): Promise<
    [string, LiquidationParamsStructOutput, BigNumber, BigNumber, BigNumber] & {
      vBase: string;
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

  callStatic: {
    fixFee(overrides?: CallOverrides): Promise<BigNumber>;

    protocol(
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        LiquidationParamsStructOutput,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        vBase: string;
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
  };

  filters: {};

  estimateGas: {
    fixFee(overrides?: CallOverrides): Promise<BigNumber>;

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
  };

  populateTransaction: {
    fixFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

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
  };
}
