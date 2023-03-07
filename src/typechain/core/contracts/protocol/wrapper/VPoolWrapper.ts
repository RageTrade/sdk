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

export declare namespace FundingPayment {
  export type InfoStruct = {
    sumAX128: BigNumberish;
    sumBX128: BigNumberish;
    sumFpX128: BigNumberish;
    timestampLast: BigNumberish;
  };

  export type InfoStructOutput = [
    sumAX128: bigint,
    sumBX128: bigint,
    sumFpX128: bigint,
    timestampLast: bigint
  ] & {
    sumAX128: bigint;
    sumBX128: bigint;
    sumFpX128: bigint;
    timestampLast: bigint;
  };
}

export interface VPoolWrapperInterface extends Interface {
  getFunction(
    nameOrSignature:
      | 'accruedProtocolFee'
      | 'burn'
      | 'clearingHouse'
      | 'collectAccruedProtocolFee'
      | 'extsload(bytes32)'
      | 'extsload(bytes32[])'
      | 'fpGlobal'
      | 'fundingRateOverrideX128'
      | 'getExtrapolatedSumAX128'
      | 'getExtrapolatedValuesInside'
      | 'getFundingRateAndVirtualPrice'
      | 'getSumAX128'
      | 'getValuesInside'
      | 'initialize'
      | 'liquidityFeePips'
      | 'mint'
      | 'protocolFeePips'
      | 'setFundingRateOverride'
      | 'setLiquidityFee'
      | 'setProtocolFee'
      | 'sumFeeGlobalX128'
      | 'swap'
      | 'ticksExtended'
      | 'uniswapV3MintCallback'
      | 'uniswapV3SwapCallback'
      | 'updateGlobalFundingState'
      | 'vPool'
      | 'vQuote'
      | 'vToken'
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
      | 'FundingPaymentStateUpdated'
  ): EventFragment;

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
    functionFragment: 'fundingRateOverrideX128',
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
    functionFragment: 'getFundingRateAndVirtualPrice',
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
    functionFragment: 'setFundingRateOverride',
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
    functionFragment: 'fundingRateOverrideX128',
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
    functionFragment: 'getFundingRateAndVirtualPrice',
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
    functionFragment: 'setFundingRateOverride',
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

export namespace FundingPaymentStateUpdatedEvent {
  export type InputTuple = [
    fundingPayment: FundingPayment.InfoStruct,
    fundingRateX128: BigNumberish,
    virtualPriceX128: BigNumberish
  ];
  export type OutputTuple = [
    fundingPayment: FundingPayment.InfoStructOutput,
    fundingRateX128: bigint,
    virtualPriceX128: bigint
  ];
  export interface OutputObject {
    fundingPayment: FundingPayment.InfoStructOutput;
    fundingRateX128: bigint;
    virtualPriceX128: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface VPoolWrapper extends BaseContract {
  connect(runner?: ContractRunner | null): BaseContract;
  attach(addressOrName: AddressLike): this;
  deployed(): Promise<this>;

  interface: VPoolWrapperInterface;

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

  accruedProtocolFee: TypedContractMethod<[], [bigint], 'view'>;

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

  clearingHouse: TypedContractMethod<[], [string], 'view'>;

  collectAccruedProtocolFee: TypedContractMethod<[], [bigint], 'nonpayable'>;

  'extsload(bytes32)': TypedContractMethod<[slot: BytesLike], [string], 'view'>;

  'extsload(bytes32[])': TypedContractMethod<
    [slots: BytesLike[]],
    [string[]],
    'view'
  >;

  fpGlobal: TypedContractMethod<
    [],
    [
      [bigint, bigint, bigint, bigint] & {
        sumAX128: bigint;
        sumBX128: bigint;
        sumFpX128: bigint;
        timestampLast: bigint;
      }
    ],
    'view'
  >;

  fundingRateOverrideX128: TypedContractMethod<[], [bigint], 'view'>;

  getExtrapolatedSumAX128: TypedContractMethod<[], [bigint], 'view'>;

  getExtrapolatedValuesInside: TypedContractMethod<
    [tickLower: BigNumberish, tickUpper: BigNumberish],
    [IVPoolWrapper.WrapperValuesInsideStructOutput],
    'view'
  >;

  getFundingRateAndVirtualPrice: TypedContractMethod<
    [],
    [[bigint, bigint] & { fundingRateX128: bigint; virtualPriceX128: bigint }],
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

  setFundingRateOverride: TypedContractMethod<
    [fundingRateOverrideX128_: BigNumberish],
    [void],
    'nonpayable'
  >;

  setLiquidityFee: TypedContractMethod<
    [liquidityFeePips_: BigNumberish],
    [void],
    'nonpayable'
  >;

  setProtocolFee: TypedContractMethod<
    [protocolFeePips_: BigNumberish],
    [void],
    'nonpayable'
  >;

  sumFeeGlobalX128: TypedContractMethod<[], [bigint], 'view'>;

  swap: TypedContractMethod<
    [
      swapVTokenForVQuote: boolean,
      amountSpecified: BigNumberish,
      sqrtPriceLimitX96: BigNumberish
    ],
    [IVPoolWrapper.SwapResultStructOutput],
    'nonpayable'
  >;

  ticksExtended: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [bigint, bigint, bigint, bigint] & {
        sumALastX128: bigint;
        sumBOutsideX128: bigint;
        sumFpOutsideX128: bigint;
        sumFeeOutsideX128: bigint;
      }
    ],
    'view'
  >;

