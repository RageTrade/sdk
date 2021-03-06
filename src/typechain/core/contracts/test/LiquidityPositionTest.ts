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
} from '../../common';

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

export interface LiquidityPositionTestInterface extends utils.Interface {
  functions: {
    'balanceAdjustments()': FunctionFragment;
    'fixFee()': FunctionFragment;
    'initialize(int24,int24)': FunctionFragment;
    'liquidityChange(int128)': FunctionFragment;
    'lp()': FunctionFragment;
    'marketValue(uint160)': FunctionFragment;
    'maxNetPosition()': FunctionFragment;
    'netPosition(uint160)': FunctionFragment;
    'protocol()': FunctionFragment;
    'registerPool((address,address,address,(uint16,uint16,uint16,uint32,bool,bool,address)))': FunctionFragment;
    'setAccountStorage((uint16,uint16,uint16,uint16,uint16,uint16,uint64,uint64),uint256,uint256,uint256,uint256)': FunctionFragment;
    'setVQuoteAddress(address)': FunctionFragment;
    'updateCheckpoints()': FunctionFragment;
    'wrapper()': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'balanceAdjustments'
      | 'fixFee'
      | 'initialize'
      | 'liquidityChange'
      | 'lp'
      | 'marketValue'
      | 'maxNetPosition'
      | 'netPosition'
      | 'protocol'
      | 'registerPool'
      | 'setAccountStorage'
      | 'setVQuoteAddress'
      | 'updateCheckpoints'
      | 'wrapper'
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'balanceAdjustments',
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: 'fixFee', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'initialize',
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'liquidityChange',
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: 'lp', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'marketValue',
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'maxNetPosition',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'netPosition',
    values: [BigNumberish]
  ): string;
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
  encodeFunctionData(
    functionFragment: 'updateCheckpoints',
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: 'wrapper', values?: undefined): string;

  decodeFunctionResult(
    functionFragment: 'balanceAdjustments',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'fixFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'liquidityChange',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'lp', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'marketValue',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'maxNetPosition',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'netPosition',
    data: BytesLike
  ): Result;
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
  decodeFunctionResult(
    functionFragment: 'updateCheckpoints',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'wrapper', data: BytesLike): Result;

  events: {};
}

export interface LiquidityPositionTest extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LiquidityPositionTestInterface;

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
    balanceAdjustments(overrides?: CallOverrides): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        vQuoteIncrease: BigNumber;
        vTokenIncrease: BigNumber;
        traderPositionIncrease: BigNumber;
      }
    >;

    fixFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    initialize(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    liquidityChange(
      liquidity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    lp(overrides?: CallOverrides): Promise<
      [
        number,
        number,
        number,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        limitOrderType: number;
        tickLower: number;
        tickUpper: number;
        liquidity: BigNumber;
        vTokenAmountIn: BigNumber;
        sumALastX128: BigNumber;
        sumBInsideLastX128: BigNumber;
        sumFpInsideLastX128: BigNumber;
        sumFeeInsideLastX128: BigNumber;
      }
    >;

    marketValue(
      sqrtPriceCurrent: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    maxNetPosition(overrides?: CallOverrides): Promise<[BigNumber]>;

    netPosition(
      sqrtPriceCurrent: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

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

    updateCheckpoints(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    wrapper(overrides?: CallOverrides): Promise<[string]>;
  };

  balanceAdjustments(overrides?: CallOverrides): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      vQuoteIncrease: BigNumber;
      vTokenIncrease: BigNumber;
      traderPositionIncrease: BigNumber;
    }
  >;

  fixFee(overrides?: CallOverrides): Promise<BigNumber>;

  initialize(
    tickLower: BigNumberish,
    tickUpper: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  liquidityChange(
    liquidity: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  lp(overrides?: CallOverrides): Promise<
    [
      number,
      number,
      number,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber
    ] & {
      limitOrderType: number;
      tickLower: number;
      tickUpper: number;
      liquidity: BigNumber;
      vTokenAmountIn: BigNumber;
      sumALastX128: BigNumber;
      sumBInsideLastX128: BigNumber;
      sumFpInsideLastX128: BigNumber;
      sumFeeInsideLastX128: BigNumber;
    }
  >;

  marketValue(
    sqrtPriceCurrent: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  maxNetPosition(overrides?: CallOverrides): Promise<BigNumber>;

  netPosition(
    sqrtPriceCurrent: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

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

  updateCheckpoints(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  wrapper(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    balanceAdjustments(overrides?: CallOverrides): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        vQuoteIncrease: BigNumber;
        vTokenIncrease: BigNumber;
        traderPositionIncrease: BigNumber;
      }
    >;

    fixFee(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    liquidityChange(
      liquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    lp(overrides?: CallOverrides): Promise<
      [
        number,
        number,
        number,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        limitOrderType: number;
        tickLower: number;
        tickUpper: number;
        liquidity: BigNumber;
        vTokenAmountIn: BigNumber;
        sumALastX128: BigNumber;
        sumBInsideLastX128: BigNumber;
        sumFpInsideLastX128: BigNumber;
        sumFeeInsideLastX128: BigNumber;
      }
    >;

    marketValue(
      sqrtPriceCurrent: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxNetPosition(overrides?: CallOverrides): Promise<BigNumber>;

    netPosition(
      sqrtPriceCurrent: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

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

    updateCheckpoints(overrides?: CallOverrides): Promise<void>;

    wrapper(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    balanceAdjustments(overrides?: CallOverrides): Promise<BigNumber>;

    fixFee(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    liquidityChange(
      liquidity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    lp(overrides?: CallOverrides): Promise<BigNumber>;

    marketValue(
      sqrtPriceCurrent: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxNetPosition(overrides?: CallOverrides): Promise<BigNumber>;

    netPosition(
      sqrtPriceCurrent: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

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

    updateCheckpoints(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    wrapper(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    balanceAdjustments(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    fixFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    liquidityChange(
      liquidity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    lp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    marketValue(
      sqrtPriceCurrent: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maxNetPosition(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    netPosition(
      sqrtPriceCurrent: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

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

    updateCheckpoints(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    wrapper(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
