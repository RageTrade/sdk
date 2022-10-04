/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import type { Provider } from '@ethersproject/providers';
import type {
  IBaseVault,
  IBaseVaultInterface,
} from '../../../../../@ragetrade/vaults/contracts/interfaces/IBaseVault';

const _abi = [
  {
    inputs: [],
    name: 'closeTokenPosition',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'depositCap',
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
    name: 'ethPoolId',
    outputs: [
      {
        internalType: 'uint32',
        name: '',
        type: 'uint32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'rageAccountNo',
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
    name: 'rageClearingHouse',
    outputs: [
      {
        internalType: 'contract IClearingHouse',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'rageVPool',
    outputs: [
      {
        internalType: 'contract IUniswapV3Pool',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'rebalance',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'swapSimulator',
    outputs: [
      {
        internalType: 'contract ISwapSimulator',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

export class IBaseVault__factory {
  static readonly abi = _abi;
  static createInterface(): IBaseVaultInterface {
    return new utils.Interface(_abi) as IBaseVaultInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IBaseVault {
    return new Contract(address, _abi, signerOrProvider) as IBaseVault;
  }
}
