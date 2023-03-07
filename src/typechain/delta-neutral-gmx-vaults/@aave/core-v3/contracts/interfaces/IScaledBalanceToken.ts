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
} from '../../../../common';

export interface IScaledBalanceTokenInterface extends Interface {
  getFunction(
    nameOrSignature:
      | 'getPreviousIndex'
      | 'getScaledUserBalanceAndSupply'
      | 'scaledBalanceOf'
      | 'scaledTotalSupply'
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: 'Burn' | 'Mint'): EventFragment;

  encodeFunctionData(
    functionFragment: 'getPreviousIndex',
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: 'getScaledUserBalanceAndSupply',
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: 'scaledBalanceOf',
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: 'scaledTotalSupply',
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: 'getPreviousIndex',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getScaledUserBalanceAndSupply',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'scaledBalanceOf',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'scaledTotalSupply',
    data: BytesLike
  ): Result;
}

export namespace BurnEvent {
  export type InputTuple = [
    from: AddressLike,
    target: AddressLike,
    value: BigNumberish,
    balanceIncrease: BigNumberish,
    index: BigNumberish
  ];
  export type OutputTuple = [
    from: string,
    target: string,
    value: bigint,
    balanceIncrease: bigint,
    index: bigint
  ];
  export interface OutputObject {
    from: string;
    target: string;
    value: bigint;
    balanceIncrease: bigint;
    index: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace MintEvent {
  export type InputTuple = [
    caller: AddressLike,
    onBehalfOf: AddressLike,
    value: BigNumberish,
    balanceIncrease: BigNumberish,
    index: BigNumberish
  ];
  export type OutputTuple = [
    caller: string,
    onBehalfOf: string,
    value: bigint,
    balanceIncrease: bigint,
    index: bigint
  ];
  export interface OutputObject {
    caller: string;
    onBehalfOf: string;
    value: bigint;
    balanceIncrease: bigint;
    index: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IScaledBalanceToken extends BaseContract {
  connect(runner?: ContractRunner | null): BaseContract;
  attach(addressOrName: AddressLike): this;
  deployed(): Promise<this>;

  interface: IScaledBalanceTokenInterface;

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

  getPreviousIndex: TypedContractMethod<[user: AddressLike], [bigint], 'view'>;

  getScaledUserBalanceAndSupply: TypedContractMethod<
    [user: AddressLike],
    [[bigint, bigint]],
    'view'
  >;

  scaledBalanceOf: TypedContractMethod<[user: AddressLike], [bigint], 'view'>;

  scaledTotalSupply: TypedContractMethod<[], [bigint], 'view'>;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: 'getPreviousIndex'
  ): TypedContractMethod<[user: AddressLike], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'getScaledUserBalanceAndSupply'
  ): TypedContractMethod<[user: AddressLike], [[bigint, bigint]], 'view'>;
  getFunction(
    nameOrSignature: 'scaledBalanceOf'
  ): TypedContractMethod<[user: AddressLike], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'scaledTotalSupply'
  ): TypedContractMethod<[], [bigint], 'view'>;

  getEvent(
    key: 'Burn'
  ): TypedContractEvent<
    BurnEvent.InputTuple,
    BurnEvent.OutputTuple,
    BurnEvent.OutputObject
  >;
  getEvent(
    key: 'Mint'
  ): TypedContractEvent<
    MintEvent.InputTuple,
    MintEvent.OutputTuple,
    MintEvent.OutputObject
  >;

  filters: {
    'Burn(address,address,uint256,uint256,uint256)': TypedContractEvent<
      BurnEvent.InputTuple,
      BurnEvent.OutputTuple,
      BurnEvent.OutputObject
    >;
    Burn: TypedContractEvent<
      BurnEvent.InputTuple,
      BurnEvent.OutputTuple,
      BurnEvent.OutputObject
    >;

    'Mint(address,address,uint256,uint256,uint256)': TypedContractEvent<
      MintEvent.InputTuple,
      MintEvent.OutputTuple,
      MintEvent.OutputObject
    >;
    Mint: TypedContractEvent<
      MintEvent.InputTuple,
      MintEvent.OutputTuple,
      MintEvent.OutputObject
    >;
  };
}
