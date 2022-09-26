/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
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

export interface VPoolWrapperDeployerInterface extends utils.Interface {
  functions: {
    'acceptGovernanceTransfer()': FunctionFragment;
    'acceptTeamMultisigTransfer()': FunctionFragment;
    'governance()': FunctionFragment;
    'governancePending()': FunctionFragment;
    'initiateGovernanceTransfer(address)': FunctionFragment;
    'initiateTeamMultisigTransfer(address)': FunctionFragment;
    'proxyAdmin()': FunctionFragment;
    'setVPoolWrapperLogicAddress(address)': FunctionFragment;
    'teamMultisig()': FunctionFragment;
    'teamMultisigPending()': FunctionFragment;
    'vPoolWrapperLogicAddress()': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'acceptGovernanceTransfer'
      | 'acceptTeamMultisigTransfer'
      | 'governance'
      | 'governancePending'
      | 'initiateGovernanceTransfer'
      | 'initiateTeamMultisigTransfer'
      | 'proxyAdmin'
      | 'setVPoolWrapperLogicAddress'
      | 'teamMultisig'
      | 'teamMultisigPending'
      | 'vPoolWrapperLogicAddress'
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'acceptGovernanceTransfer',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'acceptTeamMultisigTransfer',
    values?: undefined
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
    functionFragment: 'initiateGovernanceTransfer',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'initiateTeamMultisigTransfer',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'proxyAdmin',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'setVPoolWrapperLogicAddress',
    values: [PromiseOrValue<string>]
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
    functionFragment: 'vPoolWrapperLogicAddress',
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: 'acceptGovernanceTransfer',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'acceptTeamMultisigTransfer',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'governance', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'governancePending',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'initiateGovernanceTransfer',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'initiateTeamMultisigTransfer',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'proxyAdmin', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'setVPoolWrapperLogicAddress',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'teamMultisig',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'teamMultisigPending',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'vPoolWrapperLogicAddress',
    data: BytesLike
  ): Result;

  events: {
    'GovernancePending(address,address)': EventFragment;
    'GovernanceTransferred(address,address)': EventFragment;
    'Initialized(uint8)': EventFragment;
    'TeamMultisigPending(address,address)': EventFragment;
    'TeamMultisigTransferred(address,address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'GovernancePending'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'GovernanceTransferred'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Initialized'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'TeamMultisigPending'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'TeamMultisigTransferred'): EventFragment;
}

export interface GovernancePendingEventObject {
  previousGovernancePending: string;
  newGovernancePending: string;
}
export type GovernancePendingEvent = TypedEvent<
  [string, string],
  GovernancePendingEventObject
>;

export type GovernancePendingEventFilter =
  TypedEventFilter<GovernancePendingEvent>;

export interface GovernanceTransferredEventObject {
  previousGovernance: string;
  newGovernance: string;
}
export type GovernanceTransferredEvent = TypedEvent<
  [string, string],
  GovernanceTransferredEventObject
>;

export type GovernanceTransferredEventFilter =
  TypedEventFilter<GovernanceTransferredEvent>;

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface TeamMultisigPendingEventObject {
  previousTeamMultisigPending: string;
  newTeamMultisigPending: string;
}
export type TeamMultisigPendingEvent = TypedEvent<
  [string, string],
  TeamMultisigPendingEventObject
>;

export type TeamMultisigPendingEventFilter =
  TypedEventFilter<TeamMultisigPendingEvent>;

export interface TeamMultisigTransferredEventObject {
  previousTeamMultisig: string;
  newTeamMultisig: string;
}
export type TeamMultisigTransferredEvent = TypedEvent<
  [string, string],
  TeamMultisigTransferredEventObject
>;

export type TeamMultisigTransferredEventFilter =
  TypedEventFilter<TeamMultisigTransferredEvent>;

