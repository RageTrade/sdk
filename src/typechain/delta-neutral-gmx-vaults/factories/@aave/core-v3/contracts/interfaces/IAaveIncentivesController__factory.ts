/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import type { Provider } from '@ethersproject/providers';
import type {
  IAaveIncentivesController,
  IAaveIncentivesControllerInterface,
} from '../../../../../@aave/core-v3/contracts/interfaces/IAaveIncentivesController';

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'totalSupply',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'userBalance',
        type: 'uint256',
      },
    ],
    name: 'handleAction',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

export class IAaveIncentivesController__factory {
  static readonly abi = _abi;
  static createInterface(): IAaveIncentivesControllerInterface {
    return new utils.Interface(_abi) as IAaveIncentivesControllerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IAaveIncentivesController {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IAaveIncentivesController;
  }
}
