/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from 'ethers';
import { BytesLike } from '@ethersproject/bytes';
import { Listener, Provider } from '@ethersproject/providers';
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi';
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from './common';

export interface TxGasPriceLimitInterface extends ethers.utils.Interface {
  functions: {
    'governance()': FunctionFragment;
    'setTxGasPriceLimit(uint256)': FunctionFragment;
    'teamMultisig()': FunctionFragment;
    'transferGovernance(address)': FunctionFragment;
    'transferTeamMultisig(address)': FunctionFragment;
    'txGasPriceLimit()': FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: 'governance',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'setTxGasPriceLimit',
    values: [BigNumberish]
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
    functionFragment: 'txGasPriceLimit',
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: 'governance', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'setTxGasPriceLimit',
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
    functionFragment: 'txGasPriceLimit',
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

export interface TxGasPriceLimit extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TxGasPriceLimitInterface;

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

    setTxGasPriceLimit(
      _txGasPriceLimit: BigNumberish,
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

    txGasPriceLimit(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  governance(overrides?: CallOverrides): Promise<string>;

  setTxGasPriceLimit(
    _txGasPriceLimit: BigNumberish,
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

  txGasPriceLimit(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    governance(overrides?: CallOverrides): Promise<string>;

    setTxGasPriceLimit(
      _txGasPriceLimit: BigNumberish,
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

    txGasPriceLimit(overrides?: CallOverrides): Promise<BigNumber>;
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

    setTxGasPriceLimit(
      _txGasPriceLimit: BigNumberish,
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

    txGasPriceLimit(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    governance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setTxGasPriceLimit(
      _txGasPriceLimit: BigNumberish,
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

    txGasPriceLimit(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
