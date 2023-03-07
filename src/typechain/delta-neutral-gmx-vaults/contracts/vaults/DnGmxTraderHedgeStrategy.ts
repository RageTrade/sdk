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
} from '../../common';

export interface DnGmxTraderHedgeStrategyInterface extends Interface {
  getFunction(
    nameOrSignature:
      | 'btcTraderOIHedge'
      | 'ethTraderOIHedge'
      | 'glp'
      | 'glpManager'
      | 'gmxVault'
      | 'initialize'
      | 'juniorVault'
      | 'keeper'
      | 'overrideTraderOIHedges'
      | 'owner'
      | 'renounceOwnership'
      | 'setKeeper'
      | 'setTraderOIHedgeBps'
      | 'setTraderOIHedges'
      | 'traderOIHedgeBps'
      | 'transferOwnership'
      | 'wbtc'
      | 'weth'
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | 'Initialized'
      | 'KeeperUpdated'
      | 'OwnershipTransferred'
      | 'TraderOIHedgeBpsUpdated'
      | 'TraderOIHedgesUpdated'
  ): EventFragment;

  encodeFunctionData(
    functionFragment: 'btcTraderOIHedge',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'ethTraderOIHedge',
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: 'glp', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'glpManager',
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: 'gmxVault', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'initialize',
    values: [
      AddressLike,
      AddressLike,
      AddressLike,
      AddressLike,
      AddressLike,
      AddressLike,
      AddressLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: 'juniorVault',
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: 'keeper', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'overrideTraderOIHedges',
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'renounceOwnership',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'setKeeper',
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: 'setTraderOIHedgeBps',
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'setTraderOIHedges',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'traderOIHedgeBps',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'transferOwnership',
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: 'wbtc', values?: undefined): string;
  encodeFunctionData(functionFragment: 'weth', values?: undefined): string;

  decodeFunctionResult(
    functionFragment: 'btcTraderOIHedge',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'ethTraderOIHedge',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'glp', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'glpManager', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'gmxVault', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'juniorVault',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'keeper', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'overrideTraderOIHedges',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'renounceOwnership',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'setKeeper', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'setTraderOIHedgeBps',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'setTraderOIHedges',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'traderOIHedgeBps',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'transferOwnership',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'wbtc', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'weth', data: BytesLike): Result;
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

export namespace KeeperUpdatedEvent {
  export type InputTuple = [oldKeeper: AddressLike, newKeeper: AddressLike];
  export type OutputTuple = [oldKeeper: string, newKeeper: string];
  export interface OutputObject {
    oldKeeper: string;
    newKeeper: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TraderOIHedgeBpsUpdatedEvent {
  export type InputTuple = [traderOIHedgeBps: BigNumberish];
  export type OutputTuple = [traderOIHedgeBps: bigint];
  export interface OutputObject {
    traderOIHedgeBps: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TraderOIHedgesUpdatedEvent {
  export type InputTuple = [
    btcTraderOIHedge: BigNumberish,
    ethTraderOIHedge: BigNumberish
  ];
  export type OutputTuple = [
    btcTraderOIHedge: bigint,
    ethTraderOIHedge: bigint
  ];
  export interface OutputObject {
    btcTraderOIHedge: bigint;
    ethTraderOIHedge: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface DnGmxTraderHedgeStrategy extends BaseContract {
  connect(runner?: ContractRunner | null): BaseContract;
  attach(addressOrName: AddressLike): this;
  deployed(): Promise<this>;

  interface: DnGmxTraderHedgeStrategyInterface;

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

  btcTraderOIHedge: TypedContractMethod<[], [bigint], 'view'>;

  ethTraderOIHedge: TypedContractMethod<[], [bigint], 'view'>;

  glp: TypedContractMethod<[], [string], 'view'>;

  glpManager: TypedContractMethod<[], [string], 'view'>;

  gmxVault: TypedContractMethod<[], [string], 'view'>;

  initialize: TypedContractMethod<
    [
      _keeper: AddressLike,
      _gmxVault: AddressLike,
      _glpManager: AddressLike,
      _juniorVault: AddressLike,
      _glp: AddressLike,
      _weth: AddressLike,
      _wbtc: AddressLike
    ],
    [void],
    'nonpayable'
  >;

  juniorVault: TypedContractMethod<[], [string], 'view'>;

  keeper: TypedContractMethod<[], [string], 'view'>;

  overrideTraderOIHedges: TypedContractMethod<
    [_btcTraderOIHedge: BigNumberish, _ethTraderOIHedge: BigNumberish],
    [void],
    'nonpayable'
  >;

  owner: TypedContractMethod<[], [string], 'view'>;

  renounceOwnership: TypedContractMethod<[], [void], 'nonpayable'>;

  setKeeper: TypedContractMethod<[_keeper: AddressLike], [void], 'nonpayable'>;

  setTraderOIHedgeBps: TypedContractMethod<
    [_traderOIHedgeBps: BigNumberish],
    [void],
    'nonpayable'
  >;

  setTraderOIHedges: TypedContractMethod<[], [void], 'nonpayable'>;

  traderOIHedgeBps: TypedContractMethod<[], [bigint], 'view'>;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    'nonpayable'
  >;

  wbtc: TypedContractMethod<[], [string], 'view'>;

  weth: TypedContractMethod<[], [string], 'view'>;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: 'btcTraderOIHedge'
  ): TypedContractMethod<[], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'ethTraderOIHedge'
  ): TypedContractMethod<[], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'glp'
  ): TypedContractMethod<[], [string], 'view'>;
  getFunction(
    nameOrSignature: 'glpManager'
  ): TypedContractMethod<[], [string], 'view'>;
  getFunction(
    nameOrSignature: 'gmxVault'
  ): TypedContractMethod<[], [string], 'view'>;
  getFunction(
    nameOrSignature: 'initialize'
  ): TypedContractMethod<
    [
      _keeper: AddressLike,
      _gmxVault: AddressLike,
      _glpManager: AddressLike,
      _juniorVault: AddressLike,
      _glp: AddressLike,
      _weth: AddressLike,
      _wbtc: AddressLike
    ],
    [void],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'juniorVault'
  ): TypedContractMethod<[], [string], 'view'>;
  getFunction(
    nameOrSignature: 'keeper'
  ): TypedContractMethod<[], [string], 'view'>;
  getFunction(
    nameOrSignature: 'overrideTraderOIHedges'
  ): TypedContractMethod<
    [_btcTraderOIHedge: BigNumberish, _ethTraderOIHedge: BigNumberish],
    [void],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'owner'
  ): TypedContractMethod<[], [string], 'view'>;
  getFunction(
    nameOrSignature: 'renounceOwnership'
  ): TypedContractMethod<[], [void], 'nonpayable'>;
  getFunction(
    nameOrSignature: 'setKeeper'
  ): TypedContractMethod<[_keeper: AddressLike], [void], 'nonpayable'>;
  getFunction(
    nameOrSignature: 'setTraderOIHedgeBps'
  ): TypedContractMethod<
    [_traderOIHedgeBps: BigNumberish],
    [void],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'setTraderOIHedges'
  ): TypedContractMethod<[], [void], 'nonpayable'>;
  getFunction(
    nameOrSignature: 'traderOIHedgeBps'
  ): TypedContractMethod<[], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'transferOwnership'
  ): TypedContractMethod<[newOwner: AddressLike], [void], 'nonpayable'>;
  getFunction(
    nameOrSignature: 'wbtc'
  ): TypedContractMethod<[], [string], 'view'>;
  getFunction(
    nameOrSignature: 'weth'
  ): TypedContractMethod<[], [string], 'view'>;

  getEvent(
    key: 'Initialized'
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;
  getEvent(
    key: 'KeeperUpdated'
  ): TypedContractEvent<
    KeeperUpdatedEvent.InputTuple,
    KeeperUpdatedEvent.OutputTuple,
    KeeperUpdatedEvent.OutputObject
  >;
  getEvent(
    key: 'OwnershipTransferred'
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: 'TraderOIHedgeBpsUpdated'
  ): TypedContractEvent<
    TraderOIHedgeBpsUpdatedEvent.InputTuple,
    TraderOIHedgeBpsUpdatedEvent.OutputTuple,
    TraderOIHedgeBpsUpdatedEvent.OutputObject
  >;
  getEvent(
    key: 'TraderOIHedgesUpdated'
  ): TypedContractEvent<
    TraderOIHedgesUpdatedEvent.InputTuple,
    TraderOIHedgesUpdatedEvent.OutputTuple,
    TraderOIHedgesUpdatedEvent.OutputObject
  >;

  filters: {
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

    'KeeperUpdated(address,address)': TypedContractEvent<
      KeeperUpdatedEvent.InputTuple,
      KeeperUpdatedEvent.OutputTuple,
      KeeperUpdatedEvent.OutputObject
    >;
    KeeperUpdated: TypedContractEvent<
      KeeperUpdatedEvent.InputTuple,
      KeeperUpdatedEvent.OutputTuple,
      KeeperUpdatedEvent.OutputObject
    >;

    'OwnershipTransferred(address,address)': TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    'TraderOIHedgeBpsUpdated(uint256)': TypedContractEvent<
      TraderOIHedgeBpsUpdatedEvent.InputTuple,
      TraderOIHedgeBpsUpdatedEvent.OutputTuple,
      TraderOIHedgeBpsUpdatedEvent.OutputObject
    >;
    TraderOIHedgeBpsUpdated: TypedContractEvent<
      TraderOIHedgeBpsUpdatedEvent.InputTuple,
      TraderOIHedgeBpsUpdatedEvent.OutputTuple,
      TraderOIHedgeBpsUpdatedEvent.OutputObject
    >;

    'TraderOIHedgesUpdated(int256,int256)': TypedContractEvent<
      TraderOIHedgesUpdatedEvent.InputTuple,
      TraderOIHedgesUpdatedEvent.OutputTuple,
      TraderOIHedgesUpdatedEvent.OutputObject
    >;
    TraderOIHedgesUpdated: TypedContractEvent<
      TraderOIHedgesUpdatedEvent.InputTuple,
      TraderOIHedgesUpdatedEvent.OutputTuple,
      TraderOIHedgesUpdatedEvent.OutputObject
    >;
  };
}
