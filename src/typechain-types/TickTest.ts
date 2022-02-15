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

export type InfoStruct = {
  sumAX128: BigNumberish;
  sumBX128: BigNumberish;
  sumFpX128: BigNumberish;
  timestampLast: BigNumberish;
};

export type InfoStructOutput = [BigNumber, BigNumber, BigNumber, number] & {
  sumAX128: BigNumber;
  sumBX128: BigNumber;
  sumFpX128: BigNumber;
  timestampLast: number;
};

export interface TickTestInterface extends ethers.utils.Interface {
  functions: {
    'cross(int24)': FunctionFragment;
    'fpGlobal()': FunctionFragment;
    'getFeeGrowthInside(int24,int24,int24)': FunctionFragment;
    'getFundingPaymentGrowthInside(int24,int24,int24)': FunctionFragment;
    'getNetPositionInside(int24,int24,int24)': FunctionFragment;
    'registerTrade(int256,uint256,uint48,uint256,uint256)': FunctionFragment;
    'setFeeGrowthOutsideX128(uint256)': FunctionFragment;
    'setFpGlobal((int256,int256,int256,uint48))': FunctionFragment;
    'setTick(int24,(int256,int256,int256,uint256))': FunctionFragment;
    'sumFeeGlobalX128()': FunctionFragment;
    'ticksExtended(int24)': FunctionFragment;
    'vPool()': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'cross', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'fpGlobal', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'getFeeGrowthInside',
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'getFundingPaymentGrowthInside',
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'getNetPositionInside',
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'registerTrade',
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: 'setFeeGrowthOutsideX128',
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'setFpGlobal',
    values: [InfoStruct]
  ): string;
  encodeFunctionData(
    functionFragment: 'setTick',
    values: [BigNumberish, InfoStruct]
  ): string;
  encodeFunctionData(
    functionFragment: 'sumFeeGlobalX128',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'ticksExtended',
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: 'vPool', values?: undefined): string;

  decodeFunctionResult(functionFragment: 'cross', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'fpGlobal', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'getFeeGrowthInside',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getFundingPaymentGrowthInside',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getNetPositionInside',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'registerTrade',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'setFeeGrowthOutsideX128',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'setFpGlobal',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'setTick', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'sumFeeGlobalX128',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'ticksExtended',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'vPool', data: BytesLike): Result;

  events: {};
}

