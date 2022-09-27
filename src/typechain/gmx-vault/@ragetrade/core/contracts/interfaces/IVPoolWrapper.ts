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
  PromiseOrValue,
} from '../../../../common';

export declare namespace IVPoolWrapper {
  export type SwapResultStruct = {
    amountSpecified: PromiseOrValue<BigNumberish>;
    vTokenIn: PromiseOrValue<BigNumberish>;
    vQuoteIn: PromiseOrValue<BigNumberish>;
    liquidityFees: PromiseOrValue<BigNumberish>;
    protocolFees: PromiseOrValue<BigNumberish>;
    sqrtPriceX96Start: PromiseOrValue<BigNumberish>;
    sqrtPriceX96End: PromiseOrValue<BigNumberish>;
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
    sumAX128: PromiseOrValue<BigNumberish>;
    sumBInsideX128: PromiseOrValue<BigNumberish>;
    sumFpInsideX128: PromiseOrValue<BigNumberish>;
    sumFeeInsideX128: PromiseOrValue<BigNumberish>;
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
    clearingHouse: PromiseOrValue<string>;
    vToken: PromiseOrValue<string>;
    vQuote: PromiseOrValue<string>;
    vPool: PromiseOrValue<string>;
    liquidityFeePips: PromiseOrValue<BigNumberish>;
    protocolFeePips: PromiseOrValue<BigNumberish>;
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
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
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
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'getSumAX128',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'getValuesInside',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
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
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: 'protocolFeePips',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'swap',
    values: [
      PromiseOrValue<boolean>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: 'updateGlobalFundingState',
    values: [PromiseOrValue<boolean>]
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
    'FundingRateOverrideUpdated(int256)': EventFragment;
    'LiquidityFeeUpdated(uint24)': EventFragment;
    'Mint(int24,int24,uint128,uint256,uint256)': EventFragment;
    'ProtocolFeeUpdated(uint24)': EventFragment;
    'Swap(tuple)': EventFragment;
  };

  getEvent(
    nameOrSignatureOrTopic: 'AccruedProtocolFeeCollected'
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Burn'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'FundingRateOverrideUpdated'): EventFragment;
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

export interface FundingRateOverrideUpdatedEventObject {
  fundingRateOverrideX128: BigNumber;
}
export type FundingRateOverrideUpdatedEvent = TypedEvent<
  [BigNumber],
  FundingRateOverrideUpdatedEventObject
>;

export type FundingRateOverrideUpdatedEventFilter =
  TypedEventFilter<FundingRateOverrideUpdatedEvent>;

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
      tickLower: PromiseOrValue<BigNumberish>,
      tickUpper: PromiseOrValue<BigNumberish>,
      liquidity: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    collectAccruedProtocolFee(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getExtrapolatedSumAX128(overrides?: CallOverrides): Promise<[BigNumber]>;

    getExtrapolatedValuesInside(
      tickLower: PromiseOrValue<BigNumberish>,
      tickUpper: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [IVPoolWrapper.WrapperValuesInsideStructOutput] & {
        wrapperValuesInside: IVPoolWrapper.WrapperValuesInsideStructOutput;
      }
    >;

    getSumAX128(overrides?: CallOverrides): Promise<[BigNumber]>;

    getValuesInside(
      tickLower: PromiseOrValue<BigNumberish>,
      tickUpper: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [IVPoolWrapper.WrapperValuesInsideStructOutput] & {
        wrapperValuesInside: IVPoolWrapper.WrapperValuesInsideStructOutput;
      }
    >;

    initialize(
      params: IVPoolWrapper.InitializeVPoolWrapperParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    liquidityFeePips(overrides?: CallOverrides): Promise<[number]>;

    mint(
      tickLower: PromiseOrValue<BigNumberish>,
      tickUpper: PromiseOrValue<BigNumberish>,
      liquidity: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    protocolFeePips(overrides?: CallOverrides): Promise<[number]>;

    swap(
      swapVTokenForVQuote: PromiseOrValue<boolean>,
      amountSpecified: PromiseOrValue<BigNumberish>,
      sqrtPriceLimitX96: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateGlobalFundingState(
      useZeroFundingRate: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    vPool(overrides?: CallOverrides): Promise<[string]>;
  };

  burn(
    tickLower: PromiseOrValue<BigNumberish>,
    tickUpper: PromiseOrValue<BigNumberish>,
    liquidity: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  collectAccruedProtocolFee(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getExtrapolatedSumAX128(overrides?: CallOverrides): Promise<BigNumber>;

  getExtrapolatedValuesInside(
    tickLower: PromiseOrValue<BigNumberish>,
    tickUpper: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<IVPoolWrapper.WrapperValuesInsideStructOutput>;

  getSumAX128(overrides?: CallOverrides): Promise<BigNumber>;

  getValuesInside(
    tickLower: PromiseOrValue<BigNumberish>,
    tickUpper: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<IVPoolWrapper.WrapperValuesInsideStructOutput>;

  initialize(
    params: IVPoolWrapper.InitializeVPoolWrapperParamsStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  liquidityFeePips(overrides?: CallOverrides): Promise<number>;

  mint(
    tickLower: PromiseOrValue<BigNumberish>,
    tickUpper: PromiseOrValue<BigNumberish>,
    liquidity: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  protocolFeePips(overrides?: CallOverrides): Promise<number>;

  swap(
    swapVTokenForVQuote: PromiseOrValue<boolean>,
    amountSpecified: PromiseOrValue<BigNumberish>,
    sqrtPriceLimitX96: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateGlobalFundingState(
    useZeroFundingRate: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  vPool(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    burn(
      tickLower: PromiseOrValue<BigNumberish>,
      tickUpper: PromiseOrValue<BigNumberish>,
      liquidity: PromiseOrValue<BigNumberish>,
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
      tickLower: PromiseOrValue<BigNumberish>,
      tickUpper: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<IVPoolWrapper.WrapperValuesInsideStructOutput>;

    getSumAX128(overrides?: CallOverrides): Promise<BigNumber>;

    getValuesInside(
      tickLower: PromiseOrValue<BigNumberish>,
      tickUpper: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<IVPoolWrapper.WrapperValuesInsideStructOutput>;

    initialize(
      params: IVPoolWrapper.InitializeVPoolWrapperParamsStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    liquidityFeePips(overrides?: CallOverrides): Promise<number>;

    mint(
      tickLower: PromiseOrValue<BigNumberish>,
      tickUpper: PromiseOrValue<BigNumberish>,
      liquidity: PromiseOrValue<BigNumberish>,
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
      swapVTokenForVQuote: PromiseOrValue<boolean>,
      amountSpecified: PromiseOrValue<BigNumberish>,
      sqrtPriceLimitX96: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<IVPoolWrapper.SwapResultStructOutput>;

    updateGlobalFundingState(
      useZeroFundingRate: PromiseOrValue<boolean>,
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

    'FundingRateOverrideUpdated(int256)'(
      fundingRateOverrideX128?: null
    ): FundingRateOverrideUpdatedEventFilter;
    FundingRateOverrideUpdated(
      fundingRateOverrideX128?: null
    ): FundingRateOverrideUpdatedEventFilter;

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
      tickLower: PromiseOrValue<BigNumberish>,
      tickUpper: PromiseOrValue<BigNumberish>,
      liquidity: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    collectAccruedProtocolFee(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getExtrapolatedSumAX128(overrides?: CallOverrides): Promise<BigNumber>;

    getExtrapolatedValuesInside(
      tickLower: PromiseOrValue<BigNumberish>,
      tickUpper: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSumAX128(overrides?: CallOverrides): Promise<BigNumber>;

    getValuesInside(
      tickLower: PromiseOrValue<BigNumberish>,
      tickUpper: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      params: IVPoolWrapper.InitializeVPoolWrapperParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    liquidityFeePips(overrides?: CallOverrides): Promise<BigNumber>;

    mint(
      tickLower: PromiseOrValue<BigNumberish>,
      tickUpper: PromiseOrValue<BigNumberish>,
      liquidity: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    protocolFeePips(overrides?: CallOverrides): Promise<BigNumber>;

    swap(
      swapVTokenForVQuote: PromiseOrValue<boolean>,
      amountSpecified: PromiseOrValue<BigNumberish>,
      sqrtPriceLimitX96: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateGlobalFundingState(
      useZeroFundingRate: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    vPool(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    burn(
      tickLower: PromiseOrValue<BigNumberish>,
      tickUpper: PromiseOrValue<BigNumberish>,
      liquidity: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    collectAccruedProtocolFee(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getExtrapolatedSumAX128(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getExtrapolatedValuesInside(
      tickLower: PromiseOrValue<BigNumberish>,
      tickUpper: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSumAX128(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getValuesInside(
      tickLower: PromiseOrValue<BigNumberish>,
      tickUpper: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      params: IVPoolWrapper.InitializeVPoolWrapperParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    liquidityFeePips(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mint(
      tickLower: PromiseOrValue<BigNumberish>,
      tickUpper: PromiseOrValue<BigNumberish>,
      liquidity: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    protocolFeePips(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    swap(
      swapVTokenForVQuote: PromiseOrValue<boolean>,
      amountSpecified: PromiseOrValue<BigNumberish>,
      sqrtPriceLimitX96: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateGlobalFundingState(
      useZeroFundingRate: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    vPool(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}