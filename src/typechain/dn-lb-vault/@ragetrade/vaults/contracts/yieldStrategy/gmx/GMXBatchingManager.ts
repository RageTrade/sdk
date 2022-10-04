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
} from '../../../../../common';

export declare namespace IGMXBatchingManager {
  export type RoundDepositStruct = {
    totalGlp: PromiseOrValue<BigNumberish>;
    totalShares: PromiseOrValue<BigNumberish>;
  };

  export type RoundDepositStructOutput = [BigNumber, BigNumber] & {
    totalGlp: BigNumber;
    totalShares: BigNumber;
  };

  export type UserDepositStruct = {
    round: PromiseOrValue<BigNumberish>;
    glpBalance: PromiseOrValue<BigNumberish>;
    unclaimedShares: PromiseOrValue<BigNumberish>;
  };

  export type UserDepositStructOutput = [BigNumber, BigNumber, BigNumber] & {
    round: BigNumber;
    glpBalance: BigNumber;
    unclaimedShares: BigNumber;
  };
}

export interface GMXBatchingManagerInterface extends utils.Interface {
  functions: {
    'addVault(address)': FunctionFragment;
    'claim(address,address,uint256)': FunctionFragment;
    'currentRound(address)': FunctionFragment;
    'depositToken(address,uint256,uint256)': FunctionFragment;
    'depositToken(address,address,uint256,uint256,address)': FunctionFragment;
    'executeBatchDeposit()': FunctionFragment;
    'glpBalance(address,address)': FunctionFragment;
    'glpBalanceAllVaults(address)': FunctionFragment;
    'grantAllowances(address)': FunctionFragment;
    'initialize(address,address,address,address,address)': FunctionFragment;
    'isVaultValid(address)': FunctionFragment;
    'keeper()': FunctionFragment;
    'owner()': FunctionFragment;
    'pauseDeposit()': FunctionFragment;
    'paused()': FunctionFragment;
    'renounceOwnership()': FunctionFragment;
    'roundDeposits(address,uint256)': FunctionFragment;
    'roundGlpBalance(address)': FunctionFragment;
    'setKeeper(address)': FunctionFragment;
    'stakingManager()': FunctionFragment;
    'stakingManagerGlpBalance()': FunctionFragment;
    'transferOwnership(address)': FunctionFragment;
    'unclaimedShares(address,address)': FunctionFragment;
    'unpauseDeposit()': FunctionFragment;
    'userDeposits(address,address)': FunctionFragment;
    'vaultBatchingState(address)': FunctionFragment;
    'vaultCount()': FunctionFragment;
    'vaults(uint256)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'addVault'
      | 'claim'
      | 'currentRound'
      | 'depositToken(address,uint256,uint256)'
      | 'depositToken(address,address,uint256,uint256,address)'
      | 'executeBatchDeposit'
      | 'glpBalance'
      | 'glpBalanceAllVaults'
      | 'grantAllowances'
      | 'initialize'
      | 'isVaultValid'
      | 'keeper'
      | 'owner'
      | 'pauseDeposit'
      | 'paused'
      | 'renounceOwnership'
      | 'roundDeposits'
      | 'roundGlpBalance'
      | 'setKeeper'
      | 'stakingManager'
      | 'stakingManagerGlpBalance'
      | 'transferOwnership'
      | 'unclaimedShares'
      | 'unpauseDeposit'
      | 'userDeposits'
      | 'vaultBatchingState'
      | 'vaultCount'
      | 'vaults'
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'addVault',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'claim',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: 'currentRound',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'depositToken(address,uint256,uint256)',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: 'depositToken(address,address,uint256,uint256,address)',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: 'executeBatchDeposit',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'glpBalance',
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'glpBalanceAllVaults',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'grantAllowances',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'initialize',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: 'isVaultValid',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: 'keeper', values?: undefined): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'pauseDeposit',
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: 'paused', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'renounceOwnership',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'roundDeposits',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'roundGlpBalance',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setKeeper',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'stakingManager',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'stakingManagerGlpBalance',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'transferOwnership',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'unclaimedShares',
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'unpauseDeposit',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'userDeposits',
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'vaultBatchingState',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'vaultCount',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'vaults',
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: 'addVault', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'claim', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'currentRound',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'depositToken(address,uint256,uint256)',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'depositToken(address,address,uint256,uint256,address)',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'executeBatchDeposit',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'glpBalance', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'glpBalanceAllVaults',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'grantAllowances',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'isVaultValid',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'keeper', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'pauseDeposit',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'paused', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'renounceOwnership',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'roundDeposits',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'roundGlpBalance',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'setKeeper', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'stakingManager',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'stakingManagerGlpBalance',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'transferOwnership',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'unclaimedShares',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'unpauseDeposit',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'userDeposits',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'vaultBatchingState',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'vaultCount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'vaults', data: BytesLike): Result;

