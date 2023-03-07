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
} from '../../common';

export declare namespace ISwapRouter {
  export type ExactInputParamsStruct = {
    path: BytesLike;
    recipient: AddressLike;
    deadline: BigNumberish;
    amountIn: BigNumberish;
    amountOutMinimum: BigNumberish;
  };

  export type ExactInputParamsStructOutput = [
    path: string,
    recipient: string,
    deadline: bigint,
    amountIn: bigint,
    amountOutMinimum: bigint
  ] & {
    path: string;
    recipient: string;
    deadline: bigint;
    amountIn: bigint;
    amountOutMinimum: bigint;
  };

  export type ExactInputSingleParamsStruct = {
    tokenIn: AddressLike;
    tokenOut: AddressLike;
    fee: BigNumberish;
    recipient: AddressLike;
    deadline: BigNumberish;
    amountIn: BigNumberish;
    amountOutMinimum: BigNumberish;
    sqrtPriceLimitX96: BigNumberish;
  };

  export type ExactInputSingleParamsStructOutput = [
    tokenIn: string,
    tokenOut: string,
    fee: bigint,
    recipient: string,
    deadline: bigint,
    amountIn: bigint,
    amountOutMinimum: bigint,
    sqrtPriceLimitX96: bigint
  ] & {
    tokenIn: string;
    tokenOut: string;
    fee: bigint;
    recipient: string;
    deadline: bigint;
    amountIn: bigint;
    amountOutMinimum: bigint;
    sqrtPriceLimitX96: bigint;
  };

  export type ExactOutputParamsStruct = {
    path: BytesLike;
    recipient: AddressLike;
    deadline: BigNumberish;
    amountOut: BigNumberish;
    amountInMaximum: BigNumberish;
  };

  export type ExactOutputParamsStructOutput = [
    path: string,
    recipient: string,
    deadline: bigint,
    amountOut: bigint,
    amountInMaximum: bigint
  ] & {
    path: string;
    recipient: string;
    deadline: bigint;
    amountOut: bigint;
    amountInMaximum: bigint;
  };

  export type ExactOutputSingleParamsStruct = {
    tokenIn: AddressLike;
    tokenOut: AddressLike;
    fee: BigNumberish;
    recipient: AddressLike;
    deadline: BigNumberish;
    amountOut: BigNumberish;
    amountInMaximum: BigNumberish;
    sqrtPriceLimitX96: BigNumberish;
  };

  export type ExactOutputSingleParamsStructOutput = [
    tokenIn: string,
    tokenOut: string,
    fee: bigint,
    recipient: string,
    deadline: bigint,
    amountOut: bigint,
    amountInMaximum: bigint,
    sqrtPriceLimitX96: bigint
  ] & {
    tokenIn: string;
    tokenOut: string;
    fee: bigint;
    recipient: string;
    deadline: bigint;
    amountOut: bigint;
    amountInMaximum: bigint;
    sqrtPriceLimitX96: bigint;
  };
}

export interface SwapRouterMockInterface extends Interface {
  getFunction(
    nameOrSignature:
      | 'exactInput'
      | 'exactInputSingle'
      | 'exactOutput'
      | 'exactOutputSingle'
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'exactInput',
    values: [ISwapRouter.ExactInputParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: 'exactInputSingle',
    values: [ISwapRouter.ExactInputSingleParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: 'exactOutput',
    values: [ISwapRouter.ExactOutputParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: 'exactOutputSingle',
    values: [ISwapRouter.ExactOutputSingleParamsStruct]
  ): string;

  decodeFunctionResult(functionFragment: 'exactInput', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'exactInputSingle',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'exactOutput',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'exactOutputSingle',
    data: BytesLike
  ): Result;
}

export interface SwapRouterMock extends BaseContract {
  connect(runner?: ContractRunner | null): BaseContract;
  attach(addressOrName: AddressLike): this;
  deployed(): Promise<this>;

  interface: SwapRouterMockInterface;

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

  exactInput: TypedContractMethod<
    [params: ISwapRouter.ExactInputParamsStruct],
    [bigint],
    'nonpayable'
  >;

  exactInputSingle: TypedContractMethod<
    [params: ISwapRouter.ExactInputSingleParamsStruct],
    [bigint],
    'nonpayable'
  >;

  exactOutput: TypedContractMethod<
    [params: ISwapRouter.ExactOutputParamsStruct],
    [bigint],
    'nonpayable'
  >;

  exactOutputSingle: TypedContractMethod<
    [params: ISwapRouter.ExactOutputSingleParamsStruct],
    [bigint],
    'nonpayable'
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: 'exactInput'
  ): TypedContractMethod<
    [params: ISwapRouter.ExactInputParamsStruct],
    [bigint],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'exactInputSingle'
  ): TypedContractMethod<
    [params: ISwapRouter.ExactInputSingleParamsStruct],
    [bigint],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'exactOutput'
  ): TypedContractMethod<
    [params: ISwapRouter.ExactOutputParamsStruct],
    [bigint],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'exactOutputSingle'
  ): TypedContractMethod<
    [params: ISwapRouter.ExactOutputSingleParamsStruct],
    [bigint],
    'nonpayable'
  >;

  filters: {};
}
