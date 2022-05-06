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
import type { FunctionFragment, Result } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from '../../common';

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
    BigNumber,
    number,
    number,
    BigNumber,
    number,
    number,
    BigNumber,
    BigNumber
  ] & {
    sqrtPriceX96Start: BigNumber;
    tickStart: number;
    feeProtocol: number;
    liquidityStart: BigNumber;
    tickSpacing: number;
    fee: number;
    value1: BigNumber;
    value2: BigNumber;
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
    BigNumber,
    BigNumber,
    BigNumber,
    number,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    amountSpecifiedRemaining: BigNumber;
    amountCalculated: BigNumber;
    sqrtPriceX96: BigNumber;
    tick: number;
    feeGrowthGlobalIncreaseX128: BigNumber;
    protocolFee: BigNumber;
    liquidity: BigNumber;
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
    BigNumber,
    number,
    boolean,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    sqrtPriceStartX96: BigNumber;
    tickNext: number;
    initialized: boolean;
    sqrtPriceNextX96: BigNumber;
    amountIn: BigNumber;
    amountOut: BigNumber;
    feeAmount: BigNumber;
  };
}

export declare namespace SimulateSwapTest {
  export type SwapStepStruct = {
    state: SimulateSwap.StateStruct;
    step: SimulateSwap.StepStruct;
  };

  export type SwapStepStructOutput = [
    SimulateSwap.StateStructOutput,
    SimulateSwap.StepStructOutput
  ] & {
    state: SimulateSwap.StateStructOutput;
    step: SimulateSwap.StepStructOutput;
  };
}

