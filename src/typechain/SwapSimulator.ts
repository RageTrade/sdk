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
} from './common';

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
}

export declare namespace SimulateSwap {
  export type CacheStruct = {
    sqrtPriceX96Start: BigNumberish;
    tickStart: BigNumberish;
    feeProtocol: BigNumberish;
    liquidityStart: BigNumberish;
    tickSpacing: BigNumberish;
    fee: BigNumberish;
    realPriceX128: BigNumberish;
    virtualPriceX128: BigNumberish;
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
    realPriceX128: BigNumber;
    virtualPriceX128: BigNumber;
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
}

export declare namespace SwapSimulator {
  export type SwapStepAndStateStruct = {
    step: SimulateSwap.StepStruct;
    state: SimulateSwap.StateStruct;
  };

  export type SwapStepAndStateStructOutput = [
    SimulateSwap.StepStructOutput,
    SimulateSwap.StateStructOutput
  ] & {
    step: SimulateSwap.StepStructOutput;
    state: SimulateSwap.StateStructOutput;
  };
}

export interface SwapSimulatorInterface extends utils.Interface {
  functions: {
    'simulateSwap(address,uint32,int256,uint160,bool)': FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: 'simulateSwap'): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'simulateSwap',
    values: [string, BigNumberish, BigNumberish, BigNumberish, boolean]
  ): string;

  decodeFunctionResult(
    functionFragment: 'simulateSwap',
    data: BytesLike
  ): Result;

  events: {};
}

export interface SwapSimulator extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SwapSimulatorInterface;

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
    simulateSwap(
      clearingHouse: string,
      poolId: BigNumberish,
      amount: BigNumberish,
      sqrtPriceLimitX96: BigNumberish,
      isNotional: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  simulateSwap(
    clearingHouse: string,
    poolId: BigNumberish,
    amount: BigNumberish,
    sqrtPriceLimitX96: BigNumberish,
    isNotional: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    simulateSwap(
      clearingHouse: string,
      poolId: BigNumberish,
      amount: BigNumberish,
      sqrtPriceLimitX96: BigNumberish,
      isNotional: boolean,
      overrides?: CallOverrides
    ): Promise<
      [
        IVPoolWrapper.SwapResultStructOutput,
        SimulateSwap.CacheStructOutput,
        SwapSimulator.SwapStepAndStateStructOutput[]
      ] & {
        swapResult: IVPoolWrapper.SwapResultStructOutput;
        cache: SimulateSwap.CacheStructOutput;
        steps: SwapSimulator.SwapStepAndStateStructOutput[];
      }
    >;
  };

  filters: {};

  estimateGas: {
    simulateSwap(
      clearingHouse: string,
      poolId: BigNumberish,
      amount: BigNumberish,
      sqrtPriceLimitX96: BigNumberish,
      isNotional: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    simulateSwap(
      clearingHouse: string,
      poolId: BigNumberish,
      amount: BigNumberish,
      sqrtPriceLimitX96: BigNumberish,
      isNotional: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
