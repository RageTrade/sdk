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
} from '../common';

export interface DnGmxRouterInterface extends utils.Interface {
  functions: {
    'deposit(uint256,address)': FunctionFragment;
    'dnGmxBatchingManager()': FunctionFragment;
    'dnGmxJIT()': FunctionFragment;
    'dnGmxJuniorVault()': FunctionFragment;
    'executeBatchDeposit()': FunctionFragment;
    'initialize(address,address,address,address)': FunctionFragment;
    'owner()': FunctionFragment;
    'renounceOwnership()': FunctionFragment;
    'sGLP()': FunctionFragment;
    'transferOwnership(address)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'deposit'
      | 'dnGmxBatchingManager'
      | 'dnGmxJIT'
      | 'dnGmxJuniorVault'
      | 'executeBatchDeposit'
      | 'initialize'
      | 'owner'
      | 'renounceOwnership'
      | 'sGLP'
      | 'transferOwnership'
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'deposit',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'dnGmxBatchingManager',
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: 'dnGmxJIT', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'dnGmxJuniorVault',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'executeBatchDeposit',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'initialize',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'renounceOwnership',
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: 'sGLP', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'transferOwnership',
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: 'deposit', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'dnGmxBatchingManager',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'dnGmxJIT', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'dnGmxJuniorVault',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'executeBatchDeposit',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'renounceOwnership',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'sGLP', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'transferOwnership',
    data: BytesLike
  ): Result;

  events: {
    'Initialized(uint8)': EventFragment;
    'OwnershipTransferred(address,address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'Initialized'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
}

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

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

export interface DnGmxRouter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DnGmxRouterInterface;

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
    deposit(
      amount: PromiseOrValue<BigNumberish>,
      receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    dnGmxBatchingManager(overrides?: CallOverrides): Promise<[string]>;

    dnGmxJIT(overrides?: CallOverrides): Promise<[string]>;

    dnGmxJuniorVault(overrides?: CallOverrides): Promise<[string]>;

    executeBatchDeposit(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    initialize(
      _dnGmxJuniorVault: PromiseOrValue<string>,
      _dnGmxBatchingManager: PromiseOrValue<string>,
      _dnGmxJIT: PromiseOrValue<string>,
      _sGLP: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    sGLP(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  deposit(
    amount: PromiseOrValue<BigNumberish>,
    receiver: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  dnGmxBatchingManager(overrides?: CallOverrides): Promise<string>;

  dnGmxJIT(overrides?: CallOverrides): Promise<string>;

  dnGmxJuniorVault(overrides?: CallOverrides): Promise<string>;

  executeBatchDeposit(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  initialize(
    _dnGmxJuniorVault: PromiseOrValue<string>,
    _dnGmxBatchingManager: PromiseOrValue<string>,
    _dnGmxJIT: PromiseOrValue<string>,
    _sGLP: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  sGLP(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    deposit(
      amount: PromiseOrValue<BigNumberish>,
      receiver: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    dnGmxBatchingManager(overrides?: CallOverrides): Promise<string>;

    dnGmxJIT(overrides?: CallOverrides): Promise<string>;

    dnGmxJuniorVault(overrides?: CallOverrides): Promise<string>;

    executeBatchDeposit(overrides?: CallOverrides): Promise<void>;

    initialize(
      _dnGmxJuniorVault: PromiseOrValue<string>,
      _dnGmxBatchingManager: PromiseOrValue<string>,
      _dnGmxJIT: PromiseOrValue<string>,
      _sGLP: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    sGLP(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    'Initialized(uint8)'(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    'OwnershipTransferred(address,address)'(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    deposit(
      amount: PromiseOrValue<BigNumberish>,
      receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    dnGmxBatchingManager(overrides?: CallOverrides): Promise<BigNumber>;

    dnGmxJIT(overrides?: CallOverrides): Promise<BigNumber>;

    dnGmxJuniorVault(overrides?: CallOverrides): Promise<BigNumber>;

    executeBatchDeposit(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    initialize(
      _dnGmxJuniorVault: PromiseOrValue<string>,
      _dnGmxBatchingManager: PromiseOrValue<string>,
      _dnGmxJIT: PromiseOrValue<string>,
      _sGLP: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    sGLP(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    deposit(
      amount: PromiseOrValue<BigNumberish>,
      receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    dnGmxBatchingManager(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    dnGmxJIT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    dnGmxJuniorVault(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    executeBatchDeposit(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      _dnGmxJuniorVault: PromiseOrValue<string>,
      _dnGmxBatchingManager: PromiseOrValue<string>,
      _dnGmxJIT: PromiseOrValue<string>,
      _sGLP: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    sGLP(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}