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

export interface ICurveGaugeInterface extends utils.Interface {
  functions: {
    'balanceOf(address)': FunctionFragment;
    'claim_rewards(address)': FunctionFragment;
    'claim_rewards(address,address)': FunctionFragment;
    'claim_rewards()': FunctionFragment;
    'claimable_reward(address,address)': FunctionFragment;
    'claimable_reward_write(address,address)': FunctionFragment;
    'claimable_tokens(address)': FunctionFragment;
    'deposit(uint256,address)': FunctionFragment;
    'deposit(uint256)': FunctionFragment;
    'integrate_fraction(address)': FunctionFragment;
    'withdraw(uint256)': FunctionFragment;
    'withdraw(uint256,bool)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'balanceOf'
      | 'claim_rewards(address)'
      | 'claim_rewards(address,address)'
      | 'claim_rewards()'
      | 'claimable_reward'
      | 'claimable_reward_write'
      | 'claimable_tokens'
      | 'deposit(uint256,address)'
      | 'deposit(uint256)'
      | 'integrate_fraction'
      | 'withdraw(uint256)'
      | 'withdraw(uint256,bool)'
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'balanceOf',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'claim_rewards(address)',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'claim_rewards(address,address)',
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'claim_rewards()',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'claimable_reward',
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'claimable_reward_write',
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'claimable_tokens',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'deposit(uint256,address)',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'deposit(uint256)',
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'integrate_fraction',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'withdraw(uint256)',
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'withdraw(uint256,bool)',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<boolean>]
  ): string;

  decodeFunctionResult(functionFragment: 'balanceOf', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'claim_rewards(address)',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'claim_rewards(address,address)',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'claim_rewards()',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'claimable_reward',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'claimable_reward_write',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'claimable_tokens',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'deposit(uint256,address)',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'deposit(uint256)',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'integrate_fraction',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'withdraw(uint256)',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'withdraw(uint256,bool)',
    data: BytesLike
  ): Result;

  events: {};
}

export interface ICurveGauge extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ICurveGaugeInterface;

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
    balanceOf(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    'claim_rewards(address)'(
      addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    'claim_rewards(address,address)'(
      addr: PromiseOrValue<string>,
      receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    'claim_rewards()'(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    claimable_reward(
      user: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    claimable_reward_write(
      user: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    claimable_tokens(
      addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    'deposit(uint256,address)'(
      _value: PromiseOrValue<BigNumberish>,
      addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    'deposit(uint256)'(
      _value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    integrate_fraction(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    'withdraw(uint256)'(
      _value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    'withdraw(uint256,bool)'(
      _value: PromiseOrValue<BigNumberish>,
      claim_rewards: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  balanceOf(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  'claim_rewards(address)'(
    addr: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  'claim_rewards(address,address)'(
    addr: PromiseOrValue<string>,
    receiver: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  'claim_rewards()'(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  claimable_reward(
    user: PromiseOrValue<string>,
    token: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  claimable_reward_write(
    user: PromiseOrValue<string>,
    token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  claimable_tokens(
    addr: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  'deposit(uint256,address)'(
    _value: PromiseOrValue<BigNumberish>,
    addr: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  'deposit(uint256)'(
    _value: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  integrate_fraction(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  'withdraw(uint256)'(
    _value: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  'withdraw(uint256,bool)'(
    _value: PromiseOrValue<BigNumberish>,
    claim_rewards: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    balanceOf(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    'claim_rewards(address)'(
      addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    'claim_rewards(address,address)'(
      addr: PromiseOrValue<string>,
      receiver: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    'claim_rewards()'(overrides?: CallOverrides): Promise<void>;

    claimable_reward(
      user: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimable_reward_write(
      user: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimable_tokens(
      addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    'deposit(uint256,address)'(
      _value: PromiseOrValue<BigNumberish>,
      addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    'deposit(uint256)'(
      _value: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    integrate_fraction(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    'withdraw(uint256)'(
      _value: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    'withdraw(uint256,bool)'(
      _value: PromiseOrValue<BigNumberish>,
      claim_rewards: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    balanceOf(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    'claim_rewards(address)'(
      addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    'claim_rewards(address,address)'(
      addr: PromiseOrValue<string>,
      receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    'claim_rewards()'(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    claimable_reward(
      user: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimable_reward_write(
      user: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    claimable_tokens(
      addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    'deposit(uint256,address)'(
      _value: PromiseOrValue<BigNumberish>,
      addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    'deposit(uint256)'(
      _value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    integrate_fraction(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    'withdraw(uint256)'(
      _value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    'withdraw(uint256,bool)'(
      _value: PromiseOrValue<BigNumberish>,
      claim_rewards: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    balanceOf(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    'claim_rewards(address)'(
      addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    'claim_rewards(address,address)'(
      addr: PromiseOrValue<string>,
      receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    'claim_rewards()'(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    claimable_reward(
      user: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claimable_reward_write(
      user: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    claimable_tokens(
      addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    'deposit(uint256,address)'(
      _value: PromiseOrValue<BigNumberish>,
      addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    'deposit(uint256)'(
      _value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    integrate_fraction(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    'withdraw(uint256)'(
      _value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    'withdraw(uint256,bool)'(
      _value: PromiseOrValue<BigNumberish>,
      claim_rewards: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}