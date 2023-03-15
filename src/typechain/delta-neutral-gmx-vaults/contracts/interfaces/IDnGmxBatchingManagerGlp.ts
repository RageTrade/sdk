/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from '../../common';

export declare namespace IDnGmxBatchingManagerGlp {
  export type RoundDepositStruct = {
    totalAssets: PromiseOrValue<BigNumberish>;
    totalShares: PromiseOrValue<BigNumberish>;
  };

  export type RoundDepositStructOutput = [BigNumber, BigNumber] & {
    totalAssets: BigNumber;
    totalShares: BigNumber;
  };
}

export interface IDnGmxBatchingManagerGlpInterface extends utils.Interface {
  functions: {
    'assetBalance(address)': FunctionFragment;
    'claim(address,uint256)': FunctionFragment;
    'currentRound()': FunctionFragment;
    'deposit(uint256,address)': FunctionFragment;
    'executeBatch(uint128)': FunctionFragment;
    'roundAssetBalance()': FunctionFragment;
    'roundDeposits(uint256)': FunctionFragment;
    'unclaimedShares(address)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'assetBalance'
      | 'claim'
      | 'currentRound'
      | 'deposit'
      | 'executeBatch'
      | 'roundAssetBalance'
      | 'roundDeposits'
      | 'unclaimedShares'
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'assetBalance',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'claim',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'currentRound',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'deposit',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'executeBatch',
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'roundAssetBalance',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'roundDeposits',
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'unclaimedShares',
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: 'assetBalance',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'claim', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'currentRound',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'deposit', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'executeBatch',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'roundAssetBalance',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'roundDeposits',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'unclaimedShares',
    data: BytesLike
  ): Result;

  events: {
    'BatchDeposit(uint256,uint256,uint256,uint256)': EventFragment;
    'ClaimedAndRedeemed(address,address,uint256,uint256)': EventFragment;
    'DepositCapUpdated(uint256)': EventFragment;
    'DepositToken(uint256,address,address,uint256,uint256)': EventFragment;
    'KeeperUpdated(address)': EventFragment;
    'PartialBatchDeposit(uint256,uint256,uint256)': EventFragment;
    'SharesClaimed(address,address,uint256)': EventFragment;
    'TargetAssetCapUpdated(uint256)': EventFragment;
    'ThresholdsUpdated(uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'BatchDeposit'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'ClaimedAndRedeemed'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'DepositCapUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'DepositToken'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'KeeperUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'PartialBatchDeposit'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'SharesClaimed'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'TargetAssetCapUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'ThresholdsUpdated'): EventFragment;
}

export interface BatchDepositEventObject {
  round: BigNumber;
  totalAssets: BigNumber;
  userGlpAmount: BigNumber;
  userShareAmount: BigNumber;
}
export type BatchDepositEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, BigNumber],
  BatchDepositEventObject
>;

export type BatchDepositEventFilter = TypedEventFilter<BatchDepositEvent>;

export interface ClaimedAndRedeemedEventObject {
  claimer: string;
  receiver: string;
  shares: BigNumber;
  assetsReceived: BigNumber;
}
export type ClaimedAndRedeemedEvent = TypedEvent<
  [string, string, BigNumber, BigNumber],
  ClaimedAndRedeemedEventObject
>;

export type ClaimedAndRedeemedEventFilter =
  TypedEventFilter<ClaimedAndRedeemedEvent>;

export interface DepositCapUpdatedEventObject {
  newDepositCap: BigNumber;
}
export type DepositCapUpdatedEvent = TypedEvent<
  [BigNumber],
  DepositCapUpdatedEventObject
>;

export type DepositCapUpdatedEventFilter =
  TypedEventFilter<DepositCapUpdatedEvent>;

export interface DepositTokenEventObject {
  round: BigNumber;
  token: string;
  receiver: string;
  amount: BigNumber;
  glpStaked: BigNumber;
}
export type DepositTokenEvent = TypedEvent<
  [BigNumber, string, string, BigNumber, BigNumber],
  DepositTokenEventObject
>;

export type DepositTokenEventFilter = TypedEventFilter<DepositTokenEvent>;

export interface KeeperUpdatedEventObject {
  newKeeper: string;
}
export type KeeperUpdatedEvent = TypedEvent<[string], KeeperUpdatedEventObject>;

export type KeeperUpdatedEventFilter = TypedEventFilter<KeeperUpdatedEvent>;

export interface PartialBatchDepositEventObject {
  round: BigNumber;
  partialGlpAmount: BigNumber;
  partialShareAmount: BigNumber;
}
export type PartialBatchDepositEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber],
  PartialBatchDepositEventObject
>;

export type PartialBatchDepositEventFilter =
  TypedEventFilter<PartialBatchDepositEvent>;

export interface SharesClaimedEventObject {
  from: string;
  receiver: string;
  claimAmount: BigNumber;
}
export type SharesClaimedEvent = TypedEvent<
  [string, string, BigNumber],
  SharesClaimedEventObject
>;

export type SharesClaimedEventFilter = TypedEventFilter<SharesClaimedEvent>;

export interface TargetAssetCapUpdatedEventObject {
  newTargeAssetCap: BigNumber;
}
export type TargetAssetCapUpdatedEvent = TypedEvent<
  [BigNumber],
  TargetAssetCapUpdatedEventObject
>;

export type TargetAssetCapUpdatedEventFilter =
  TypedEventFilter<TargetAssetCapUpdatedEvent>;

export interface ThresholdsUpdatedEventObject {
  minGlpDepositThreshold: BigNumber;
}
export type ThresholdsUpdatedEvent = TypedEvent<
  [BigNumber],
  ThresholdsUpdatedEventObject
>;

