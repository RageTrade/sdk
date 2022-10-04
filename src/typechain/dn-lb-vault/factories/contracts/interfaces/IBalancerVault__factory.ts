/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import type { Provider } from '@ethersproject/providers';
import type {
  IBalancerVault,
  IBalancerVaultInterface,
} from '../../../contracts/interfaces/IBalancerVault';

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        internalType: 'address[]',
        name: 'tokens',
        type: 'address[]',
      },
      {
        internalType: 'uint256[]',
        name: 'amounts',
        type: 'uint256[]',
      },
      {
        internalType: 'bytes',
        name: 'userData',
        type: 'bytes',
      },
    ],
    name: 'flashLoan',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        internalType: 'address[]',
        name: 'tokens',
        type: 'address[]',
      },
    ],
    name: 'getInternalBalance',
    outputs: [
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

export class IBalancerVault__factory {
  static readonly abi = _abi;
  static createInterface(): IBalancerVaultInterface {
    return new utils.Interface(_abi) as IBalancerVaultInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IBalancerVault {
    return new Contract(address, _abi, signerOrProvider) as IBalancerVault;
  }
}
