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

export interface IDnGmxJuniorVaultInterface extends Interface {
  getFunction(
    nameOrSignature:
      | 'allowance'
      | 'approve'
      | 'asset'
      | 'balanceOf'
      | 'convertToAssets'
      | 'convertToShares'
      | 'deposit'
      | 'depositCap'
      | 'getMarketValue'
      | 'getPriceX128'
      | 'getUsdcBorrowed'
      | 'getVaultMarketValue'
      | 'harvestFees'
      | 'maxDeposit'
      | 'maxMint'
      | 'maxRedeem'
      | 'maxWithdraw'
      | 'mint'
      | 'previewDeposit'
      | 'previewMint'
      | 'previewRedeem'
      | 'previewWithdraw'
      | 'redeem'
      | 'totalAssets'
      | 'totalSupply'
      | 'transfer'
      | 'transferFrom'
      | 'withdraw'
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | 'AdminParamsUpdated'
      | 'AllowancesGranted'
      | 'Approval'
      | 'Deposit'
      | 'DepositCapUpdated'
      | 'DnGmxSeniorVaultUpdated'
      | 'EsGmxStaked'
      | 'EsGmxVested'
      | 'FeeParamsUpdated'
      | 'FeesWithdrawn'
      | 'GmxClaimed'
      | 'HedgeParamsUpdated'
      | 'KeeperUpdated'
      | 'ParamsV1Updated'
      | 'RebalanceParamsUpdated'
      | 'Rebalanced'
      | 'ThresholdsUpdated'
      | 'TraderOIHedgesUpdated'
      | 'Transfer'
      | 'Withdraw'
      | 'WithdrawFeeUpdated'
  ): EventFragment;

  encodeFunctionData(
    functionFragment: 'allowance',
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: 'approve',
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: 'asset', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'balanceOf',
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: 'convertToAssets',
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'convertToShares',
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'deposit',
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: 'depositCap',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'getMarketValue',
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'getPriceX128',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'getUsdcBorrowed',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'getVaultMarketValue',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'harvestFees',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'maxDeposit',
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: 'maxMint',
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: 'maxRedeem',
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: 'maxWithdraw',
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: 'mint',
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: 'previewDeposit',
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'previewMint',
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'previewRedeem',
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'previewWithdraw',
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'redeem',
    values: [BigNumberish, AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: 'totalAssets',
    values?: undefined
  ): string;
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
    values: [BigNumberish, AddressLike, AddressLike]
  ): string;

