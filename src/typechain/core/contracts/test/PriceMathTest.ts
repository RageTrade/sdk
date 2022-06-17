/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
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
} from '../../common';

export interface PriceMathTestInterface extends utils.Interface {
  functions: {
    'toPriceX128(uint160)': FunctionFragment;
    'toSqrtPriceX96(uint256)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: 'toPriceX128' | 'toSqrtPriceX96'
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'toPriceX128',
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'toSqrtPriceX96',
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: 'toPriceX128',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'toSqrtPriceX96',
    data: BytesLike
  ): Result;

  events: {};
}

export interface PriceMathTest extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PriceMathTestInterface;

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
    toPriceX128(
      sqrtPriceX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { priceX128: BigNumber }>;

    toSqrtPriceX96(
      priceX128: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { sqrtPriceX96: BigNumber }>;
  };

  toPriceX128(
    sqrtPriceX96: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  toSqrtPriceX96(
    priceX128: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    toPriceX128(
      sqrtPriceX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    toSqrtPriceX96(
      priceX128: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    toPriceX128(
      sqrtPriceX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    toSqrtPriceX96(
      priceX128: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    toPriceX128(
      sqrtPriceX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    toSqrtPriceX96(
      priceX128: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
