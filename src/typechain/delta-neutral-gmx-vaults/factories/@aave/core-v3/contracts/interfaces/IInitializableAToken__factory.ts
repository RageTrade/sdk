/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import type { Provider } from '@ethersproject/providers';
import type {
  IInitializableAToken,
  IInitializableATokenInterface,
} from '../../../../../@aave/core-v3/contracts/interfaces/IInitializableAToken';

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'underlyingAsset',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'pool',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'treasury',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'incentivesController',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint8',
        name: 'aTokenDecimals',
        type: 'uint8',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'aTokenName',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'aTokenSymbol',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'params',
        type: 'bytes',
      },
    ],
    name: 'Initialized',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'contract IPool',
        name: 'pool',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'treasury',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'underlyingAsset',
        type: 'address',
      },
      {
        internalType: 'contract IAaveIncentivesController',
        name: 'incentivesController',
        type: 'address',
      },
      {
        internalType: 'uint8',
        name: 'aTokenDecimals',
        type: 'uint8',
      },
      {
        internalType: 'string',
        name: 'aTokenName',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'aTokenSymbol',
        type: 'string',
      },
      {
        internalType: 'bytes',
        name: 'params',
        type: 'bytes',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const;

export class IInitializableAToken__factory {
  static readonly abi = _abi;
  static createInterface(): IInitializableATokenInterface {
    return new utils.Interface(_abi) as IInitializableATokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IInitializableAToken {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IInitializableAToken;
  }
}
