/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, ContractRunner } from 'ethers';
import type {
  IBalancerVault,
  IBalancerVaultInterface,
} from '../../../../contracts/interfaces/balancer/IBalancerVault';

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'feeAmount',
        type: 'uint256',
      },
    ],
    name: 'FlashLoan',
    type: 'event',
  },
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
] as const;

export class IBalancerVault__factory {
  static readonly abi = _abi;
  static createInterface(): IBalancerVaultInterface {
    return new Interface(_abi) as IBalancerVaultInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IBalancerVault {
    return new Contract(address, _abi, runner) as unknown as IBalancerVault;
  }
}
