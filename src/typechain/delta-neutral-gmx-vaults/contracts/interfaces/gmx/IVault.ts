/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from 'ethers';
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from '../../../common';

export interface IVaultInterface extends Interface {
  getFunction(
    nameOrSignature:
      | 'allWhitelistedTokens'
      | 'allWhitelistedTokensLength'
      | 'approvedRouters'
      | 'bufferAmounts'
      | 'buyUSDG'
      | 'cumulativeFundingRates'
      | 'decreasePosition'
      | 'directPoolDeposit'
      | 'feeReserves'
      | 'fundingInterval'
      | 'fundingRateFactor'
      | 'getDelta'
      | 'getFeeBasisPoints'
      | 'getMaxPrice'
      | 'getMinPrice'
      | 'getNextFundingRate'
      | 'getPosition'
      | 'getRedemptionAmount'
      | 'globalShortAveragePrices'
      | 'globalShortSizes'
      | 'gov'
      | 'guaranteedUsd'
      | 'hasDynamicFees'
      | 'inManagerMode'
      | 'inPrivateLiquidationMode'
      | 'increasePosition'
      | 'isInitialized'
      | 'isLeverageEnabled'
      | 'isLiquidator'
      | 'isManager'
      | 'isSwapEnabled'
      | 'lastFundingTimes'
      | 'liquidationFeeUsd'
      | 'marginFeeBasisPoints'
      | 'maxGasPrice'
      | 'maxLeverage'
      | 'maxUsdgAmounts'
      | 'minProfitBasisPoints'
      | 'minProfitTime'
      | 'mintBurnFeeBasisPoints'
      | 'poolAmounts'
      | 'priceFeed'
      | 'reservedAmounts'
      | 'router'
      | 'sellUSDG'
      | 'setError'
      | 'setFees'
      | 'setInManagerMode'
      | 'setIsLeverageEnabled'
      | 'setIsSwapEnabled'
      | 'setManager'
      | 'setMaxGasPrice'
      | 'setPriceFeed'
      | 'setTokenConfig'
      | 'shortableTokens'
      | 'stableFundingRateFactor'
      | 'stableSwapFeeBasisPoints'
      | 'stableTaxBasisPoints'
      | 'stableTokens'
      | 'swap'
      | 'swapFeeBasisPoints'
      | 'taxBasisPoints'
      | 'tokenBalances'
      | 'tokenDecimals'
      | 'tokenToUsdMin'
      | 'tokenWeights'
      | 'totalTokenWeights'
      | 'usdg'
      | 'usdgAmounts'
      | 'whitelistedTokenCount'
      | 'whitelistedTokens'
      | 'withdrawFees'
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'allWhitelistedTokens',
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'allWhitelistedTokensLength',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'approvedRouters',
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: 'bufferAmounts',
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: 'buyUSDG',
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: 'cumulativeFundingRates',
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: 'decreasePosition',
    values: [
      AddressLike,
      AddressLike,
      AddressLike,
      BigNumberish,
      BigNumberish,
      boolean,
      AddressLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: 'directPoolDeposit',
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: 'feeReserves',
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: 'fundingInterval',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'fundingRateFactor',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'getDelta',
    values: [AddressLike, BigNumberish, BigNumberish, boolean, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'getFeeBasisPoints',
    values: [AddressLike, BigNumberish, BigNumberish, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: 'getMaxPrice',
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: 'getMinPrice',
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: 'getNextFundingRate',
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: 'getPosition',
    values: [AddressLike, AddressLike, AddressLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: 'getRedemptionAmount',
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'globalShortAveragePrices',
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: 'globalShortSizes',
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: 'gov', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'guaranteedUsd',
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: 'hasDynamicFees',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'inManagerMode',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'inPrivateLiquidationMode',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'increasePosition',
    values: [AddressLike, AddressLike, AddressLike, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: 'isInitialized',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'isLeverageEnabled',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'isLiquidator',
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: 'isManager',
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: 'isSwapEnabled',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'lastFundingTimes',
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: 'liquidationFeeUsd',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'marginFeeBasisPoints',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'maxGasPrice',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'maxLeverage',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'maxUsdgAmounts',
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: 'minProfitBasisPoints',
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: 'minProfitTime',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'mintBurnFeeBasisPoints',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'poolAmounts',
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: 'priceFeed', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'reservedAmounts',
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: 'router', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'sellUSDG',
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: 'setError',
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: 'setFees',
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      boolean
    ]
  ): string;
  encodeFunctionData(
    functionFragment: 'setInManagerMode',
    values: [boolean]
  ): string;
  encodeFunctionData(
    functionFragment: 'setIsLeverageEnabled',
    values: [boolean]
  ): string;
  encodeFunctionData(
    functionFragment: 'setIsSwapEnabled',
    values: [boolean]
  ): string;
  encodeFunctionData(
    functionFragment: 'setManager',
    values: [AddressLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: 'setMaxGasPrice',
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'setPriceFeed',
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: 'setTokenConfig',
    values: [
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      boolean,
      boolean
    ]
  ): string;
  encodeFunctionData(
    functionFragment: 'shortableTokens',
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: 'stableFundingRateFactor',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'stableSwapFeeBasisPoints',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'stableTaxBasisPoints',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'stableTokens',
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: 'swap',
    values: [AddressLike, AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: 'swapFeeBasisPoints',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'taxBasisPoints',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'tokenBalances',
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: 'tokenDecimals',
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: 'tokenToUsdMin',
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'tokenWeights',
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: 'totalTokenWeights',
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: 'usdg', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'usdgAmounts',
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: 'whitelistedTokenCount',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'whitelistedTokens',
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: 'withdrawFees',
    values: [AddressLike, AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: 'allWhitelistedTokens',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'allWhitelistedTokensLength',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'approvedRouters',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'bufferAmounts',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'buyUSDG', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'cumulativeFundingRates',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'decreasePosition',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'directPoolDeposit',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'feeReserves',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'fundingInterval',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'fundingRateFactor',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'getDelta', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'getFeeBasisPoints',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getMaxPrice',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getMinPrice',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getNextFundingRate',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getPosition',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getRedemptionAmount',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'globalShortAveragePrices',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'globalShortSizes',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'gov', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'guaranteedUsd',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'hasDynamicFees',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'inManagerMode',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'inPrivateLiquidationMode',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'increasePosition',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'isInitialized',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'isLeverageEnabled',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'isLiquidator',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'isManager', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'isSwapEnabled',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'lastFundingTimes',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'liquidationFeeUsd',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'marginFeeBasisPoints',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'maxGasPrice',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'maxLeverage',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'maxUsdgAmounts',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'minProfitBasisPoints',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'minProfitTime',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'mintBurnFeeBasisPoints',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'poolAmounts',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'priceFeed', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'reservedAmounts',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'router', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'sellUSDG', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setError', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setFees', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'setInManagerMode',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'setIsLeverageEnabled',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'setIsSwapEnabled',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'setManager', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'setMaxGasPrice',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'setPriceFeed',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'setTokenConfig',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'shortableTokens',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'stableFundingRateFactor',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'stableSwapFeeBasisPoints',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'stableTaxBasisPoints',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'stableTokens',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'swap', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'swapFeeBasisPoints',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'taxBasisPoints',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'tokenBalances',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'tokenDecimals',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'tokenToUsdMin',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'tokenWeights',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'totalTokenWeights',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'usdg', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'usdgAmounts',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'whitelistedTokenCount',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'whitelistedTokens',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'withdrawFees',
    data: BytesLike
  ): Result;
}

export interface IVault extends BaseContract {
  connect(runner?: ContractRunner | null): BaseContract;
  attach(addressOrName: AddressLike): this;
  deployed(): Promise<this>;

  interface: IVaultInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  allWhitelistedTokens: TypedContractMethod<
    [arg0: BigNumberish],
    [string],
    'view'
  >;

  allWhitelistedTokensLength: TypedContractMethod<[], [bigint], 'view'>;

  approvedRouters: TypedContractMethod<
    [_account: AddressLike, _router: AddressLike],
    [boolean],
    'view'
  >;

  bufferAmounts: TypedContractMethod<[_token: AddressLike], [bigint], 'view'>;

  buyUSDG: TypedContractMethod<
    [_token: AddressLike, _receiver: AddressLike],
    [bigint],
    'nonpayable'
  >;

  cumulativeFundingRates: TypedContractMethod<
    [_token: AddressLike],
    [bigint],
    'view'
  >;

  decreasePosition: TypedContractMethod<
    [
      _account: AddressLike,
      _collateralToken: AddressLike,
      _indexToken: AddressLike,
      _collateralDelta: BigNumberish,
      _sizeDelta: BigNumberish,
      _isLong: boolean,
      _receiver: AddressLike
    ],
    [bigint],
    'nonpayable'
  >;

  directPoolDeposit: TypedContractMethod<
    [_token: AddressLike],
    [void],
    'nonpayable'
  >;

  feeReserves: TypedContractMethod<[_token: AddressLike], [bigint], 'view'>;

  fundingInterval: TypedContractMethod<[], [bigint], 'view'>;

  fundingRateFactor: TypedContractMethod<[], [bigint], 'view'>;

  getDelta: TypedContractMethod<
    [
      _indexToken: AddressLike,
      _size: BigNumberish,
      _averagePrice: BigNumberish,
      _isLong: boolean,
      _lastIncreasedTime: BigNumberish
    ],
    [[boolean, bigint]],
    'view'
  >;

  getFeeBasisPoints: TypedContractMethod<
    [
      _token: AddressLike,
      _usdgDelta: BigNumberish,
      _feeBasisPoints: BigNumberish,
      _taxBasisPoints: BigNumberish,
      _increment: boolean
    ],
    [bigint],
    'view'
  >;

  getMaxPrice: TypedContractMethod<[_token: AddressLike], [bigint], 'view'>;

  getMinPrice: TypedContractMethod<[_token: AddressLike], [bigint], 'view'>;

  getNextFundingRate: TypedContractMethod<
    [_token: AddressLike],
    [bigint],
    'view'
  >;

  getPosition: TypedContractMethod<
    [
      _account: AddressLike,
      _collateralToken: AddressLike,
      _indexToken: AddressLike,
      _isLong: boolean
    ],
    [[bigint, bigint, bigint, bigint, bigint, bigint, boolean, bigint]],
    'view'
  >;

  getRedemptionAmount: TypedContractMethod<
    [_token: AddressLike, _usdgAmount: BigNumberish],
    [bigint],
    'view'
  >;

  globalShortAveragePrices: TypedContractMethod<
    [_token: AddressLike],
    [bigint],
    'view'
  >;

  globalShortSizes: TypedContractMethod<
    [_token: AddressLike],
    [bigint],
    'view'
  >;

  gov: TypedContractMethod<[], [string], 'view'>;

  guaranteedUsd: TypedContractMethod<[_token: AddressLike], [bigint], 'view'>;

  hasDynamicFees: TypedContractMethod<[], [boolean], 'view'>;

  inManagerMode: TypedContractMethod<[], [boolean], 'view'>;

  inPrivateLiquidationMode: TypedContractMethod<[], [boolean], 'view'>;

  increasePosition: TypedContractMethod<
    [
      _account: AddressLike,
      _collateralToken: AddressLike,
      _indexToken: AddressLike,
      _sizeDelta: BigNumberish,
      _isLong: boolean
    ],
    [void],
    'nonpayable'
  >;

  isInitialized: TypedContractMethod<[], [boolean], 'view'>;

  isLeverageEnabled: TypedContractMethod<[], [boolean], 'view'>;

  isLiquidator: TypedContractMethod<[_account: AddressLike], [boolean], 'view'>;

  isManager: TypedContractMethod<[_account: AddressLike], [boolean], 'view'>;

  isSwapEnabled: TypedContractMethod<[], [boolean], 'view'>;

  lastFundingTimes: TypedContractMethod<
    [_token: AddressLike],
    [bigint],
    'view'
  >;

  liquidationFeeUsd: TypedContractMethod<[], [bigint], 'view'>;

  marginFeeBasisPoints: TypedContractMethod<[], [bigint], 'view'>;

  maxGasPrice: TypedContractMethod<[], [bigint], 'view'>;

  maxLeverage: TypedContractMethod<[], [bigint], 'view'>;

  maxUsdgAmounts: TypedContractMethod<[_token: AddressLike], [bigint], 'view'>;

  minProfitBasisPoints: TypedContractMethod<
    [_token: AddressLike],
    [bigint],
    'view'
  >;

  minProfitTime: TypedContractMethod<[], [bigint], 'view'>;

  mintBurnFeeBasisPoints: TypedContractMethod<[], [bigint], 'view'>;

  poolAmounts: TypedContractMethod<[_token: AddressLike], [bigint], 'view'>;

  priceFeed: TypedContractMethod<[], [string], 'view'>;

  reservedAmounts: TypedContractMethod<[_token: AddressLike], [bigint], 'view'>;

  router: TypedContractMethod<[], [string], 'view'>;

  sellUSDG: TypedContractMethod<
    [_token: AddressLike, _receiver: AddressLike],
    [bigint],
    'nonpayable'
  >;

  setError: TypedContractMethod<
    [_errorCode: BigNumberish, _error: string],
    [void],
    'nonpayable'
  >;

  setFees: TypedContractMethod<
    [
      _taxBasisPoints: BigNumberish,
      _stableTaxBasisPoints: BigNumberish,
      _mintBurnFeeBasisPoints: BigNumberish,
      _swapFeeBasisPoints: BigNumberish,
      _stableSwapFeeBasisPoints: BigNumberish,
      _marginFeeBasisPoints: BigNumberish,
      _liquidationFeeUsd: BigNumberish,
      _minProfitTime: BigNumberish,
      _hasDynamicFees: boolean
    ],
    [void],
    'nonpayable'
  >;

  setInManagerMode: TypedContractMethod<
    [_inManagerMode: boolean],
    [void],
    'nonpayable'
  >;

  setIsLeverageEnabled: TypedContractMethod<
    [_isLeverageEnabled: boolean],
    [void],
    'nonpayable'
  >;

  setIsSwapEnabled: TypedContractMethod<
    [_isSwapEnabled: boolean],
    [void],
    'nonpayable'
  >;

  setManager: TypedContractMethod<
    [_manager: AddressLike, _isManager: boolean],
    [void],
    'nonpayable'
  >;

  setMaxGasPrice: TypedContractMethod<
    [_maxGasPrice: BigNumberish],
    [void],
    'nonpayable'
  >;

  setPriceFeed: TypedContractMethod<
    [_priceFeed: AddressLike],
    [void],
    'nonpayable'
  >;

  setTokenConfig: TypedContractMethod<
    [
      _token: AddressLike,
      _tokenDecimals: BigNumberish,
      _redemptionBps: BigNumberish,
      _minProfitBps: BigNumberish,
      _maxUsdgAmount: BigNumberish,
      _isStable: boolean,
      _isShortable: boolean
    ],
    [void],
    'nonpayable'
  >;

  shortableTokens: TypedContractMethod<
    [_token: AddressLike],
    [boolean],
    'view'
  >;

  stableFundingRateFactor: TypedContractMethod<[], [bigint], 'view'>;

  stableSwapFeeBasisPoints: TypedContractMethod<[], [bigint], 'view'>;

  stableTaxBasisPoints: TypedContractMethod<[], [bigint], 'view'>;

  stableTokens: TypedContractMethod<[_token: AddressLike], [boolean], 'view'>;

  swap: TypedContractMethod<
    [_tokenIn: AddressLike, _tokenOut: AddressLike, _receiver: AddressLike],
    [bigint],
    'nonpayable'
  >;

  swapFeeBasisPoints: TypedContractMethod<[], [bigint], 'view'>;

  taxBasisPoints: TypedContractMethod<[], [bigint], 'view'>;

  tokenBalances: TypedContractMethod<[_token: AddressLike], [bigint], 'view'>;

  tokenDecimals: TypedContractMethod<[_token: AddressLike], [bigint], 'view'>;

  tokenToUsdMin: TypedContractMethod<
    [_token: AddressLike, _tokenAmount: BigNumberish],
    [bigint],
    'view'
  >;

  tokenWeights: TypedContractMethod<[_token: AddressLike], [bigint], 'view'>;

  totalTokenWeights: TypedContractMethod<[], [bigint], 'view'>;

  usdg: TypedContractMethod<[], [string], 'view'>;

  usdgAmounts: TypedContractMethod<[_token: AddressLike], [bigint], 'view'>;

  whitelistedTokenCount: TypedContractMethod<[], [bigint], 'view'>;

  whitelistedTokens: TypedContractMethod<
    [_token: AddressLike],
    [boolean],
    'view'
  >;

  withdrawFees: TypedContractMethod<
    [_token: AddressLike, _receiver: AddressLike],
    [bigint],
    'nonpayable'
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: 'allWhitelistedTokens'
  ): TypedContractMethod<[arg0: BigNumberish], [string], 'view'>;
  getFunction(
    nameOrSignature: 'allWhitelistedTokensLength'
  ): TypedContractMethod<[], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'approvedRouters'
  ): TypedContractMethod<
    [_account: AddressLike, _router: AddressLike],
    [boolean],
    'view'
  >;
  getFunction(
    nameOrSignature: 'bufferAmounts'
  ): TypedContractMethod<[_token: AddressLike], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'buyUSDG'
  ): TypedContractMethod<
    [_token: AddressLike, _receiver: AddressLike],
    [bigint],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'cumulativeFundingRates'
  ): TypedContractMethod<[_token: AddressLike], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'decreasePosition'
  ): TypedContractMethod<
    [
      _account: AddressLike,
      _collateralToken: AddressLike,
      _indexToken: AddressLike,
      _collateralDelta: BigNumberish,
      _sizeDelta: BigNumberish,
      _isLong: boolean,
      _receiver: AddressLike
    ],
    [bigint],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'directPoolDeposit'
  ): TypedContractMethod<[_token: AddressLike], [void], 'nonpayable'>;
  getFunction(
    nameOrSignature: 'feeReserves'
  ): TypedContractMethod<[_token: AddressLike], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'fundingInterval'
  ): TypedContractMethod<[], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'fundingRateFactor'
  ): TypedContractMethod<[], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'getDelta'
  ): TypedContractMethod<
    [
      _indexToken: AddressLike,
      _size: BigNumberish,
      _averagePrice: BigNumberish,
      _isLong: boolean,
      _lastIncreasedTime: BigNumberish
    ],
    [[boolean, bigint]],
    'view'
  >;
  getFunction(
    nameOrSignature: 'getFeeBasisPoints'
  ): TypedContractMethod<
    [
      _token: AddressLike,
      _usdgDelta: BigNumberish,
      _feeBasisPoints: BigNumberish,
      _taxBasisPoints: BigNumberish,
      _increment: boolean
    ],
    [bigint],
    'view'
  >;
  getFunction(
    nameOrSignature: 'getMaxPrice'
  ): TypedContractMethod<[_token: AddressLike], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'getMinPrice'
  ): TypedContractMethod<[_token: AddressLike], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'getNextFundingRate'
  ): TypedContractMethod<[_token: AddressLike], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'getPosition'
  ): TypedContractMethod<
    [
      _account: AddressLike,
      _collateralToken: AddressLike,
      _indexToken: AddressLike,
      _isLong: boolean
    ],
    [[bigint, bigint, bigint, bigint, bigint, bigint, boolean, bigint]],
    'view'
  >;
  getFunction(
    nameOrSignature: 'getRedemptionAmount'
  ): TypedContractMethod<
    [_token: AddressLike, _usdgAmount: BigNumberish],
    [bigint],
    'view'
  >;
  getFunction(
    nameOrSignature: 'globalShortAveragePrices'
  ): TypedContractMethod<[_token: AddressLike], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'globalShortSizes'
  ): TypedContractMethod<[_token: AddressLike], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'gov'
  ): TypedContractMethod<[], [string], 'view'>;
  getFunction(
    nameOrSignature: 'guaranteedUsd'
  ): TypedContractMethod<[_token: AddressLike], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'hasDynamicFees'
  ): TypedContractMethod<[], [boolean], 'view'>;
  getFunction(
    nameOrSignature: 'inManagerMode'
  ): TypedContractMethod<[], [boolean], 'view'>;
  getFunction(
    nameOrSignature: 'inPrivateLiquidationMode'
  ): TypedContractMethod<[], [boolean], 'view'>;
  getFunction(
    nameOrSignature: 'increasePosition'
  ): TypedContractMethod<
    [
      _account: AddressLike,
      _collateralToken: AddressLike,
      _indexToken: AddressLike,
      _sizeDelta: BigNumberish,
      _isLong: boolean
    ],
    [void],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'isInitialized'
  ): TypedContractMethod<[], [boolean], 'view'>;
  getFunction(
    nameOrSignature: 'isLeverageEnabled'
  ): TypedContractMethod<[], [boolean], 'view'>;
  getFunction(
    nameOrSignature: 'isLiquidator'
  ): TypedContractMethod<[_account: AddressLike], [boolean], 'view'>;
  getFunction(
    nameOrSignature: 'isManager'
  ): TypedContractMethod<[_account: AddressLike], [boolean], 'view'>;
  getFunction(
    nameOrSignature: 'isSwapEnabled'
  ): TypedContractMethod<[], [boolean], 'view'>;
  getFunction(
    nameOrSignature: 'lastFundingTimes'
  ): TypedContractMethod<[_token: AddressLike], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'liquidationFeeUsd'
  ): TypedContractMethod<[], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'marginFeeBasisPoints'
  ): TypedContractMethod<[], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'maxGasPrice'
  ): TypedContractMethod<[], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'maxLeverage'
  ): TypedContractMethod<[], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'maxUsdgAmounts'
  ): TypedContractMethod<[_token: AddressLike], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'minProfitBasisPoints'
  ): TypedContractMethod<[_token: AddressLike], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'minProfitTime'
  ): TypedContractMethod<[], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'mintBurnFeeBasisPoints'
  ): TypedContractMethod<[], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'poolAmounts'
  ): TypedContractMethod<[_token: AddressLike], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'priceFeed'
  ): TypedContractMethod<[], [string], 'view'>;
  getFunction(
    nameOrSignature: 'reservedAmounts'
  ): TypedContractMethod<[_token: AddressLike], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'router'
  ): TypedContractMethod<[], [string], 'view'>;
  getFunction(
    nameOrSignature: 'sellUSDG'
  ): TypedContractMethod<
    [_token: AddressLike, _receiver: AddressLike],
    [bigint],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'setError'
  ): TypedContractMethod<
    [_errorCode: BigNumberish, _error: string],
    [void],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'setFees'
  ): TypedContractMethod<
    [
      _taxBasisPoints: BigNumberish,
      _stableTaxBasisPoints: BigNumberish,
      _mintBurnFeeBasisPoints: BigNumberish,
      _swapFeeBasisPoints: BigNumberish,
      _stableSwapFeeBasisPoints: BigNumberish,
      _marginFeeBasisPoints: BigNumberish,
      _liquidationFeeUsd: BigNumberish,
      _minProfitTime: BigNumberish,
      _hasDynamicFees: boolean
    ],
    [void],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'setInManagerMode'
  ): TypedContractMethod<[_inManagerMode: boolean], [void], 'nonpayable'>;
  getFunction(
    nameOrSignature: 'setIsLeverageEnabled'
  ): TypedContractMethod<[_isLeverageEnabled: boolean], [void], 'nonpayable'>;
  getFunction(
    nameOrSignature: 'setIsSwapEnabled'
  ): TypedContractMethod<[_isSwapEnabled: boolean], [void], 'nonpayable'>;
  getFunction(
    nameOrSignature: 'setManager'
  ): TypedContractMethod<
    [_manager: AddressLike, _isManager: boolean],
    [void],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'setMaxGasPrice'
  ): TypedContractMethod<[_maxGasPrice: BigNumberish], [void], 'nonpayable'>;
  getFunction(
    nameOrSignature: 'setPriceFeed'
  ): TypedContractMethod<[_priceFeed: AddressLike], [void], 'nonpayable'>;
  getFunction(
    nameOrSignature: 'setTokenConfig'
  ): TypedContractMethod<
    [
      _token: AddressLike,
      _tokenDecimals: BigNumberish,
      _redemptionBps: BigNumberish,
      _minProfitBps: BigNumberish,
      _maxUsdgAmount: BigNumberish,
      _isStable: boolean,
      _isShortable: boolean
    ],
    [void],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'shortableTokens'
  ): TypedContractMethod<[_token: AddressLike], [boolean], 'view'>;
  getFunction(
    nameOrSignature: 'stableFundingRateFactor'
  ): TypedContractMethod<[], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'stableSwapFeeBasisPoints'
  ): TypedContractMethod<[], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'stableTaxBasisPoints'
  ): TypedContractMethod<[], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'stableTokens'
  ): TypedContractMethod<[_token: AddressLike], [boolean], 'view'>;
  getFunction(
    nameOrSignature: 'swap'
  ): TypedContractMethod<
    [_tokenIn: AddressLike, _tokenOut: AddressLike, _receiver: AddressLike],
    [bigint],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'swapFeeBasisPoints'
  ): TypedContractMethod<[], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'taxBasisPoints'
  ): TypedContractMethod<[], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'tokenBalances'
  ): TypedContractMethod<[_token: AddressLike], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'tokenDecimals'
  ): TypedContractMethod<[_token: AddressLike], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'tokenToUsdMin'
  ): TypedContractMethod<
    [_token: AddressLike, _tokenAmount: BigNumberish],
    [bigint],
    'view'
  >;
  getFunction(
    nameOrSignature: 'tokenWeights'
  ): TypedContractMethod<[_token: AddressLike], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'totalTokenWeights'
  ): TypedContractMethod<[], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'usdg'
  ): TypedContractMethod<[], [string], 'view'>;
  getFunction(
    nameOrSignature: 'usdgAmounts'
  ): TypedContractMethod<[_token: AddressLike], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'whitelistedTokenCount'
  ): TypedContractMethod<[], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'whitelistedTokens'
  ): TypedContractMethod<[_token: AddressLike], [boolean], 'view'>;
  getFunction(
    nameOrSignature: 'withdrawFees'
  ): TypedContractMethod<
    [_token: AddressLike, _receiver: AddressLike],
    [bigint],
    'nonpayable'
  >;

  filters: {};
}
