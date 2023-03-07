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

export declare namespace IClearingHouseStructures {
  export type CollateralSettingsStruct = {
    oracle: AddressLike;
    twapDuration: BigNumberish;
    isAllowedForDeposit: boolean;
  };

  export type CollateralSettingsStructOutput = [
    oracle: string,
    twapDuration: bigint,
    isAllowedForDeposit: boolean
  ] & { oracle: string; twapDuration: bigint; isAllowedForDeposit: boolean };

  export type PoolSettingsStruct = {
    initialMarginRatioBps: BigNumberish;
    maintainanceMarginRatioBps: BigNumberish;
    maxVirtualPriceDeviationRatioBps: BigNumberish;
    twapDuration: BigNumberish;
    isAllowedForTrade: boolean;
    isCrossMargined: boolean;
    oracle: AddressLike;
  };

  export type PoolSettingsStructOutput = [
    initialMarginRatioBps: bigint,
    maintainanceMarginRatioBps: bigint,
    maxVirtualPriceDeviationRatioBps: bigint,
    twapDuration: bigint,
    isAllowedForTrade: boolean,
    isCrossMargined: boolean,
    oracle: string
  ] & {
    initialMarginRatioBps: bigint;
    maintainanceMarginRatioBps: bigint;
    maxVirtualPriceDeviationRatioBps: bigint;
    twapDuration: bigint;
    isAllowedForTrade: boolean;
    isCrossMargined: boolean;
    oracle: string;
  };

  export type LiquidationParamsStruct = {
    rangeLiquidationFeeFraction: BigNumberish;
    tokenLiquidationFeeFraction: BigNumberish;
    closeFactorMMThresholdBps: BigNumberish;
    partialLiquidationCloseFactorBps: BigNumberish;
    insuranceFundFeeShareBps: BigNumberish;
    liquidationSlippageSqrtToleranceBps: BigNumberish;
    maxRangeLiquidationFees: BigNumberish;
    minNotionalLiquidatable: BigNumberish;
  };

  export type LiquidationParamsStructOutput = [
    rangeLiquidationFeeFraction: bigint,
    tokenLiquidationFeeFraction: bigint,
    closeFactorMMThresholdBps: bigint,
    partialLiquidationCloseFactorBps: bigint,
    insuranceFundFeeShareBps: bigint,
    liquidationSlippageSqrtToleranceBps: bigint,
    maxRangeLiquidationFees: bigint,
    minNotionalLiquidatable: bigint
  ] & {
    rangeLiquidationFeeFraction: bigint;
    tokenLiquidationFeeFraction: bigint;
    closeFactorMMThresholdBps: bigint;
    partialLiquidationCloseFactorBps: bigint;
    insuranceFundFeeShareBps: bigint;
    liquidationSlippageSqrtToleranceBps: bigint;
    maxRangeLiquidationFees: bigint;
    minNotionalLiquidatable: bigint;
  };

  export type PoolStruct = {
    vToken: AddressLike;
    vPool: AddressLike;
    vPoolWrapper: AddressLike;
    settings: IClearingHouseStructures.PoolSettingsStruct;
  };

  export type PoolStructOutput = [
    vToken: string,
    vPool: string,
    vPoolWrapper: string,
    settings: IClearingHouseStructures.PoolSettingsStructOutput
  ] & {
    vToken: string;
    vPool: string;
    vPoolWrapper: string;
    settings: IClearingHouseStructures.PoolSettingsStructOutput;
  };

  export type SwapParamsStruct = {
    amount: BigNumberish;
    sqrtPriceLimit: BigNumberish;
    isNotional: boolean;
    isPartialAllowed: boolean;
    settleProfit: boolean;
  };

  export type SwapParamsStructOutput = [
    amount: bigint,
    sqrtPriceLimit: bigint,
    isNotional: boolean,
    isPartialAllowed: boolean,
    settleProfit: boolean
  ] & {
    amount: bigint;
    sqrtPriceLimit: bigint;
    isNotional: boolean;
    isPartialAllowed: boolean;
    settleProfit: boolean;
  };

