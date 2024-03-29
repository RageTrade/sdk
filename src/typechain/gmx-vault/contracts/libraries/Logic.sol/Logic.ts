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
} from '../../../common';

export interface LogicInterface extends utils.Interface {
  functions: {
    'getMarketValue(uint256,ILPPriceGetter)': FunctionFragment;
    'getPriceX128(ILPPriceGetter)': FunctionFragment;
    'getTwapSqrtPriceX96(IUniswapV3Pool,uint32)': FunctionFragment;
    'getUpdatedBaseRangeParams(uint160,int256,uint64)': FunctionFragment;
    'isValidRebalanceRangeWithoutCheckReset(IUniswapV3Pool,uint32,uint16,int24,int24)': FunctionFragment;
    'simulateBeforeWithdraw(address,uint256,uint256)': FunctionFragment;
    'sqrtPriceX96ToValidTick(uint160,bool)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'getMarketValue'
      | 'getPriceX128'
      | 'getTwapSqrtPriceX96'
      | 'getUpdatedBaseRangeParams'
      | 'isValidRebalanceRangeWithoutCheckReset'
      | 'simulateBeforeWithdraw'
      | 'sqrtPriceX96ToValidTick'
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'getMarketValue',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'getPriceX128',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'getTwapSqrtPriceX96',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'getUpdatedBaseRangeParams',
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: 'isValidRebalanceRangeWithoutCheckReset',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: 'simulateBeforeWithdraw',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: 'sqrtPriceX96ToValidTick',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<boolean>]
  ): string;

  decodeFunctionResult(
    functionFragment: 'getMarketValue',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getPriceX128',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getTwapSqrtPriceX96',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getUpdatedBaseRangeParams',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'isValidRebalanceRangeWithoutCheckReset',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'simulateBeforeWithdraw',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'sqrtPriceX96ToValidTick',
    data: BytesLike
  ): Result;

  events: {
    'BaseParamsUpdated(uint256,address,uint32,uint16)': EventFragment;
    'CrvSwapFailedDueToSlippage(uint256)': EventFragment;
    'CurveParamsUpdated(uint256,uint256,uint256,uint256,address)': EventFragment;
    'EightyTwentyParamsUpdated(uint16,uint16,uint64)': EventFragment;
    'FeesUpdated(uint256)': EventFragment;
    'FeesWithdrawn(uint256)': EventFragment;
    'Harvested(uint256)': EventFragment;
    'Rebalance()': EventFragment;
    'Staked(uint256,address)': EventFragment;
    'StateInfo(uint256)': EventFragment;
    'TokenPositionClosed()': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'BaseParamsUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'CrvSwapFailedDueToSlippage'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'CurveParamsUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'EightyTwentyParamsUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'FeesUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'FeesWithdrawn'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Harvested'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Rebalance'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Staked'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'StateInfo'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'TokenPositionClosed'): EventFragment;
}

export interface BaseParamsUpdatedEventObject {
  newDepositCap: BigNumber;
  newKeeperAddress: string;
  rebalanceTimeThreshold: number;
  rebalancePriceThresholdBps: number;
}
export type BaseParamsUpdatedEvent = TypedEvent<
  [BigNumber, string, number, number],
  BaseParamsUpdatedEventObject
>;

export type BaseParamsUpdatedEventFilter =
  TypedEventFilter<BaseParamsUpdatedEvent>;

export interface CrvSwapFailedDueToSlippageEventObject {
  crvSlippageTolerance: BigNumber;
}
export type CrvSwapFailedDueToSlippageEvent = TypedEvent<
  [BigNumber],
  CrvSwapFailedDueToSlippageEventObject
>;

export type CrvSwapFailedDueToSlippageEventFilter =
  TypedEventFilter<CrvSwapFailedDueToSlippageEvent>;

export interface CurveParamsUpdatedEventObject {
  feeBps: BigNumber;
  stablecoinSlippage: BigNumber;
  crvHarvestThreshold: BigNumber;
  crvSlippageTolerance: BigNumber;
  crvOracle: string;
}
export type CurveParamsUpdatedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, BigNumber, string],
  CurveParamsUpdatedEventObject
>;

export type CurveParamsUpdatedEventFilter =
  TypedEventFilter<CurveParamsUpdatedEvent>;

