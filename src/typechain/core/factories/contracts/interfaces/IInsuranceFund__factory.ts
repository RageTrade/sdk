/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import type { Provider } from '@ethersproject/providers';
import type {
  IInsuranceFund,
  IInsuranceFundInterface,
} from '../../../contracts/interfaces/IInsuranceFund';

const _abi = [
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'claim',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IERC20',
        name: 'settlementToken',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'clearingHouse',
        type: 'address',
      },
      {
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'symbol',
        type: 'string',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const;

export class IInsuranceFund__factory {
  static readonly abi = _abi;
  static createInterface(): IInsuranceFundInterface {
    return new utils.Interface(_abi) as IInsuranceFundInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IInsuranceFund {
    return new Contract(address, _abi, signerOrProvider) as IInsuranceFund;
  }
}
