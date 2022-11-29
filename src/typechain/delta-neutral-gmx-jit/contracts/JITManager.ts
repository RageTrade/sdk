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
} from '../common';

export interface JITManagerInterface extends utils.Interface {
  functions: {
    'addLiquidity(bool)': FunctionFragment;
    'authorizedCaller()': FunctionFragment;
    'feeTier()': FunctionFragment;
    'getDeviationFromChainlink(uint160)': FunctionFragment;
    'getDollarValue()': FunctionFragment;
    'getPrice(address)': FunctionFragment;
    'getTickRange(bool)': FunctionFragment;
    'initialize(address,address,address,address,uint24)': FunctionFragment;
    'keeper()': FunctionFragment;
    'liquidity()': FunctionFragment;
    'nfpm()': FunctionFragment;
    'nfpmTokenId()': FunctionFragment;
    'owner()': FunctionFragment;
    'pool()': FunctionFragment;
    'priceDeviationThresholdBPS()': FunctionFragment;
    'removeLiquidity()': FunctionFragment;
    'renounceOwnership()': FunctionFragment;
    'setValues(address,address,address,address,uint256,uint256,uint256)': FunctionFragment;
    'sqrtPriceThresholdBPS()': FunctionFragment;
    'swapLossThresholdBPS()': FunctionFragment;
    'swapTokens(address,bytes,bool)': FunctionFragment;
    'tickSpacing()': FunctionFragment;
    'token0()': FunctionFragment;
    'token0PriceFeed()': FunctionFragment;
    'token1()': FunctionFragment;
    'token1PriceFeed()': FunctionFragment;
    'transferOwnership(address)': FunctionFragment;
    'uniswapV3Factory()': FunctionFragment;
    'withdrawFunds(address)': FunctionFragment;
    'withdrawTokenFunds()': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'addLiquidity'
      | 'authorizedCaller'
      | 'feeTier'
      | 'getDeviationFromChainlink'
      | 'getDollarValue'
      | 'getPrice'
      | 'getTickRange'
      | 'initialize'
      | 'keeper'
      | 'liquidity'
      | 'nfpm'
      | 'nfpmTokenId'
      | 'owner'
      | 'pool'
      | 'priceDeviationThresholdBPS'
      | 'removeLiquidity'
      | 'renounceOwnership'
      | 'setValues'
      | 'sqrtPriceThresholdBPS'
      | 'swapLossThresholdBPS'
      | 'swapTokens'
      | 'tickSpacing'
      | 'token0'
      | 'token0PriceFeed'
      | 'token1'
      | 'token1PriceFeed'
      | 'transferOwnership'
      | 'uniswapV3Factory'
      | 'withdrawFunds'
      | 'withdrawTokenFunds'
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'addLiquidity',
    values: [PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: 'authorizedCaller',
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: 'feeTier', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'getDeviationFromChainlink',
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'getDollarValue',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'getPrice',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'getTickRange',
    values: [PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: 'initialize',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(functionFragment: 'keeper', values?: undefined): string;
  encodeFunctionData(functionFragment: 'liquidity', values?: undefined): string;
  encodeFunctionData(functionFragment: 'nfpm', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'nfpmTokenId',
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'pool', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'priceDeviationThresholdBPS',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'removeLiquidity',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'renounceOwnership',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'setValues',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: 'sqrtPriceThresholdBPS',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'swapLossThresholdBPS',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'swapTokens',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: 'tickSpacing',
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: 'token0', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'token0PriceFeed',
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: 'token1', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'token1PriceFeed',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'transferOwnership',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'uniswapV3Factory',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'withdrawFunds',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'withdrawTokenFunds',
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: 'addLiquidity',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'authorizedCaller',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'feeTier', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'getDeviationFromChainlink',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getDollarValue',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'getPrice', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'getTickRange',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'keeper', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'liquidity', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'nfpm', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'nfpmTokenId',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'pool', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'priceDeviationThresholdBPS',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'removeLiquidity',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'renounceOwnership',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'setValues', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'sqrtPriceThresholdBPS',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'swapLossThresholdBPS',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'swapTokens', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'tickSpacing',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'token0', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'token0PriceFeed',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'token1', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'token1PriceFeed',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'transferOwnership',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'uniswapV3Factory',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'withdrawFunds',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'withdrawTokenFunds',
    data: BytesLike
  ): Result;

  events: {
    'Initialized(uint8)': EventFragment;
    'OwnershipTransferred(address,address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'Initialized'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
}

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface JITManager extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: JITManagerInterface;

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
    addLiquidity(
      isToken0: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    authorizedCaller(overrides?: CallOverrides): Promise<[string]>;

    feeTier(overrides?: CallOverrides): Promise<[number]>;

    getDeviationFromChainlink(
      sqrtPrice: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        deviationBPS: BigNumber;
        uniswapPriceX128: BigNumber;
        chainlinkPriceX128: BigNumber;
      }
    >;

    getDollarValue(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { dollarValueD6: BigNumber }>;

    getPrice(
      priceFeed: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getTickRange(
      isToken0: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<[number, number] & { tickLower: number; tickUpper: number }>;

    initialize(
      _uniswapV3Factory: PromiseOrValue<string>,
      _nfpm: PromiseOrValue<string>,
      _token0: PromiseOrValue<string>,
      _token1: PromiseOrValue<string>,
      _feeTier: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    keeper(overrides?: CallOverrides): Promise<[string]>;

    liquidity(overrides?: CallOverrides): Promise<[BigNumber]>;

    nfpm(overrides?: CallOverrides): Promise<[string]>;

    nfpmTokenId(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pool(overrides?: CallOverrides): Promise<[string]>;

    priceDeviationThresholdBPS(overrides?: CallOverrides): Promise<[BigNumber]>;

    removeLiquidity(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setValues(
      _keeper: PromiseOrValue<string>,
      _authorizedCaller: PromiseOrValue<string>,
      _token0PriceFeed: PromiseOrValue<string>,
      _token1PriceFeed: PromiseOrValue<string>,
      _sqrtPriceThresholdBPS: PromiseOrValue<BigNumberish>,
      _swapLossThresholdBPS: PromiseOrValue<BigNumberish>,
      _priceDeviationThresholdBPS: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    sqrtPriceThresholdBPS(overrides?: CallOverrides): Promise<[BigNumber]>;

    swapLossThresholdBPS(overrides?: CallOverrides): Promise<[BigNumber]>;

    swapTokens(
      to: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      approveToken0: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    tickSpacing(overrides?: CallOverrides): Promise<[number]>;

    token0(overrides?: CallOverrides): Promise<[string]>;

    token0PriceFeed(overrides?: CallOverrides): Promise<[string]>;

    token1(overrides?: CallOverrides): Promise<[string]>;

    token1PriceFeed(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    uniswapV3Factory(overrides?: CallOverrides): Promise<[string]>;

    withdrawFunds(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdrawTokenFunds(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  addLiquidity(
    isToken0: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  authorizedCaller(overrides?: CallOverrides): Promise<string>;

  feeTier(overrides?: CallOverrides): Promise<number>;

  getDeviationFromChainlink(
    sqrtPrice: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      deviationBPS: BigNumber;
      uniswapPriceX128: BigNumber;
      chainlinkPriceX128: BigNumber;
    }
  >;

  getDollarValue(overrides?: CallOverrides): Promise<BigNumber>;

  getPrice(
    priceFeed: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getTickRange(
    isToken0: PromiseOrValue<boolean>,
    overrides?: CallOverrides
  ): Promise<[number, number] & { tickLower: number; tickUpper: number }>;

  initialize(
    _uniswapV3Factory: PromiseOrValue<string>,
    _nfpm: PromiseOrValue<string>,
    _token0: PromiseOrValue<string>,
    _token1: PromiseOrValue<string>,
    _feeTier: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  keeper(overrides?: CallOverrides): Promise<string>;

  liquidity(overrides?: CallOverrides): Promise<BigNumber>;

  nfpm(overrides?: CallOverrides): Promise<string>;

  nfpmTokenId(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  pool(overrides?: CallOverrides): Promise<string>;

  priceDeviationThresholdBPS(overrides?: CallOverrides): Promise<BigNumber>;

  removeLiquidity(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setValues(
    _keeper: PromiseOrValue<string>,
    _authorizedCaller: PromiseOrValue<string>,
    _token0PriceFeed: PromiseOrValue<string>,
    _token1PriceFeed: PromiseOrValue<string>,
    _sqrtPriceThresholdBPS: PromiseOrValue<BigNumberish>,
    _swapLossThresholdBPS: PromiseOrValue<BigNumberish>,
    _priceDeviationThresholdBPS: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  sqrtPriceThresholdBPS(overrides?: CallOverrides): Promise<BigNumber>;

  swapLossThresholdBPS(overrides?: CallOverrides): Promise<BigNumber>;

  swapTokens(
    to: PromiseOrValue<string>,
    data: PromiseOrValue<BytesLike>,
    approveToken0: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  tickSpacing(overrides?: CallOverrides): Promise<number>;

  token0(overrides?: CallOverrides): Promise<string>;

  token0PriceFeed(overrides?: CallOverrides): Promise<string>;

  token1(overrides?: CallOverrides): Promise<string>;

  token1PriceFeed(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  uniswapV3Factory(overrides?: CallOverrides): Promise<string>;

  withdrawFunds(
    token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdrawTokenFunds(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addLiquidity(
      isToken0: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    authorizedCaller(overrides?: CallOverrides): Promise<string>;

    feeTier(overrides?: CallOverrides): Promise<number>;

    getDeviationFromChainlink(
      sqrtPrice: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        deviationBPS: BigNumber;
        uniswapPriceX128: BigNumber;
        chainlinkPriceX128: BigNumber;
      }
    >;

    getDollarValue(overrides?: CallOverrides): Promise<BigNumber>;

    getPrice(
      priceFeed: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTickRange(
      isToken0: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<[number, number] & { tickLower: number; tickUpper: number }>;

    initialize(
      _uniswapV3Factory: PromiseOrValue<string>,
      _nfpm: PromiseOrValue<string>,
      _token0: PromiseOrValue<string>,
      _token1: PromiseOrValue<string>,
      _feeTier: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    keeper(overrides?: CallOverrides): Promise<string>;

    liquidity(overrides?: CallOverrides): Promise<BigNumber>;

    nfpm(overrides?: CallOverrides): Promise<string>;

    nfpmTokenId(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    pool(overrides?: CallOverrides): Promise<string>;

    priceDeviationThresholdBPS(overrides?: CallOverrides): Promise<BigNumber>;

    removeLiquidity(overrides?: CallOverrides): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setValues(
      _keeper: PromiseOrValue<string>,
      _authorizedCaller: PromiseOrValue<string>,
      _token0PriceFeed: PromiseOrValue<string>,
      _token1PriceFeed: PromiseOrValue<string>,
      _sqrtPriceThresholdBPS: PromiseOrValue<BigNumberish>,
      _swapLossThresholdBPS: PromiseOrValue<BigNumberish>,
      _priceDeviationThresholdBPS: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    sqrtPriceThresholdBPS(overrides?: CallOverrides): Promise<BigNumber>;

    swapLossThresholdBPS(overrides?: CallOverrides): Promise<BigNumber>;

    swapTokens(
      to: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      approveToken0: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    tickSpacing(overrides?: CallOverrides): Promise<number>;

    token0(overrides?: CallOverrides): Promise<string>;

    token0PriceFeed(overrides?: CallOverrides): Promise<string>;

    token1(overrides?: CallOverrides): Promise<string>;

    token1PriceFeed(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    uniswapV3Factory(overrides?: CallOverrides): Promise<string>;

    withdrawFunds(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawTokenFunds(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    'Initialized(uint8)'(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    'OwnershipTransferred(address,address)'(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    addLiquidity(
      isToken0: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    authorizedCaller(overrides?: CallOverrides): Promise<BigNumber>;

    feeTier(overrides?: CallOverrides): Promise<BigNumber>;

    getDeviationFromChainlink(
      sqrtPrice: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getDollarValue(overrides?: CallOverrides): Promise<BigNumber>;

    getPrice(
      priceFeed: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTickRange(
      isToken0: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      _uniswapV3Factory: PromiseOrValue<string>,
      _nfpm: PromiseOrValue<string>,
      _token0: PromiseOrValue<string>,
      _token1: PromiseOrValue<string>,
      _feeTier: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    keeper(overrides?: CallOverrides): Promise<BigNumber>;

    liquidity(overrides?: CallOverrides): Promise<BigNumber>;

    nfpm(overrides?: CallOverrides): Promise<BigNumber>;

    nfpmTokenId(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pool(overrides?: CallOverrides): Promise<BigNumber>;

    priceDeviationThresholdBPS(overrides?: CallOverrides): Promise<BigNumber>;

    removeLiquidity(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setValues(
      _keeper: PromiseOrValue<string>,
      _authorizedCaller: PromiseOrValue<string>,
      _token0PriceFeed: PromiseOrValue<string>,
      _token1PriceFeed: PromiseOrValue<string>,
      _sqrtPriceThresholdBPS: PromiseOrValue<BigNumberish>,
      _swapLossThresholdBPS: PromiseOrValue<BigNumberish>,
      _priceDeviationThresholdBPS: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    sqrtPriceThresholdBPS(overrides?: CallOverrides): Promise<BigNumber>;

    swapLossThresholdBPS(overrides?: CallOverrides): Promise<BigNumber>;

    swapTokens(
      to: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      approveToken0: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    tickSpacing(overrides?: CallOverrides): Promise<BigNumber>;

    token0(overrides?: CallOverrides): Promise<BigNumber>;

    token0PriceFeed(overrides?: CallOverrides): Promise<BigNumber>;

    token1(overrides?: CallOverrides): Promise<BigNumber>;

    token1PriceFeed(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    uniswapV3Factory(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawFunds(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdrawTokenFunds(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addLiquidity(
      isToken0: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    authorizedCaller(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    feeTier(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getDeviationFromChainlink(
      sqrtPrice: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getDollarValue(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPrice(
      priceFeed: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTickRange(
      isToken0: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _uniswapV3Factory: PromiseOrValue<string>,
      _nfpm: PromiseOrValue<string>,
      _token0: PromiseOrValue<string>,
      _token1: PromiseOrValue<string>,
      _feeTier: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    keeper(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    liquidity(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nfpm(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nfpmTokenId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    priceDeviationThresholdBPS(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeLiquidity(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setValues(
      _keeper: PromiseOrValue<string>,
      _authorizedCaller: PromiseOrValue<string>,
      _token0PriceFeed: PromiseOrValue<string>,
      _token1PriceFeed: PromiseOrValue<string>,
      _sqrtPriceThresholdBPS: PromiseOrValue<BigNumberish>,
      _swapLossThresholdBPS: PromiseOrValue<BigNumberish>,
      _priceDeviationThresholdBPS: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    sqrtPriceThresholdBPS(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    swapLossThresholdBPS(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    swapTokens(
      to: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      approveToken0: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    tickSpacing(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    token0(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    token0PriceFeed(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    token1(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    token1PriceFeed(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    uniswapV3Factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdrawFunds(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdrawTokenFunds(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}