export interface VPoolWrapperDeployer extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: VPoolWrapperDeployerInterface;

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
    acceptGovernanceTransfer(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    acceptTeamMultisigTransfer(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    governance(overrides?: CallOverrides): Promise<[string]>;

    governancePending(overrides?: CallOverrides): Promise<[string]>;

    initiateGovernanceTransfer(
      newGovernancePending: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    initiateTeamMultisigTransfer(
      newTeamMultisigPending: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    proxyAdmin(overrides?: CallOverrides): Promise<[string]>;

    setVPoolWrapperLogicAddress(
      _vPoolWrapperLogicAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    teamMultisig(overrides?: CallOverrides): Promise<[string]>;

    teamMultisigPending(overrides?: CallOverrides): Promise<[string]>;

    vPoolWrapperLogicAddress(overrides?: CallOverrides): Promise<[string]>;
  };

  acceptGovernanceTransfer(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  acceptTeamMultisigTransfer(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  governance(overrides?: CallOverrides): Promise<string>;

  governancePending(overrides?: CallOverrides): Promise<string>;

  initiateGovernanceTransfer(
    newGovernancePending: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  initiateTeamMultisigTransfer(
    newTeamMultisigPending: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  proxyAdmin(overrides?: CallOverrides): Promise<string>;

  setVPoolWrapperLogicAddress(
    _vPoolWrapperLogicAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  teamMultisig(overrides?: CallOverrides): Promise<string>;

  teamMultisigPending(overrides?: CallOverrides): Promise<string>;

  vPoolWrapperLogicAddress(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    acceptGovernanceTransfer(overrides?: CallOverrides): Promise<void>;

    acceptTeamMultisigTransfer(overrides?: CallOverrides): Promise<void>;

    governance(overrides?: CallOverrides): Promise<string>;

    governancePending(overrides?: CallOverrides): Promise<string>;

    initiateGovernanceTransfer(
      newGovernancePending: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    initiateTeamMultisigTransfer(
      newTeamMultisigPending: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    proxyAdmin(overrides?: CallOverrides): Promise<string>;

    setVPoolWrapperLogicAddress(
      _vPoolWrapperLogicAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    teamMultisig(overrides?: CallOverrides): Promise<string>;

    teamMultisigPending(overrides?: CallOverrides): Promise<string>;

    vPoolWrapperLogicAddress(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    'GovernancePending(address,address)'(
      previousGovernancePending?: PromiseOrValue<string> | null,
      newGovernancePending?: PromiseOrValue<string> | null
    ): GovernancePendingEventFilter;
    GovernancePending(
      previousGovernancePending?: PromiseOrValue<string> | null,
      newGovernancePending?: PromiseOrValue<string> | null
    ): GovernancePendingEventFilter;

    'GovernanceTransferred(address,address)'(
      previousGovernance?: PromiseOrValue<string> | null,
      newGovernance?: PromiseOrValue<string> | null
    ): GovernanceTransferredEventFilter;
    GovernanceTransferred(
      previousGovernance?: PromiseOrValue<string> | null,
      newGovernance?: PromiseOrValue<string> | null
    ): GovernanceTransferredEventFilter;

    'Initialized(uint8)'(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    'TeamMultisigPending(address,address)'(
      previousTeamMultisigPending?: PromiseOrValue<string> | null,
      newTeamMultisigPending?: PromiseOrValue<string> | null
    ): TeamMultisigPendingEventFilter;
    TeamMultisigPending(
      previousTeamMultisigPending?: PromiseOrValue<string> | null,
      newTeamMultisigPending?: PromiseOrValue<string> | null
    ): TeamMultisigPendingEventFilter;

    'TeamMultisigTransferred(address,address)'(
      previousTeamMultisig?: PromiseOrValue<string> | null,
      newTeamMultisig?: PromiseOrValue<string> | null
    ): TeamMultisigTransferredEventFilter;
    TeamMultisigTransferred(
      previousTeamMultisig?: PromiseOrValue<string> | null,
      newTeamMultisig?: PromiseOrValue<string> | null
    ): TeamMultisigTransferredEventFilter;
  };

  estimateGas: {
    acceptGovernanceTransfer(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    acceptTeamMultisigTransfer(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    governance(overrides?: CallOverrides): Promise<BigNumber>;

    governancePending(overrides?: CallOverrides): Promise<BigNumber>;

    initiateGovernanceTransfer(
      newGovernancePending: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    initiateTeamMultisigTransfer(
      newTeamMultisigPending: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    proxyAdmin(overrides?: CallOverrides): Promise<BigNumber>;

    setVPoolWrapperLogicAddress(
      _vPoolWrapperLogicAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    teamMultisig(overrides?: CallOverrides): Promise<BigNumber>;

    teamMultisigPending(overrides?: CallOverrides): Promise<BigNumber>;

    vPoolWrapperLogicAddress(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptGovernanceTransfer(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    acceptTeamMultisigTransfer(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    governance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    governancePending(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initiateGovernanceTransfer(
      newGovernancePending: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    initiateTeamMultisigTransfer(
      newTeamMultisigPending: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    proxyAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setVPoolWrapperLogicAddress(
      _vPoolWrapperLogicAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    teamMultisig(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    teamMultisigPending(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    vPoolWrapperLogicAddress(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
