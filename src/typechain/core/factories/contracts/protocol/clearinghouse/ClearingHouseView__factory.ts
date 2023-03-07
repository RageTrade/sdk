/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, ContractRunner } from 'ethers';
import type {
  ClearingHouseView,
  ClearingHouseViewInterface,
} from '../../../../contracts/protocol/clearinghouse/ClearingHouseView';

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'senderAddress',
        type: 'address',
      },
    ],
    name: 'AccessDenied',
    type: 'error',
  },
  {
    inputs: [],
    name: 'CannotPauseIfUnpauseInProgress',
    type: 'error',
  },
  {
    inputs: [],
    name: 'CannotUnpauseIfPauseInProgress',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: 'collateralId',
        type: 'uint32',
      },
    ],
    name: 'CollateralDoesNotExist',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: 'collateralId',
        type: 'uint32',
      },
    ],
    name: 'CollateralNotAllowedForUse',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint160',
        name: 'sqrtPriceX96',
        type: 'uint160',
      },
    ],
    name: 'IllegalSqrtPrice',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'contract IERC20',
        name: 'incorrectAddress',
        type: 'address',
      },
      {
        internalType: 'contract IERC20',
        name: 'correctAddress',
        type: 'address',
      },
    ],
    name: 'IncorrectCollateralAddress',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'invalidAddress',
        type: 'address',
      },
    ],
    name: 'InvalidCollateralAddress',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'enum IClearingHouseEnums.MulticallOperationType',
        name: 'multicallOperationType',
        type: 'uint8',
      },
    ],
    name: 'InvalidMulticallOperationType',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'errorCode',
        type: 'uint256',
      },
    ],
    name: 'InvalidSetting',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidTokenLiquidationParameters',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'int256',
        name: 'keeperFee',
        type: 'int256',
      },
    ],
    name: 'KeeperFeeNotPositive',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'notionalValue',
        type: 'uint256',
      },
    ],
    name: 'LowNotionalValue',
    type: 'error',
  },
  {
    inputs: [],
    name: 'NotRageTradeFactory',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: 'poolId',
        type: 'uint32',
      },
    ],
    name: 'PoolDoesNotExist',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: 'poolId',
        type: 'uint32',
      },
    ],
    name: 'PoolNotAllowedForTrade',
    type: 'error',
  },
  {
    inputs: [],
    name: 'SlippageBeyondTolerance',
    type: 'error',
  },
  {
    inputs: [],
    name: 'T',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ZeroAmount',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'ownerAddress',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'accountId',
        type: 'uint256',
      },
    ],
    name: 'AccountCreated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'contract IERC20',
        name: 'cToken',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'contract IOracle',
            name: 'oracle',
            type: 'address',
          },
          {
            internalType: 'uint32',
            name: 'twapDuration',
            type: 'uint32',
          },
          {
            internalType: 'bool',
            name: 'isAllowedForDeposit',
            type: 'bool',
          },
        ],
        indexed: false,
        internalType: 'struct IClearingHouseStructures.CollateralSettings',
        name: 'cTokenInfo',
        type: 'tuple',
      },
    ],
    name: 'CollateralSettingsUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bool',
        name: 'paused',
        type: 'bool',
      },
    ],
    name: 'PausedUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint32',
        name: 'poolId',
        type: 'uint32',
      },
      {
        components: [
          {
            internalType: 'uint16',
            name: 'initialMarginRatioBps',
            type: 'uint16',
          },
          {
            internalType: 'uint16',
            name: 'maintainanceMarginRatioBps',
            type: 'uint16',
          },
          {
            internalType: 'uint16',
            name: 'maxVirtualPriceDeviationRatioBps',
            type: 'uint16',
          },
          {
            internalType: 'uint32',
            name: 'twapDuration',
            type: 'uint32',
          },
          {
            internalType: 'bool',
            name: 'isAllowedForTrade',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'isCrossMargined',
            type: 'bool',
          },
          {
            internalType: 'contract IOracle',
            name: 'oracle',
            type: 'address',
          },
        ],
        indexed: false,
        internalType: 'struct IClearingHouseStructures.PoolSettings',
        name: 'settings',
        type: 'tuple',
      },
    ],
    name: 'PoolSettingsUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: 'uint16',
            name: 'rangeLiquidationFeeFraction',
            type: 'uint16',
          },
          {
            internalType: 'uint16',
            name: 'tokenLiquidationFeeFraction',
            type: 'uint16',
          },
          {
            internalType: 'uint16',
            name: 'closeFactorMMThresholdBps',
            type: 'uint16',
          },
          {
            internalType: 'uint16',
            name: 'partialLiquidationCloseFactorBps',
            type: 'uint16',
          },
          {
            internalType: 'uint16',
            name: 'insuranceFundFeeShareBps',
            type: 'uint16',
          },
          {
            internalType: 'uint16',
            name: 'liquidationSlippageSqrtToleranceBps',
            type: 'uint16',
          },
          {
            internalType: 'uint64',
            name: 'maxRangeLiquidationFees',
            type: 'uint64',
          },
          {
            internalType: 'uint64',
            name: 'minNotionalLiquidatable',
            type: 'uint64',
          },
        ],
        indexed: false,
        internalType: 'struct IClearingHouseStructures.LiquidationParams',
        name: 'liquidationParams',
        type: 'tuple',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'removeLimitOrderFee',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'minimumOrderNotional',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'minRequiredMargin',
        type: 'uint256',
      },
    ],
    name: 'ProtocolSettingsUpdated',
    type: 'event',
  },
  {
    inputs: [],
    name: 'acceptGovernanceTransfer',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'acceptTeamMultisigTransfer',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'createAccount',
    outputs: [
      {
        internalType: 'uint256',
        name: 'newAccountId',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: 'collateralId',
        type: 'uint32',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'createAccountAndAddMargin',
    outputs: [
      {
        internalType: 'uint256',
        name: 'newAccountId',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'slot',
        type: 'bytes32',
      },
    ],
    name: 'extsload',
    outputs: [
      {
        internalType: 'bytes32',
        name: 'val',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32[]',
        name: 'slots',
        type: 'bytes32[]',
      },
    ],
    name: 'extsload',
    outputs: [
      {
        internalType: 'bytes32[]',
        name: '',
        type: 'bytes32[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'accountId',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: 'isInitialMargin',
        type: 'bool',
      },
    ],
    name: 'getAccountMarketValueAndRequiredMargin',
    outputs: [
      {
        internalType: 'int256',
        name: 'marketValue',
        type: 'int256',
      },
      {
        internalType: 'int256',
        name: 'requiredMargin',
        type: 'int256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'accountId',
        type: 'uint256',
      },
    ],
    name: 'getAccountNetProfit',
    outputs: [
      {
        internalType: 'int256',
        name: 'accountNetProfit',
        type: 'int256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'accountId',
        type: 'uint256',
      },
      {
        internalType: 'uint32',
        name: 'poolId',
        type: 'uint32',
      },
    ],
    name: 'getAccountNetTokenPosition',
    outputs: [
      {
        internalType: 'int256',
        name: 'netPosition',
        type: 'int256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: 'poolId',
        type: 'uint32',
      },
    ],
    name: 'getRealTwapPriceX128',
    outputs: [
      {
        internalType: 'uint256',
        name: 'realPriceX128',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: 'poolId',
        type: 'uint32',
      },
    ],
    name: 'getVirtualTwapPriceX128',
    outputs: [
      {
        internalType: 'uint256',
        name: 'virtualPriceX128',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'governance',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'governancePending',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'rageTradeFactoryAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'initialGovernance',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'initialTeamMultisig',
        type: 'address',
      },
      {
        internalType: 'contract IERC20',
        name: 'defaultCollateralToken',
        type: 'address',
      },
      {
        internalType: 'contract IOracle',
        name: 'defaultCollateralTokenOracle',
        type: 'address',
      },
      {
        internalType: 'contract IInsuranceFund',
        name: 'insuranceFund',
        type: 'address',
      },
      {
        internalType: 'contract IVQuote',
        name: 'vQuote',
        type: 'address',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newGovernancePending',
        type: 'address',
      },
    ],
    name: 'initiateGovernanceTransfer',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newTeamMultisigPending',
        type: 'address',
      },
    ],
    name: 'initiateTeamMultisigTransfer',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'insuranceFund',
    outputs: [
      {
        internalType: 'contract IInsuranceFund',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'accountId',
        type: 'uint256',
      },
    ],
    name: 'liquidateLiquidityPositions',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'targetAccountId',
        type: 'uint256',
      },
      {
        internalType: 'uint32',
        name: 'poolId',
        type: 'uint32',
      },
    ],
    name: 'liquidateTokenPosition',
    outputs: [
      {
        internalType: 'int256',
        name: 'keeperFee',
        type: 'int256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'numAccounts',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'rageTradeFactoryAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'contract IVToken',
            name: 'vToken',
            type: 'address',
          },
          {
            internalType: 'contract IUniswapV3Pool',
            name: 'vPool',
            type: 'address',
          },
          {
            internalType: 'contract IVPoolWrapper',
            name: 'vPoolWrapper',
            type: 'address',
          },
          {
            components: [
              {
                internalType: 'uint16',
                name: 'initialMarginRatioBps',
                type: 'uint16',
              },
              {
                internalType: 'uint16',
                name: 'maintainanceMarginRatioBps',
                type: 'uint16',
              },
              {
                internalType: 'uint16',
                name: 'maxVirtualPriceDeviationRatioBps',
                type: 'uint16',
              },
              {
                internalType: 'uint32',
                name: 'twapDuration',
                type: 'uint32',
              },
              {
                internalType: 'bool',
                name: 'isAllowedForTrade',
                type: 'bool',
              },
              {
                internalType: 'bool',
                name: 'isCrossMargined',
                type: 'bool',
              },
              {
                internalType: 'contract IOracle',
                name: 'oracle',
                type: 'address',
              },
            ],
            internalType: 'struct IClearingHouseStructures.PoolSettings',
            name: 'settings',
            type: 'tuple',
          },
        ],
        internalType: 'struct IClearingHouseStructures.Pool',
        name: 'poolInfo',
        type: 'tuple',
      },
    ],
    name: 'registerPool',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'accountId',
        type: 'uint256',
      },
      {
        internalType: 'uint32',
        name: 'poolId',
        type: 'uint32',
      },
      {
        internalType: 'int24',
        name: 'tickLower',
        type: 'int24',
      },
      {
        internalType: 'int24',
        name: 'tickUpper',
        type: 'int24',
      },
    ],
    name: 'removeLimitOrder',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'accountId',
        type: 'uint256',
      },
    ],
    name: 'settleProfit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'accountId',
        type: 'uint256',
      },
      {
        internalType: 'uint32',
        name: 'poolId',
        type: 'uint32',
      },
      {
        components: [
          {
            internalType: 'int256',
            name: 'amount',
            type: 'int256',
          },
          {
            internalType: 'uint160',
            name: 'sqrtPriceLimit',
            type: 'uint160',
          },
          {
            internalType: 'bool',
            name: 'isNotional',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'isPartialAllowed',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'settleProfit',
            type: 'bool',
          },
        ],
        internalType: 'struct IClearingHouseStructures.SwapParams',
        name: 'swapParams',
        type: 'tuple',
      },
    ],
    name: 'swapToken',
    outputs: [
      {
        internalType: 'int256',
        name: 'vTokenAmountOut',
        type: 'int256',
      },
      {
        internalType: 'int256',
        name: 'vQuoteAmountOut',
        type: 'int256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'teamMultisig',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'teamMultisigPending',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IERC20',
        name: 'cToken',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'contract IOracle',
            name: 'oracle',
            type: 'address',
          },
          {
            internalType: 'uint32',
            name: 'twapDuration',
            type: 'uint32',
          },
          {
            internalType: 'bool',
            name: 'isAllowedForDeposit',
            type: 'bool',
          },
        ],
        internalType: 'struct IClearingHouseStructures.CollateralSettings',
        name: 'collateralSettings',
        type: 'tuple',
      },
    ],
    name: 'updateCollateralSettings',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'accountId',
        type: 'uint256',
      },
      {
        internalType: 'uint32',
        name: 'collateralId',
        type: 'uint32',
      },
      {
        internalType: 'int256',
        name: 'amount',
        type: 'int256',
      },
    ],
    name: 'updateMargin',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: 'poolId',
        type: 'uint32',
      },
      {
        components: [
          {
            internalType: 'uint16',
            name: 'initialMarginRatioBps',
            type: 'uint16',
          },
          {
            internalType: 'uint16',
            name: 'maintainanceMarginRatioBps',
            type: 'uint16',
          },
          {
            internalType: 'uint16',
            name: 'maxVirtualPriceDeviationRatioBps',
            type: 'uint16',
          },
          {
            internalType: 'uint32',
            name: 'twapDuration',
            type: 'uint32',
          },
          {
            internalType: 'bool',
            name: 'isAllowedForTrade',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'isCrossMargined',
            type: 'bool',
          },
          {
            internalType: 'contract IOracle',
            name: 'oracle',
            type: 'address',
          },
        ],
        internalType: 'struct IClearingHouseStructures.PoolSettings',
        name: 'newSettings',
        type: 'tuple',
      },
    ],
    name: 'updatePoolSettings',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'accountId',
        type: 'uint256',
      },
      {
        internalType: 'int256',
        name: 'amount',
        type: 'int256',
      },
    ],
    name: 'updateProfit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'uint16',
            name: 'rangeLiquidationFeeFraction',
            type: 'uint16',
          },
          {
            internalType: 'uint16',
            name: 'tokenLiquidationFeeFraction',
            type: 'uint16',
          },
          {
            internalType: 'uint16',
            name: 'closeFactorMMThresholdBps',
            type: 'uint16',
          },
          {
            internalType: 'uint16',
            name: 'partialLiquidationCloseFactorBps',
            type: 'uint16',
          },
          {
            internalType: 'uint16',
            name: 'insuranceFundFeeShareBps',
            type: 'uint16',
          },
          {
            internalType: 'uint16',
            name: 'liquidationSlippageSqrtToleranceBps',
            type: 'uint16',
          },
          {
            internalType: 'uint64',
            name: 'maxRangeLiquidationFees',
            type: 'uint64',
          },
          {
            internalType: 'uint64',
            name: 'minNotionalLiquidatable',
            type: 'uint64',
          },
        ],
        internalType: 'struct IClearingHouseStructures.LiquidationParams',
        name: 'liquidationParams',
        type: 'tuple',
      },
      {
        internalType: 'uint256',
        name: 'removeLimitOrderFee',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'minimumOrderNotional',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'minRequiredMargin',
        type: 'uint256',
      },
    ],
    name: 'updateProtocolSettings',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'accountId',
        type: 'uint256',
      },
      {
        internalType: 'uint32',
        name: 'poolId',
        type: 'uint32',
      },
      {
        components: [
          {
            internalType: 'int24',
            name: 'tickLower',
            type: 'int24',
          },
          {
            internalType: 'int24',
            name: 'tickUpper',
            type: 'int24',
          },
          {
            internalType: 'int128',
            name: 'liquidityDelta',
            type: 'int128',
          },
          {
            internalType: 'uint160',
            name: 'sqrtPriceCurrent',
            type: 'uint160',
          },
          {
            internalType: 'uint16',
            name: 'slippageToleranceBps',
            type: 'uint16',
          },
          {
            internalType: 'bool',
            name: 'closeTokenPosition',
            type: 'bool',
          },
          {
            internalType: 'enum IClearingHouseEnums.LimitOrderType',
            name: 'limitOrderType',
            type: 'uint8',
          },
          {
            internalType: 'bool',
            name: 'settleProfit',
            type: 'bool',
          },
        ],
        internalType: 'struct IClearingHouseStructures.LiquidityChangeParams',
        name: 'liquidityChangeParams',
        type: 'tuple',
      },
    ],
    name: 'updateRangeOrder',
    outputs: [
      {
        internalType: 'int256',
        name: 'vTokenAmountOut',
        type: 'int256',
      },
      {
        internalType: 'int256',
        name: 'vQuoteAmountOut',
        type: 'int256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'numberOfPoolsToUpdateInThisTx',
        type: 'uint256',
      },
    ],
    name: 'withdrawProtocolFee',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const;

export class ClearingHouseView__factory {
  static readonly abi = _abi;
  static createInterface(): ClearingHouseViewInterface {
    return new Interface(_abi) as ClearingHouseViewInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ClearingHouseView {
    return new Contract(address, _abi, runner) as unknown as ClearingHouseView;
  }
}
