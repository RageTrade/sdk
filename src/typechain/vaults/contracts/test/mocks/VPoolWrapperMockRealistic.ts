/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
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
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from '../../../common';

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
}

export interface VPoolWrapperMockRealisticInterface extends utils.Interface {
  functions: {
    'accruedProtocolFee()': FunctionFragment;
    'blockTimestamp()': FunctionFragment;
    'burn(int24,int24,uint128)': FunctionFragment;
    'clearingHouse()': FunctionFragment;
    'collectAccruedProtocolFee()': FunctionFragment;
    'extsload(bytes32)': FunctionFragment;
    'extsload(bytes32[])': FunctionFragment;
    'fpGlobal()': FunctionFragment;
    'getExtrapolatedSumAX128()': FunctionFragment;
    'getExtrapolatedValuesInside(int24,int24)': FunctionFragment;
    'getFundingRateAndVirtualPrice()': FunctionFragment;
    'getFundingRateOverride()': FunctionFragment;
    'getSumAX128()': FunctionFragment;
    'getValuesInside(int24,int24)': FunctionFragment;
    'initialize((address,address,address,address,uint24,uint24))': FunctionFragment;
    'liquidityFeePips()': FunctionFragment;
    'mint(int24,int24,uint128)': FunctionFragment;
    'protocolFeePips()': FunctionFragment;
    'setBlockTimestamp(uint48)': FunctionFragment;
    'setFpGlobalLastTimestamp(uint48)': FunctionFragment;
    'setFundingRateOverride(address)': FunctionFragment;
    'setFundingRateOverride(int256)': FunctionFragment;
    'setLiquidityFee(uint24)': FunctionFragment;
    'setProtocolFee(uint24)': FunctionFragment;
    'sumFeeGlobalX128()': FunctionFragment;
    'swap(bool,int256,uint160)': FunctionFragment;
    'ticksExtended(int24)': FunctionFragment;
    'uniswapV3MintCallback(uint256,uint256,bytes)': FunctionFragment;
    'uniswapV3SwapCallback(int256,int256,bytes)': FunctionFragment;
    'unsetFundingRateOverride()': FunctionFragment;
    'updateGlobalFundingState(bool)': FunctionFragment;
    'vPool()': FunctionFragment;
    'vQuote()': FunctionFragment;
    'vToken()': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'accruedProtocolFee'
      | 'blockTimestamp'
      | 'burn'
      | 'clearingHouse'
      | 'collectAccruedProtocolFee'
      | 'extsload(bytes32)'
      | 'extsload(bytes32[])'
      | 'fpGlobal'
      | 'getExtrapolatedSumAX128'
      | 'getExtrapolatedValuesInside'
      | 'getFundingRateAndVirtualPrice'
      | 'getFundingRateOverride'
      | 'getSumAX128'
      | 'getValuesInside'
      | 'initialize'
      | 'liquidityFeePips'
      | 'mint'
      | 'protocolFeePips'
      | 'setBlockTimestamp'
      | 'setFpGlobalLastTimestamp'
      | 'setFundingRateOverride(address)'
      | 'setFundingRateOverride(int256)'
      | 'setLiquidityFee'
      | 'setProtocolFee'
      | 'sumFeeGlobalX128'
      | 'swap'
      | 'ticksExtended'
      | 'uniswapV3MintCallback'
      | 'uniswapV3SwapCallback'
      | 'unsetFundingRateOverride'
      | 'updateGlobalFundingState'
      | 'vPool'
      | 'vQuote'
      | 'vToken'
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'accruedProtocolFee',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'blockTimestamp',
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
  encodeFunctionData(
    functionFragment: 'extsload(bytes32)',
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: 'extsload(bytes32[])',
    values: [BytesLike[]]
  ): string;
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
    functionFragment: 'getFundingRateAndVirtualPrice',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'getFundingRateOverride',
    values?: undefined
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
    functionFragment: 'initialize',
    values: [IVPoolWrapper.InitializeVPoolWrapperParamsStruct]
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
    functionFragment: 'setBlockTimestamp',
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'setFpGlobalLastTimestamp',
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'setFundingRateOverride(address)',
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: 'setFundingRateOverride(int256)',
    values: [BigNumberish]
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
    functionFragment: 'unsetFundingRateOverride',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'updateGlobalFundingState',
    values: [boolean]
  ): string;
  encodeFunctionData(functionFragment: 'vPool', values?: undefined): string;
  encodeFunctionData(functionFragment: 'vQuote', values?: undefined): string;
  encodeFunctionData(functionFragment: 'vToken', values?: undefined): string;

  decodeFunctionResult(
    functionFragment: 'accruedProtocolFee',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'blockTimestamp',
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
  decodeFunctionResult(
    functionFragment: 'extsload(bytes32)',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'extsload(bytes32[])',
    data: BytesLike
  ): Result;
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
    functionFragment: 'getFundingRateAndVirtualPrice',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getFundingRateOverride',
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
  decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result;
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
    functionFragment: 'setBlockTimestamp',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'setFpGlobalLastTimestamp',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'setFundingRateOverride(address)',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'setFundingRateOverride(int256)',
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
    functionFragment: 'unsetFundingRateOverride',
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
    'Initialized(uint8)': EventFragment;
    'LiquidityFeeUpdated(uint24)': EventFragment;
    'Mint(int24,int24,uint128,uint256,uint256)': EventFragment;
    'ProtocolFeeUpdated(uint24)': EventFragment;
    'Swap(tuple)': EventFragment;
  };