export interface SimulateSwapTestInterface extends utils.Interface {
  functions: {
    'clearSwapSteps()': FunctionFragment;
    'extendedFeeGrowthOutsideX128()': FunctionFragment;
    'fpGlobal()': FunctionFragment;
    'simulateSwap1(bool,int256,uint160)': FunctionFragment;
    'simulateSwap2(bool,int256,uint160)': FunctionFragment;
    'simulateSwap3(bool,int256,uint24)': FunctionFragment;
    'sqrtPrice()': FunctionFragment;
    'swap(bool,int256,uint160)': FunctionFragment;
    'ticksExtended(int24)': FunctionFragment;
    'uniswapV3SwapCallback(int256,int256,bytes)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'clearSwapSteps'
      | 'extendedFeeGrowthOutsideX128'
      | 'fpGlobal'
      | 'simulateSwap1'
      | 'simulateSwap2'
      | 'simulateSwap3'
      | 'sqrtPrice'
      | 'swap'
      | 'ticksExtended'
      | 'uniswapV3SwapCallback'
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'clearSwapSteps',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'extendedFeeGrowthOutsideX128',
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: 'fpGlobal', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'simulateSwap1',
    values: [boolean, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'simulateSwap2',
    values: [boolean, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'simulateSwap3',
    values: [boolean, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: 'sqrtPrice', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'swap',
    values: [boolean, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'ticksExtended',
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'uniswapV3SwapCallback',
    values: [BigNumberish, BigNumberish, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: 'clearSwapSteps',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'extendedFeeGrowthOutsideX128',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'fpGlobal', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'simulateSwap1',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'simulateSwap2',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'simulateSwap3',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'sqrtPrice', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'swap', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'ticksExtended',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'uniswapV3SwapCallback',
    data: BytesLike
  ): Result;

  events: {};
}

export interface SimulateSwapTest extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SimulateSwapTestInterface;

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
    clearSwapSteps(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    extendedFeeGrowthOutsideX128(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    fpGlobal(overrides?: CallOverrides): Promise<
      [BigNumber, BigNumber, BigNumber, number] & {
        sumAX128: BigNumber;
        sumBX128: BigNumber;
        sumFpX128: BigNumber;
        timestampLast: number;
      }
    >;

    simulateSwap1(
      zeroForOne: boolean,
      amountSpecified: BigNumberish,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    simulateSwap2(
      zeroForOne: boolean,
      amountSpecified: BigNumberish,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    simulateSwap3(
      swapVTokenForVQuote: boolean,
      amountSpecified: BigNumberish,
      fee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    sqrtPrice(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { sq: BigNumber }>;

    swap(
      zeroForOne: boolean,
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

    uniswapV3SwapCallback(
      amount0Delta: BigNumberish,
      amount1Delta: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  clearSwapSteps(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  extendedFeeGrowthOutsideX128(overrides?: CallOverrides): Promise<BigNumber>;

  fpGlobal(overrides?: CallOverrides): Promise<
    [BigNumber, BigNumber, BigNumber, number] & {
      sumAX128: BigNumber;
      sumBX128: BigNumber;
      sumFpX128: BigNumber;
      timestampLast: number;
    }
  >;

  simulateSwap1(
    zeroForOne: boolean,
    amountSpecified: BigNumberish,
    sqrtPriceLimitX96: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  simulateSwap2(
    zeroForOne: boolean,
    amountSpecified: BigNumberish,
    sqrtPriceLimitX96: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  simulateSwap3(
    swapVTokenForVQuote: boolean,
    amountSpecified: BigNumberish,
    fee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  sqrtPrice(overrides?: CallOverrides): Promise<BigNumber>;

  swap(
    zeroForOne: boolean,
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

  uniswapV3SwapCallback(
    amount0Delta: BigNumberish,
    amount1Delta: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    clearSwapSteps(overrides?: CallOverrides): Promise<void>;

    extendedFeeGrowthOutsideX128(overrides?: CallOverrides): Promise<BigNumber>;

    fpGlobal(overrides?: CallOverrides): Promise<
      [BigNumber, BigNumber, BigNumber, number] & {
        sumAX128: BigNumber;
        sumBX128: BigNumber;
        sumFpX128: BigNumber;
        timestampLast: number;
      }
    >;

    simulateSwap1(
      zeroForOne: boolean,
      amountSpecified: BigNumberish,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amount0: BigNumber; amount1: BigNumber }
    >;

    simulateSwap2(
      zeroForOne: boolean,
      amountSpecified: BigNumberish,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        SimulateSwap.CacheStructOutput,
        SimulateSwapTest.SwapStepStructOutput[]
      ] & {
        amount0: BigNumber;
        amount1: BigNumber;
        cache: SimulateSwap.CacheStructOutput;
        steps: SimulateSwapTest.SwapStepStructOutput[];
      }
    >;

    simulateSwap3(
      swapVTokenForVQuote: boolean,
      amountSpecified: BigNumberish,
      fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { vTokenIn: BigNumber; vQuoteIn: BigNumber }
    >;

    sqrtPrice(overrides?: CallOverrides): Promise<BigNumber>;

    swap(
      zeroForOne: boolean,
      amountSpecified: BigNumberish,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amount0: BigNumber; amount1: BigNumber }
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

    uniswapV3SwapCallback(
      amount0Delta: BigNumberish,
      amount1Delta: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    clearSwapSteps(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    extendedFeeGrowthOutsideX128(overrides?: CallOverrides): Promise<BigNumber>;

    fpGlobal(overrides?: CallOverrides): Promise<BigNumber>;

    simulateSwap1(
      zeroForOne: boolean,
      amountSpecified: BigNumberish,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    simulateSwap2(
      zeroForOne: boolean,
      amountSpecified: BigNumberish,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    simulateSwap3(
      swapVTokenForVQuote: boolean,
      amountSpecified: BigNumberish,
      fee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    sqrtPrice(overrides?: CallOverrides): Promise<BigNumber>;

    swap(
      zeroForOne: boolean,
      amountSpecified: BigNumberish,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    ticksExtended(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    uniswapV3SwapCallback(
      amount0Delta: BigNumberish,
      amount1Delta: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    clearSwapSteps(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    extendedFeeGrowthOutsideX128(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    fpGlobal(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    simulateSwap1(
      zeroForOne: boolean,
      amountSpecified: BigNumberish,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    simulateSwap2(
      zeroForOne: boolean,
      amountSpecified: BigNumberish,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    simulateSwap3(
      swapVTokenForVQuote: boolean,
      amountSpecified: BigNumberish,
      fee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    sqrtPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    swap(
      zeroForOne: boolean,
      amountSpecified: BigNumberish,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    ticksExtended(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    uniswapV3SwapCallback(
      amount0Delta: BigNumberish,
      amount1Delta: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
