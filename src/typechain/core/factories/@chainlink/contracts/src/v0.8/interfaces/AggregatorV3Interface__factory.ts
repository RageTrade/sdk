/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, ContractRunner } from 'ethers';
import type {
  AggregatorV3Interface,
  AggregatorV3InterfaceInterface,
} from '../../../../../../@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface';

const _abi = [
  {
    inputs: [],
    name: 'decimals',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'description',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint80',
        name: '_roundId',
        type: 'uint80',
      },
    ],
    name: 'getRoundData',
    outputs: [
      {
        internalType: 'uint80',
        name: 'roundId',
        type: 'uint80',
      },
      {
        internalType: 'int256',
        name: 'answer',
        type: 'int256',
      },
      {
        internalType: 'uint256',
        name: 'startedAt',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'updatedAt',
        type: 'uint256',
      },
      {
        internalType: 'uint80',
        name: 'answeredInRound',
        type: 'uint80',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'latestRoundData',
    outputs: [
      {
        internalType: 'uint80',
        name: 'roundId',
        type: 'uint80',
      },
      {
        internalType: 'int256',
        name: 'answer',
        type: 'int256',
      },
      {
        internalType: 'uint256',
        name: 'startedAt',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'updatedAt',
        type: 'uint256',
      },
      {
        internalType: 'uint80',
        name: 'answeredInRound',
        type: 'uint80',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'version',
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
] as const;

export class AggregatorV3Interface__factory {
  static readonly abi = _abi;
  static createInterface(): AggregatorV3InterfaceInterface {
    return new Interface(_abi) as AggregatorV3InterfaceInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): AggregatorV3Interface {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as AggregatorV3Interface;
  }
}
