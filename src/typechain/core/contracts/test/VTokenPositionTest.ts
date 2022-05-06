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
} from '../../common';

export interface VTokenPositionTestInterface extends utils.Interface {
  functions: {
    'init(int256,int256,int256)': FunctionFragment;
    'marketValue(uint256)': FunctionFragment;
    'riskSide()': FunctionFragment;
    'unrealizedFundingPayment()': FunctionFragment;
    'wrapper()': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'init'
      | 'marketValue'
      | 'riskSide'
      | 'unrealizedFundingPayment'
      | 'wrapper'
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'init',
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'marketValue',
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: 'riskSide', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'unrealizedFundingPayment',
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: 'wrapper', values?: undefined): string;

  decodeFunctionResult(functionFragment: 'init', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'marketValue',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'riskSide', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'unrealizedFundingPayment',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'wrapper', data: BytesLike): Result;

  events: {};
}

export interface VTokenPositionTest extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: VTokenPositionTestInterface;

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
    init(
      _balance: BigNumberish,
      _netTraderPosition: BigNumberish,
      _sumALastX128: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    marketValue(
      price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { value: BigNumber }>;

    riskSide(overrides?: CallOverrides): Promise<[number]>;

    unrealizedFundingPayment(overrides?: CallOverrides): Promise<[BigNumber]>;

    wrapper(overrides?: CallOverrides): Promise<[string]>;
  };

  init(
    _balance: BigNumberish,
    _netTraderPosition: BigNumberish,
    _sumALastX128: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  marketValue(
    price: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  riskSide(overrides?: CallOverrides): Promise<number>;

  unrealizedFundingPayment(overrides?: CallOverrides): Promise<BigNumber>;

  wrapper(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    init(
      _balance: BigNumberish,
      _netTraderPosition: BigNumberish,
      _sumALastX128: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    marketValue(
      price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    riskSide(overrides?: CallOverrides): Promise<number>;

    unrealizedFundingPayment(overrides?: CallOverrides): Promise<BigNumber>;

    wrapper(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    init(
      _balance: BigNumberish,
      _netTraderPosition: BigNumberish,
      _sumALastX128: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    marketValue(
      price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    riskSide(overrides?: CallOverrides): Promise<BigNumber>;

    unrealizedFundingPayment(overrides?: CallOverrides): Promise<BigNumber>;

    wrapper(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    init(
      _balance: BigNumberish,
      _netTraderPosition: BigNumberish,
      _sumALastX128: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    marketValue(
      price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    riskSide(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    unrealizedFundingPayment(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    wrapper(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
