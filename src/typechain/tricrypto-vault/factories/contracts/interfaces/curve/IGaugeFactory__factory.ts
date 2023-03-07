/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, ContractRunner } from 'ethers';
import type {
  IGaugeFactory,
  IGaugeFactoryInterface,
} from '../../../../contracts/interfaces/curve/IGaugeFactory';

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'lpToken',
        type: 'address',
      },
    ],
    name: 'get_gauge_from_lp_token',
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
    inputs: [
      {
        internalType: 'address',
        name: 'gauge',
        type: 'address',
      },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const;

export class IGaugeFactory__factory {
  static readonly abi = _abi;
  static createInterface(): IGaugeFactoryInterface {
    return new Interface(_abi) as IGaugeFactoryInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IGaugeFactory {
    return new Contract(address, _abi, runner) as unknown as IGaugeFactory;
  }
}