  events: {
    'BatchDeposit(uint256,uint256,uint256)': EventFragment;
    'DepositToken(uint256,address,address,uint256,uint256)': EventFragment;
    'Initialized(uint8)': EventFragment;
    'KeeperUpdated(address)': EventFragment;
    'OwnershipTransferred(address,address)': EventFragment;
    'Paused(address)': EventFragment;
    'SharesClaimed(address,address,uint256)': EventFragment;
    'Unpaused(address)': EventFragment;
    'VaultAdded(address)': EventFragment;
    'VaultDeposit(uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'BatchDeposit'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'DepositToken'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Initialized'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'KeeperUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Paused'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'SharesClaimed'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Unpaused'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'VaultAdded'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'VaultDeposit'): EventFragment;
}

export interface BatchDepositEventObject {
  round: BigNumber;
  userGlpAmount: BigNumber;
  userShareAmount: BigNumber;
}
export type BatchDepositEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber],
  BatchDepositEventObject
>;

export type BatchDepositEventFilter = TypedEventFilter<BatchDepositEvent>;

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

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface KeeperUpdatedEventObject {
  newKeeper: string;
}
export type KeeperUpdatedEvent = TypedEvent<[string], KeeperUpdatedEventObject>;

export type KeeperUpdatedEventFilter = TypedEventFilter<KeeperUpdatedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface PausedEventObject {
  account: string;
}
export type PausedEvent = TypedEvent<[string], PausedEventObject>;

export type PausedEventFilter = TypedEventFilter<PausedEvent>;

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

export interface UnpausedEventObject {
  account: string;
}
export type UnpausedEvent = TypedEvent<[string], UnpausedEventObject>;

export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;

export interface VaultAddedEventObject {
  vault: string;
}
export type VaultAddedEvent = TypedEvent<[string], VaultAddedEventObject>;

export type VaultAddedEventFilter = TypedEventFilter<VaultAddedEvent>;

export interface VaultDepositEventObject {
  vaultGlpAmount: BigNumber;
}
export type VaultDepositEvent = TypedEvent<
  [BigNumber],
  VaultDepositEventObject
>;

export type VaultDepositEventFilter = TypedEventFilter<VaultDepositEvent>;

