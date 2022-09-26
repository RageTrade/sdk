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
} from '../../../common';

export declare namespace IClearingHouseStructures {
  export type SwapParamsStruct = {
    amount: PromiseOrValue<BigNumberish>;
    sqrtPriceLimit: PromiseOrValue<BigNumberish>;
    isNotional: PromiseOrValue<boolean>;
    isPartialAllowed: PromiseOrValue<boolean>;
    settleProfit: PromiseOrValue<boolean>;
  };

  export type SwapParamsStructOutput = [
    BigNumber,
    BigNumber,
    boolean,
    boolean,
    boolean
  ] & {
    amount: BigNumber;
    sqrtPriceLimit: BigNumber;
    isNotional: boolean;
    isPartialAllowed: boolean;
    settleProfit: boolean;
  };

  export type LiquidityChangeParamsStruct = {
    tickLower: PromiseOrValue<BigNumberish>;
    tickUpper: PromiseOrValue<BigNumberish>;
    liquidityDelta: PromiseOrValue<BigNumberish>;
    sqrtPriceCurrent: PromiseOrValue<BigNumberish>;
    slippageToleranceBps: PromiseOrValue<BigNumberish>;
    closeTokenPosition: PromiseOrValue<boolean>;
    limitOrderType: PromiseOrValue<BigNumberish>;
    settleProfit: PromiseOrValue<boolean>;
  };

  export type LiquidityChangeParamsStructOutput = [
    number,
    number,
    BigNumber,
    BigNumber,
    number,
    boolean,
    number,
    boolean
  ] & {
    tickLower: number;
    tickUpper: number;
    liquidityDelta: BigNumber;
    sqrtPriceCurrent: BigNumber;
    slippageToleranceBps: number;
    closeTokenPosition: boolean;
    limitOrderType: number;
    settleProfit: boolean;
  };
}

export interface IClearingHouseActionsInterface extends utils.Interface {
  functions: {
    'createAccount()': FunctionFragment;
    'createAccountAndAddMargin(uint32,uint256)': FunctionFragment;
    'liquidateLiquidityPositions(uint256)': FunctionFragment;
    'liquidateTokenPosition(uint256,uint32)': FunctionFragment;
    'removeLimitOrder(uint256,uint32,int24,int24)': FunctionFragment;
    'settleProfit(uint256)': FunctionFragment;
    'swapToken(uint256,uint32,(int256,uint160,bool,bool,bool))': FunctionFragment;
    'updateMargin(uint256,uint32,int256)': FunctionFragment;
    'updateProfit(uint256,int256)': FunctionFragment;
    'updateRangeOrder(uint256,uint32,(int24,int24,int128,uint160,uint16,bool,uint8,bool))': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'createAccount'
      | 'createAccountAndAddMargin'
      | 'liquidateLiquidityPositions'
      | 'liquidateTokenPosition'
      | 'removeLimitOrder'
      | 'settleProfit'
      | 'swapToken'
      | 'updateMargin'
      | 'updateProfit'
      | 'updateRangeOrder'
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'createAccount',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'createAccountAndAddMargin',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'liquidateLiquidityPositions',
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'liquidateTokenPosition',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'removeLimitOrder',
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: 'settleProfit',
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'swapToken',
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      IClearingHouseStructures.SwapParamsStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: 'updateMargin',
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: 'updateProfit',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'updateRangeOrder',
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      IClearingHouseStructures.LiquidityChangeParamsStruct
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: 'createAccount',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'createAccountAndAddMargin',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'liquidateLiquidityPositions',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'liquidateTokenPosition',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'removeLimitOrder',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'settleProfit',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'swapToken', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'updateMargin',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'updateProfit',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'updateRangeOrder',
    data: BytesLike
  ): Result;

  events: {};
}

