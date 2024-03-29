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
} from '../../../../common';

export interface LiquidityPositionInterface extends utils.Interface {
  functions: {};

  events: {
    'LiquidityChanged(uint256,uint32,int24,int24,int128,uint8,int256,int256,uint160)': EventFragment;
    'LiquidityPositionEarningsRealized(uint256,uint32,int24,int24,int256)': EventFragment;
    'LiquidityPositionFundingPaymentRealized(uint256,uint32,int24,int24,int256,int256,int256,int256,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'LiquidityChanged'): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: 'LiquidityPositionEarningsRealized'
  ): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: 'LiquidityPositionFundingPaymentRealized'
  ): EventFragment;
}

export interface LiquidityChangedEventObject {
  accountId: BigNumber;
  poolId: number;
  tickLower: number;
  tickUpper: number;
  liquidityDelta: BigNumber;
  limitOrderType: number;
  vTokenAmountOut: BigNumber;
  vQuoteAmountOut: BigNumber;
  sqrtPriceX96: BigNumber;
}
export type LiquidityChangedEvent = TypedEvent<
  [
    BigNumber,
    number,
    number,
    number,
    BigNumber,
    number,
    BigNumber,
    BigNumber,
    BigNumber
  ],
  LiquidityChangedEventObject
>;

export type LiquidityChangedEventFilter =
  TypedEventFilter<LiquidityChangedEvent>;

export interface LiquidityPositionEarningsRealizedEventObject {
  accountId: BigNumber;
  poolId: number;
  tickLower: number;
  tickUpper: number;
  amount: BigNumber;
}
export type LiquidityPositionEarningsRealizedEvent = TypedEvent<
  [BigNumber, number, number, number, BigNumber],
  LiquidityPositionEarningsRealizedEventObject
>;

export type LiquidityPositionEarningsRealizedEventFilter =
  TypedEventFilter<LiquidityPositionEarningsRealizedEvent>;

export interface LiquidityPositionFundingPaymentRealizedEventObject {
  accountId: BigNumber;
  poolId: number;
  tickLower: number;
  tickUpper: number;
  amount: BigNumber;
  sumALastX128: BigNumber;
  sumBInsideLastX128: BigNumber;
  sumFpInsideLastX128: BigNumber;
  sumFeeInsideLastX128: BigNumber;
}
export type LiquidityPositionFundingPaymentRealizedEvent = TypedEvent<
  [
    BigNumber,
    number,
    number,
    number,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ],
  LiquidityPositionFundingPaymentRealizedEventObject
>;

export type LiquidityPositionFundingPaymentRealizedEventFilter =
  TypedEventFilter<LiquidityPositionFundingPaymentRealizedEvent>;

export interface LiquidityPosition extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LiquidityPositionInterface;

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
    'LiquidityChanged(uint256,uint32,int24,int24,int128,uint8,int256,int256,uint160)'(
      accountId?: PromiseOrValue<BigNumberish> | null,
      poolId?: PromiseOrValue<BigNumberish> | null,
      tickLower?: null,
      tickUpper?: null,
      liquidityDelta?: null,
      limitOrderType?: null,
      vTokenAmountOut?: null,
      vQuoteAmountOut?: null,
      sqrtPriceX96?: null
    ): LiquidityChangedEventFilter;
    LiquidityChanged(
      accountId?: PromiseOrValue<BigNumberish> | null,
      poolId?: PromiseOrValue<BigNumberish> | null,
      tickLower?: null,
      tickUpper?: null,
      liquidityDelta?: null,
      limitOrderType?: null,
      vTokenAmountOut?: null,
      vQuoteAmountOut?: null,
      sqrtPriceX96?: null
    ): LiquidityChangedEventFilter;

    'LiquidityPositionEarningsRealized(uint256,uint32,int24,int24,int256)'(
      accountId?: PromiseOrValue<BigNumberish> | null,
      poolId?: PromiseOrValue<BigNumberish> | null,
      tickLower?: null,
      tickUpper?: null,
      amount?: null
    ): LiquidityPositionEarningsRealizedEventFilter;
    LiquidityPositionEarningsRealized(
      accountId?: PromiseOrValue<BigNumberish> | null,
      poolId?: PromiseOrValue<BigNumberish> | null,
      tickLower?: null,
      tickUpper?: null,
      amount?: null
    ): LiquidityPositionEarningsRealizedEventFilter;

    'LiquidityPositionFundingPaymentRealized(uint256,uint32,int24,int24,int256,int256,int256,int256,uint256)'(
      accountId?: PromiseOrValue<BigNumberish> | null,
      poolId?: PromiseOrValue<BigNumberish> | null,
      tickLower?: null,
      tickUpper?: null,
      amount?: null,
      sumALastX128?: null,
      sumBInsideLastX128?: null,
      sumFpInsideLastX128?: null,
      sumFeeInsideLastX128?: null
    ): LiquidityPositionFundingPaymentRealizedEventFilter;
    LiquidityPositionFundingPaymentRealized(
      accountId?: PromiseOrValue<BigNumberish> | null,
      poolId?: PromiseOrValue<BigNumberish> | null,
      tickLower?: null,
      tickUpper?: null,
      amount?: null,
      sumALastX128?: null,
      sumBInsideLastX128?: null,
      sumFpInsideLastX128?: null,
      sumFeeInsideLastX128?: null
    ): LiquidityPositionFundingPaymentRealizedEventFilter;
  };

  estimateGas: {};

  populateTransaction: {};
}
