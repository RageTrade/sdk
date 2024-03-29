/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import type { Provider } from '@ethersproject/providers';
import type {
  ClearingHouseStorage,
  ClearingHouseStorageInterface,
} from '../../../../contracts/protocol/clearinghouse/ClearingHouseStorage';

const _abi = [
  {
    inputs: [],
    name: 'insuranceFund',
    outputs: [
      {
        internalType: 'contract IInsuranceFund',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'numAccounts',
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
    name: 'rageTradeFactoryAddress',
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
] as const;

export class ClearingHouseStorage__factory {
  static readonly abi = _abi;
  static createInterface(): ClearingHouseStorageInterface {
    return new utils.Interface(_abi) as ClearingHouseStorageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ClearingHouseStorage {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ClearingHouseStorage;
  }
}