export type ThresholdsUpdatedEventFilter =
  TypedEventFilter<ThresholdsUpdatedEvent>;

export interface IDnGmxBatchingManagerGlp extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IDnGmxBatchingManagerGlpInterface;

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
    assetBalance(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { balance: BigNumber }>;

    claim(
      receiver: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    currentRound(overrides?: CallOverrides): Promise<[BigNumber]>;

    deposit(
      amount: PromiseOrValue<BigNumberish>,
      receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    executeBatch(
      sGlpToDeposit: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    roundAssetBalance(overrides?: CallOverrides): Promise<[BigNumber]>;

    roundDeposits(
      round: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[IDnGmxBatchingManagerGlp.RoundDepositStructOutput]>;

    unclaimedShares(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { shares: BigNumber }>;
  };

  assetBalance(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  claim(
    receiver: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  currentRound(overrides?: CallOverrides): Promise<BigNumber>;

  deposit(
    amount: PromiseOrValue<BigNumberish>,
    receiver: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  executeBatch(
    sGlpToDeposit: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  roundAssetBalance(overrides?: CallOverrides): Promise<BigNumber>;

  roundDeposits(
    round: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<IDnGmxBatchingManagerGlp.RoundDepositStructOutput>;

  unclaimedShares(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    assetBalance(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claim(
      receiver: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    currentRound(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      amount: PromiseOrValue<BigNumberish>,
      receiver: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    executeBatch(
      sGlpToDeposit: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    roundAssetBalance(overrides?: CallOverrides): Promise<BigNumber>;

    roundDeposits(
      round: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<IDnGmxBatchingManagerGlp.RoundDepositStructOutput>;

    unclaimedShares(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    'BatchDeposit(uint256,uint256,uint256,uint256)'(
      round?: PromiseOrValue<BigNumberish> | null,
      totalAssets?: null,
      userGlpAmount?: null,
      userShareAmount?: null
    ): BatchDepositEventFilter;
    BatchDeposit(
      round?: PromiseOrValue<BigNumberish> | null,
      totalAssets?: null,
      userGlpAmount?: null,
      userShareAmount?: null
    ): BatchDepositEventFilter;

    'ClaimedAndRedeemed(address,address,uint256,uint256)'(
      claimer?: PromiseOrValue<string> | null,
      receiver?: PromiseOrValue<string> | null,
      shares?: null,
      assetsReceived?: null
    ): ClaimedAndRedeemedEventFilter;
    ClaimedAndRedeemed(
      claimer?: PromiseOrValue<string> | null,
      receiver?: PromiseOrValue<string> | null,
      shares?: null,
      assetsReceived?: null
    ): ClaimedAndRedeemedEventFilter;

    'DepositCapUpdated(uint256)'(
      newDepositCap?: null
    ): DepositCapUpdatedEventFilter;
    DepositCapUpdated(newDepositCap?: null): DepositCapUpdatedEventFilter;

    'DepositToken(uint256,address,address,uint256,uint256)'(
      round?: PromiseOrValue<BigNumberish> | null,
      token?: PromiseOrValue<string> | null,
      receiver?: PromiseOrValue<string> | null,
      amount?: null,
      glpStaked?: null
    ): DepositTokenEventFilter;
    DepositToken(
      round?: PromiseOrValue<BigNumberish> | null,
      token?: PromiseOrValue<string> | null,
      receiver?: PromiseOrValue<string> | null,
      amount?: null,
      glpStaked?: null
    ): DepositTokenEventFilter;

    'KeeperUpdated(address)'(newKeeper?: null): KeeperUpdatedEventFilter;
    KeeperUpdated(newKeeper?: null): KeeperUpdatedEventFilter;

    'PartialBatchDeposit(uint256,uint256,uint256)'(
      round?: PromiseOrValue<BigNumberish> | null,
      partialGlpAmount?: null,
      partialShareAmount?: null
    ): PartialBatchDepositEventFilter;
    PartialBatchDeposit(
      round?: PromiseOrValue<BigNumberish> | null,
      partialGlpAmount?: null,
      partialShareAmount?: null
    ): PartialBatchDepositEventFilter;

    'SharesClaimed(address,address,uint256)'(
      from?: PromiseOrValue<string> | null,
      receiver?: PromiseOrValue<string> | null,
      claimAmount?: null
    ): SharesClaimedEventFilter;
    SharesClaimed(
      from?: PromiseOrValue<string> | null,
      receiver?: PromiseOrValue<string> | null,
      claimAmount?: null
    ): SharesClaimedEventFilter;

    'TargetAssetCapUpdated(uint256)'(
      newTargeAssetCap?: null
    ): TargetAssetCapUpdatedEventFilter;
    TargetAssetCapUpdated(
      newTargeAssetCap?: null
    ): TargetAssetCapUpdatedEventFilter;

    'ThresholdsUpdated(uint256)'(
      minGlpDepositThreshold?: null
    ): ThresholdsUpdatedEventFilter;
    ThresholdsUpdated(
      minGlpDepositThreshold?: null
    ): ThresholdsUpdatedEventFilter;
  };

  estimateGas: {
    assetBalance(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claim(
      receiver: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    currentRound(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      amount: PromiseOrValue<BigNumberish>,
      receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    executeBatch(
      sGlpToDeposit: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    roundAssetBalance(overrides?: CallOverrides): Promise<BigNumber>;

    roundDeposits(
      round: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    unclaimedShares(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    assetBalance(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claim(
      receiver: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    currentRound(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deposit(
      amount: PromiseOrValue<BigNumberish>,
      receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    executeBatch(
      sGlpToDeposit: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    roundAssetBalance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    roundDeposits(
      round: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    unclaimedShares(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
