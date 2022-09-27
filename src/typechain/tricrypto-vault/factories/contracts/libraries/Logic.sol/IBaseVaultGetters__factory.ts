/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import type { Provider } from '@ethersproject/providers';
import type {
  IBaseVaultGetters,
  IBaseVaultGettersInterface,
} from '../../../../contracts/libraries/Logic.sol/IBaseVaultGetters';

const _abi = [
  {
    inputs: [],
    name: 'closePositionSlippageSqrtToleranceBps',
    outputs: [
      {
        internalType: 'uint16',
        name: '',
        type: 'uint16',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'minNotionalPositionToCloseThreshold',
    outputs: [
      {
        internalType: 'uint64',
        name: '',
        type: 'uint64',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

export class IBaseVaultGetters__factory {
  static readonly abi = _abi;
  static createInterface(): IBaseVaultGettersInterface {
    return new utils.Interface(_abi) as IBaseVaultGettersInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IBaseVaultGetters {
    return new Contract(address, _abi, signerOrProvider) as IBaseVaultGetters;
  }
}