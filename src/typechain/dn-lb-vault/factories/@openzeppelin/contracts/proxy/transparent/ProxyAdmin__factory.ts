/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type { PromiseOrValue } from '../../../../../common';
import type {
  ProxyAdmin,
  ProxyAdminInterface,
} from '../../../../../@openzeppelin/contracts/proxy/transparent/ProxyAdmin';

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'contract TransparentUpgradeableProxy',
        name: 'proxy',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'newAdmin',
        type: 'address',
      },
    ],
    name: 'changeProxyAdmin',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract TransparentUpgradeableProxy',
        name: 'proxy',
        type: 'address',
      },
    ],
    name: 'getProxyAdmin',
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
        internalType: 'contract TransparentUpgradeableProxy',
        name: 'proxy',
        type: 'address',
      },
    ],
    name: 'getProxyImplementation',
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
    name: 'owner',
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
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract TransparentUpgradeableProxy',
        name: 'proxy',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'implementation',
        type: 'address',
      },
    ],
    name: 'upgrade',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract TransparentUpgradeableProxy',
        name: 'proxy',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'implementation',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'upgradeAndCall',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
];

const _bytecode =
  '0x608060405234801561001057600080fd5b5061001a3361001f565b61006f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6106788061007e6000396000f3fe60806040526004361061007b5760003560e01c80639623609d1161004e5780639623609d1461011157806399a88ec414610124578063f2fde38b14610144578063f3b7dead1461016457600080fd5b8063204e1c7a14610080578063715018a6146100bc5780637eff275e146100d35780638da5cb5b146100f3575b600080fd5b34801561008c57600080fd5b506100a061009b3660046104a6565b610184565b6040516001600160a01b03909116815260200160405180910390f35b3480156100c857600080fd5b506100d1610215565b005b3480156100df57600080fd5b506100d16100ee3660046104ca565b610229565b3480156100ff57600080fd5b506000546001600160a01b03166100a0565b6100d161011f366004610519565b610291565b34801561013057600080fd5b506100d161013f3660046104ca565b610300565b34801561015057600080fd5b506100d161015f3660046104a6565b610336565b34801561017057600080fd5b506100a061017f3660046104a6565b6103b4565b6000806000836001600160a01b03166040516101aa90635c60da1b60e01b815260040190565b600060405180830381855afa9150503d80600081146101e5576040519150601f19603f3d011682016040523d82523d6000602084013e6101ea565b606091505b5091509150816101f957600080fd5b8080602001905181019061020d91906105ef565b949350505050565b61021d6103da565b6102276000610434565b565b6102316103da565b6040516308f2839760e41b81526001600160a01b038281166004830152831690638f283970906024015b600060405180830381600087803b15801561027557600080fd5b505af1158015610289573d6000803e3d6000fd5b505050505050565b6102996103da565b60405163278f794360e11b81526001600160a01b03841690634f1ef2869034906102c9908690869060040161060c565b6000604051808303818588803b1580156102e257600080fd5b505af11580156102f6573d6000803e3d6000fd5b5050505050505050565b6103086103da565b604051631b2ce7f360e11b81526001600160a01b038281166004830152831690633659cfe69060240161025b565b61033e6103da565b6001600160a01b0381166103a85760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b6103b181610434565b50565b6000806000836001600160a01b03166040516101aa906303e1469160e61b815260040190565b6000546001600160a01b031633146102275760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161039f565b600080546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b03811681146103b157600080fd5b6000602082840312156104b857600080fd5b81356104c381610491565b9392505050565b600080604083850312156104dd57600080fd5b82356104e881610491565b915060208301356104f881610491565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b60008060006060848603121561052e57600080fd5b833561053981610491565b9250602084013561054981610491565b9150604084013567ffffffffffffffff8082111561056657600080fd5b818601915086601f83011261057a57600080fd5b81358181111561058c5761058c610503565b604051601f8201601f19908116603f011681019083821181831017156105b4576105b4610503565b816040528281528960208487010111156105cd57600080fd5b8260208601602083013760006020848301015280955050505050509250925092565b60006020828403121561060157600080fd5b81516104c381610491565b6001600160a01b038316815260006020604081840152835180604085015260005b818110156106495785810183015185820160600152820161062d565b506000606082860101526060601f19601f83011685010192505050939250505056fea164736f6c6343000811000a';

type ProxyAdminConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ProxyAdminConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ProxyAdmin__factory extends ContractFactory {
  constructor(...args: ProxyAdminConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ProxyAdmin> {
    return super.deploy(overrides || {}) as Promise<ProxyAdmin>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ProxyAdmin {
    return super.attach(address) as ProxyAdmin;
  }
  override connect(signer: Signer): ProxyAdmin__factory {
    return super.connect(signer) as ProxyAdmin__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ProxyAdminInterface {
    return new utils.Interface(_abi) as ProxyAdminInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ProxyAdmin {
    return new Contract(address, _abi, signerOrProvider) as ProxyAdmin;
  }
}
