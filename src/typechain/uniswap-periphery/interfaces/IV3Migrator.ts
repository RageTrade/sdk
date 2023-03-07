/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from 'ethers';
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from '../common';

export declare namespace IV3Migrator {
  export type MigrateParamsStruct = {
    pair: AddressLike;
    liquidityToMigrate: BigNumberish;
    percentageToMigrate: BigNumberish;
    token0: AddressLike;
    token1: AddressLike;
    fee: BigNumberish;
    tickLower: BigNumberish;
    tickUpper: BigNumberish;
    amount0Min: BigNumberish;
    amount1Min: BigNumberish;
    recipient: AddressLike;
    deadline: BigNumberish;
    refundAsETH: boolean;
  };

  export type MigrateParamsStructOutput = [
    pair: string,
    liquidityToMigrate: bigint,
    percentageToMigrate: bigint,
    token0: string,
    token1: string,
    fee: bigint,
    tickLower: bigint,
    tickUpper: bigint,
    amount0Min: bigint,
    amount1Min: bigint,
    recipient: string,
    deadline: bigint,
    refundAsETH: boolean
  ] & {
    pair: string;
    liquidityToMigrate: bigint;
    percentageToMigrate: bigint;
    token0: string;
    token1: string;
    fee: bigint;
    tickLower: bigint;
    tickUpper: bigint;
    amount0Min: bigint;
    amount1Min: bigint;
    recipient: string;
    deadline: bigint;
    refundAsETH: boolean;
  };
}

export interface IV3MigratorInterface extends Interface {
  getFunction(
    nameOrSignature:
      | 'createAndInitializePoolIfNecessary'
      | 'migrate'
      | 'multicall'
      | 'selfPermit'
      | 'selfPermitAllowed'
      | 'selfPermitAllowedIfNecessary'
      | 'selfPermitIfNecessary'
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'createAndInitializePoolIfNecessary',
    values: [AddressLike, AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'migrate',
    values: [IV3Migrator.MigrateParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: 'multicall',
    values: [BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: 'selfPermit',
    values: [
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: 'selfPermitAllowed',
    values: [
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: 'selfPermitAllowedIfNecessary',
    values: [
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: 'selfPermitIfNecessary',
    values: [
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: 'createAndInitializePoolIfNecessary',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'migrate', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'multicall', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'selfPermit', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'selfPermitAllowed',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'selfPermitAllowedIfNecessary',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'selfPermitIfNecessary',
    data: BytesLike
  ): Result;
}

export interface IV3Migrator extends BaseContract {
  connect(runner?: ContractRunner | null): BaseContract;
  attach(addressOrName: AddressLike): this;
  deployed(): Promise<this>;

  interface: IV3MigratorInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  createAndInitializePoolIfNecessary: TypedContractMethod<
    [
      token0: AddressLike,
      token1: AddressLike,
      fee: BigNumberish,
      sqrtPriceX96: BigNumberish
    ],
    [string],
    'payable'
  >;

  migrate: TypedContractMethod<
    [params: IV3Migrator.MigrateParamsStruct],
    [void],
    'nonpayable'
  >;

  multicall: TypedContractMethod<[data: BytesLike[]], [string[]], 'payable'>;

  selfPermit: TypedContractMethod<
    [
      token: AddressLike,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [void],
    'payable'
  >;

  selfPermitAllowed: TypedContractMethod<
    [
      token: AddressLike,
      nonce: BigNumberish,
      expiry: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [void],
    'payable'
  >;

  selfPermitAllowedIfNecessary: TypedContractMethod<
    [
      token: AddressLike,
      nonce: BigNumberish,
      expiry: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [void],
    'payable'
  >;

  selfPermitIfNecessary: TypedContractMethod<
    [
      token: AddressLike,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [void],
    'payable'
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: 'createAndInitializePoolIfNecessary'
  ): TypedContractMethod<
    [
      token0: AddressLike,
      token1: AddressLike,
      fee: BigNumberish,
      sqrtPriceX96: BigNumberish
    ],
    [string],
    'payable'
  >;
  getFunction(
    nameOrSignature: 'migrate'
  ): TypedContractMethod<
    [params: IV3Migrator.MigrateParamsStruct],
    [void],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'multicall'
  ): TypedContractMethod<[data: BytesLike[]], [string[]], 'payable'>;
  getFunction(
    nameOrSignature: 'selfPermit'
  ): TypedContractMethod<
    [
      token: AddressLike,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [void],
    'payable'
  >;
  getFunction(
    nameOrSignature: 'selfPermitAllowed'
  ): TypedContractMethod<
    [
      token: AddressLike,
      nonce: BigNumberish,
      expiry: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [void],
    'payable'
  >;
  getFunction(
    nameOrSignature: 'selfPermitAllowedIfNecessary'
  ): TypedContractMethod<
    [
      token: AddressLike,
      nonce: BigNumberish,
      expiry: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [void],
    'payable'
  >;
  getFunction(
    nameOrSignature: 'selfPermitIfNecessary'
  ): TypedContractMethod<
    [
      token: AddressLike,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [void],
    'payable'
  >;

  filters: {};
}
