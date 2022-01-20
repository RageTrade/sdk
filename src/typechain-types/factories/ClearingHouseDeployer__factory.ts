/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import { Provider } from '@ethersproject/providers';
import type {
  ClearingHouseDeployer,
  ClearingHouseDeployerInterface,
} from '../ClearingHouseDeployer';

const _abi = [
  {
    inputs: [],
    name: 'proxyAdmin',
    outputs: [
      {
        internalType: 'contract ProxyAdmin',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

export class ClearingHouseDeployer__factory {
  static readonly abi = _abi;
  static createInterface(): ClearingHouseDeployerInterface {
    return new utils.Interface(_abi) as ClearingHouseDeployerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ClearingHouseDeployer {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ClearingHouseDeployer;
  }
}
