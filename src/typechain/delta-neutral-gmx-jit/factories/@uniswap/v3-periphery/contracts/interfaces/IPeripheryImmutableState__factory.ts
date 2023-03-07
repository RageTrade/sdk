/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, ContractRunner } from 'ethers';
import type {
  IPeripheryImmutableState,
  IPeripheryImmutableStateInterface,
} from '../../../../../@uniswap/v3-periphery/contracts/interfaces/IPeripheryImmutableState';

const _abi = [
  {
    inputs: [],
    name: 'WETH9',
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
    inputs: [],
    name: 'factory',
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

export class IPeripheryImmutableState__factory {
  static readonly abi = _abi;
  static createInterface(): IPeripheryImmutableStateInterface {
    return new Interface(_abi) as IPeripheryImmutableStateInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IPeripheryImmutableState {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as IPeripheryImmutableState;
  }
}
