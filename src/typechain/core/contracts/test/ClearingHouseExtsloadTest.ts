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

export interface ClearingHouseExtsloadTestInterface extends utils.Interface {
  functions: {
    'checkVPoolAndTwapDuration(address,uint32)': FunctionFragment;
    'getAccountCollateralBalance(address,uint256,uint32)': FunctionFragment;
    'getAccountCollateralInfo(address,uint256,uint32)': FunctionFragment;
    'getAccountInfo(address,uint256)': FunctionFragment;
    'getAccountLiquidityPositionInfo(address,uint256,uint32,int24,int24)': FunctionFragment;
    'getAccountLiquidityPositionList(address,uint256,uint32)': FunctionFragment;
    'getAccountOffsets()': FunctionFragment;
    'getAccountPositionInfo(address,uint256,uint32)': FunctionFragment;
    'getAccountTokenPositionInfo(address,uint256,uint32)': FunctionFragment;
    'getAccountsMappingSlot()': FunctionFragment;
    'getCollateralInfo(address,uint32)': FunctionFragment;
    'getCollateralOffsets()': FunctionFragment;
    'getLiquidityPositionOffsets()': FunctionFragment;
    'getPoolInfo(address,uint32)': FunctionFragment;
    'getPoolOffsets()': FunctionFragment;
    'getPoolSettings(address,uint32)': FunctionFragment;
    'getProtocolInfo(address)': FunctionFragment;
    'getProtocolOffsets()': FunctionFragment;
    'getProtocolSlot()': FunctionFragment;
    'getVPool(address,uint32)': FunctionFragment;
    'getVPoolAndTwapDuration(address,uint32)': FunctionFragment;
    'getVTokenPositionOffsets()': FunctionFragment;
    'isPoolIdAvailable(address,uint32)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'checkVPoolAndTwapDuration'
      | 'getAccountCollateralBalance'
      | 'getAccountCollateralInfo'
      | 'getAccountInfo'
      | 'getAccountLiquidityPositionInfo'
      | 'getAccountLiquidityPositionList'
      | 'getAccountOffsets'
      | 'getAccountPositionInfo'
      | 'getAccountTokenPositionInfo'
      | 'getAccountsMappingSlot'
      | 'getCollateralInfo'
      | 'getCollateralOffsets'
      | 'getLiquidityPositionOffsets'
      | 'getPoolInfo'
      | 'getPoolOffsets'
      | 'getPoolSettings'
      | 'getProtocolInfo'
      | 'getProtocolOffsets'
      | 'getProtocolSlot'
      | 'getVPool'
      | 'getVPoolAndTwapDuration'
      | 'getVTokenPositionOffsets'
      | 'isPoolIdAvailable'
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'checkVPoolAndTwapDuration',
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'getAccountCollateralBalance',
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'getAccountCollateralInfo',
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'getAccountInfo',
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'getAccountLiquidityPositionInfo',
    values: [string, BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'getAccountLiquidityPositionList',
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'getAccountOffsets',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'getAccountPositionInfo',
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'getAccountTokenPositionInfo',
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'getAccountsMappingSlot',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'getCollateralInfo',
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'getCollateralOffsets',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'getLiquidityPositionOffsets',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'getPoolInfo',
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'getPoolOffsets',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'getPoolSettings',
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'getProtocolInfo',
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: 'getProtocolOffsets',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'getProtocolSlot',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'getVPool',
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'getVPoolAndTwapDuration',
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'getVTokenPositionOffsets',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'isPoolIdAvailable',
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: 'checkVPoolAndTwapDuration',
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
    functionFragment: 'getAccountOffsets',
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
    functionFragment: 'getAccountsMappingSlot',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getCollateralInfo',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getCollateralOffsets',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getLiquidityPositionOffsets',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getPoolInfo',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getPoolOffsets',
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
    functionFragment: 'getProtocolOffsets',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getProtocolSlot',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'getVPool', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'getVPoolAndTwapDuration',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getVTokenPositionOffsets',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'isPoolIdAvailable',
    data: BytesLike
  ): Result;

  events: {};
}

export interface ClearingHouseExtsloadTest extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ClearingHouseExtsloadTestInterface;

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
    checkVPoolAndTwapDuration(
      clearingHouse: string,
      poolId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getAccountCollateralBalance(
      clearingHouse: string,
      accountId: BigNumberish,
      collateralId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { balance: BigNumber }>;

    getAccountCollateralInfo(
      clearingHouse: string,
      accountId: BigNumberish,
      collateralId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber] & { collateral: string; balance: BigNumber }
    >;

    getAccountInfo(
      clearingHouse: string,
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
      clearingHouse: string,
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
      clearingHouse: string,
      accountId: BigNumberish,
      poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [IClearingHouseStructures.TickRangeStructOutput[]] & {
        activeTickRanges: IClearingHouseStructures.TickRangeStructOutput[];
      }
    >;

    getAccountOffsets(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]
    >;

    getAccountPositionInfo(
      clearingHouse: string,
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
      clearingHouse: string,
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

    getAccountsMappingSlot(overrides?: CallOverrides): Promise<[string]>;

    getCollateralInfo(
      clearingHouse: string,
      collateralId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[IClearingHouseStructures.CollateralStructOutput]>;

    getCollateralOffsets(
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    getLiquidityPositionOffsets(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]
    >;

    getPoolInfo(
      clearingHouse: string,
      poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[IClearingHouseStructures.PoolStructOutput]>;

    getPoolOffsets(
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;

    getPoolSettings(
      clearingHouse: string,
      poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [IClearingHouseStructures.PoolSettingsStructOutput] & {
        settings: IClearingHouseStructures.PoolSettingsStructOutput;
      }
    >;

    getProtocolInfo(
      clearingHouse: string,
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

    getProtocolOffsets(
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ]
    >;

    getProtocolSlot(overrides?: CallOverrides): Promise<[string]>;

    getVPool(
      clearingHouse: string,
      poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string] & { vPool: string }>;

    getVPoolAndTwapDuration(
      clearingHouse: string,
      poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, number] & { vPool: string; twapDuration: number }>;

    getVTokenPositionOffsets(
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]>;

    isPoolIdAvailable(
      clearingHouse: string,
      poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  checkVPoolAndTwapDuration(
    clearingHouse: string,
    poolId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getAccountCollateralBalance(
    clearingHouse: string,
    accountId: BigNumberish,
    collateralId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getAccountCollateralInfo(
    clearingHouse: string,
    accountId: BigNumberish,
    collateralId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber] & { collateral: string; balance: BigNumber }>;

  getAccountInfo(
    clearingHouse: string,
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
    clearingHouse: string,
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
    clearingHouse: string,
    accountId: BigNumberish,
    poolId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<IClearingHouseStructures.TickRangeStructOutput[]>;

  getAccountOffsets(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]
  >;

  getAccountPositionInfo(
    clearingHouse: string,
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
    clearingHouse: string,
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

  getAccountsMappingSlot(overrides?: CallOverrides): Promise<string>;

  getCollateralInfo(
    clearingHouse: string,
    collateralId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<IClearingHouseStructures.CollateralStructOutput>;

  getCollateralOffsets(
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>;

  getLiquidityPositionOffsets(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]
  >;

  getPoolInfo(
    clearingHouse: string,
    poolId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<IClearingHouseStructures.PoolStructOutput>;

  getPoolOffsets(
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;

  getPoolSettings(
    clearingHouse: string,
    poolId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<IClearingHouseStructures.PoolSettingsStructOutput>;

  getProtocolInfo(
    clearingHouse: string,
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

  getProtocolOffsets(
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber
    ]
  >;

  getProtocolSlot(overrides?: CallOverrides): Promise<string>;

  getVPool(
    clearingHouse: string,
    poolId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getVPoolAndTwapDuration(
    clearingHouse: string,
    poolId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string, number] & { vPool: string; twapDuration: number }>;

  getVTokenPositionOffsets(
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]>;

  isPoolIdAvailable(
    clearingHouse: string,
    poolId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    checkVPoolAndTwapDuration(
      clearingHouse: string,
      poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, number] & { vPool: string; twapDuration: number }>;

    getAccountCollateralBalance(
      clearingHouse: string,
      accountId: BigNumberish,
      collateralId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAccountCollateralInfo(
      clearingHouse: string,
      accountId: BigNumberish,
      collateralId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber] & { collateral: string; balance: BigNumber }
    >;

    getAccountInfo(
      clearingHouse: string,
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
      clearingHouse: string,
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
      clearingHouse: string,
      accountId: BigNumberish,
      poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<IClearingHouseStructures.TickRangeStructOutput[]>;

    getAccountOffsets(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]
    >;

    getAccountPositionInfo(
      clearingHouse: string,
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
      clearingHouse: string,
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

    getAccountsMappingSlot(overrides?: CallOverrides): Promise<string>;

    getCollateralInfo(
      clearingHouse: string,
      collateralId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<IClearingHouseStructures.CollateralStructOutput>;

    getCollateralOffsets(
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    getLiquidityPositionOffsets(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]
    >;

    getPoolInfo(
      clearingHouse: string,
      poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<IClearingHouseStructures.PoolStructOutput>;

    getPoolOffsets(
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;

    getPoolSettings(
      clearingHouse: string,
      poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<IClearingHouseStructures.PoolSettingsStructOutput>;

    getProtocolInfo(
      clearingHouse: string,
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

    getProtocolOffsets(
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ]
    >;

    getProtocolSlot(overrides?: CallOverrides): Promise<string>;

    getVPool(
      clearingHouse: string,
      poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getVPoolAndTwapDuration(
      clearingHouse: string,
      poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, number] & { vPool: string; twapDuration: number }>;

    getVTokenPositionOffsets(
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]>;

    isPoolIdAvailable(
      clearingHouse: string,
      poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    checkVPoolAndTwapDuration(
      clearingHouse: string,
      poolId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getAccountCollateralBalance(
      clearingHouse: string,
      accountId: BigNumberish,
      collateralId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAccountCollateralInfo(
      clearingHouse: string,
      accountId: BigNumberish,
      collateralId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAccountInfo(
      clearingHouse: string,
      accountId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAccountLiquidityPositionInfo(
      clearingHouse: string,
      accountId: BigNumberish,
      poolId: BigNumberish,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAccountLiquidityPositionList(
      clearingHouse: string,
      accountId: BigNumberish,
      poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAccountOffsets(overrides?: CallOverrides): Promise<BigNumber>;

    getAccountPositionInfo(
      clearingHouse: string,
      accountId: BigNumberish,
      poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAccountTokenPositionInfo(
      clearingHouse: string,
      accountId: BigNumberish,
      poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAccountsMappingSlot(overrides?: CallOverrides): Promise<BigNumber>;

    getCollateralInfo(
      clearingHouse: string,
      collateralId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCollateralOffsets(overrides?: CallOverrides): Promise<BigNumber>;

    getLiquidityPositionOffsets(overrides?: CallOverrides): Promise<BigNumber>;

    getPoolInfo(
      clearingHouse: string,
      poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPoolOffsets(overrides?: CallOverrides): Promise<BigNumber>;

    getPoolSettings(
      clearingHouse: string,
      poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getProtocolInfo(
      clearingHouse: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getProtocolOffsets(overrides?: CallOverrides): Promise<BigNumber>;

    getProtocolSlot(overrides?: CallOverrides): Promise<BigNumber>;

    getVPool(
      clearingHouse: string,
      poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getVPoolAndTwapDuration(
      clearingHouse: string,
      poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getVTokenPositionOffsets(overrides?: CallOverrides): Promise<BigNumber>;

    isPoolIdAvailable(
      clearingHouse: string,
      poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    checkVPoolAndTwapDuration(
      clearingHouse: string,
      poolId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getAccountCollateralBalance(
      clearingHouse: string,
      accountId: BigNumberish,
      collateralId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAccountCollateralInfo(
      clearingHouse: string,
      accountId: BigNumberish,
      collateralId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAccountInfo(
      clearingHouse: string,
      accountId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAccountLiquidityPositionInfo(
      clearingHouse: string,
      accountId: BigNumberish,
      poolId: BigNumberish,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAccountLiquidityPositionList(
      clearingHouse: string,
      accountId: BigNumberish,
      poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAccountOffsets(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAccountPositionInfo(
      clearingHouse: string,
      accountId: BigNumberish,
      poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAccountTokenPositionInfo(
      clearingHouse: string,
      accountId: BigNumberish,
      poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAccountsMappingSlot(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCollateralInfo(
      clearingHouse: string,
      collateralId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCollateralOffsets(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getLiquidityPositionOffsets(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPoolInfo(
      clearingHouse: string,
      poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPoolOffsets(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPoolSettings(
      clearingHouse: string,
      poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getProtocolInfo(
      clearingHouse: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getProtocolOffsets(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getProtocolSlot(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getVPool(
      clearingHouse: string,
      poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getVPoolAndTwapDuration(
      clearingHouse: string,
      poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getVTokenPositionOffsets(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isPoolIdAvailable(
      clearingHouse: string,
      poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