  getEvent(
    nameOrSignatureOrTopic: 'AccruedProtocolFeeCollected'
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Burn'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Initialized'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'LiquidityFeeUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Mint'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'ProtocolFeeUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Swap'): EventFragment;
}

export interface AccruedProtocolFeeCollectedEventObject {
  amount: BigNumber;
}
export type AccruedProtocolFeeCollectedEvent = TypedEvent<
  [BigNumber],
  AccruedProtocolFeeCollectedEventObject
>;

export type AccruedProtocolFeeCollectedEventFilter =
  TypedEventFilter<AccruedProtocolFeeCollectedEvent>;

export interface BurnEventObject {
  tickLower: number;
  tickUpper: number;
  liquidity: BigNumber;
  vTokenPrincipal: BigNumber;
  vQuotePrincipal: BigNumber;
}
export type BurnEvent = TypedEvent<
  [number, number, BigNumber, BigNumber, BigNumber],
  BurnEventObject
>;

export type BurnEventFilter = TypedEventFilter<BurnEvent>;

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface LiquidityFeeUpdatedEventObject {
  liquidityFeePips: number;
}
export type LiquidityFeeUpdatedEvent = TypedEvent<
  [number],
  LiquidityFeeUpdatedEventObject
>;

export type LiquidityFeeUpdatedEventFilter =
  TypedEventFilter<LiquidityFeeUpdatedEvent>;

export interface MintEventObject {
  tickLower: number;
  tickUpper: number;
  liquidity: BigNumber;
  vTokenPrincipal: BigNumber;
  vQuotePrincipal: BigNumber;
}
export type MintEvent = TypedEvent<
  [number, number, BigNumber, BigNumber, BigNumber],
  MintEventObject
>;

export type MintEventFilter = TypedEventFilter<MintEvent>;

export interface ProtocolFeeUpdatedEventObject {
  protocolFeePips: number;
}
export type ProtocolFeeUpdatedEvent = TypedEvent<
  [number],
  ProtocolFeeUpdatedEventObject
>;

export type ProtocolFeeUpdatedEventFilter =
  TypedEventFilter<ProtocolFeeUpdatedEvent>;

export interface SwapEventObject {
  swapResult: IVPoolWrapper.SwapResultStructOutput;
}
export type SwapEvent = TypedEvent<
  [IVPoolWrapper.SwapResultStructOutput],
  SwapEventObject
>;

export type SwapEventFilter = TypedEventFilter<SwapEvent>;

