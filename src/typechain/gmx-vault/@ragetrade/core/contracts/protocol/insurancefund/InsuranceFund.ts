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

export interface InsuranceFundInterface extends Interface {
  getFunction(
    nameOrSignature:
      | 'allowance'
      | 'approve'
      | 'balanceOf'
      | 'claim'
      | 'clearingHouse'
      | 'decimals'
      | 'decreaseAllowance'
      | 'deposit'
      | 'increaseAllowance'
      | 'initialize'
      | 'name'
      | 'settlementToken'
      | 'symbol'
      | 'totalSupply'
      | 'transfer'
      | 'transferFrom'
      | 'withdraw'
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: 'Approval' | 'Initialized' | 'Transfer'
  ): EventFragment;

  encodeFunctionData(
    functionFragment: 'allowance',
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: 'approve',
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'balanceOf',
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: 'claim', values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: 'clearingHouse',
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: 'decimals', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'decreaseAllowance',
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'deposit',
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'increaseAllowance',
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'initialize',
    values: [AddressLike, AddressLike, string, string]
  ): string;
  encodeFunctionData(functionFragment: 'name', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'settlementToken',
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: 'symbol', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'totalSupply',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'transfer',
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'transferFrom',
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'withdraw',
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: 'allowance', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'approve', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'balanceOf', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'claim', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'clearingHouse',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'decimals', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'decreaseAllowance',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'deposit', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'increaseAllowance',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'name', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'settlementToken',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'symbol', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'totalSupply',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'transfer', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'transferFrom',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'withdraw', data: BytesLike): Result;
}

