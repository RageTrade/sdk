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

export interface Uint32L8ArrayTestInterface extends utils.Interface {
  functions: {
    'exclude(uint32)': FunctionFragment;
    'exists(uint32)': FunctionFragment;
    'getter(uint8)': FunctionFragment;
    'getterAll()': FunctionFragment;
    'include(uint32)': FunctionFragment;
    'length()': FunctionFragment;
    'numberOfNonZeroElements()': FunctionFragment;
    'setter(uint8,uint32)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'exclude'
      | 'exists'
      | 'getter'
      | 'getterAll'
      | 'include'
      | 'length'
      | 'numberOfNonZeroElements'
      | 'setter'
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'exclude',
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'exists',
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'getter',
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: 'getterAll', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'include',
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: 'length', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'numberOfNonZeroElements',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'setter',
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: 'exclude', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'exists', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getter', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getterAll', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'include', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'length', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'numberOfNonZeroElements',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'setter', data: BytesLike): Result;

  events: {};
}

export interface Uint32L8ArrayTest extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: Uint32L8ArrayTestInterface;

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
    exclude(
      element: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    exists(
      element: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    getter(index: BigNumberish, overrides?: CallOverrides): Promise<[number]>;

    getterAll(overrides?: CallOverrides): Promise<[number[]]>;

    include(
      element: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    length(overrides?: CallOverrides): Promise<[number] & { len: number }>;

    numberOfNonZeroElements(overrides?: CallOverrides): Promise<[BigNumber]>;

    setter(
      index: BigNumberish,
      element: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  exclude(
    element: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  exists(element: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

  getter(index: BigNumberish, overrides?: CallOverrides): Promise<number>;

  getterAll(overrides?: CallOverrides): Promise<number[]>;

  include(
    element: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  length(overrides?: CallOverrides): Promise<number>;

  numberOfNonZeroElements(overrides?: CallOverrides): Promise<BigNumber>;

  setter(
    index: BigNumberish,
    element: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    exclude(element: BigNumberish, overrides?: CallOverrides): Promise<void>;

    exists(element: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    getter(index: BigNumberish, overrides?: CallOverrides): Promise<number>;

    getterAll(overrides?: CallOverrides): Promise<number[]>;

    include(element: BigNumberish, overrides?: CallOverrides): Promise<void>;

    length(overrides?: CallOverrides): Promise<number>;

    numberOfNonZeroElements(overrides?: CallOverrides): Promise<BigNumber>;

    setter(
      index: BigNumberish,
      element: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    exclude(
      element: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    exists(
      element: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getter(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    getterAll(overrides?: CallOverrides): Promise<BigNumber>;

    include(
      element: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    length(overrides?: CallOverrides): Promise<BigNumber>;

    numberOfNonZeroElements(overrides?: CallOverrides): Promise<BigNumber>;

    setter(
      index: BigNumberish,
      element: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    exclude(
      element: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    exists(
      element: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getter(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getterAll(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    include(
      element: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    length(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    numberOfNonZeroElements(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setter(
      index: BigNumberish,
      element: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
