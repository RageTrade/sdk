/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from 'ethers';
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
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
    amountSpecified: bigint,
    vTokenIn: bigint,
    vQuoteIn: bigint,
    liquidityFees: bigint,
    protocolFees: bigint,
    sqrtPriceX96Start: bigint,
    sqrtPriceX96End: bigint
  ] & {
    amountSpecified: bigint;
    vTokenIn: bigint;
    vQuoteIn: bigint;
    liquidityFees: bigint;
    protocolFees: bigint;
    sqrtPriceX96Start: bigint;
    sqrtPriceX96End: bigint;
  };

  export type WrapperValuesInsideStruct = {
    sumAX128: BigNumberish;
    sumBInsideX128: BigNumberish;
    sumFpInsideX128: BigNumberish;
    sumFeeInsideX128: BigNumberish;
  };

  export type WrapperValuesInsideStructOutput = [
    sumAX128: bigint,
    sumBInsideX128: bigint,
    sumFpInsideX128: bigint,
    sumFeeInsideX128: bigint
  ] & {
    sumAX128: bigint;
    sumBInsideX128: bigint;
    sumFpInsideX128: bigint;
    sumFeeInsideX128: bigint;
  };

  export type InitializeVPoolWrapperParamsStruct = {
    clearingHouse: AddressLike;
    vToken: AddressLike;
    vQuote: AddressLike;
    vPool: AddressLike;
    liquidityFeePips: BigNumberish;
    protocolFeePips: BigNumberish;
  };

  export type InitializeVPoolWrapperParamsStructOutput = [
    clearingHouse: string,
    vToken: string,
    vQuote: string,
    vPool: string,
    liquidityFeePips: bigint,
    protocolFeePips: bigint
  ] & {
    clearingHouse: string;
    vToken: string;
    vQuote: string;
    vPool: string;
    liquidityFeePips: bigint;
    protocolFeePips: bigint;
  };
}

