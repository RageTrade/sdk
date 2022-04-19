/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type {
  InsuranceFund,
  InsuranceFundInterface,
} from '../../../../../../@ragetrade/core/contracts/protocol/insurancefund/InsuranceFund';

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
    name: 'initialize',
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
  '0x608060405234801561001057600080fd5b50611502806100206000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c8063379607f5116100a257806395d89b411161007157806395d89b411461023a578063a457c2d714610242578063a9059cbb14610255578063b6b55f2514610268578063dd62ed3e1461027b57600080fd5b8063379607f5146101d857806339509351146101eb57806370a08231146101fe5780637b9e618d1461022757600080fd5b80632016a0d2116100de5780632016a0d21461018e57806323b872dd146101a35780632e1a7d4d146101b6578063313ce567146101c957600080fd5b806306fdde0314610110578063095ea7b31461012e5780630af968001461015157806318160ddd1461017c575b600080fd5b6101186102b4565b6040516101259190611191565b60405180910390f35b61014161013c3660046111d9565b610346565b6040519015158152602001610125565b606654610164906001600160a01b031681565b6040516001600160a01b039091168152602001610125565b6035545b604051908152602001610125565b6101a161019c36600461124e565b61035e565b005b6101416101b13660046112e3565b6104c3565b6101a16101c4366004611324565b6104e9565b60405160128152602001610125565b6101a16101e6366004611324565b6105a5565b6101416101f93660046111d9565b6105ea565b61018061020c36600461133d565b6001600160a01b031660009081526033602052604090205490565b606554610164906001600160a01b031681565b610118610629565b6101416102503660046111d9565b610638565b6101416102633660046111d9565b6106d5565b6101a1610276366004611324565b6106e3565b61018061028936600461135a565b6001600160a01b03918216600090815260346020908152604080832093909416825291909152205490565b6060603680546102c390611393565b80601f01602080910402602001604051908101604052809291908181526020018280546102ef90611393565b801561033c5780601f106103115761010080835404028352916020019161033c565b820191906000526020600020905b81548152906001019060200180831161031f57829003601f168201915b5050505050905090565b6000336103548185856107b2565b5060019392505050565b600054610100900460ff166103795760005460ff161561037d565b303b155b6103e55760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084015b60405180910390fd5b600054610100900460ff16158015610407576000805461ffff19166101011790555b606580546001600160a01b03808a166001600160a01b0319928316179092556066805492891692909116919091179055604080516020601f87018190048102820181019092528581526104a891879087908190840183828082843760009201919091525050604080516020601f890181900481028201810190925287815292508791508690819084018382808284376000920191909152506108d792505050565b80156104ba576000805461ff00191690555b50505050505050565b6000336104d185828561090c565b6104dc858585610998565b60019150505b9392505050565b6065546040516370a0823160e01b81523060048201526000916001600160a01b0316906370a0823190602401602060405180830381865afa158015610532573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061055691906113cd565b9050600061056360355490565b905060008161057284866113fc565b61057c919061141b565b90506105883385610b66565b60655461059f906001600160a01b03163383610cb1565b50505050565b6066546001600160a01b031633146105d057604051636bd1573560e11b815260040160405180910390fd5b6065546105e7906001600160a01b03163383610cb1565b50565b3360008181526034602090815260408083206001600160a01b0387168452909152812054909190610354908290869061062490879061143d565b6107b2565b6060603780546102c390611393565b3360008181526034602090815260408083206001600160a01b0387168452909152812054909190838110156106bd5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016103dc565b6106ca82868684036107b2565b506001949350505050565b600033610354818585610998565b6065546040516370a0823160e01b81523060048201526000916001600160a01b0316906370a0823190602401602060405180830381865afa15801561072c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061075091906113cd565b9050600061075d60355490565b9050600081158061076c575082155b15610778575082610790565b8261078383866113fc565b61078d919061141b565b90505b6065546107a8906001600160a01b0316333087610d14565b61059f3382610d4c565b6001600160a01b0383166108145760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103dc565b6001600160a01b0382166108755760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103dc565b6001600160a01b0383811660008181526034602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b600054610100900460ff166108fe5760405162461bcd60e51b81526004016103dc90611455565b6109088282610e2b565b5050565b6001600160a01b03838116600090815260346020908152604080832093861683529290522054600019811461059f578181101561098b5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016103dc565b61059f84848484036107b2565b6001600160a01b0383166109fc5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103dc565b6001600160a01b038216610a5e5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103dc565b6001600160a01b03831660009081526033602052604090205481811015610ad65760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016103dc565b6001600160a01b03808516600090815260336020526040808220858503905591851681529081208054849290610b0d90849061143d565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610b5991815260200190565b60405180910390a361059f565b6001600160a01b038216610bc65760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016103dc565b6001600160a01b03821660009081526033602052604090205481811015610c3a5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016103dc565b6001600160a01b0383166000908152603360205260408120838303905560358054849290610c699084906114a0565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906020016108ca565b505050565b6040516001600160a01b038316602482015260448101829052610cac90849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152610e79565b6040516001600160a01b038085166024830152831660448201526064810182905261059f9085906323b872dd60e01b90608401610cdd565b6001600160a01b038216610da25760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016103dc565b8060356000828254610db4919061143d565b90915550506001600160a01b03821660009081526033602052604081208054839290610de190849061143d565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b600054610100900460ff16610e525760405162461bcd60e51b81526004016103dc90611455565b8151610e659060369060208501906110cc565b508051610cac9060379060208401906110cc565b6000610ece826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316610f4b9092919063ffffffff16565b805190915015610cac5780806020019051810190610eec91906114b7565b610cac5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016103dc565b6060610f5a8484600085610f62565b949350505050565b606082471015610fc35760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016103dc565b6001600160a01b0385163b61101a5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016103dc565b600080866001600160a01b0316858760405161103691906114d9565b60006040518083038185875af1925050503d8060008114611073576040519150601f19603f3d011682016040523d82523d6000602084013e611078565b606091505b5091509150611088828286611093565b979650505050505050565b606083156110a25750816104e2565b8251156110b25782518084602001fd5b8160405162461bcd60e51b81526004016103dc9190611191565b8280546110d890611393565b90600052602060002090601f0160209004810192826110fa5760008555611140565b82601f1061111357805160ff1916838001178555611140565b82800160010185558215611140579182015b82811115611140578251825591602001919060010190611125565b5061114c929150611150565b5090565b5b8082111561114c5760008155600101611151565b60005b83811015611180578181015183820152602001611168565b8381111561059f5750506000910152565b60208152600082518060208401526111b0816040850160208701611165565b601f01601f19169190910160400192915050565b6001600160a01b03811681146105e757600080fd5b600080604083850312156111ec57600080fd5b82356111f7816111c4565b946020939093013593505050565b60008083601f84011261121757600080fd5b50813567ffffffffffffffff81111561122f57600080fd5b60208301915083602082850101111561124757600080fd5b9250929050565b6000806000806000806080878903121561126757600080fd5b8635611272816111c4565b95506020870135611282816111c4565b9450604087013567ffffffffffffffff8082111561129f57600080fd5b6112ab8a838b01611205565b909650945060608901359150808211156112c457600080fd5b506112d189828a01611205565b979a9699509497509295939492505050565b6000806000606084860312156112f857600080fd5b8335611303816111c4565b92506020840135611313816111c4565b929592945050506040919091013590565b60006020828403121561133657600080fd5b5035919050565b60006020828403121561134f57600080fd5b81356104e2816111c4565b6000806040838503121561136d57600080fd5b8235611378816111c4565b91506020830135611388816111c4565b809150509250929050565b600181811c908216806113a757607f821691505b6020821081036113c757634e487b7160e01b600052602260045260246000fd5b50919050565b6000602082840312156113df57600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615611416576114166113e6565b500290565b60008261143857634e487b7160e01b600052601260045260246000fd5b500490565b60008219821115611450576114506113e6565b500190565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b6000828210156114b2576114b26113e6565b500390565b6000602082840312156114c957600080fd5b815180151581146104e257600080fd5b600082516114eb818460208701611165565b919091019291505056fea164736f6c634300080d000a';

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
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<InsuranceFund> {
    return super.deploy(overrides || {}) as Promise<InsuranceFund>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): InsuranceFund {
    return super.attach(address) as InsuranceFund;
  }
  override connect(signer: Signer): InsuranceFund__factory {
    return super.connect(signer) as InsuranceFund__factory;
  }

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