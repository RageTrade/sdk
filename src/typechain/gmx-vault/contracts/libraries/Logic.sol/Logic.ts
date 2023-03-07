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
} from '../../../common';

export interface LogicInterface extends Interface {
  getFunction(
    nameOrSignature:
      | 'getMarketValue'
      | 'getPriceX128'
      | 'getTwapSqrtPriceX96'
      | 'getUpdatedBaseRangeParams'
      | 'isValidRebalanceRangeWithoutCheckReset'
      | 'simulateBeforeWithdraw'
      | 'sqrtPriceX96ToValidTick'
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | 'BaseParamsUpdated'
      | 'CrvSwapFailedDueToSlippage'
      | 'CurveParamsUpdated'
      | 'EightyTwentyParamsUpdated'
      | 'FeesUpdated'
      | 'FeesWithdrawn'
      | 'Harvested'
      | 'Rebalance'
      | 'Staked'
      | 'StateInfo'
      | 'TokenPositionClosed'
  ): EventFragment;

  encodeFunctionData(
    functionFragment: 'getMarketValue',
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: 'getPriceX128',
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: 'getTwapSqrtPriceX96',
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'getUpdatedBaseRangeParams',
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'isValidRebalanceRangeWithoutCheckReset',
    values: [
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: 'simulateBeforeWithdraw',
    values: [AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'sqrtPriceX96ToValidTick',
    values: [BigNumberish, boolean]
  ): string;

  decodeFunctionResult(
    functionFragment: 'getMarketValue',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getPriceX128',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getTwapSqrtPriceX96',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getUpdatedBaseRangeParams',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'isValidRebalanceRangeWithoutCheckReset',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'simulateBeforeWithdraw',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'sqrtPriceX96ToValidTick',
    data: BytesLike
  ): Result;
}

export namespace BaseParamsUpdatedEvent {
  export type InputTuple = [
    newDepositCap: BigNumberish,
    newKeeperAddress: AddressLike,
    rebalanceTimeThreshold: BigNumberish,
    rebalancePriceThresholdBps: BigNumberish
  ];
  export type OutputTuple = [
    newDepositCap: bigint,
    newKeeperAddress: string,
    rebalanceTimeThreshold: bigint,
    rebalancePriceThresholdBps: bigint
  ];
  export interface OutputObject {
    newDepositCap: bigint;
    newKeeperAddress: string;
    rebalanceTimeThreshold: bigint;
    rebalancePriceThresholdBps: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace CrvSwapFailedDueToSlippageEvent {
  export type InputTuple = [crvSlippageTolerance: BigNumberish];
  export type OutputTuple = [crvSlippageTolerance: bigint];
  export interface OutputObject {
    crvSlippageTolerance: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace CurveParamsUpdatedEvent {
  export type InputTuple = [
    feeBps: BigNumberish,
    stablecoinSlippage: BigNumberish,
    crvHarvestThreshold: BigNumberish,
    crvSlippageTolerance: BigNumberish,
    crvOracle: AddressLike
  ];
  export type OutputTuple = [
    feeBps: bigint,
    stablecoinSlippage: bigint,
    crvHarvestThreshold: bigint,
    crvSlippageTolerance: bigint,
    crvOracle: string
  ];
  export interface OutputObject {
    feeBps: bigint;
    stablecoinSlippage: bigint;
    crvHarvestThreshold: bigint;
    crvSlippageTolerance: bigint;
    crvOracle: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace EightyTwentyParamsUpdatedEvent {
  export type InputTuple = [
    closePositionSlippageSqrtToleranceBps: BigNumberish,
    resetPositionThresholdBps: BigNumberish,
    minNotionalPositionToCloseThreshold: BigNumberish
  ];
  export type OutputTuple = [
    closePositionSlippageSqrtToleranceBps: bigint,
    resetPositionThresholdBps: bigint,
    minNotionalPositionToCloseThreshold: bigint
  ];
  export interface OutputObject {
    closePositionSlippageSqrtToleranceBps: bigint;
    resetPositionThresholdBps: bigint;
    minNotionalPositionToCloseThreshold: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace FeesUpdatedEvent {
  export type InputTuple = [fee: BigNumberish];
  export type OutputTuple = [fee: bigint];
  export interface OutputObject {
    fee: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace FeesWithdrawnEvent {
  export type InputTuple = [total: BigNumberish];
  export type OutputTuple = [total: bigint];
  export interface OutputObject {
    total: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace HarvestedEvent {
  export type InputTuple = [crvAmount: BigNumberish];
  export type OutputTuple = [crvAmount: bigint];
  export interface OutputObject {
    crvAmount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RebalanceEvent {
  export type InputTuple = [];
  export type OutputTuple = [];
  export interface OutputObject {}
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace StakedEvent {
  export type InputTuple = [amount: BigNumberish, depositor: AddressLike];
  export type OutputTuple = [amount: bigint, depositor: string];
  export interface OutputObject {
    amount: bigint;
    depositor: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace StateInfoEvent {
  export type InputTuple = [lpPrice: BigNumberish];
  export type OutputTuple = [lpPrice: bigint];
  export interface OutputObject {
    lpPrice: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TokenPositionClosedEvent {
  export type InputTuple = [];
  export type OutputTuple = [];
  export interface OutputObject {}
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Logic extends BaseContract {
  connect(runner?: ContractRunner | null): BaseContract;
  attach(addressOrName: AddressLike): this;
  deployed(): Promise<this>;

  interface: LogicInterface;

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

  getMarketValue: TypedContractMethod<
    [amount: BigNumberish, lpPriceHolder: AddressLike],
    [bigint],
    'view'
  >;

  getPriceX128: TypedContractMethod<
    [lpPriceHolder: AddressLike],
    [bigint],
    'view'
  >;

  getTwapSqrtPriceX96: TypedContractMethod<
    [rageVPool: AddressLike, rageTwapDuration: BigNumberish],
    [bigint],
    'view'
  >;

  getUpdatedBaseRangeParams: TypedContractMethod<
    [
      sqrtPriceX96: BigNumberish,
      vaultMarketValue: BigNumberish,
      SQRT_PRICE_FACTOR_PIPS: BigNumberish
    ],
    [
      [bigint, bigint, bigint] & {
        baseTickLowerUpdate: bigint;
        baseTickUpperUpdate: bigint;
        baseLiquidityUpdate: bigint;
      }
    ],
    'view'
  >;

  isValidRebalanceRangeWithoutCheckReset: TypedContractMethod<
    [
      rageVPool: AddressLike,
      rageTwapDuration: BigNumberish,
      rebalancePriceThresholdBps: BigNumberish,
      baseTickLower: BigNumberish,
      baseTickUpper: BigNumberish
    ],
    [boolean],
    'view'
  >;

  simulateBeforeWithdraw: TypedContractMethod<
    [
      vault: AddressLike,
      amountBeforeWithdraw: BigNumberish,
      amountWithdrawn: BigNumberish
    ],
    [
      [bigint, bigint] & {
        updatedAmountWithdrawn: bigint;
        tokensToTrade: bigint;
      }
    ],
    'view'
  >;

  sqrtPriceX96ToValidTick: TypedContractMethod<
    [sqrtPriceX96: BigNumberish, isTickUpper: boolean],
    [bigint],
    'view'
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: 'getMarketValue'
  ): TypedContractMethod<
    [amount: BigNumberish, lpPriceHolder: AddressLike],
    [bigint],
    'view'
  >;
  getFunction(
    nameOrSignature: 'getPriceX128'
  ): TypedContractMethod<[lpPriceHolder: AddressLike], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'getTwapSqrtPriceX96'
  ): TypedContractMethod<
    [rageVPool: AddressLike, rageTwapDuration: BigNumberish],
    [bigint],
    'view'
  >;
  getFunction(
    nameOrSignature: 'getUpdatedBaseRangeParams'
  ): TypedContractMethod<
    [
      sqrtPriceX96: BigNumberish,
      vaultMarketValue: BigNumberish,
      SQRT_PRICE_FACTOR_PIPS: BigNumberish
    ],
    [
      [bigint, bigint, bigint] & {
        baseTickLowerUpdate: bigint;
        baseTickUpperUpdate: bigint;
        baseLiquidityUpdate: bigint;
      }
    ],
    'view'
  >;
  getFunction(
    nameOrSignature: 'isValidRebalanceRangeWithoutCheckReset'
  ): TypedContractMethod<
    [
      rageVPool: AddressLike,
      rageTwapDuration: BigNumberish,
      rebalancePriceThresholdBps: BigNumberish,
      baseTickLower: BigNumberish,
      baseTickUpper: BigNumberish
    ],
    [boolean],
    'view'
  >;
  getFunction(nameOrSignature: 'simulateBeforeWithdraw'): TypedContractMethod<
    [
      vault: AddressLike,
      amountBeforeWithdraw: BigNumberish,
      amountWithdrawn: BigNumberish
    ],
    [
      [bigint, bigint] & {
        updatedAmountWithdrawn: bigint;
        tokensToTrade: bigint;
      }
    ],
    'view'
  >;
  getFunction(
    nameOrSignature: 'sqrtPriceX96ToValidTick'
  ): TypedContractMethod<
    [sqrtPriceX96: BigNumberish, isTickUpper: boolean],
    [bigint],
    'view'
  >;

  getEvent(
    key: 'BaseParamsUpdated'
  ): TypedContractEvent<
    BaseParamsUpdatedEvent.InputTuple,
    BaseParamsUpdatedEvent.OutputTuple,
    BaseParamsUpdatedEvent.OutputObject
  >;
  getEvent(
    key: 'CrvSwapFailedDueToSlippage'
  ): TypedContractEvent<
    CrvSwapFailedDueToSlippageEvent.InputTuple,
    CrvSwapFailedDueToSlippageEvent.OutputTuple,
    CrvSwapFailedDueToSlippageEvent.OutputObject
  >;
  getEvent(
    key: 'CurveParamsUpdated'
  ): TypedContractEvent<
    CurveParamsUpdatedEvent.InputTuple,
    CurveParamsUpdatedEvent.OutputTuple,
    CurveParamsUpdatedEvent.OutputObject
  >;
  getEvent(
    key: 'EightyTwentyParamsUpdated'
  ): TypedContractEvent<
    EightyTwentyParamsUpdatedEvent.InputTuple,
    EightyTwentyParamsUpdatedEvent.OutputTuple,
    EightyTwentyParamsUpdatedEvent.OutputObject
  >;
  getEvent(
    key: 'FeesUpdated'
  ): TypedContractEvent<
    FeesUpdatedEvent.InputTuple,
    FeesUpdatedEvent.OutputTuple,
    FeesUpdatedEvent.OutputObject
  >;
  getEvent(
    key: 'FeesWithdrawn'
  ): TypedContractEvent<
    FeesWithdrawnEvent.InputTuple,
    FeesWithdrawnEvent.OutputTuple,
    FeesWithdrawnEvent.OutputObject
  >;
  getEvent(
    key: 'Harvested'
  ): TypedContractEvent<
    HarvestedEvent.InputTuple,
    HarvestedEvent.OutputTuple,
    HarvestedEvent.OutputObject
  >;
  getEvent(
    key: 'Rebalance'
  ): TypedContractEvent<
    RebalanceEvent.InputTuple,
    RebalanceEvent.OutputTuple,
    RebalanceEvent.OutputObject
  >;
  getEvent(
    key: 'Staked'
  ): TypedContractEvent<
    StakedEvent.InputTuple,
    StakedEvent.OutputTuple,
    StakedEvent.OutputObject
  >;
  getEvent(
    key: 'StateInfo'
  ): TypedContractEvent<
    StateInfoEvent.InputTuple,
    StateInfoEvent.OutputTuple,
    StateInfoEvent.OutputObject
  >;
  getEvent(
    key: 'TokenPositionClosed'
  ): TypedContractEvent<
    TokenPositionClosedEvent.InputTuple,
    TokenPositionClosedEvent.OutputTuple,
    TokenPositionClosedEvent.OutputObject
  >;

  filters: {
    'BaseParamsUpdated(uint256,address,uint32,uint16)': TypedContractEvent<
      BaseParamsUpdatedEvent.InputTuple,
      BaseParamsUpdatedEvent.OutputTuple,
      BaseParamsUpdatedEvent.OutputObject
    >;
    BaseParamsUpdated: TypedContractEvent<
      BaseParamsUpdatedEvent.InputTuple,
      BaseParamsUpdatedEvent.OutputTuple,
      BaseParamsUpdatedEvent.OutputObject
    >;

    'CrvSwapFailedDueToSlippage(uint256)': TypedContractEvent<
      CrvSwapFailedDueToSlippageEvent.InputTuple,
      CrvSwapFailedDueToSlippageEvent.OutputTuple,
      CrvSwapFailedDueToSlippageEvent.OutputObject
    >;
    CrvSwapFailedDueToSlippage: TypedContractEvent<
      CrvSwapFailedDueToSlippageEvent.InputTuple,
      CrvSwapFailedDueToSlippageEvent.OutputTuple,
      CrvSwapFailedDueToSlippageEvent.OutputObject
    >;

    'CurveParamsUpdated(uint256,uint256,uint256,uint256,address)': TypedContractEvent<
      CurveParamsUpdatedEvent.InputTuple,
      CurveParamsUpdatedEvent.OutputTuple,
      CurveParamsUpdatedEvent.OutputObject
    >;
    CurveParamsUpdated: TypedContractEvent<
      CurveParamsUpdatedEvent.InputTuple,
      CurveParamsUpdatedEvent.OutputTuple,
      CurveParamsUpdatedEvent.OutputObject
    >;

    'EightyTwentyParamsUpdated(uint16,uint16,uint64)': TypedContractEvent<
      EightyTwentyParamsUpdatedEvent.InputTuple,
      EightyTwentyParamsUpdatedEvent.OutputTuple,
      EightyTwentyParamsUpdatedEvent.OutputObject
    >;
    EightyTwentyParamsUpdated: TypedContractEvent<
      EightyTwentyParamsUpdatedEvent.InputTuple,
      EightyTwentyParamsUpdatedEvent.OutputTuple,
      EightyTwentyParamsUpdatedEvent.OutputObject
    >;

    'FeesUpdated(uint256)': TypedContractEvent<
      FeesUpdatedEvent.InputTuple,
      FeesUpdatedEvent.OutputTuple,
      FeesUpdatedEvent.OutputObject
    >;
    FeesUpdated: TypedContractEvent<
      FeesUpdatedEvent.InputTuple,
      FeesUpdatedEvent.OutputTuple,
      FeesUpdatedEvent.OutputObject
    >;

    'FeesWithdrawn(uint256)': TypedContractEvent<
      FeesWithdrawnEvent.InputTuple,
      FeesWithdrawnEvent.OutputTuple,
      FeesWithdrawnEvent.OutputObject
    >;
    FeesWithdrawn: TypedContractEvent<
      FeesWithdrawnEvent.InputTuple,
      FeesWithdrawnEvent.OutputTuple,
      FeesWithdrawnEvent.OutputObject
    >;

    'Harvested(uint256)': TypedContractEvent<
      HarvestedEvent.InputTuple,
      HarvestedEvent.OutputTuple,
      HarvestedEvent.OutputObject
    >;
    Harvested: TypedContractEvent<
      HarvestedEvent.InputTuple,
      HarvestedEvent.OutputTuple,
      HarvestedEvent.OutputObject
    >;

    'Rebalance()': TypedContractEvent<
      RebalanceEvent.InputTuple,
      RebalanceEvent.OutputTuple,
      RebalanceEvent.OutputObject
    >;
    Rebalance: TypedContractEvent<
      RebalanceEvent.InputTuple,
      RebalanceEvent.OutputTuple,
      RebalanceEvent.OutputObject
    >;

    'Staked(uint256,address)': TypedContractEvent<
      StakedEvent.InputTuple,
      StakedEvent.OutputTuple,
      StakedEvent.OutputObject
    >;
    Staked: TypedContractEvent<
      StakedEvent.InputTuple,
      StakedEvent.OutputTuple,
      StakedEvent.OutputObject
    >;

    'StateInfo(uint256)': TypedContractEvent<
      StateInfoEvent.InputTuple,
      StateInfoEvent.OutputTuple,
      StateInfoEvent.OutputObject
    >;
    StateInfo: TypedContractEvent<
      StateInfoEvent.InputTuple,
      StateInfoEvent.OutputTuple,
      StateInfoEvent.OutputObject
    >;

    'TokenPositionClosed()': TypedContractEvent<
      TokenPositionClosedEvent.InputTuple,
      TokenPositionClosedEvent.OutputTuple,
      TokenPositionClosedEvent.OutputObject
    >;
    TokenPositionClosed: TypedContractEvent<
      TokenPositionClosedEvent.InputTuple,
      TokenPositionClosedEvent.OutputTuple,
      TokenPositionClosedEvent.OutputObject
    >;
  };
}
