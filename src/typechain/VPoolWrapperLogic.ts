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
import { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import { Listener, Provider } from '@ethersproject/providers';
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from './common';

export declare namespace IVPoolWrapper {
  export type InitializeVPoolWrapperParamsStruct = {
    clearingHouse: string;
    vToken: string;
    vBase: string;
    vPool: string;
    liquidityFeePips: BigNumberish;
    protocolFeePips: BigNumberish;
    UNISWAP_V3_DEFAULT_FEE_TIER: BigNumberish;
  };

  export type InitializeVPoolWrapperParamsStructOutput = [
    string,
    string,
    string,
    string,
    number,
    number,
    number
  ] & {
    clearingHouse: string;
    vToken: string;
    vBase: string;
    vPool: string;
    liquidityFeePips: number;
    protocolFeePips: number;
    UNISWAP_V3_DEFAULT_FEE_TIER: number;
  };

  export type WrapperValuesInsideStruct = {
    sumAX128: BigNumberish;
    sumBInsideX128: BigNumberish;
    sumFpInsideX128: BigNumberish;
    sumFeeInsideX128: BigNumberish;
  };

  export type WrapperValuesInsideStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    sumAX128: BigNumber;
    sumBInsideX128: BigNumber;
    sumFpInsideX128: BigNumber;
    sumFeeInsideX128: BigNumber;
  };
}

