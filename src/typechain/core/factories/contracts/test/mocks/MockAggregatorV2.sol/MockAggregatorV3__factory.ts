/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type {
  MockAggregatorV3,
  MockAggregatorV3Interface,
} from '../../../../../contracts/test/mocks/MockAggregatorV2.sol/MockAggregatorV3';

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
];

const _bytecode =
  '0x608060405234801561001057600080fd5b506101aa806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063313ce5671461005c57806354fd4d50146100705780637284e4161461007f5780639a6fc8f51461008e578063feaf968c146100e1575b600080fd5b604051600081526020015b60405180910390f35b60405160008152602001610067565b606060405161006791906100ec565b6100aa61009c366004610141565b506000908190819081908190565b6040805169ffffffffffffffffffff968716815260208101959095528401929092526060830152909116608082015260a001610067565b6000808080806100aa565b600060208083528351808285015260005b81811015610119578581018301518582016040015282016100fd565b8181111561012b576000604083870101525b50601f01601f1916929092016040019392505050565b60006020828403121561015357600080fd5b813569ffffffffffffffffffff8116811461016d57600080fd5b939250505056fea264697066735822122086015cf747a3b61b5879b3a7484bfada305f828bb9e6b7bc68cce68745e78c7d64736f6c634300080d0033';

type MockAggregatorV3ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockAggregatorV3ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockAggregatorV3__factory extends ContractFactory {
  constructor(...args: MockAggregatorV3ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockAggregatorV3> {
    return super.deploy(overrides || {}) as Promise<MockAggregatorV3>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MockAggregatorV3 {
    return super.attach(address) as MockAggregatorV3;
  }
  override connect(signer: Signer): MockAggregatorV3__factory {
    return super.connect(signer) as MockAggregatorV3__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockAggregatorV3Interface {
    return new utils.Interface(_abi) as MockAggregatorV3Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockAggregatorV3 {
    return new Contract(address, _abi, signerOrProvider) as MockAggregatorV3;
  }
}
