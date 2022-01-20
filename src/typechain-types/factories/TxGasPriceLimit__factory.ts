/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import { Provider } from '@ethersproject/providers';
import type {
  TxGasPriceLimit,
  TxGasPriceLimitInterface,
} from '../TxGasPriceLimit';

const _abi = [
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'txGasPrice',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'limit',
        type: 'uint256',
      },
    ],
    name: 'ExcessTxGasPrice',
    type: 'error',
  },
  {
    inputs: [],
    name: 'Unauthorised',
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
    inputs: [
      {
        internalType: 'uint256',
        name: '_txGasPriceLimit',
        type: 'uint256',
      },
    ],
    name: 'setTxGasPriceLimit',
    outputs: [],
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
    inputs: [],
    name: 'txGasPriceLimit',
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
];

export class TxGasPriceLimit__factory {
  static readonly abi = _abi;
  static createInterface(): TxGasPriceLimitInterface {
    return new utils.Interface(_abi) as TxGasPriceLimitInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TxGasPriceLimit {
    return new Contract(address, _abi, signerOrProvider) as TxGasPriceLimit;
  }
}
