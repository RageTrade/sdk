/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, ContractRunner } from 'ethers';
import type {
  IVPoolWrapper,
  IVPoolWrapperInterface,
} from '../../../../../@ragetrade/core/contracts/interfaces/IVPoolWrapper';

const _abi = [
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
        internalType: 'int256',
        name: 'fundingRateOverrideX128',
        type: 'int256',
      },
    ],
    name: 'FundingRateOverrideUpdated',
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
        components: [
          {
            internalType: 'int256',
            name: 'amountSpecified',
            type: 'int256',
          },
          {
            internalType: 'int256',
            name: 'vTokenIn',
            type: 'int256',
          },
          {
            internalType: 'int256',
            name: 'vQuoteIn',
            type: 'int256',
          },
          {
            internalType: 'uint256',
            name: 'liquidityFees',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'protocolFees',
            type: 'uint256',
          },
          {
            internalType: 'uint160',
            name: 'sqrtPriceX96Start',
            type: 'uint160',
          },
          {
            internalType: 'uint160',
            name: 'sqrtPriceX96End',
            type: 'uint160',
          },
        ],
        indexed: false,
        internalType: 'struct IVPoolWrapper.SwapResult',
        name: 'swapResult',
        type: 'tuple',
      },
    ],
    name: 'Swap',
    type: 'event',
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
        components: [
          {
            internalType: 'address',
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
        ],
        internalType: 'struct IVPoolWrapper.InitializeVPoolWrapperParams',
        name: 'params',
        type: 'tuple',
      },
    ],
    name: 'initialize',
    outputs: [],
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
        components: [
          {
            internalType: 'int256',
            name: 'amountSpecified',
            type: 'int256',
          },
          {
            internalType: 'int256',
            name: 'vTokenIn',
            type: 'int256',
          },
          {
            internalType: 'int256',
            name: 'vQuoteIn',
            type: 'int256',
          },
          {
            internalType: 'uint256',
            name: 'liquidityFees',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'protocolFees',
            type: 'uint256',
          },
          {
            internalType: 'uint160',
            name: 'sqrtPriceX96Start',
            type: 'uint160',
          },
          {
            internalType: 'uint160',
            name: 'sqrtPriceX96End',
            type: 'uint160',
          },
        ],
        internalType: 'struct IVPoolWrapper.SwapResult',
        name: 'swapResult',
        type: 'tuple',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bool',
        name: 'useZeroFundingRate',
        type: 'bool',
      },
    ],
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
] as const;

export class IVPoolWrapper__factory {
  static readonly abi = _abi;
  static createInterface(): IVPoolWrapperInterface {
    return new Interface(_abi) as IVPoolWrapperInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IVPoolWrapper {
    return new Contract(address, _abi, runner) as unknown as IVPoolWrapper;
  }
}
