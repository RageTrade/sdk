/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import { Provider } from '@ethersproject/providers';
import type { IVPoolWrapper, IVPoolWrapperInterface } from '../IVPoolWrapper';

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'int256',
        name: 'vTokenIn',
        type: 'int256',
      },
      {
        indexed: false,
        internalType: 'int256',
        name: 'vBaseIn',
        type: 'int256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'liquidityFees',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'protocolFees',
        type: 'uint256',
      },
    ],
    name: 'Swap',
    type: 'event',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'contract IClearingHouse',
            name: 'clearingHouse',
            type: 'address',
          },
          {
            internalType: 'contract IVToken',
            name: 'vToken',
            type: 'address',
          },
          {
            internalType: 'contract IVBase',
            name: 'vBase',
            type: 'address',
          },
          {
            internalType: 'contract IUniswapV3Pool',
            name: 'vPool',
            type: 'address',
          },
          {
            internalType: 'uint24',
            name: 'liquidityFeePips',
            type: 'uint24',
          },
          {
            internalType: 'uint24',
            name: 'protocolFeePips',
            type: 'uint24',
          },
          {
            internalType: 'uint24',
            name: 'UNISWAP_V3_DEFAULT_FEE_TIER',
            type: 'uint24',
          },
        ],
        internalType: 'struct IVPoolWrapper.InitializeVPoolWrapperParams',
        name: 'params',
        type: 'tuple',
      },
    ],
    name: '__VPoolWrapper_init',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'collectAccruedProtocolFee',
    outputs: [
      {
        internalType: 'uint256',
        name: 'accruedProtocolFeeLast',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getExtrapolatedSumAX128',
    outputs: [
      {
        internalType: 'int256',
        name: '',
        type: 'int256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
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
    name: 'getExtrapolatedValuesInside',
    outputs: [
      {
        components: [
          {
            internalType: 'int256',
            name: 'sumAX128',
            type: 'int256',
          },
          {
            internalType: 'int256',
            name: 'sumBInsideX128',
            type: 'int256',
          },
          {
            internalType: 'int256',
            name: 'sumFpInsideX128',
            type: 'int256',
          },
          {
            internalType: 'uint256',
            name: 'sumFeeInsideX128',
            type: 'uint256',
          },
        ],
        internalType: 'struct IVPoolWrapper.WrapperValuesInside',
        name: 'wrapperValuesInside',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getSumAX128',
    outputs: [
      {
        internalType: 'int256',
        name: '',
        type: 'int256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
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
    name: 'getValuesInside',
    outputs: [
      {
        components: [
          {
            internalType: 'int256',
            name: 'sumAX128',
            type: 'int256',
          },
          {
            internalType: 'int256',
            name: 'sumBInsideX128',
            type: 'int256',
          },
          {
            internalType: 'int256',
            name: 'sumFpInsideX128',
            type: 'int256',
          },
          {
            internalType: 'uint256',
            name: 'sumFeeInsideX128',
            type: 'uint256',
          },
        ],
        internalType: 'struct IVPoolWrapper.WrapperValuesInside',
        name: 'wrapperValuesInside',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
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
        name: 'liquidity',
        type: 'int128',
      },
    ],
    name: 'liquidityChange',
    outputs: [
      {
        internalType: 'int256',
        name: 'vBaseAmount',
        type: 'int256',
      },
      {
        internalType: 'int256',
        name: 'vTokenAmount',
        type: 'int256',
      },
      {
        components: [
          {
            internalType: 'int256',
            name: 'sumAX128',
            type: 'int256',
          },
          {
            internalType: 'int256',
            name: 'sumBInsideX128',
            type: 'int256',
          },
          {
            internalType: 'int256',
            name: 'sumFpInsideX128',
            type: 'int256',
          },
          {
            internalType: 'uint256',
            name: 'sumFeeInsideX128',
            type: 'uint256',
          },
        ],
        internalType: 'struct IVPoolWrapper.WrapperValuesInside',
        name: 'wrapperValuesInside',
        type: 'tuple',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'liquidityFeePips',
    outputs: [
      {
        internalType: 'uint24',
        name: '',
        type: 'uint24',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'protocolFeePips',
    outputs: [
      {
        internalType: 'uint24',
        name: '',
        type: 'uint24',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
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
    ],
    name: 'swapToken',
    outputs: [
      {
        internalType: 'int256',
        name: 'vTokenAmount',
        type: 'int256',
      },
      {
        internalType: 'int256',
        name: 'vBaseAmount',
        type: 'int256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'uniswapFeePips',
    outputs: [
      {
        internalType: 'uint24',
        name: '',
        type: 'uint24',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'updateGlobalFundingState',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'vPool',
    outputs: [
      {
        internalType: 'contract IUniswapV3Pool',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

export class IVPoolWrapper__factory {
  static readonly abi = _abi;
  static createInterface(): IVPoolWrapperInterface {
    return new utils.Interface(_abi) as IVPoolWrapperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IVPoolWrapper {
    return new Contract(address, _abi, signerOrProvider) as IVPoolWrapper;
  }
}
