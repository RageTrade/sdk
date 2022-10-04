/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
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

export interface IBorrowerInterface extends utils.Interface {
  functions: {
    'getUsdcBorrowed()': FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: 'getUsdcBorrowed'): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'getUsdcBorrowed',
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: 'getUsdcBorrowed',
    data: BytesLike
  ): Result;

  events: {};
}

export interface IBorrower extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IBorrowerInterface;

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
    getUsdcBorrowed(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  getUsdcBorrowed(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    getUsdcBorrowed(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    getUsdcBorrowed(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getUsdcBorrowed(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
