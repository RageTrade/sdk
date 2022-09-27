/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import type { Provider } from '@ethersproject/providers';
import type {
  ICurveStableSwap,
  ICurveStableSwapInterface,
} from '../../../../contracts/interfaces/curve/ICurveStableSwap';

const _abi = [
  {
    inputs: [
      {
        internalType: 'uint256[3]',
        name: 'amounts',
        type: 'uint256[3]',
      },
      {
        internalType: 'uint256',
        name: 'min_mint_amount',
        type: 'uint256',
      },
    ],
    name: 'add_liquidity',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'balances',
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
        internalType: 'uint256[3]',
        name: 'amounts',
        type: 'uint256[3]',
      },
      {
        internalType: 'bool',
        name: 'deposit',
        type: 'bool',
      },
    ],
    name: 'calc_token_amount',
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
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    name: 'exchange',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'int128',
        name: 'from',
        type: 'int128',
      },
      {
        internalType: 'int128',
        name: 'to',
        type: 'int128',
      },
      {
        internalType: 'uint256',
        name: '_from_amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_min_to_amount',
        type: 'uint256',
      },
    ],
    name: 'exchange',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'get_dy',
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
    name: 'get_virtual_price',
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
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256[2]',
        name: 'amounts',
        type: 'uint256[2]',
      },
    ],
    name: 'remove_liquidity',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256[2]',
        name: 'amounts',
        type: 'uint256[2]',
      },
      {
        internalType: 'uint256',
        name: 'max_burn_amount',
        type: 'uint256',
      },
    ],
    name: 'remove_liquidity_imbalance',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'token_amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'min_amount',
        type: 'uint256',
      },
    ],
    name: 'remove_liquidity_one_coin',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

export class ICurveStableSwap__factory {
  static readonly abi = _abi;
  static createInterface(): ICurveStableSwapInterface {
    return new utils.Interface(_abi) as ICurveStableSwapInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ICurveStableSwap {
    return new Contract(address, _abi, signerOrProvider) as ICurveStableSwap;
  }
}