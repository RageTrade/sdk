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

export interface ClearingHouseDeployerInterface extends utils.Interface {
  contractName: 'ClearingHouseDeployer';
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
  contractName: 'ClearingHouseDeployer';
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
