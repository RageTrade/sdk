/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, ContractRunner } from 'ethers';
import type {
  IClearingHouseActions,
  IClearingHouseActionsInterface,
} from '../../../../contracts/interfaces/clearinghouse/IClearingHouseActions';

const _abi = [
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
] as const;

export class IClearingHouseActions__factory {
  static readonly abi = _abi;
  static createInterface(): IClearingHouseActionsInterface {
    return new Interface(_abi) as IClearingHouseActionsInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IClearingHouseActions {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as IClearingHouseActions;
  }
}
