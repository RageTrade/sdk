/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  Contract,
  ContractFactory,
  BigNumberish,
  ContractTransactionResponse,
  Interface,
  ContractDeployTransaction,
  ContractRunner,
} from 'ethers';
import type { NonPayableOverrides } from '../../../../../../common';
import type {
  VQuote,
  VQuoteInterface,
} from '../../../../../../@ragetrade/core/contracts/protocol/tokens/VQuote';

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
] as const;

const _bytecode =
  '0x60a06040523480156200001157600080fd5b5060405162001132380380620011328339810160408190526200003491620001d2565b604080518082018252601e81527f52616765205472616465205669727475616c2051756f746520546f6b656e00006020808301918252835180850190945260068452657651756f746560d01b90840152815191929162000097916003916200012c565b508051620000ad9060049060208401906200012c565b505050620000ca620000c4620000d660201b60201c565b620000da565b60ff166080526200023a565b3390565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b8280546200013a90620001fe565b90600052602060002090601f0160209004810192826200015e5760008555620001a9565b82601f106200017957805160ff1916838001178555620001a9565b82800160010185558215620001a9579182015b82811115620001a95782518255916020019190600101906200018c565b50620001b7929150620001bb565b5090565b5b80821115620001b75760008155600101620001bc565b600060208284031215620001e557600080fd5b815160ff81168114620001f757600080fd5b9392505050565b600181811c908216806200021357607f821691505b6020821081036200023457634e487b7160e01b600052602260045260246000fd5b50919050565b608051610edc6200025660003960006101ab0152610edc6000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c806370a08231116100a2578063a457c2d711610071578063a457c2d714610264578063a9059cbb14610277578063b6a5d7de1461028a578063dd62ed3e1461029d578063f2fde38b146102b057600080fd5b806370a0823114610210578063715018a6146102395780638da5cb5b1461024157806395d89b411461025c57600080fd5b80632520e7ff116100e95780632520e7ff14610181578063313ce567146101a457806339509351146101d557806340c10f19146101e857806342966c68146101fd57600080fd5b806306fdde031461011b578063095ea7b31461013957806318160ddd1461015c57806323b872dd1461016e575b600080fd5b6101236102c3565b6040516101309190610d0b565b60405180910390f35b61014c610147366004610d7c565b610355565b6040519015158152602001610130565b6002545b604051908152602001610130565b61014c61017c366004610da6565b61036d565b61014c61018f366004610de2565b60066020526000908152604090205460ff1681565b60405160ff7f0000000000000000000000000000000000000000000000000000000000000000168152602001610130565b61014c6101e3366004610d7c565b610391565b6101fb6101f6366004610d7c565b6103b3565b005b6101fb61020b366004610e04565b6103f1565b61016061021e366004610de2565b6001600160a01b031660009081526020819052604090205490565b6101fb6103fe565b6005546040516001600160a01b039091168152602001610130565b610123610469565b61014c610272366004610d7c565b610478565b61014c610285366004610d7c565b6104f3565b6101fb610298366004610de2565b610501565b6101606102ab366004610e1d565b61057f565b6101fb6102be366004610de2565b6105aa565b6060600380546102d290610e50565b80601f01602080910402602001604051908101604052809291908181526020018280546102fe90610e50565b801561034b5780601f106103205761010080835404028352916020019161034b565b820191906000526020600020905b81548152906001019060200180831161032e57829003601f168201915b5050505050905090565b600033610363818585610672565b5060019392505050565b60003361037b858285610797565b610386858585610811565b506001949350505050565b6000336103638185856103a4838361057f565b6103ae9190610ea0565b610672565b3360009081526006602052604090205460ff166103e357604051636bd1573560e11b815260040160405180910390fd5b6103ed82826109ea565b5050565b6103fb3382610ad5565b50565b6005546001600160a01b0316331461045d5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b6104676000610c2c565b565b6060600480546102d290610e50565b60003381610486828661057f565b9050838110156104e65760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610454565b6103868286868403610672565b600033610363818585610811565b6005546001600160a01b0316331461055b5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610454565b6001600160a01b03166000908152600660205260409020805460ff19166001179055565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6005546001600160a01b031633146106045760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610454565b6001600160a01b0381166106695760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610454565b6103fb81610c2c565b6001600160a01b0383166106d45760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610454565b6001600160a01b0382166107355760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610454565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b60006107a3848461057f565b9050600019811461080b57818110156107fe5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610454565b61080b8484848403610672565b50505050565b6001600160a01b0383166108755760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610454565b6001600160a01b0382166108d75760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610454565b6108e2838383610c8b565b6001600160a01b0383166000908152602081905260409020548181101561095a5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610454565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290610991908490610ea0565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516109dd91815260200190565b60405180910390a361080b565b6001600160a01b038216610a405760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610454565b610a4c60008383610c8b565b8060026000828254610a5e9190610ea0565b90915550506001600160a01b03821660009081526020819052604081208054839290610a8b908490610ea0565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b038216610b355760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610454565b610b4182600083610c8b565b6001600160a01b03821660009081526020819052604090205481811015610bb55760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610454565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610be4908490610eb8565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200161078a565b505050565b600580546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b0383161580610ca857506001600160a01b038216155b80610ccb57506001600160a01b03831660009081526006602052604090205460ff165b80610cee57506001600160a01b03821660009081526006602052604090205460ff165b610c2757604051636bd1573560e11b815260040160405180910390fd5b600060208083528351808285015260005b81811015610d3857858101830151858201604001528201610d1c565b81811115610d4a576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b0381168114610d7757600080fd5b919050565b60008060408385031215610d8f57600080fd5b610d9883610d60565b946020939093013593505050565b600080600060608486031215610dbb57600080fd5b610dc484610d60565b9250610dd260208501610d60565b9150604084013590509250925092565b600060208284031215610df457600080fd5b610dfd82610d60565b9392505050565b600060208284031215610e1657600080fd5b5035919050565b60008060408385031215610e3057600080fd5b610e3983610d60565b9150610e4760208401610d60565b90509250929050565b600181811c90821680610e6457607f821691505b602082108103610e8457634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610eb357610eb3610e8a565b500190565b600082821015610eca57610eca610e8a565b50039056fea164736f6c634300080e000a';

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

  override getDeployTransaction(
    decimals_: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(decimals_, overrides || {});
  }
  override deploy(
    decimals_: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(decimals_, overrides || {}) as Promise<
      VQuote & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): VQuote__factory {
    return super.connect(runner) as VQuote__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VQuoteInterface {
    return new Interface(_abi) as VQuoteInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): VQuote {
    return new Contract(address, _abi, runner) as unknown as VQuote;
  }
}
