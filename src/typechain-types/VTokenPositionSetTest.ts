/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
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
import { FunctionFragment, Result } from '@ethersproject/abi';
import { Listener, Provider } from '@ethersproject/providers';
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from './common';

export declare namespace IClearingHouseStructures {
  export type LiquidationParamsStruct = {
    liquidationFeeFraction: BigNumberish;
    tokenLiquidationPriceDeltaBps: BigNumberish;
    insuranceFundFeeShareBps: BigNumberish;
    maxRangeLiquidationFees: BigNumberish;
  };

  export type LiquidationParamsStructOutput = [
    number,
    number,
    number,
    BigNumber
  ] & {
    liquidationFeeFraction: number;
    tokenLiquidationPriceDeltaBps: number;
    insuranceFundFeeShareBps: number;
    maxRangeLiquidationFees: BigNumber;
  };

  export type PoolSettingsStruct = {
    initialMarginRatio: BigNumberish;
    maintainanceMarginRatio: BigNumberish;
    twapDuration: BigNumberish;
    isAllowedForTrade: boolean;
    isCrossMargined: boolean;
    oracle: string;
  };

  export type PoolSettingsStructOutput = [
    number,
    number,
    number,
    boolean,
    boolean,
    string
  ] & {
    initialMarginRatio: number;
    maintainanceMarginRatio: number;
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

  export type BalanceAdjustmentsStruct = {
    vQuoteIncrease: BigNumberish;
    vTokenIncrease: BigNumberish;
    traderPositionIncrease: BigNumberish;
  };

  export type BalanceAdjustmentsStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    vQuoteIncrease: BigNumber;
    vTokenIncrease: BigNumber;
    traderPositionIncrease: BigNumber;
  };
}

export interface VTokenPositionSetTestInterface extends utils.Interface {
  contractName: 'VTokenPositionSetTest';
  functions: {
    'fixFee()': FunctionFragment;
    'getIsActive(address)': FunctionFragment;
    'getPositionDetails(address)': FunctionFragment;
    'getVQuoteBalance()': FunctionFragment;
    'init(address)': FunctionFragment;
    'liquidateLiquidityPositions(address)': FunctionFragment;
    'liquidityChange(address,int24,int24,int128)': FunctionFragment;
    'protocol()': FunctionFragment;
    'realizeFundingPaymentToAccount(address)': FunctionFragment;
    'registerPool((address,address,address,(uint16,uint16,uint32,bool,bool,address)))': FunctionFragment;
    'setAccountStorage((uint16,uint16,uint16,uint128),uint256,uint256,uint256,uint256)': FunctionFragment;
    'setVQuoteAddress(address)': FunctionFragment;
    'swapTokenAmount(address,int256)': FunctionFragment;
    'swapTokenNotional(address,int256)': FunctionFragment;
    'update((int256,int256,int256),address)': FunctionFragment;
    'wrapper()': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'fixFee', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getIsActive', values: [string]): string;
  encodeFunctionData(
    functionFragment: 'getPositionDetails',
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: 'getVQuoteBalance',
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: 'init', values: [string]): string;
  encodeFunctionData(
    functionFragment: 'liquidateLiquidityPositions',
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: 'liquidityChange',
    values: [string, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: 'protocol', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'realizeFundingPaymentToAccount',
    values: [string]
  ): string;
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
    functionFragment: 'swapTokenAmount',
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'swapTokenNotional',
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'update',
    values: [IClearingHouseStructures.BalanceAdjustmentsStruct, string]
  ): string;
  encodeFunctionData(functionFragment: 'wrapper', values?: undefined): string;

  decodeFunctionResult(functionFragment: 'fixFee', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'getIsActive',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getPositionDetails',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getVQuoteBalance',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'init', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'liquidateLiquidityPositions',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'liquidityChange',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'protocol', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'realizeFundingPaymentToAccount',
    data: BytesLike
  ): Result;
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
    functionFragment: 'swapTokenAmount',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'swapTokenNotional',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'update', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'wrapper', data: BytesLike): Result;

  events: {};
}

export interface VTokenPositionSetTest extends BaseContract {
  contractName: 'VTokenPositionSetTest';
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: VTokenPositionSetTestInterface;

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

    getIsActive(vToken: string, overrides?: CallOverrides): Promise<[boolean]>;

    getPositionDetails(
      vToken: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        balance: BigNumber;
        sumACkhpt: BigNumber;
        netTraderPosition: BigNumber;
      }
    >;