  decodeFunctionResult(functionFragment: 'allowance', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'approve', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'asset', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'balanceOf', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'convertToAssets',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'convertToShares',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'deposit', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'depositCap', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'getMarketValue',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getPriceX128',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getUsdcBorrowed',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getVaultMarketValue',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'harvestFees',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'maxDeposit', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'maxMint', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'maxRedeem', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'maxWithdraw',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'mint', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'previewDeposit',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'previewMint',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'previewRedeem',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'previewWithdraw',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'redeem', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'totalAssets',
    data: BytesLike
  ): Result;
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

export namespace AdminParamsUpdatedEvent {
  export type InputTuple = [
    newKeeper: AddressLike,
    dnGmxSeniorVault: AddressLike,
    newDepositCap: BigNumberish,
    batchingManager: AddressLike,
    withdrawFeeBps: BigNumberish
  ];
  export type OutputTuple = [
    newKeeper: string,
    dnGmxSeniorVault: string,
    newDepositCap: bigint,
    batchingManager: string,
    withdrawFeeBps: bigint
  ];
  export interface OutputObject {
    newKeeper: string;
    dnGmxSeniorVault: string;
    newDepositCap: bigint;
    batchingManager: string;
    withdrawFeeBps: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace AllowancesGrantedEvent {
  export type InputTuple = [];
  export type OutputTuple = [];
  export interface OutputObject {}
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
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

export namespace DepositEvent {
  export type InputTuple = [
    caller: AddressLike,
    owner: AddressLike,
    assets: BigNumberish,
    shares: BigNumberish
  ];
  export type OutputTuple = [
    caller: string,
    owner: string,
    assets: bigint,
    shares: bigint
  ];
  export interface OutputObject {
    caller: string;
    owner: string;
    assets: bigint;
    shares: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DepositCapUpdatedEvent {
  export type InputTuple = [_newDepositCap: BigNumberish];
  export type OutputTuple = [_newDepositCap: bigint];
  export interface OutputObject {
    _newDepositCap: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DnGmxSeniorVaultUpdatedEvent {
  export type InputTuple = [_dnGmxSeniorVault: AddressLike];
  export type OutputTuple = [_dnGmxSeniorVault: string];
  export interface OutputObject {
    _dnGmxSeniorVault: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace EsGmxStakedEvent {
  export type InputTuple = [amount: BigNumberish];
  export type OutputTuple = [amount: bigint];
  export interface OutputObject {
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace EsGmxVestedEvent {
  export type InputTuple = [amount: BigNumberish];
  export type OutputTuple = [amount: bigint];
  export interface OutputObject {
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace FeeParamsUpdatedEvent {
  export type InputTuple = [
    feeBps: BigNumberish,
    _newFeeRecipient: AddressLike
  ];
  export type OutputTuple = [feeBps: bigint, _newFeeRecipient: string];
  export interface OutputObject {
    feeBps: bigint;
    _newFeeRecipient: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace FeesWithdrawnEvent {
  export type InputTuple = [feeAmount: BigNumberish];
  export type OutputTuple = [feeAmount: bigint];
  export interface OutputObject {
    feeAmount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace GmxClaimedEvent {
  export type InputTuple = [amount: BigNumberish];
  export type OutputTuple = [amount: bigint];
  export interface OutputObject {
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace HedgeParamsUpdatedEvent {
  export type InputTuple = [
    vault: AddressLike,
    swapRouter: AddressLike,
    targetHealthFactor: BigNumberish,
    aaveRewardsController: AddressLike,
    pool: AddressLike,
    oracle: AddressLike
  ];
  export type OutputTuple = [
    vault: string,
    swapRouter: string,
    targetHealthFactor: bigint,
    aaveRewardsController: string,
    pool: string,
    oracle: string
  ];
  export interface OutputObject {
    vault: string;
    swapRouter: string;
    targetHealthFactor: bigint;
    aaveRewardsController: string;
    pool: string;
    oracle: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace KeeperUpdatedEvent {
  export type InputTuple = [_newKeeper: AddressLike];
  export type OutputTuple = [_newKeeper: string];
  export interface OutputObject {
    _newKeeper: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ParamsV1UpdatedEvent {
  export type InputTuple = [
    rebalanceProfitUsdcAmountThreshold: BigNumberish,
    dnGmxTraderHedgeStrategy: AddressLike
  ];
  export type OutputTuple = [
    rebalanceProfitUsdcAmountThreshold: bigint,
    dnGmxTraderHedgeStrategy: string
  ];
  export interface OutputObject {
    rebalanceProfitUsdcAmountThreshold: bigint;
    dnGmxTraderHedgeStrategy: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RebalanceParamsUpdatedEvent {
  export type InputTuple = [
    rebalanceTimeThreshold: BigNumberish,
    rebalanceDeltaThresholdBps: BigNumberish,
    rebalanceHfThresholdBps: BigNumberish
  ];
  export type OutputTuple = [
    rebalanceTimeThreshold: bigint,
    rebalanceDeltaThresholdBps: bigint,
    rebalanceHfThresholdBps: bigint
  ];
  export interface OutputObject {
    rebalanceTimeThreshold: bigint;
    rebalanceDeltaThresholdBps: bigint;
    rebalanceHfThresholdBps: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RebalancedEvent {
  export type InputTuple = [];
  export type OutputTuple = [];
  export interface OutputObject {}
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ThresholdsUpdatedEvent {
  export type InputTuple = [
    slippageThresholdSwapBtcBps: BigNumberish,
    slippageThresholdSwapEthBps: BigNumberish,
    slippageThresholdGmxBps: BigNumberish,
    usdcConversionThreshold: BigNumberish,
    wethConversionThreshold: BigNumberish,
    hedgeUsdcAmountThreshold: BigNumberish,
    partialBtcHedgeUsdcAmountThreshold: BigNumberish,
    partialEthHedgeUsdcAmountThreshold: BigNumberish
  ];
  export type OutputTuple = [
    slippageThresholdSwapBtcBps: bigint,
    slippageThresholdSwapEthBps: bigint,
    slippageThresholdGmxBps: bigint,
    usdcConversionThreshold: bigint,
    wethConversionThreshold: bigint,
    hedgeUsdcAmountThreshold: bigint,
    partialBtcHedgeUsdcAmountThreshold: bigint,
    partialEthHedgeUsdcAmountThreshold: bigint
  ];
  export interface OutputObject {
    slippageThresholdSwapBtcBps: bigint;
    slippageThresholdSwapEthBps: bigint;
    slippageThresholdGmxBps: bigint;
    usdcConversionThreshold: bigint;
    wethConversionThreshold: bigint;
    hedgeUsdcAmountThreshold: bigint;
    partialBtcHedgeUsdcAmountThreshold: bigint;
    partialEthHedgeUsdcAmountThreshold: bigint;
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

export namespace WithdrawEvent {
  export type InputTuple = [
    caller: AddressLike,
    receiver: AddressLike,
    owner: AddressLike,
    assets: BigNumberish,
    shares: BigNumberish
  ];
  export type OutputTuple = [
    caller: string,
    receiver: string,
    owner: string,
    assets: bigint,
    shares: bigint
  ];
  export interface OutputObject {
    caller: string;
    receiver: string;
    owner: string;
    assets: bigint;
    shares: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace WithdrawFeeUpdatedEvent {
  export type InputTuple = [_withdrawFeeBps: BigNumberish];
  export type OutputTuple = [_withdrawFeeBps: bigint];
  export interface OutputObject {
    _withdrawFeeBps: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IDnGmxJuniorVault extends BaseContract {
  connect(runner?: ContractRunner | null): BaseContract;
  attach(addressOrName: AddressLike): this;
  deployed(): Promise<this>;

  interface: IDnGmxJuniorVaultInterface;

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

  asset: TypedContractMethod<[], [string], 'view'>;

  balanceOf: TypedContractMethod<[account: AddressLike], [bigint], 'view'>;

  convertToAssets: TypedContractMethod<
    [shares: BigNumberish],
    [bigint],
    'view'
  >;

  convertToShares: TypedContractMethod<
    [assets: BigNumberish],
    [bigint],
    'view'
  >;

  deposit: TypedContractMethod<
    [assets: BigNumberish, receiver: AddressLike],
    [bigint],
    'nonpayable'
  >;

  depositCap: TypedContractMethod<[], [bigint], 'view'>;

  getMarketValue: TypedContractMethod<
    [assetAmount: BigNumberish],
    [bigint],
    'view'
  >;

  getPriceX128: TypedContractMethod<[], [bigint], 'view'>;

  getUsdcBorrowed: TypedContractMethod<[], [bigint], 'view'>;

  getVaultMarketValue: TypedContractMethod<[], [bigint], 'view'>;

  harvestFees: TypedContractMethod<[], [void], 'nonpayable'>;

  maxDeposit: TypedContractMethod<[receiver: AddressLike], [bigint], 'view'>;

  maxMint: TypedContractMethod<[receiver: AddressLike], [bigint], 'view'>;

  maxRedeem: TypedContractMethod<[owner: AddressLike], [bigint], 'view'>;

  maxWithdraw: TypedContractMethod<[owner: AddressLike], [bigint], 'view'>;

  mint: TypedContractMethod<
    [shares: BigNumberish, receiver: AddressLike],
    [bigint],
    'nonpayable'
  >;

  previewDeposit: TypedContractMethod<[assets: BigNumberish], [bigint], 'view'>;

  previewMint: TypedContractMethod<[shares: BigNumberish], [bigint], 'view'>;

  previewRedeem: TypedContractMethod<[shares: BigNumberish], [bigint], 'view'>;

  previewWithdraw: TypedContractMethod<
    [assets: BigNumberish],
    [bigint],
    'view'
  >;

  redeem: TypedContractMethod<
    [shares: BigNumberish, receiver: AddressLike, owner: AddressLike],
    [bigint],
    'nonpayable'
  >;

  totalAssets: TypedContractMethod<[], [bigint], 'view'>;

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

  withdraw: TypedContractMethod<
    [assets: BigNumberish, receiver: AddressLike, owner: AddressLike],
    [bigint],
    'nonpayable'
  >;

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
    nameOrSignature: 'asset'
  ): TypedContractMethod<[], [string], 'view'>;
  getFunction(
    nameOrSignature: 'balanceOf'
  ): TypedContractMethod<[account: AddressLike], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'convertToAssets'
  ): TypedContractMethod<[shares: BigNumberish], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'convertToShares'
  ): TypedContractMethod<[assets: BigNumberish], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'deposit'
  ): TypedContractMethod<
    [assets: BigNumberish, receiver: AddressLike],
    [bigint],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'depositCap'
  ): TypedContractMethod<[], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'getMarketValue'
  ): TypedContractMethod<[assetAmount: BigNumberish], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'getPriceX128'
  ): TypedContractMethod<[], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'getUsdcBorrowed'
  ): TypedContractMethod<[], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'getVaultMarketValue'
  ): TypedContractMethod<[], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'harvestFees'
  ): TypedContractMethod<[], [void], 'nonpayable'>;
  getFunction(
    nameOrSignature: 'maxDeposit'
  ): TypedContractMethod<[receiver: AddressLike], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'maxMint'
  ): TypedContractMethod<[receiver: AddressLike], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'maxRedeem'
  ): TypedContractMethod<[owner: AddressLike], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'maxWithdraw'
  ): TypedContractMethod<[owner: AddressLike], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'mint'
  ): TypedContractMethod<
    [shares: BigNumberish, receiver: AddressLike],
    [bigint],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'previewDeposit'
  ): TypedContractMethod<[assets: BigNumberish], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'previewMint'
  ): TypedContractMethod<[shares: BigNumberish], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'previewRedeem'
  ): TypedContractMethod<[shares: BigNumberish], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'previewWithdraw'
  ): TypedContractMethod<[assets: BigNumberish], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'redeem'
  ): TypedContractMethod<
    [shares: BigNumberish, receiver: AddressLike, owner: AddressLike],
    [bigint],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'totalAssets'
  ): TypedContractMethod<[], [bigint], 'view'>;
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
  ): TypedContractMethod<
    [assets: BigNumberish, receiver: AddressLike, owner: AddressLike],
    [bigint],
    'nonpayable'
  >;

  getEvent(
    key: 'AdminParamsUpdated'
  ): TypedContractEvent<
    AdminParamsUpdatedEvent.InputTuple,
    AdminParamsUpdatedEvent.OutputTuple,
    AdminParamsUpdatedEvent.OutputObject
  >;
  getEvent(
    key: 'AllowancesGranted'
  ): TypedContractEvent<
    AllowancesGrantedEvent.InputTuple,
    AllowancesGrantedEvent.OutputTuple,
    AllowancesGrantedEvent.OutputObject
  >;
  getEvent(
    key: 'Approval'
  ): TypedContractEvent<
    ApprovalEvent.InputTuple,
    ApprovalEvent.OutputTuple,
    ApprovalEvent.OutputObject
  >;
  getEvent(
    key: 'Deposit'
  ): TypedContractEvent<
    DepositEvent.InputTuple,
    DepositEvent.OutputTuple,
    DepositEvent.OutputObject
  >;
  getEvent(
    key: 'DepositCapUpdated'
  ): TypedContractEvent<
    DepositCapUpdatedEvent.InputTuple,
    DepositCapUpdatedEvent.OutputTuple,
    DepositCapUpdatedEvent.OutputObject
  >;
  getEvent(
    key: 'DnGmxSeniorVaultUpdated'
  ): TypedContractEvent<
    DnGmxSeniorVaultUpdatedEvent.InputTuple,
    DnGmxSeniorVaultUpdatedEvent.OutputTuple,
    DnGmxSeniorVaultUpdatedEvent.OutputObject
  >;
  getEvent(
    key: 'EsGmxStaked'
  ): TypedContractEvent<
    EsGmxStakedEvent.InputTuple,
    EsGmxStakedEvent.OutputTuple,
    EsGmxStakedEvent.OutputObject
  >;
  getEvent(
    key: 'EsGmxVested'
  ): TypedContractEvent<
    EsGmxVestedEvent.InputTuple,
    EsGmxVestedEvent.OutputTuple,
    EsGmxVestedEvent.OutputObject
  >;
  getEvent(
    key: 'FeeParamsUpdated'
  ): TypedContractEvent<
    FeeParamsUpdatedEvent.InputTuple,
    FeeParamsUpdatedEvent.OutputTuple,
    FeeParamsUpdatedEvent.OutputObject
  >;
  getEvent(
    key: 'FeesWithdrawn'
  ): TypedContractEvent<
    FeesWithdrawnEvent.InputTuple,
    FeesWithdrawnEvent.OutputTuple,
    FeesWithdrawnEvent.OutputObject
  >;
  getEvent(
    key: 'GmxClaimed'
  ): TypedContractEvent<
    GmxClaimedEvent.InputTuple,
    GmxClaimedEvent.OutputTuple,
    GmxClaimedEvent.OutputObject
  >;
  getEvent(
    key: 'HedgeParamsUpdated'
  ): TypedContractEvent<
    HedgeParamsUpdatedEvent.InputTuple,
    HedgeParamsUpdatedEvent.OutputTuple,
    HedgeParamsUpdatedEvent.OutputObject
  >;
  getEvent(
    key: 'KeeperUpdated'
  ): TypedContractEvent<
    KeeperUpdatedEvent.InputTuple,
    KeeperUpdatedEvent.OutputTuple,
    KeeperUpdatedEvent.OutputObject
  >;
  getEvent(
    key: 'ParamsV1Updated'
  ): TypedContractEvent<
    ParamsV1UpdatedEvent.InputTuple,
    ParamsV1UpdatedEvent.OutputTuple,
    ParamsV1UpdatedEvent.OutputObject
  >;
  getEvent(
    key: 'RebalanceParamsUpdated'
  ): TypedContractEvent<
    RebalanceParamsUpdatedEvent.InputTuple,
    RebalanceParamsUpdatedEvent.OutputTuple,
    RebalanceParamsUpdatedEvent.OutputObject
  >;
  getEvent(
    key: 'Rebalanced'
  ): TypedContractEvent<
    RebalancedEvent.InputTuple,
    RebalancedEvent.OutputTuple,
    RebalancedEvent.OutputObject
  >;
  getEvent(
    key: 'ThresholdsUpdated'
  ): TypedContractEvent<
    ThresholdsUpdatedEvent.InputTuple,
    ThresholdsUpdatedEvent.OutputTuple,
    ThresholdsUpdatedEvent.OutputObject
  >;
  getEvent(
    key: 'TraderOIHedgesUpdated'
  ): TypedContractEvent<
    TraderOIHedgesUpdatedEvent.InputTuple,
    TraderOIHedgesUpdatedEvent.OutputTuple,
    TraderOIHedgesUpdatedEvent.OutputObject
  >;
  getEvent(
    key: 'Transfer'
  ): TypedContractEvent<
    TransferEvent.InputTuple,
    TransferEvent.OutputTuple,
    TransferEvent.OutputObject
  >;
  getEvent(
    key: 'Withdraw'
  ): TypedContractEvent<
    WithdrawEvent.InputTuple,
    WithdrawEvent.OutputTuple,
    WithdrawEvent.OutputObject
  >;
  getEvent(
    key: 'WithdrawFeeUpdated'
  ): TypedContractEvent<
    WithdrawFeeUpdatedEvent.InputTuple,
    WithdrawFeeUpdatedEvent.OutputTuple,
    WithdrawFeeUpdatedEvent.OutputObject
  >;

  filters: {
    'AdminParamsUpdated(address,address,uint256,address,uint16)': TypedContractEvent<
      AdminParamsUpdatedEvent.InputTuple,
      AdminParamsUpdatedEvent.OutputTuple,
      AdminParamsUpdatedEvent.OutputObject
    >;
    AdminParamsUpdated: TypedContractEvent<
      AdminParamsUpdatedEvent.InputTuple,
      AdminParamsUpdatedEvent.OutputTuple,
      AdminParamsUpdatedEvent.OutputObject
    >;

    'AllowancesGranted()': TypedContractEvent<
      AllowancesGrantedEvent.InputTuple,
      AllowancesGrantedEvent.OutputTuple,
      AllowancesGrantedEvent.OutputObject
    >;
    AllowancesGranted: TypedContractEvent<
      AllowancesGrantedEvent.InputTuple,
      AllowancesGrantedEvent.OutputTuple,
      AllowancesGrantedEvent.OutputObject
    >;

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

    'Deposit(address,address,uint256,uint256)': TypedContractEvent<
      DepositEvent.InputTuple,
      DepositEvent.OutputTuple,
      DepositEvent.OutputObject
    >;
    Deposit: TypedContractEvent<
      DepositEvent.InputTuple,
      DepositEvent.OutputTuple,
      DepositEvent.OutputObject
    >;

    'DepositCapUpdated(uint256)': TypedContractEvent<
      DepositCapUpdatedEvent.InputTuple,
      DepositCapUpdatedEvent.OutputTuple,
      DepositCapUpdatedEvent.OutputObject
    >;
    DepositCapUpdated: TypedContractEvent<
      DepositCapUpdatedEvent.InputTuple,
      DepositCapUpdatedEvent.OutputTuple,
      DepositCapUpdatedEvent.OutputObject
    >;

    'DnGmxSeniorVaultUpdated(address)': TypedContractEvent<
      DnGmxSeniorVaultUpdatedEvent.InputTuple,
      DnGmxSeniorVaultUpdatedEvent.OutputTuple,
      DnGmxSeniorVaultUpdatedEvent.OutputObject
    >;
    DnGmxSeniorVaultUpdated: TypedContractEvent<
      DnGmxSeniorVaultUpdatedEvent.InputTuple,
      DnGmxSeniorVaultUpdatedEvent.OutputTuple,
      DnGmxSeniorVaultUpdatedEvent.OutputObject
    >;

    'EsGmxStaked(uint256)': TypedContractEvent<
      EsGmxStakedEvent.InputTuple,
      EsGmxStakedEvent.OutputTuple,
      EsGmxStakedEvent.OutputObject
    >;
    EsGmxStaked: TypedContractEvent<
      EsGmxStakedEvent.InputTuple,
      EsGmxStakedEvent.OutputTuple,
      EsGmxStakedEvent.OutputObject
    >;

    'EsGmxVested(uint256)': TypedContractEvent<
      EsGmxVestedEvent.InputTuple,
      EsGmxVestedEvent.OutputTuple,
      EsGmxVestedEvent.OutputObject
    >;
    EsGmxVested: TypedContractEvent<
      EsGmxVestedEvent.InputTuple,
      EsGmxVestedEvent.OutputTuple,
      EsGmxVestedEvent.OutputObject
    >;

    'FeeParamsUpdated(uint256,address)': TypedContractEvent<
      FeeParamsUpdatedEvent.InputTuple,
      FeeParamsUpdatedEvent.OutputTuple,
      FeeParamsUpdatedEvent.OutputObject
    >;
    FeeParamsUpdated: TypedContractEvent<
      FeeParamsUpdatedEvent.InputTuple,
      FeeParamsUpdatedEvent.OutputTuple,
      FeeParamsUpdatedEvent.OutputObject
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

    'GmxClaimed(uint256)': TypedContractEvent<
      GmxClaimedEvent.InputTuple,
      GmxClaimedEvent.OutputTuple,
      GmxClaimedEvent.OutputObject
    >;
    GmxClaimed: TypedContractEvent<
      GmxClaimedEvent.InputTuple,
      GmxClaimedEvent.OutputTuple,
      GmxClaimedEvent.OutputObject
    >;

    'HedgeParamsUpdated(address,address,uint256,address,address,address)': TypedContractEvent<
      HedgeParamsUpdatedEvent.InputTuple,
      HedgeParamsUpdatedEvent.OutputTuple,
      HedgeParamsUpdatedEvent.OutputObject
    >;
    HedgeParamsUpdated: TypedContractEvent<
      HedgeParamsUpdatedEvent.InputTuple,
      HedgeParamsUpdatedEvent.OutputTuple,
      HedgeParamsUpdatedEvent.OutputObject
    >;

    'KeeperUpdated(address)': TypedContractEvent<
      KeeperUpdatedEvent.InputTuple,
      KeeperUpdatedEvent.OutputTuple,
      KeeperUpdatedEvent.OutputObject
    >;
    KeeperUpdated: TypedContractEvent<
      KeeperUpdatedEvent.InputTuple,
      KeeperUpdatedEvent.OutputTuple,
      KeeperUpdatedEvent.OutputObject
    >;

    'ParamsV1Updated(uint128,address)': TypedContractEvent<
      ParamsV1UpdatedEvent.InputTuple,
      ParamsV1UpdatedEvent.OutputTuple,
      ParamsV1UpdatedEvent.OutputObject
    >;
    ParamsV1Updated: TypedContractEvent<
      ParamsV1UpdatedEvent.InputTuple,
      ParamsV1UpdatedEvent.OutputTuple,
      ParamsV1UpdatedEvent.OutputObject
    >;

    'RebalanceParamsUpdated(uint32,uint16,uint16)': TypedContractEvent<
      RebalanceParamsUpdatedEvent.InputTuple,
      RebalanceParamsUpdatedEvent.OutputTuple,
      RebalanceParamsUpdatedEvent.OutputObject
    >;
    RebalanceParamsUpdated: TypedContractEvent<
      RebalanceParamsUpdatedEvent.InputTuple,
      RebalanceParamsUpdatedEvent.OutputTuple,
      RebalanceParamsUpdatedEvent.OutputObject
    >;

    'Rebalanced()': TypedContractEvent<
      RebalancedEvent.InputTuple,
      RebalancedEvent.OutputTuple,
      RebalancedEvent.OutputObject
    >;
    Rebalanced: TypedContractEvent<
      RebalancedEvent.InputTuple,
      RebalancedEvent.OutputTuple,
      RebalancedEvent.OutputObject
    >;

    'ThresholdsUpdated(uint16,uint16,uint16,uint128,uint128,uint128,uint128,uint128)': TypedContractEvent<
      ThresholdsUpdatedEvent.InputTuple,
      ThresholdsUpdatedEvent.OutputTuple,
      ThresholdsUpdatedEvent.OutputObject
    >;
    ThresholdsUpdated: TypedContractEvent<
      ThresholdsUpdatedEvent.InputTuple,
      ThresholdsUpdatedEvent.OutputTuple,
      ThresholdsUpdatedEvent.OutputObject
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

    'Withdraw(address,address,address,uint256,uint256)': TypedContractEvent<
      WithdrawEvent.InputTuple,
      WithdrawEvent.OutputTuple,
      WithdrawEvent.OutputObject
    >;
    Withdraw: TypedContractEvent<
      WithdrawEvent.InputTuple,
      WithdrawEvent.OutputTuple,
      WithdrawEvent.OutputObject
    >;

    'WithdrawFeeUpdated(uint256)': TypedContractEvent<
      WithdrawFeeUpdatedEvent.InputTuple,
      WithdrawFeeUpdatedEvent.OutputTuple,
      WithdrawFeeUpdatedEvent.OutputObject
    >;
    WithdrawFeeUpdated: TypedContractEvent<
      WithdrawFeeUpdatedEvent.InputTuple,
      WithdrawFeeUpdatedEvent.OutputTuple,
      WithdrawFeeUpdatedEvent.OutputObject
    >;
  };
}
