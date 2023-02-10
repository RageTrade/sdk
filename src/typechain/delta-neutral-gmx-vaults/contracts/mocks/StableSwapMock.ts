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
} from '../../common';

export interface StableSwapMockInterface extends utils.Interface {
  functions: {
    'coins(uint256)': FunctionFragment;
    'exchange(uint256,uint256,uint256,uint256,bool)': FunctionFragment;
    'setPrice(uint256)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: 'coins' | 'exchange' | 'setPrice'
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'coins',
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'exchange',
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: 'setPrice',
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: 'coins', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'exchange', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setPrice', data: BytesLike): Result;

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
    coins(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    exchange(
      i: PromiseOrValue<BigNumberish>,
      j: PromiseOrValue<BigNumberish>,
      dx: PromiseOrValue<BigNumberish>,
      min_dy: PromiseOrValue<BigNumberish>,
      use_eth: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setPrice(
      _price: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  coins(
    index: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  exchange(
    i: PromiseOrValue<BigNumberish>,
    j: PromiseOrValue<BigNumberish>,
    dx: PromiseOrValue<BigNumberish>,
    min_dy: PromiseOrValue<BigNumberish>,
    use_eth: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setPrice(
    _price: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    coins(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    exchange(
      i: PromiseOrValue<BigNumberish>,
      j: PromiseOrValue<BigNumberish>,
      dx: PromiseOrValue<BigNumberish>,
      min_dy: PromiseOrValue<BigNumberish>,
      use_eth: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    setPrice(
      _price: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    coins(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exchange(
      i: PromiseOrValue<BigNumberish>,
      j: PromiseOrValue<BigNumberish>,
      dx: PromiseOrValue<BigNumberish>,
      min_dy: PromiseOrValue<BigNumberish>,
      use_eth: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setPrice(
      _price: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    coins(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    exchange(
      i: PromiseOrValue<BigNumberish>,
      j: PromiseOrValue<BigNumberish>,
      dx: PromiseOrValue<BigNumberish>,
      min_dy: PromiseOrValue<BigNumberish>,
      use_eth: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setPrice(
      _price: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
