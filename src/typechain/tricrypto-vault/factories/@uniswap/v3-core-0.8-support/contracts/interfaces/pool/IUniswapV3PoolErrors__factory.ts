/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import type { Provider } from '@ethersproject/providers';
import type {
  IUniswapV3PoolErrors,
  IUniswapV3PoolErrorsInterface,
} from '../../../../../../@uniswap/v3-core-0.8-support/contracts/interfaces/pool/IUniswapV3PoolErrors';

const _abi = [
  {
    inputs: [],
    name: 'AI',
    type: 'error',
  },
  {
    inputs: [],
    name: 'AS',
    type: 'error',
  },
  {
    inputs: [],
    name: 'F0',
    type: 'error',
  },
  {
    inputs: [],
    name: 'F1',
    type: 'error',
  },
  {
    inputs: [],
    name: 'IIA',
    type: 'error',
  },
  {
    inputs: [],
    name: 'L',
    type: 'error',
  },
  {
    inputs: [],
    name: 'LOK',
    type: 'error',
  },
  {
    inputs: [],
    name: 'M0',
    type: 'error',
  },
  {
    inputs: [],
    name: 'M1',
    type: 'error',
  },
  {
    inputs: [],
    name: 'TLM',
    type: 'error',
  },
  {
    inputs: [],
    name: 'TLU',
    type: 'error',
  },
  {
    inputs: [],
    name: 'TUM',
    type: 'error',
  },
];

export class IUniswapV3PoolErrors__factory {
  static readonly abi = _abi;
  static createInterface(): IUniswapV3PoolErrorsInterface {
    return new utils.Interface(_abi) as IUniswapV3PoolErrorsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IUniswapV3PoolErrors {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IUniswapV3PoolErrors;
  }
}
