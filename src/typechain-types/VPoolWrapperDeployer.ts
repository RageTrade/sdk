/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
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
import { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import { Listener, Provider } from '@ethersproject/providers';
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from './common';

export interface VPoolWrapperDeployerInterface extends utils.Interface {
  contractName: 'VPoolWrapperDeployer';
  functions: {
    'governance()': FunctionFragment;
    'proxyAdmin()': FunctionFragment;
    'setVPoolWrapperLogicAddress(address)': FunctionFragment;
    'teamMultisig()': FunctionFragment;
    'transferGovernance(address)': FunctionFragment;
    'transferTeamMultisig(address)': FunctionFragment;
    'vPoolWrapperLogicAddress()': FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: 'governance',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'proxyAdmin',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'setVPoolWrapperLogicAddress',
    values: [string]
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
  encodeFunctionData(
    functionFragment: 'vPoolWrapperLogicAddress',
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: 'governance', data: BytesLike): Result;
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
    functionFragment: 'transferGovernance',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'transferTeamMultisig',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'vPoolWrapperLogicAddress',
    data: BytesLike
  ): Result;

  events: {
    'GovernanceTransferred(address,address)': EventFragment;
    'TeamMultisigTransferred(address,address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'GovernanceTransferred'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'TeamMultisigTransferred'): EventFragment;
}

export type GovernanceTransferredEvent = TypedEvent<
  [string, string],
  { previousGovernance: string; newGovernance: string }
>;

export type GovernanceTransferredEventFilter = TypedEventFilter<GovernanceTransferredEvent>;

export type TeamMultisigTransferredEvent = TypedEvent<
  [string, string],
  { previousTeamMultisig: string; newTeamMultisig: string }
>;

export type TeamMultisigTransferredEventFilter = TypedEventFilter<TeamMultisigTransferredEvent>;

export interface VPoolWrapperDeployer extends BaseContract {
  contractName: 'VPoolWrapperDeployer';
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
    governance(overrides?: CallOverrides): Promise<[string]>;

    proxyAdmin(overrides?: CallOverrides): Promise<[string]>;

    setVPoolWrapperLogicAddress(
      _vPoolWrapperLogicAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    teamMultisig(overrides?: CallOverrides): Promise<[string]>;

    transferGovernance(
      newGovernance: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferTeamMultisig(
      newTeamMultisig: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    vPoolWrapperLogicAddress(overrides?: CallOverrides): Promise<[string]>;
  };

  governance(overrides?: CallOverrides): Promise<string>;

  proxyAdmin(overrides?: CallOverrides): Promise<string>;

  setVPoolWrapperLogicAddress(
    _vPoolWrapperLogicAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  teamMultisig(overrides?: CallOverrides): Promise<string>;

  transferGovernance(
    newGovernance: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferTeamMultisig(
    newTeamMultisig: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  vPoolWrapperLogicAddress(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    governance(overrides?: CallOverrides): Promise<string>;

    proxyAdmin(overrides?: CallOverrides): Promise<string>;

    setVPoolWrapperLogicAddress(
      _vPoolWrapperLogicAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    teamMultisig(overrides?: CallOverrides): Promise<string>;

    transferGovernance(
      newGovernance: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferTeamMultisig(
      newTeamMultisig: string,
      overrides?: CallOverrides
    ): Promise<void>;

    vPoolWrapperLogicAddress(overrides?: CallOverrides): Promise<string>;
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

    proxyAdmin(overrides?: CallOverrides): Promise<BigNumber>;

    setVPoolWrapperLogicAddress(
      _vPoolWrapperLogicAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    teamMultisig(overrides?: CallOverrides): Promise<BigNumber>;

    transferGovernance(
      newGovernance: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferTeamMultisig(
      newTeamMultisig: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    vPoolWrapperLogicAddress(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    governance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proxyAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setVPoolWrapperLogicAddress(
      _vPoolWrapperLogicAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    teamMultisig(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferGovernance(
      newGovernance: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferTeamMultisig(
      newTeamMultisig: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    vPoolWrapperLogicAddress(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
