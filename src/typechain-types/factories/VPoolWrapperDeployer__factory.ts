/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import { Provider } from '@ethersproject/providers';
import type {
  VPoolWrapperDeployer,
  VPoolWrapperDeployerInterface,
} from '../VPoolWrapperDeployer';

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'addr',
        type: 'address',
      },
    ],
    name: 'IllegalAddress',
    type: 'error',
  },
  {
    inputs: [],
    name: 'Unauthorised',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ZeroAddress',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousGovernance',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newGovernance',
        type: 'address',
      },
    ],
    name: 'GovernanceTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousTeamMultisig',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newTeamMultisig',
        type: 'address',
      },
    ],
    name: 'TeamMultisigTransferred',
    type: 'event',
  },
  {
    inputs: [],
    name: 'governance',
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
  {
    inputs: [
      {
        internalType: 'address',
        name: '_vPoolWrapperLogicAddress',
        type: 'address',
      },
    ],
    name: 'setVPoolWrapperLogicAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'teamMultisig',
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
        name: 'newGovernance',
        type: 'address',
      },
    ],
    name: 'transferGovernance',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newTeamMultisig',
        type: 'address',
      },
    ],
    name: 'transferTeamMultisig',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'vPoolWrapperLogicAddress',
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
];

export class VPoolWrapperDeployer__factory {
  static readonly abi = _abi;
  static createInterface(): VPoolWrapperDeployerInterface {
    return new utils.Interface(_abi) as VPoolWrapperDeployerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VPoolWrapperDeployer {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as VPoolWrapperDeployer;
  }
}
