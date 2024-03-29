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

export interface IRewardTrackerInterface extends utils.Interface {
  functions: {
    'averageStakedAmounts(address)': FunctionFragment;
    'claim(address)': FunctionFragment;
    'claimForAccount(address,address)': FunctionFragment;
    'claimable(address)': FunctionFragment;
    'cumulativeRewards(address)': FunctionFragment;
    'depositBalances(address,address)': FunctionFragment;
    'stake(address,uint256)': FunctionFragment;
    'stakeForAccount(address,address,address,uint256)': FunctionFragment;
    'stakedAmounts(address)': FunctionFragment;
    'tokensPerInterval()': FunctionFragment;
    'unstake(address,uint256)': FunctionFragment;
    'unstakeForAccount(address,address,uint256,address)': FunctionFragment;
    'updateRewards()': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'averageStakedAmounts'
      | 'claim'
      | 'claimForAccount'
      | 'claimable'
      | 'cumulativeRewards'
      | 'depositBalances'
      | 'stake'
      | 'stakeForAccount'
      | 'stakedAmounts'
      | 'tokensPerInterval'
      | 'unstake'
      | 'unstakeForAccount'
      | 'updateRewards'
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'averageStakedAmounts',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'claim',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'claimForAccount',
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'claimable',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'cumulativeRewards',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'depositBalances',
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'stake',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'stakeForAccount',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: 'stakedAmounts',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'tokensPerInterval',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'unstake',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'unstakeForAccount',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: 'updateRewards',
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: 'averageStakedAmounts',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'claim', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'claimForAccount',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'claimable', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'cumulativeRewards',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'depositBalances',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'stake', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'stakeForAccount',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'stakedAmounts',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'tokensPerInterval',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'unstake', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'unstakeForAccount',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'updateRewards',
    data: BytesLike
  ): Result;

  events: {};
}

export interface IRewardTracker extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IRewardTrackerInterface;

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
    averageStakedAmounts(
      _account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    claim(
      _receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    claimForAccount(
      _account: PromiseOrValue<string>,
      _receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    claimable(
      _account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    cumulativeRewards(
      _account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    depositBalances(
      _account: PromiseOrValue<string>,
      _depositToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    stake(
      _depositToken: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    stakeForAccount(
      _fundingAccount: PromiseOrValue<string>,
      _account: PromiseOrValue<string>,
      _depositToken: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    stakedAmounts(
      _account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    tokensPerInterval(overrides?: CallOverrides): Promise<[BigNumber]>;

    unstake(
      _depositToken: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    unstakeForAccount(
      _account: PromiseOrValue<string>,
      _depositToken: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateRewards(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  averageStakedAmounts(
    _account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  claim(
    _receiver: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  claimForAccount(
    _account: PromiseOrValue<string>,
    _receiver: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  claimable(
    _account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  cumulativeRewards(
    _account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  depositBalances(
    _account: PromiseOrValue<string>,
    _depositToken: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  stake(
    _depositToken: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  stakeForAccount(
    _fundingAccount: PromiseOrValue<string>,
    _account: PromiseOrValue<string>,
    _depositToken: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  stakedAmounts(
    _account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  tokensPerInterval(overrides?: CallOverrides): Promise<BigNumber>;

  unstake(
    _depositToken: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  unstakeForAccount(
    _account: PromiseOrValue<string>,
    _depositToken: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    _receiver: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateRewards(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    averageStakedAmounts(
      _account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claim(
      _receiver: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimForAccount(
      _account: PromiseOrValue<string>,
      _receiver: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimable(
      _account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    cumulativeRewards(
      _account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    depositBalances(
      _account: PromiseOrValue<string>,
      _depositToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    stake(
      _depositToken: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    stakeForAccount(
      _fundingAccount: PromiseOrValue<string>,
      _account: PromiseOrValue<string>,
      _depositToken: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    stakedAmounts(
      _account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokensPerInterval(overrides?: CallOverrides): Promise<BigNumber>;

    unstake(
      _depositToken: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    unstakeForAccount(
      _account: PromiseOrValue<string>,
      _depositToken: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _receiver: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateRewards(overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    averageStakedAmounts(
      _account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claim(
      _receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    claimForAccount(
      _account: PromiseOrValue<string>,
      _receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    claimable(
      _account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    cumulativeRewards(
      _account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    depositBalances(
      _account: PromiseOrValue<string>,
      _depositToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    stake(
      _depositToken: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    stakeForAccount(
      _fundingAccount: PromiseOrValue<string>,
      _account: PromiseOrValue<string>,
      _depositToken: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    stakedAmounts(
      _account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokensPerInterval(overrides?: CallOverrides): Promise<BigNumber>;

    unstake(
      _depositToken: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    unstakeForAccount(
      _account: PromiseOrValue<string>,
      _depositToken: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateRewards(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    averageStakedAmounts(
      _account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claim(
      _receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    claimForAccount(
      _account: PromiseOrValue<string>,
      _receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    claimable(
      _account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    cumulativeRewards(
      _account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    depositBalances(
      _account: PromiseOrValue<string>,
      _depositToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    stake(
      _depositToken: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    stakeForAccount(
      _fundingAccount: PromiseOrValue<string>,
      _account: PromiseOrValue<string>,
      _depositToken: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    stakedAmounts(
      _account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokensPerInterval(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    unstake(
      _depositToken: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    unstakeForAccount(
      _account: PromiseOrValue<string>,
      _depositToken: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateRewards(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