    getVQuoteBalance(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { balance: BigNumber }>;

    init(
      vToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    liquidateLiquidityPositions(
      vToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    liquidityChange(
      vToken: string,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      liquidity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    protocol(
      overrides?: CallOverrides
    ): Promise<
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

    realizeFundingPaymentToAccount(
      vToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

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

    swapTokenAmount(
      vToken: string,
      vTokenAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swapTokenNotional(
      vToken: string,
      vTokenNotional: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    update(
      balanceAdjustments: IClearingHouseStructures.BalanceAdjustmentsStruct,
      vToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    wrapper(overrides?: CallOverrides): Promise<[string]>;
  };

  fixFee(overrides?: CallOverrides): Promise<BigNumber>;

  getIsActive(vToken: string, overrides?: CallOverrides): Promise<boolean>;

  getPositionDetails(
    vToken: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      balance: BigNumber;
      sumACkhpt: BigNumber;
      netTraderPosition: BigNumber;
    }
  >;

  getVQuoteBalance(overrides?: CallOverrides): Promise<BigNumber>;

  init(
    vToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  liquidateLiquidityPositions(
    vToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  liquidityChange(
    vToken: string,
    tickLower: BigNumberish,
    tickUpper: BigNumberish,
    liquidity: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  protocol(
    overrides?: CallOverrides
  ): Promise<
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

  realizeFundingPaymentToAccount(
    vToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

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

  swapTokenAmount(
    vToken: string,
    vTokenAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swapTokenNotional(
    vToken: string,
    vTokenNotional: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  update(
    balanceAdjustments: IClearingHouseStructures.BalanceAdjustmentsStruct,
    vToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  wrapper(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    fixFee(overrides?: CallOverrides): Promise<BigNumber>;

    getIsActive(vToken: string, overrides?: CallOverrides): Promise<boolean>;

    getPositionDetails(
      vToken: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        balance: BigNumber;
        sumACkhpt: BigNumber;
        netTraderPosition: BigNumber;
      }
    >;

    getVQuoteBalance(overrides?: CallOverrides): Promise<BigNumber>;

    init(vToken: string, overrides?: CallOverrides): Promise<void>;

    liquidateLiquidityPositions(
      vToken: string,
      overrides?: CallOverrides
    ): Promise<void>;

    liquidityChange(
      vToken: string,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      liquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    protocol(
      overrides?: CallOverrides
    ): Promise<
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

    realizeFundingPaymentToAccount(
      vToken: string,
      overrides?: CallOverrides
    ): Promise<void>;

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

    swapTokenAmount(
      vToken: string,
      vTokenAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    swapTokenNotional(
      vToken: string,
      vTokenNotional: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    update(
      balanceAdjustments: IClearingHouseStructures.BalanceAdjustmentsStruct,
      vToken: string,
      overrides?: CallOverrides
    ): Promise<void>;

    wrapper(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    fixFee(overrides?: CallOverrides): Promise<BigNumber>;

    getIsActive(vToken: string, overrides?: CallOverrides): Promise<BigNumber>;

    getPositionDetails(
      vToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getVQuoteBalance(overrides?: CallOverrides): Promise<BigNumber>;

    init(
      vToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    liquidateLiquidityPositions(
      vToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    liquidityChange(
      vToken: string,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      liquidity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    protocol(overrides?: CallOverrides): Promise<BigNumber>;

    realizeFundingPaymentToAccount(
      vToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

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

    swapTokenAmount(
      vToken: string,
      vTokenAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swapTokenNotional(
      vToken: string,
      vTokenNotional: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    update(
      balanceAdjustments: IClearingHouseStructures.BalanceAdjustmentsStruct,
      vToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    wrapper(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    fixFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getIsActive(
      vToken: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPositionDetails(
      vToken: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getVQuoteBalance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    init(
      vToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    liquidateLiquidityPositions(
      vToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    liquidityChange(
      vToken: string,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      liquidity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    protocol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    realizeFundingPaymentToAccount(
      vToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

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

    swapTokenAmount(
      vToken: string,
      vTokenAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swapTokenNotional(
      vToken: string,
      vTokenNotional: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    update(
      balanceAdjustments: IClearingHouseStructures.BalanceAdjustmentsStruct,
      vToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    wrapper(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
