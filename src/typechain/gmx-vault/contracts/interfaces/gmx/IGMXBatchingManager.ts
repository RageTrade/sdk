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
} from '../../../common';

export interface IGMXBatchingManagerInterface extends utils.Interface {
  functions: {
    'claim(address,address,uint256)': FunctionFragment;
    'depositToken(address,uint256,uint256)': FunctionFragment;
    'depositToken(address,address,uint256,uint256,address)': FunctionFragment;
    'executeBatchDeposit()': FunctionFragment;
    'glpBalance(address,address)': FunctionFragment;
    'glpBalanceAllVaults(address)': FunctionFragment;
    'stakingManagerGlpBalance()': FunctionFragment;
    'unclaimedShares(address,address)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'claim'
      | 'depositToken(address,uint256,uint256)'
      | 'depositToken(address,address,uint256,uint256,address)'
      | 'executeBatchDeposit'
      | 'glpBalance'
      | 'glpBalanceAllVaults'
      | 'stakingManagerGlpBalance'
      | 'unclaimedShares'
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'claim',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
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
    functionFragment: 'stakingManagerGlpBalance',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'unclaimedShares',
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: 'claim', data: BytesLike): Result;
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
    functionFragment: 'stakingManagerGlpBalance',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'unclaimedShares',
    data: BytesLike
  ): Result;

  events: {
    'BatchDeposit(uint256,uint256,uint256)': EventFragment;
    'DepositToken(uint256,address,address,uint256,uint256)': EventFragment;
    'KeeperUpdated(address)': EventFragment;
    'SharesClaimed(address,address,uint256)': EventFragment;
    'VaultAdded(address)': EventFragment;
    'VaultDeposit(uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'BatchDeposit'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'DepositToken'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'KeeperUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'SharesClaimed'): EventFragment;
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

export interface KeeperUpdatedEventObject {
  newKeeper: string;
}
export type KeeperUpdatedEvent = TypedEvent<[string], KeeperUpdatedEventObject>;

export type KeeperUpdatedEventFilter = TypedEventFilter<KeeperUpdatedEvent>;

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

export interface IGMXBatchingManager extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IGMXBatchingManagerInterface;

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
    claim(
      gmxVault: PromiseOrValue<string>,
      receiver: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

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

    stakingManagerGlpBalance(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { balance: BigNumber }>;

    unclaimedShares(
      gmxVault: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { shares: BigNumber }>;
  };

  claim(
    gmxVault: PromiseOrValue<string>,
    receiver: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

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

  stakingManagerGlpBalance(overrides?: CallOverrides): Promise<BigNumber>;

  unclaimedShares(
    gmxVault: PromiseOrValue<string>,
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    claim(
      gmxVault: PromiseOrValue<string>,
      receiver: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

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

    stakingManagerGlpBalance(overrides?: CallOverrides): Promise<BigNumber>;

    unclaimedShares(
      gmxVault: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
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

    'KeeperUpdated(address)'(newKeeper?: null): KeeperUpdatedEventFilter;
    KeeperUpdated(newKeeper?: null): KeeperUpdatedEventFilter;

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

    'VaultAdded(address)'(vault?: null): VaultAddedEventFilter;
    VaultAdded(vault?: null): VaultAddedEventFilter;

    'VaultDeposit(uint256)'(vaultGlpAmount?: null): VaultDepositEventFilter;
    VaultDeposit(vaultGlpAmount?: null): VaultDepositEventFilter;
  };

  estimateGas: {
    claim(
      gmxVault: PromiseOrValue<string>,
      receiver: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
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

    stakingManagerGlpBalance(overrides?: CallOverrides): Promise<BigNumber>;

    unclaimedShares(
      gmxVault: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    claim(
      gmxVault: PromiseOrValue<string>,
      receiver: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
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

    stakingManagerGlpBalance(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    unclaimedShares(
      gmxVault: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
