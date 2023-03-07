/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  FunctionFragment,
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
} from '../../common';

export interface VTokenPositionSetInterface extends Interface {
  getEvent(
    nameOrSignatureOrTopic:
      | 'TokenPositionChanged'
      | 'TokenPositionFundingPaymentRealized'
  ): EventFragment;
}

export namespace TokenPositionChangedEvent {
  export type InputTuple = [
    accountId: BigNumberish,
    poolId: BigNumberish,
    vTokenAmountOut: BigNumberish,
    vQuoteAmountOut: BigNumberish,
    sqrtPriceX96Start: BigNumberish,
    sqrtPriceX96End: BigNumberish
  ];
  export type OutputTuple = [
    accountId: bigint,
    poolId: bigint,
    vTokenAmountOut: bigint,
    vQuoteAmountOut: bigint,
    sqrtPriceX96Start: bigint,
    sqrtPriceX96End: bigint
  ];
  export interface OutputObject {
    accountId: bigint;
    poolId: bigint;
    vTokenAmountOut: bigint;
    vQuoteAmountOut: bigint;
    sqrtPriceX96Start: bigint;
    sqrtPriceX96End: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TokenPositionFundingPaymentRealizedEvent {
  export type InputTuple = [
    accountId: BigNumberish,
    poolId: BigNumberish,
    amount: BigNumberish,
    sumALastX128: BigNumberish
  ];
  export type OutputTuple = [
    accountId: bigint,
    poolId: bigint,
    amount: bigint,
    sumALastX128: bigint
  ];
  export interface OutputObject {
    accountId: bigint;
    poolId: bigint;
    amount: bigint;
    sumALastX128: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface VTokenPositionSet extends BaseContract {
  connect(runner?: ContractRunner | null): BaseContract;
  attach(addressOrName: AddressLike): this;
  deployed(): Promise<this>;

  interface: VTokenPositionSetInterface;

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

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getEvent(
    key: 'TokenPositionChanged'
  ): TypedContractEvent<
    TokenPositionChangedEvent.InputTuple,
    TokenPositionChangedEvent.OutputTuple,
    TokenPositionChangedEvent.OutputObject
  >;
  getEvent(
    key: 'TokenPositionFundingPaymentRealized'
  ): TypedContractEvent<
    TokenPositionFundingPaymentRealizedEvent.InputTuple,
    TokenPositionFundingPaymentRealizedEvent.OutputTuple,
    TokenPositionFundingPaymentRealizedEvent.OutputObject
  >;

  filters: {
    'TokenPositionChanged(uint256,uint32,int256,int256,uint160,uint160)': TypedContractEvent<
      TokenPositionChangedEvent.InputTuple,
      TokenPositionChangedEvent.OutputTuple,
      TokenPositionChangedEvent.OutputObject
    >;
    TokenPositionChanged: TypedContractEvent<
      TokenPositionChangedEvent.InputTuple,
      TokenPositionChangedEvent.OutputTuple,
      TokenPositionChangedEvent.OutputObject
    >;

    'TokenPositionFundingPaymentRealized(uint256,uint32,int256,int256)': TypedContractEvent<
      TokenPositionFundingPaymentRealizedEvent.InputTuple,
      TokenPositionFundingPaymentRealizedEvent.OutputTuple,
      TokenPositionFundingPaymentRealizedEvent.OutputObject
    >;
    TokenPositionFundingPaymentRealized: TypedContractEvent<
      TokenPositionFundingPaymentRealizedEvent.InputTuple,
      TokenPositionFundingPaymentRealizedEvent.OutputTuple,
      TokenPositionFundingPaymentRealizedEvent.OutputObject
    >;
  };
}
