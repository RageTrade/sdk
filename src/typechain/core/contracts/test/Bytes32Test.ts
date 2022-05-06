/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
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

export interface Bytes32TestInterface extends utils.Interface {
  functions: {
    'extract(bytes32,uint256)': FunctionFragment;
    'keccak256One(bytes32)': FunctionFragment;
    'keccak256Two(bytes32,bytes32)': FunctionFragment;
    'offset(bytes32,uint256)': FunctionFragment;
    'slice(bytes32,uint256,uint256)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'extract'
      | 'keccak256One'
      | 'keccak256Two'
      | 'offset'
      | 'slice'
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'extract',
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'keccak256One',
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: 'keccak256Two',
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: 'offset',
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'slice',
    values: [BytesLike, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: 'extract', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'keccak256One',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'keccak256Two',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'offset', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'slice', data: BytesLike): Result;

  events: {};
}

export interface Bytes32Test extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: Bytes32TestInterface;

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
    extract(
      input: BytesLike,
      bits: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string] & { value: BigNumber; inputUpdated: string }
    >;

    keccak256One(
      input: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string] & { result: string }>;

    keccak256Two(
      input1: BytesLike,
      input2: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string] & { result: string }>;

    offset(
      key: BytesLike,
      offset_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    slice(
      input: BytesLike,
      start: BigNumberish,
      end: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { val: BigNumber }>;
  };

  extract(
    input: BytesLike,
    bits: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, string] & { value: BigNumber; inputUpdated: string }>;

  keccak256One(input: BytesLike, overrides?: CallOverrides): Promise<string>;

  keccak256Two(
    input1: BytesLike,
    input2: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  offset(
    key: BytesLike,
    offset_: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  slice(
    input: BytesLike,
    start: BigNumberish,
    end: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    extract(
      input: BytesLike,
      bits: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string] & { value: BigNumber; inputUpdated: string }
    >;

    keccak256One(input: BytesLike, overrides?: CallOverrides): Promise<string>;

    keccak256Two(
      input1: BytesLike,
      input2: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    offset(
      key: BytesLike,
      offset_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    slice(
      input: BytesLike,
      start: BigNumberish,
      end: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    extract(
      input: BytesLike,
      bits: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    keccak256One(
      input: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    keccak256Two(
      input1: BytesLike,
      input2: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    offset(
      key: BytesLike,
      offset_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    slice(
      input: BytesLike,
      start: BigNumberish,
      end: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    extract(
      input: BytesLike,
      bits: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    keccak256One(
      input: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    keccak256Two(
      input1: BytesLike,
      input2: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    offset(
      key: BytesLike,
      offset_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    slice(
      input: BytesLike,
      start: BigNumberish,
      end: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
