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
  Overrides,
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

export type LiquidityChangeParamsStruct = {
  tickLower: BigNumberish;
  tickUpper: BigNumberish;
  liquidityDelta: BigNumberish;
  sqrtPriceCurrent: BigNumberish;
  slippageToleranceBps: BigNumberish;
  closeTokenPosition: boolean;
  limitOrderType: BigNumberish;
};

export type LiquidityChangeParamsStructOutput = [
  number,
  number,
  BigNumber,
  BigNumber,
  number,
  boolean,
  number
] & {
  tickLower: number;
  tickUpper: number;
  liquidityDelta: BigNumber;
  sqrtPriceCurrent: BigNumber;
  slippageToleranceBps: number;
  closeTokenPosition: boolean;
  limitOrderType: number;
};

export type LiquidationParamsStruct = {
  liquidationFeeFraction: BigNumberish;
  tokenLiquidationPriceDeltaBps: BigNumberish;
  insuranceFundFeeShareBps: BigNumberish;
};

export type LiquidationParamsStructOutput = [number, number, number] & {
  liquidationFeeFraction: number;
  tokenLiquidationPriceDeltaBps: number;
  insuranceFundFeeShareBps: number;
};

export type RageTradePoolSettingsStruct = {
  initialMarginRatio: BigNumberish;
  maintainanceMarginRatio: BigNumberish;
  twapDuration: BigNumberish;
  supported: boolean;
  isCrossMargined: boolean;
  oracle: string;
};

export type RageTradePoolSettingsStructOutput = [
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
  supported: boolean;
  isCrossMargined: boolean;
  oracle: string;
};

export type RageTradePoolStruct = {
  vPool: string;
  vPoolWrapper: string;
  settings: RageTradePoolSettingsStruct;
};

export type RageTradePoolStructOutput = [
  string,
  string,
  RageTradePoolSettingsStructOutput
] & {
  vPool: string;
  vPoolWrapper: string;
  settings: RageTradePoolSettingsStructOutput;
};