export interface GMXBatchingManager extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GMXBatchingManagerInterface;

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
    addVault(
      vault: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    claim(
      gmxVault: PromiseOrValue<string>,
      receiver: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    currentRound(
      vault: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    'depositToken(address,uint256,uint256)'(
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      minUSDG: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    'depositToken(address,address,uint256,uint256,address)'(
      gmxVault: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      minUSDG: PromiseOrValue<BigNumberish>,
      receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    executeBatchDeposit(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    glpBalance(
      gmxVault: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { balance: BigNumber }>;

    glpBalanceAllVaults(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { balance: BigNumber }>;

    grantAllowances(
      gmxVault: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    initialize(
      _sGlp: PromiseOrValue<string>,
      _rewardRouter: PromiseOrValue<string>,
      _glpManager: PromiseOrValue<string>,
      _stakingManager: PromiseOrValue<string>,
      _keeper: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    isVaultValid(
      vault: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    keeper(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pauseDeposit(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    roundDeposits(
      vault: PromiseOrValue<string>,
      round: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[IGMXBatchingManager.RoundDepositStructOutput]>;

    roundGlpBalance(
      vault: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    setKeeper(
      _keeper: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    stakingManager(overrides?: CallOverrides): Promise<[string]>;

    stakingManagerGlpBalance(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    unclaimedShares(
      gmxVault: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { shares: BigNumber }>;

    unpauseDeposit(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    userDeposits(
      vault: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[IGMXBatchingManager.UserDepositStructOutput]>;

    vaultBatchingState(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        currentRound: BigNumber;
        roundGlpBalance: BigNumber;
      }
    >;

    vaultCount(overrides?: CallOverrides): Promise<[number]>;

    vaults(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  addVault(
    vault: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  claim(
    gmxVault: PromiseOrValue<string>,
    receiver: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  currentRound(
    vault: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  'depositToken(address,uint256,uint256)'(
    token: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    minUSDG: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  'depositToken(address,address,uint256,uint256,address)'(
    gmxVault: PromiseOrValue<string>,
    token: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    minUSDG: PromiseOrValue<BigNumberish>,
    receiver: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  executeBatchDeposit(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  glpBalance(
    gmxVault: PromiseOrValue<string>,
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  glpBalanceAllVaults(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  grantAllowances(
    gmxVault: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  initialize(
    _sGlp: PromiseOrValue<string>,
    _rewardRouter: PromiseOrValue<string>,
    _glpManager: PromiseOrValue<string>,
    _stakingManager: PromiseOrValue<string>,
    _keeper: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  isVaultValid(
    vault: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  keeper(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  pauseDeposit(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  roundDeposits(
    vault: PromiseOrValue<string>,
    round: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<IGMXBatchingManager.RoundDepositStructOutput>;

  roundGlpBalance(
    vault: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  setKeeper(
    _keeper: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  stakingManager(overrides?: CallOverrides): Promise<string>;

  stakingManagerGlpBalance(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  unclaimedShares(
    gmxVault: PromiseOrValue<string>,
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  unpauseDeposit(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  userDeposits(
    vault: PromiseOrValue<string>,
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<IGMXBatchingManager.UserDepositStructOutput>;

  vaultBatchingState(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      currentRound: BigNumber;
      roundGlpBalance: BigNumber;
    }
  >;

  vaultCount(overrides?: CallOverrides): Promise<number>;

  vaults(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    addVault(
      vault: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    claim(
      gmxVault: PromiseOrValue<string>,
      receiver: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    currentRound(
      vault: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    'depositToken(address,uint256,uint256)'(
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      minUSDG: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    'depositToken(address,address,uint256,uint256,address)'(
      gmxVault: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      minUSDG: PromiseOrValue<BigNumberish>,
      receiver: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    executeBatchDeposit(overrides?: CallOverrides): Promise<void>;

    glpBalance(
      gmxVault: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    glpBalanceAllVaults(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    grantAllowances(
      gmxVault: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    initialize(
      _sGlp: PromiseOrValue<string>,
      _rewardRouter: PromiseOrValue<string>,
      _glpManager: PromiseOrValue<string>,
      _stakingManager: PromiseOrValue<string>,
      _keeper: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    isVaultValid(
      vault: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    keeper(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    pauseDeposit(overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    roundDeposits(
      vault: PromiseOrValue<string>,
      round: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<IGMXBatchingManager.RoundDepositStructOutput>;

    roundGlpBalance(
      vault: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setKeeper(
      _keeper: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    stakingManager(overrides?: CallOverrides): Promise<string>;

    stakingManagerGlpBalance(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    unclaimedShares(
      gmxVault: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    unpauseDeposit(overrides?: CallOverrides): Promise<void>;

    userDeposits(
      vault: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<IGMXBatchingManager.UserDepositStructOutput>;

    vaultBatchingState(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        currentRound: BigNumber;
        roundGlpBalance: BigNumber;
      }
    >;

    vaultCount(overrides?: CallOverrides): Promise<number>;

    vaults(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    'BatchDeposit(uint256,uint256,uint256)'(
      round?: PromiseOrValue<BigNumberish> | null,
      userGlpAmount?: null,
      userShareAmount?: null
    ): BatchDepositEventFilter;
    BatchDeposit(
      round?: PromiseOrValue<BigNumberish> | null,
      userGlpAmount?: null,
      userShareAmount?: null
    ): BatchDepositEventFilter;

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

    'Initialized(uint8)'(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    'KeeperUpdated(address)'(newKeeper?: null): KeeperUpdatedEventFilter;
    KeeperUpdated(newKeeper?: null): KeeperUpdatedEventFilter;

    'OwnershipTransferred(address,address)'(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    'Paused(address)'(account?: null): PausedEventFilter;
    Paused(account?: null): PausedEventFilter;

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

    'Unpaused(address)'(account?: null): UnpausedEventFilter;
    Unpaused(account?: null): UnpausedEventFilter;

    'VaultAdded(address)'(vault?: null): VaultAddedEventFilter;
    VaultAdded(vault?: null): VaultAddedEventFilter;

    'VaultDeposit(uint256)'(vaultGlpAmount?: null): VaultDepositEventFilter;
    VaultDeposit(vaultGlpAmount?: null): VaultDepositEventFilter;
  };

  estimateGas: {
    addVault(
      vault: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    claim(
      gmxVault: PromiseOrValue<string>,
      receiver: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    currentRound(
      vault: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    'depositToken(address,uint256,uint256)'(
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      minUSDG: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    'depositToken(address,address,uint256,uint256,address)'(
      gmxVault: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      minUSDG: PromiseOrValue<BigNumberish>,
      receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    executeBatchDeposit(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    glpBalance(
      gmxVault: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    glpBalanceAllVaults(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    grantAllowances(
      gmxVault: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    initialize(
      _sGlp: PromiseOrValue<string>,
      _rewardRouter: PromiseOrValue<string>,
      _glpManager: PromiseOrValue<string>,
      _stakingManager: PromiseOrValue<string>,
      _keeper: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    isVaultValid(
      vault: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    keeper(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pauseDeposit(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    roundDeposits(
      vault: PromiseOrValue<string>,
      round: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    roundGlpBalance(
      vault: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setKeeper(
      _keeper: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    stakingManager(overrides?: CallOverrides): Promise<BigNumber>;

    stakingManagerGlpBalance(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    unclaimedShares(
      gmxVault: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    unpauseDeposit(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    userDeposits(
      vault: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    vaultBatchingState(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    vaultCount(overrides?: CallOverrides): Promise<BigNumber>;

    vaults(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addVault(
      vault: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    claim(
      gmxVault: PromiseOrValue<string>,
      receiver: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    currentRound(
      vault: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    'depositToken(address,uint256,uint256)'(
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      minUSDG: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    'depositToken(address,address,uint256,uint256,address)'(
      gmxVault: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      minUSDG: PromiseOrValue<BigNumberish>,
      receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    executeBatchDeposit(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    glpBalance(
      gmxVault: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    glpBalanceAllVaults(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    grantAllowances(
      gmxVault: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      _sGlp: PromiseOrValue<string>,
      _rewardRouter: PromiseOrValue<string>,
      _glpManager: PromiseOrValue<string>,
      _stakingManager: PromiseOrValue<string>,
      _keeper: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    isVaultValid(
      vault: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    keeper(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pauseDeposit(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    roundDeposits(
      vault: PromiseOrValue<string>,
      round: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    roundGlpBalance(
      vault: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setKeeper(
      _keeper: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    stakingManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    stakingManagerGlpBalance(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    unclaimedShares(
      gmxVault: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    unpauseDeposit(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    userDeposits(
      vault: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    vaultBatchingState(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    vaultCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    vaults(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
