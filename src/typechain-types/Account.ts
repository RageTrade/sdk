/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
} from 'ethers';
import { BytesLike } from '@ethersproject/bytes';
import { Listener, Provider } from '@ethersproject/providers';
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi';
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from './common';

export interface AccountInterface extends ethers.utils.Interface {
  functions: {};

  events: {
    'AccountCreated(address,uint256)': EventFragment;
    'DepositMargin(uint256,address,uint256)': EventFragment;
    'FundingPayment(uint256,address,int24,int24,int256)': EventFragment;
    'LiquidateRanges(uint256,address,int256,int256,int256)': EventFragment;
    'LiquidateTokenPosition(uint256,uint256,address,uint16,uint256,uint256,int256)': EventFragment;
    'LiquidityChange(uint256,address,int24,int24,int128,uint8,int256,int256)': EventFragment;
    'LiquidityFee(uint256,address,int24,int24,int256)': EventFragment;
    'LiquidityTokenPositionChange(uint256,address,int24,int24,int256)': EventFragment;
    'ProtocolFeeWithdrawm(address,uint256)': EventFragment;
    'TokenPositionChange(uint256,address,int256,int256)': EventFragment;
    'WithdrawMargin(uint256,address,uint256)': EventFragment;
    'WithdrawProfit(uint256,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'AccountCreated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'DepositMargin'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'FundingPayment'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'LiquidateRanges'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'LiquidateTokenPosition'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'LiquidityChange'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'LiquidityFee'): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: 'LiquidityTokenPositionChange'
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'ProtocolFeeWithdrawm'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'TokenPositionChange'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'WithdrawMargin'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'WithdrawProfit'): EventFragment;
}

export type AccountCreatedEvent = TypedEvent<
  [string, BigNumber],
  { ownerAddress: string; accountNo: BigNumber }
>;

export type AccountCreatedEventFilter = TypedEventFilter<AccountCreatedEvent>;

export type DepositMarginEvent = TypedEvent<
  [BigNumber, string, BigNumber],
  { accountNo: BigNumber; rTokenAddress: string; amount: BigNumber }
>;

export type DepositMarginEventFilter = TypedEventFilter<DepositMarginEvent>;

export type FundingPaymentEvent = TypedEvent<
  [BigNumber, string, number, number, BigNumber],
  {
    accountNo: BigNumber;
    vToken: string;
    tickLower: number;
    tickUpper: number;
    amount: BigNumber;
  }
>;

export type FundingPaymentEventFilter = TypedEventFilter<FundingPaymentEvent>;

export type LiquidateRangesEvent = TypedEvent<
  [BigNumber, string, BigNumber, BigNumber, BigNumber],
  {
    accountNo: BigNumber;
    keeperAddress: string;
    liquidationFee: BigNumber;
    keeperFee: BigNumber;
    insuranceFundFee: BigNumber;
  }
>;

export type LiquidateRangesEventFilter = TypedEventFilter<LiquidateRangesEvent>;

export type LiquidateTokenPositionEvent = TypedEvent<
  [BigNumber, BigNumber, string, number, BigNumber, BigNumber, BigNumber],
  {
    accountNo: BigNumber;
    liquidatorAccountNo: BigNumber;
    vToken: string;
    liquidationBps: number;
    liquidationPriceX128: BigNumber;
    liquidatorPriceX128: BigNumber;
    insuranceFundFee: BigNumber;
  }
>;

export type LiquidateTokenPositionEventFilter = TypedEventFilter<LiquidateTokenPositionEvent>;

export type LiquidityChangeEvent = TypedEvent<
  [BigNumber, string, number, number, BigNumber, number, BigNumber, BigNumber],
  {
    accountNo: BigNumber;
    vToken: string;
    tickLower: number;
    tickUpper: number;
    liquidityDelta: BigNumber;
    limitOrderType: number;
    tokenAmountOut: BigNumber;
    baseAmountOut: BigNumber;
  }
>;

export type LiquidityChangeEventFilter = TypedEventFilter<LiquidityChangeEvent>;

export type LiquidityFeeEvent = TypedEvent<
  [BigNumber, string, number, number, BigNumber],
  {
    accountNo: BigNumber;
    vToken: string;
    tickLower: number;
    tickUpper: number;
    amount: BigNumber;
  }
>;

export type LiquidityFeeEventFilter = TypedEventFilter<LiquidityFeeEvent>;

export type LiquidityTokenPositionChangeEvent = TypedEvent<
  [BigNumber, string, number, number, BigNumber],
  {
    accountNo: BigNumber;
    vToken: string;
    tickLower: number;
    tickUpper: number;
    tokenAmountOut: BigNumber;
  }
>;

export type LiquidityTokenPositionChangeEventFilter = TypedEventFilter<LiquidityTokenPositionChangeEvent>;

export type ProtocolFeeWithdrawmEvent = TypedEvent<
  [string, BigNumber],
  { wrapperAddress: string; feeAmount: BigNumber }
>;

export type ProtocolFeeWithdrawmEventFilter = TypedEventFilter<ProtocolFeeWithdrawmEvent>;

export type TokenPositionChangeEvent = TypedEvent<
  [BigNumber, string, BigNumber, BigNumber],
  {
    accountNo: BigNumber;
    vToken: string;
    tokenAmountOut: BigNumber;
    baseAmountOut: BigNumber;
  }
>;

export type TokenPositionChangeEventFilter = TypedEventFilter<TokenPositionChangeEvent>;

export type WithdrawMarginEvent = TypedEvent<
  [BigNumber, string, BigNumber],
  { accountNo: BigNumber; rTokenAddress: string; amount: BigNumber }
