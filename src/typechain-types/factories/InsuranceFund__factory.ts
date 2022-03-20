/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { InsuranceFund, InsuranceFundInterface } from '../InsuranceFund';

const _abi = [
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
        internalType: 'contract IERC20',
        name: '_settlementToken',
        type: 'address',
      },
      {
        internalType: 'contract IClearingHouse',
        name: '_clearingHouse',
        type: 'address',
      },
      {
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'symbol',
        type: 'string',
      },
    ],
    name: '__initialize_InsuranceFund',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
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
    name: 'claim',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'clearingHouse',
    outputs: [
      {
        internalType: 'contract IClearingHouse',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
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
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'deposit',
    outputs: [],
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
    name: 'settlementToken',
    outputs: [
      {
        internalType: 'contract IERC20',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
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
        internalType: 'uint256',
        name: 'shares',
        type: 'uint256',
      },
    ],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

const _bytecode =
  '0x608060405234801561001057600080fd5b5061170d806100206000396000f3fe608060405234801561001057600080fd5b506004361061011b5760003560e01c806339509351116100b257806395d89b4111610081578063a9059cbb11610066578063a9059cbb14610265578063b6b55f2514610278578063dd62ed3e1461028b57600080fd5b806395d89b411461024a578063a457c2d71461025257600080fd5b806339509351146101e857806370a08231146101fb57806373e0d44e146102245780637b9e618d1461023757600080fd5b806323b872dd116100ee57806323b872dd1461019e5780632e1a7d4d146101b1578063313ce567146101c6578063379607f5146101d557600080fd5b806306fdde0314610120578063095ea7b31461013e5780630af968001461016157806318160ddd1461018c575b600080fd5b6101286102c4565b60405161013591906113be565b60405180910390f35b61015161014c366004611406565b610356565b6040519015158152602001610135565b606654610174906001600160a01b031681565b6040516001600160a01b039091168152602001610135565b6035545b604051908152602001610135565b6101516101ac366004611432565b61036e565b6101c46101bf366004611473565b610394565b005b60405160128152602001610135565b6101c46101e3366004611473565b610450565b6101516101f6366004611406565b6104ae565b61019061020936600461148c565b6001600160a01b031660009081526033602052604090205490565b6101c46102323660046114f2565b6104ed565b606554610174906001600160a01b031681565b610128610679565b610151610260366004611406565b610688565b610151610273366004611406565b61073d565b6101c4610286366004611473565b61074b565b610190610299366004611587565b6001600160a01b03918216600090815260346020908152604080832093909416825291909152205490565b6060603680546102d3906115c0565b80601f01602080910402602001604051908101604052809291908181526020018280546102ff906115c0565b801561034c5780601f106103215761010080835404028352916020019161034c565b820191906000526020600020905b81548152906001019060200180831161032f57829003601f168201915b5050505050905090565b60003361036481858561081a565b5060019392505050565b60003361037c858285610973565b6103878585856109ff565b60019150505b9392505050565b6065546040516370a0823160e01b81523060048201526000916001600160a01b0316906370a0823190602401602060405180830381865afa1580156103dd573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061040191906115fa565b9050600061040e60355490565b905060008161041d8486611629565b6104279190611648565b90506104333385610c16565b60655461044a906001600160a01b03163383610d98565b50505050565b6066546001600160a01b03163314610494576040517fd7a2ae6a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6065546104ab906001600160a01b03163383610d98565b50565b3360008181526034602090815260408083206001600160a01b038716845290915281205490919061036490829086906104e890879061166a565b61081a565b600054610100900460ff166105085760005460ff161561050c565b303b155b6105835760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a656400000000000000000000000000000000000060648201526084015b60405180910390fd5b600054610100900460ff161580156105a5576000805461ffff19166101011790555b606580546001600160a01b03808a167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179092556066805492891692909116919091179055604080516020601f870181900481028201810190925285815261065e91879087908190840183828082843760009201919091525050604080516020601f89018190048102820181019092528781529250879150869081908401838280828437600092019190915250610e4192505050565b8015610670576000805461ff00191690555b50505050505050565b6060603780546102d3906115c0565b3360008181526034602090815260408083206001600160a01b0387168452909152812054909190838110156107255760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f000000000000000000000000000000000000000000000000000000606482015260840161057a565b610732828686840361081a565b506001949350505050565b6000336103648185856109ff565b6065546040516370a0823160e01b81523060048201526000916001600160a01b0316906370a0823190602401602060405180830381865afa158015610794573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107b891906115fa565b905060006107c560355490565b905060008115806107d4575082155b156107e05750826107f8565b826107eb8386611629565b6107f59190611648565b90505b606554610810906001600160a01b0316333087610eba565b61044a3382610f0b565b6001600160a01b0383166108955760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f7265737300000000000000000000000000000000000000000000000000000000606482015260840161057a565b6001600160a01b0382166109115760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f7373000000000000000000000000000000000000000000000000000000000000606482015260840161057a565b6001600160a01b0383811660008181526034602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b03838116600090815260346020908152604080832093861683529290522054600019811461044a57818110156109f25760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604482015260640161057a565b61044a848484840361081a565b6001600160a01b038316610a7b5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f6472657373000000000000000000000000000000000000000000000000000000606482015260840161057a565b6001600160a01b038216610af75760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f6573730000000000000000000000000000000000000000000000000000000000606482015260840161057a565b6001600160a01b03831660009081526033602052604090205481811015610b865760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e63650000000000000000000000000000000000000000000000000000606482015260840161057a565b6001600160a01b03808516600090815260336020526040808220858503905591851681529081208054849290610bbd90849061166a565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610c0991815260200190565b60405180910390a361044a565b6001600160a01b038216610c925760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f7300000000000000000000000000000000000000000000000000000000000000606482015260840161057a565b6001600160a01b03821660009081526033602052604090205481811015610d215760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f6365000000000000000000000000000000000000000000000000000000000000606482015260840161057a565b6001600160a01b0383166000908152603360205260408120838303905560358054849290610d50908490611682565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610966565b505050565b6040516001600160a01b038316602482015260448101829052610d939084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152610fea565b600054610100900460ff16610eac5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b606482015260840161057a565b610eb682826110cf565b5050565b6040516001600160a01b038085166024830152831660448201526064810182905261044a9085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401610ddd565b6001600160a01b038216610f615760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161057a565b8060356000828254610f73919061166a565b90915550506001600160a01b03821660009081526033602052604081208054839290610fa090849061166a565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b600061103f826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166111619092919063ffffffff16565b805190915015610d93578080602001905181019061105d9190611699565b610d935760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161057a565b600054610100900460ff1661113a5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b606482015260840161057a565b815161114d9060369060208501906112f9565b508051610d939060379060208401906112f9565b60606111708484600085611178565b949350505050565b6060824710156111f05760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161057a565b6001600160a01b0385163b6112475760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161057a565b600080866001600160a01b0316858760405161126391906116bb565b60006040518083038185875af1925050503d80600081146112a0576040519150601f19603f3d011682016040523d82523d6000602084013e6112a5565b606091505b50915091506112b58282866112c0565b979650505050505050565b606083156112cf57508161038d565b8251156112df5782518084602001fd5b8160405162461bcd60e51b815260040161057a91906113be565b828054611305906115c0565b90600052602060002090601f016020900481019282611327576000855561136d565b82601f1061134057805160ff191683800117855561136d565b8280016001018555821561136d579182015b8281111561136d578251825591602001919060010190611352565b5061137992915061137d565b5090565b5b80821115611379576000815560010161137e565b60005b838110156113ad578181015183820152602001611395565b8381111561044a5750506000910152565b60208152600082518060208401526113dd816040850160208701611392565b601f01601f19169190910160400192915050565b6001600160a01b03811681146104ab57600080fd5b6000806040838503121561141957600080fd5b8235611424816113f1565b946020939093013593505050565b60008060006060848603121561144757600080fd5b8335611452816113f1565b92506020840135611462816113f1565b929592945050506040919091013590565b60006020828403121561148557600080fd5b5035919050565b60006020828403121561149e57600080fd5b813561038d816113f1565b60008083601f8401126114bb57600080fd5b50813567ffffffffffffffff8111156114d357600080fd5b6020830191508360208285010111156114eb57600080fd5b9250929050565b6000806000806000806080878903121561150b57600080fd5b8635611516816113f1565b95506020870135611526816113f1565b9450604087013567ffffffffffffffff8082111561154357600080fd5b61154f8a838b016114a9565b9096509450606089013591508082111561156857600080fd5b5061157589828a016114a9565b979a9699509497509295939492505050565b6000806040838503121561159a57600080fd5b82356115a5816113f1565b915060208301356115b5816113f1565b809150509250929050565b600181811c908216806115d457607f821691505b6020821081036115f457634e487b7160e01b600052602260045260246000fd5b50919050565b60006020828403121561160c57600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b600081600019048311821515161561164357611643611613565b500290565b60008261166557634e487b7160e01b600052601260045260246000fd5b500490565b6000821982111561167d5761167d611613565b500190565b60008282101561169457611694611613565b500390565b6000602082840312156116ab57600080fd5b8151801515811461038d57600080fd5b600082516116cd818460208701611392565b919091019291505056fea2646970667358221220c6bf27015cc3dc0d8e8051627d742a0cba436b95069a4b7c2d4dd2ed7b31e08e64736f6c634300080d0033';

type InsuranceFundConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: InsuranceFundConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class InsuranceFund__factory extends ContractFactory {
  constructor(...args: InsuranceFundConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = 'InsuranceFund';
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<InsuranceFund> {
    return super.deploy(overrides || {}) as Promise<InsuranceFund>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): InsuranceFund {
    return super.attach(address) as InsuranceFund;
  }
  connect(signer: Signer): InsuranceFund__factory {
    return super.connect(signer) as InsuranceFund__factory;
  }
  static readonly contractName: 'InsuranceFund';
  public readonly contractName: 'InsuranceFund';
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): InsuranceFundInterface {
    return new utils.Interface(_abi) as InsuranceFundInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): InsuranceFund {
    return new Contract(address, _abi, signerOrProvider) as InsuranceFund;
  }
}