export interface EightyTwentyParamsUpdatedEventObject {
  closePositionSlippageSqrtToleranceBps: number;
  resetPositionThresholdBps: number;
  minNotionalPositionToCloseThreshold: BigNumber;
}
export type EightyTwentyParamsUpdatedEvent = TypedEvent<
  [number, number, BigNumber],
  EightyTwentyParamsUpdatedEventObject
>;

export type EightyTwentyParamsUpdatedEventFilter =
  TypedEventFilter<EightyTwentyParamsUpdatedEvent>;

export interface FeesUpdatedEventObject {
  fee: BigNumber;
}
export type FeesUpdatedEvent = TypedEvent<[BigNumber], FeesUpdatedEventObject>;

export type FeesUpdatedEventFilter = TypedEventFilter<FeesUpdatedEvent>;

export interface FeesWithdrawnEventObject {
  total: BigNumber;
}
export type FeesWithdrawnEvent = TypedEvent<
  [BigNumber],
  FeesWithdrawnEventObject
>;

export type FeesWithdrawnEventFilter = TypedEventFilter<FeesWithdrawnEvent>;

export interface HarvestedEventObject {
  crvAmount: BigNumber;
}
export type HarvestedEvent = TypedEvent<[BigNumber], HarvestedEventObject>;

export type HarvestedEventFilter = TypedEventFilter<HarvestedEvent>;

export interface RebalanceEventObject {}
export type RebalanceEvent = TypedEvent<[], RebalanceEventObject>;

export type RebalanceEventFilter = TypedEventFilter<RebalanceEvent>;

export interface StakedEventObject {
  amount: BigNumber;
  depositor: string;
}
export type StakedEvent = TypedEvent<[BigNumber, string], StakedEventObject>;

export type StakedEventFilter = TypedEventFilter<StakedEvent>;

export interface StateInfoEventObject {
  lpPrice: BigNumber;
}
export type StateInfoEvent = TypedEvent<[BigNumber], StateInfoEventObject>;

export type StateInfoEventFilter = TypedEventFilter<StateInfoEvent>;

export interface TokenPositionClosedEventObject {}
export type TokenPositionClosedEvent = TypedEvent<
  [],
  TokenPositionClosedEventObject
>;

export type TokenPositionClosedEventFilter =
  TypedEventFilter<TokenPositionClosedEvent>;

