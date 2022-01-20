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
  PayableOverrides,
  CallOverrides,
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

export interface ArbSysInterface extends ethers.utils.Interface {
  functions: {
    'arbBlockNumber()': FunctionFragment;
    'arbChainID()': FunctionFragment;
    'arbOSVersion()': FunctionFragment;
    'getStorageAt(address,uint256)': FunctionFragment;
    'getStorageGasAvailable()': FunctionFragment;
    'getTransactionCount(address)': FunctionFragment;
    'isTopLevelCall()': FunctionFragment;
    'mapL1SenderContractAddressToL2Alias(address,address)': FunctionFragment;
    'myCallersAddressWithoutAliasing()': FunctionFragment;
    'sendTxToL1(address,bytes)': FunctionFragment;
    'wasMyCallersAddressAliased()': FunctionFragment;
    'withdrawEth(address)': FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: 'arbBlockNumber',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'arbChainID',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'arbOSVersion',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'getStorageAt',
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'getStorageGasAvailable',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'getTransactionCount',
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: 'isTopLevelCall',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'mapL1SenderContractAddressToL2Alias',
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: 'myCallersAddressWithoutAliasing',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'sendTxToL1',
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: 'wasMyCallersAddressAliased',
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: 'withdrawEth', values: [string]): string;

  decodeFunctionResult(
    functionFragment: 'arbBlockNumber',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'arbChainID', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'arbOSVersion',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getStorageAt',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getStorageGasAvailable',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getTransactionCount',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'isTopLevelCall',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'mapL1SenderContractAddressToL2Alias',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'myCallersAddressWithoutAliasing',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'sendTxToL1', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'wasMyCallersAddressAliased',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'withdrawEth',
    data: BytesLike
  ): Result;

  events: {
    'L2ToL1Transaction(address,address,uint256,uint256,uint256,uint256,uint256,uint256,uint256,bytes)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'L2ToL1Transaction'): EventFragment;
}

export type L2ToL1TransactionEvent = TypedEvent<
  [
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string
  ],
  {
    caller: string;
    destination: string;
    uniqueId: BigNumber;
    batchNumber: BigNumber;
    indexInBatch: BigNumber;
    arbBlockNum: BigNumber;
    ethBlockNum: BigNumber;
    timestamp: BigNumber;
    callvalue: BigNumber;
    data: string;
  }
>;

export type L2ToL1TransactionEventFilter = TypedEventFilter<L2ToL1TransactionEvent>;

export interface ArbSys extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ArbSysInterface;

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
    arbBlockNumber(overrides?: CallOverrides): Promise<[BigNumber]>;

    arbChainID(overrides?: CallOverrides): Promise<[BigNumber]>;

    arbOSVersion(overrides?: CallOverrides): Promise<[BigNumber]>;

    getStorageAt(
      account: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getStorageGasAvailable(overrides?: CallOverrides): Promise<[BigNumber]>;

    getTransactionCount(
      account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    isTopLevelCall(overrides?: CallOverrides): Promise<[boolean]>;

    mapL1SenderContractAddressToL2Alias(
      sender: string,
      dest: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    myCallersAddressWithoutAliasing(
      overrides?: CallOverrides
    ): Promise<[string]>;

    sendTxToL1(
      destination: string,
      calldataForL1: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    wasMyCallersAddressAliased(overrides?: CallOverrides): Promise<[boolean]>;

    withdrawEth(
      destination: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  arbBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;

  arbChainID(overrides?: CallOverrides): Promise<BigNumber>;

  arbOSVersion(overrides?: CallOverrides): Promise<BigNumber>;

  getStorageAt(
    account: string,
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getStorageGasAvailable(overrides?: CallOverrides): Promise<BigNumber>;

  getTransactionCount(
    account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  isTopLevelCall(overrides?: CallOverrides): Promise<boolean>;

  mapL1SenderContractAddressToL2Alias(
    sender: string,
    dest: string,
    overrides?: CallOverrides
  ): Promise<string>;

  myCallersAddressWithoutAliasing(overrides?: CallOverrides): Promise<string>;

  sendTxToL1(
    destination: string,
    calldataForL1: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  wasMyCallersAddressAliased(overrides?: CallOverrides): Promise<boolean>;

  withdrawEth(
    destination: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    arbBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;

    arbChainID(overrides?: CallOverrides): Promise<BigNumber>;

    arbOSVersion(overrides?: CallOverrides): Promise<BigNumber>;

    getStorageAt(
      account: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getStorageGasAvailable(overrides?: CallOverrides): Promise<BigNumber>;

    getTransactionCount(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isTopLevelCall(overrides?: CallOverrides): Promise<boolean>;

    mapL1SenderContractAddressToL2Alias(
      sender: string,
      dest: string,
      overrides?: CallOverrides
    ): Promise<string>;

    myCallersAddressWithoutAliasing(overrides?: CallOverrides): Promise<string>;

    sendTxToL1(
      destination: string,
      calldataForL1: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    wasMyCallersAddressAliased(overrides?: CallOverrides): Promise<boolean>;

    withdrawEth(
      destination: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    'L2ToL1Transaction(address,address,uint256,uint256,uint256,uint256,uint256,uint256,uint256,bytes)'(
      caller?: null,
      destination?: string | null,
      uniqueId?: BigNumberish | null,
      batchNumber?: BigNumberish | null,
      indexInBatch?: null,
      arbBlockNum?: null,
      ethBlockNum?: null,
      timestamp?: null,
      callvalue?: null,
      data?: null
    ): L2ToL1TransactionEventFilter;
    L2ToL1Transaction(
      caller?: null,
      destination?: string | null,
      uniqueId?: BigNumberish | null,
      batchNumber?: BigNumberish | null,
      indexInBatch?: null,
      arbBlockNum?: null,
      ethBlockNum?: null,
      timestamp?: null,
      callvalue?: null,
      data?: null
    ): L2ToL1TransactionEventFilter;
  };

  estimateGas: {
    arbBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;

    arbChainID(overrides?: CallOverrides): Promise<BigNumber>;

    arbOSVersion(overrides?: CallOverrides): Promise<BigNumber>;

    getStorageAt(
      account: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getStorageGasAvailable(overrides?: CallOverrides): Promise<BigNumber>;

    getTransactionCount(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isTopLevelCall(overrides?: CallOverrides): Promise<BigNumber>;

    mapL1SenderContractAddressToL2Alias(
      sender: string,
      dest: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    myCallersAddressWithoutAliasing(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    sendTxToL1(
      destination: string,
      calldataForL1: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    wasMyCallersAddressAliased(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawEth(
      destination: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    arbBlockNumber(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    arbChainID(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    arbOSVersion(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getStorageAt(
      account: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getStorageGasAvailable(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTransactionCount(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isTopLevelCall(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mapL1SenderContractAddressToL2Alias(
      sender: string,
      dest: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    myCallersAddressWithoutAliasing(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    sendTxToL1(
      destination: string,
      calldataForL1: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    wasMyCallersAddressAliased(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdrawEth(
      destination: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
