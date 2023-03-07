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
} from '../../../common';

export interface IGlpManagerInterface extends Interface {
  getFunction(
    nameOrSignature:
      | 'addLiquidity'
      | 'addLiquidityForAccount'
      | 'cooldownDuration'
      | 'getAum'
      | 'getAumInUsdg'
      | 'getAums'
      | 'getGlobalShortAveragePrice'
      | 'gov'
      | 'lastAddedAt'
      | 'removeLiquidity'
      | 'removeLiquidityForAccount'
      | 'setCooldownDuration'
      | 'vault'
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'addLiquidity',
    values: [AddressLike, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'addLiquidityForAccount',
    values: [
      AddressLike,
      AddressLike,
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: 'cooldownDuration',
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: 'getAum', values: [boolean]): string;
  encodeFunctionData(
    functionFragment: 'getAumInUsdg',
    values: [boolean]
  ): string;
  encodeFunctionData(functionFragment: 'getAums', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'getGlobalShortAveragePrice',
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: 'gov', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'lastAddedAt',
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: 'removeLiquidity',
    values: [AddressLike, BigNumberish, BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: 'removeLiquidityForAccount',
    values: [AddressLike, AddressLike, BigNumberish, BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: 'setCooldownDuration',
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: 'vault', values?: undefined): string;

  decodeFunctionResult(
    functionFragment: 'addLiquidity',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'addLiquidityForAccount',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'cooldownDuration',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'getAum', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'getAumInUsdg',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'getAums', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'getGlobalShortAveragePrice',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'gov', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'lastAddedAt',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'removeLiquidity',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'removeLiquidityForAccount',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'setCooldownDuration',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'vault', data: BytesLike): Result;
}

export interface IGlpManager extends BaseContract {
  connect(runner?: ContractRunner | null): BaseContract;
  attach(addressOrName: AddressLike): this;
  deployed(): Promise<this>;

  interface: IGlpManagerInterface;

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

  addLiquidity: TypedContractMethod<
    [
      _token: AddressLike,
      _amount: BigNumberish,
      _minUsdg: BigNumberish,
      _minGlp: BigNumberish
    ],
    [bigint],
    'nonpayable'
  >;

  addLiquidityForAccount: TypedContractMethod<
    [
      _fundingAccount: AddressLike,
      _account: AddressLike,
      _token: AddressLike,
      _amount: BigNumberish,
      _minUsdg: BigNumberish,
      _minGlp: BigNumberish
    ],
    [bigint],
    'nonpayable'
  >;

  cooldownDuration: TypedContractMethod<[], [bigint], 'nonpayable'>;

  getAum: TypedContractMethod<[maximise: boolean], [bigint], 'view'>;

  getAumInUsdg: TypedContractMethod<[maximise: boolean], [bigint], 'view'>;

  getAums: TypedContractMethod<[], [bigint[]], 'view'>;

  getGlobalShortAveragePrice: TypedContractMethod<
    [token: AddressLike],
    [bigint],
    'view'
  >;

  gov: TypedContractMethod<[], [string], 'view'>;

  lastAddedAt: TypedContractMethod<
    [_account: AddressLike],
    [bigint],
    'nonpayable'
  >;

  removeLiquidity: TypedContractMethod<
    [
      _tokenOut: AddressLike,
      _glpAmount: BigNumberish,
      _minOut: BigNumberish,
      _receiver: AddressLike
    ],
    [bigint],
    'nonpayable'
  >;

  removeLiquidityForAccount: TypedContractMethod<
    [
      _account: AddressLike,
      _tokenOut: AddressLike,
      _glpAmount: BigNumberish,
      _minOut: BigNumberish,
      _receiver: AddressLike
    ],
    [bigint],
    'nonpayable'
  >;

  setCooldownDuration: TypedContractMethod<
    [_cooldownDuration: BigNumberish],
    [void],
    'nonpayable'
  >;

  vault: TypedContractMethod<[], [string], 'view'>;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: 'addLiquidity'
  ): TypedContractMethod<
    [
      _token: AddressLike,
      _amount: BigNumberish,
      _minUsdg: BigNumberish,
      _minGlp: BigNumberish
    ],
    [bigint],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'addLiquidityForAccount'
  ): TypedContractMethod<
    [
      _fundingAccount: AddressLike,
      _account: AddressLike,
      _token: AddressLike,
      _amount: BigNumberish,
      _minUsdg: BigNumberish,
      _minGlp: BigNumberish
    ],
    [bigint],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'cooldownDuration'
  ): TypedContractMethod<[], [bigint], 'nonpayable'>;
  getFunction(
    nameOrSignature: 'getAum'
  ): TypedContractMethod<[maximise: boolean], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'getAumInUsdg'
  ): TypedContractMethod<[maximise: boolean], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'getAums'
  ): TypedContractMethod<[], [bigint[]], 'view'>;
  getFunction(
    nameOrSignature: 'getGlobalShortAveragePrice'
  ): TypedContractMethod<[token: AddressLike], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'gov'
  ): TypedContractMethod<[], [string], 'view'>;
  getFunction(
    nameOrSignature: 'lastAddedAt'
  ): TypedContractMethod<[_account: AddressLike], [bigint], 'nonpayable'>;
  getFunction(
    nameOrSignature: 'removeLiquidity'
  ): TypedContractMethod<
    [
      _tokenOut: AddressLike,
      _glpAmount: BigNumberish,
      _minOut: BigNumberish,
      _receiver: AddressLike
    ],
    [bigint],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'removeLiquidityForAccount'
  ): TypedContractMethod<
    [
      _account: AddressLike,
      _tokenOut: AddressLike,
      _glpAmount: BigNumberish,
      _minOut: BigNumberish,
      _receiver: AddressLike
    ],
    [bigint],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'setCooldownDuration'
  ): TypedContractMethod<
    [_cooldownDuration: BigNumberish],
    [void],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'vault'
  ): TypedContractMethod<[], [string], 'view'>;

  filters: {};
}
