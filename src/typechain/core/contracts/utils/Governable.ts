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
} from '../../common';

export interface GovernableInterface extends utils.Interface {
  functions: {
    'governance()': FunctionFragment;
    'teamMultisig()': FunctionFragment;
    'transferGovernance(address)': FunctionFragment;
    'transferTeamMultisig(address)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'governance'
      | 'teamMultisig'
      | 'transferGovernance'
      | 'transferTeamMultisig'
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'governance',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'teamMultisig',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'transferGovernance',
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: 'transferTeamMultisig',
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: 'governance', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'teamMultisig',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'transferGovernance',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'transferTeamMultisig',
    data: BytesLike
  ): Result;

  events: {
    'GovernanceTransferred(address,address)': EventFragment;
    'TeamMultisigTransferred(address,address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'GovernanceTransferred'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'TeamMultisigTransferred'): EventFragment;
}

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

export interface Governable extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GovernableInterface;

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
    governance(overrides?: CallOverrides): Promise<[string]>;

    teamMultisig(overrides?: CallOverrides): Promise<[string]>;

    transferGovernance(
      newGovernance: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferTeamMultisig(
      newTeamMultisig: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  governance(overrides?: CallOverrides): Promise<string>;

  teamMultisig(overrides?: CallOverrides): Promise<string>;

  transferGovernance(
    newGovernance: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferTeamMultisig(
    newTeamMultisig: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    governance(overrides?: CallOverrides): Promise<string>;

    teamMultisig(overrides?: CallOverrides): Promise<string>;

    transferGovernance(
      newGovernance: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferTeamMultisig(
      newTeamMultisig: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    'GovernanceTransferred(address,address)'(
      previousGovernance?: string | null,
      newGovernance?: string | null
    ): GovernanceTransferredEventFilter;
    GovernanceTransferred(
      previousGovernance?: string | null,
      newGovernance?: string | null
    ): GovernanceTransferredEventFilter;

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
    governance(overrides?: CallOverrides): Promise<BigNumber>;

    teamMultisig(overrides?: CallOverrides): Promise<BigNumber>;

    transferGovernance(
      newGovernance: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferTeamMultisig(
      newTeamMultisig: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    governance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    teamMultisig(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferGovernance(
      newGovernance: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferTeamMultisig(
      newTeamMultisig: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}