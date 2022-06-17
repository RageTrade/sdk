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
} from '../../../common';

export interface GovernableTestInterface extends utils.Interface {
  functions: {
    'acceptGovernanceTransfer()': FunctionFragment;
    'acceptTeamMultisigTransfer()': FunctionFragment;
    'governance()': FunctionFragment;
    'governancePending()': FunctionFragment;
    'initiateGovernanceTransfer(address)': FunctionFragment;
    'initiateTeamMultisigTransfer(address)': FunctionFragment;
    'teamMultisig()': FunctionFragment;
    'teamMultisigPending()': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'acceptGovernanceTransfer'
      | 'acceptTeamMultisigTransfer'
      | 'governance'
      | 'governancePending'
      | 'initiateGovernanceTransfer'
      | 'initiateTeamMultisigTransfer'
      | 'teamMultisig'
      | 'teamMultisigPending'
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
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: 'initiateTeamMultisigTransfer',
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: 'teamMultisig',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'teamMultisigPending',
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
  decodeFunctionResult(
    functionFragment: 'teamMultisig',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'teamMultisigPending',
    data: BytesLike
  ): Result;

  events: {
    'GovernancePending(address,address)': EventFragment;
    'GovernanceTransferred(address,address)': EventFragment;
    'TeamMultisigPending(address,address)': EventFragment;
    'TeamMultisigTransferred(address,address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'GovernancePending'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'GovernanceTransferred'): EventFragment;
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

export interface GovernableTest extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GovernableTestInterface;

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
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    acceptTeamMultisigTransfer(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    governance(overrides?: CallOverrides): Promise<[string]>;

    governancePending(overrides?: CallOverrides): Promise<[string]>;

    initiateGovernanceTransfer(
      newGovernancePending: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initiateTeamMultisigTransfer(
      newTeamMultisigPending: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    teamMultisig(overrides?: CallOverrides): Promise<[string]>;

    teamMultisigPending(overrides?: CallOverrides): Promise<[string]>;
  };

  acceptGovernanceTransfer(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  acceptTeamMultisigTransfer(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  governance(overrides?: CallOverrides): Promise<string>;

  governancePending(overrides?: CallOverrides): Promise<string>;

  initiateGovernanceTransfer(
    newGovernancePending: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initiateTeamMultisigTransfer(
    newTeamMultisigPending: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  teamMultisig(overrides?: CallOverrides): Promise<string>;

  teamMultisigPending(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    acceptGovernanceTransfer(overrides?: CallOverrides): Promise<void>;

    acceptTeamMultisigTransfer(overrides?: CallOverrides): Promise<void>;

    governance(overrides?: CallOverrides): Promise<string>;

    governancePending(overrides?: CallOverrides): Promise<string>;

    initiateGovernanceTransfer(
      newGovernancePending: string,
      overrides?: CallOverrides
    ): Promise<void>;

    initiateTeamMultisigTransfer(
      newTeamMultisigPending: string,
      overrides?: CallOverrides
    ): Promise<void>;

    teamMultisig(overrides?: CallOverrides): Promise<string>;

    teamMultisigPending(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    'GovernancePending(address,address)'(
      previousGovernancePending?: string | null,
      newGovernancePending?: string | null
    ): GovernancePendingEventFilter;
    GovernancePending(
      previousGovernancePending?: string | null,
      newGovernancePending?: string | null
    ): GovernancePendingEventFilter;

    'GovernanceTransferred(address,address)'(
      previousGovernance?: string | null,
      newGovernance?: string | null
    ): GovernanceTransferredEventFilter;
    GovernanceTransferred(
      previousGovernance?: string | null,
      newGovernance?: string | null
    ): GovernanceTransferredEventFilter;

    'TeamMultisigPending(address,address)'(
      previousTeamMultisigPending?: string | null,
      newTeamMultisigPending?: string | null
    ): TeamMultisigPendingEventFilter;
    TeamMultisigPending(
      previousTeamMultisigPending?: string | null,
      newTeamMultisigPending?: string | null
    ): TeamMultisigPendingEventFilter;

    'TeamMultisigTransferred(address,address)'(
      previousTeamMultisig?: string | null,
      newTeamMultisig?: string | null
    ): TeamMultisigTransferredEventFilter;
    TeamMultisigTransferred(
      previousTeamMultisig?: string | null,
      newTeamMultisig?: string | null
    ): TeamMultisigTransferredEventFilter;
  };

  estimateGas: {
    acceptGovernanceTransfer(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    acceptTeamMultisigTransfer(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    governance(overrides?: CallOverrides): Promise<BigNumber>;

    governancePending(overrides?: CallOverrides): Promise<BigNumber>;

    initiateGovernanceTransfer(
      newGovernancePending: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initiateTeamMultisigTransfer(
      newTeamMultisigPending: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    teamMultisig(overrides?: CallOverrides): Promise<BigNumber>;

    teamMultisigPending(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptGovernanceTransfer(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    acceptTeamMultisigTransfer(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    governance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    governancePending(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initiateGovernanceTransfer(
      newGovernancePending: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initiateTeamMultisigTransfer(
      newTeamMultisigPending: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    teamMultisig(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    teamMultisigPending(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