export interface VPoolWrapperMockRealistic extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: VPoolWrapperMockRealisticInterface;

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
    accruedProtocolFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    blockTimestamp(overrides?: CallOverrides): Promise<[number]>;

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

    fpGlobal(overrides?: CallOverrides): Promise<
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

    getFundingRateAndVirtualPrice(
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    getFundingRateOverride(overrides?: CallOverrides): Promise<[string]>;

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

    initialize(
      params: IVPoolWrapper.InitializeVPoolWrapperParamsStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    liquidityFeePips(overrides?: CallOverrides): Promise<[number]>;

    mint(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      liquidity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    protocolFeePips(overrides?: CallOverrides): Promise<[number]>;

    setBlockTimestamp(
      timestamp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setFpGlobalLastTimestamp(
      timestamp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    'setFundingRateOverride(address)'(
      chainlinkOracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    'setFundingRateOverride(int256)'(
      fundingRateOverrideX128: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setLiquidityFee(
      liquidityFeePips_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setProtocolFee(
      protocolFeePips_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    sumFeeGlobalX128(overrides?: CallOverrides): Promise<[BigNumber]>;

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

    uniswapV3SwapCallback(
      amount0Delta: BigNumberish,
      amount1Delta: BigNumberish,
      arg2: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unsetFundingRateOverride(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateGlobalFundingState(
      useZeroFundingRate: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    vPool(overrides?: CallOverrides): Promise<[string]>;

    vQuote(overrides?: CallOverrides): Promise<[string]>;

    vToken(overrides?: CallOverrides): Promise<[string]>;
  };

  accruedProtocolFee(overrides?: CallOverrides): Promise<BigNumber>;

  blockTimestamp(overrides?: CallOverrides): Promise<number>;

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

  fpGlobal(overrides?: CallOverrides): Promise<
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

  getFundingRateAndVirtualPrice(
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>;

  getFundingRateOverride(overrides?: CallOverrides): Promise<string>;

  getSumAX128(overrides?: CallOverrides): Promise<BigNumber>;

  getValuesInside(
    tickLower: BigNumberish,
    tickUpper: BigNumberish,
    overrides?: CallOverrides
  ): Promise<IVPoolWrapper.WrapperValuesInsideStructOutput>;

  initialize(
    params: IVPoolWrapper.InitializeVPoolWrapperParamsStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  liquidityFeePips(overrides?: CallOverrides): Promise<number>;

  mint(
    tickLower: BigNumberish,
    tickUpper: BigNumberish,
    liquidity: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  protocolFeePips(overrides?: CallOverrides): Promise<number>;

  setBlockTimestamp(
    timestamp: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setFpGlobalLastTimestamp(
    timestamp: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  'setFundingRateOverride(address)'(
    chainlinkOracle: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  'setFundingRateOverride(int256)'(
    fundingRateOverrideX128: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setLiquidityFee(
    liquidityFeePips_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setProtocolFee(
    protocolFeePips_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  sumFeeGlobalX128(overrides?: CallOverrides): Promise<BigNumber>;

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

  uniswapV3SwapCallback(
    amount0Delta: BigNumberish,
    amount1Delta: BigNumberish,
    arg2: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unsetFundingRateOverride(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateGlobalFundingState(
    useZeroFundingRate: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  vPool(overrides?: CallOverrides): Promise<string>;

  vQuote(overrides?: CallOverrides): Promise<string>;

  vToken(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    accruedProtocolFee(overrides?: CallOverrides): Promise<BigNumber>;

    blockTimestamp(overrides?: CallOverrides): Promise<number>;

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

    fpGlobal(overrides?: CallOverrides): Promise<
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

    getFundingRateAndVirtualPrice(
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    getFundingRateOverride(overrides?: CallOverrides): Promise<string>;

    getSumAX128(overrides?: CallOverrides): Promise<BigNumber>;

    getValuesInside(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      overrides?: CallOverrides
    ): Promise<IVPoolWrapper.WrapperValuesInsideStructOutput>;

    initialize(
      params: IVPoolWrapper.InitializeVPoolWrapperParamsStruct,
      overrides?: CallOverrides
    ): Promise<void>;

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

    setBlockTimestamp(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setFpGlobalLastTimestamp(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    'setFundingRateOverride(address)'(
      chainlinkOracle: string,
      overrides?: CallOverrides
    ): Promise<void>;

    'setFundingRateOverride(int256)'(
      fundingRateOverrideX128: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setLiquidityFee(
      liquidityFeePips_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setProtocolFee(
      protocolFeePips_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    sumFeeGlobalX128(overrides?: CallOverrides): Promise<BigNumber>;

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

    uniswapV3SwapCallback(
      amount0Delta: BigNumberish,
      amount1Delta: BigNumberish,
      arg2: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    unsetFundingRateOverride(overrides?: CallOverrides): Promise<void>;

    updateGlobalFundingState(
      useZeroFundingRate: boolean,
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

    'Initialized(uint8)'(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

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
    accruedProtocolFee(overrides?: CallOverrides): Promise<BigNumber>;

    blockTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

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

    getFundingRateAndVirtualPrice(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getFundingRateOverride(overrides?: CallOverrides): Promise<BigNumber>;

    getSumAX128(overrides?: CallOverrides): Promise<BigNumber>;

    getValuesInside(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      params: IVPoolWrapper.InitializeVPoolWrapperParamsStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    liquidityFeePips(overrides?: CallOverrides): Promise<BigNumber>;

    mint(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      liquidity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    protocolFeePips(overrides?: CallOverrides): Promise<BigNumber>;

    setBlockTimestamp(
      timestamp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setFpGlobalLastTimestamp(
      timestamp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    'setFundingRateOverride(address)'(
      chainlinkOracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    'setFundingRateOverride(int256)'(
      fundingRateOverrideX128: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setLiquidityFee(
      liquidityFeePips_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setProtocolFee(
      protocolFeePips_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    sumFeeGlobalX128(overrides?: CallOverrides): Promise<BigNumber>;

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

    uniswapV3SwapCallback(
      amount0Delta: BigNumberish,
      amount1Delta: BigNumberish,
      arg2: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unsetFundingRateOverride(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateGlobalFundingState(
      useZeroFundingRate: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    vPool(overrides?: CallOverrides): Promise<BigNumber>;

    vQuote(overrides?: CallOverrides): Promise<BigNumber>;

    vToken(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    accruedProtocolFee(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    blockTimestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

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

    getFundingRateAndVirtualPrice(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getFundingRateOverride(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSumAX128(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getValuesInside(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      params: IVPoolWrapper.InitializeVPoolWrapperParamsStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    liquidityFeePips(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mint(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      liquidity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    protocolFeePips(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setBlockTimestamp(
      timestamp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setFpGlobalLastTimestamp(
      timestamp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    'setFundingRateOverride(address)'(
      chainlinkOracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    'setFundingRateOverride(int256)'(
      fundingRateOverrideX128: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setLiquidityFee(
      liquidityFeePips_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setProtocolFee(
      protocolFeePips_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    sumFeeGlobalX128(overrides?: CallOverrides): Promise<PopulatedTransaction>;

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

    uniswapV3SwapCallback(
      amount0Delta: BigNumberish,
      amount1Delta: BigNumberish,
      arg2: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unsetFundingRateOverride(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateGlobalFundingState(
      useZeroFundingRate: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    vPool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    vQuote(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    vToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
