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
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from 'ethers';
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
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
}

export declare namespace SimulateSwap {
  export type CacheStruct = {
    sqrtPriceX96Start: BigNumberish;
    tickStart: BigNumberish;
    feeProtocol: BigNumberish;
    liquidityStart: BigNumberish;
    tickSpacing: BigNumberish;
    fee: BigNumberish;
    value1: BigNumberish;
    value2: BigNumberish;
  };

  export type CacheStructOutput = [
    sqrtPriceX96Start: bigint,
    tickStart: bigint,
    feeProtocol: bigint,
    liquidityStart: bigint,
    tickSpacing: bigint,
    fee: bigint,
    value1: bigint,
    value2: bigint
  ] & {
    sqrtPriceX96Start: bigint;
    tickStart: bigint;
    feeProtocol: bigint;
    liquidityStart: bigint;
    tickSpacing: bigint;
    fee: bigint;
    value1: bigint;
    value2: bigint;
  };

  export type StepStruct = {
    sqrtPriceStartX96: BigNumberish;
    tickNext: BigNumberish;
    initialized: boolean;
    sqrtPriceNextX96: BigNumberish;
    amountIn: BigNumberish;
    amountOut: BigNumberish;
    feeAmount: BigNumberish;
  };

  export type StepStructOutput = [
    sqrtPriceStartX96: bigint,
    tickNext: bigint,
    initialized: boolean,
    sqrtPriceNextX96: bigint,
    amountIn: bigint,
    amountOut: bigint,
    feeAmount: bigint
  ] & {
    sqrtPriceStartX96: bigint;
    tickNext: bigint;
    initialized: boolean;
    sqrtPriceNextX96: bigint;
    amountIn: bigint;
    amountOut: bigint;
    feeAmount: bigint;
  };

  export type StateStruct = {
    amountSpecifiedRemaining: BigNumberish;
    amountCalculated: BigNumberish;
    sqrtPriceX96: BigNumberish;
    tick: BigNumberish;
    feeGrowthGlobalIncreaseX128: BigNumberish;
    protocolFee: BigNumberish;
    liquidity: BigNumberish;
  };

  export type StateStructOutput = [
    amountSpecifiedRemaining: bigint,
    amountCalculated: bigint,
    sqrtPriceX96: bigint,
    tick: bigint,
    feeGrowthGlobalIncreaseX128: bigint,
    protocolFee: bigint,
    liquidity: bigint
  ] & {
    amountSpecifiedRemaining: bigint;
    amountCalculated: bigint;
    sqrtPriceX96: bigint;
    tick: bigint;
    feeGrowthGlobalIncreaseX128: bigint;
    protocolFee: bigint;
    liquidity: bigint;
  };
}

export declare namespace SwapSimulator {
  export type SwapStepAndStateStruct = {
    step: SimulateSwap.StepStruct;
    state: SimulateSwap.StateStruct;
  };

  export type SwapStepAndStateStructOutput = [
    step: SimulateSwap.StepStructOutput,
    state: SimulateSwap.StateStructOutput
  ] & {
    step: SimulateSwap.StepStructOutput;
    state: SimulateSwap.StateStructOutput;
  };
}

