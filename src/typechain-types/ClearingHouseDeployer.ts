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

export interface ClearingHouseDeployerInterface extends ethers.utils.Interface {
  functions: {
    'proxyAdmin()': FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: 'proxyAdmin',
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: 'proxyAdmin', data: BytesLike): Result;

  events: {};
}

export interface ClearingHouseDeployer extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ClearingHouseDeployerInterface;

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
    proxyAdmin(overrides?: CallOverrides): Promise<[string]>;
  };

  proxyAdmin(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    proxyAdmin(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    proxyAdmin(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    proxyAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