export namespace ApprovalEvent {
  export type InputTuple = [
    owner: AddressLike,
    spender: AddressLike,
    value: BigNumberish
  ];
  export type OutputTuple = [owner: string, spender: string, value: bigint];
  export interface OutputObject {
    owner: string;
    spender: string;
    value: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace InitializedEvent {
  export type InputTuple = [version: BigNumberish];
  export type OutputTuple = [version: bigint];
  export interface OutputObject {
    version: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TransferEvent {
  export type InputTuple = [
    from: AddressLike,
    to: AddressLike,
    value: BigNumberish
  ];
  export type OutputTuple = [from: string, to: string, value: bigint];
  export interface OutputObject {
    from: string;
    to: string;
    value: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface InsuranceFund extends BaseContract {
  connect(runner?: ContractRunner | null): BaseContract;
  attach(addressOrName: AddressLike): this;
  deployed(): Promise<this>;

  interface: InsuranceFundInterface;

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

  allowance: TypedContractMethod<
    [owner: AddressLike, spender: AddressLike],
    [bigint],
    'view'
  >;

  approve: TypedContractMethod<
    [spender: AddressLike, amount: BigNumberish],
    [boolean],
    'nonpayable'
  >;

  balanceOf: TypedContractMethod<[account: AddressLike], [bigint], 'view'>;

  claim: TypedContractMethod<[amount: BigNumberish], [void], 'nonpayable'>;

  clearingHouse: TypedContractMethod<[], [string], 'view'>;

  decimals: TypedContractMethod<[], [bigint], 'view'>;

  decreaseAllowance: TypedContractMethod<
    [spender: AddressLike, subtractedValue: BigNumberish],
    [boolean],
    'nonpayable'
  >;

  deposit: TypedContractMethod<[amount: BigNumberish], [void], 'nonpayable'>;

  increaseAllowance: TypedContractMethod<
    [spender: AddressLike, addedValue: BigNumberish],
    [boolean],
    'nonpayable'
  >;

  initialize: TypedContractMethod<
    [
      _settlementToken: AddressLike,
      _clearingHouse: AddressLike,
      name: string,
      symbol: string
    ],
    [void],
    'nonpayable'
  >;

  name: TypedContractMethod<[], [string], 'view'>;

  settlementToken: TypedContractMethod<[], [string], 'view'>;

  symbol: TypedContractMethod<[], [string], 'view'>;

  totalSupply: TypedContractMethod<[], [bigint], 'view'>;

  transfer: TypedContractMethod<
    [to: AddressLike, amount: BigNumberish],
    [boolean],
    'nonpayable'
  >;

  transferFrom: TypedContractMethod<
    [from: AddressLike, to: AddressLike, amount: BigNumberish],
    [boolean],
    'nonpayable'
  >;

  withdraw: TypedContractMethod<[shares: BigNumberish], [void], 'nonpayable'>;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: 'allowance'
  ): TypedContractMethod<
    [owner: AddressLike, spender: AddressLike],
    [bigint],
    'view'
  >;
  getFunction(
    nameOrSignature: 'approve'
  ): TypedContractMethod<
    [spender: AddressLike, amount: BigNumberish],
    [boolean],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'balanceOf'
  ): TypedContractMethod<[account: AddressLike], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'claim'
  ): TypedContractMethod<[amount: BigNumberish], [void], 'nonpayable'>;
  getFunction(
    nameOrSignature: 'clearingHouse'
  ): TypedContractMethod<[], [string], 'view'>;
  getFunction(
    nameOrSignature: 'decimals'
  ): TypedContractMethod<[], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'decreaseAllowance'
  ): TypedContractMethod<
    [spender: AddressLike, subtractedValue: BigNumberish],
    [boolean],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'deposit'
  ): TypedContractMethod<[amount: BigNumberish], [void], 'nonpayable'>;
  getFunction(
    nameOrSignature: 'increaseAllowance'
  ): TypedContractMethod<
    [spender: AddressLike, addedValue: BigNumberish],
    [boolean],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'initialize'
  ): TypedContractMethod<
    [
      _settlementToken: AddressLike,
      _clearingHouse: AddressLike,
      name: string,
      symbol: string
    ],
    [void],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'name'
  ): TypedContractMethod<[], [string], 'view'>;
  getFunction(
    nameOrSignature: 'settlementToken'
  ): TypedContractMethod<[], [string], 'view'>;
  getFunction(
    nameOrSignature: 'symbol'
  ): TypedContractMethod<[], [string], 'view'>;
  getFunction(
    nameOrSignature: 'totalSupply'
  ): TypedContractMethod<[], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'transfer'
  ): TypedContractMethod<
    [to: AddressLike, amount: BigNumberish],
    [boolean],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'transferFrom'
  ): TypedContractMethod<
    [from: AddressLike, to: AddressLike, amount: BigNumberish],
    [boolean],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'withdraw'
  ): TypedContractMethod<[shares: BigNumberish], [void], 'nonpayable'>;

  getEvent(
    key: 'Approval'
  ): TypedContractEvent<
    ApprovalEvent.InputTuple,
    ApprovalEvent.OutputTuple,
    ApprovalEvent.OutputObject
  >;
  getEvent(
    key: 'Initialized'
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;
  getEvent(
    key: 'Transfer'
  ): TypedContractEvent<
    TransferEvent.InputTuple,
    TransferEvent.OutputTuple,
    TransferEvent.OutputObject
  >;

  filters: {
    'Approval(address,address,uint256)': TypedContractEvent<
      ApprovalEvent.InputTuple,
      ApprovalEvent.OutputTuple,
      ApprovalEvent.OutputObject
    >;
    Approval: TypedContractEvent<
      ApprovalEvent.InputTuple,
      ApprovalEvent.OutputTuple,
      ApprovalEvent.OutputObject
    >;

    'Initialized(uint8)': TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;
    Initialized: TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;

    'Transfer(address,address,uint256)': TypedContractEvent<
      TransferEvent.InputTuple,
      TransferEvent.OutputTuple,
      TransferEvent.OutputObject
    >;
    Transfer: TypedContractEvent<
      TransferEvent.InputTuple,
      TransferEvent.OutputTuple,
      TransferEvent.OutputObject
    >;
  };
}
