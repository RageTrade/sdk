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
} from '../../common';

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

export interface IVPoolWrapperInterface extends utils.Interface {
  functions: {
    'burn(int24,int24,uint128)': FunctionFragment;
    'collectAccruedProtocolFee()': FunctionFragment;
    'getExtrapolatedSumAX128()': FunctionFragment;
    'getExtrapolatedValuesInside(int24,int24)': FunctionFragment;
    'getSumAX128()': FunctionFragment;
    'getValuesInside(int24,int24)': FunctionFragment;
    'initialize((address,address,address,address,uint24,uint24))': FunctionFragment;
    'liquidityFeePips()': FunctionFragment;
    'mint(int24,int24,uint128)': FunctionFragment;
    'protocolFeePips()': FunctionFragment;
    'swap(bool,int256,uint160)': FunctionFragment;
    'updateGlobalFundingState(bool)': FunctionFragment;
    'vPool()': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'burn'
      | 'collectAccruedProtocolFee'
      | 'getExtrapolatedSumAX128'
      | 'getExtrapolatedValuesInside'
      | 'getSumAX128'
      | 'getValuesInside'
      | 'initialize'
      | 'liquidityFeePips'
      | 'mint'
      | 'protocolFeePips'
      | 'swap'
      | 'updateGlobalFundingState'
      | 'vPool'
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'burn',
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'collectAccruedProtocolFee',
    values?: undefined
  ): string;
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
    functionFragment: 'swap',
    values: [boolean, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'updateGlobalFundingState',
    values: [boolean]
  ): string;
  encodeFunctionData(functionFragment: 'vPool', values?: undefined): string;

  decodeFunctionResult(functionFragment: 'burn', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'collectAccruedProtocolFee',
    data: BytesLike
  ): Result;
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
  decodeFunctionResult(functionFragment: 'swap', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'updateGlobalFundingState',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'vPool', data: BytesLike): Result;

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

export interface IVPoolWrapper extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IVPoolWrapperInterface;

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
    burn(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      liquidity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    collectAccruedProtocolFee(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

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

    swap(
      swapVTokenForVQuote: boolean,
      amountSpecified: BigNumberish,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateGlobalFundingState(
      useZeroFundingRate: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    vPool(overrides?: CallOverrides): Promise<[string]>;
  };

  burn(
    tickLower: BigNumberish,
    tickUpper: BigNumberish,
    liquidity: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  collectAccruedProtocolFee(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getExtrapolatedSumAX128(overrides?: CallOverrides): Promise<BigNumber>;

  getExtrapolatedValuesInside(
    tickLower: BigNumberish,
    tickUpper: BigNumberish,
    overrides?: CallOverrides
  ): Promise<IVPoolWrapper.WrapperValuesInsideStructOutput>;

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

  swap(
    swapVTokenForVQuote: boolean,
    amountSpecified: BigNumberish,
    sqrtPriceLimitX96: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateGlobalFundingState(
    useZeroFundingRate: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  vPool(overrides?: CallOverrides): Promise<string>;

  callStatic: {
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

    collectAccruedProtocolFee(overrides?: CallOverrides): Promise<BigNumber>;

    getExtrapolatedSumAX128(overrides?: CallOverrides): Promise<BigNumber>;

    getExtrapolatedValuesInside(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      overrides?: CallOverrides
    ): Promise<IVPoolWrapper.WrapperValuesInsideStructOutput>;

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

    swap(
      swapVTokenForVQuote: boolean,
      amountSpecified: BigNumberish,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<IVPoolWrapper.SwapResultStructOutput>;

    updateGlobalFundingState(
      useZeroFundingRate: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    vPool(overrides?: CallOverrides): Promise<string>;
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
    burn(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      liquidity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    collectAccruedProtocolFee(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getExtrapolatedSumAX128(overrides?: CallOverrides): Promise<BigNumber>;

    getExtrapolatedValuesInside(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

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

    swap(
      swapVTokenForVQuote: boolean,
      amountSpecified: BigNumberish,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateGlobalFundingState(
      useZeroFundingRate: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    vPool(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    burn(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      liquidity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    collectAccruedProtocolFee(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getExtrapolatedSumAX128(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getExtrapolatedValuesInside(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
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

    swap(
      swapVTokenForVQuote: boolean,
      amountSpecified: BigNumberish,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateGlobalFundingState(
      useZeroFundingRate: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    vPool(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
