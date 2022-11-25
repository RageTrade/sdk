/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import type { Provider } from '@ethersproject/providers';
import type {
  IDnGmxJIT,
  IDnGmxJITInterface,
} from '../../../contracts/interfaces/IDnGmxJIT';

const _abi = [
  {
    inputs: [],
    name: 'addLiquidity',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'removeLiquidity',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'swapWbtc',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

export class IDnGmxJIT__factory {
  static readonly abi = _abi;
  static createInterface(): IDnGmxJITInterface {
    return new utils.Interface(_abi) as IDnGmxJITInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IDnGmxJIT {
    return new Contract(address, _abi, signerOrProvider) as IDnGmxJIT;
  }
}
