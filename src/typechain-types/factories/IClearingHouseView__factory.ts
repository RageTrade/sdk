/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import { Provider } from '@ethersproject/providers';
import type {
  IClearingHouseView,
  IClearingHouseViewInterface,
} from '../IClearingHouseView';

const _abi = [
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'accountId',
        type: 'uint256',
      },
    ],
    name: 'getAccountInfo',
    outputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'int256',
        name: 'vQuoteBalance',
        type: 'int256',
      },
      {
        components: [
          {
            internalType: 'contract IERC20',
            name: 'collateral',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'balance',
            type: 'uint256',
          },
        ],
        internalType: 'struct IClearingHouseStructures.CollateralDepositView[]',
        name: 'collateralDeposits',
        type: 'tuple[]',
      },
      {
        components: [
          {
            internalType: 'contract IVToken',
            name: 'vToken',
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
            name: 'sumAX128Chkpt',
            type: 'int256',
          },
          {
            components: [
              {
                internalType: 'enum IClearingHouseEnums.LimitOrderType',
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
            internalType:
              'struct IClearingHouseStructures.LiquidityPositionView[]',
            name: 'liquidityPositions',
            type: 'tuple[]',
          },
        ],
        internalType: 'struct IClearingHouseStructures.VTokenPositionView[]',
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
        internalType: 'uint32',
        name: 'collateralId',
        type: 'uint32',
      },
    ],
    name: 'getCollateralInfo',
    outputs: [
      {
        components: [
          {
            internalType: 'contract IERC20',
            name: 'token',
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
            name: 'settings',
            type: 'tuple',
          },
        ],
        internalType: 'struct IClearingHouseStructures.Collateral',
        name: '',
        type: 'tuple',
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
        name: 'vTokenTruncatedAddess',
        type: 'uint32',
      },
    ],
    name: 'getNetTokenPosition',
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
    name: 'getPoolInfo',
    outputs: [
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
        name: '',
        type: 'tuple',
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
    name: 'getTwapPrices',
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
    inputs: [
      {
        internalType: 'uint32',
        name: 'truncated',
        type: 'uint32',
      },
    ],
    name: 'isPoolIdAvailable',
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
    inputs: [],
    name: 'protocolInfo',
    outputs: [
      {
        internalType: 'contract IVQuote',
        name: 'vQuote',
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
          {
            internalType: 'uint128',
            name: 'maxRangeLiquidationFees',
            type: 'uint128',
          },
        ],
        internalType: 'struct IClearingHouseStructures.LiquidationParams',
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
];

export class IClearingHouseView__factory {
  static readonly abi = _abi;
  static createInterface(): IClearingHouseViewInterface {
    return new utils.Interface(_abi) as IClearingHouseViewInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IClearingHouseView {
    return new Contract(address, _abi, signerOrProvider) as IClearingHouseView;
  }
}
