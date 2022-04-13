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
} from '../../../common';

export declare namespace FundingPayment {
  export type InfoStruct = {
    sumAX128: BigNumberish;
    sumBX128: BigNumberish;
    sumFpX128: BigNumberish;
    timestampLast: BigNumberish;
  };

  export type InfoStructOutput = [BigNumber, BigNumber, BigNumber, number] & {
    sumAX128: BigNumber;
    sumBX128: BigNumber;
    sumFpX128: BigNumber;
    timestampLast: number;
  };
}

export interface FundingPaymentInterface extends utils.Interface {
  functions: {};

  events: {
    'FundingPaymentStateUpdated(tuple,int256,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'FundingPaymentStateUpdated'): EventFragment;
}

export interface FundingPaymentStateUpdatedEventObject {
  fundingPayment: FundingPayment.InfoStructOutput;
  fundingRateX128: BigNumber;
  virtualPriceX128: BigNumber;
}
export type FundingPaymentStateUpdatedEvent = TypedEvent<
  [FundingPayment.InfoStructOutput, BigNumber, BigNumber],
  FundingPaymentStateUpdatedEventObject
>;

export type FundingPaymentStateUpdatedEventFilter =
  TypedEventFilter<FundingPaymentStateUpdatedEvent>;

export interface FundingPayment extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: FundingPaymentInterface;

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
    'FundingPaymentStateUpdated(tuple,int256,uint256)'(
      fundingPayment?: null,
      fundingRateX128?: null,
      virtualPriceX128?: null
    ): FundingPaymentStateUpdatedEventFilter;
    FundingPaymentStateUpdated(
      fundingPayment?: null,
      fundingRateX128?: null,
      virtualPriceX128?: null
    ): FundingPaymentStateUpdatedEventFilter;
  };

  estimateGas: {};

  populateTransaction: {};
}
