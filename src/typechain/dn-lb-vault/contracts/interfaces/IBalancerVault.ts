/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
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
  PromiseOrValue,
} from '../../common';

export interface IBalancerVaultInterface extends utils.Interface {
  functions: {
    'flashLoan(address,address[],uint256[],bytes)': FunctionFragment;
    'getInternalBalance(address,address[])': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: 'flashLoan' | 'getInternalBalance'
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'flashLoan',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>[],
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: 'getInternalBalance',
    values: [PromiseOrValue<string>, PromiseOrValue<string>[]]
  ): string;

  decodeFunctionResult(functionFragment: 'flashLoan', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'getInternalBalance',
    data: BytesLike
  ): Result;

  events: {};
}

export interface IBalancerVault extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IBalancerVaultInterface;

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
    flashLoan(
      recipient: PromiseOrValue<string>,
      tokens: PromiseOrValue<string>[],
      amounts: PromiseOrValue<BigNumberish>[],
      userData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getInternalBalance(
      user: PromiseOrValue<string>,
      tokens: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;
  };

  flashLoan(
    recipient: PromiseOrValue<string>,
    tokens: PromiseOrValue<string>[],
    amounts: PromiseOrValue<BigNumberish>[],
    userData: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getInternalBalance(
    user: PromiseOrValue<string>,
    tokens: PromiseOrValue<string>[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  callStatic: {
    flashLoan(
      recipient: PromiseOrValue<string>,
      tokens: PromiseOrValue<string>[],
      amounts: PromiseOrValue<BigNumberish>[],
      userData: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    getInternalBalance(
      user: PromiseOrValue<string>,
      tokens: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;
  };

  filters: {};

  estimateGas: {
    flashLoan(
      recipient: PromiseOrValue<string>,
      tokens: PromiseOrValue<string>[],
      amounts: PromiseOrValue<BigNumberish>[],
      userData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getInternalBalance(
      user: PromiseOrValue<string>,
      tokens: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    flashLoan(
      recipient: PromiseOrValue<string>,
      tokens: PromiseOrValue<string>[],
      amounts: PromiseOrValue<BigNumberish>[],
      userData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getInternalBalance(
      user: PromiseOrValue<string>,
      tokens: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