export interface VPoolWrapperLogicInterface extends utils.Interface {
  contractName: 'VPoolWrapperLogic';
  functions: {
    '__VPoolWrapper_init((address,address,address,address,uint24,uint24,uint24))': FunctionFragment;
    'accruedProtocolFee()': FunctionFragment;
    'clearingHouse()': FunctionFragment;
    'collectAccruedProtocolFee()': FunctionFragment;
    'extsload(bytes32)': FunctionFragment;
    'fpGlobal()': FunctionFragment;
    'getExtrapolatedSumAX128()': FunctionFragment;
    'getExtrapolatedValuesInside(int24,int24)': FunctionFragment;
    'getSumAX128()': FunctionFragment;
    'getValuesInside(int24,int24)': FunctionFragment;
    'liquidityChange(int24,int24,int128)': FunctionFragment;
    'liquidityFeePips()': FunctionFragment;
    'protocolFeePips()': FunctionFragment;
    'setLiquidityFee(uint24)': FunctionFragment;
    'setProtocolFee(uint24)': FunctionFragment;
    'sumFeeGlobalX128()': FunctionFragment;
    'swap(bool,int256,uint160)': FunctionFragment;
    'swapToken(int256,uint160,bool)': FunctionFragment;
    'ticksExtended(int24)': FunctionFragment;
    'uniswapFeePips()': FunctionFragment;
    'uniswapV3MintCallback(uint256,uint256,bytes)': FunctionFragment;
    'uniswapV3SwapCallback(int256,int256,bytes)': FunctionFragment;
    'updateGlobalFundingState()': FunctionFragment;
    'vBase()': FunctionFragment;
    'vPool()': FunctionFragment;
    'vToken()': FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: '__VPoolWrapper_init',
    values: [IVPoolWrapper.InitializeVPoolWrapperParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: 'accruedProtocolFee',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'clearingHouse',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'collectAccruedProtocolFee',
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: 'extsload', values: [BytesLike]): string;
  encodeFunctionData(functionFragment: 'fpGlobal', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'getExtrapolatedSumAX128',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'getExtrapolatedValuesInside',
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'getSumAX128',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'getValuesInside',
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'liquidityChange',
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'liquidityFeePips',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'protocolFeePips',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'setLiquidityFee',
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'setProtocolFee',
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'sumFeeGlobalX128',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'swap',
    values: [boolean, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'swapToken',
    values: [BigNumberish, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: 'ticksExtended',
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'uniswapFeePips',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'uniswapV3MintCallback',
    values: [BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: 'uniswapV3SwapCallback',
    values: [BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: 'updateGlobalFundingState',
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: 'vBase', values?: undefined): string;
  encodeFunctionData(functionFragment: 'vPool', values?: undefined): string;
  encodeFunctionData(functionFragment: 'vToken', values?: undefined): string;

  decodeFunctionResult(
    functionFragment: '__VPoolWrapper_init',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'accruedProtocolFee',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'clearingHouse',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'collectAccruedProtocolFee',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'extsload', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'fpGlobal', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'getExtrapolatedSumAX128',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getExtrapolatedValuesInside',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getSumAX128',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getValuesInside',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'liquidityChange',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'liquidityFeePips',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'protocolFeePips',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'setLiquidityFee',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'setProtocolFee',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'sumFeeGlobalX128',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'swap', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'swapToken', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'ticksExtended',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'uniswapFeePips',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'uniswapV3MintCallback',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'uniswapV3SwapCallback',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'updateGlobalFundingState',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'vBase', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'vPool', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'vToken', data: BytesLike): Result;

  events: {
    'Swap(int256,int256,uint256,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'Swap'): EventFragment;
}

export type SwapEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, BigNumber],
  {
    vTokenIn: BigNumber;
    vBaseIn: BigNumber;
    liquidityFees: BigNumber;
    protocolFees: BigNumber;
  }
>;

export type SwapEventFilter = TypedEventFilter<SwapEvent>;

export interface VPoolWrapperLogic extends BaseContract {
  contractName: 'VPoolWrapperLogic';
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: VPoolWrapperLogicInterface;

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
    __VPoolWrapper_init(
      params: IVPoolWrapper.InitializeVPoolWrapperParamsStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    accruedProtocolFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    clearingHouse(overrides?: CallOverrides): Promise<[string]>;

    collectAccruedProtocolFee(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    'extsload(bytes32)'(
      slot: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string] & { val: string }>;

    'extsload(bytes32[])'(
      slots: BytesLike[],
      overrides?: CallOverrides
    ): Promise<[string[]]>;

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

    getExtrapolatedSumAX128(overrides?: CallOverrides): Promise<[BigNumber]>;

    getExtrapolatedValuesInside(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [IVPoolWrapper.WrapperValuesInsideStructOutput] & {
        wrapperValuesInside: IVPoolWrapper.WrapperValuesInsideStructOutput;
      }
    >;

    /**
     * VIEW METHODS
     */
    getSumAX128(overrides?: CallOverrides): Promise<[BigNumber]>;

    getValuesInside(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [IVPoolWrapper.WrapperValuesInsideStructOutput] & {
        wrapperValuesInside: IVPoolWrapper.WrapperValuesInsideStructOutput;
      }
    >;

    liquidityChange(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      liquidityDelta: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    liquidityFeePips(overrides?: CallOverrides): Promise<[number]>;

    protocolFeePips(overrides?: CallOverrides): Promise<[number]>;

    /**
     * ADMIN FUNCTIONS
     */
    setLiquidityFee(
      liquidityFeePips_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setProtocolFee(
      protocolFeePips_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    sumFeeGlobalX128(overrides?: CallOverrides): Promise<[BigNumber]>;

    /**
     * Swap vToken for vBase, or vBase for vToken
     */
    swap(
      swapVTokenForVBase: boolean,
      amountSpecified: BigNumberish,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     * swaps token
     */
    swapToken(
      amount: BigNumberish,
      sqrtPriceLimitX96: BigNumberish,
      isNotional: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

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

    uniswapFeePips(overrides?: CallOverrides): Promise<[number]>;

    uniswapV3MintCallback(
      vTokenAmount: BigNumberish,
      vBaseAmount: BigNumberish,
      arg2: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     * UNISWAP V3 POOL CALLBACkS
     */
    uniswapV3SwapCallback(
      amount0Delta: BigNumberish,
      amount1Delta: BigNumberish,
      arg2: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateGlobalFundingState(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    vBase(overrides?: CallOverrides): Promise<[string]>;

    vPool(overrides?: CallOverrides): Promise<[string]>;

    vToken(overrides?: CallOverrides): Promise<[string]>;
  };

  __VPoolWrapper_init(
    params: IVPoolWrapper.InitializeVPoolWrapperParamsStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  accruedProtocolFee(overrides?: CallOverrides): Promise<BigNumber>;

  clearingHouse(overrides?: CallOverrides): Promise<string>;

  collectAccruedProtocolFee(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  'extsload(bytes32)'(
    slot: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  'extsload(bytes32[])'(
    slots: BytesLike[],
    overrides?: CallOverrides
  ): Promise<string[]>;

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

  getExtrapolatedSumAX128(overrides?: CallOverrides): Promise<BigNumber>;

  getExtrapolatedValuesInside(
    tickLower: BigNumberish,
    tickUpper: BigNumberish,
    overrides?: CallOverrides
  ): Promise<IVPoolWrapper.WrapperValuesInsideStructOutput>;

  /**
   * VIEW METHODS
   */
  getSumAX128(overrides?: CallOverrides): Promise<BigNumber>;

  getValuesInside(
    tickLower: BigNumberish,
    tickUpper: BigNumberish,
    overrides?: CallOverrides
  ): Promise<IVPoolWrapper.WrapperValuesInsideStructOutput>;

  liquidityChange(
    tickLower: BigNumberish,
    tickUpper: BigNumberish,
    liquidityDelta: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  liquidityFeePips(overrides?: CallOverrides): Promise<number>;

  protocolFeePips(overrides?: CallOverrides): Promise<number>;

  /**
   * ADMIN FUNCTIONS
   */
  setLiquidityFee(
    liquidityFeePips_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setProtocolFee(
    protocolFeePips_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  sumFeeGlobalX128(overrides?: CallOverrides): Promise<BigNumber>;

  /**
   * Swap vToken for vBase, or vBase for vToken
   */
  swap(
    swapVTokenForVBase: boolean,
    amountSpecified: BigNumberish,
    sqrtPriceLimitX96: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   * swaps token
   */
  swapToken(
    amount: BigNumberish,
    sqrtPriceLimitX96: BigNumberish,
    isNotional: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

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

  uniswapFeePips(overrides?: CallOverrides): Promise<number>;

  uniswapV3MintCallback(
    vTokenAmount: BigNumberish,
    vBaseAmount: BigNumberish,
    arg2: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   * UNISWAP V3 POOL CALLBACkS
   */
  uniswapV3SwapCallback(
    amount0Delta: BigNumberish,
    amount1Delta: BigNumberish,
    arg2: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateGlobalFundingState(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  vBase(overrides?: CallOverrides): Promise<string>;

  vPool(overrides?: CallOverrides): Promise<string>;

  vToken(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    __VPoolWrapper_init(
      params: IVPoolWrapper.InitializeVPoolWrapperParamsStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    accruedProtocolFee(overrides?: CallOverrides): Promise<BigNumber>;

    clearingHouse(overrides?: CallOverrides): Promise<string>;

    collectAccruedProtocolFee(overrides?: CallOverrides): Promise<BigNumber>;

    'extsload(bytes32)'(
      slot: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    'extsload(bytes32[])'(
      slots: BytesLike[],
      overrides?: CallOverrides
    ): Promise<string[]>;

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

    getExtrapolatedSumAX128(overrides?: CallOverrides): Promise<BigNumber>;

    getExtrapolatedValuesInside(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      overrides?: CallOverrides
    ): Promise<IVPoolWrapper.WrapperValuesInsideStructOutput>;

    /**
     * VIEW METHODS
     */
    getSumAX128(overrides?: CallOverrides): Promise<BigNumber>;

    getValuesInside(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      overrides?: CallOverrides
    ): Promise<IVPoolWrapper.WrapperValuesInsideStructOutput>;

    liquidityChange(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      liquidityDelta: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, IVPoolWrapper.WrapperValuesInsideStructOutput] & {
        basePrincipal: BigNumber;
        vTokenPrincipal: BigNumber;
        wrapperValuesInside: IVPoolWrapper.WrapperValuesInsideStructOutput;
      }
    >;

    liquidityFeePips(overrides?: CallOverrides): Promise<number>;

    protocolFeePips(overrides?: CallOverrides): Promise<number>;

    /**
     * ADMIN FUNCTIONS
     */
    setLiquidityFee(
      liquidityFeePips_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setProtocolFee(
      protocolFeePips_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    sumFeeGlobalX128(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Swap vToken for vBase, or vBase for vToken
     */
    swap(
      swapVTokenForVBase: boolean,
      amountSpecified: BigNumberish,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { vTokenIn: BigNumber; vBaseIn: BigNumber }
    >;

    /**
     * swaps token
     */
    swapToken(
      amount: BigNumberish,
      sqrtPriceLimitX96: BigNumberish,
      isNotional: boolean,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        vTokenAmount: BigNumber;
        vBaseAmount: BigNumber;
      }
    >;

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

    uniswapFeePips(overrides?: CallOverrides): Promise<number>;

    uniswapV3MintCallback(
      vTokenAmount: BigNumberish,
      vBaseAmount: BigNumberish,
      arg2: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * UNISWAP V3 POOL CALLBACkS
     */
    uniswapV3SwapCallback(
      amount0Delta: BigNumberish,
      amount1Delta: BigNumberish,
      arg2: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    updateGlobalFundingState(overrides?: CallOverrides): Promise<void>;

    vBase(overrides?: CallOverrides): Promise<string>;

    vPool(overrides?: CallOverrides): Promise<string>;

    vToken(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    'Swap(int256,int256,uint256,uint256)'(
      vTokenIn?: null,
      vBaseIn?: null,
      liquidityFees?: null,
      protocolFees?: null
    ): SwapEventFilter;
    Swap(
      vTokenIn?: null,
      vBaseIn?: null,
      liquidityFees?: null,
      protocolFees?: null
    ): SwapEventFilter;
  };

  estimateGas: {
    __VPoolWrapper_init(
      params: IVPoolWrapper.InitializeVPoolWrapperParamsStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    accruedProtocolFee(overrides?: CallOverrides): Promise<BigNumber>;

    clearingHouse(overrides?: CallOverrides): Promise<BigNumber>;

    collectAccruedProtocolFee(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    'extsload(bytes32)'(
      slot: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    'extsload(bytes32[])'(
      slots: BytesLike[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    fpGlobal(overrides?: CallOverrides): Promise<BigNumber>;

    getExtrapolatedSumAX128(overrides?: CallOverrides): Promise<BigNumber>;

    getExtrapolatedValuesInside(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * VIEW METHODS
     */
    getSumAX128(overrides?: CallOverrides): Promise<BigNumber>;

    getValuesInside(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    liquidityChange(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      liquidityDelta: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    liquidityFeePips(overrides?: CallOverrides): Promise<BigNumber>;

    protocolFeePips(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * ADMIN FUNCTIONS
     */
    setLiquidityFee(
      liquidityFeePips_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setProtocolFee(
      protocolFeePips_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    sumFeeGlobalX128(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Swap vToken for vBase, or vBase for vToken
     */
    swap(
      swapVTokenForVBase: boolean,
      amountSpecified: BigNumberish,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     * swaps token
     */
    swapToken(
      amount: BigNumberish,
      sqrtPriceLimitX96: BigNumberish,
      isNotional: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    ticksExtended(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    uniswapFeePips(overrides?: CallOverrides): Promise<BigNumber>;

    uniswapV3MintCallback(
      vTokenAmount: BigNumberish,
      vBaseAmount: BigNumberish,
      arg2: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     * UNISWAP V3 POOL CALLBACkS
     */
    uniswapV3SwapCallback(
      amount0Delta: BigNumberish,
      amount1Delta: BigNumberish,
      arg2: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateGlobalFundingState(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    vBase(overrides?: CallOverrides): Promise<BigNumber>;

    vPool(overrides?: CallOverrides): Promise<BigNumber>;

    vToken(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    __VPoolWrapper_init(
      params: IVPoolWrapper.InitializeVPoolWrapperParamsStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    accruedProtocolFee(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    clearingHouse(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    collectAccruedProtocolFee(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    'extsload(bytes32)'(
      slot: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    'extsload(bytes32[])'(
      slots: BytesLike[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    fpGlobal(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getExtrapolatedSumAX128(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getExtrapolatedValuesInside(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * VIEW METHODS
     */
    getSumAX128(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getValuesInside(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    liquidityChange(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      liquidityDelta: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    liquidityFeePips(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    protocolFeePips(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * ADMIN FUNCTIONS
     */
    setLiquidityFee(
      liquidityFeePips_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setProtocolFee(
      protocolFeePips_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    sumFeeGlobalX128(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Swap vToken for vBase, or vBase for vToken
     */
    swap(
      swapVTokenForVBase: boolean,
      amountSpecified: BigNumberish,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * swaps token
     */
    swapToken(
      amount: BigNumberish,
      sqrtPriceLimitX96: BigNumberish,
      isNotional: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    ticksExtended(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    uniswapFeePips(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    uniswapV3MintCallback(
      vTokenAmount: BigNumberish,
      vBaseAmount: BigNumberish,
      arg2: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * UNISWAP V3 POOL CALLBACkS
     */
    uniswapV3SwapCallback(
      amount0Delta: BigNumberish,
      amount1Delta: BigNumberish,
      arg2: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateGlobalFundingState(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    vBase(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    vPool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    vToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}