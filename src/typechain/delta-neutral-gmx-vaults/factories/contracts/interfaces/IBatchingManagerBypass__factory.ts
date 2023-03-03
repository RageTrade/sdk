/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import type { Provider } from '@ethersproject/providers';
import type {
  IBatchingManagerBypass,
  IBatchingManagerBypassInterface,
} from '../../../contracts/interfaces/IBatchingManagerBypass';

const _abi = [
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'glpAmount',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'receiver',
        type: 'address',
      },
    ],
    name: 'deposit',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const;

export class IBatchingManagerBypass__factory {
  static readonly abi = _abi;
  static createInterface(): IBatchingManagerBypassInterface {
    return new utils.Interface(_abi) as IBatchingManagerBypassInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IBatchingManagerBypass {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IBatchingManagerBypass;
  }
}
