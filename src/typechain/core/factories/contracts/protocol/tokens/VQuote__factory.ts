/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type {
  VQuote,
  VQuoteInterface,
} from '../../../../contracts/protocol/tokens/VQuote';

const _abi = [
  {
    inputs: [
      {
        internalType: 'uint8',
        name: 'decimals_',
        type: 'uint8',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'Unauthorised',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Approval',
    type: 'event',
  },
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
    ],
    name: 'allowance',
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
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'approve',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'vPoolWrapper',
        type: 'address',
      },
    ],
    name: 'authorize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'balanceOf',
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
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
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
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'subtractedValue',
        type: 'uint256',
      },
    ],
    name: 'decreaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'addedValue',
        type: 'uint256',
      },
    ],
    name: 'increaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
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
    name: 'isAuth',
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
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
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
    inputs: [],
    name: 'symbol',
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
    inputs: [],
    name: 'totalSupply',
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
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transfer',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transferFrom',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
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
];

const _bytecode =
  '0x60a06040523480156200001157600080fd5b506040516200113e3803806200113e8339810160408190526200003491620001d2565b604080518082018252601e81527f52616765205472616465205669727475616c2051756f746520546f6b656e00006020808301918252835180850190945260068452657651756f746560d01b90840152815191929162000097916003916200012c565b508051620000ad9060049060208401906200012c565b505050620000ca620000c4620000d660201b60201c565b620000da565b60ff166080526200023a565b3390565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b8280546200013a90620001fe565b90600052602060002090601f0160209004810192826200015e5760008555620001a9565b82601f106200017957805160ff1916838001178555620001a9565b82800160010185558215620001a9579182015b82811115620001a95782518255916020019190600101906200018c565b50620001b7929150620001bb565b5090565b5b80821115620001b75760008155600101620001bc565b600060208284031215620001e557600080fd5b815160ff81168114620001f757600080fd5b9392505050565b600181811c908216806200021357607f821691505b6020821081036200023457634e487b7160e01b600052602260045260246000fd5b50919050565b608051610ee86200025660003960006101ab0152610ee86000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c806370a08231116100a2578063a457c2d711610071578063a457c2d714610264578063a9059cbb14610277578063b6a5d7de1461028a578063dd62ed3e1461029d578063f2fde38b146102d657600080fd5b806370a0823114610210578063715018a6146102395780638da5cb5b1461024157806395d89b411461025c57600080fd5b80632520e7ff116100e95780632520e7ff14610181578063313ce567146101a457806339509351146101d557806340c10f19146101e857806342966c68146101fd57600080fd5b806306fdde031461011b578063095ea7b31461013957806318160ddd1461015c57806323b872dd1461016e575b600080fd5b6101236102e9565b6040516101309190610cb9565b60405180910390f35b61014c610147366004610d2a565b61037b565b6040519015158152602001610130565b6002545b604051908152602001610130565b61014c61017c366004610d54565b610393565b61014c61018f366004610d90565b60066020526000908152604090205460ff1681565b60405160ff7f0000000000000000000000000000000000000000000000000000000000000000168152602001610130565b61014c6101e3366004610d2a565b6103b7565b6101fb6101f6366004610d2a565b6103f6565b005b6101fb61020b366004610db2565b610434565b61016061021e366004610d90565b6001600160a01b031660009081526020819052604090205490565b6101fb610441565b6005546040516001600160a01b039091168152602001610130565b610123610480565b61014c610272366004610d2a565b61048f565b61014c610285366004610d2a565b610521565b6101fb610298366004610d90565b61052f565b6101606102ab366004610dcb565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6101fb6102e4366004610d90565b61057d565b6060600380546102f890610dfe565b80601f016020809104026020016040519081016040528092919081815260200182805461032490610dfe565b80156103715780601f1061034657610100808354040283529160200191610371565b820191906000526020600020905b81548152906001019060200180831161035457829003601f168201915b5050505050905090565b600033610389818585610615565b5060019392505050565b6000336103a185828561073a565b6103ac8585856107cc565b506001949350505050565b3360008181526001602090815260408083206001600160a01b038716845290915281205490919061038990829086906103f1908790610e4e565b610615565b3360009081526006602052604090205460ff1661042657604051636bd1573560e11b815260040160405180910390fd5b61043082826109a5565b5050565b61043e3382610a90565b50565b6005546001600160a01b031633146104745760405162461bcd60e51b815260040161046b90610e66565b60405180910390fd5b61047e6000610be7565b565b6060600480546102f890610dfe565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156105145760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b606482015260840161046b565b6103ac8286868403610615565b6000336103898185856107cc565b6005546001600160a01b031633146105595760405162461bcd60e51b815260040161046b90610e66565b6001600160a01b03166000908152600660205260409020805460ff19166001179055565b6005546001600160a01b031633146105a75760405162461bcd60e51b815260040161046b90610e66565b6001600160a01b03811661060c5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161046b565b61043e81610be7565b6001600160a01b0383166106775760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161046b565b6001600160a01b0382166106d85760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161046b565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383811660009081526001602090815260408083209386168352929052205460001981146107c657818110156107b95760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604482015260640161046b565b6107c68484848403610615565b50505050565b6001600160a01b0383166108305760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161046b565b6001600160a01b0382166108925760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161046b565b61089d838383610c39565b6001600160a01b038316600090815260208190526040902054818110156109155760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b606482015260840161046b565b6001600160a01b0380851660009081526020819052604080822085850390559185168152908120805484929061094c908490610e4e565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161099891815260200190565b60405180910390a36107c6565b6001600160a01b0382166109fb5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161046b565b610a0760008383610c39565b8060026000828254610a199190610e4e565b90915550506001600160a01b03821660009081526020819052604081208054839290610a46908490610e4e565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b038216610af05760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b606482015260840161046b565b610afc82600083610c39565b6001600160a01b03821660009081526020819052604090205481811015610b705760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b606482015260840161046b565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610b9f908490610e9b565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200161072d565b505050565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b0383161580610c5657506001600160a01b038216155b80610c7957506001600160a01b03831660009081526006602052604090205460ff165b80610c9c57506001600160a01b03821660009081526006602052604090205460ff165b610be257604051636bd1573560e11b815260040160405180910390fd5b600060208083528351808285015260005b81811015610ce657858101830151858201604001528201610cca565b81811115610cf8576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b0381168114610d2557600080fd5b919050565b60008060408385031215610d3d57600080fd5b610d4683610d0e565b946020939093013593505050565b600080600060608486031215610d6957600080fd5b610d7284610d0e565b9250610d8060208501610d0e565b9150604084013590509250925092565b600060208284031215610da257600080fd5b610dab82610d0e565b9392505050565b600060208284031215610dc457600080fd5b5035919050565b60008060408385031215610dde57600080fd5b610de783610d0e565b9150610df560208401610d0e565b90509250929050565b600181811c90821680610e1257607f821691505b602082108103610e3257634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610e6157610e61610e38565b500190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b600082821015610ead57610ead610e38565b50039056fea2646970667358221220a8349e4d96a3323dfeb040e78348af684e7e76a622e3927fadceab329210aa2a64736f6c634300080d0033';

type VQuoteConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VQuoteConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class VQuote__factory extends ContractFactory {
  constructor(...args: VQuoteConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    decimals_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<VQuote> {
    return super.deploy(decimals_, overrides || {}) as Promise<VQuote>;
  }
  override getDeployTransaction(
    decimals_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(decimals_, overrides || {});
  }
  override attach(address: string): VQuote {
    return super.attach(address) as VQuote;
  }
  override connect(signer: Signer): VQuote__factory {
    return super.connect(signer) as VQuote__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VQuoteInterface {
    return new utils.Interface(_abi) as VQuoteInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): VQuote {
    return new Contract(address, _abi, signerOrProvider) as VQuote;
  }
}
