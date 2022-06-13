/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
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
  export type TickRangeStruct = {
    tickLower: BigNumberish;
    tickUpper: BigNumberish;
  };

  export type TickRangeStructOutput = [number, number] & {
    tickLower: number;
    tickUpper: number;
  };

  export type CollateralSettingsStruct = {
    oracle: string;
    twapDuration: BigNumberish;
    isAllowedForDeposit: boolean;
  };

  export type CollateralSettingsStructOutput = [string, number, boolean] & {
    oracle: string;
    twapDuration: number;
    isAllowedForDeposit: boolean;
  };

  export type CollateralStruct = {
    token: string;
    settings: IClearingHouseStructures.CollateralSettingsStruct;
  };

  export type CollateralStructOutput = [
    string,
    IClearingHouseStructures.CollateralSettingsStructOutput
  ] & {
    token: string;
    settings: IClearingHouseStructures.CollateralSettingsStructOutput;
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
}

export interface ClearingHouseLensInterface extends utils.Interface {
  functions: {
    'clearingHouse()': FunctionFragment;
    'getAccountCollateralBalance(uint256,uint32)': FunctionFragment;
    'getAccountCollateralInfo(uint256,uint32)': FunctionFragment;
    'getAccountInfo(uint256)': FunctionFragment;
    'getAccountLiquidityPositionInfo(uint256,uint32,int24,int24)': FunctionFragment;
    'getAccountLiquidityPositionList(uint256,uint32)': FunctionFragment;
    'getAccountPositionInfo(uint256,uint32)': FunctionFragment;
    'getAccountTokenPositionInfo(uint256,uint32)': FunctionFragment;
    'getCollateralInfo(uint32)': FunctionFragment;
    'getPoolInfo(uint32)': FunctionFragment;
    'getPoolSettings(uint32)': FunctionFragment;
    'getProtocolInfo()': FunctionFragment;
    'getTwapDuration(uint32)': FunctionFragment;
    'getVPool(uint32)': FunctionFragment;
    'getVPoolAndTwapDuration(uint32)': FunctionFragment;
    'isPoolIdAvailable(uint32)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'clearingHouse'
      | 'getAccountCollateralBalance'
      | 'getAccountCollateralInfo'
      | 'getAccountInfo'
      | 'getAccountLiquidityPositionInfo'
      | 'getAccountLiquidityPositionList'
      | 'getAccountPositionInfo'
      | 'getAccountTokenPositionInfo'
      | 'getCollateralInfo'
      | 'getPoolInfo'
      | 'getPoolSettings'
      | 'getProtocolInfo'
      | 'getTwapDuration'
      | 'getVPool'
      | 'getVPoolAndTwapDuration'
      | 'isPoolIdAvailable'
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'clearingHouse',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'getAccountCollateralBalance',
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'getAccountCollateralInfo',
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'getAccountInfo',
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'getAccountLiquidityPositionInfo',
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'getAccountLiquidityPositionList',
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'getAccountPositionInfo',
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'getAccountTokenPositionInfo',
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'getCollateralInfo',
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'getPoolInfo',
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'getPoolSettings',
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'getProtocolInfo',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'getTwapDuration',
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'getVPool',
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'getVPoolAndTwapDuration',
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'isPoolIdAvailable',
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: 'clearingHouse',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getAccountCollateralBalance',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getAccountCollateralInfo',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getAccountInfo',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getAccountLiquidityPositionInfo',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getAccountLiquidityPositionList',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getAccountPositionInfo',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getAccountTokenPositionInfo',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getCollateralInfo',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getPoolInfo',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getPoolSettings',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getProtocolInfo',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getTwapDuration',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'getVPool', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'getVPoolAndTwapDuration',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'isPoolIdAvailable',
    data: BytesLike
  ): Result;

  events: {};
}

