/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import type { Provider } from '@ethersproject/providers';
import type {
  ISwapSimulator,
  ISwapSimulatorInterface,
} from '../../../contracts/interfaces/ISwapSimulator';

const _abi = [
  {
    inputs: [
      {
        internalType: 'contract IClearingHouse',
        name: 'clearingHouse',
        type: 'address',
      },
      {
        internalType: 'uint32',
        name: 'poolId',
        type: 'uint32',
      },
      {
        internalType: 'int256',
        name: 'amount',
        type: 'int256',
      },
      {
        internalType: 'uint160',
        name: 'sqrtPriceLimitX96',
        type: 'uint160',
      },
      {
        internalType: 'bool',
        name: 'isNotional',
        type: 'bool',
      },
    ],
    name: 'simulateSwapView',
    outputs: [
      {
        components: [
          {
            internalType: 'int256',
            name: 'amountSpecified',
            type: 'int256',
          },
          {
            internalType: 'int256',
            name: 'vTokenIn',
            type: 'int256',
          },
          {
            internalType: 'int256',
            name: 'vQuoteIn',
            type: 'int256',
          },
          {
            internalType: 'uint256',
            name: 'liquidityFees',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'protocolFees',
            type: 'uint256',
          },
          {
            internalType: 'uint160',
            name: 'sqrtPriceX96Start',
            type: 'uint160',
          },
          {
            internalType: 'uint160',
            name: 'sqrtPriceX96End',
            type: 'uint160',
          },
        ],
        internalType: 'struct IVPoolWrapper.SwapResult',
        name: 'swapResult',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

export class ISwapSimulator__factory {
  static readonly abi = _abi;
  static createInterface(): ISwapSimulatorInterface {
    return new utils.Interface(_abi) as ISwapSimulatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ISwapSimulator {
    return new Contract(address, _abi, signerOrProvider) as ISwapSimulator;
  }
}
