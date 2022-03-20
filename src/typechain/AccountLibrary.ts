/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { BaseContract, BigNumber, BigNumberish, Signer, utils } from 'ethers';
import { EventFragment } from '@ethersproject/abi';
import { Listener, Provider } from '@ethersproject/providers';
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from './common';

export interface AccountLibraryInterface extends utils.Interface {
  contractName: 'AccountLibrary';
  functions: {};

  events: {
    'FundingPaymentRealized(uint256,uint32,int24,int24,int256)': EventFragment;
    'LiquidityChanged(uint256,uint32,int24,int24,int128,uint8,int256,int256)': EventFragment;
    'LiquidityPositionEarningsRealized(uint256,uint32,int24,int24,int256)': EventFragment;
    'LiquidityPositionsLiquidated(uint256,address,int256,int256,int256)': EventFragment;
    'MarginUpdated(uint256,uint32,int256)': EventFragment;
    'ProfitUpdated(uint256,int256)': EventFragment;
    'ProtocolFeesWithdrawn(address,uint256)': EventFragment;
    'TokenPositionChanged(uint256,uint32,int256,int256,uint160,uint160)': EventFragment;
    'TokenPositionChangedDueToLiquidityChanged(uint256,uint32,int24,int24,int256)': EventFragment;
    'TokenPositionLiquidated(uint256,uint256,uint32,int256,int256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'FundingPaymentRealized'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'LiquidityChanged'): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: 'LiquidityPositionEarningsRealized'
  ): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: 'LiquidityPositionsLiquidated'
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'MarginUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'ProfitUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'ProtocolFeesWithdrawn'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'TokenPositionChanged'): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: 'TokenPositionChangedDueToLiquidityChanged'
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'TokenPositionLiquidated'): EventFragment;
}

export type FundingPaymentRealizedEvent = TypedEvent<
  [BigNumber, number, number, number, BigNumber],
  {
    accountId: BigNumber;
    poolId: number;
    tickLower: number;
    tickUpper: number;
    amount: BigNumber;
  }
>;

export type FundingPaymentRealizedEventFilter = TypedEventFilter<FundingPaymentRealizedEvent>;

export type LiquidityChangedEvent = TypedEvent<
  [BigNumber, number, number, number, BigNumber, number, BigNumber, BigNumber],
  {
    accountId: BigNumber;
    poolId: number;
    tickLower: number;
    tickUpper: number;
    liquidityDelta: BigNumber;
    limitOrderType: number;
    vTokenAmountOut: BigNumber;
    vQuoteAmountOut: BigNumber;
  }
>;

export type LiquidityChangedEventFilter = TypedEventFilter<LiquidityChangedEvent>;

export type LiquidityPositionEarningsRealizedEvent = TypedEvent<
  [BigNumber, number, number, number, BigNumber],
  {
    accountId: BigNumber;
    poolId: number;
    tickLower: number;
    tickUpper: number;
    amount: BigNumber;
  }
>;

export type LiquidityPositionEarningsRealizedEventFilter = TypedEventFilter<LiquidityPositionEarningsRealizedEvent>;

export type LiquidityPositionsLiquidatedEvent = TypedEvent<
  [BigNumber, string, BigNumber, BigNumber, BigNumber],
  {
    accountId: BigNumber;
    keeperAddress: string;
    liquidationFee: BigNumber;
    keeperFee: BigNumber;
    insuranceFundFee: BigNumber;
  }
>;

export type LiquidityPositionsLiquidatedEventFilter = TypedEventFilter<LiquidityPositionsLiquidatedEvent>;

export type MarginUpdatedEvent = TypedEvent<
  [BigNumber, number, BigNumber],
  { accountId: BigNumber; collateralId: number; amount: BigNumber }
>;

export type MarginUpdatedEventFilter = TypedEventFilter<MarginUpdatedEvent>;

export type ProfitUpdatedEvent = TypedEvent<
  [BigNumber, BigNumber],
  { accountId: BigNumber; amount: BigNumber }
>;

export type ProfitUpdatedEventFilter = TypedEventFilter<ProfitUpdatedEvent>;

export type ProtocolFeesWithdrawnEvent = TypedEvent<
  [string, BigNumber],
  { wrapperAddress: string; feeAmount: BigNumber }
>;

export type ProtocolFeesWithdrawnEventFilter = TypedEventFilter<ProtocolFeesWithdrawnEvent>;

export type TokenPositionChangedEvent = TypedEvent<
  [BigNumber, number, BigNumber, BigNumber, BigNumber, BigNumber],
  {
    accountId: BigNumber;
    poolId: number;
    vTokenAmountOut: BigNumber;
    vQuoteAmountOut: BigNumber;
    sqrtPriceX96Start: BigNumber;
    sqrtPriceX96End: BigNumber;
  }
>;

export type TokenPositionChangedEventFilter = TypedEventFilter<TokenPositionChangedEvent>;

export type TokenPositionChangedDueToLiquidityChangedEvent = TypedEvent<
  [BigNumber, number, number, number, BigNumber],
  {
    accountId: BigNumber;
    poolId: number;
    tickLower: number;
    tickUpper: number;
    vTokenAmountOut: BigNumber;
  }
>;

export type TokenPositionChangedDueToLiquidityChangedEventFilter = TypedEventFilter<TokenPositionChangedDueToLiquidityChangedEvent>;

export type TokenPositionLiquidatedEvent = TypedEvent<
  [BigNumber, BigNumber, number, BigNumber, BigNumber],
  {
    accountId: BigNumber;
    liquidatorAccountId: BigNumber;
    poolId: number;
    keeperFee: BigNumber;
    insuranceFundFee: BigNumber;
  }
>;

