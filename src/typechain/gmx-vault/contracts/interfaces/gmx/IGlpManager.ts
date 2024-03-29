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
import type { FunctionFragment, Result } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from '../../../common';

export interface IGlpManagerInterface extends utils.Interface {
  functions: {
    'addLiquidity(address,uint256,uint256,uint256)': FunctionFragment;
    'addLiquidityForAccount(address,address,address,uint256,uint256,uint256)': FunctionFragment;
    'cooldownDuration()': FunctionFragment;
    'getAum(bool)': FunctionFragment;
    'getAumInUsdg(bool)': FunctionFragment;
    'getAums()': FunctionFragment;
    'lastAddedAt(address)': FunctionFragment;
    'removeLiquidity(address,uint256,uint256,address)': FunctionFragment;
    'removeLiquidityForAccount(address,address,uint256,uint256,address)': FunctionFragment;
    'vault()': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'addLiquidity'
      | 'addLiquidityForAccount'
      | 'cooldownDuration'
      | 'getAum'
      | 'getAumInUsdg'
      | 'getAums'
      | 'lastAddedAt'
      | 'removeLiquidity'
      | 'removeLiquidityForAccount'
      | 'vault'
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'addLiquidity',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: 'addLiquidityForAccount',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: 'cooldownDuration',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'getAum',
    values: [PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: 'getAumInUsdg',
    values: [PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(functionFragment: 'getAums', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'lastAddedAt',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'removeLiquidity',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: 'removeLiquidityForAccount',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
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
  decodeFunctionResult(functionFragment: 'vault', data: BytesLike): Result;

  events: {};
}

export interface IGlpManager extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IGlpManagerInterface;

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
    addLiquidity(
      _token: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _minUsdg: PromiseOrValue<BigNumberish>,
      _minGlp: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addLiquidityForAccount(
      _fundingAccount: PromiseOrValue<string>,
      _account: PromiseOrValue<string>,
      _token: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _minUsdg: PromiseOrValue<BigNumberish>,
      _minGlp: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    cooldownDuration(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getAum(
      maximise: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getAumInUsdg(
      maximise: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getAums(overrides?: CallOverrides): Promise<[BigNumber[]]>;

    lastAddedAt(
      _account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    removeLiquidity(
      _tokenOut: PromiseOrValue<string>,
      _glpAmount: PromiseOrValue<BigNumberish>,
      _minOut: PromiseOrValue<BigNumberish>,
      _receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    removeLiquidityForAccount(
      _account: PromiseOrValue<string>,
      _tokenOut: PromiseOrValue<string>,
      _glpAmount: PromiseOrValue<BigNumberish>,
      _minOut: PromiseOrValue<BigNumberish>,
      _receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    vault(overrides?: CallOverrides): Promise<[string]>;
  };

  addLiquidity(
    _token: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    _minUsdg: PromiseOrValue<BigNumberish>,
    _minGlp: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addLiquidityForAccount(
    _fundingAccount: PromiseOrValue<string>,
    _account: PromiseOrValue<string>,
    _token: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    _minUsdg: PromiseOrValue<BigNumberish>,
    _minGlp: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  cooldownDuration(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getAum(
    maximise: PromiseOrValue<boolean>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getAumInUsdg(
    maximise: PromiseOrValue<boolean>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getAums(overrides?: CallOverrides): Promise<BigNumber[]>;

  lastAddedAt(
    _account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  removeLiquidity(
    _tokenOut: PromiseOrValue<string>,
    _glpAmount: PromiseOrValue<BigNumberish>,
    _minOut: PromiseOrValue<BigNumberish>,
    _receiver: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  removeLiquidityForAccount(
    _account: PromiseOrValue<string>,
    _tokenOut: PromiseOrValue<string>,
    _glpAmount: PromiseOrValue<BigNumberish>,
    _minOut: PromiseOrValue<BigNumberish>,
    _receiver: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  vault(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    addLiquidity(
      _token: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _minUsdg: PromiseOrValue<BigNumberish>,
      _minGlp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    addLiquidityForAccount(
      _fundingAccount: PromiseOrValue<string>,
      _account: PromiseOrValue<string>,
      _token: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _minUsdg: PromiseOrValue<BigNumberish>,
      _minGlp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    cooldownDuration(overrides?: CallOverrides): Promise<BigNumber>;

    getAum(
      maximise: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAumInUsdg(
      maximise: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAums(overrides?: CallOverrides): Promise<BigNumber[]>;

    lastAddedAt(
      _account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeLiquidity(
      _tokenOut: PromiseOrValue<string>,
      _glpAmount: PromiseOrValue<BigNumberish>,
      _minOut: PromiseOrValue<BigNumberish>,
      _receiver: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeLiquidityForAccount(
      _account: PromiseOrValue<string>,
      _tokenOut: PromiseOrValue<string>,
      _glpAmount: PromiseOrValue<BigNumberish>,
      _minOut: PromiseOrValue<BigNumberish>,
      _receiver: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    vault(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    addLiquidity(
      _token: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _minUsdg: PromiseOrValue<BigNumberish>,
      _minGlp: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addLiquidityForAccount(
      _fundingAccount: PromiseOrValue<string>,
      _account: PromiseOrValue<string>,
      _token: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _minUsdg: PromiseOrValue<BigNumberish>,
      _minGlp: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    cooldownDuration(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getAum(
      maximise: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAumInUsdg(
      maximise: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAums(overrides?: CallOverrides): Promise<BigNumber>;

    lastAddedAt(
      _account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    removeLiquidity(
      _tokenOut: PromiseOrValue<string>,
      _glpAmount: PromiseOrValue<BigNumberish>,
      _minOut: PromiseOrValue<BigNumberish>,
      _receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    removeLiquidityForAccount(
      _account: PromiseOrValue<string>,
      _tokenOut: PromiseOrValue<string>,
      _glpAmount: PromiseOrValue<BigNumberish>,
      _minOut: PromiseOrValue<BigNumberish>,
      _receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    vault(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    addLiquidity(
      _token: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _minUsdg: PromiseOrValue<BigNumberish>,
      _minGlp: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addLiquidityForAccount(
      _fundingAccount: PromiseOrValue<string>,
      _account: PromiseOrValue<string>,
      _token: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _minUsdg: PromiseOrValue<BigNumberish>,
      _minGlp: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    cooldownDuration(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getAum(
      maximise: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAumInUsdg(
      maximise: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAums(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lastAddedAt(
      _account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    removeLiquidity(
      _tokenOut: PromiseOrValue<string>,
      _glpAmount: PromiseOrValue<BigNumberish>,
      _minOut: PromiseOrValue<BigNumberish>,
      _receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    removeLiquidityForAccount(
      _account: PromiseOrValue<string>,
      _tokenOut: PromiseOrValue<string>,
      _glpAmount: PromiseOrValue<BigNumberish>,
      _minOut: PromiseOrValue<BigNumberish>,
      _receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    vault(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