export interface IVPoolWrapperInterface extends Interface {
  getFunction(
    nameOrSignature:
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

  getEvent(
    nameOrSignatureOrTopic:
      | 'AccruedProtocolFeeCollected'
      | 'Burn'
      | 'FundingRateOverrideUpdated'
      | 'LiquidityFeeUpdated'
      | 'Mint'
      | 'ProtocolFeeUpdated'
      | 'Swap'
  ): EventFragment;

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
}

export namespace AccruedProtocolFeeCollectedEvent {
  export type InputTuple = [amount: BigNumberish];
  export type OutputTuple = [amount: bigint];
  export interface OutputObject {
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace BurnEvent {
  export type InputTuple = [
    tickLower: BigNumberish,
    tickUpper: BigNumberish,
    liquidity: BigNumberish,
    vTokenPrincipal: BigNumberish,
    vQuotePrincipal: BigNumberish
  ];
  export type OutputTuple = [
    tickLower: bigint,
    tickUpper: bigint,
    liquidity: bigint,
    vTokenPrincipal: bigint,
    vQuotePrincipal: bigint
  ];
  export interface OutputObject {
    tickLower: bigint;
    tickUpper: bigint;
    liquidity: bigint;
    vTokenPrincipal: bigint;
    vQuotePrincipal: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace FundingRateOverrideUpdatedEvent {
  export type InputTuple = [fundingRateOverrideX128: BigNumberish];
  export type OutputTuple = [fundingRateOverrideX128: bigint];
  export interface OutputObject {
    fundingRateOverrideX128: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace LiquidityFeeUpdatedEvent {
  export type InputTuple = [liquidityFeePips: BigNumberish];
  export type OutputTuple = [liquidityFeePips: bigint];
  export interface OutputObject {
    liquidityFeePips: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace MintEvent {
  export type InputTuple = [
    tickLower: BigNumberish,
    tickUpper: BigNumberish,
    liquidity: BigNumberish,
    vTokenPrincipal: BigNumberish,
    vQuotePrincipal: BigNumberish
  ];
  export type OutputTuple = [
    tickLower: bigint,
    tickUpper: bigint,
    liquidity: bigint,
    vTokenPrincipal: bigint,
    vQuotePrincipal: bigint
  ];
  export interface OutputObject {
    tickLower: bigint;
    tickUpper: bigint;
    liquidity: bigint;
    vTokenPrincipal: bigint;
    vQuotePrincipal: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ProtocolFeeUpdatedEvent {
  export type InputTuple = [protocolFeePips: BigNumberish];
  export type OutputTuple = [protocolFeePips: bigint];
  export interface OutputObject {
    protocolFeePips: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SwapEvent {
  export type InputTuple = [swapResult: IVPoolWrapper.SwapResultStruct];
  export type OutputTuple = [swapResult: IVPoolWrapper.SwapResultStructOutput];
  export interface OutputObject {
    swapResult: IVPoolWrapper.SwapResultStructOutput;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IVPoolWrapper extends BaseContract {
  connect(runner?: ContractRunner | null): BaseContract;
  attach(addressOrName: AddressLike): this;
  deployed(): Promise<this>;

  interface: IVPoolWrapperInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  burn: TypedContractMethod<
    [tickLower: BigNumberish, tickUpper: BigNumberish, liquidity: BigNumberish],
    [
      [bigint, bigint, IVPoolWrapper.WrapperValuesInsideStructOutput] & {
        vTokenPrincipal: bigint;
        vQuotePrincipal: bigint;
        wrapperValuesInside: IVPoolWrapper.WrapperValuesInsideStructOutput;
      }
    ],
    'nonpayable'
  >;

  collectAccruedProtocolFee: TypedContractMethod<[], [bigint], 'nonpayable'>;

  getExtrapolatedSumAX128: TypedContractMethod<[], [bigint], 'view'>;

  getExtrapolatedValuesInside: TypedContractMethod<
    [tickLower: BigNumberish, tickUpper: BigNumberish],
    [IVPoolWrapper.WrapperValuesInsideStructOutput],
    'view'
  >;

  getSumAX128: TypedContractMethod<[], [bigint], 'view'>;

  getValuesInside: TypedContractMethod<
    [tickLower: BigNumberish, tickUpper: BigNumberish],
    [IVPoolWrapper.WrapperValuesInsideStructOutput],
    'view'
  >;

  initialize: TypedContractMethod<
    [params: IVPoolWrapper.InitializeVPoolWrapperParamsStruct],
    [void],
    'nonpayable'
  >;

  liquidityFeePips: TypedContractMethod<[], [bigint], 'view'>;

  mint: TypedContractMethod<
    [tickLower: BigNumberish, tickUpper: BigNumberish, liquidity: BigNumberish],
    [
      [bigint, bigint, IVPoolWrapper.WrapperValuesInsideStructOutput] & {
        vTokenPrincipal: bigint;
        vQuotePrincipal: bigint;
        wrapperValuesInside: IVPoolWrapper.WrapperValuesInsideStructOutput;
      }
    ],
    'nonpayable'
  >;

  protocolFeePips: TypedContractMethod<[], [bigint], 'view'>;

  swap: TypedContractMethod<
    [
      swapVTokenForVQuote: boolean,
      amountSpecified: BigNumberish,
      sqrtPriceLimitX96: BigNumberish
    ],
    [IVPoolWrapper.SwapResultStructOutput],
    'nonpayable'
  >;

  updateGlobalFundingState: TypedContractMethod<
    [useZeroFundingRate: boolean],
    [void],
    'nonpayable'
  >;

  vPool: TypedContractMethod<[], [string], 'view'>;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(nameOrSignature: 'burn'): TypedContractMethod<
    [tickLower: BigNumberish, tickUpper: BigNumberish, liquidity: BigNumberish],
    [
      [bigint, bigint, IVPoolWrapper.WrapperValuesInsideStructOutput] & {
        vTokenPrincipal: bigint;
        vQuotePrincipal: bigint;
        wrapperValuesInside: IVPoolWrapper.WrapperValuesInsideStructOutput;
      }
    ],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'collectAccruedProtocolFee'
  ): TypedContractMethod<[], [bigint], 'nonpayable'>;
  getFunction(
    nameOrSignature: 'getExtrapolatedSumAX128'
  ): TypedContractMethod<[], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'getExtrapolatedValuesInside'
  ): TypedContractMethod<
    [tickLower: BigNumberish, tickUpper: BigNumberish],
    [IVPoolWrapper.WrapperValuesInsideStructOutput],
    'view'
  >;
  getFunction(
    nameOrSignature: 'getSumAX128'
  ): TypedContractMethod<[], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'getValuesInside'
  ): TypedContractMethod<
    [tickLower: BigNumberish, tickUpper: BigNumberish],
    [IVPoolWrapper.WrapperValuesInsideStructOutput],
    'view'
  >;
  getFunction(
    nameOrSignature: 'initialize'
  ): TypedContractMethod<
    [params: IVPoolWrapper.InitializeVPoolWrapperParamsStruct],
    [void],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'liquidityFeePips'
  ): TypedContractMethod<[], [bigint], 'view'>;
  getFunction(nameOrSignature: 'mint'): TypedContractMethod<
    [tickLower: BigNumberish, tickUpper: BigNumberish, liquidity: BigNumberish],
    [
      [bigint, bigint, IVPoolWrapper.WrapperValuesInsideStructOutput] & {
        vTokenPrincipal: bigint;
        vQuotePrincipal: bigint;
        wrapperValuesInside: IVPoolWrapper.WrapperValuesInsideStructOutput;
      }
    ],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'protocolFeePips'
  ): TypedContractMethod<[], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'swap'
  ): TypedContractMethod<
    [
      swapVTokenForVQuote: boolean,
      amountSpecified: BigNumberish,
      sqrtPriceLimitX96: BigNumberish
    ],
    [IVPoolWrapper.SwapResultStructOutput],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'updateGlobalFundingState'
  ): TypedContractMethod<[useZeroFundingRate: boolean], [void], 'nonpayable'>;
  getFunction(
    nameOrSignature: 'vPool'
  ): TypedContractMethod<[], [string], 'view'>;

  getEvent(
    key: 'AccruedProtocolFeeCollected'
  ): TypedContractEvent<
    AccruedProtocolFeeCollectedEvent.InputTuple,
    AccruedProtocolFeeCollectedEvent.OutputTuple,
    AccruedProtocolFeeCollectedEvent.OutputObject
  >;
  getEvent(
    key: 'Burn'
  ): TypedContractEvent<
    BurnEvent.InputTuple,
    BurnEvent.OutputTuple,
    BurnEvent.OutputObject
  >;
  getEvent(
    key: 'FundingRateOverrideUpdated'
  ): TypedContractEvent<
    FundingRateOverrideUpdatedEvent.InputTuple,
    FundingRateOverrideUpdatedEvent.OutputTuple,
    FundingRateOverrideUpdatedEvent.OutputObject
  >;
  getEvent(
    key: 'LiquidityFeeUpdated'
  ): TypedContractEvent<
    LiquidityFeeUpdatedEvent.InputTuple,
    LiquidityFeeUpdatedEvent.OutputTuple,
    LiquidityFeeUpdatedEvent.OutputObject
  >;
  getEvent(
    key: 'Mint'
  ): TypedContractEvent<
    MintEvent.InputTuple,
    MintEvent.OutputTuple,
    MintEvent.OutputObject
  >;
  getEvent(
    key: 'ProtocolFeeUpdated'
  ): TypedContractEvent<
    ProtocolFeeUpdatedEvent.InputTuple,
    ProtocolFeeUpdatedEvent.OutputTuple,
    ProtocolFeeUpdatedEvent.OutputObject
  >;
  getEvent(
    key: 'Swap'
  ): TypedContractEvent<
    SwapEvent.InputTuple,
    SwapEvent.OutputTuple,
    SwapEvent.OutputObject
  >;

  filters: {
    'AccruedProtocolFeeCollected(uint256)': TypedContractEvent<
      AccruedProtocolFeeCollectedEvent.InputTuple,
      AccruedProtocolFeeCollectedEvent.OutputTuple,
      AccruedProtocolFeeCollectedEvent.OutputObject
    >;
    AccruedProtocolFeeCollected: TypedContractEvent<
      AccruedProtocolFeeCollectedEvent.InputTuple,
      AccruedProtocolFeeCollectedEvent.OutputTuple,
      AccruedProtocolFeeCollectedEvent.OutputObject
    >;

    'Burn(int24,int24,uint128,uint256,uint256)': TypedContractEvent<
      BurnEvent.InputTuple,
      BurnEvent.OutputTuple,
      BurnEvent.OutputObject
    >;
    Burn: TypedContractEvent<
      BurnEvent.InputTuple,
      BurnEvent.OutputTuple,
      BurnEvent.OutputObject
    >;

    'FundingRateOverrideUpdated(int256)': TypedContractEvent<
      FundingRateOverrideUpdatedEvent.InputTuple,
      FundingRateOverrideUpdatedEvent.OutputTuple,
      FundingRateOverrideUpdatedEvent.OutputObject
    >;
    FundingRateOverrideUpdated: TypedContractEvent<
      FundingRateOverrideUpdatedEvent.InputTuple,
      FundingRateOverrideUpdatedEvent.OutputTuple,
      FundingRateOverrideUpdatedEvent.OutputObject
    >;

    'LiquidityFeeUpdated(uint24)': TypedContractEvent<
      LiquidityFeeUpdatedEvent.InputTuple,
      LiquidityFeeUpdatedEvent.OutputTuple,
      LiquidityFeeUpdatedEvent.OutputObject
    >;
    LiquidityFeeUpdated: TypedContractEvent<
      LiquidityFeeUpdatedEvent.InputTuple,
      LiquidityFeeUpdatedEvent.OutputTuple,
      LiquidityFeeUpdatedEvent.OutputObject
    >;

    'Mint(int24,int24,uint128,uint256,uint256)': TypedContractEvent<
      MintEvent.InputTuple,
      MintEvent.OutputTuple,
      MintEvent.OutputObject
    >;
    Mint: TypedContractEvent<
      MintEvent.InputTuple,
      MintEvent.OutputTuple,
      MintEvent.OutputObject
    >;

    'ProtocolFeeUpdated(uint24)': TypedContractEvent<
      ProtocolFeeUpdatedEvent.InputTuple,
      ProtocolFeeUpdatedEvent.OutputTuple,
      ProtocolFeeUpdatedEvent.OutputObject
    >;
    ProtocolFeeUpdated: TypedContractEvent<
      ProtocolFeeUpdatedEvent.InputTuple,
      ProtocolFeeUpdatedEvent.OutputTuple,
      ProtocolFeeUpdatedEvent.OutputObject
    >;

    'Swap(tuple)': TypedContractEvent<
      SwapEvent.InputTuple,
      SwapEvent.OutputTuple,
      SwapEvent.OutputObject
    >;
    Swap: TypedContractEvent<
      SwapEvent.InputTuple,
      SwapEvent.OutputTuple,
      SwapEvent.OutputObject
    >;
  };
}
