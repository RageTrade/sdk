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
  PayableOverrides,
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

export interface VaultPeripheryInterface extends utils.Interface {
  functions: {
    'MAX_BPS()': FunctionFragment;
    'MAX_TOLERANCE()': FunctionFragment;
    'depositEth()': FunctionFragment;
    'depositUsdc(uint256)': FunctionFragment;
    'depositWeth(uint256)': FunctionFragment;
    'initialize(address,address,address,address,address,address,address,address,address)': FunctionFragment;
    'lpOracle()': FunctionFragment;
    'lpToken()': FunctionFragment;
    'owner()': FunctionFragment;
    'renounceOwnership()': FunctionFragment;
    'stableSwap()': FunctionFragment;
    'swapRouter()': FunctionFragment;
    'transferOwnership(address)': FunctionFragment;
    'updateEthOracle(address)': FunctionFragment;
    'updateSwapRouter(address)': FunctionFragment;
    'updateTolerance(uint256)': FunctionFragment;
    'usdc()': FunctionFragment;
    'usdt()': FunctionFragment;
    'vault()': FunctionFragment;
    'weth()': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'MAX_BPS'
      | 'MAX_TOLERANCE'
      | 'depositEth'
      | 'depositUsdc'
      | 'depositWeth'
      | 'initialize'
      | 'lpOracle'
      | 'lpToken'
      | 'owner'
      | 'renounceOwnership'
      | 'stableSwap'
      | 'swapRouter'
      | 'transferOwnership'
      | 'updateEthOracle'
      | 'updateSwapRouter'
      | 'updateTolerance'
      | 'usdc'
      | 'usdt'
      | 'vault'
      | 'weth'
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'MAX_BPS', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'MAX_TOLERANCE',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'depositEth',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'depositUsdc',
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'depositWeth',
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'initialize',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(functionFragment: 'lpOracle', values?: undefined): string;
  encodeFunctionData(functionFragment: 'lpToken', values?: undefined): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'renounceOwnership',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'stableSwap',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'swapRouter',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'transferOwnership',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'updateEthOracle',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'updateSwapRouter',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'updateTolerance',
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: 'usdc', values?: undefined): string;
  encodeFunctionData(functionFragment: 'usdt', values?: undefined): string;
  encodeFunctionData(functionFragment: 'vault', values?: undefined): string;
  encodeFunctionData(functionFragment: 'weth', values?: undefined): string;

  decodeFunctionResult(functionFragment: 'MAX_BPS', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'MAX_TOLERANCE',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'depositEth', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'depositUsdc',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'depositWeth',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'lpOracle', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'lpToken', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'renounceOwnership',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'stableSwap', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'swapRouter', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'transferOwnership',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'updateEthOracle',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'updateSwapRouter',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'updateTolerance',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'usdc', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'usdt', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'vault', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'weth', data: BytesLike): Result;

  events: {
    'DepositPeriphery(address,address,uint256,uint256,uint256)': EventFragment;
    'EthOracleUpdated(address,address)': EventFragment;
    'Initialized(uint8)': EventFragment;
    'OwnershipTransferred(address,address)': EventFragment;
    'SlippageToleranceUpdated(uint256,uint256)': EventFragment;
    'SwapRouterUpdated(address,address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'DepositPeriphery'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'EthOracleUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Initialized'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'SlippageToleranceUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'SwapRouterUpdated'): EventFragment;
}

export interface DepositPeripheryEventObject {
  owner: string;
  token: string;
  amount: BigNumber;
  asset: BigNumber;
  shares: BigNumber;
}
export type DepositPeripheryEvent = TypedEvent<
  [string, string, BigNumber, BigNumber, BigNumber],
  DepositPeripheryEventObject
>;

export type DepositPeripheryEventFilter =
  TypedEventFilter<DepositPeripheryEvent>;

export interface EthOracleUpdatedEventObject {
  oldEthOracle: string;
  newEthOracle: string;
}
export type EthOracleUpdatedEvent = TypedEvent<
  [string, string],
  EthOracleUpdatedEventObject
>;

