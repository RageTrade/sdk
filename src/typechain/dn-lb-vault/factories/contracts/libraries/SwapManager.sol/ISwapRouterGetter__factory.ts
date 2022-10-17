/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import type { Provider } from '@ethersproject/providers';
import type {
  ISwapRouterGetter,
  ISwapRouterGetterInterface,
} from '../../../../contracts/libraries/SwapManager.sol/ISwapRouterGetter';

const _abi = [
  {
    inputs: [],
    name: 'swapRouter',
    outputs: [
      {
        internalType: 'contract ISwapRouter',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

export class ISwapRouterGetter__factory {
  static readonly abi = _abi;
  static createInterface(): ISwapRouterGetterInterface {
    return new utils.Interface(_abi) as ISwapRouterGetterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ISwapRouterGetter {
    return new Contract(address, _abi, signerOrProvider) as ISwapRouterGetter;
  }
}