export type TokenPositionLiquidatedEventFilter = TypedEventFilter<TokenPositionLiquidatedEvent>;

export interface AccountLibrary extends BaseContract {
  contractName: 'AccountLibrary';
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AccountLibraryInterface;

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
    'FundingPaymentRealized(uint256,uint32,int24,int24,int256)'(
      accountId?: BigNumberish | null,
      poolId?: BigNumberish | null,
      tickLower?: null,
      tickUpper?: null,
      amount?: null
    ): FundingPaymentRealizedEventFilter;
    FundingPaymentRealized(
      accountId?: BigNumberish | null,
      poolId?: BigNumberish | null,
      tickLower?: null,
      tickUpper?: null,
      amount?: null
    ): FundingPaymentRealizedEventFilter;

    'LiquidityChanged(uint256,uint32,int24,int24,int128,uint8,int256,int256)'(
      accountId?: BigNumberish | null,
      poolId?: BigNumberish | null,
      tickLower?: null,
      tickUpper?: null,
      liquidityDelta?: null,
      limitOrderType?: null,
      vTokenAmountOut?: null,
      vQuoteAmountOut?: null
    ): LiquidityChangedEventFilter;
    LiquidityChanged(
      accountId?: BigNumberish | null,
      poolId?: BigNumberish | null,
      tickLower?: null,
      tickUpper?: null,
      liquidityDelta?: null,
      limitOrderType?: null,
      vTokenAmountOut?: null,
      vQuoteAmountOut?: null
    ): LiquidityChangedEventFilter;

    'LiquidityPositionEarningsRealized(uint256,uint32,int24,int24,int256)'(
      accountId?: BigNumberish | null,
      poolId?: BigNumberish | null,
      tickLower?: null,
      tickUpper?: null,
      amount?: null
    ): LiquidityPositionEarningsRealizedEventFilter;
    LiquidityPositionEarningsRealized(
      accountId?: BigNumberish | null,
      poolId?: BigNumberish | null,
      tickLower?: null,
      tickUpper?: null,
      amount?: null
    ): LiquidityPositionEarningsRealizedEventFilter;

    'LiquidityPositionsLiquidated(uint256,address,int256,int256,int256)'(
      accountId?: BigNumberish | null,
      keeperAddress?: string | null,
      liquidationFee?: null,
      keeperFee?: null,
      insuranceFundFee?: null
    ): LiquidityPositionsLiquidatedEventFilter;
    LiquidityPositionsLiquidated(
      accountId?: BigNumberish | null,
      keeperAddress?: string | null,
      liquidationFee?: null,
      keeperFee?: null,
      insuranceFundFee?: null
    ): LiquidityPositionsLiquidatedEventFilter;

    'MarginUpdated(uint256,uint32,int256)'(
      accountId?: BigNumberish | null,
      collateralId?: BigNumberish | null,
      amount?: null
    ): MarginUpdatedEventFilter;
    MarginUpdated(
      accountId?: BigNumberish | null,
      collateralId?: BigNumberish | null,
      amount?: null
    ): MarginUpdatedEventFilter;

    'ProfitUpdated(uint256,int256)'(
      accountId?: BigNumberish | null,
      amount?: null
    ): ProfitUpdatedEventFilter;
    ProfitUpdated(
      accountId?: BigNumberish | null,
      amount?: null
    ): ProfitUpdatedEventFilter;

    'ProtocolFeesWithdrawn(address,uint256)'(
      wrapperAddress?: string | null,
      feeAmount?: null
    ): ProtocolFeesWithdrawnEventFilter;
    ProtocolFeesWithdrawn(
      wrapperAddress?: string | null,
      feeAmount?: null
    ): ProtocolFeesWithdrawnEventFilter;

    'TokenPositionChanged(uint256,uint32,int256,int256,uint160,uint160)'(
      accountId?: BigNumberish | null,
      poolId?: BigNumberish | null,
      vTokenAmountOut?: null,
      vQuoteAmountOut?: null,
      sqrtPriceX96Start?: null,
      sqrtPriceX96End?: null
    ): TokenPositionChangedEventFilter;
    TokenPositionChanged(
      accountId?: BigNumberish | null,
      poolId?: BigNumberish | null,
      vTokenAmountOut?: null,
      vQuoteAmountOut?: null,
      sqrtPriceX96Start?: null,
      sqrtPriceX96End?: null
    ): TokenPositionChangedEventFilter;

    'TokenPositionChangedDueToLiquidityChanged(uint256,uint32,int24,int24,int256)'(
      accountId?: BigNumberish | null,
      poolId?: BigNumberish | null,
      tickLower?: null,
      tickUpper?: null,
      vTokenAmountOut?: null
    ): TokenPositionChangedDueToLiquidityChangedEventFilter;
    TokenPositionChangedDueToLiquidityChanged(
      accountId?: BigNumberish | null,
      poolId?: BigNumberish | null,
      tickLower?: null,
      tickUpper?: null,
      vTokenAmountOut?: null
    ): TokenPositionChangedDueToLiquidityChangedEventFilter;

    'TokenPositionLiquidated(uint256,uint256,uint32,int256,int256)'(
      accountId?: BigNumberish | null,
      liquidatorAccountId?: BigNumberish | null,
      poolId?: BigNumberish | null,
      keeperFee?: null,
      insuranceFundFee?: null
    ): TokenPositionLiquidatedEventFilter;
    TokenPositionLiquidated(
      accountId?: BigNumberish | null,
      liquidatorAccountId?: BigNumberish | null,
      poolId?: BigNumberish | null,
      keeperFee?: null,
      insuranceFundFee?: null
    ): TokenPositionLiquidatedEventFilter;
  };

  estimateGas: {};

  populateTransaction: {};
}
