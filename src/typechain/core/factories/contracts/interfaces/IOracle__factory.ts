/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import type { Provider } from '@ethersproject/providers';
import type {
  IOracle,
  IOracleInterface,
} from '../../../contracts/interfaces/IOracle';

const _abi = [
  {
    inputs: [
      {
        internalType: 'uint32',
        name: 'twapDuration',
        type: 'uint32',
      },
    ],
    name: 'getTwapPriceX128',
    outputs: [
      {
        internalType: 'uint256',
        name: 'priceX128',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
] as const;

export class IOracle__factory {
  static readonly abi = _abi;
  static createInterface(): IOracleInterface {
    return new utils.Interface(_abi) as IOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IOracle {
    return new Contract(address, _abi, signerOrProvider) as IOracle;
  }
}