  export type LiquidityChangeParamsStruct = {
    tickLower: BigNumberish;
    tickUpper: BigNumberish;
    liquidityDelta: BigNumberish;
    sqrtPriceCurrent: BigNumberish;
    slippageToleranceBps: BigNumberish;
    closeTokenPosition: boolean;
    limitOrderType: BigNumberish;
    settleProfit: boolean;
  };

  export type LiquidityChangeParamsStructOutput = [
    tickLower: bigint,
    tickUpper: bigint,
    liquidityDelta: bigint,
    sqrtPriceCurrent: bigint,
    slippageToleranceBps: bigint,
    closeTokenPosition: boolean,
    limitOrderType: bigint,
    settleProfit: boolean
  ] & {
    tickLower: bigint;
    tickUpper: bigint;
    liquidityDelta: bigint;
    sqrtPriceCurrent: bigint;
    slippageToleranceBps: bigint;
    closeTokenPosition: boolean;
    limitOrderType: bigint;
    settleProfit: boolean;
  };
}

export interface ClearingHouseViewInterface extends Interface {
  getFunction(
    nameOrSignature:
      | 'acceptGovernanceTransfer'
      | 'acceptTeamMultisigTransfer'
      | 'createAccount'
      | 'createAccountAndAddMargin'
      | 'extsload(bytes32)'
      | 'extsload(bytes32[])'
      | 'getAccountMarketValueAndRequiredMargin'
      | 'getAccountNetProfit'
      | 'getAccountNetTokenPosition'
      | 'getRealTwapPriceX128'
      | 'getVirtualTwapPriceX128'
      | 'governance'
      | 'governancePending'
      | 'initialize'
      | 'initiateGovernanceTransfer'
      | 'initiateTeamMultisigTransfer'
      | 'insuranceFund'
      | 'liquidateLiquidityPositions'
      | 'liquidateTokenPosition'
      | 'numAccounts'
      | 'rageTradeFactoryAddress'
      | 'registerPool'
      | 'removeLimitOrder'
      | 'settleProfit'
      | 'swapToken'
      | 'teamMultisig'
      | 'teamMultisigPending'
      | 'updateCollateralSettings'
      | 'updateMargin'
      | 'updatePoolSettings'
      | 'updateProfit'
      | 'updateProtocolSettings'
      | 'updateRangeOrder'
      | 'withdrawProtocolFee'
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | 'AccountCreated'
      | 'CollateralSettingsUpdated'
      | 'PausedUpdated'
      | 'PoolSettingsUpdated'
      | 'ProtocolSettingsUpdated'
  ): EventFragment;