export interface IClearingHouseActions extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IClearingHouseActionsInterface;

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
    createAccount(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createAccountAndAddMargin(
      collateralId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    liquidateLiquidityPositions(
      accountId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    liquidateTokenPosition(
      targetAccountId: PromiseOrValue<BigNumberish>,
      poolId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    removeLimitOrder(
      accountId: PromiseOrValue<BigNumberish>,
      poolId: PromiseOrValue<BigNumberish>,
      tickLower: PromiseOrValue<BigNumberish>,
      tickUpper: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    settleProfit(
      accountId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    swapToken(
      accountId: PromiseOrValue<BigNumberish>,
      poolId: PromiseOrValue<BigNumberish>,
      swapParams: IClearingHouseStructures.SwapParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateMargin(
      accountId: PromiseOrValue<BigNumberish>,
      collateralId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateProfit(
      accountId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateRangeOrder(
      accountId: PromiseOrValue<BigNumberish>,
      poolId: PromiseOrValue<BigNumberish>,
      liquidityChangeParams: IClearingHouseStructures.LiquidityChangeParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  createAccount(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createAccountAndAddMargin(
    collateralId: PromiseOrValue<BigNumberish>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  liquidateLiquidityPositions(
    accountId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  liquidateTokenPosition(
    targetAccountId: PromiseOrValue<BigNumberish>,
    poolId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  removeLimitOrder(
    accountId: PromiseOrValue<BigNumberish>,
    poolId: PromiseOrValue<BigNumberish>,
    tickLower: PromiseOrValue<BigNumberish>,
    tickUpper: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  settleProfit(
    accountId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  swapToken(
    accountId: PromiseOrValue<BigNumberish>,
    poolId: PromiseOrValue<BigNumberish>,
    swapParams: IClearingHouseStructures.SwapParamsStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateMargin(
    accountId: PromiseOrValue<BigNumberish>,
    collateralId: PromiseOrValue<BigNumberish>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateProfit(
    accountId: PromiseOrValue<BigNumberish>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateRangeOrder(
    accountId: PromiseOrValue<BigNumberish>,
    poolId: PromiseOrValue<BigNumberish>,
    liquidityChangeParams: IClearingHouseStructures.LiquidityChangeParamsStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    createAccount(overrides?: CallOverrides): Promise<BigNumber>;

    createAccountAndAddMargin(
      collateralId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    liquidateLiquidityPositions(
      accountId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    liquidateTokenPosition(
      targetAccountId: PromiseOrValue<BigNumberish>,
      poolId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeLimitOrder(
      accountId: PromiseOrValue<BigNumberish>,
      poolId: PromiseOrValue<BigNumberish>,
      tickLower: PromiseOrValue<BigNumberish>,
      tickUpper: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    settleProfit(
      accountId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    swapToken(
      accountId: PromiseOrValue<BigNumberish>,
      poolId: PromiseOrValue<BigNumberish>,
      swapParams: IClearingHouseStructures.SwapParamsStruct,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        vTokenAmountOut: BigNumber;
        vQuoteAmountOut: BigNumber;
      }
    >;

    updateMargin(
      accountId: PromiseOrValue<BigNumberish>,
      collateralId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateProfit(
      accountId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateRangeOrder(
      accountId: PromiseOrValue<BigNumberish>,
      poolId: PromiseOrValue<BigNumberish>,
      liquidityChangeParams: IClearingHouseStructures.LiquidityChangeParamsStruct,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        vTokenAmountOut: BigNumber;
        vQuoteAmountOut: BigNumber;
      }
    >;
  };

  filters: {};

  estimateGas: {
    createAccount(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createAccountAndAddMargin(
      collateralId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    liquidateLiquidityPositions(
      accountId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    liquidateTokenPosition(
      targetAccountId: PromiseOrValue<BigNumberish>,
      poolId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    removeLimitOrder(
      accountId: PromiseOrValue<BigNumberish>,
      poolId: PromiseOrValue<BigNumberish>,
      tickLower: PromiseOrValue<BigNumberish>,
      tickUpper: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    settleProfit(
      accountId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    swapToken(
      accountId: PromiseOrValue<BigNumberish>,
      poolId: PromiseOrValue<BigNumberish>,
      swapParams: IClearingHouseStructures.SwapParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateMargin(
      accountId: PromiseOrValue<BigNumberish>,
      collateralId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateProfit(
      accountId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateRangeOrder(
      accountId: PromiseOrValue<BigNumberish>,
      poolId: PromiseOrValue<BigNumberish>,
      liquidityChangeParams: IClearingHouseStructures.LiquidityChangeParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createAccount(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createAccountAndAddMargin(
      collateralId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    liquidateLiquidityPositions(
      accountId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    liquidateTokenPosition(
      targetAccountId: PromiseOrValue<BigNumberish>,
      poolId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    removeLimitOrder(
      accountId: PromiseOrValue<BigNumberish>,
      poolId: PromiseOrValue<BigNumberish>,
      tickLower: PromiseOrValue<BigNumberish>,
      tickUpper: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    settleProfit(
      accountId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    swapToken(
      accountId: PromiseOrValue<BigNumberish>,
      poolId: PromiseOrValue<BigNumberish>,
      swapParams: IClearingHouseStructures.SwapParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateMargin(
      accountId: PromiseOrValue<BigNumberish>,
      collateralId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateProfit(
      accountId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateRangeOrder(
      accountId: PromiseOrValue<BigNumberish>,
      poolId: PromiseOrValue<BigNumberish>,
      liquidityChangeParams: IClearingHouseStructures.LiquidityChangeParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
