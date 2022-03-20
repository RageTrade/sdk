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
  export type SwapResultStruct = {
    amountSpecified: BigNumberish;
    vTokenIn: BigNumberish;
    vQuoteIn: BigNumberish;
    liquidityFees: BigNumberish;
    protocolFees: BigNumberish;
    sqrtPriceX96Start: BigNumberish;
    sqrtPriceX96End: BigNumberish;
  };

  export type SwapResultStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    amountSpecified: BigNumber;
    vTokenIn: BigNumber;
    vQuoteIn: BigNumber;
    liquidityFees: BigNumber;
    protocolFees: BigNumber;
    sqrtPriceX96Start: BigNumber;
    sqrtPriceX96End: BigNumber;
  };

  export type InitializeVPoolWrapperParamsStruct = {
    clearingHouse: string;
    vToken: string;
    vQuote: string;
    vPool: string;
    liquidityFeePips: BigNumberish;
    protocolFeePips: BigNumberish;
  };

  export type InitializeVPoolWrapperParamsStructOutput = [
    string,
    string,
    string,
    string,
    number,
    number
  ] & {
    clearingHouse: string;
    vToken: string;
    vQuote: string;
    vPool: string;
    liquidityFeePips: number;
    protocolFeePips: number;
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
    '__initialize_VPoolWrapper((address,address,address,address,uint24,uint24))': FunctionFragment;
    'accruedProtocolFee()': FunctionFragment;
    'burn(int24,int24,uint128)': FunctionFragment;
    'clearingHouse()': FunctionFragment;
    'collectAccruedProtocolFee()': FunctionFragment;
    'extsload(bytes32)': FunctionFragment;
    'fpGlobal()': FunctionFragment;
    'getExtrapolatedSumAX128()': FunctionFragment;
    'getExtrapolatedValuesInside(int24,int24)': FunctionFragment;
    'getSumAX128()': FunctionFragment;
    'getValuesInside(int24,int24)': FunctionFragment;
    'liquidityFeePips()': FunctionFragment;
    'mint(int24,int24,uint128)': FunctionFragment;
    'protocolFeePips()': FunctionFragment;
    'setLiquidityFee(uint24)': FunctionFragment;
    'setProtocolFee(uint24)': FunctionFragment;
    'sumFeeGlobalX128()': FunctionFragment;
    'swap(bool,int256,uint160)': FunctionFragment;
    'ticksExtended(int24)': FunctionFragment;
    'uniswapV3MintCallback(uint256,uint256,bytes)': FunctionFragment;
    'uniswapV3SwapCallback(int256,int256,bytes)': FunctionFragment;
    'updateGlobalFundingState(uint256,uint256)': FunctionFragment;
    'vPool()': FunctionFragment;
    'vQuote()': FunctionFragment;
    'vToken()': FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: '__initialize_VPoolWrapper',
    values: [IVPoolWrapper.InitializeVPoolWrapperParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: 'accruedProtocolFee',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'burn',
    values: [BigNumberish, BigNumberish, BigNumberish]
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
    functionFragment: 'liquidityFeePips',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'mint',
    values: [BigNumberish, BigNumberish, BigNumberish]
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
    functionFragment: 'ticksExtended',
    values: [BigNumberish]
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
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: 'vPool', values?: undefined): string;
  encodeFunctionData(functionFragment: 'vQuote', values?: undefined): string;
  encodeFunctionData(functionFragment: 'vToken', values?: undefined): string;

  decodeFunctionResult(
    functionFragment: '__initialize_VPoolWrapper',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'accruedProtocolFee',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'burn', data: BytesLike): Result;
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
    functionFragment: 'liquidityFeePips',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'mint', data: BytesLike): Result;
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
  decodeFunctionResult(
    functionFragment: 'ticksExtended',
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
  decodeFunctionResult(functionFragment: 'vPool', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'vQuote', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'vToken', data: BytesLike): Result;

  events: {
    'AccruedProtocolFeeCollected(uint256)': EventFragment;
    'Burn(int24,int24,uint128,uint256,uint256)': EventFragment;
    'LiquidityFeeUpdated(uint24)': EventFragment;
    'Mint(int24,int24,uint128,uint256,uint256)': EventFragment;
    'ProtocolFeeUpdated(uint24)': EventFragment;
    'Swap(tuple)': EventFragment;
  };

  getEvent(
    nameOrSignatureOrTopic: 'AccruedProtocolFeeCollected'
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Burn'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'LiquidityFeeUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Mint'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'ProtocolFeeUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Swap'): EventFragment;
}

export type AccruedProtocolFeeCollectedEvent = TypedEvent<
  [BigNumber],
  { amount: BigNumber }
>;

export type AccruedProtocolFeeCollectedEventFilter = TypedEventFilter<AccruedProtocolFeeCollectedEvent>;

export type BurnEvent = TypedEvent<
  [number, number, BigNumber, BigNumber, BigNumber],
  {
    tickLower: number;
    tickUpper: number;
    liquidity: BigNumber;
    vTokenPrincipal: BigNumber;
    vQuotePrincipal: BigNumber;
  }
>;

export type BurnEventFilter = TypedEventFilter<BurnEvent>;

export type LiquidityFeeUpdatedEvent = TypedEvent<
  [number],
  { liquidityFeePips: number }
>;

export type LiquidityFeeUpdatedEventFilter = TypedEventFilter<LiquidityFeeUpdatedEvent>;

export type MintEvent = TypedEvent<
  [number, number, BigNumber, BigNumber, BigNumber],
  {
    tickLower: number;
    tickUpper: number;
    liquidity: BigNumber;
    vTokenPrincipal: BigNumber;
    vQuotePrincipal: BigNumber;
  }
>;

export type MintEventFilter = TypedEventFilter<MintEvent>;

export type ProtocolFeeUpdatedEvent = TypedEvent<
  [number],
  { protocolFeePips: number }
>;

export type ProtocolFeeUpdatedEventFilter = TypedEventFilter<ProtocolFeeUpdatedEvent>;

export type SwapEvent = TypedEvent<
  [IVPoolWrapper.SwapResultStructOutput],
  { swapResult: IVPoolWrapper.SwapResultStructOutput }
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
    __initialize_VPoolWrapper(
      params: IVPoolWrapper.InitializeVPoolWrapperParamsStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    accruedProtocolFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    burn(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      liquidity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

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

    liquidityFeePips(overrides?: CallOverrides): Promise<[number]>;

    mint(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      liquidity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

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
     * Swap vToken for vQuote, or vQuote for vToken
     */
    swap(
      swapVTokenForVQuote: boolean,
      amountSpecified: BigNumberish,
      sqrtPriceLimitX96: BigNumberish,
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

    uniswapV3MintCallback(
      vTokenAmount: BigNumberish,
      vQuoteAmount: BigNumberish,
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

    /**
     * Update the global funding state, from clearing house
     */
    updateGlobalFundingState(
      realPriceX128: BigNumberish,
      virtualPriceX128: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    vPool(overrides?: CallOverrides): Promise<[string]>;

    vQuote(overrides?: CallOverrides): Promise<[string]>;

    vToken(overrides?: CallOverrides): Promise<[string]>;
  };

  __initialize_VPoolWrapper(
    params: IVPoolWrapper.InitializeVPoolWrapperParamsStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  accruedProtocolFee(overrides?: CallOverrides): Promise<BigNumber>;

  burn(
    tickLower: BigNumberish,
    tickUpper: BigNumberish,
    liquidity: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

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

  liquidityFeePips(overrides?: CallOverrides): Promise<number>;

  mint(
    tickLower: BigNumberish,
    tickUpper: BigNumberish,
    liquidity: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

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
   * Swap vToken for vQuote, or vQuote for vToken
   */
  swap(
    swapVTokenForVQuote: boolean,
    amountSpecified: BigNumberish,
    sqrtPriceLimitX96: BigNumberish,
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

  uniswapV3MintCallback(
    vTokenAmount: BigNumberish,
    vQuoteAmount: BigNumberish,
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

  /**
   * Update the global funding state, from clearing house
   */
  updateGlobalFundingState(
    realPriceX128: BigNumberish,
    virtualPriceX128: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  vPool(overrides?: CallOverrides): Promise<string>;

  vQuote(overrides?: CallOverrides): Promise<string>;

  vToken(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    __initialize_VPoolWrapper(
      params: IVPoolWrapper.InitializeVPoolWrapperParamsStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    accruedProtocolFee(overrides?: CallOverrides): Promise<BigNumber>;

    burn(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      liquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, IVPoolWrapper.WrapperValuesInsideStructOutput] & {
        vTokenPrincipal: BigNumber;
        vQuotePrincipal: BigNumber;
        wrapperValuesInside: IVPoolWrapper.WrapperValuesInsideStructOutput;
      }
    >;

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

    liquidityFeePips(overrides?: CallOverrides): Promise<number>;

    mint(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      liquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, IVPoolWrapper.WrapperValuesInsideStructOutput] & {
        vTokenPrincipal: BigNumber;
        vQuotePrincipal: BigNumber;
        wrapperValuesInside: IVPoolWrapper.WrapperValuesInsideStructOutput;
      }
    >;

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
     * Swap vToken for vQuote, or vQuote for vToken
     */
    swap(
      swapVTokenForVQuote: boolean,
      amountSpecified: BigNumberish,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<IVPoolWrapper.SwapResultStructOutput>;

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

    uniswapV3MintCallback(
      vTokenAmount: BigNumberish,
      vQuoteAmount: BigNumberish,
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

    /**
     * Update the global funding state, from clearing house
     */
    updateGlobalFundingState(
      realPriceX128: BigNumberish,
      virtualPriceX128: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    vPool(overrides?: CallOverrides): Promise<string>;

    vQuote(overrides?: CallOverrides): Promise<string>;

    vToken(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    'AccruedProtocolFeeCollected(uint256)'(
      amount?: null
    ): AccruedProtocolFeeCollectedEventFilter;
    AccruedProtocolFeeCollected(
      amount?: null
    ): AccruedProtocolFeeCollectedEventFilter;

    'Burn(int24,int24,uint128,uint256,uint256)'(
      tickLower?: null,
      tickUpper?: null,
      liquidity?: null,
      vTokenPrincipal?: null,
      vQuotePrincipal?: null
    ): BurnEventFilter;
    Burn(
      tickLower?: null,
      tickUpper?: null,
      liquidity?: null,
      vTokenPrincipal?: null,
      vQuotePrincipal?: null
    ): BurnEventFilter;

    'LiquidityFeeUpdated(uint24)'(
      liquidityFeePips?: null
    ): LiquidityFeeUpdatedEventFilter;
    LiquidityFeeUpdated(
      liquidityFeePips?: null
    ): LiquidityFeeUpdatedEventFilter;

    'Mint(int24,int24,uint128,uint256,uint256)'(
      tickLower?: null,
      tickUpper?: null,
      liquidity?: null,
      vTokenPrincipal?: null,
      vQuotePrincipal?: null
    ): MintEventFilter;
    Mint(
      tickLower?: null,
      tickUpper?: null,
      liquidity?: null,
      vTokenPrincipal?: null,
      vQuotePrincipal?: null
    ): MintEventFilter;

    'ProtocolFeeUpdated(uint24)'(
      protocolFeePips?: null
    ): ProtocolFeeUpdatedEventFilter;
    ProtocolFeeUpdated(protocolFeePips?: null): ProtocolFeeUpdatedEventFilter;

    'Swap(tuple)'(swapResult?: null): SwapEventFilter;
    Swap(swapResult?: null): SwapEventFilter;
  };

  estimateGas: {
    __initialize_VPoolWrapper(
      params: IVPoolWrapper.InitializeVPoolWrapperParamsStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    accruedProtocolFee(overrides?: CallOverrides): Promise<BigNumber>;

    burn(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      liquidity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

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

    liquidityFeePips(overrides?: CallOverrides): Promise<BigNumber>;

    mint(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      liquidity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

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
     * Swap vToken for vQuote, or vQuote for vToken
     */
    swap(
      swapVTokenForVQuote: boolean,
      amountSpecified: BigNumberish,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    ticksExtended(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    uniswapV3MintCallback(
      vTokenAmount: BigNumberish,
      vQuoteAmount: BigNumberish,
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

    /**
     * Update the global funding state, from clearing house
     */
    updateGlobalFundingState(
      realPriceX128: BigNumberish,
      virtualPriceX128: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    vPool(overrides?: CallOverrides): Promise<BigNumber>;

    vQuote(overrides?: CallOverrides): Promise<BigNumber>;

    vToken(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    __initialize_VPoolWrapper(
      params: IVPoolWrapper.InitializeVPoolWrapperParamsStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    accruedProtocolFee(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    burn(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      liquidity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
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

    liquidityFeePips(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mint(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      liquidity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

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
     * Swap vToken for vQuote, or vQuote for vToken
     */
    swap(
      swapVTokenForVQuote: boolean,
      amountSpecified: BigNumberish,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    ticksExtended(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    uniswapV3MintCallback(
      vTokenAmount: BigNumberish,
      vQuoteAmount: BigNumberish,
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

    /**
     * Update the global funding state, from clearing house
     */
    updateGlobalFundingState(
      realPriceX128: BigNumberish,
      virtualPriceX128: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    vPool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    vQuote(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    vToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
