/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, ContractRunner } from 'ethers';
import type {
  LiquidityManagement,
  LiquidityManagementInterface,
} from '../../../../../@uniswap/v3-periphery/contracts/base/LiquidityManagement';

const _abi = [
  {
    inputs: [],
    name: 'WETH9',
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
    name: 'factory',
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
    name: 'refundETH',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amountMinimum',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
    ],
    name: 'sweepToken',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount0Owed',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amount1Owed',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'data',
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
        internalType: 'uint256',
        name: 'amountMinimum',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
    ],
    name: 'unwrapWETH9',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    stateMutability: 'payable',
    type: 'receive',
  },
] as const;

export class LiquidityManagement__factory {
  static readonly abi = _abi;
  static createInterface(): LiquidityManagementInterface {
    return new Interface(_abi) as LiquidityManagementInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): LiquidityManagement {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as LiquidityManagement;
  }
}