  uniswapV3MintCallback: TypedContractMethod<
    [vTokenAmount: BigNumberish, vQuoteAmount: BigNumberish, arg2: BytesLike],
    [void],
    'nonpayable'
  >;

  uniswapV3SwapCallback: TypedContractMethod<
    [amount0Delta: BigNumberish, amount1Delta: BigNumberish, arg2: BytesLike],
    [void],
    'nonpayable'
  >;

  updateGlobalFundingState: TypedContractMethod<
    [useZeroFundingRate: boolean],
    [void],
    'nonpayable'
  >;

  vPool: TypedContractMethod<[], [string], 'view'>;

  vQuote: TypedContractMethod<[], [string], 'view'>;

  vToken: TypedContractMethod<[], [string], 'view'>;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: 'accruedProtocolFee'
  ): TypedContractMethod<[], [bigint], 'view'>;
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
    nameOrSignature: 'clearingHouse'
  ): TypedContractMethod<[], [string], 'view'>;
  getFunction(
    nameOrSignature: 'collectAccruedProtocolFee'
  ): TypedContractMethod<[], [bigint], 'nonpayable'>;
  getFunction(
    nameOrSignature: 'extsload(bytes32)'
  ): TypedContractMethod<[slot: BytesLike], [string], 'view'>;
  getFunction(
    nameOrSignature: 'extsload(bytes32[])'
  ): TypedContractMethod<[slots: BytesLike[]], [string[]], 'view'>;
  getFunction(nameOrSignature: 'fpGlobal'): TypedContractMethod<
    [],
    [
      [bigint, bigint, bigint, bigint] & {
        sumAX128: bigint;
        sumBX128: bigint;
        sumFpX128: bigint;
        timestampLast: bigint;
      }
    ],
    'view'
  >;
  getFunction(
    nameOrSignature: 'fundingRateOverrideX128'
  ): TypedContractMethod<[], [bigint], 'view'>;
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
    nameOrSignature: 'getFundingRateAndVirtualPrice'
  ): TypedContractMethod<
    [],
    [[bigint, bigint] & { fundingRateX128: bigint; virtualPriceX128: bigint }],
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
    nameOrSignature: 'setFundingRateOverride'
  ): TypedContractMethod<
    [fundingRateOverrideX128_: BigNumberish],
    [void],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'setLiquidityFee'
  ): TypedContractMethod<
    [liquidityFeePips_: BigNumberish],
    [void],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'setProtocolFee'
  ): TypedContractMethod<
    [protocolFeePips_: BigNumberish],
    [void],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'sumFeeGlobalX128'
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
  getFunction(nameOrSignature: 'ticksExtended'): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [bigint, bigint, bigint, bigint] & {
        sumALastX128: bigint;
        sumBOutsideX128: bigint;
        sumFpOutsideX128: bigint;
        sumFeeOutsideX128: bigint;
      }
    ],
    'view'
  >;
  getFunction(
    nameOrSignature: 'uniswapV3MintCallback'
  ): TypedContractMethod<
    [vTokenAmount: BigNumberish, vQuoteAmount: BigNumberish, arg2: BytesLike],
    [void],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'uniswapV3SwapCallback'
  ): TypedContractMethod<
    [amount0Delta: BigNumberish, amount1Delta: BigNumberish, arg2: BytesLike],
    [void],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'updateGlobalFundingState'
  ): TypedContractMethod<[useZeroFundingRate: boolean], [void], 'nonpayable'>;
  getFunction(
    nameOrSignature: 'vPool'
  ): TypedContractMethod<[], [string], 'view'>;
  getFunction(
    nameOrSignature: 'vQuote'
  ): TypedContractMethod<[], [string], 'view'>;
  getFunction(
    nameOrSignature: 'vToken'
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
  getEvent(
    key: 'FundingPaymentStateUpdated'
  ): TypedContractEvent<
    FundingPaymentStateUpdatedEvent.InputTuple,
    FundingPaymentStateUpdatedEvent.OutputTuple,
    FundingPaymentStateUpdatedEvent.OutputObject
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

    'FundingPaymentStateUpdated(tuple,int256,uint256)': TypedContractEvent<
      FundingPaymentStateUpdatedEvent.InputTuple,
      FundingPaymentStateUpdatedEvent.OutputTuple,
      FundingPaymentStateUpdatedEvent.OutputObject
    >;
    FundingPaymentStateUpdated: TypedContractEvent<
      FundingPaymentStateUpdatedEvent.InputTuple,
      FundingPaymentStateUpdatedEvent.OutputTuple,
      FundingPaymentStateUpdatedEvent.OutputObject
    >;
  };
}
