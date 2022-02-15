/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import { Provider } from '@ethersproject/providers';
import type {
  ClearingHouseView,
  ClearingHouseViewInterface,
} from '../ClearingHouseView';

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
        internalType: 'uint32',
        name: 'period',
        type: 'uint32',
      },
    ],
    name: 'IllegalTwapDuration',
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
    name: 'SlippageBeyondTolerance',
    type: 'error',
  },
  {
    inputs: [],
    name: 'Unauthorised',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: 'vTokenTruncatedAddress',
        type: 'uint32',
      },
    ],
    name: 'UninitializedToken',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'rTokenAddress',
        type: 'address',
      },
    ],
    name: 'UnsupportedRToken',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'contract IVToken',
        name: 'vToken',
        type: 'address',
      },
    ],
    name: 'UnsupportedVToken',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ZeroAddress',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousGovernance',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newGovernance',
        type: 'address',
      },
    ],
    name: 'GovernanceTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousTeamMultisig',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newTeamMultisig',
        type: 'address',
      },
    ],
    name: 'TeamMultisigTransferred',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_rageTradeFactoryAddress',
        type: 'address',
      },
      {
        internalType: 'contract IERC20',
        name: '_rBase',
        type: 'address',
      },
      {
        internalType: 'contract IInsuranceFund',
        name: '_insuranceFund',
        type: 'address',
      },
      {
        internalType: 'contract IVBase',
        name: '_vBase',
        type: 'address',
      },
      {
        internalType: 'contract IOracle',
        name: '_nativeOracle',
        type: 'address',
      },
    ],
    name: '__ClearingHouse_init',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'accountNo',
        type: 'uint256',
      },
      {
        internalType: 'uint32',
        name: 'vTokenTruncatedAddress',
        type: 'uint32',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'addMargin',
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
        name: 'accountNo',
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
        name: 'accountMarketValue',
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
        name: 'accountNo',
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
        name: 'accountNo',
        type: 'uint256',
      },
    ],
    name: 'getAccountView',
    outputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'int256',
        name: 'vBaseBalance',
        type: 'int256',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'rTokenAddress',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'balance',
            type: 'uint256',
          },
        ],
        internalType: 'struct IClearingHouse.DepositTokenView[]',
        name: 'tokenDeposits',
        type: 'tuple[]',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'vTokenAddress',
            type: 'address',
          },
          {
            internalType: 'int256',
            name: 'balance',
            type: 'int256',
          },
          {
            internalType: 'int256',
            name: 'netTraderPosition',
            type: 'int256',
          },
          {
            internalType: 'int256',
            name: 'sumAX128Ckpt',
            type: 'int256',
          },
          {
            components: [
              {
                internalType: 'enum IClearingHouse.LimitOrderType',
                name: 'limitOrderType',
                type: 'uint8',
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
              {
                internalType: 'uint128',
                name: 'liquidity',
                type: 'uint128',
              },
              {
                internalType: 'int256',
                name: 'vTokenAmountIn',
                type: 'int256',
              },
              {
                internalType: 'int256',
                name: 'sumALastX128',
                type: 'int256',
              },
              {
                internalType: 'int256',
                name: 'sumBInsideLastX128',
                type: 'int256',
              },
              {
                internalType: 'int256',
                name: 'sumFpInsideLastX128',
                type: 'int256',
              },
              {
                internalType: 'uint256',
                name: 'sumFeeInsideLastX128',
                type: 'uint256',
              },
            ],
            internalType: 'struct IClearingHouse.LiquidityPositionView[]',
            name: 'liquidityPositions',
            type: 'tuple[]',
          },
        ],
        internalType: 'struct IClearingHouse.VTokenPositionView[]',
        name: 'tokenPositions',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IVToken',
        name: 'vToken',
        type: 'address',
      },
    ],
    name: 'getTwapSqrtPricesForSetDuration',
    outputs: [
      {
        internalType: 'uint256',
        name: 'realPriceX128',
        type: 'uint256',
      },
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
        internalType: 'uint32',
        name: 'truncated',
        type: 'uint32',
      },
    ],
    name: 'isVTokenAddressAvailable',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'accountNo',
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
        name: 'accountNo',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'gasComputationUnitsClaim',
        type: 'uint256',
      },
    ],
    name: 'liquidateLiquidityPositionsWithGasClaim',
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
    inputs: [
      {
        internalType: 'uint256',
        name: 'liquidatorAccountNo',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'accountNo',
        type: 'uint256',
      },
      {
        internalType: 'uint32',
        name: 'vTokenTruncatedAddress',
        type: 'uint32',
      },
      {
        internalType: 'uint16',
        name: 'liquidationBps',
        type: 'uint16',
      },
    ],
    name: 'liquidateTokenPosition',
    outputs: [
      {
        components: [
          {
            internalType: 'int256',
            name: 'vBaseIncrease',
            type: 'int256',
          },
          {
            internalType: 'int256',
            name: 'vTokenIncrease',
            type: 'int256',
          },
          {
            internalType: 'int256',
            name: 'traderPositionIncrease',
            type: 'int256',
          },
        ],
        internalType: 'struct IClearingHouse.BalanceAdjustments',
        name: 'liquidatorBalanceAdjustments',
        type: 'tuple',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'liquidatorAccountNo',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'accountNo',
        type: 'uint256',
      },
      {
        internalType: 'uint32',
        name: 'vTokenTruncatedAddress',
        type: 'uint32',
      },
      {
        internalType: 'uint16',
        name: 'liquidationBps',
        type: 'uint16',
      },
      {
        internalType: 'uint256',
        name: 'gasComputationUnitsClaim',
        type: 'uint256',
      },
    ],
    name: 'liquidateTokenPositionWithGasClaim',
    outputs: [
      {
        components: [
          {
            internalType: 'int256',
            name: 'vBaseIncrease',
            type: 'int256',
          },
          {
            internalType: 'int256',
            name: 'vTokenIncrease',
            type: 'int256',
          },
          {
            internalType: 'int256',
            name: 'traderPositionIncrease',
            type: 'int256',
          },
        ],
        internalType: 'struct IClearingHouse.BalanceAdjustments',
        name: 'liquidatorBalanceAdjustments',
        type: 'tuple',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'nativeOracle',
    outputs: [
      {
        internalType: 'contract IOracle',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
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
    name: 'paused',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IVToken',
        name: 'vToken',
        type: 'address',
      },
    ],
    name: 'pools',
    outputs: [
      {
        components: [
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
                name: 'initialMarginRatio',
                type: 'uint16',
              },
              {
                internalType: 'uint16',
                name: 'maintainanceMarginRatio',
                type: 'uint16',
              },
              {
                internalType: 'uint32',
                name: 'twapDuration',
                type: 'uint32',
              },
              {
                internalType: 'bool',
                name: 'whitelisted',
                type: 'bool',
              },
              {
                internalType: 'contract IOracle',
                name: 'oracle',
                type: 'address',
              },
            ],
            internalType: 'struct IClearingHouse.RageTradePoolSettings',
            name: 'settings',
            type: 'tuple',
          },
        ],
        internalType: 'struct IClearingHouse.RageTradePool',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'protocolInfo',
    outputs: [
      {
        internalType: 'contract IVBase',
        name: 'vBase',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'uint16',
            name: 'liquidationFeeFraction',
            type: 'uint16',
          },
          {
            internalType: 'uint16',
            name: 'tokenLiquidationPriceDeltaBps',
            type: 'uint16',
          },
          {
            internalType: 'uint16',
            name: 'insuranceFundFeeShareBps',
            type: 'uint16',
          },
        ],
        internalType: 'struct Account.LiquidationParams',
        name: 'liquidationParams',
        type: 'tuple',
      },
      {
        internalType: 'uint256',
        name: 'minRequiredMargin',
        type: 'uint256',
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
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'rBase',
    outputs: [
      {
        internalType: 'contract IERC20',
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
        internalType: 'uint32',
        name: 'rTokenId',
        type: 'uint32',
      },
    ],
    name: 'rTokens',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'tokenAddress',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'oracleAddress',
            type: 'address',
          },
          {
            internalType: 'uint32',
            name: 'oracleTimeHorizon',
            type: 'uint32',
          },
        ],
        internalType: 'struct RTokenLib.RToken',
        name: '',
        type: 'tuple',
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
        internalType: 'address',
        name: 'full',
        type: 'address',
      },
      {
        components: [
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
                name: 'initialMarginRatio',
                type: 'uint16',
              },
              {
                internalType: 'uint16',
                name: 'maintainanceMarginRatio',
                type: 'uint16',
              },
              {
                internalType: 'uint32',
                name: 'twapDuration',
                type: 'uint32',
              },
              {
                internalType: 'bool',
                name: 'whitelisted',
                type: 'bool',
              },
              {
                internalType: 'contract IOracle',
                name: 'oracle',
                type: 'address',
              },
            ],
            internalType: 'struct IClearingHouse.RageTradePoolSettings',
            name: 'settings',
            type: 'tuple',
          },
        ],
        internalType: 'struct IClearingHouse.RageTradePool',
        name: 'rageTradePool',
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
        name: 'accountNo',
        type: 'uint256',
      },
      {
        internalType: 'uint32',
        name: 'vTokenTruncatedAddress',
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
        name: 'accountNo',
        type: 'uint256',
      },
      {
        internalType: 'uint32',
        name: 'vTokenTruncatedAddress',
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
      {
        internalType: 'uint256',
        name: 'gasComputationUnitsClaim',
        type: 'uint256',
      },
    ],
    name: 'removeLimitOrderWithGasClaim',
    outputs: [
      {
        internalType: 'uint256',
        name: 'keeperFee',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'accountNo',
        type: 'uint256',
      },
      {
        internalType: 'uint32',
        name: 'vTokenTruncatedAddress',
        type: 'uint32',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'removeMargin',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'supportedDeposits',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IVToken',
        name: '',
        type: 'address',
      },
    ],
    name: 'supportedVTokens',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'accountNo',
        type: 'uint256',
      },
      {
        internalType: 'uint32',
        name: 'vTokenTruncatedAddress',
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
        ],
        internalType: 'struct IClearingHouse.SwapParams',
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
        name: 'vBaseAmountOut',
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
    inputs: [
      {
        internalType: 'address',
        name: 'newGovernance',
        type: 'address',
      },
    ],
    name: 'transferGovernance',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newTeamMultisig',
        type: 'address',
      },
    ],
    name: 'transferTeamMultisig',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'accountNo',
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
        internalType: 'uint256',
        name: 'accountNo',
        type: 'uint256',
      },
      {
        internalType: 'uint32',
        name: 'vTokenTruncatedAddress',
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
            internalType: 'enum IClearingHouse.LimitOrderType',
            name: 'limitOrderType',
            type: 'uint8',
          },
        ],
        internalType: 'struct IClearingHouse.LiquidityChangeParams',
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
        name: 'vBaseAmountOut',
        type: 'int256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: 'vTokenAddressTruncated',
        type: 'uint32',
      },
    ],
    name: 'vTokens',
    outputs: [
      {
        internalType: 'contract IVToken',
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
        internalType: 'address[]',
        name: 'wrapperAddresses',
        type: 'address[]',
      },
    ],
    name: 'withdrawProtocolFee',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

export class ClearingHouseView__factory {
  static readonly abi = _abi;
  static createInterface(): ClearingHouseViewInterface {
    return new utils.Interface(_abi) as ClearingHouseViewInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ClearingHouseView {
    return new Contract(address, _abi, signerOrProvider) as ClearingHouseView;
  }
}
