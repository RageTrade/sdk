/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import { FunctionFragment, Result } from '@ethersproject/abi';
import { Listener, Provider } from '@ethersproject/providers';
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from './common';

export interface ClearingHouseStorageInterface extends utils.Interface {
  contractName: 'ClearingHouseStorage';
  functions: {
    'insuranceFund()': FunctionFragment;
    'nativeOracle()': FunctionFragment;
    'numAccounts()': FunctionFragment;
    'rageTradeFactoryAddress()': FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: 'insuranceFund',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'nativeOracle',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'numAccounts',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'rageTradeFactoryAddress',
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: 'insuranceFund',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'nativeOracle',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'numAccounts',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'rageTradeFactoryAddress',
    data: BytesLike
  ): Result;

  events: {};
}

export interface ClearingHouseStorage extends BaseContract {
  contractName: 'ClearingHouseStorage';
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ClearingHouseStorageInterface;

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
    insuranceFund(overrides?: CallOverrides): Promise<[string]>;

    nativeOracle(overrides?: CallOverrides): Promise<[string]>;

    numAccounts(overrides?: CallOverrides): Promise<[BigNumber]>;

    rageTradeFactoryAddress(overrides?: CallOverrides): Promise<[string]>;
  };

  insuranceFund(overrides?: CallOverrides): Promise<string>;

  nativeOracle(overrides?: CallOverrides): Promise<string>;

  numAccounts(overrides?: CallOverrides): Promise<BigNumber>;

  rageTradeFactoryAddress(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    insuranceFund(overrides?: CallOverrides): Promise<string>;

    nativeOracle(overrides?: CallOverrides): Promise<string>;

    numAccounts(overrides?: CallOverrides): Promise<BigNumber>;

    rageTradeFactoryAddress(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    insuranceFund(overrides?: CallOverrides): Promise<BigNumber>;

    nativeOracle(overrides?: CallOverrides): Promise<BigNumber>;

    numAccounts(overrides?: CallOverrides): Promise<BigNumber>;

    rageTradeFactoryAddress(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    insuranceFund(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nativeOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    numAccounts(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rageTradeFactoryAddress(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
