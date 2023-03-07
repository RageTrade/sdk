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
} from '../../../../../common';

export interface IEACAggregatorProxyInterface extends Interface {
  getFunction(
    nameOrSignature:
      | 'decimals'
      | 'getAnswer'
      | 'getTimestamp'
      | 'latestAnswer'
      | 'latestRound'
      | 'latestTimestamp'
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: 'AnswerUpdated' | 'NewRound'): EventFragment;

  encodeFunctionData(functionFragment: 'decimals', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'getAnswer',
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'getTimestamp',
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'latestAnswer',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'latestRound',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'latestTimestamp',
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: 'decimals', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getAnswer', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'getTimestamp',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'latestAnswer',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'latestRound',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'latestTimestamp',
    data: BytesLike
  ): Result;
}

export namespace AnswerUpdatedEvent {
  export type InputTuple = [
    current: BigNumberish,
    roundId: BigNumberish,
    timestamp: BigNumberish
  ];
  export type OutputTuple = [
    current: bigint,
    roundId: bigint,
    timestamp: bigint
  ];
  export interface OutputObject {
    current: bigint;
    roundId: bigint;
    timestamp: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace NewRoundEvent {
  export type InputTuple = [roundId: BigNumberish, startedBy: AddressLike];
  export type OutputTuple = [roundId: bigint, startedBy: string];
  export interface OutputObject {
    roundId: bigint;
    startedBy: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IEACAggregatorProxy extends BaseContract {
  connect(runner?: ContractRunner | null): BaseContract;
  attach(addressOrName: AddressLike): this;
  deployed(): Promise<this>;

  interface: IEACAggregatorProxyInterface;

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

  decimals: TypedContractMethod<[], [bigint], 'view'>;

  getAnswer: TypedContractMethod<[roundId: BigNumberish], [bigint], 'view'>;

  getTimestamp: TypedContractMethod<[roundId: BigNumberish], [bigint], 'view'>;

  latestAnswer: TypedContractMethod<[], [bigint], 'view'>;

  latestRound: TypedContractMethod<[], [bigint], 'view'>;

  latestTimestamp: TypedContractMethod<[], [bigint], 'view'>;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: 'decimals'
  ): TypedContractMethod<[], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'getAnswer'
  ): TypedContractMethod<[roundId: BigNumberish], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'getTimestamp'
  ): TypedContractMethod<[roundId: BigNumberish], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'latestAnswer'
  ): TypedContractMethod<[], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'latestRound'
  ): TypedContractMethod<[], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'latestTimestamp'
  ): TypedContractMethod<[], [bigint], 'view'>;

  getEvent(
    key: 'AnswerUpdated'
  ): TypedContractEvent<
    AnswerUpdatedEvent.InputTuple,
    AnswerUpdatedEvent.OutputTuple,
    AnswerUpdatedEvent.OutputObject
  >;
  getEvent(
    key: 'NewRound'
  ): TypedContractEvent<
    NewRoundEvent.InputTuple,
    NewRoundEvent.OutputTuple,
    NewRoundEvent.OutputObject
  >;

  filters: {
    'AnswerUpdated(int256,uint256,uint256)': TypedContractEvent<
      AnswerUpdatedEvent.InputTuple,
      AnswerUpdatedEvent.OutputTuple,
      AnswerUpdatedEvent.OutputObject
    >;
    AnswerUpdated: TypedContractEvent<
      AnswerUpdatedEvent.InputTuple,
      AnswerUpdatedEvent.OutputTuple,
      AnswerUpdatedEvent.OutputObject
    >;

    'NewRound(uint256,address)': TypedContractEvent<
      NewRoundEvent.InputTuple,
      NewRoundEvent.OutputTuple,
      NewRoundEvent.OutputObject
    >;
    NewRound: TypedContractEvent<
      NewRoundEvent.InputTuple,
      NewRoundEvent.OutputTuple,
      NewRoundEvent.OutputObject
    >;
  };
}
