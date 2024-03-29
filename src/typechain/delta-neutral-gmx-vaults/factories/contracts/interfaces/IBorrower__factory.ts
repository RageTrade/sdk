/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import type { Provider } from '@ethersproject/providers';
import type {
  IBorrower,
  IBorrowerInterface,
} from '../../../contracts/interfaces/IBorrower';

const _abi = [
  {
    inputs: [],
    name: 'getUsdcBorrowed',
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
    name: 'harvestFees',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const;

export class IBorrower__factory {
  static readonly abi = _abi;
  static createInterface(): IBorrowerInterface {
    return new utils.Interface(_abi) as IBorrowerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IBorrower {
    return new Contract(address, _abi, signerOrProvider) as IBorrower;
  }
}