  encodeFunctionData(
    functionFragment: 'acceptGovernanceTransfer',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'acceptTeamMultisigTransfer',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'createAccount',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'createAccountAndAddMargin',
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'extsload(bytes32)',
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: 'extsload(bytes32[])',
    values: [BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: 'getAccountMarketValueAndRequiredMargin',
    values: [BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: 'getAccountNetProfit',
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'getAccountNetTokenPosition',
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'getRealTwapPriceX128',
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'getVirtualTwapPriceX128',
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'governance',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'governancePending',
    values?: undefined
  ): string;
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
    functionFragment: 'initiateGovernanceTransfer',
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: 'initiateTeamMultisigTransfer',
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: 'insuranceFund',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'liquidateLiquidityPositions',
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'liquidateTokenPosition',
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'numAccounts',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'rageTradeFactoryAddress',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'registerPool',
    values: [IClearingHouseStructures.PoolStruct]
  ): string;
  encodeFunctionData(
    functionFragment: 'removeLimitOrder',
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'settleProfit',
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'swapToken',
    values: [
      BigNumberish,
      BigNumberish,
      IClearingHouseStructures.SwapParamsStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: 'teamMultisig',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'teamMultisigPending',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'updateCollateralSettings',
    values: [AddressLike, IClearingHouseStructures.CollateralSettingsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: 'updateMargin',
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'updatePoolSettings',
    values: [BigNumberish, IClearingHouseStructures.PoolSettingsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: 'updateProfit',
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'updateProtocolSettings',
    values: [
      IClearingHouseStructures.LiquidationParamsStruct,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: 'updateRangeOrder',
    values: [
      BigNumberish,
      BigNumberish,
      IClearingHouseStructures.LiquidityChangeParamsStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: 'withdrawProtocolFee',
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: 'acceptGovernanceTransfer',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'acceptTeamMultisigTransfer',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'createAccount',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'createAccountAndAddMargin',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'extsload(bytes32)',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'extsload(bytes32[])',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getAccountMarketValueAndRequiredMargin',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getAccountNetProfit',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getAccountNetTokenPosition',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getRealTwapPriceX128',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getVirtualTwapPriceX128',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'governance', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'governancePending',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'initiateGovernanceTransfer',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'initiateTeamMultisigTransfer',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'insuranceFund',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'liquidateLiquidityPositions',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'liquidateTokenPosition',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'numAccounts',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'rageTradeFactoryAddress',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'registerPool',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'removeLimitOrder',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'settleProfit',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'swapToken', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'teamMultisig',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'teamMultisigPending',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'updateCollateralSettings',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'updateMargin',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'updatePoolSettings',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'updateProfit',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'updateProtocolSettings',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'updateRangeOrder',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'withdrawProtocolFee',
    data: BytesLike
  ): Result;
}

export namespace AccountCreatedEvent {
  export type InputTuple = [ownerAddress: AddressLike, accountId: BigNumberish];
  export type OutputTuple = [ownerAddress: string, accountId: bigint];
  export interface OutputObject {
    ownerAddress: string;
    accountId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace CollateralSettingsUpdatedEvent {
  export type InputTuple = [
    cToken: AddressLike,
    cTokenInfo: IClearingHouseStructures.CollateralSettingsStruct
  ];
  export type OutputTuple = [
    cToken: string,
    cTokenInfo: IClearingHouseStructures.CollateralSettingsStructOutput
  ];
  export interface OutputObject {
    cToken: string;
    cTokenInfo: IClearingHouseStructures.CollateralSettingsStructOutput;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PausedUpdatedEvent {
  export type InputTuple = [paused: boolean];
  export type OutputTuple = [paused: boolean];
  export interface OutputObject {
    paused: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PoolSettingsUpdatedEvent {
  export type InputTuple = [
    poolId: BigNumberish,
    settings: IClearingHouseStructures.PoolSettingsStruct
  ];
  export type OutputTuple = [
    poolId: bigint,
    settings: IClearingHouseStructures.PoolSettingsStructOutput
  ];
  export interface OutputObject {
    poolId: bigint;
    settings: IClearingHouseStructures.PoolSettingsStructOutput;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ProtocolSettingsUpdatedEvent {
  export type InputTuple = [
    liquidationParams: IClearingHouseStructures.LiquidationParamsStruct,
    removeLimitOrderFee: BigNumberish,
    minimumOrderNotional: BigNumberish,
    minRequiredMargin: BigNumberish
  ];
  export type OutputTuple = [
    liquidationParams: IClearingHouseStructures.LiquidationParamsStructOutput,
    removeLimitOrderFee: bigint,
    minimumOrderNotional: bigint,
    minRequiredMargin: bigint
  ];
  export interface OutputObject {
    liquidationParams: IClearingHouseStructures.LiquidationParamsStructOutput;
    removeLimitOrderFee: bigint;
    minimumOrderNotional: bigint;
    minRequiredMargin: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface ClearingHouseView extends BaseContract {
  connect(runner?: ContractRunner | null): BaseContract;
  attach(addressOrName: AddressLike): this;
  deployed(): Promise<this>;

  interface: ClearingHouseViewInterface;

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

  acceptGovernanceTransfer: TypedContractMethod<[], [void], 'nonpayable'>;

  acceptTeamMultisigTransfer: TypedContractMethod<[], [void], 'nonpayable'>;

  createAccount: TypedContractMethod<[], [bigint], 'nonpayable'>;

  createAccountAndAddMargin: TypedContractMethod<
    [collateralId: BigNumberish, amount: BigNumberish],
    [bigint],
    'nonpayable'
  >;

  'extsload(bytes32)': TypedContractMethod<[slot: BytesLike], [string], 'view'>;

  'extsload(bytes32[])': TypedContractMethod<
    [slots: BytesLike[]],
    [string[]],
    'view'
  >;

  getAccountMarketValueAndRequiredMargin: TypedContractMethod<
    [accountId: BigNumberish, isInitialMargin: boolean],
    [[bigint, bigint] & { marketValue: bigint; requiredMargin: bigint }],
    'view'
  >;

  getAccountNetProfit: TypedContractMethod<
    [accountId: BigNumberish],
    [bigint],
    'view'
  >;

  getAccountNetTokenPosition: TypedContractMethod<
    [accountId: BigNumberish, poolId: BigNumberish],
    [bigint],
    'view'
  >;

  getRealTwapPriceX128: TypedContractMethod<
    [poolId: BigNumberish],
    [bigint],
    'view'
  >;

  getVirtualTwapPriceX128: TypedContractMethod<
    [poolId: BigNumberish],
    [bigint],
    'view'
  >;

  governance: TypedContractMethod<[], [string], 'view'>;

  governancePending: TypedContractMethod<[], [string], 'view'>;

  initialize: TypedContractMethod<
    [
      rageTradeFactoryAddress: AddressLike,
      initialGovernance: AddressLike,
      initialTeamMultisig: AddressLike,
      defaultCollateralToken: AddressLike,
      defaultCollateralTokenOracle: AddressLike,
      insuranceFund: AddressLike,
      vQuote: AddressLike
    ],
    [void],
    'nonpayable'
  >;

  initiateGovernanceTransfer: TypedContractMethod<
    [newGovernancePending: AddressLike],
    [void],
    'nonpayable'
  >;

  initiateTeamMultisigTransfer: TypedContractMethod<
    [newTeamMultisigPending: AddressLike],
    [void],
    'nonpayable'
  >;

  insuranceFund: TypedContractMethod<[], [string], 'view'>;

  liquidateLiquidityPositions: TypedContractMethod<
    [accountId: BigNumberish],
    [void],
    'nonpayable'
  >;

  liquidateTokenPosition: TypedContractMethod<
    [targetAccountId: BigNumberish, poolId: BigNumberish],
    [bigint],
    'nonpayable'
  >;

  numAccounts: TypedContractMethod<[], [bigint], 'view'>;

  rageTradeFactoryAddress: TypedContractMethod<[], [string], 'view'>;

  registerPool: TypedContractMethod<
    [poolInfo: IClearingHouseStructures.PoolStruct],
    [void],
    'nonpayable'
  >;

  removeLimitOrder: TypedContractMethod<
    [
      accountId: BigNumberish,
      poolId: BigNumberish,
      tickLower: BigNumberish,
      tickUpper: BigNumberish
    ],
    [void],
    'nonpayable'
  >;

  settleProfit: TypedContractMethod<
    [accountId: BigNumberish],
    [void],
    'nonpayable'
  >;

  swapToken: TypedContractMethod<
    [
      accountId: BigNumberish,
      poolId: BigNumberish,
      swapParams: IClearingHouseStructures.SwapParamsStruct
    ],
    [[bigint, bigint] & { vTokenAmountOut: bigint; vQuoteAmountOut: bigint }],
    'nonpayable'
  >;

  teamMultisig: TypedContractMethod<[], [string], 'view'>;

  teamMultisigPending: TypedContractMethod<[], [string], 'view'>;

  updateCollateralSettings: TypedContractMethod<
    [
      cToken: AddressLike,
      collateralSettings: IClearingHouseStructures.CollateralSettingsStruct
    ],
    [void],
    'nonpayable'
  >;

  updateMargin: TypedContractMethod<
    [accountId: BigNumberish, collateralId: BigNumberish, amount: BigNumberish],
    [void],
    'nonpayable'
  >;

  updatePoolSettings: TypedContractMethod<
    [
      poolId: BigNumberish,
      newSettings: IClearingHouseStructures.PoolSettingsStruct
    ],
    [void],
    'nonpayable'
  >;

  updateProfit: TypedContractMethod<
    [accountId: BigNumberish, amount: BigNumberish],
    [void],
    'nonpayable'
  >;

  updateProtocolSettings: TypedContractMethod<
    [
      liquidationParams: IClearingHouseStructures.LiquidationParamsStruct,
      removeLimitOrderFee: BigNumberish,
      minimumOrderNotional: BigNumberish,
      minRequiredMargin: BigNumberish
    ],
    [void],
    'nonpayable'
  >;

  updateRangeOrder: TypedContractMethod<
    [
      accountId: BigNumberish,
      poolId: BigNumberish,
      liquidityChangeParams: IClearingHouseStructures.LiquidityChangeParamsStruct
    ],
    [[bigint, bigint] & { vTokenAmountOut: bigint; vQuoteAmountOut: bigint }],
    'nonpayable'
  >;

  withdrawProtocolFee: TypedContractMethod<
    [numberOfPoolsToUpdateInThisTx: BigNumberish],
    [void],
    'nonpayable'
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: 'acceptGovernanceTransfer'
  ): TypedContractMethod<[], [void], 'nonpayable'>;
  getFunction(
    nameOrSignature: 'acceptTeamMultisigTransfer'
  ): TypedContractMethod<[], [void], 'nonpayable'>;
  getFunction(
    nameOrSignature: 'createAccount'
  ): TypedContractMethod<[], [bigint], 'nonpayable'>;
  getFunction(
    nameOrSignature: 'createAccountAndAddMargin'
  ): TypedContractMethod<
    [collateralId: BigNumberish, amount: BigNumberish],
    [bigint],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'extsload(bytes32)'
  ): TypedContractMethod<[slot: BytesLike], [string], 'view'>;
  getFunction(
    nameOrSignature: 'extsload(bytes32[])'
  ): TypedContractMethod<[slots: BytesLike[]], [string[]], 'view'>;
  getFunction(
    nameOrSignature: 'getAccountMarketValueAndRequiredMargin'
  ): TypedContractMethod<
    [accountId: BigNumberish, isInitialMargin: boolean],
    [[bigint, bigint] & { marketValue: bigint; requiredMargin: bigint }],
    'view'
  >;
  getFunction(
    nameOrSignature: 'getAccountNetProfit'
  ): TypedContractMethod<[accountId: BigNumberish], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'getAccountNetTokenPosition'
  ): TypedContractMethod<
    [accountId: BigNumberish, poolId: BigNumberish],
    [bigint],
    'view'
  >;
  getFunction(
    nameOrSignature: 'getRealTwapPriceX128'
  ): TypedContractMethod<[poolId: BigNumberish], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'getVirtualTwapPriceX128'
  ): TypedContractMethod<[poolId: BigNumberish], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'governance'
  ): TypedContractMethod<[], [string], 'view'>;
  getFunction(
    nameOrSignature: 'governancePending'
  ): TypedContractMethod<[], [string], 'view'>;
  getFunction(
    nameOrSignature: 'initialize'
  ): TypedContractMethod<
    [
      rageTradeFactoryAddress: AddressLike,
      initialGovernance: AddressLike,
      initialTeamMultisig: AddressLike,
      defaultCollateralToken: AddressLike,
      defaultCollateralTokenOracle: AddressLike,
      insuranceFund: AddressLike,
      vQuote: AddressLike
    ],
    [void],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'initiateGovernanceTransfer'
  ): TypedContractMethod<
    [newGovernancePending: AddressLike],
    [void],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'initiateTeamMultisigTransfer'
  ): TypedContractMethod<
    [newTeamMultisigPending: AddressLike],
    [void],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'insuranceFund'
  ): TypedContractMethod<[], [string], 'view'>;
  getFunction(
    nameOrSignature: 'liquidateLiquidityPositions'
  ): TypedContractMethod<[accountId: BigNumberish], [void], 'nonpayable'>;
  getFunction(
    nameOrSignature: 'liquidateTokenPosition'
  ): TypedContractMethod<
    [targetAccountId: BigNumberish, poolId: BigNumberish],
    [bigint],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'numAccounts'
  ): TypedContractMethod<[], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'rageTradeFactoryAddress'
  ): TypedContractMethod<[], [string], 'view'>;
  getFunction(
    nameOrSignature: 'registerPool'
  ): TypedContractMethod<
    [poolInfo: IClearingHouseStructures.PoolStruct],
    [void],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'removeLimitOrder'
  ): TypedContractMethod<
    [
      accountId: BigNumberish,
      poolId: BigNumberish,
      tickLower: BigNumberish,
      tickUpper: BigNumberish
    ],
    [void],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'settleProfit'
  ): TypedContractMethod<[accountId: BigNumberish], [void], 'nonpayable'>;
  getFunction(
    nameOrSignature: 'swapToken'
  ): TypedContractMethod<
    [
      accountId: BigNumberish,
      poolId: BigNumberish,
      swapParams: IClearingHouseStructures.SwapParamsStruct
    ],
    [[bigint, bigint] & { vTokenAmountOut: bigint; vQuoteAmountOut: bigint }],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'teamMultisig'
  ): TypedContractMethod<[], [string], 'view'>;
  getFunction(
    nameOrSignature: 'teamMultisigPending'
  ): TypedContractMethod<[], [string], 'view'>;
  getFunction(
    nameOrSignature: 'updateCollateralSettings'
  ): TypedContractMethod<
    [
      cToken: AddressLike,
      collateralSettings: IClearingHouseStructures.CollateralSettingsStruct
    ],
    [void],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'updateMargin'
  ): TypedContractMethod<
    [accountId: BigNumberish, collateralId: BigNumberish, amount: BigNumberish],
    [void],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'updatePoolSettings'
  ): TypedContractMethod<
    [
      poolId: BigNumberish,
      newSettings: IClearingHouseStructures.PoolSettingsStruct
    ],
    [void],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'updateProfit'
  ): TypedContractMethod<
    [accountId: BigNumberish, amount: BigNumberish],
    [void],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'updateProtocolSettings'
  ): TypedContractMethod<
    [
      liquidationParams: IClearingHouseStructures.LiquidationParamsStruct,
      removeLimitOrderFee: BigNumberish,
      minimumOrderNotional: BigNumberish,
      minRequiredMargin: BigNumberish
    ],
    [void],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'updateRangeOrder'
  ): TypedContractMethod<
    [
      accountId: BigNumberish,
      poolId: BigNumberish,
      liquidityChangeParams: IClearingHouseStructures.LiquidityChangeParamsStruct
    ],
    [[bigint, bigint] & { vTokenAmountOut: bigint; vQuoteAmountOut: bigint }],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'withdrawProtocolFee'
  ): TypedContractMethod<
    [numberOfPoolsToUpdateInThisTx: BigNumberish],
    [void],
    'nonpayable'
  >;

  getEvent(
    key: 'AccountCreated'
  ): TypedContractEvent<
    AccountCreatedEvent.InputTuple,
    AccountCreatedEvent.OutputTuple,
    AccountCreatedEvent.OutputObject
  >;
  getEvent(
    key: 'CollateralSettingsUpdated'
  ): TypedContractEvent<
    CollateralSettingsUpdatedEvent.InputTuple,
    CollateralSettingsUpdatedEvent.OutputTuple,
    CollateralSettingsUpdatedEvent.OutputObject
  >;
  getEvent(
    key: 'PausedUpdated'
  ): TypedContractEvent<
    PausedUpdatedEvent.InputTuple,
    PausedUpdatedEvent.OutputTuple,
    PausedUpdatedEvent.OutputObject
  >;
  getEvent(
    key: 'PoolSettingsUpdated'
  ): TypedContractEvent<
    PoolSettingsUpdatedEvent.InputTuple,
    PoolSettingsUpdatedEvent.OutputTuple,
    PoolSettingsUpdatedEvent.OutputObject
  >;
  getEvent(
    key: 'ProtocolSettingsUpdated'
  ): TypedContractEvent<
    ProtocolSettingsUpdatedEvent.InputTuple,
    ProtocolSettingsUpdatedEvent.OutputTuple,
    ProtocolSettingsUpdatedEvent.OutputObject
  >;

  filters: {
    'AccountCreated(address,uint256)': TypedContractEvent<
      AccountCreatedEvent.InputTuple,
      AccountCreatedEvent.OutputTuple,
      AccountCreatedEvent.OutputObject
    >;
    AccountCreated: TypedContractEvent<
      AccountCreatedEvent.InputTuple,
      AccountCreatedEvent.OutputTuple,
      AccountCreatedEvent.OutputObject
    >;

    'CollateralSettingsUpdated(address,tuple)': TypedContractEvent<
      CollateralSettingsUpdatedEvent.InputTuple,
      CollateralSettingsUpdatedEvent.OutputTuple,
      CollateralSettingsUpdatedEvent.OutputObject
    >;
    CollateralSettingsUpdated: TypedContractEvent<
      CollateralSettingsUpdatedEvent.InputTuple,
      CollateralSettingsUpdatedEvent.OutputTuple,
      CollateralSettingsUpdatedEvent.OutputObject
    >;

    'PausedUpdated(bool)': TypedContractEvent<
      PausedUpdatedEvent.InputTuple,
      PausedUpdatedEvent.OutputTuple,
      PausedUpdatedEvent.OutputObject
    >;
    PausedUpdated: TypedContractEvent<
      PausedUpdatedEvent.InputTuple,
      PausedUpdatedEvent.OutputTuple,
      PausedUpdatedEvent.OutputObject
    >;

    'PoolSettingsUpdated(uint32,tuple)': TypedContractEvent<
      PoolSettingsUpdatedEvent.InputTuple,
      PoolSettingsUpdatedEvent.OutputTuple,
      PoolSettingsUpdatedEvent.OutputObject
    >;
    PoolSettingsUpdated: TypedContractEvent<
      PoolSettingsUpdatedEvent.InputTuple,
      PoolSettingsUpdatedEvent.OutputTuple,
      PoolSettingsUpdatedEvent.OutputObject
    >;

    'ProtocolSettingsUpdated(tuple,uint256,uint256,uint256)': TypedContractEvent<
      ProtocolSettingsUpdatedEvent.InputTuple,
      ProtocolSettingsUpdatedEvent.OutputTuple,
      ProtocolSettingsUpdatedEvent.OutputObject
    >;
    ProtocolSettingsUpdated: TypedContractEvent<
      ProtocolSettingsUpdatedEvent.InputTuple,
      ProtocolSettingsUpdatedEvent.OutputTuple,
      ProtocolSettingsUpdatedEvent.OutputObject
    >;
  };
}
