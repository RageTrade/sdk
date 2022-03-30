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
} from '../../../../common';

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

export interface VPoolWrapperMockInterface extends utils.Interface {
  functions: {
    '__initialize_VPoolWrapper((address,address,address,address,uint24,uint24))': FunctionFragment;
    'burn(int24,int24,uint128)': FunctionFragment;
    'collectAccruedProtocolFee()': FunctionFragment;
    'getExtrapolatedSumAX128()': FunctionFragment;
    'getExtrapolatedValuesInside(int24,int24)': FunctionFragment;
    'getSumAX128()': FunctionFragment;
    'getValuesInside(int24,int24)': FunctionFragment;
    'liquidityFeePips()': FunctionFragment;
    'mint(int24,int24,uint128)': FunctionFragment;
    'protocolFeePips()': FunctionFragment;
    'setLiquidityRates(int24,int24,uint256,uint256)': FunctionFragment;
    'setVPool(address)': FunctionFragment;
    'setValuesInside(int24,int24,int256,int256,int256,uint256)': FunctionFragment;
    'swap(bool,int256,uint160)': FunctionFragment;
    'swapTokenAmount(int256)': FunctionFragment;
    'swapTokenNotional(int256)': FunctionFragment;
    'uniswapFeePips()': FunctionFragment;
    'updateGlobalFundingState(uint256,uint256)': FunctionFragment;
    'vPool()': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | '__initialize_VPoolWrapper'
      | 'burn'
      | 'collectAccruedProtocolFee'
      | 'getExtrapolatedSumAX128'
      | 'getExtrapolatedValuesInside'
      | 'getSumAX128'
      | 'getValuesInside'
      | 'liquidityFeePips'
      | 'mint'
      | 'protocolFeePips'
      | 'setLiquidityRates'
      | 'setVPool'
      | 'setValuesInside'
      | 'swap'
      | 'swapTokenAmount'
      | 'swapTokenNotional'
      | 'uniswapFeePips'
      | 'updateGlobalFundingState'
      | 'vPool'
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: '__initialize_VPoolWrapper',
    values: [IVPoolWrapper.InitializeVPoolWrapperParamsStruct]
  ): string;
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
    functionFragment: 'setLiquidityRates',
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: 'setVPool', values: [string]): string;
  encodeFunctionData(
    functionFragment: 'setValuesInside',
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: 'swap',
    values: [boolean, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'swapTokenAmount',
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'swapTokenNotional',
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'uniswapFeePips',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'updateGlobalFundingState',
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: 'vPool', values?: undefined): string;

  decodeFunctionResult(
    functionFragment: '__initialize_VPoolWrapper',
    data: BytesLike
  ): Result;
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
    functionFragment: 'setLiquidityRates',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'setVPool', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'setValuesInside',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'swap', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'swapTokenAmount',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'swapTokenNotional',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'uniswapFeePips',
    data: BytesLike
  ): Result;
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

