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

export interface IDnGmxTraderHedgeStrategyInterface extends utils.Interface {
  functions: {
    'btcTraderOIHedge()': FunctionFragment;
    'ethTraderOIHedge()': FunctionFragment;
    'overrideTraderOIHedges(int128,int128)': FunctionFragment;
    'setTraderOIHedgeBps(uint16)': FunctionFragment;
    'setTraderOIHedges()': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'btcTraderOIHedge'
      | 'ethTraderOIHedge'
      | 'overrideTraderOIHedges'
      | 'setTraderOIHedgeBps'
      | 'setTraderOIHedges'
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'btcTraderOIHedge',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'ethTraderOIHedge',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'overrideTraderOIHedges',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setTraderOIHedgeBps',
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setTraderOIHedges',
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: 'btcTraderOIHedge',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'ethTraderOIHedge',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'overrideTraderOIHedges',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'setTraderOIHedgeBps',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'setTraderOIHedges',
    data: BytesLike
  ): Result;

  events: {};
}

export interface IDnGmxTraderHedgeStrategy extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IDnGmxTraderHedgeStrategyInterface;

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
    btcTraderOIHedge(overrides?: CallOverrides): Promise<[BigNumber]>;

    ethTraderOIHedge(overrides?: CallOverrides): Promise<[BigNumber]>;

    overrideTraderOIHedges(
      btcTraderOIHedge: PromiseOrValue<BigNumberish>,
      ethTraderOIHedge: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setTraderOIHedgeBps(
      _traderOIHedgeBps: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setTraderOIHedges(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  btcTraderOIHedge(overrides?: CallOverrides): Promise<BigNumber>;

  ethTraderOIHedge(overrides?: CallOverrides): Promise<BigNumber>;

  overrideTraderOIHedges(
    btcTraderOIHedge: PromiseOrValue<BigNumberish>,
    ethTraderOIHedge: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setTraderOIHedgeBps(
    _traderOIHedgeBps: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setTraderOIHedges(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    btcTraderOIHedge(overrides?: CallOverrides): Promise<BigNumber>;

    ethTraderOIHedge(overrides?: CallOverrides): Promise<BigNumber>;

    overrideTraderOIHedges(
      btcTraderOIHedge: PromiseOrValue<BigNumberish>,
      ethTraderOIHedge: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setTraderOIHedgeBps(
      _traderOIHedgeBps: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setTraderOIHedges(overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    btcTraderOIHedge(overrides?: CallOverrides): Promise<BigNumber>;

    ethTraderOIHedge(overrides?: CallOverrides): Promise<BigNumber>;

    overrideTraderOIHedges(
      btcTraderOIHedge: PromiseOrValue<BigNumberish>,
      ethTraderOIHedge: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setTraderOIHedgeBps(
      _traderOIHedgeBps: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setTraderOIHedges(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    btcTraderOIHedge(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ethTraderOIHedge(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    overrideTraderOIHedges(
      btcTraderOIHedge: PromiseOrValue<BigNumberish>,
      ethTraderOIHedge: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setTraderOIHedgeBps(
      _traderOIHedgeBps: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setTraderOIHedges(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
