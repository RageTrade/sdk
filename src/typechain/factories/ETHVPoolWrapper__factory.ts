/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import { Provider } from '@ethersproject/providers';
import type {
  ETHVPoolWrapper,
  ETHVPoolWrapperInterface,
} from '../ETHVPoolWrapper';

const _abi = [
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
    name: 'InvalidTicks',
    type: 'error',
  },
  {
    inputs: [],
    name: 'NotClearingHouse',
    type: 'error',
  },
  {
    inputs: [],
    name: 'NotGovernance',
    type: 'error',
  },
  {
    inputs: [],
    name: 'NotUniswapV3Pool',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint128',
        name: 'value',
        type: 'uint128',
      },
    ],
    name: 'SafeCast_Int128Overflow',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'SafeCast_Int256Overflow',
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
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'AccruedProtocolFeeCollected',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'int24',
        name: 'tickLower',
        type: 'int24',
      },
      {
        indexed: false,
        internalType: 'int24',
        name: 'tickUpper',
        type: 'int24',
      },
      {
        indexed: false,
        internalType: 'uint128',
        name: 'liquidity',
        type: 'uint128',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'vTokenPrincipal',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'vQuotePrincipal',
        type: 'uint256',
      },
    ],
    name: 'Burn',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint24',
        name: 'liquidityFeePips',
        type: 'uint24',
      },
    ],
    name: 'LiquidityFeeUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'int24',
        name: 'tickLower',
        type: 'int24',
      },
      {
        indexed: false,
        internalType: 'int24',
        name: 'tickUpper',
        type: 'int24',
      },
      {
        indexed: false,
        internalType: 'uint128',
        name: 'liquidity',
        type: 'uint128',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'vTokenPrincipal',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'vQuotePrincipal',
        type: 'uint256',
      },
    ],
    name: 'Mint',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint24',
        name: 'protocolFeePips',
        type: 'uint24',
      },
    ],
    name: 'ProtocolFeeUpdated',
    type: 'event',
  },
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
        name: 'vQuoteIn',
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
            internalType: 'contract IVQuote',
            name: 'vQuote',
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
    name: '__initialize_VPoolWrapper',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'accruedProtocolFee',
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
        internalType: 'uint128',
        name: 'liquidity',
        type: 'uint128',
      },
    ],
    name: 'burn',
    outputs: [
      {
        internalType: 'uint256',
        name: 'vTokenPrincipal',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'vQuotePrincipal',
        type: 'uint256',
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
    name: 'clearingHouse',
    outputs: [
      {
        internalType: 'contract IClearingHouse',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
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
    inputs: [],
    name: 'fpGlobal',
    outputs: [
      {
        internalType: 'int256',
        name: 'sumAX128',
        type: 'int256',
      },
      {
        internalType: 'int256',
        name: 'sumBX128',
        type: 'int256',
      },
      {
        internalType: 'int256',
        name: 'sumFpX128',
        type: 'int256',
      },
      {
        internalType: 'uint48',
        name: 'timestampLast',
        type: 'uint48',
      },
    ],
    stateMutability: 'view',
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
        internalType: 'uint128',
        name: 'liquidity',
        type: 'uint128',
      },
    ],
    name: 'mint',
    outputs: [
      {
        internalType: 'uint256',
        name: 'vTokenPrincipal',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'vQuotePrincipal',
        type: 'uint256',
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
        internalType: 'uint24',
        name: 'liquidityFeePips_',
        type: 'uint24',
      },
    ],
    name: 'setLiquidityFee',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint24',
        name: 'protocolFeePips_',
        type: 'uint24',
      },
    ],
    name: 'setProtocolFee',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'sumFeeGlobalX128',
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
    inputs: [
      {
        internalType: 'bool',
        name: 'swapVTokenForVQuote',
        type: 'bool',
      },
      {
        internalType: 'int256',
        name: 'amountSpecified',
        type: 'int256',
      },
      {
        internalType: 'uint160',
        name: 'sqrtPriceLimitX96',
        type: 'uint160',
      },
    ],
    name: 'swap',
    outputs: [
      {
        internalType: 'int256',
        name: 'vTokenAmount',
        type: 'int256',
      },
      {
        internalType: 'int256',
        name: 'vQuoteAmount',
        type: 'int256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'int24',
        name: '',
        type: 'int24',
      },
    ],
    name: 'ticksExtended',
    outputs: [
      {
        internalType: 'int256',
        name: 'sumALastX128',
        type: 'int256',
      },
      {
        internalType: 'int256',
        name: 'sumBOutsideX128',
        type: 'int256',
      },
      {
        internalType: 'int256',
        name: 'sumFpOutsideX128',
        type: 'int256',
      },
      {
        internalType: 'uint256',
        name: 'sumFeeOutsideX128',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
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
    inputs: [
      {
        internalType: 'uint256',
        name: 'vTokenAmount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'vQuoteAmount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    name: 'uniswapV3MintCallback',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'int256',
        name: 'amount0Delta',
        type: 'int256',
      },
      {
        internalType: 'int256',
        name: 'amount1Delta',
        type: 'int256',
      },
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    name: 'uniswapV3SwapCallback',
    outputs: [],
    stateMutability: 'nonpayable',
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
  {
    inputs: [],
    name: 'vQuote',
    outputs: [
      {
        internalType: 'contract IVQuote',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'vToken',
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
];

export class ETHVPoolWrapper__factory {
  static readonly abi = _abi;
  static createInterface(): ETHVPoolWrapperInterface {
    return new utils.Interface(_abi) as ETHVPoolWrapperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ETHVPoolWrapper {
    return new Contract(address, _abi, signerOrProvider) as ETHVPoolWrapper;
  }
}