export interface VPoolWrapperMock extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: VPoolWrapperMockInterface;

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

    burn(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      liquidity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    collectAccruedProtocolFee(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { accruedProtocolFeeLast: BigNumber }>;

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

    liquidityFeePips(overrides?: CallOverrides): Promise<[number]>;

    mint(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      liquidity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    protocolFeePips(overrides?: CallOverrides): Promise<[number]>;

    setLiquidityRates(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      vQuotePerLiquidity: BigNumberish,
      vTokenPerLiquidity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setVPool(
      vPoolAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setValuesInside(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      sumAX128: BigNumberish,
      sumBInsideX128: BigNumberish,
      sumFpInsideX128: BigNumberish,
      sumFeeInsideX128: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swap(
      swapVTokenForVQuote: boolean,
      amountSpecified: BigNumberish,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [IVPoolWrapper.SwapResultStructOutput] & {
        swapResult: IVPoolWrapper.SwapResultStructOutput;
      }
    >;

    swapTokenAmount(
      vTokenAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    swapTokenNotional(
      vTokenNotional: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    uniswapFeePips(overrides?: CallOverrides): Promise<[number]>;

    updateGlobalFundingState(
      realPriceX128: BigNumberish,
      virtualPriceX128: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    vPool(overrides?: CallOverrides): Promise<[string]>;
  };

  __initialize_VPoolWrapper(
    params: IVPoolWrapper.InitializeVPoolWrapperParamsStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  burn(
    tickLower: BigNumberish,
    tickUpper: BigNumberish,
    liquidity: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

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

  liquidityFeePips(overrides?: CallOverrides): Promise<number>;

  mint(
    tickLower: BigNumberish,
    tickUpper: BigNumberish,
    liquidity: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  protocolFeePips(overrides?: CallOverrides): Promise<number>;

  setLiquidityRates(
    tickLower: BigNumberish,
    tickUpper: BigNumberish,
    vQuotePerLiquidity: BigNumberish,
    vTokenPerLiquidity: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setVPool(
    vPoolAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setValuesInside(
    tickLower: BigNumberish,
    tickUpper: BigNumberish,
    sumAX128: BigNumberish,
    sumBInsideX128: BigNumberish,
    sumFpInsideX128: BigNumberish,
    sumFeeInsideX128: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swap(
    swapVTokenForVQuote: boolean,
    amountSpecified: BigNumberish,
    arg2: BigNumberish,
    overrides?: CallOverrides
  ): Promise<IVPoolWrapper.SwapResultStructOutput>;

  swapTokenAmount(
    vTokenAmount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  swapTokenNotional(
    vTokenNotional: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  uniswapFeePips(overrides?: CallOverrides): Promise<number>;

  updateGlobalFundingState(
    realPriceX128: BigNumberish,
    virtualPriceX128: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  vPool(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    __initialize_VPoolWrapper(
      params: IVPoolWrapper.InitializeVPoolWrapperParamsStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    burn(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      liquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, IVPoolWrapper.WrapperValuesInsideStructOutput] & {
        vTokenAmount: BigNumber;
        vQuoteAmount: BigNumber;
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

    liquidityFeePips(overrides?: CallOverrides): Promise<number>;

    mint(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      liquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, IVPoolWrapper.WrapperValuesInsideStructOutput] & {
        vTokenAmount: BigNumber;
        vQuoteAmount: BigNumber;
        wrapperValuesInside: IVPoolWrapper.WrapperValuesInsideStructOutput;
      }
    >;

    protocolFeePips(overrides?: CallOverrides): Promise<number>;

    setLiquidityRates(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      vQuotePerLiquidity: BigNumberish,
      vTokenPerLiquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setVPool(vPoolAddress: string, overrides?: CallOverrides): Promise<void>;

    setValuesInside(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      sumAX128: BigNumberish,
      sumBInsideX128: BigNumberish,
      sumFpInsideX128: BigNumberish,
      sumFeeInsideX128: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    swap(
      swapVTokenForVQuote: boolean,
      amountSpecified: BigNumberish,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<IVPoolWrapper.SwapResultStructOutput>;

    swapTokenAmount(
      vTokenAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swapTokenNotional(
      vTokenNotional: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    uniswapFeePips(overrides?: CallOverrides): Promise<number>;

    updateGlobalFundingState(
      realPriceX128: BigNumberish,
      virtualPriceX128: BigNumberish,
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
    __initialize_VPoolWrapper(
      params: IVPoolWrapper.InitializeVPoolWrapperParamsStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    burn(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      liquidity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    collectAccruedProtocolFee(overrides?: CallOverrides): Promise<BigNumber>;

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

    liquidityFeePips(overrides?: CallOverrides): Promise<BigNumber>;

    mint(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      liquidity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    protocolFeePips(overrides?: CallOverrides): Promise<BigNumber>;

    setLiquidityRates(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      vQuotePerLiquidity: BigNumberish,
      vTokenPerLiquidity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setVPool(
      vPoolAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setValuesInside(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      sumAX128: BigNumberish,
      sumBInsideX128: BigNumberish,
      sumFpInsideX128: BigNumberish,
      sumFeeInsideX128: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swap(
      swapVTokenForVQuote: boolean,
      amountSpecified: BigNumberish,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swapTokenAmount(
      vTokenAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swapTokenNotional(
      vTokenNotional: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    uniswapFeePips(overrides?: CallOverrides): Promise<BigNumber>;

    updateGlobalFundingState(
      realPriceX128: BigNumberish,
      virtualPriceX128: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    vPool(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    __initialize_VPoolWrapper(
      params: IVPoolWrapper.InitializeVPoolWrapperParamsStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    burn(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      liquidity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    collectAccruedProtocolFee(
      overrides?: CallOverrides
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

    liquidityFeePips(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mint(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      liquidity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    protocolFeePips(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setLiquidityRates(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      vQuotePerLiquidity: BigNumberish,
      vTokenPerLiquidity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setVPool(
      vPoolAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setValuesInside(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      sumAX128: BigNumberish,
      sumBInsideX128: BigNumberish,
      sumFpInsideX128: BigNumberish,
      sumFeeInsideX128: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swap(
      swapVTokenForVQuote: boolean,
      amountSpecified: BigNumberish,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    swapTokenAmount(
      vTokenAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    swapTokenNotional(
      vTokenNotional: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    uniswapFeePips(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    updateGlobalFundingState(
      realPriceX128: BigNumberish,
      virtualPriceX128: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    vPool(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}