>;

export type WithdrawMarginEventFilter = TypedEventFilter<WithdrawMarginEvent>;

export type WithdrawProfitEvent = TypedEvent<
  [BigNumber, BigNumber],
  { accountNo: BigNumber; amount: BigNumber }
>;

export type WithdrawProfitEventFilter = TypedEventFilter<WithdrawProfitEvent>;

export interface Account extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AccountInterface;

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
    'AccountCreated(address,uint256)'(
      ownerAddress?: null,
      accountNo?: null
    ): AccountCreatedEventFilter;
    AccountCreated(
      ownerAddress?: null,
      accountNo?: null
    ): AccountCreatedEventFilter;

    'DepositMargin(uint256,address,uint256)'(
      accountNo?: null,
      rTokenAddress?: null,
      amount?: null
    ): DepositMarginEventFilter;
    DepositMargin(
      accountNo?: null,
      rTokenAddress?: null,
      amount?: null
    ): DepositMarginEventFilter;

    'FundingPayment(uint256,address,int24,int24,int256)'(
      accountNo?: null,
      vToken?: null,
      tickLower?: null,
      tickUpper?: null,
      amount?: null
    ): FundingPaymentEventFilter;
    FundingPayment(
      accountNo?: null,
      vToken?: null,
      tickLower?: null,
      tickUpper?: null,
      amount?: null
    ): FundingPaymentEventFilter;

    'LiquidateRanges(uint256,address,int256,int256,int256)'(
      accountNo?: null,
      keeperAddress?: null,
      liquidationFee?: null,
      keeperFee?: null,
      insuranceFundFee?: null
    ): LiquidateRangesEventFilter;
    LiquidateRanges(
      accountNo?: null,
      keeperAddress?: null,
      liquidationFee?: null,
      keeperFee?: null,
      insuranceFundFee?: null
    ): LiquidateRangesEventFilter;

    'LiquidateTokenPosition(uint256,uint256,address,uint16,uint256,uint256,int256)'(
      accountNo?: null,
      liquidatorAccountNo?: null,
      vToken?: null,
      liquidationBps?: null,
      liquidationPriceX128?: null,
      liquidatorPriceX128?: null,
      insuranceFundFee?: null
    ): LiquidateTokenPositionEventFilter;
    LiquidateTokenPosition(
      accountNo?: null,
      liquidatorAccountNo?: null,
      vToken?: null,
      liquidationBps?: null,
      liquidationPriceX128?: null,
      liquidatorPriceX128?: null,
      insuranceFundFee?: null
    ): LiquidateTokenPositionEventFilter;

    'LiquidityChange(uint256,address,int24,int24,int128,uint8,int256,int256)'(
      accountNo?: null,
      vToken?: null,
      tickLower?: null,
      tickUpper?: null,
      liquidityDelta?: null,
      limitOrderType?: null,
      tokenAmountOut?: null,
      baseAmountOut?: null
    ): LiquidityChangeEventFilter;
    LiquidityChange(
      accountNo?: null,
      vToken?: null,
      tickLower?: null,
      tickUpper?: null,
      liquidityDelta?: null,
      limitOrderType?: null,
      tokenAmountOut?: null,
      baseAmountOut?: null
    ): LiquidityChangeEventFilter;

    'LiquidityFee(uint256,address,int24,int24,int256)'(
      accountNo?: null,
      vToken?: null,
      tickLower?: null,
      tickUpper?: null,
      amount?: null
    ): LiquidityFeeEventFilter;
    LiquidityFee(
      accountNo?: null,
      vToken?: null,
      tickLower?: null,
      tickUpper?: null,
      amount?: null
    ): LiquidityFeeEventFilter;

    'LiquidityTokenPositionChange(uint256,address,int24,int24,int256)'(
      accountNo?: null,
      vToken?: null,
      tickLower?: null,
      tickUpper?: null,
      tokenAmountOut?: null
    ): LiquidityTokenPositionChangeEventFilter;
    LiquidityTokenPositionChange(
      accountNo?: null,
      vToken?: null,
      tickLower?: null,
      tickUpper?: null,
      tokenAmountOut?: null
    ): LiquidityTokenPositionChangeEventFilter;

    'ProtocolFeeWithdrawm(address,uint256)'(
      wrapperAddress?: null,
      feeAmount?: null
    ): ProtocolFeeWithdrawmEventFilter;
    ProtocolFeeWithdrawm(
      wrapperAddress?: null,
      feeAmount?: null
    ): ProtocolFeeWithdrawmEventFilter;

    'TokenPositionChange(uint256,address,int256,int256)'(
      accountNo?: null,
      vToken?: null,
      tokenAmountOut?: null,
      baseAmountOut?: null
    ): TokenPositionChangeEventFilter;
    TokenPositionChange(
      accountNo?: null,
      vToken?: null,
      tokenAmountOut?: null,
      baseAmountOut?: null
    ): TokenPositionChangeEventFilter;

    'WithdrawMargin(uint256,address,uint256)'(
      accountNo?: null,
      rTokenAddress?: null,
      amount?: null
    ): WithdrawMarginEventFilter;
    WithdrawMargin(
      accountNo?: null,
      rTokenAddress?: null,
      amount?: null
    ): WithdrawMarginEventFilter;

    'WithdrawProfit(uint256,uint256)'(
      accountNo?: null,
      amount?: null
    ): WithdrawProfitEventFilter;
    WithdrawProfit(accountNo?: null, amount?: null): WithdrawProfitEventFilter;
  };

  estimateGas: {};

  populateTransaction: {};
}
