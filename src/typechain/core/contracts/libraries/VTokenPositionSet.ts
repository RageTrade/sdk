/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  Signer,
  utils,
} from 'ethers';
import type { EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from '../../common';

export interface VTokenPositionSetInterface extends utils.Interface {
  functions: {};

  events: {
    'TokenPositionChanged(uint256,uint32,int256,int256,uint160,uint160)': EventFragment;
    'TokenPositionFundingPaymentRealized(uint256,uint32,int256,int256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'TokenPositionChanged'): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: 'TokenPositionFundingPaymentRealized'
  ): EventFragment;
}

export interface TokenPositionChangedEventObject {
  accountId: BigNumber;
  poolId: number;
  vTokenAmountOut: BigNumber;
  vQuoteAmountOut: BigNumber;
  sqrtPriceX96Start: BigNumber;
  sqrtPriceX96End: BigNumber;
}
export type TokenPositionChangedEvent = TypedEvent<
  [BigNumber, number, BigNumber, BigNumber, BigNumber, BigNumber],
  TokenPositionChangedEventObject
>;

export type TokenPositionChangedEventFilter =
  TypedEventFilter<TokenPositionChangedEvent>;

export interface TokenPositionFundingPaymentRealizedEventObject {
  accountId: BigNumber;
  poolId: number;
  amount: BigNumber;
  sumALastX128: BigNumber;
}
export type TokenPositionFundingPaymentRealizedEvent = TypedEvent<
  [BigNumber, number, BigNumber, BigNumber],
  TokenPositionFundingPaymentRealizedEventObject
>;

export type TokenPositionFundingPaymentRealizedEventFilter =
  TypedEventFilter<TokenPositionFundingPaymentRealizedEvent>;

export interface VTokenPositionSet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: VTokenPositionSetInterface;

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

  functions: {};

  callStatic: {};

  filters: {
    'TokenPositionChanged(uint256,uint32,int256,int256,uint160,uint160)'(
      accountId?: PromiseOrValue<BigNumberish> | null,
      poolId?: PromiseOrValue<BigNumberish> | null,
      vTokenAmountOut?: null,
      vQuoteAmountOut?: null,
      sqrtPriceX96Start?: null,
      sqrtPriceX96End?: null
    ): TokenPositionChangedEventFilter;
    TokenPositionChanged(
      accountId?: PromiseOrValue<BigNumberish> | null,
      poolId?: PromiseOrValue<BigNumberish> | null,
      vTokenAmountOut?: null,
      vQuoteAmountOut?: null,
      sqrtPriceX96Start?: null,
      sqrtPriceX96End?: null
    ): TokenPositionChangedEventFilter;

    'TokenPositionFundingPaymentRealized(uint256,uint32,int256,int256)'(
      accountId?: PromiseOrValue<BigNumberish> | null,
      poolId?: PromiseOrValue<BigNumberish> | null,
      amount?: null,
      sumALastX128?: null
    ): TokenPositionFundingPaymentRealizedEventFilter;
    TokenPositionFundingPaymentRealized(
      accountId?: PromiseOrValue<BigNumberish> | null,
      poolId?: PromiseOrValue<BigNumberish> | null,
      amount?: null,
      sumALastX128?: null
    ): TokenPositionFundingPaymentRealizedEventFilter;
  };

  estimateGas: {};

  populateTransaction: {};
}