export interface ClearingHouseLens extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ClearingHouseLensInterface;

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
    clearingHouse(overrides?: CallOverrides): Promise<[string]>;

    getAccountCollateralBalance(
      accountId: BigNumberish,
      collateralId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { balance: BigNumber }>;

    getAccountCollateralInfo(
      accountId: BigNumberish,
      collateralId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber] & { collateral: string; balance: BigNumber }
    >;

    getAccountInfo(
      accountId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, number[], number[]] & {
        owner: string;
        vQuoteBalance: BigNumber;
        activeCollateralIds: number[];
        activePoolIds: number[];
      }
    >;

    getAccountLiquidityPositionInfo(
      accountId: BigNumberish,
      poolId: BigNumberish,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        number,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        limitOrderType: number;
        liquidity: BigNumber;
        vTokenAmountIn: BigNumber;
        sumALastX128: BigNumber;
        sumBInsideLastX128: BigNumber;
        sumFpInsideLastX128: BigNumber;
        sumFeeInsideLastX128: BigNumber;
      }
    >;

    getAccountLiquidityPositionList(
      accountId: BigNumberish,
      poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [IClearingHouseStructures.TickRangeStructOutput[]] & {
        activeTickRanges: IClearingHouseStructures.TickRangeStructOutput[];
      }
    >;

    getAccountPositionInfo(
      accountId: BigNumberish,
      poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        IClearingHouseStructures.TickRangeStructOutput[]
      ] & {
        balance: BigNumber;
        netTraderPosition: BigNumber;
        sumALastX128: BigNumber;
        activeTickRanges: IClearingHouseStructures.TickRangeStructOutput[];
      }
    >;

    getAccountTokenPositionInfo(
      accountId: BigNumberish,
      poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        balance: BigNumber;
        netTraderPosition: BigNumber;
        sumALastX128: BigNumber;
      }
    >;

    getCollateralInfo(
      collateralId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[IClearingHouseStructures.CollateralStructOutput]>;

    getPoolInfo(
      poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [IClearingHouseStructures.PoolStructOutput] & {
        pool: IClearingHouseStructures.PoolStructOutput;
      }
    >;

    getPoolSettings(
      poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [IClearingHouseStructures.PoolSettingsStructOutput] & {
        settings: IClearingHouseStructures.PoolSettingsStructOutput;
      }
    >;

    getProtocolInfo(overrides?: CallOverrides): Promise<
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

    getTwapDuration(
      poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number] & { twapDuration: number }>;

    getVPool(
      poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string] & { vPool: string }>;

    getVPoolAndTwapDuration(
      poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, number] & { vPool: string; twapDuration: number }>;

    isPoolIdAvailable(
      poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  clearingHouse(overrides?: CallOverrides): Promise<string>;

  getAccountCollateralBalance(
    accountId: BigNumberish,
    collateralId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getAccountCollateralInfo(
    accountId: BigNumberish,
    collateralId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber] & { collateral: string; balance: BigNumber }>;

  getAccountInfo(
    accountId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, number[], number[]] & {
      owner: string;
      vQuoteBalance: BigNumber;
      activeCollateralIds: number[];
      activePoolIds: number[];
    }
  >;

  getAccountLiquidityPositionInfo(
    accountId: BigNumberish,
    poolId: BigNumberish,
    tickLower: BigNumberish,
    tickUpper: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [
      number,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber
    ] & {
      limitOrderType: number;
      liquidity: BigNumber;
      vTokenAmountIn: BigNumber;
      sumALastX128: BigNumber;
      sumBInsideLastX128: BigNumber;
      sumFpInsideLastX128: BigNumber;
      sumFeeInsideLastX128: BigNumber;
    }
  >;

  getAccountLiquidityPositionList(
    accountId: BigNumberish,
    poolId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<IClearingHouseStructures.TickRangeStructOutput[]>;

  getAccountPositionInfo(
    accountId: BigNumberish,
    poolId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      BigNumber,
      BigNumber,
      IClearingHouseStructures.TickRangeStructOutput[]
    ] & {
      balance: BigNumber;
      netTraderPosition: BigNumber;
      sumALastX128: BigNumber;
      activeTickRanges: IClearingHouseStructures.TickRangeStructOutput[];
    }
  >;

  getAccountTokenPositionInfo(
    accountId: BigNumberish,
    poolId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      balance: BigNumber;
      netTraderPosition: BigNumber;
      sumALastX128: BigNumber;
    }
  >;

  getCollateralInfo(
    collateralId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<IClearingHouseStructures.CollateralStructOutput>;

  getPoolInfo(
    poolId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<IClearingHouseStructures.PoolStructOutput>;

  getPoolSettings(
    poolId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<IClearingHouseStructures.PoolSettingsStructOutput>;

  getProtocolInfo(overrides?: CallOverrides): Promise<
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

  getTwapDuration(
    poolId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  getVPool(poolId: BigNumberish, overrides?: CallOverrides): Promise<string>;

  getVPoolAndTwapDuration(
    poolId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string, number] & { vPool: string; twapDuration: number }>;

  isPoolIdAvailable(
    poolId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    clearingHouse(overrides?: CallOverrides): Promise<string>;

    getAccountCollateralBalance(
      accountId: BigNumberish,
      collateralId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAccountCollateralInfo(
      accountId: BigNumberish,
      collateralId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber] & { collateral: string; balance: BigNumber }
    >;

    getAccountInfo(
      accountId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, number[], number[]] & {
        owner: string;
        vQuoteBalance: BigNumber;
        activeCollateralIds: number[];
        activePoolIds: number[];
      }
    >;

    getAccountLiquidityPositionInfo(
      accountId: BigNumberish,
      poolId: BigNumberish,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        number,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        limitOrderType: number;
        liquidity: BigNumber;
        vTokenAmountIn: BigNumber;
        sumALastX128: BigNumber;
        sumBInsideLastX128: BigNumber;
        sumFpInsideLastX128: BigNumber;
        sumFeeInsideLastX128: BigNumber;
      }
    >;

    getAccountLiquidityPositionList(
      accountId: BigNumberish,
      poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<IClearingHouseStructures.TickRangeStructOutput[]>;

    getAccountPositionInfo(
      accountId: BigNumberish,
      poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        IClearingHouseStructures.TickRangeStructOutput[]
      ] & {
        balance: BigNumber;
        netTraderPosition: BigNumber;
        sumALastX128: BigNumber;
        activeTickRanges: IClearingHouseStructures.TickRangeStructOutput[];
      }
    >;

    getAccountTokenPositionInfo(
      accountId: BigNumberish,
      poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        balance: BigNumber;
        netTraderPosition: BigNumber;
        sumALastX128: BigNumber;
      }
    >;

    getCollateralInfo(
      collateralId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<IClearingHouseStructures.CollateralStructOutput>;

    getPoolInfo(
      poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<IClearingHouseStructures.PoolStructOutput>;

    getPoolSettings(
      poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<IClearingHouseStructures.PoolSettingsStructOutput>;

    getProtocolInfo(overrides?: CallOverrides): Promise<
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

    getTwapDuration(
      poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    getVPool(poolId: BigNumberish, overrides?: CallOverrides): Promise<string>;

    getVPoolAndTwapDuration(
      poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, number] & { vPool: string; twapDuration: number }>;

    isPoolIdAvailable(
      poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    clearingHouse(overrides?: CallOverrides): Promise<BigNumber>;

    getAccountCollateralBalance(
      accountId: BigNumberish,
      collateralId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAccountCollateralInfo(
      accountId: BigNumberish,
      collateralId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAccountInfo(
      accountId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAccountLiquidityPositionInfo(
      accountId: BigNumberish,
      poolId: BigNumberish,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAccountLiquidityPositionList(
      accountId: BigNumberish,
      poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAccountPositionInfo(
      accountId: BigNumberish,
      poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAccountTokenPositionInfo(
      accountId: BigNumberish,
      poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCollateralInfo(
      collateralId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPoolInfo(
      poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPoolSettings(
      poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getProtocolInfo(overrides?: CallOverrides): Promise<BigNumber>;

    getTwapDuration(
      poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getVPool(
      poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getVPoolAndTwapDuration(
      poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isPoolIdAvailable(
      poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    clearingHouse(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAccountCollateralBalance(
      accountId: BigNumberish,
      collateralId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAccountCollateralInfo(
      accountId: BigNumberish,
      collateralId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAccountInfo(
      accountId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAccountLiquidityPositionInfo(
      accountId: BigNumberish,
      poolId: BigNumberish,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAccountLiquidityPositionList(
      accountId: BigNumberish,
      poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAccountPositionInfo(
      accountId: BigNumberish,
      poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAccountTokenPositionInfo(
      accountId: BigNumberish,
      poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCollateralInfo(
      collateralId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPoolInfo(
      poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPoolSettings(
      poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getProtocolInfo(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTwapDuration(
      poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getVPool(
      poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getVPoolAndTwapDuration(
      poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isPoolIdAvailable(
      poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
