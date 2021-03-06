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
} from '../../../../common';

export interface StableSwapMockInterface extends utils.Interface {
  functions: {
    'add_liquidity(uint256[3],uint256)': FunctionFragment;
    'decimals(uint256)': FunctionFragment;
    'exchange(int128,int128,uint256,uint256)': FunctionFragment;
    'lpToken()': FunctionFragment;
    'lp_price()': FunctionFragment;
    'oracles(uint256)': FunctionFragment;
    'quantities(uint256)': FunctionFragment;
    'remove_liquidity_one_coin(uint256,uint256,uint256)': FunctionFragment;
    'tokens(uint256)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'add_liquidity'
      | 'decimals'
      | 'exchange'
      | 'lpToken'
      | 'lp_price'
      | 'oracles'
      | 'quantities'
      | 'remove_liquidity_one_coin'
      | 'tokens'
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'add_liquidity',
    values: [[BigNumberish, BigNumberish, BigNumberish], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'decimals',
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'exchange',
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: 'lpToken', values?: undefined): string;
  encodeFunctionData(functionFragment: 'lp_price', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'oracles',
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'quantities',
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'remove_liquidity_one_coin',
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'tokens',
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: 'add_liquidity',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'decimals', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'exchange', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'lpToken', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'lp_price', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'oracles', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'quantities', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'remove_liquidity_one_coin',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'tokens', data: BytesLike): Result;

  events: {};
}

export interface StableSwapMock extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: StableSwapMockInterface;

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
    add_liquidity(
      amounts: [BigNumberish, BigNumberish, BigNumberish],
      arg1: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    decimals(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    exchange(
      from: BigNumberish,
      to: BigNumberish,
      _from_amount: BigNumberish,
      arg3: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    lpToken(overrides?: CallOverrides): Promise<[string]>;

    lp_price(overrides?: CallOverrides): Promise<[BigNumber]>;

    oracles(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    quantities(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    remove_liquidity_one_coin(
      token_amount: BigNumberish,
      index: BigNumberish,
      arg2: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    tokens(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
  };

  add_liquidity(
    amounts: [BigNumberish, BigNumberish, BigNumberish],
    arg1: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  decimals(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  exchange(
    from: BigNumberish,
    to: BigNumberish,
    _from_amount: BigNumberish,
    arg3: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  lpToken(overrides?: CallOverrides): Promise<string>;

  lp_price(overrides?: CallOverrides): Promise<BigNumber>;

  oracles(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  quantities(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  remove_liquidity_one_coin(
    token_amount: BigNumberish,
    index: BigNumberish,
    arg2: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  tokens(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  callStatic: {
    add_liquidity(
      amounts: [BigNumberish, BigNumberish, BigNumberish],
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    decimals(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    exchange(
      from: BigNumberish,
      to: BigNumberish,
      _from_amount: BigNumberish,
      arg3: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    lpToken(overrides?: CallOverrides): Promise<string>;

    lp_price(overrides?: CallOverrides): Promise<BigNumber>;

    oracles(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    quantities(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    remove_liquidity_one_coin(
      token_amount: BigNumberish,
      index: BigNumberish,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    tokens(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    add_liquidity(
      amounts: [BigNumberish, BigNumberish, BigNumberish],
      arg1: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    decimals(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    exchange(
      from: BigNumberish,
      to: BigNumberish,
      _from_amount: BigNumberish,
      arg3: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    lpToken(overrides?: CallOverrides): Promise<BigNumber>;

    lp_price(overrides?: CallOverrides): Promise<BigNumber>;

    oracles(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    quantities(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    remove_liquidity_one_coin(
      token_amount: BigNumberish,
      index: BigNumberish,
      arg2: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    tokens(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    add_liquidity(
      amounts: [BigNumberish, BigNumberish, BigNumberish],
      arg1: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    decimals(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    exchange(
      from: BigNumberish,
      to: BigNumberish,
      _from_amount: BigNumberish,
      arg3: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    lpToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lp_price(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    oracles(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    quantities(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    remove_liquidity_one_coin(
      token_amount: BigNumberish,
      index: BigNumberish,
      arg2: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    tokens(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
