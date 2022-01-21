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
    rTokenDecimals: BigNumberish;
  };

  export type DeployVTokenParamsStructOutput = [string, string, number] & {
    vTokenName: string;
    vTokenSymbol: string;
    rTokenDecimals: number;
  };
}

export declare namespace IClearingHouse {
  export type RageTradePoolSettingsStruct = {
    initialMarginRatio: BigNumberish;
    maintainanceMarginRatio: BigNumberish;
    twapDuration: BigNumberish;
    whitelisted: boolean;
    oracle: string;
  };

  export type RageTradePoolSettingsStructOutput = [
    number,
    number,
    number,
    boolean,
    string
  ] & {
    initialMarginRatio: number;
    maintainanceMarginRatio: number;
    twapDuration: number;
    whitelisted: boolean;
    oracle: string;
  };
}

export declare namespace RageTradeFactory {
  export type InitializePoolParamsStruct = {
    deployVTokenParams: VTokenDeployer.DeployVTokenParamsStruct;
    rageTradePoolInitialSettings: IClearingHouse.RageTradePoolSettingsStruct;
    liquidityFeePips: BigNumberish;
    protocolFeePips: BigNumberish;
  };

  export type InitializePoolParamsStructOutput = [
    VTokenDeployer.DeployVTokenParamsStructOutput,
    IClearingHouse.RageTradePoolSettingsStructOutput,
    number,
    number
  ] & {
    deployVTokenParams: VTokenDeployer.DeployVTokenParamsStructOutput;
    rageTradePoolInitialSettings: IClearingHouse.RageTradePoolSettingsStructOutput;
    liquidityFeePips: number;
    protocolFeePips: number;
  };
}

export interface RageTradeFactoryInterface extends utils.Interface {
  contractName: 'RageTradeFactory';
  functions: {
    'UNISWAP_V3_DEFAULT_FEE_TIER()': FunctionFragment;
    'UNISWAP_V3_FACTORY_ADDRESS()': FunctionFragment;
    'UNISWAP_V3_POOL_BYTE_CODE_HASH()': FunctionFragment;
    'clearingHouse()': FunctionFragment;
    'governance()': FunctionFragment;
    'initializePool(((string,string,uint8),(uint16,uint16,uint32,bool,address),uint24,uint24))': FunctionFragment;
    'proxyAdmin()': FunctionFragment;
    'setVPoolWrapperLogicAddress(address)': FunctionFragment;
    'teamMultisig()': FunctionFragment;
    'transferGovernance(address)': FunctionFragment;
    'transferTeamMultisig(address)': FunctionFragment;
    'vBase()': FunctionFragment;
    'vPoolWrapperLogicAddress()': FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: 'UNISWAP_V3_DEFAULT_FEE_TIER',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'UNISWAP_V3_FACTORY_ADDRESS',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'UNISWAP_V3_POOL_BYTE_CODE_HASH',
    values?: undefined
  ): string;
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
  encodeFunctionData(functionFragment: 'vBase', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'vPoolWrapperLogicAddress',
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: 'UNISWAP_V3_DEFAULT_FEE_TIER',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'UNISWAP_V3_FACTORY_ADDRESS',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'UNISWAP_V3_POOL_BYTE_CODE_HASH',
    data: BytesLike
  ): Result;
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
  decodeFunctionResult(functionFragment: 'vBase', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'vPoolWrapperLogicAddress',
    data: BytesLike
  ): Result;

  events: {
    'GovernanceTransferred(address,address)': EventFragment;
    'PoolInitlized(address,address,address)': EventFragment;
    'TeamMultisigTransferred(address,address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'GovernanceTransferred'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'PoolInitlized'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'TeamMultisigTransferred'): EventFragment;
}

export type GovernanceTransferredEvent = TypedEvent<
  [string, string],
  { previousGovernance: string; newGovernance: string }
>;

export type GovernanceTransferredEventFilter = TypedEventFilter<GovernanceTransferredEvent>;

export type PoolInitlizedEvent = TypedEvent<
  [string, string, string],
  { vPool: string; vToken: string; vPoolWrapper: string }
>;

export type PoolInitlizedEventFilter = TypedEventFilter<PoolInitlizedEvent>;

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
    UNISWAP_V3_DEFAULT_FEE_TIER(overrides?: CallOverrides): Promise<[number]>;

