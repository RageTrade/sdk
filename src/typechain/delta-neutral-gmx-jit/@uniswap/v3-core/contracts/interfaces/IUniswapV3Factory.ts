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
} from '../../../../common';

export interface IUniswapV3FactoryInterface extends utils.Interface {
  functions: {
    'createPool(address,address,uint24)': FunctionFragment;
    'enableFeeAmount(uint24,int24)': FunctionFragment;
    'feeAmountTickSpacing(uint24)': FunctionFragment;
    'getPool(address,address,uint24)': FunctionFragment;
    'owner()': FunctionFragment;
    'setOwner(address)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'createPool'
      | 'enableFeeAmount'
      | 'feeAmountTickSpacing'
      | 'getPool'
      | 'owner'
      | 'setOwner'
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'createPool',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: 'enableFeeAmount',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'feeAmountTickSpacing',
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'getPool',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'setOwner',
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: 'createPool', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'enableFeeAmount',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'feeAmountTickSpacing',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'getPool', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setOwner', data: BytesLike): Result;

  events: {
    'FeeAmountEnabled(uint24,int24)': EventFragment;
    'OwnerChanged(address,address)': EventFragment;
    'PoolCreated(address,address,uint24,int24,address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'FeeAmountEnabled'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnerChanged'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'PoolCreated'): EventFragment;
}

export interface FeeAmountEnabledEventObject {
  fee: number;
  tickSpacing: number;
}
export type FeeAmountEnabledEvent = TypedEvent<
  [number, number],
  FeeAmountEnabledEventObject
>;

export type FeeAmountEnabledEventFilter =
  TypedEventFilter<FeeAmountEnabledEvent>;

export interface OwnerChangedEventObject {
  oldOwner: string;
  newOwner: string;
}
export type OwnerChangedEvent = TypedEvent<
  [string, string],
  OwnerChangedEventObject
>;

export type OwnerChangedEventFilter = TypedEventFilter<OwnerChangedEvent>;

export interface PoolCreatedEventObject {
  token0: string;
  token1: string;
  fee: number;
  tickSpacing: number;
  pool: string;
}
export type PoolCreatedEvent = TypedEvent<
  [string, string, number, number, string],
  PoolCreatedEventObject
>;

export type PoolCreatedEventFilter = TypedEventFilter<PoolCreatedEvent>;

export interface IUniswapV3Factory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IUniswapV3FactoryInterface;

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
    createPool(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      fee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    enableFeeAmount(
      fee: PromiseOrValue<BigNumberish>,
      tickSpacing: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    feeAmountTickSpacing(
      fee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[number]>;

    getPool(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      fee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string] & { pool: string }>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    setOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  createPool(
    tokenA: PromiseOrValue<string>,
    tokenB: PromiseOrValue<string>,
    fee: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  enableFeeAmount(
    fee: PromiseOrValue<BigNumberish>,
    tickSpacing: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  feeAmountTickSpacing(
    fee: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<number>;

  getPool(
    tokenA: PromiseOrValue<string>,
    tokenB: PromiseOrValue<string>,
    fee: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  setOwner(
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    createPool(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      fee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    enableFeeAmount(
      fee: PromiseOrValue<BigNumberish>,
      tickSpacing: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    feeAmountTickSpacing(
      fee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<number>;

    getPool(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      fee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    setOwner(
      _owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    'FeeAmountEnabled(uint24,int24)'(
      fee?: PromiseOrValue<BigNumberish> | null,
      tickSpacing?: PromiseOrValue<BigNumberish> | null
    ): FeeAmountEnabledEventFilter;
    FeeAmountEnabled(
      fee?: PromiseOrValue<BigNumberish> | null,
      tickSpacing?: PromiseOrValue<BigNumberish> | null
    ): FeeAmountEnabledEventFilter;

    'OwnerChanged(address,address)'(
      oldOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnerChangedEventFilter;
    OwnerChanged(
      oldOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnerChangedEventFilter;

    'PoolCreated(address,address,uint24,int24,address)'(
      token0?: PromiseOrValue<string> | null,
      token1?: PromiseOrValue<string> | null,
      fee?: PromiseOrValue<BigNumberish> | null,
      tickSpacing?: null,
      pool?: null
    ): PoolCreatedEventFilter;
    PoolCreated(
      token0?: PromiseOrValue<string> | null,
      token1?: PromiseOrValue<string> | null,
      fee?: PromiseOrValue<BigNumberish> | null,
      tickSpacing?: null,
      pool?: null
    ): PoolCreatedEventFilter;
  };

  estimateGas: {
    createPool(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      fee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    enableFeeAmount(
      fee: PromiseOrValue<BigNumberish>,
      tickSpacing: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    feeAmountTickSpacing(
      fee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPool(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      fee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    setOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createPool(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      fee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    enableFeeAmount(
      fee: PromiseOrValue<BigNumberish>,
      tickSpacing: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    feeAmountTickSpacing(
      fee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPool(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      fee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