export interface AccountTestInterface extends ethers.utils.Interface {
  functions: {
    'addMargin(uint256,address,uint256)': FunctionFragment;
    'cleanDeposits(uint256)': FunctionFragment;
    'cleanPositions(uint256)': FunctionFragment;
    'createAccount()': FunctionFragment;
    'fixFee()': FunctionFragment;
    'getAccountDepositBalance(uint256,address)': FunctionFragment;
    'getAccountLiquidityPositionDetails(uint256,address,uint8)': FunctionFragment;
    'getAccountLiquidityPositionNum(uint256,address)': FunctionFragment;
    'getAccountProfit(uint256)': FunctionFragment;
    'getAccountTokenDetails(uint256,address)': FunctionFragment;
    'getAccountValueAndRequiredMargin(uint256,bool)': FunctionFragment;
    'getLiquidationPriceX128AndFee(int256,address)': FunctionFragment;
    'initCollateral(address,address,uint32)': FunctionFragment;
    'initToken(address)': FunctionFragment;
    'liquidateLiquidityPositions(uint256)': FunctionFragment;
    'liquidateTokenPosition(uint256,uint256,address)': FunctionFragment;
    'liquidityChange(uint256,address,(int24,int24,int128,uint160,uint16,bool,uint8))': FunctionFragment;
    'numAccounts()': FunctionFragment;
    'protocol()': FunctionFragment;
    'registerPool(address,(address,address,(uint16,uint16,uint32,bool,bool,address)))': FunctionFragment;
    'removeLimitOrder(uint256,address,int24,int24,uint256)': FunctionFragment;
    'removeMargin(uint256,address,uint256)': FunctionFragment;
    'setAccountStorage((uint16,uint16,uint16),uint256,uint256,uint256,uint256,address)': FunctionFragment;
    'setVBaseAddress(address)': FunctionFragment;
    'swapTokenAmount(uint256,address,int256)': FunctionFragment;
    'swapTokenNotional(uint256,address,int256)': FunctionFragment;
    'updateProfit(uint256,int256)': FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: 'addMargin',
    values: [BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'cleanDeposits',
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'cleanPositions',
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'createAccount',
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: 'fixFee', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'getAccountDepositBalance',
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: 'getAccountLiquidityPositionDetails',
    values: [BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'getAccountLiquidityPositionNum',
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: 'getAccountProfit',
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'getAccountTokenDetails',
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: 'getAccountValueAndRequiredMargin',
    values: [BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: 'getLiquidationPriceX128AndFee',
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: 'initCollateral',
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: 'initToken', values: [string]): string;
  encodeFunctionData(
    functionFragment: 'liquidateLiquidityPositions',
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'liquidateTokenPosition',
    values: [BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: 'liquidityChange',
    values: [BigNumberish, string, LiquidityChangeParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: 'numAccounts',
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: 'protocol', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'registerPool',
    values: [string, RageTradePoolStruct]
  ): string;
  encodeFunctionData(
    functionFragment: 'removeLimitOrder',
    values: [BigNumberish, string, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'removeMargin',
    values: [BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'setAccountStorage',
    values: [
      LiquidationParamsStruct,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string
    ]
  ): string;
  encodeFunctionData(
    functionFragment: 'setVBaseAddress',
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: 'swapTokenAmount',
    values: [BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'swapTokenNotional',
    values: [BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'updateProfit',
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: 'addMargin', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'cleanDeposits',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'cleanPositions',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'createAccount',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'fixFee', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'getAccountDepositBalance',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getAccountLiquidityPositionDetails',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getAccountLiquidityPositionNum',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getAccountProfit',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getAccountTokenDetails',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getAccountValueAndRequiredMargin',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getLiquidationPriceX128AndFee',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'initCollateral',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'initToken', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'liquidateLiquidityPositions',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'liquidateTokenPosition',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'liquidityChange',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'numAccounts',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'protocol', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'registerPool',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'removeLimitOrder',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'removeMargin',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'setAccountStorage',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'setVBaseAddress',
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
  decodeFunctionResult(
    functionFragment: 'updateProfit',
    data: BytesLike
  ): Result;

  events: {};
}

export interface AccountTest extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AccountTestInterface;

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
    addMargin(
      accountNo: BigNumberish,
      realTokenAddress: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    cleanDeposits(
      accountNo: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    cleanPositions(
      accountNo: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createAccount(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    fixFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    getAccountDepositBalance(
      accountNo: BigNumberish,
      vToken: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getAccountLiquidityPositionDetails(
      accountNo: BigNumberish,
      vToken: string,
      num: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
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
        tickLower: number;
        tickUpper: number;
        limitOrderType: number;
        liquidity: BigNumber;
        vTokenAmountIn: BigNumber;
        sumALastX128: BigNumber;
        sumBInsideLastX128: BigNumber;
        sumFpInsideLastX128: BigNumber;
        sumFeeInsideLastX128: BigNumber;
      }
    >;

    getAccountLiquidityPositionNum(
      accountNo: BigNumberish,
      vToken: string,
      overrides?: CallOverrides
    ): Promise<[number] & { num: number }>;

    getAccountProfit(
      accountNo: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { profit: BigNumber }>;

    getAccountTokenDetails(
      accountNo: BigNumberish,
      vToken: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        balance: BigNumber;
        netTraderPosition: BigNumber;
        sumACkpt: BigNumber;
      }
    >;

    getAccountValueAndRequiredMargin(
      accountNo: BigNumberish,
      isInitialMargin: boolean,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        accountMarketValue: BigNumber;
        requiredMargin: BigNumber;
      }
    >;

    getLiquidationPriceX128AndFee(
      tokensToTrade: BigNumberish,
      vToken: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        liquidationPriceX128: BigNumber;
        liquidatorPriceX128: BigNumber;
        insuranceFundFee: BigNumber;
      }
    >;

    initCollateral(
      cTokenAddress: string,
      oracleAddress: string,
      twapDuration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initToken(
      vToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    liquidateLiquidityPositions(
      accountNo: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    liquidateTokenPosition(
      accountNo: BigNumberish,
      liquidatorAccountNo: BigNumberish,
      vToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    liquidityChange(
      accountNo: BigNumberish,
      vToken: string,
      liquidityChangeParams: LiquidityChangeParamsStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    numAccounts(overrides?: CallOverrides): Promise<[BigNumber]>;

    protocol(
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        LiquidationParamsStructOutput,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        vBase: string;
        rBase: string;
        liquidationParams: LiquidationParamsStructOutput;
        minRequiredMargin: BigNumber;
        removeLimitOrderFee: BigNumber;
        minimumOrderNotional: BigNumber;
      }
    >;

    registerPool(
      full: string,
      rageTradePool: RageTradePoolStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeLimitOrder(
      accountNo: BigNumberish,
      vToken: string,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      removeLimitOrderFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeMargin(
      accountNo: BigNumberish,
      realTokenAddress: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setAccountStorage(
      _liquidationParams: LiquidationParamsStruct,
      _minRequiredMargin: BigNumberish,
      _removeLimitOrderFee: BigNumberish,
      _minimumOrderNotional: BigNumberish,
      _fixFee: BigNumberish,
      _rBase: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setVBaseAddress(
      _vBase: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swapTokenAmount(
      accountNo: BigNumberish,
      vToken: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swapTokenNotional(
      accountNo: BigNumberish,
      vToken: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateProfit(
      accountNo: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addMargin(
    accountNo: BigNumberish,
    realTokenAddress: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  cleanDeposits(
    accountNo: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  cleanPositions(
    accountNo: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createAccount(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  fixFee(overrides?: CallOverrides): Promise<BigNumber>;

  getAccountDepositBalance(
    accountNo: BigNumberish,
    vToken: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getAccountLiquidityPositionDetails(
    accountNo: BigNumberish,
    vToken: string,
    num: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
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
      tickLower: number;
      tickUpper: number;
      limitOrderType: number;
      liquidity: BigNumber;
      vTokenAmountIn: BigNumber;
      sumALastX128: BigNumber;
      sumBInsideLastX128: BigNumber;
      sumFpInsideLastX128: BigNumber;
      sumFeeInsideLastX128: BigNumber;
    }
  >;

  getAccountLiquidityPositionNum(
    accountNo: BigNumberish,
    vToken: string,
    overrides?: CallOverrides
  ): Promise<number>;

  getAccountProfit(
    accountNo: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getAccountTokenDetails(
    accountNo: BigNumberish,
    vToken: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      balance: BigNumber;
      netTraderPosition: BigNumber;
      sumACkpt: BigNumber;
    }
  >;

  getAccountValueAndRequiredMargin(
    accountNo: BigNumberish,
    isInitialMargin: boolean,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      accountMarketValue: BigNumber;
      requiredMargin: BigNumber;
    }
  >;

  getLiquidationPriceX128AndFee(
    tokensToTrade: BigNumberish,
    vToken: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      liquidationPriceX128: BigNumber;
      liquidatorPriceX128: BigNumber;
      insuranceFundFee: BigNumber;
    }
  >;

  initCollateral(
    cTokenAddress: string,
    oracleAddress: string,
    twapDuration: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initToken(
    vToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  liquidateLiquidityPositions(
    accountNo: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  liquidateTokenPosition(
    accountNo: BigNumberish,
    liquidatorAccountNo: BigNumberish,
    vToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  liquidityChange(
    accountNo: BigNumberish,
    vToken: string,
    liquidityChangeParams: LiquidityChangeParamsStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  numAccounts(overrides?: CallOverrides): Promise<BigNumber>;

  protocol(
    overrides?: CallOverrides
  ): Promise<
    [
      string,
      string,
      LiquidationParamsStructOutput,
      BigNumber,
      BigNumber,
      BigNumber
    ] & {
      vBase: string;
      rBase: string;
      liquidationParams: LiquidationParamsStructOutput;
      minRequiredMargin: BigNumber;
      removeLimitOrderFee: BigNumber;
      minimumOrderNotional: BigNumber;
    }
  >;

  registerPool(
    full: string,
    rageTradePool: RageTradePoolStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeLimitOrder(
    accountNo: BigNumberish,
    vToken: string,
    tickLower: BigNumberish,
    tickUpper: BigNumberish,
    removeLimitOrderFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeMargin(
    accountNo: BigNumberish,
    realTokenAddress: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setAccountStorage(
    _liquidationParams: LiquidationParamsStruct,
    _minRequiredMargin: BigNumberish,
    _removeLimitOrderFee: BigNumberish,
    _minimumOrderNotional: BigNumberish,
    _fixFee: BigNumberish,
    _rBase: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setVBaseAddress(
    _vBase: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swapTokenAmount(
    accountNo: BigNumberish,
    vToken: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swapTokenNotional(
    accountNo: BigNumberish,
    vToken: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateProfit(
    accountNo: BigNumberish,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addMargin(
      accountNo: BigNumberish,
      realTokenAddress: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    cleanDeposits(
      accountNo: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    cleanPositions(
      accountNo: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    createAccount(overrides?: CallOverrides): Promise<void>;

    fixFee(overrides?: CallOverrides): Promise<BigNumber>;

    getAccountDepositBalance(
      accountNo: BigNumberish,
      vToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAccountLiquidityPositionDetails(
      accountNo: BigNumberish,
      vToken: string,
      num: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
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
        tickLower: number;
        tickUpper: number;
        limitOrderType: number;
        liquidity: BigNumber;
        vTokenAmountIn: BigNumber;
        sumALastX128: BigNumber;
        sumBInsideLastX128: BigNumber;
        sumFpInsideLastX128: BigNumber;
        sumFeeInsideLastX128: BigNumber;
      }
    >;

    getAccountLiquidityPositionNum(
      accountNo: BigNumberish,
      vToken: string,
      overrides?: CallOverrides
    ): Promise<number>;

    getAccountProfit(
      accountNo: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAccountTokenDetails(
      accountNo: BigNumberish,
      vToken: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        balance: BigNumber;
        netTraderPosition: BigNumber;
        sumACkpt: BigNumber;
      }
    >;

    getAccountValueAndRequiredMargin(
      accountNo: BigNumberish,
      isInitialMargin: boolean,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        accountMarketValue: BigNumber;
        requiredMargin: BigNumber;
      }
    >;

    getLiquidationPriceX128AndFee(
      tokensToTrade: BigNumberish,
      vToken: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        liquidationPriceX128: BigNumber;
        liquidatorPriceX128: BigNumber;
        insuranceFundFee: BigNumber;
      }
    >;

    initCollateral(
      cTokenAddress: string,
      oracleAddress: string,
      twapDuration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    initToken(vToken: string, overrides?: CallOverrides): Promise<void>;

    liquidateLiquidityPositions(
      accountNo: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        keeperFee: BigNumber;
        insuranceFundFee: BigNumber;
      }
    >;

    liquidateTokenPosition(
      accountNo: BigNumberish,
      liquidatorAccountNo: BigNumberish,
      vToken: string,
      overrides?: CallOverrides
    ): Promise<void>;

    liquidityChange(
      accountNo: BigNumberish,
      vToken: string,
      liquidityChangeParams: LiquidityChangeParamsStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    numAccounts(overrides?: CallOverrides): Promise<BigNumber>;

    protocol(
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        LiquidationParamsStructOutput,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        vBase: string;
        rBase: string;
        liquidationParams: LiquidationParamsStructOutput;
        minRequiredMargin: BigNumber;
        removeLimitOrderFee: BigNumber;
        minimumOrderNotional: BigNumber;
      }
    >;

    registerPool(
      full: string,
      rageTradePool: RageTradePoolStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    removeLimitOrder(
      accountNo: BigNumberish,
      vToken: string,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      removeLimitOrderFee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    removeMargin(
      accountNo: BigNumberish,
      realTokenAddress: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setAccountStorage(
      _liquidationParams: LiquidationParamsStruct,
      _minRequiredMargin: BigNumberish,
      _removeLimitOrderFee: BigNumberish,
      _minimumOrderNotional: BigNumberish,
      _fixFee: BigNumberish,
      _rBase: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setVBaseAddress(_vBase: string, overrides?: CallOverrides): Promise<void>;

    swapTokenAmount(
      accountNo: BigNumberish,
      vToken: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    swapTokenNotional(
      accountNo: BigNumberish,
      vToken: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    updateProfit(
      accountNo: BigNumberish,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    addMargin(
      accountNo: BigNumberish,
      realTokenAddress: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    cleanDeposits(
      accountNo: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    cleanPositions(
      accountNo: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createAccount(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    fixFee(overrides?: CallOverrides): Promise<BigNumber>;

    getAccountDepositBalance(
      accountNo: BigNumberish,
      vToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAccountLiquidityPositionDetails(
      accountNo: BigNumberish,
      vToken: string,
      num: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAccountLiquidityPositionNum(
      accountNo: BigNumberish,
      vToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAccountProfit(
      accountNo: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAccountTokenDetails(
      accountNo: BigNumberish,
      vToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAccountValueAndRequiredMargin(
      accountNo: BigNumberish,
      isInitialMargin: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLiquidationPriceX128AndFee(
      tokensToTrade: BigNumberish,
      vToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initCollateral(
      cTokenAddress: string,
      oracleAddress: string,
      twapDuration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initToken(
      vToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    liquidateLiquidityPositions(
      accountNo: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    liquidateTokenPosition(
      accountNo: BigNumberish,
      liquidatorAccountNo: BigNumberish,
      vToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    liquidityChange(
      accountNo: BigNumberish,
      vToken: string,
      liquidityChangeParams: LiquidityChangeParamsStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    numAccounts(overrides?: CallOverrides): Promise<BigNumber>;

    protocol(overrides?: CallOverrides): Promise<BigNumber>;

    registerPool(
      full: string,
      rageTradePool: RageTradePoolStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeLimitOrder(
      accountNo: BigNumberish,
      vToken: string,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      removeLimitOrderFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeMargin(
      accountNo: BigNumberish,
      realTokenAddress: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setAccountStorage(
      _liquidationParams: LiquidationParamsStruct,
      _minRequiredMargin: BigNumberish,
      _removeLimitOrderFee: BigNumberish,
      _minimumOrderNotional: BigNumberish,
      _fixFee: BigNumberish,
      _rBase: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setVBaseAddress(
      _vBase: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swapTokenAmount(
      accountNo: BigNumberish,
      vToken: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swapTokenNotional(
      accountNo: BigNumberish,
      vToken: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateProfit(
      accountNo: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addMargin(
      accountNo: BigNumberish,
      realTokenAddress: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    cleanDeposits(
      accountNo: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    cleanPositions(
      accountNo: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createAccount(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    fixFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAccountDepositBalance(
      accountNo: BigNumberish,
      vToken: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAccountLiquidityPositionDetails(
      accountNo: BigNumberish,
      vToken: string,
      num: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAccountLiquidityPositionNum(
      accountNo: BigNumberish,
      vToken: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAccountProfit(
      accountNo: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAccountTokenDetails(
      accountNo: BigNumberish,
      vToken: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAccountValueAndRequiredMargin(
      accountNo: BigNumberish,
      isInitialMargin: boolean,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getLiquidationPriceX128AndFee(
      tokensToTrade: BigNumberish,
      vToken: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initCollateral(
      cTokenAddress: string,
      oracleAddress: string,
      twapDuration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initToken(
      vToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    liquidateLiquidityPositions(
      accountNo: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    liquidateTokenPosition(
      accountNo: BigNumberish,
      liquidatorAccountNo: BigNumberish,
      vToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    liquidityChange(
      accountNo: BigNumberish,
      vToken: string,
      liquidityChangeParams: LiquidityChangeParamsStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    numAccounts(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    protocol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    registerPool(
      full: string,
      rageTradePool: RageTradePoolStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeLimitOrder(
      accountNo: BigNumberish,
      vToken: string,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      removeLimitOrderFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeMargin(
      accountNo: BigNumberish,
      realTokenAddress: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setAccountStorage(
      _liquidationParams: LiquidationParamsStruct,
      _minRequiredMargin: BigNumberish,
      _removeLimitOrderFee: BigNumberish,
      _minimumOrderNotional: BigNumberish,
      _fixFee: BigNumberish,
      _rBase: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setVBaseAddress(
      _vBase: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swapTokenAmount(
      accountNo: BigNumberish,
      vToken: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swapTokenNotional(
      accountNo: BigNumberish,
      vToken: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateProfit(
      accountNo: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
