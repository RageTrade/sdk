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
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from '../../../../common';

export interface IInitializableDebtTokenInterface extends utils.Interface {
  functions: {
    'initialize(address,address,address,uint8,string,string,bytes)': FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: 'initialize'): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'initialize',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;

  decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result;

  events: {
    'Initialized(address,address,address,uint8,string,string,bytes)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'Initialized'): EventFragment;
}

export interface InitializedEventObject {
  underlyingAsset: string;
  pool: string;
  incentivesController: string;
  debtTokenDecimals: number;
  debtTokenName: string;
  debtTokenSymbol: string;
  params: string;
}
export type InitializedEvent = TypedEvent<
  [string, string, string, number, string, string, string],
  InitializedEventObject
>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface IInitializableDebtToken extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IInitializableDebtTokenInterface;

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
    initialize(
      pool: PromiseOrValue<string>,
      underlyingAsset: PromiseOrValue<string>,
      incentivesController: PromiseOrValue<string>,
      debtTokenDecimals: PromiseOrValue<BigNumberish>,
      debtTokenName: PromiseOrValue<string>,
      debtTokenSymbol: PromiseOrValue<string>,
      params: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  initialize(
    pool: PromiseOrValue<string>,
    underlyingAsset: PromiseOrValue<string>,
    incentivesController: PromiseOrValue<string>,
    debtTokenDecimals: PromiseOrValue<BigNumberish>,
    debtTokenName: PromiseOrValue<string>,
    debtTokenSymbol: PromiseOrValue<string>,
    params: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    initialize(
      pool: PromiseOrValue<string>,
      underlyingAsset: PromiseOrValue<string>,
      incentivesController: PromiseOrValue<string>,
      debtTokenDecimals: PromiseOrValue<BigNumberish>,
      debtTokenName: PromiseOrValue<string>,
      debtTokenSymbol: PromiseOrValue<string>,
      params: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    'Initialized(address,address,address,uint8,string,string,bytes)'(
      underlyingAsset?: PromiseOrValue<string> | null,
      pool?: PromiseOrValue<string> | null,
      incentivesController?: null,
      debtTokenDecimals?: null,
      debtTokenName?: null,
      debtTokenSymbol?: null,
      params?: null
    ): InitializedEventFilter;
    Initialized(
      underlyingAsset?: PromiseOrValue<string> | null,
      pool?: PromiseOrValue<string> | null,
      incentivesController?: null,
      debtTokenDecimals?: null,
      debtTokenName?: null,
      debtTokenSymbol?: null,
      params?: null
    ): InitializedEventFilter;
  };

  estimateGas: {
    initialize(
      pool: PromiseOrValue<string>,
      underlyingAsset: PromiseOrValue<string>,
      incentivesController: PromiseOrValue<string>,
      debtTokenDecimals: PromiseOrValue<BigNumberish>,
      debtTokenName: PromiseOrValue<string>,
      debtTokenSymbol: PromiseOrValue<string>,
      params: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    initialize(
      pool: PromiseOrValue<string>,
      underlyingAsset: PromiseOrValue<string>,
      incentivesController: PromiseOrValue<string>,
      debtTokenDecimals: PromiseOrValue<BigNumberish>,
      debtTokenName: PromiseOrValue<string>,
      debtTokenSymbol: PromiseOrValue<string>,
      params: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
