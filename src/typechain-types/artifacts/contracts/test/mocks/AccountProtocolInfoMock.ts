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
} from '../../../../common';

export declare namespace IClearingHouseStructures {
  export type LiquidationParamsStruct = {
    rangeLiquidationFeeFraction: BigNumberish;
    tokenLiquidationFeeFraction: BigNumberish;
    closeFactorMMThresholdBps: BigNumberish;
    partialLiquidationCloseFactorBps: BigNumberish;
    insuranceFundFeeShareBps: BigNumberish;
    liquidationSlippageSqrtToleranceBps: BigNumberish;
    maxRangeLiquidationFees: BigNumberish;
    minNotionalLiquidatable: BigNumberish;
  };

  export type LiquidationParamsStructOutput = [
    number,
    number,
    number,
    number,
    number,
    number,
    BigNumber,
    BigNumber
  ] & {
    rangeLiquidationFeeFraction: number;
    tokenLiquidationFeeFraction: number;
    closeFactorMMThresholdBps: number;
    partialLiquidationCloseFactorBps: number;
    insuranceFundFeeShareBps: number;
    liquidationSlippageSqrtToleranceBps: number;
    maxRangeLiquidationFees: BigNumber;
    minNotionalLiquidatable: BigNumber;
  };

  export type PoolSettingsStruct = {
    initialMarginRatioBps: BigNumberish;
    maintainanceMarginRatioBps: BigNumberish;
    maxVirtualPriceDeviationRatioBps: BigNumberish;
    twapDuration: BigNumberish;
    isAllowedForTrade: boolean;
    isCrossMargined: boolean;
    oracle: string;
  };

  export type PoolSettingsStructOutput = [
    number,
    number,
    number,
    number,
    boolean,
    boolean,
    string
  ] & {
    initialMarginRatioBps: number;
    maintainanceMarginRatioBps: number;
    maxVirtualPriceDeviationRatioBps: number;
    twapDuration: number;
    isAllowedForTrade: boolean;
    isCrossMargined: boolean;
    oracle: string;
  };

  export type PoolStruct = {
    vToken: string;
    vPool: string;
    vPoolWrapper: string;
    settings: IClearingHouseStructures.PoolSettingsStruct;
  };

  export type PoolStructOutput = [
    string,
    string,
    string,
    IClearingHouseStructures.PoolSettingsStructOutput
  ] & {
    vToken: string;
    vPool: string;
    vPoolWrapper: string;
    settings: IClearingHouseStructures.PoolSettingsStructOutput;
  };
}

export interface AccountProtocolInfoMockInterface extends utils.Interface {
  functions: {
    'fixFee()': FunctionFragment;
    'protocol()': FunctionFragment;
    'registerPool((address,address,address,(uint16,uint16,uint16,uint32,bool,bool,address)))': FunctionFragment;
    'setAccountStorage((uint16,uint16,uint16,uint16,uint16,uint16,uint64,uint64),uint256,uint256,uint256,uint256)': FunctionFragment;
    'setVQuoteAddress(address)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'fixFee'
      | 'protocol'
      | 'registerPool'
      | 'setAccountStorage'
      | 'setVQuoteAddress'
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'fixFee', values?: undefined): string;
  encodeFunctionData(functionFragment: 'protocol', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'registerPool',
    values: [IClearingHouseStructures.PoolStruct]
  ): string;
  encodeFunctionData(
    functionFragment: 'setAccountStorage',
    values: [
      IClearingHouseStructures.LiquidationParamsStruct,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: 'setVQuoteAddress',
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: 'fixFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'protocol', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'registerPool',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'setAccountStorage',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'setVQuoteAddress',
    data: BytesLike
  ): Result;

  events: {};
}

export interface AccountProtocolInfoMock extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AccountProtocolInfoMockInterface;

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
    fixFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    protocol(overrides?: CallOverrides): Promise<
      [
        string,
        string,
        IClearingHouseStructures.LiquidationParamsStructOutput,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        settlementToken: string;
        vQuote: string;
        liquidationParams: IClearingHouseStructures.LiquidationParamsStructOutput;
        minRequiredMargin: BigNumber;
        removeLimitOrderFee: BigNumber;
        minimumOrderNotional: BigNumber;
      }
    >;

    registerPool(
      poolInfo: IClearingHouseStructures.PoolStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setAccountStorage(
      _liquidationParams: IClearingHouseStructures.LiquidationParamsStruct,
      _minRequiredMargin: BigNumberish,
      _removeLimitOrderFee: BigNumberish,
      _minimumOrderNotional: BigNumberish,
      _fixFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setVQuoteAddress(
      _vQuote: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  fixFee(overrides?: CallOverrides): Promise<BigNumber>;

  protocol(overrides?: CallOverrides): Promise<
    [
      string,
      string,
      IClearingHouseStructures.LiquidationParamsStructOutput,
      BigNumber,
      BigNumber,
      BigNumber
    ] & {
      settlementToken: string;
      vQuote: string;
      liquidationParams: IClearingHouseStructures.LiquidationParamsStructOutput;
      minRequiredMargin: BigNumber;
      removeLimitOrderFee: BigNumber;
      minimumOrderNotional: BigNumber;
    }
  >;

  registerPool(
    poolInfo: IClearingHouseStructures.PoolStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setAccountStorage(
    _liquidationParams: IClearingHouseStructures.LiquidationParamsStruct,
    _minRequiredMargin: BigNumberish,
    _removeLimitOrderFee: BigNumberish,
    _minimumOrderNotional: BigNumberish,
    _fixFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setVQuoteAddress(
    _vQuote: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    fixFee(overrides?: CallOverrides): Promise<BigNumber>;

    protocol(overrides?: CallOverrides): Promise<
      [
        string,
        string,
        IClearingHouseStructures.LiquidationParamsStructOutput,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        settlementToken: string;
        vQuote: string;
        liquidationParams: IClearingHouseStructures.LiquidationParamsStructOutput;
        minRequiredMargin: BigNumber;
        removeLimitOrderFee: BigNumber;
        minimumOrderNotional: BigNumber;
      }
    >;

    registerPool(
      poolInfo: IClearingHouseStructures.PoolStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    setAccountStorage(
      _liquidationParams: IClearingHouseStructures.LiquidationParamsStruct,
      _minRequiredMargin: BigNumberish,
      _removeLimitOrderFee: BigNumberish,
      _minimumOrderNotional: BigNumberish,
      _fixFee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setVQuoteAddress(_vQuote: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    fixFee(overrides?: CallOverrides): Promise<BigNumber>;

    protocol(overrides?: CallOverrides): Promise<BigNumber>;

    registerPool(
      poolInfo: IClearingHouseStructures.PoolStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setAccountStorage(
      _liquidationParams: IClearingHouseStructures.LiquidationParamsStruct,
      _minRequiredMargin: BigNumberish,
      _removeLimitOrderFee: BigNumberish,
      _minimumOrderNotional: BigNumberish,
      _fixFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setVQuoteAddress(
      _vQuote: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    fixFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    protocol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    registerPool(
      poolInfo: IClearingHouseStructures.PoolStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setAccountStorage(
      _liquidationParams: IClearingHouseStructures.LiquidationParamsStruct,
      _minRequiredMargin: BigNumberish,
      _removeLimitOrderFee: BigNumberish,
      _minimumOrderNotional: BigNumberish,
      _fixFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setVQuoteAddress(
      _vQuote: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}