/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type {
  Uint48L5ArrayTest,
  Uint48L5ArrayTestInterface,
} from '../Uint48L5ArrayTest';

const _abi = [
  {
    inputs: [
      {
        internalType: 'uint48',
        name: 'element',
        type: 'uint48',
      },
    ],
    name: 'U48L5_IllegalElement',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint48',
        name: 'element',
        type: 'uint48',
      },
    ],
    name: 'U48L5_NoSpaceLeftToInsert',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint48',
        name: 'element',
        type: 'uint48',
      },
    ],
    name: 'exclude',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint48',
        name: 'element',
        type: 'uint48',
      },
    ],
    name: 'exists',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint8',
        name: 'index',
        type: 'uint8',
      },
    ],
    name: 'getter',
    outputs: [
      {
        internalType: 'uint48',
        name: '',
        type: 'uint48',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getterAll',
    outputs: [
      {
        internalType: 'uint48[5]',
        name: '',
        type: 'uint48[5]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint48',
        name: 'element',
        type: 'uint48',
      },
    ],
    name: 'include',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'length',
    outputs: [
      {
        internalType: 'uint8',
        name: 'len',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'numberOfNonZeroElements',
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
  {
    inputs: [
      {
        internalType: 'uint8',
        name: 'index',
        type: 'uint8',
      },
      {
        internalType: 'uint48',
        name: 'element',
        type: 'uint48',
      },
    ],
    name: 'setter',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

const _bytecode =
  '0x608060405234801561001057600080fd5b5061098d806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80634c84b36e1161005b5780634c84b36e146100ec57806394d881cb14610116578063968cf6cf14610129578063b0825a631461013c57600080fd5b806304a2c3391461008d5780631f7b6d32146100a2578063296eaea2146100c15780633fc1d8ce146100d7575b600080fd5b6100a061009b3660046107ff565b61015f565b005b6100aa61016d565b60405160ff90911681526020015b60405180910390f35b6100c961021f565b6040519081526020016100b8565b6100df610230565b6040516100b89190610821565b6100ff6100fa36600461086b565b610299565b60405165ffffffffffff90911681526020016100b8565b6100a0610124366004610886565b6102d5565b6100a06101373660046107ff565b61031d565b61014f61014a3660046107ff565b610328565b60405190151581526020016100b8565b61016a60008261033a565b50565b6000805b600581101561021b576000816005811061018d5761018d6108b9565b600591828204019190066006029054906101000a900465ffffffffffff1665ffffffffffff166000146101c857816101c4816108e5565b9250505b600081600581106101db576101db6108b9565b600591828204019190066006029054906101000a900465ffffffffffff1665ffffffffffff166000031561021b578061021381610904565b915050610171565b5090565b600061022b6000610490565b905090565b6102386107c6565b6040805160a0810191829052906000906005908280855b82829054906101000a900465ffffffffffff1665ffffffffffff168152602001906006019060208260050104928301926001038202915080841161024f5790505050505050905090565b6000808260ff16600581106102b0576102b06108b9565b600591828204019190066006029054906101000a900465ffffffffffff169050919050565b8060008360ff16600581106102ec576102ec6108b9565b600591828204019190066006026101000a81548165ffffffffffff021916908365ffffffffffff1602179055505050565b61016a600082610506565b60006103348183610730565b92915050565b8065ffffffffffff1660000361036b5760405163c712b5e960e01b8152600060048201526024015b60405180910390fd5b600560005b600581101561041e578265ffffffffffff16848260058110610394576103946108b9565b600591828204019190066006029054906101000a900465ffffffffffff1665ffffffffffff16036103c55750505050565b60008482600581106103d9576103d96108b9565b600591828204019190066006029054906101000a900465ffffffffffff1665ffffffffffff160361040c5780915061041e565b8061041681610904565b915050610370565b50600419810161044b57604051635503aeb560e01b815265ffffffffffff83166004820152602401610362565b8183826005811061045e5761045e6108b9565b600591828204019190066006026101000a81548165ffffffffffff021916908365ffffffffffff160217905550505050565b6000805b600560ff821610156104fd57828160ff16600581106104b5576104b56108b9565b600591828204019190066006029054906101000a900465ffffffffffff1665ffffffffffff166000036104eb5760ff1692915050565b806104f5816108e5565b915050610494565b50600592915050565b8065ffffffffffff166000036105325760405163c712b5e960e01b815260006004820152602401610362565b600560005b60058110156105fc578265ffffffffffff1684826005811061055b5761055b6108b9565b600591828204019190066006029054906101000a900465ffffffffffff1665ffffffffffff160361058a578091505b83816005811061059c5761059c6108b9565b600591828204019190066006029054906101000a900465ffffffffffff1665ffffffffffff166000036105ea57600081116105d85760006105e3565b6105e360018261091d565b90506105fc565b806105f481610904565b915050610537565b6005811461060a578061061a565b61061660016005610934565b60ff165b90506005821461072a5781810361067157600084836005811061063f5761063f6108b9565b600591828204019190066006026101000a81548165ffffffffffff021916908365ffffffffffff16021790555061072a565b838160058110610683576106836108b9565b600591828204019190066006029054906101000a900465ffffffffffff1660008584600581106106b5576106b56108b9565b600591828204019190066006028785600581106106d4576106d46108b9565b600591828204019190066006028491906101000a81548165ffffffffffff021916908365ffffffffffff1602179055508391906101000a81548165ffffffffffff021916908365ffffffffffff16021790555050505b50505050565b6000600561073e848461074a565b60ff1614159392505050565b6000805b600560ff821610156107bc578265ffffffffffff16848260ff1660058110610778576107786108b9565b600591828204019190066006029054906101000a900465ffffffffffff1665ffffffffffff16036107aa579050610334565b806107b4816108e5565b91505061074e565b5060059392505050565b6040518060a001604052806005906020820280368337509192915050565b803565ffffffffffff811681146107fa57600080fd5b919050565b60006020828403121561081157600080fd5b61081a826107e4565b9392505050565b60a08101818360005b600581101561085157815165ffffffffffff1683526020928301929091019060010161082a565b50505092915050565b803560ff811681146107fa57600080fd5b60006020828403121561087d57600080fd5b61081a8261085a565b6000806040838503121561089957600080fd5b6108a28361085a565b91506108b0602084016107e4565b90509250929050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060ff821660ff81036108fb576108fb6108cf565b60010192915050565b600060018201610916576109166108cf565b5060010190565b60008282101561092f5761092f6108cf565b500390565b600060ff821660ff84168082101561094e5761094e6108cf565b9003939250505056fea26469706673582212208ec9b9e7227174a818bb52f1f2e996ca4a76ac038be21eb60c45d8cf0f5f2b1964736f6c634300080d0033';

type Uint48L5ArrayTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Uint48L5ArrayTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Uint48L5ArrayTest__factory extends ContractFactory {
  constructor(...args: Uint48L5ArrayTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = 'Uint48L5ArrayTest';
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Uint48L5ArrayTest> {
    return super.deploy(overrides || {}) as Promise<Uint48L5ArrayTest>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Uint48L5ArrayTest {
    return super.attach(address) as Uint48L5ArrayTest;
  }
  connect(signer: Signer): Uint48L5ArrayTest__factory {
    return super.connect(signer) as Uint48L5ArrayTest__factory;
  }
  static readonly contractName: 'Uint48L5ArrayTest';
  public readonly contractName: 'Uint48L5ArrayTest';
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Uint48L5ArrayTestInterface {
    return new utils.Interface(_abi) as Uint48L5ArrayTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Uint48L5ArrayTest {
    return new Contract(address, _abi, signerOrProvider) as Uint48L5ArrayTest;
  }
}