export interface Logic extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LogicInterface;

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
    getMarketValue(
      amount: PromiseOrValue<BigNumberish>,
      lpPriceHolder: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { marketValue: BigNumber }>;

    getPriceX128(
      lpPriceHolder: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { priceX128: BigNumber }>;

    getTwapSqrtPriceX96(
      rageVPool: PromiseOrValue<string>,
      rageTwapDuration: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { twapSqrtPriceX96: BigNumber }>;

    getUpdatedBaseRangeParams(
      sqrtPriceX96: PromiseOrValue<BigNumberish>,
      vaultMarketValue: PromiseOrValue<BigNumberish>,
      SQRT_PRICE_FACTOR_PIPS: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [number, number, BigNumber] & {
        baseTickLowerUpdate: number;
        baseTickUpperUpdate: number;
        baseLiquidityUpdate: BigNumber;
      }
    >;

    isValidRebalanceRangeWithoutCheckReset(
      rageVPool: PromiseOrValue<string>,
      rageTwapDuration: PromiseOrValue<BigNumberish>,
      rebalancePriceThresholdBps: PromiseOrValue<BigNumberish>,
      baseTickLower: PromiseOrValue<BigNumberish>,
      baseTickUpper: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean] & { isValid: boolean }>;

    simulateBeforeWithdraw(
      vault: PromiseOrValue<string>,
      amountBeforeWithdraw: PromiseOrValue<BigNumberish>,
      amountWithdrawn: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        updatedAmountWithdrawn: BigNumber;
        tokensToTrade: BigNumber;
      }
    >;

    sqrtPriceX96ToValidTick(
      sqrtPriceX96: PromiseOrValue<BigNumberish>,
      isTickUpper: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<[number] & { roundedTick: number }>;
  };

  getMarketValue(
    amount: PromiseOrValue<BigNumberish>,
    lpPriceHolder: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getPriceX128(
    lpPriceHolder: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getTwapSqrtPriceX96(
    rageVPool: PromiseOrValue<string>,
    rageTwapDuration: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getUpdatedBaseRangeParams(
    sqrtPriceX96: PromiseOrValue<BigNumberish>,
    vaultMarketValue: PromiseOrValue<BigNumberish>,
    SQRT_PRICE_FACTOR_PIPS: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [number, number, BigNumber] & {
      baseTickLowerUpdate: number;
      baseTickUpperUpdate: number;
      baseLiquidityUpdate: BigNumber;
    }
  >;

  isValidRebalanceRangeWithoutCheckReset(
    rageVPool: PromiseOrValue<string>,
    rageTwapDuration: PromiseOrValue<BigNumberish>,
    rebalancePriceThresholdBps: PromiseOrValue<BigNumberish>,
    baseTickLower: PromiseOrValue<BigNumberish>,
    baseTickUpper: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  simulateBeforeWithdraw(
    vault: PromiseOrValue<string>,
    amountBeforeWithdraw: PromiseOrValue<BigNumberish>,
    amountWithdrawn: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      updatedAmountWithdrawn: BigNumber;
      tokensToTrade: BigNumber;
    }
  >;

  sqrtPriceX96ToValidTick(
    sqrtPriceX96: PromiseOrValue<BigNumberish>,
    isTickUpper: PromiseOrValue<boolean>,
    overrides?: CallOverrides
  ): Promise<number>;

  callStatic: {
    getMarketValue(
      amount: PromiseOrValue<BigNumberish>,
      lpPriceHolder: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPriceX128(
      lpPriceHolder: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTwapSqrtPriceX96(
      rageVPool: PromiseOrValue<string>,
      rageTwapDuration: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUpdatedBaseRangeParams(
      sqrtPriceX96: PromiseOrValue<BigNumberish>,
      vaultMarketValue: PromiseOrValue<BigNumberish>,
      SQRT_PRICE_FACTOR_PIPS: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [number, number, BigNumber] & {
        baseTickLowerUpdate: number;
        baseTickUpperUpdate: number;
        baseLiquidityUpdate: BigNumber;
      }
    >;

    isValidRebalanceRangeWithoutCheckReset(
      rageVPool: PromiseOrValue<string>,
      rageTwapDuration: PromiseOrValue<BigNumberish>,
      rebalancePriceThresholdBps: PromiseOrValue<BigNumberish>,
      baseTickLower: PromiseOrValue<BigNumberish>,
      baseTickUpper: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    simulateBeforeWithdraw(
      vault: PromiseOrValue<string>,
      amountBeforeWithdraw: PromiseOrValue<BigNumberish>,
      amountWithdrawn: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        updatedAmountWithdrawn: BigNumber;
        tokensToTrade: BigNumber;
      }
    >;

    sqrtPriceX96ToValidTick(
      sqrtPriceX96: PromiseOrValue<BigNumberish>,
      isTickUpper: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<number>;
  };

  filters: {
    'BaseParamsUpdated(uint256,address,uint32,uint16)'(
      newDepositCap?: null,
      newKeeperAddress?: null,
      rebalanceTimeThreshold?: null,
      rebalancePriceThresholdBps?: null
    ): BaseParamsUpdatedEventFilter;
    BaseParamsUpdated(
      newDepositCap?: null,
      newKeeperAddress?: null,
      rebalanceTimeThreshold?: null,
      rebalancePriceThresholdBps?: null
    ): BaseParamsUpdatedEventFilter;

    'CrvSwapFailedDueToSlippage(uint256)'(
      crvSlippageTolerance?: null
    ): CrvSwapFailedDueToSlippageEventFilter;
    CrvSwapFailedDueToSlippage(
      crvSlippageTolerance?: null
    ): CrvSwapFailedDueToSlippageEventFilter;

    'CurveParamsUpdated(uint256,uint256,uint256,uint256,address)'(
      feeBps?: null,
      stablecoinSlippage?: null,
      crvHarvestThreshold?: null,
      crvSlippageTolerance?: null,
      crvOracle?: PromiseOrValue<string> | null
    ): CurveParamsUpdatedEventFilter;
    CurveParamsUpdated(
      feeBps?: null,
      stablecoinSlippage?: null,
      crvHarvestThreshold?: null,
      crvSlippageTolerance?: null,
      crvOracle?: PromiseOrValue<string> | null
    ): CurveParamsUpdatedEventFilter;

    'EightyTwentyParamsUpdated(uint16,uint16,uint64)'(
      closePositionSlippageSqrtToleranceBps?: null,
      resetPositionThresholdBps?: null,
      minNotionalPositionToCloseThreshold?: null
    ): EightyTwentyParamsUpdatedEventFilter;
    EightyTwentyParamsUpdated(
      closePositionSlippageSqrtToleranceBps?: null,
      resetPositionThresholdBps?: null,
      minNotionalPositionToCloseThreshold?: null
    ): EightyTwentyParamsUpdatedEventFilter;

    'FeesUpdated(uint256)'(fee?: null): FeesUpdatedEventFilter;
    FeesUpdated(fee?: null): FeesUpdatedEventFilter;

    'FeesWithdrawn(uint256)'(total?: null): FeesWithdrawnEventFilter;
    FeesWithdrawn(total?: null): FeesWithdrawnEventFilter;

    'Harvested(uint256)'(crvAmount?: null): HarvestedEventFilter;
    Harvested(crvAmount?: null): HarvestedEventFilter;

    'Rebalance()'(): RebalanceEventFilter;
    Rebalance(): RebalanceEventFilter;

    'Staked(uint256,address)'(
      amount?: null,
      depositor?: PromiseOrValue<string> | null
    ): StakedEventFilter;
    Staked(
      amount?: null,
      depositor?: PromiseOrValue<string> | null
    ): StakedEventFilter;

    'StateInfo(uint256)'(lpPrice?: null): StateInfoEventFilter;
    StateInfo(lpPrice?: null): StateInfoEventFilter;

    'TokenPositionClosed()'(): TokenPositionClosedEventFilter;
    TokenPositionClosed(): TokenPositionClosedEventFilter;
  };

  estimateGas: {
    getMarketValue(
      amount: PromiseOrValue<BigNumberish>,
      lpPriceHolder: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPriceX128(
      lpPriceHolder: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTwapSqrtPriceX96(
      rageVPool: PromiseOrValue<string>,
      rageTwapDuration: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUpdatedBaseRangeParams(
      sqrtPriceX96: PromiseOrValue<BigNumberish>,
      vaultMarketValue: PromiseOrValue<BigNumberish>,
      SQRT_PRICE_FACTOR_PIPS: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isValidRebalanceRangeWithoutCheckReset(
      rageVPool: PromiseOrValue<string>,
      rageTwapDuration: PromiseOrValue<BigNumberish>,
      rebalancePriceThresholdBps: PromiseOrValue<BigNumberish>,
      baseTickLower: PromiseOrValue<BigNumberish>,
      baseTickUpper: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    simulateBeforeWithdraw(
      vault: PromiseOrValue<string>,
      amountBeforeWithdraw: PromiseOrValue<BigNumberish>,
      amountWithdrawn: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    sqrtPriceX96ToValidTick(
      sqrtPriceX96: PromiseOrValue<BigNumberish>,
      isTickUpper: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getMarketValue(
      amount: PromiseOrValue<BigNumberish>,
      lpPriceHolder: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPriceX128(
      lpPriceHolder: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTwapSqrtPriceX96(
      rageVPool: PromiseOrValue<string>,
      rageTwapDuration: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUpdatedBaseRangeParams(
      sqrtPriceX96: PromiseOrValue<BigNumberish>,
      vaultMarketValue: PromiseOrValue<BigNumberish>,
      SQRT_PRICE_FACTOR_PIPS: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isValidRebalanceRangeWithoutCheckReset(
      rageVPool: PromiseOrValue<string>,
      rageTwapDuration: PromiseOrValue<BigNumberish>,
      rebalancePriceThresholdBps: PromiseOrValue<BigNumberish>,
      baseTickLower: PromiseOrValue<BigNumberish>,
      baseTickUpper: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    simulateBeforeWithdraw(
      vault: PromiseOrValue<string>,
      amountBeforeWithdraw: PromiseOrValue<BigNumberish>,
      amountWithdrawn: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    sqrtPriceX96ToValidTick(
      sqrtPriceX96: PromiseOrValue<BigNumberish>,
      isTickUpper: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
