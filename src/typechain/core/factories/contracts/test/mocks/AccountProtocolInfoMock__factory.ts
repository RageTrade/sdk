/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import type { Provider } from '@ethersproject/providers';
import type {
  AccountProtocolInfoMock,
  AccountProtocolInfoMockInterface,
} from '../../../../contracts/test/mocks/AccountProtocolInfoMock';

const _abi = [
  {
    inputs: [],
    name: 'fixFee',
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
    name: 'protocol',
    outputs: [
      {
        internalType: 'contract IERC20',
        name: 'settlementToken',
        type: 'address',
      },
      {
        internalType: 'contract IVQuote',
        name: 'vQuote',
        type: 'address',
      },
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
        name: '_liquidationParams',
        type: 'tuple',
      },
      {
        internalType: 'uint256',
        name: '_minRequiredMargin',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_removeLimitOrderFee',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_minimumOrderNotional',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_fixFee',
        type: 'uint256',
      },
    ],
    name: 'setAccountStorage',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IVQuote',
        name: '_vQuote',
        type: 'address',
      },
    ],
    name: 'setVQuoteAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

export class AccountProtocolInfoMock__factory {
  static readonly abi = _abi;
  static createInterface(): AccountProtocolInfoMockInterface {
    return new utils.Interface(_abi) as AccountProtocolInfoMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AccountProtocolInfoMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as AccountProtocolInfoMock;
  }
}
