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
} from '../../common';

export interface DnGmxTraderHedgeStrategyInterface extends utils.Interface {
  functions: {
    'btcTraderOIHedge()': FunctionFragment;
    'ethTraderOIHedge()': FunctionFragment;
    'glp()': FunctionFragment;
    'glpManager()': FunctionFragment;
    'gmxVault()': FunctionFragment;
    'initialize(address,address,address,address,address,address,address)': FunctionFragment;
    'juniorVault()': FunctionFragment;
    'keeper()': FunctionFragment;
    'overrideTraderOIHedges(int128,int128)': FunctionFragment;
    'owner()': FunctionFragment;
    'renounceOwnership()': FunctionFragment;
    'setKeeper(address)': FunctionFragment;
    'setTraderOIHedgeBps(uint16)': FunctionFragment;
    'setTraderOIHedges()': FunctionFragment;
    'transferOwnership(address)': FunctionFragment;
    'wbtc()': FunctionFragment;
    'weth()': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'btcTraderOIHedge'
      | 'ethTraderOIHedge'
      | 'glp'
      | 'glpManager'
      | 'gmxVault'
      | 'initialize'
      | 'juniorVault'
      | 'keeper'
      | 'overrideTraderOIHedges'
      | 'owner'
      | 'renounceOwnership'
      | 'setKeeper'
      | 'setTraderOIHedgeBps'
      | 'setTraderOIHedges'
      | 'transferOwnership'
      | 'wbtc'
      | 'weth'
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'btcTraderOIHedge',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'ethTraderOIHedge',
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: 'glp', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'glpManager',
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: 'gmxVault', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'initialize',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: 'juniorVault',
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: 'keeper', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'overrideTraderOIHedges',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'renounceOwnership',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'setKeeper',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setTraderOIHedgeBps',
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setTraderOIHedges',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'transferOwnership',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: 'wbtc', values?: undefined): string;
  encodeFunctionData(functionFragment: 'weth', values?: undefined): string;

  decodeFunctionResult(
    functionFragment: 'btcTraderOIHedge',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'ethTraderOIHedge',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'glp', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'glpManager', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'gmxVault', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'juniorVault',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'keeper', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'overrideTraderOIHedges',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'renounceOwnership',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'setKeeper', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'setTraderOIHedgeBps',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'setTraderOIHedges',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'transferOwnership',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'wbtc', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'weth', data: BytesLike): Result;

  events: {
    'Initialized(uint8)': EventFragment;
    'KeeperUpdated(address,address)': EventFragment;
    'OwnershipTransferred(address,address)': EventFragment;
    'TraderOIHedgeBpsUpdated(uint256)': EventFragment;
    'TraderOIHedgesUpdated(int256,int256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'Initialized'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'KeeperUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'TraderOIHedgeBpsUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'TraderOIHedgesUpdated'): EventFragment;
}

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface KeeperUpdatedEventObject {
  oldKeeper: string;
  newKeeper: string;
}
export type KeeperUpdatedEvent = TypedEvent<
  [string, string],
  KeeperUpdatedEventObject
>;

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

export interface TraderOIHedgeBpsUpdatedEventObject {
  traderOIHedgeBps: BigNumber;
}
export type TraderOIHedgeBpsUpdatedEvent = TypedEvent<
  [BigNumber],
  TraderOIHedgeBpsUpdatedEventObject
>;

export type TraderOIHedgeBpsUpdatedEventFilter =
  TypedEventFilter<TraderOIHedgeBpsUpdatedEvent>;

export interface TraderOIHedgesUpdatedEventObject {
  btcTraderOIHedge: BigNumber;
  ethTraderOIHedge: BigNumber;
}
export type TraderOIHedgesUpdatedEvent = TypedEvent<
  [BigNumber, BigNumber],
  TraderOIHedgesUpdatedEventObject
>;

export type TraderOIHedgesUpdatedEventFilter =
  TypedEventFilter<TraderOIHedgesUpdatedEvent>;

export interface DnGmxTraderHedgeStrategy extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DnGmxTraderHedgeStrategyInterface;

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
    btcTraderOIHedge(overrides?: CallOverrides): Promise<[BigNumber]>;

    ethTraderOIHedge(overrides?: CallOverrides): Promise<[BigNumber]>;

    glp(overrides?: CallOverrides): Promise<[string]>;

    glpManager(overrides?: CallOverrides): Promise<[string]>;

    gmxVault(overrides?: CallOverrides): Promise<[string]>;

    initialize(
      _keeper: PromiseOrValue<string>,
      _gmxVault: PromiseOrValue<string>,
      _glpManager: PromiseOrValue<string>,
      _juniorVault: PromiseOrValue<string>,
      _glp: PromiseOrValue<string>,
      _weth: PromiseOrValue<string>,
      _wbtc: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    juniorVault(overrides?: CallOverrides): Promise<[string]>;

    keeper(overrides?: CallOverrides): Promise<[string]>;

    overrideTraderOIHedges(
      _btcTraderOIHedge: PromiseOrValue<BigNumberish>,
      _ethTraderOIHedge: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setKeeper(
      _keeper: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setTraderOIHedgeBps(
      _traderOIHedgeBps: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setTraderOIHedges(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    wbtc(overrides?: CallOverrides): Promise<[string]>;

    weth(overrides?: CallOverrides): Promise<[string]>;
  };

  btcTraderOIHedge(overrides?: CallOverrides): Promise<BigNumber>;

  ethTraderOIHedge(overrides?: CallOverrides): Promise<BigNumber>;

  glp(overrides?: CallOverrides): Promise<string>;

  glpManager(overrides?: CallOverrides): Promise<string>;

  gmxVault(overrides?: CallOverrides): Promise<string>;

  initialize(
    _keeper: PromiseOrValue<string>,
    _gmxVault: PromiseOrValue<string>,
    _glpManager: PromiseOrValue<string>,
    _juniorVault: PromiseOrValue<string>,
    _glp: PromiseOrValue<string>,
    _weth: PromiseOrValue<string>,
    _wbtc: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  juniorVault(overrides?: CallOverrides): Promise<string>;

  keeper(overrides?: CallOverrides): Promise<string>;

  overrideTraderOIHedges(
    _btcTraderOIHedge: PromiseOrValue<BigNumberish>,
    _ethTraderOIHedge: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setKeeper(
    _keeper: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setTraderOIHedgeBps(
    _traderOIHedgeBps: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setTraderOIHedges(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  wbtc(overrides?: CallOverrides): Promise<string>;

  weth(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    btcTraderOIHedge(overrides?: CallOverrides): Promise<BigNumber>;

    ethTraderOIHedge(overrides?: CallOverrides): Promise<BigNumber>;

    glp(overrides?: CallOverrides): Promise<string>;

    glpManager(overrides?: CallOverrides): Promise<string>;

    gmxVault(overrides?: CallOverrides): Promise<string>;

    initialize(
      _keeper: PromiseOrValue<string>,
      _gmxVault: PromiseOrValue<string>,
      _glpManager: PromiseOrValue<string>,
      _juniorVault: PromiseOrValue<string>,
      _glp: PromiseOrValue<string>,
      _weth: PromiseOrValue<string>,
      _wbtc: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    juniorVault(overrides?: CallOverrides): Promise<string>;

    keeper(overrides?: CallOverrides): Promise<string>;

    overrideTraderOIHedges(
      _btcTraderOIHedge: PromiseOrValue<BigNumberish>,
      _ethTraderOIHedge: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setKeeper(
      _keeper: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setTraderOIHedgeBps(
      _traderOIHedgeBps: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setTraderOIHedges(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    wbtc(overrides?: CallOverrides): Promise<string>;

    weth(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    'Initialized(uint8)'(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    'KeeperUpdated(address,address)'(
      oldKeeper?: PromiseOrValue<string> | null,
      newKeeper?: PromiseOrValue<string> | null
    ): KeeperUpdatedEventFilter;
    KeeperUpdated(
      oldKeeper?: PromiseOrValue<string> | null,
      newKeeper?: PromiseOrValue<string> | null
    ): KeeperUpdatedEventFilter;

    'OwnershipTransferred(address,address)'(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    'TraderOIHedgeBpsUpdated(uint256)'(
      traderOIHedgeBps?: null
    ): TraderOIHedgeBpsUpdatedEventFilter;
    TraderOIHedgeBpsUpdated(
      traderOIHedgeBps?: null
    ): TraderOIHedgeBpsUpdatedEventFilter;

    'TraderOIHedgesUpdated(int256,int256)'(
      btcTraderOIHedge?: null,
      ethTraderOIHedge?: null
    ): TraderOIHedgesUpdatedEventFilter;
    TraderOIHedgesUpdated(
      btcTraderOIHedge?: null,
      ethTraderOIHedge?: null
    ): TraderOIHedgesUpdatedEventFilter;
  };

  estimateGas: {
    btcTraderOIHedge(overrides?: CallOverrides): Promise<BigNumber>;

    ethTraderOIHedge(overrides?: CallOverrides): Promise<BigNumber>;

    glp(overrides?: CallOverrides): Promise<BigNumber>;

    glpManager(overrides?: CallOverrides): Promise<BigNumber>;

    gmxVault(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _keeper: PromiseOrValue<string>,
      _gmxVault: PromiseOrValue<string>,
      _glpManager: PromiseOrValue<string>,
      _juniorVault: PromiseOrValue<string>,
      _glp: PromiseOrValue<string>,
      _weth: PromiseOrValue<string>,
      _wbtc: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    juniorVault(overrides?: CallOverrides): Promise<BigNumber>;

    keeper(overrides?: CallOverrides): Promise<BigNumber>;

    overrideTraderOIHedges(
      _btcTraderOIHedge: PromiseOrValue<BigNumberish>,
      _ethTraderOIHedge: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setKeeper(
      _keeper: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setTraderOIHedgeBps(
      _traderOIHedgeBps: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setTraderOIHedges(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    wbtc(overrides?: CallOverrides): Promise<BigNumber>;

    weth(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    btcTraderOIHedge(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ethTraderOIHedge(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    glp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    glpManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    gmxVault(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _keeper: PromiseOrValue<string>,
      _gmxVault: PromiseOrValue<string>,
      _glpManager: PromiseOrValue<string>,
      _juniorVault: PromiseOrValue<string>,
      _glp: PromiseOrValue<string>,
      _weth: PromiseOrValue<string>,
      _wbtc: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    juniorVault(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    keeper(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    overrideTraderOIHedges(
      _btcTraderOIHedge: PromiseOrValue<BigNumberish>,
      _ethTraderOIHedge: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setKeeper(
      _keeper: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setTraderOIHedgeBps(
      _traderOIHedgeBps: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setTraderOIHedges(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    wbtc(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    weth(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