export type EthOracleUpdatedEventFilter =
  TypedEventFilter<EthOracleUpdatedEvent>;

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

export interface SlippageToleranceUpdatedEventObject {
  oldTolerance: BigNumber;
  newTolerance: BigNumber;
}
export type SlippageToleranceUpdatedEvent = TypedEvent<
  [BigNumber, BigNumber],
  SlippageToleranceUpdatedEventObject
>;

export type SlippageToleranceUpdatedEventFilter =
  TypedEventFilter<SlippageToleranceUpdatedEvent>;

export interface SwapRouterUpdatedEventObject {
  oldSwapRouter: string;
  newSwapRouter: string;
}
export type SwapRouterUpdatedEvent = TypedEvent<
  [string, string],
  SwapRouterUpdatedEventObject
>;

export type SwapRouterUpdatedEventFilter =
  TypedEventFilter<SwapRouterUpdatedEvent>;

export interface VaultPeriphery extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: VaultPeripheryInterface;

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
    MAX_BPS(overrides?: CallOverrides): Promise<[BigNumber]>;

    MAX_TOLERANCE(overrides?: CallOverrides): Promise<[BigNumber]>;

    depositEth(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    depositUsdc(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    depositWeth(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    initialize(
      _usdc: PromiseOrValue<string>,
      _usdt: PromiseOrValue<string>,
      _weth: PromiseOrValue<string>,
      _lpToken: PromiseOrValue<string>,
      _vault: PromiseOrValue<string>,
      _swapRouter: PromiseOrValue<string>,
      _lpOracle: PromiseOrValue<string>,
      _stableSwap: PromiseOrValue<string>,
      _ethOracle: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    lpOracle(overrides?: CallOverrides): Promise<[string]>;

    lpToken(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    stableSwap(overrides?: CallOverrides): Promise<[string]>;

    swapRouter(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateEthOracle(
      newOracle: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateSwapRouter(
      newRouter: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateTolerance(
      newTolerance: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    usdc(overrides?: CallOverrides): Promise<[string]>;

    usdt(overrides?: CallOverrides): Promise<[string]>;

    vault(overrides?: CallOverrides): Promise<[string]>;

    weth(overrides?: CallOverrides): Promise<[string]>;
  };

  MAX_BPS(overrides?: CallOverrides): Promise<BigNumber>;

  MAX_TOLERANCE(overrides?: CallOverrides): Promise<BigNumber>;

  depositEth(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  depositUsdc(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  depositWeth(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  initialize(
    _usdc: PromiseOrValue<string>,
    _usdt: PromiseOrValue<string>,
    _weth: PromiseOrValue<string>,
    _lpToken: PromiseOrValue<string>,
    _vault: PromiseOrValue<string>,
    _swapRouter: PromiseOrValue<string>,
    _lpOracle: PromiseOrValue<string>,
    _stableSwap: PromiseOrValue<string>,
    _ethOracle: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  lpOracle(overrides?: CallOverrides): Promise<string>;

  lpToken(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  stableSwap(overrides?: CallOverrides): Promise<string>;

  swapRouter(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateEthOracle(
    newOracle: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateSwapRouter(
    newRouter: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateTolerance(
    newTolerance: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  usdc(overrides?: CallOverrides): Promise<string>;

  usdt(overrides?: CallOverrides): Promise<string>;

  vault(overrides?: CallOverrides): Promise<string>;

  weth(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    MAX_BPS(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_TOLERANCE(overrides?: CallOverrides): Promise<BigNumber>;

    depositEth(overrides?: CallOverrides): Promise<BigNumber>;

    depositUsdc(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    depositWeth(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      _usdc: PromiseOrValue<string>,
      _usdt: PromiseOrValue<string>,
      _weth: PromiseOrValue<string>,
      _lpToken: PromiseOrValue<string>,
      _vault: PromiseOrValue<string>,
      _swapRouter: PromiseOrValue<string>,
      _lpOracle: PromiseOrValue<string>,
      _stableSwap: PromiseOrValue<string>,
      _ethOracle: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    lpOracle(overrides?: CallOverrides): Promise<string>;

    lpToken(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    stableSwap(overrides?: CallOverrides): Promise<string>;

    swapRouter(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateEthOracle(
      newOracle: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateSwapRouter(
      newRouter: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateTolerance(
      newTolerance: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    usdc(overrides?: CallOverrides): Promise<string>;

    usdt(overrides?: CallOverrides): Promise<string>;

    vault(overrides?: CallOverrides): Promise<string>;

    weth(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    'DepositPeriphery(address,address,uint256,uint256,uint256)'(
      owner?: PromiseOrValue<string> | null,
      token?: PromiseOrValue<string> | null,
      amount?: null,
      asset?: null,
      shares?: null
    ): DepositPeripheryEventFilter;
    DepositPeriphery(
      owner?: PromiseOrValue<string> | null,
      token?: PromiseOrValue<string> | null,
      amount?: null,
      asset?: null,
      shares?: null
    ): DepositPeripheryEventFilter;

    'EthOracleUpdated(address,address)'(
      oldEthOracle?: PromiseOrValue<string> | null,
      newEthOracle?: PromiseOrValue<string> | null
    ): EthOracleUpdatedEventFilter;
    EthOracleUpdated(
      oldEthOracle?: PromiseOrValue<string> | null,
      newEthOracle?: PromiseOrValue<string> | null
    ): EthOracleUpdatedEventFilter;

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

    'SlippageToleranceUpdated(uint256,uint256)'(
      oldTolerance?: null,
      newTolerance?: null
    ): SlippageToleranceUpdatedEventFilter;
    SlippageToleranceUpdated(
      oldTolerance?: null,
      newTolerance?: null
    ): SlippageToleranceUpdatedEventFilter;

    'SwapRouterUpdated(address,address)'(
      oldSwapRouter?: PromiseOrValue<string> | null,
      newSwapRouter?: PromiseOrValue<string> | null
    ): SwapRouterUpdatedEventFilter;
    SwapRouterUpdated(
      oldSwapRouter?: PromiseOrValue<string> | null,
      newSwapRouter?: PromiseOrValue<string> | null
    ): SwapRouterUpdatedEventFilter;
  };

  estimateGas: {
    MAX_BPS(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_TOLERANCE(overrides?: CallOverrides): Promise<BigNumber>;

    depositEth(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    depositUsdc(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    depositWeth(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    initialize(
      _usdc: PromiseOrValue<string>,
      _usdt: PromiseOrValue<string>,
      _weth: PromiseOrValue<string>,
      _lpToken: PromiseOrValue<string>,
      _vault: PromiseOrValue<string>,
      _swapRouter: PromiseOrValue<string>,
      _lpOracle: PromiseOrValue<string>,
      _stableSwap: PromiseOrValue<string>,
      _ethOracle: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    lpOracle(overrides?: CallOverrides): Promise<BigNumber>;

    lpToken(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    stableSwap(overrides?: CallOverrides): Promise<BigNumber>;

    swapRouter(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateEthOracle(
      newOracle: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateSwapRouter(
      newRouter: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateTolerance(
      newTolerance: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    usdc(overrides?: CallOverrides): Promise<BigNumber>;

    usdt(overrides?: CallOverrides): Promise<BigNumber>;

    vault(overrides?: CallOverrides): Promise<BigNumber>;

    weth(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    MAX_BPS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAX_TOLERANCE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    depositEth(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    depositUsdc(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    depositWeth(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      _usdc: PromiseOrValue<string>,
      _usdt: PromiseOrValue<string>,
      _weth: PromiseOrValue<string>,
      _lpToken: PromiseOrValue<string>,
      _vault: PromiseOrValue<string>,
      _swapRouter: PromiseOrValue<string>,
      _lpOracle: PromiseOrValue<string>,
      _stableSwap: PromiseOrValue<string>,
      _ethOracle: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    lpOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lpToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    stableSwap(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    swapRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateEthOracle(
      newOracle: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateSwapRouter(
      newRouter: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateTolerance(
      newTolerance: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    usdc(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    usdt(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    vault(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    weth(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
