/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type {
  GoodAddressDeployerTest,
  GoodAddressDeployerTestInterface,
} from '../GoodAddressDeployerTest';

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'val',
        type: 'address',
      },
    ],
    name: 'Address',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'bytecode',
        type: 'bytes',
      },
    ],
    name: 'deploy',
    outputs: [
      {
        internalType: 'address',
        name: 'computed',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'isAddressGood',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    stateMutability: 'payable',
    type: 'receive',
  },
];

const _bytecode =
  '0x608060405234801561001057600080fd5b506104f3806100206000396000f3fe60806040526004361061002d5760003560e01c806347823a671461003957806361ff715f1461006f57600080fd5b3661003457005b600080fd5b34801561004557600080fd5b5061005a610054366004610366565b50600090565b60405190151581526020015b60405180910390f35b34801561007b57600080fd5b5061008f61008a3660046103a5565b6100a7565b6040516001600160a01b039091168152602001610066565b60006100b683836100fb61016c565b6040516001600160a01b03821681529091507febfb412ded3f9cdb15b75308503b279416e74d382f6ce86eedee0ef3130fa9e39060200160405180910390a192915050565b6040516347823a6760e01b81526001600160a01b038216600482015260009030906347823a6790602401602060405180830381865afa158015610142573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101669190610460565b92915050565b600061018584848461017f600143610482565b4061018d565b949350505050565b825160208401206000905b6101a28382610200565b91506101b1828563ffffffff16565b156101bb576101c6565b600190920191610198565b60006101d387858861025f565b9050806001600160a01b0316836001600160a01b0316146101f6576101f66104a7565b5050949350505050565b604080516001600160f81b03196020808301919091526bffffffffffffffffffffffff193060601b16602183015260358201859052605580830185905283518084039091018152607590920190925280519101206000905b9392505050565b600080844710156102b75760405162461bcd60e51b815260206004820152601d60248201527f437265617465323a20696e73756666696369656e742062616c616e636500000060448201526064015b60405180910390fd5b82516103055760405162461bcd60e51b815260206004820181905260248201527f437265617465323a2062797465636f6465206c656e677468206973207a65726f60448201526064016102ae565b8383516020850187f590506001600160a01b0381166101855760405162461bcd60e51b815260206004820152601960248201527f437265617465323a204661696c6564206f6e206465706c6f790000000000000060448201526064016102ae565b60006020828403121561037857600080fd5b81356001600160a01b038116811461025857600080fd5b634e487b7160e01b600052604160045260246000fd5b600080604083850312156103b857600080fd5b82359150602083013567ffffffffffffffff808211156103d757600080fd5b818501915085601f8301126103eb57600080fd5b8135818111156103fd576103fd61038f565b604051601f8201601f19908116603f011681019083821181831017156104255761042561038f565b8160405282815288602084870101111561043e57600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b60006020828403121561047257600080fd5b8151801515811461025857600080fd5b6000828210156104a257634e487b7160e01b600052601160045260246000fd5b500390565b634e487b7160e01b600052600160045260246000fdfea2646970667358221220440b3e9ae234fe53ddc7a173ec43a59794ea25484cd9a29ccc81a8584c8f775864736f6c634300080c0033';

type GoodAddressDeployerTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GoodAddressDeployerTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GoodAddressDeployerTest__factory extends ContractFactory {
  constructor(...args: GoodAddressDeployerTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = 'GoodAddressDeployerTest';
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<GoodAddressDeployerTest> {
    return super.deploy(overrides || {}) as Promise<GoodAddressDeployerTest>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): GoodAddressDeployerTest {
    return super.attach(address) as GoodAddressDeployerTest;
  }
  connect(signer: Signer): GoodAddressDeployerTest__factory {
    return super.connect(signer) as GoodAddressDeployerTest__factory;
  }
  static readonly contractName: 'GoodAddressDeployerTest';
  public readonly contractName: 'GoodAddressDeployerTest';
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GoodAddressDeployerTestInterface {
    return new utils.Interface(_abi) as GoodAddressDeployerTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GoodAddressDeployerTest {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as GoodAddressDeployerTest;
  }
}
