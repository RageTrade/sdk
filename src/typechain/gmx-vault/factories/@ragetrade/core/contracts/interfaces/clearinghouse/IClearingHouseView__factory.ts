/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import type { Provider } from '@ethersproject/providers';
import type {
  IClearingHouseView,
  IClearingHouseViewInterface,
} from '../../../../../../@ragetrade/core/contracts/interfaces/clearinghouse/IClearingHouseView';

const _abi = [
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
        name: 'value',
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
] as const;

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