export interface TickTest extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TickTestInterface;

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
    cross(
      tickNext: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    fpGlobal(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, number] & {
        sumAX128: BigNumber;
        sumBX128: BigNumber;
        sumFpX128: BigNumber;
        timestampLast: number;
      }
    >;

    getFeeGrowthInside(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      tickCurrent: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { extendedFeeGrowthInside: BigNumber }>;

    getFundingPaymentGrowthInside(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      tickCurrent: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { fundingPaymentGrowth: BigNumber }>;

    getNetPositionInside(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      tickCurrent: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { netPositionGrowthX128: BigNumber }>;

    registerTrade(
      tokenAmount: BigNumberish,
      liquidity: BigNumberish,
      blockTimestamp: BigNumberish,
      realPriceX128: BigNumberish,
      virtualPriceX128: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setFeeGrowthOutsideX128(
      _extendedFeeGrowthOutsideX128: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setFpGlobal(
      fpGlobal_: InfoStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTick(
      tickIndex: BigNumberish,
      tick: InfoStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    sumFeeGlobalX128(overrides?: CallOverrides): Promise<[BigNumber]>;

    ticksExtended(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        sumALastX128: BigNumber;
        sumBOutsideX128: BigNumber;
        sumFpOutsideX128: BigNumber;
        sumFeeOutsideX128: BigNumber;
      }
    >;

    vPool(overrides?: CallOverrides): Promise<[string]>;
  };

  cross(
    tickNext: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  fpGlobal(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, number] & {
      sumAX128: BigNumber;
      sumBX128: BigNumber;
      sumFpX128: BigNumber;
      timestampLast: number;
    }
  >;

  getFeeGrowthInside(
    tickLower: BigNumberish,
    tickUpper: BigNumberish,
    tickCurrent: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getFundingPaymentGrowthInside(
    tickLower: BigNumberish,
    tickUpper: BigNumberish,
    tickCurrent: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getNetPositionInside(
    tickLower: BigNumberish,
    tickUpper: BigNumberish,
    tickCurrent: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  registerTrade(
    tokenAmount: BigNumberish,
    liquidity: BigNumberish,
    blockTimestamp: BigNumberish,
    realPriceX128: BigNumberish,
    virtualPriceX128: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setFeeGrowthOutsideX128(
    _extendedFeeGrowthOutsideX128: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setFpGlobal(
    fpGlobal_: InfoStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTick(
    tickIndex: BigNumberish,
    tick: InfoStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  sumFeeGlobalX128(overrides?: CallOverrides): Promise<BigNumber>;

  ticksExtended(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber] & {
      sumALastX128: BigNumber;
      sumBOutsideX128: BigNumber;
      sumFpOutsideX128: BigNumber;
      sumFeeOutsideX128: BigNumber;
    }
  >;

  vPool(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    cross(tickNext: BigNumberish, overrides?: CallOverrides): Promise<void>;

    fpGlobal(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, number] & {
        sumAX128: BigNumber;
        sumBX128: BigNumber;
        sumFpX128: BigNumber;
        timestampLast: number;
      }
    >;

    getFeeGrowthInside(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      tickCurrent: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getFundingPaymentGrowthInside(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      tickCurrent: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNetPositionInside(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      tickCurrent: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    registerTrade(
      tokenAmount: BigNumberish,
      liquidity: BigNumberish,
      blockTimestamp: BigNumberish,
      realPriceX128: BigNumberish,
      virtualPriceX128: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setFeeGrowthOutsideX128(
      _extendedFeeGrowthOutsideX128: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setFpGlobal(
      fpGlobal_: InfoStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    setTick(
      tickIndex: BigNumberish,
      tick: InfoStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    sumFeeGlobalX128(overrides?: CallOverrides): Promise<BigNumber>;

    ticksExtended(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        sumALastX128: BigNumber;
        sumBOutsideX128: BigNumber;
        sumFpOutsideX128: BigNumber;
        sumFeeOutsideX128: BigNumber;
      }
    >;

    vPool(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    cross(
      tickNext: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    fpGlobal(overrides?: CallOverrides): Promise<BigNumber>;

    getFeeGrowthInside(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      tickCurrent: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getFundingPaymentGrowthInside(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      tickCurrent: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNetPositionInside(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      tickCurrent: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    registerTrade(
      tokenAmount: BigNumberish,
      liquidity: BigNumberish,
      blockTimestamp: BigNumberish,
      realPriceX128: BigNumberish,
      virtualPriceX128: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setFeeGrowthOutsideX128(
      _extendedFeeGrowthOutsideX128: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setFpGlobal(
      fpGlobal_: InfoStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTick(
      tickIndex: BigNumberish,
      tick: InfoStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    sumFeeGlobalX128(overrides?: CallOverrides): Promise<BigNumber>;

    ticksExtended(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    vPool(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    cross(
      tickNext: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    fpGlobal(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getFeeGrowthInside(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      tickCurrent: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getFundingPaymentGrowthInside(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      tickCurrent: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNetPositionInside(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      tickCurrent: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    registerTrade(
      tokenAmount: BigNumberish,
      liquidity: BigNumberish,
      blockTimestamp: BigNumberish,
      realPriceX128: BigNumberish,
      virtualPriceX128: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setFeeGrowthOutsideX128(
      _extendedFeeGrowthOutsideX128: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setFpGlobal(
      fpGlobal_: InfoStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTick(
      tickIndex: BigNumberish,
      tick: InfoStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    sumFeeGlobalX128(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ticksExtended(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    vPool(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