    UNISWAP_V3_FACTORY_ADDRESS(overrides?: CallOverrides): Promise<[string]>;

    UNISWAP_V3_POOL_BYTE_CODE_HASH(
      overrides?: CallOverrides
    ): Promise<[string]>;

    clearingHouse(overrides?: CallOverrides): Promise<[string]>;

    governance(overrides?: CallOverrides): Promise<[string]>;

    initializePool(
      initializePoolParams: RageTradeFactory.InitializePoolParamsStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    proxyAdmin(overrides?: CallOverrides): Promise<[string]>;

    /**
     * Admin method to set latest implementation logic for VPoolWrapper
     */
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

    vBase(overrides?: CallOverrides): Promise<[string]>;

    vPoolWrapperLogicAddress(overrides?: CallOverrides): Promise<[string]>;
  };

  UNISWAP_V3_DEFAULT_FEE_TIER(overrides?: CallOverrides): Promise<number>;

  UNISWAP_V3_FACTORY_ADDRESS(overrides?: CallOverrides): Promise<string>;

  UNISWAP_V3_POOL_BYTE_CODE_HASH(overrides?: CallOverrides): Promise<string>;

  clearingHouse(overrides?: CallOverrides): Promise<string>;

  governance(overrides?: CallOverrides): Promise<string>;

  initializePool(
    initializePoolParams: RageTradeFactory.InitializePoolParamsStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  proxyAdmin(overrides?: CallOverrides): Promise<string>;

  /**
   * Admin method to set latest implementation logic for VPoolWrapper
   */
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

  vBase(overrides?: CallOverrides): Promise<string>;

  vPoolWrapperLogicAddress(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    UNISWAP_V3_DEFAULT_FEE_TIER(overrides?: CallOverrides): Promise<number>;

    UNISWAP_V3_FACTORY_ADDRESS(overrides?: CallOverrides): Promise<string>;

    UNISWAP_V3_POOL_BYTE_CODE_HASH(overrides?: CallOverrides): Promise<string>;

    clearingHouse(overrides?: CallOverrides): Promise<string>;

    governance(overrides?: CallOverrides): Promise<string>;

    initializePool(
      initializePoolParams: RageTradeFactory.InitializePoolParamsStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    proxyAdmin(overrides?: CallOverrides): Promise<string>;

    /**
     * Admin method to set latest implementation logic for VPoolWrapper
     */
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

    vBase(overrides?: CallOverrides): Promise<string>;

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

    'PoolInitlized(address,address,address)'(
      vPool?: null,
      vToken?: null,
      vPoolWrapper?: null
    ): PoolInitlizedEventFilter;
    PoolInitlized(
      vPool?: null,
      vToken?: null,
      vPoolWrapper?: null
    ): PoolInitlizedEventFilter;

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
    UNISWAP_V3_DEFAULT_FEE_TIER(overrides?: CallOverrides): Promise<BigNumber>;

    UNISWAP_V3_FACTORY_ADDRESS(overrides?: CallOverrides): Promise<BigNumber>;

    UNISWAP_V3_POOL_BYTE_CODE_HASH(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    clearingHouse(overrides?: CallOverrides): Promise<BigNumber>;

    governance(overrides?: CallOverrides): Promise<BigNumber>;

    initializePool(
      initializePoolParams: RageTradeFactory.InitializePoolParamsStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    proxyAdmin(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Admin method to set latest implementation logic for VPoolWrapper
     */
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

    vBase(overrides?: CallOverrides): Promise<BigNumber>;

    vPoolWrapperLogicAddress(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    UNISWAP_V3_DEFAULT_FEE_TIER(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    UNISWAP_V3_FACTORY_ADDRESS(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    UNISWAP_V3_POOL_BYTE_CODE_HASH(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    clearingHouse(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    governance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initializePool(
      initializePoolParams: RageTradeFactory.InitializePoolParamsStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    proxyAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Admin method to set latest implementation logic for VPoolWrapper
     */
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

    vBase(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    vPoolWrapperLogicAddress(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}