export interface SwapSimulatorInterface extends Interface {
  getFunction(
    nameOrSignature:
      | 'simulateSwap'
      | 'simulateSwapOnVPool'
      | 'simulateSwapOnVPoolView'
      | 'simulateSwapView'
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'simulateSwap',
    values: [AddressLike, BigNumberish, BigNumberish, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: 'simulateSwapOnVPool',
    values: [
      AddressLike,
      BigNumberish,
      BigNumberish,
      boolean,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: 'simulateSwapOnVPoolView',
    values: [
      AddressLike,
      BigNumberish,
      BigNumberish,
      boolean,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: 'simulateSwapView',
    values: [AddressLike, BigNumberish, BigNumberish, BigNumberish, boolean]
  ): string;

  decodeFunctionResult(
    functionFragment: 'simulateSwap',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'simulateSwapOnVPool',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'simulateSwapOnVPoolView',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'simulateSwapView',
    data: BytesLike
  ): Result;
}

export interface SwapSimulator extends BaseContract {
  connect(runner?: ContractRunner | null): BaseContract;
  attach(addressOrName: AddressLike): this;
  deployed(): Promise<this>;

  interface: SwapSimulatorInterface;

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

  simulateSwap: TypedContractMethod<
    [
      clearingHouse: AddressLike,
      poolId: BigNumberish,
      amount: BigNumberish,
      sqrtPriceLimitX96: BigNumberish,
      isNotional: boolean
    ],
    [
      [
        IVPoolWrapper.SwapResultStructOutput,
        SimulateSwap.CacheStructOutput,
        SwapSimulator.SwapStepAndStateStructOutput[]
      ] & {
        swapResult: IVPoolWrapper.SwapResultStructOutput;
        cache: SimulateSwap.CacheStructOutput;
        steps: SwapSimulator.SwapStepAndStateStructOutput[];
      }
    ],
    'nonpayable'
  >;

  simulateSwapOnVPool: TypedContractMethod<
    [
      vPool: AddressLike,
      liquidityFeePips: BigNumberish,
      protocolFeePips: BigNumberish,
      swapVTokenForVQuote: boolean,
      amountSpecified: BigNumberish,
      sqrtPriceLimitX96: BigNumberish
    ],
    [
      [
        IVPoolWrapper.SwapResultStructOutput,
        SimulateSwap.CacheStructOutput,
        SwapSimulator.SwapStepAndStateStructOutput[]
      ] & {
        swapResult: IVPoolWrapper.SwapResultStructOutput;
        cache: SimulateSwap.CacheStructOutput;
        steps: SwapSimulator.SwapStepAndStateStructOutput[];
      }
    ],
    'nonpayable'
  >;

  simulateSwapOnVPoolView: TypedContractMethod<
    [
      vPool: AddressLike,
      liquidityFeePips: BigNumberish,
      protocolFeePips: BigNumberish,
      swapVTokenForVQuote: boolean,
      amountSpecified: BigNumberish,
      sqrtPriceLimitX96: BigNumberish
    ],
    [IVPoolWrapper.SwapResultStructOutput],
    'view'
  >;

  simulateSwapView: TypedContractMethod<
    [
      clearingHouse: AddressLike,
      poolId: BigNumberish,
      amount: BigNumberish,
      sqrtPriceLimitX96: BigNumberish,
      isNotional: boolean
    ],
    [IVPoolWrapper.SwapResultStructOutput],
    'view'
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(nameOrSignature: 'simulateSwap'): TypedContractMethod<
    [
      clearingHouse: AddressLike,
      poolId: BigNumberish,
      amount: BigNumberish,
      sqrtPriceLimitX96: BigNumberish,
      isNotional: boolean
    ],
    [
      [
        IVPoolWrapper.SwapResultStructOutput,
        SimulateSwap.CacheStructOutput,
        SwapSimulator.SwapStepAndStateStructOutput[]
      ] & {
        swapResult: IVPoolWrapper.SwapResultStructOutput;
        cache: SimulateSwap.CacheStructOutput;
        steps: SwapSimulator.SwapStepAndStateStructOutput[];
      }
    ],
    'nonpayable'
  >;
  getFunction(nameOrSignature: 'simulateSwapOnVPool'): TypedContractMethod<
    [
      vPool: AddressLike,
      liquidityFeePips: BigNumberish,
      protocolFeePips: BigNumberish,
      swapVTokenForVQuote: boolean,
      amountSpecified: BigNumberish,
      sqrtPriceLimitX96: BigNumberish
    ],
    [
      [
        IVPoolWrapper.SwapResultStructOutput,
        SimulateSwap.CacheStructOutput,
        SwapSimulator.SwapStepAndStateStructOutput[]
      ] & {
        swapResult: IVPoolWrapper.SwapResultStructOutput;
        cache: SimulateSwap.CacheStructOutput;
        steps: SwapSimulator.SwapStepAndStateStructOutput[];
      }
    ],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'simulateSwapOnVPoolView'
  ): TypedContractMethod<
    [
      vPool: AddressLike,
      liquidityFeePips: BigNumberish,
      protocolFeePips: BigNumberish,
      swapVTokenForVQuote: boolean,
      amountSpecified: BigNumberish,
      sqrtPriceLimitX96: BigNumberish
    ],
    [IVPoolWrapper.SwapResultStructOutput],
    'view'
  >;
  getFunction(
    nameOrSignature: 'simulateSwapView'
  ): TypedContractMethod<
    [
      clearingHouse: AddressLike,
      poolId: BigNumberish,
      amount: BigNumberish,
      sqrtPriceLimitX96: BigNumberish,
      isNotional: boolean
    ],
    [IVPoolWrapper.SwapResultStructOutput],
    'view'
  >;

  filters: {};
}
