/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
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
import { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import { Listener, Provider } from '@ethersproject/providers';
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from './common';

export declare namespace VTokenDeployer {
  export type DeployVTokenParamsStruct = {
    vTokenName: string;
    vTokenSymbol: string;
    cTokenDecimals: BigNumberish;
  };

  export type DeployVTokenParamsStructOutput = [string, string, number] & {
    vTokenName: string;
    vTokenSymbol: string;
    cTokenDecimals: number;
  };
}

export declare namespace IClearingHouseStructures {
  export type PoolSettingsStruct = {
    initialMarginRatioBps: BigNumberish;
    maintainanceMarginRatioBps: BigNumberish;
    maxVirtualPriceDeviationRatioBps: BigNumberish;
    twapDuration: BigNumberish;
    isAllowedForTrade: boolean;
    isCrossMargined: boolean;
    oracle: string;
  };

  export type PoolSettingsStructOutput = [
    number,
    number,
    number,
    number,
    boolean,
    boolean,
    string
  ] & {
    initialMarginRatioBps: number;
    maintainanceMarginRatioBps: number;
    maxVirtualPriceDeviationRatioBps: number;
    twapDuration: number;
    isAllowedForTrade: boolean;
    isCrossMargined: boolean;
    oracle: string;
  };
}

export declare namespace RageTradeFactory {
  export type InitializePoolParamsStruct = {
    deployVTokenParams: VTokenDeployer.DeployVTokenParamsStruct;
    poolInitialSettings: IClearingHouseStructures.PoolSettingsStruct;
    liquidityFeePips: BigNumberish;
    protocolFeePips: BigNumberish;
    slotsToInitialize: BigNumberish;
  };

  export type InitializePoolParamsStructOutput = [
    VTokenDeployer.DeployVTokenParamsStructOutput,
    IClearingHouseStructures.PoolSettingsStructOutput,
    number,
    number,
    number
  ] & {
    deployVTokenParams: VTokenDeployer.DeployVTokenParamsStructOutput;
    poolInitialSettings: IClearingHouseStructures.PoolSettingsStructOutput;
    liquidityFeePips: number;
    protocolFeePips: number;
    slotsToInitialize: number;
  };
}

export interface RageTradeFactoryInterface extends utils.Interface {
  contractName: 'RageTradeFactory';
  functions: {
    'clearingHouse()': FunctionFragment;
    'governance()': FunctionFragment;
    'initializePool(((string,string,uint8),(uint16,uint16,uint16,uint32,bool,bool,address),uint24,uint24,uint16))': FunctionFragment;
    'proxyAdmin()': FunctionFragment;
    'setVPoolWrapperLogicAddress(address)': FunctionFragment;
    'teamMultisig()': FunctionFragment;
    'transferGovernance(address)': FunctionFragment;
    'transferTeamMultisig(address)': FunctionFragment;
    'vPoolWrapperLogicAddress()': FunctionFragment;
    'vQuote()': FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: 'clearingHouse',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'governance',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'initializePool',
    values: [RageTradeFactory.InitializePoolParamsStruct]
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
  encodeFunctionData(functionFragment: 'vQuote', values?: undefined): string;

  decodeFunctionResult(
    functionFragment: 'clearingHouse',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'governance', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'initializePool',
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
  decodeFunctionResult(functionFragment: 'vQuote', data: BytesLike): Result;

  events: {
    'GovernanceTransferred(address,address)': EventFragment;
    'PoolInitialized(address,address,address)': EventFragment;
    'TeamMultisigTransferred(address,address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'GovernanceTransferred'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'PoolInitialized'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'TeamMultisigTransferred'): EventFragment;
}

export type GovernanceTransferredEvent = TypedEvent<
  [string, string],
  { previousGovernance: string; newGovernance: string }
>;

export type GovernanceTransferredEventFilter = TypedEventFilter<GovernanceTransferredEvent>;

export type PoolInitializedEvent = TypedEvent<
  [string, string, string],
  { vPool: string; vToken: string; vPoolWrapper: string }
>;

export type PoolInitializedEventFilter = TypedEventFilter<PoolInitializedEvent>;

export type TeamMultisigTransferredEvent = TypedEvent<
  [string, string],
  { previousTeamMultisig: string; newTeamMultisig: string }
>;

export type TeamMultisigTransferredEventFilter = TypedEventFilter<TeamMultisigTransferredEvent>;

export interface RageTradeFactory extends BaseContract {
  contractName: 'RageTradeFactory';
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RageTradeFactoryInterface;

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
    clearingHouse(overrides?: CallOverrides): Promise<[string]>;

    governance(overrides?: CallOverrides): Promise<[string]>;

    initializePool(
      initializePoolParams: RageTradeFactory.InitializePoolParamsStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

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

    vQuote(overrides?: CallOverrides): Promise<[string]>;
  };

  clearingHouse(overrides?: CallOverrides): Promise<string>;

  governance(overrides?: CallOverrides): Promise<string>;

  initializePool(
    initializePoolParams: RageTradeFactory.InitializePoolParamsStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

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

  vQuote(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    clearingHouse(overrides?: CallOverrides): Promise<string>;

    governance(overrides?: CallOverrides): Promise<string>;

    initializePool(
      initializePoolParams: RageTradeFactory.InitializePoolParamsStruct,
      overrides?: CallOverrides
    ): Promise<void>;

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

    vQuote(overrides?: CallOverrides): Promise<string>;
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

    'PoolInitialized(address,address,address)'(
      vPool?: null,
      vToken?: null,
      vPoolWrapper?: null
    ): PoolInitializedEventFilter;
    PoolInitialized(
      vPool?: null,
      vToken?: null,
      vPoolWrapper?: null
    ): PoolInitializedEventFilter;

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
    clearingHouse(overrides?: CallOverrides): Promise<BigNumber>;

    governance(overrides?: CallOverrides): Promise<BigNumber>;

    initializePool(
      initializePoolParams: RageTradeFactory.InitializePoolParamsStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

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

    vQuote(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    clearingHouse(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    governance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initializePool(
      initializePoolParams: RageTradeFactory.InitializePoolParamsStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

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

    vQuote(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
