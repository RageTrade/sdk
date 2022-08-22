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
} from '../../../common';

export interface IRewardRouterV2Interface extends utils.Interface {
  functions: {
    'acceptTransfer(address)': FunctionFragment;
    'batchCompoundForAccounts(address[])': FunctionFragment;
    'batchStakeGmxForAccount(address[],uint256[])': FunctionFragment;
    'claim()': FunctionFragment;
    'claimEsGmx()': FunctionFragment;
    'claimFees()': FunctionFragment;
    'compound()': FunctionFragment;
    'compoundForAccount(address)': FunctionFragment;
    'handleRewards(bool,bool,bool,bool,bool,bool,bool)': FunctionFragment;
    'mintAndStakeGlp(address,uint256,uint256,uint256)': FunctionFragment;
    'mintAndStakeGlpETH(uint256,uint256)': FunctionFragment;
    'signalTransfer(address)': FunctionFragment;
    'stakeEsGmx(uint256)': FunctionFragment;
    'stakeGmx(uint256)': FunctionFragment;
    'stakeGmxForAccount(address,uint256)': FunctionFragment;
    'unstakeAndRedeemGlp(address,uint256,uint256,address)': FunctionFragment;
    'unstakeAndRedeemGlpETH(uint256,uint256,address)': FunctionFragment;
    'unstakeEsGmx(uint256)': FunctionFragment;
    'unstakeGmx(uint256)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'acceptTransfer'
      | 'batchCompoundForAccounts'
      | 'batchStakeGmxForAccount'
      | 'claim'
      | 'claimEsGmx'
      | 'claimFees'
      | 'compound'
      | 'compoundForAccount'
      | 'handleRewards'
      | 'mintAndStakeGlp'
      | 'mintAndStakeGlpETH'
      | 'signalTransfer'
      | 'stakeEsGmx'
      | 'stakeGmx'
      | 'stakeGmxForAccount'
      | 'unstakeAndRedeemGlp'
      | 'unstakeAndRedeemGlpETH'
      | 'unstakeEsGmx'
      | 'unstakeGmx'
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'acceptTransfer',
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: 'batchCompoundForAccounts',
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: 'batchStakeGmxForAccount',
    values: [string[], BigNumberish[]]
  ): string;
  encodeFunctionData(functionFragment: 'claim', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'claimEsGmx',
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: 'claimFees', values?: undefined): string;
  encodeFunctionData(functionFragment: 'compound', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'compoundForAccount',
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: 'handleRewards',
    values: [boolean, boolean, boolean, boolean, boolean, boolean, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: 'mintAndStakeGlp',
    values: [string, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'mintAndStakeGlpETH',
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'signalTransfer',
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: 'stakeEsGmx',
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'stakeGmx',
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'stakeGmxForAccount',
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'unstakeAndRedeemGlp',
    values: [string, BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: 'unstakeAndRedeemGlpETH',
    values: [BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: 'unstakeEsGmx',
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'unstakeGmx',
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: 'acceptTransfer',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'batchCompoundForAccounts',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'batchStakeGmxForAccount',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'claim', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'claimEsGmx', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'claimFees', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'compound', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'compoundForAccount',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'handleRewards',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'mintAndStakeGlp',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'mintAndStakeGlpETH',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'signalTransfer',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'stakeEsGmx', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'stakeGmx', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'stakeGmxForAccount',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'unstakeAndRedeemGlp',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'unstakeAndRedeemGlpETH',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'unstakeEsGmx',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'unstakeGmx', data: BytesLike): Result;

  events: {
    'StakeGlp(address,uint256)': EventFragment;
    'StakeGmx(address,address,uint256)': EventFragment;
    'UnstakeGlp(address,uint256)': EventFragment;
    'UnstakeGmx(address,address,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'StakeGlp'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'StakeGmx'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'UnstakeGlp'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'UnstakeGmx'): EventFragment;
}

export interface StakeGlpEventObject {
  account: string;
  amount: BigNumber;
}
export type StakeGlpEvent = TypedEvent<
  [string, BigNumber],
  StakeGlpEventObject
>;

export type StakeGlpEventFilter = TypedEventFilter<StakeGlpEvent>;

export interface StakeGmxEventObject {
  account: string;
  token: string;
  amount: BigNumber;
}
export type StakeGmxEvent = TypedEvent<
  [string, string, BigNumber],
  StakeGmxEventObject
>;

export type StakeGmxEventFilter = TypedEventFilter<StakeGmxEvent>;

export interface UnstakeGlpEventObject {
  account: string;
  amount: BigNumber;
}
export type UnstakeGlpEvent = TypedEvent<
  [string, BigNumber],
  UnstakeGlpEventObject
>;

export type UnstakeGlpEventFilter = TypedEventFilter<UnstakeGlpEvent>;

export interface UnstakeGmxEventObject {
  account: string;
  token: string;
  amount: BigNumber;
}
export type UnstakeGmxEvent = TypedEvent<
  [string, string, BigNumber],
  UnstakeGmxEventObject
>;

export type UnstakeGmxEventFilter = TypedEventFilter<UnstakeGmxEvent>;

export interface IRewardRouterV2 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IRewardRouterV2Interface;

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
    acceptTransfer(
      _sender: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    batchCompoundForAccounts(
      _accounts: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    batchStakeGmxForAccount(
      _accounts: string[],
      _amounts: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claim(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimEsGmx(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimFees(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    compound(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    compoundForAccount(
      _account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    handleRewards(
      _shouldClaimGmx: boolean,
      _shouldStakeGmx: boolean,
      _shouldClaimEsGmx: boolean,
      _shouldStakeEsGmx: boolean,
      _shouldStakeMultiplierPoints: boolean,
      _shouldClaimWeth: boolean,
      _shouldConvertWethToEth: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    mintAndStakeGlp(
      _token: string,
      _amount: BigNumberish,
      _minUsdg: BigNumberish,
      _minGlp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    mintAndStakeGlpETH(
      _minUsdg: BigNumberish,
      _minGlp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    signalTransfer(
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stakeEsGmx(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stakeGmx(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stakeGmxForAccount(
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unstakeAndRedeemGlp(
      _tokenOut: string,
      _glpAmount: BigNumberish,
      _minOut: BigNumberish,
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unstakeAndRedeemGlpETH(
      _glpAmount: BigNumberish,
      _minOut: BigNumberish,
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unstakeEsGmx(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unstakeGmx(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  acceptTransfer(
    _sender: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  batchCompoundForAccounts(
    _accounts: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  batchStakeGmxForAccount(
    _accounts: string[],
    _amounts: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claim(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimEsGmx(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimFees(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  compound(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  compoundForAccount(
    _account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  handleRewards(
    _shouldClaimGmx: boolean,
    _shouldStakeGmx: boolean,
    _shouldClaimEsGmx: boolean,
    _shouldStakeEsGmx: boolean,
    _shouldStakeMultiplierPoints: boolean,
    _shouldClaimWeth: boolean,
    _shouldConvertWethToEth: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  mintAndStakeGlp(
    _token: string,
    _amount: BigNumberish,
    _minUsdg: BigNumberish,
    _minGlp: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  mintAndStakeGlpETH(
    _minUsdg: BigNumberish,
    _minGlp: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  signalTransfer(
    _receiver: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stakeEsGmx(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stakeGmx(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stakeGmxForAccount(
    _account: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unstakeAndRedeemGlp(
    _tokenOut: string,
    _glpAmount: BigNumberish,
    _minOut: BigNumberish,
    _receiver: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unstakeAndRedeemGlpETH(
    _glpAmount: BigNumberish,
    _minOut: BigNumberish,
    _receiver: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unstakeEsGmx(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unstakeGmx(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    acceptTransfer(_sender: string, overrides?: CallOverrides): Promise<void>;

    batchCompoundForAccounts(
      _accounts: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    batchStakeGmxForAccount(
      _accounts: string[],
      _amounts: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    claim(overrides?: CallOverrides): Promise<void>;

    claimEsGmx(overrides?: CallOverrides): Promise<void>;

    claimFees(overrides?: CallOverrides): Promise<void>;

    compound(overrides?: CallOverrides): Promise<void>;

    compoundForAccount(
      _account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    handleRewards(
      _shouldClaimGmx: boolean,
      _shouldStakeGmx: boolean,
      _shouldClaimEsGmx: boolean,
      _shouldStakeEsGmx: boolean,
      _shouldStakeMultiplierPoints: boolean,
      _shouldClaimWeth: boolean,
      _shouldConvertWethToEth: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    mintAndStakeGlp(
      _token: string,
      _amount: BigNumberish,
      _minUsdg: BigNumberish,
      _minGlp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mintAndStakeGlpETH(
      _minUsdg: BigNumberish,
      _minGlp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    signalTransfer(_receiver: string, overrides?: CallOverrides): Promise<void>;

    stakeEsGmx(_amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    stakeGmx(_amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    stakeGmxForAccount(
      _account: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    unstakeAndRedeemGlp(
      _tokenOut: string,
      _glpAmount: BigNumberish,
      _minOut: BigNumberish,
      _receiver: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    unstakeAndRedeemGlpETH(
      _glpAmount: BigNumberish,
      _minOut: BigNumberish,
      _receiver: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    unstakeEsGmx(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    unstakeGmx(_amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    'StakeGlp(address,uint256)'(
      account?: null,
      amount?: null
    ): StakeGlpEventFilter;
    StakeGlp(account?: null, amount?: null): StakeGlpEventFilter;

    'StakeGmx(address,address,uint256)'(
      account?: null,
      token?: null,
      amount?: null
    ): StakeGmxEventFilter;
    StakeGmx(account?: null, token?: null, amount?: null): StakeGmxEventFilter;

    'UnstakeGlp(address,uint256)'(
      account?: null,
      amount?: null
    ): UnstakeGlpEventFilter;
    UnstakeGlp(account?: null, amount?: null): UnstakeGlpEventFilter;

    'UnstakeGmx(address,address,uint256)'(
      account?: null,
      token?: null,
      amount?: null
    ): UnstakeGmxEventFilter;
    UnstakeGmx(
      account?: null,
      token?: null,
      amount?: null
    ): UnstakeGmxEventFilter;
  };

  estimateGas: {
    acceptTransfer(
      _sender: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    batchCompoundForAccounts(
      _accounts: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    batchStakeGmxForAccount(
      _accounts: string[],
      _amounts: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claim(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimEsGmx(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimFees(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    compound(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    compoundForAccount(
      _account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    handleRewards(
      _shouldClaimGmx: boolean,
      _shouldStakeGmx: boolean,
      _shouldClaimEsGmx: boolean,
      _shouldStakeEsGmx: boolean,
      _shouldStakeMultiplierPoints: boolean,
      _shouldClaimWeth: boolean,
      _shouldConvertWethToEth: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    mintAndStakeGlp(
      _token: string,
      _amount: BigNumberish,
      _minUsdg: BigNumberish,
      _minGlp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    mintAndStakeGlpETH(
      _minUsdg: BigNumberish,
      _minGlp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    signalTransfer(
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stakeEsGmx(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stakeGmx(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stakeGmxForAccount(
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unstakeAndRedeemGlp(
      _tokenOut: string,
      _glpAmount: BigNumberish,
      _minOut: BigNumberish,
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unstakeAndRedeemGlpETH(
      _glpAmount: BigNumberish,
      _minOut: BigNumberish,
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unstakeEsGmx(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unstakeGmx(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptTransfer(
      _sender: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    batchCompoundForAccounts(
      _accounts: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    batchStakeGmxForAccount(
      _accounts: string[],
      _amounts: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claim(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimEsGmx(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimFees(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    compound(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    compoundForAccount(
      _account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    handleRewards(
      _shouldClaimGmx: boolean,
      _shouldStakeGmx: boolean,
      _shouldClaimEsGmx: boolean,
      _shouldStakeEsGmx: boolean,
      _shouldStakeMultiplierPoints: boolean,
      _shouldClaimWeth: boolean,
      _shouldConvertWethToEth: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    mintAndStakeGlp(
      _token: string,
      _amount: BigNumberish,
      _minUsdg: BigNumberish,
      _minGlp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    mintAndStakeGlpETH(
      _minUsdg: BigNumberish,
      _minGlp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    signalTransfer(
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stakeEsGmx(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stakeGmx(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stakeGmxForAccount(
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unstakeAndRedeemGlp(
      _tokenOut: string,
      _glpAmount: BigNumberish,
      _minOut: BigNumberish,
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unstakeAndRedeemGlpETH(
      _glpAmount: BigNumberish,
      _minOut: BigNumberish,
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unstakeEsGmx(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unstakeGmx(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
