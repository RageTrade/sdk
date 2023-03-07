/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
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

export interface IExtsloadInterface extends Interface {
  getFunction(
    nameOrSignature: 'extsload(bytes32)' | 'extsload(bytes32[])'
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'extsload(bytes32)',
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: 'extsload(bytes32[])',
    values: [BytesLike[]]
  ): string;

  decodeFunctionResult(
    functionFragment: 'extsload(bytes32)',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'extsload(bytes32[])',
    data: BytesLike
  ): Result;
}

export interface IExtsload extends BaseContract {
  connect(runner?: ContractRunner | null): BaseContract;
  attach(addressOrName: AddressLike): this;
  deployed(): Promise<this>;

  interface: IExtsloadInterface;

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

  'extsload(bytes32)': TypedContractMethod<[slot: BytesLike], [string], 'view'>;

  'extsload(bytes32[])': TypedContractMethod<
    [slots: BytesLike[]],
    [string[]],
    'view'
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: 'extsload(bytes32)'
  ): TypedContractMethod<[slot: BytesLike], [string], 'view'>;
  getFunction(
    nameOrSignature: 'extsload(bytes32[])'
  ): TypedContractMethod<[slots: BytesLike[]], [string[]], 'view'>;

  filters: {};
}
