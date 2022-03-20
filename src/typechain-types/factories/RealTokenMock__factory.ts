/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { RealTokenMock, RealTokenMockInterface } from '../RealTokenMock';

const _abi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
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
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'Paused',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'previousAdminRole',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'newAdminRole',
        type: 'bytes32',
      },
    ],
    name: 'RoleAdminChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
    ],
    name: 'RoleGranted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
    ],
    name: 'RoleRevoked',
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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'Unpaused',
    type: 'event',
  },
  {
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'MINTER_ROLE',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'PAUSER_ROLE',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
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
    name: 'burn',
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
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'burnFrom',
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
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
    ],
    name: 'getRoleAdmin',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
    ],
    name: 'getRoleMember',
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
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
    ],
    name: 'getRoleMemberCount',
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
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'hasRole',
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
        name: 'to',
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
    name: 'pause',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'paused',
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
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'interfaceId',
        type: 'bytes4',
      },
    ],
    name: 'supportsInterface',
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
    inputs: [],
    name: 'unpause',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

const _bytecode =
  '0x60806040523480156200001157600080fd5b506040805180820182526004808252630ae8aa8960e31b6020808401828152855180870190965292855284015281519192918391839162000055916005916200024a565b5080516200006b9060069060208401906200024a565b50506007805460ff191690555062000085600033620000e5565b620000b17f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a633620000e5565b620000dd7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a33620000e5565b50506200032c565b620000f18282620000f5565b5050565b6200010c82826200013860201b620009af1760201c565b60008281526001602090815260409091206200013391839062000a4d620001d8821b17901c565b505050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff16620000f1576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055620001943390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000620001ef836001600160a01b038416620001f8565b90505b92915050565b60008181526001830160205260408120546200024157508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155620001f2565b506000620001f2565b8280546200025890620002f0565b90600052602060002090601f0160209004810192826200027c5760008555620002c7565b82601f106200029757805160ff1916838001178555620002c7565b82800160010185558215620002c7579182015b82811115620002c7578251825591602001919060010190620002aa565b50620002d5929150620002d9565b5090565b5b80821115620002d55760008155600101620002da565b600181811c908216806200030557607f821691505b6020821081036200032657634e487b7160e01b600052602260045260246000fd5b50919050565b611b17806200033c6000396000f3fe608060405234801561001057600080fd5b50600436106101c45760003560e01c806370a08231116100f9578063a457c2d711610097578063d539139311610071578063d5391393146103d3578063d547741f146103fa578063dd62ed3e1461040d578063e63ab1e91461044657600080fd5b8063a457c2d71461039a578063a9059cbb146103ad578063ca15c873146103c057600080fd5b80639010d07c116100d35780639010d07c1461032857806391d148541461035357806395d89b411461038a578063a217fddf1461039257600080fd5b806370a08231146102e457806379cc67901461030d5780638456cb591461032057600080fd5b8063313ce567116101665780633f4ba83a116101405780633f4ba83a146102ab57806340c10f19146102b357806342966c68146102c65780635c975abb146102d957600080fd5b8063313ce5671461027657806336568abe14610285578063395093511461029857600080fd5b806318160ddd116101a257806318160ddd1461021957806323b872dd1461022b578063248a9ca31461023e5780632f2ff15d1461026157600080fd5b806301ffc9a7146101c957806306fdde03146101f1578063095ea7b314610206575b600080fd5b6101dc6101d73660046117b2565b61046d565b60405190151581526020015b60405180910390f35b6101f96104b1565b6040516101e89190611808565b6101dc610214366004611857565b610543565b6004545b6040519081526020016101e8565b6101dc610239366004611881565b61055b565b61021d61024c3660046118bd565b60009081526020819052604090206001015490565b61027461026f3660046118d6565b61057f565b005b604051601281526020016101e8565b6102746102933660046118d6565b6105aa565b6101dc6102a6366004611857565b61063b565b61027461067a565b6102746102c1366004611857565b610720565b6102746102d43660046118bd565b6107c6565b60075460ff166101dc565b61021d6102f2366004611902565b6001600160a01b031660009081526002602052604090205490565b61027461031b366004611857565b6107d3565b6102746107e8565b61033b61033636600461191d565b61088c565b6040516001600160a01b0390911681526020016101e8565b6101dc6103613660046118d6565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b6101f96108ab565b61021d600081565b6101dc6103a8366004611857565b6108ba565b6101dc6103bb366004611857565b610964565b61021d6103ce3660046118bd565b610972565b61021d7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b6102746104083660046118d6565b610989565b61021d61041b36600461193f565b6001600160a01b03918216600090815260036020908152604080832093909416825291909152205490565b61021d7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a81565b60006001600160e01b031982167f5a05180f0000000000000000000000000000000000000000000000000000000014806104ab57506104ab82610a62565b92915050565b6060600580546104c090611969565b80601f01602080910402602001604051908101604052809291908181526020018280546104ec90611969565b80156105395780601f1061050e57610100808354040283529160200191610539565b820191906000526020600020905b81548152906001019060200180831161051c57829003601f168201915b5050505050905090565b600033610551818585610ac9565b5060019392505050565b600033610569858285610c21565b610574858585610cb3565b506001949350505050565b60008281526020819052604090206001015461059b8133610ed5565b6105a58383610f53565b505050565b6001600160a01b038116331461062d5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c66000000000000000000000000000000000060648201526084015b60405180910390fd5b6106378282610f75565b5050565b3360008181526003602090815260408083206001600160a01b038716845290915281205490919061055190829086906106759087906119b9565b610ac9565b6106a47f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a33610361565b6107165760405162461bcd60e51b815260206004820152603960248201527f45524332305072657365744d696e7465725061757365723a206d75737420686160448201527f76652070617573657220726f6c6520746f20756e7061757365000000000000006064820152608401610624565b61071e610f97565b565b61074a7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a633610361565b6107bc5760405162461bcd60e51b815260206004820152603660248201527f45524332305072657365744d696e7465725061757365723a206d75737420686160448201527f7665206d696e74657220726f6c6520746f206d696e74000000000000000000006064820152608401610624565b6106378282611033565b6107d0338261111e565b50565b6107de823383610c21565b610637828261111e565b6108127f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a33610361565b6108845760405162461bcd60e51b815260206004820152603760248201527f45524332305072657365744d696e7465725061757365723a206d75737420686160448201527f76652070617573657220726f6c6520746f2070617573650000000000000000006064820152608401610624565b61071e6112af565b60008281526001602052604081206108a49083611337565b9392505050565b6060600680546104c090611969565b3360008181526003602090815260408083206001600160a01b0387168452909152812054909190838110156109575760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f0000000000000000000000000000000000000000000000000000006064820152608401610624565b6105748286868403610ac9565b600033610551818585610cb3565b60008181526001602052604081206104ab90611343565b6000828152602081905260409020600101546109a58133610ed5565b6105a58383610f75565b6000828152602081815260408083206001600160a01b038516845290915290205460ff16610637576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055610a093390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60006108a4836001600160a01b03841661134d565b60006001600160e01b031982167f7965db0b0000000000000000000000000000000000000000000000000000000014806104ab57507f01ffc9a7000000000000000000000000000000000000000000000000000000006001600160e01b03198316146104ab565b6001600160a01b038316610b445760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152608401610624565b6001600160a01b038216610bc05760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f73730000000000000000000000000000000000000000000000000000000000006064820152608401610624565b6001600160a01b0383811660008181526003602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b038381166000908152600360209081526040808320938616835292905220546000198114610cad5781811015610ca05760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610624565b610cad8484848403610ac9565b50505050565b6001600160a01b038316610d2f5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608401610624565b6001600160a01b038216610dab5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f65737300000000000000000000000000000000000000000000000000000000006064820152608401610624565b610db683838361139c565b6001600160a01b03831660009081526002602052604090205481811015610e455760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e636500000000000000000000000000000000000000000000000000006064820152608401610624565b6001600160a01b03808516600090815260026020526040808220858503905591851681529081208054849290610e7c9084906119b9565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610ec891815260200190565b60405180910390a3610cad565b6000828152602081815260408083206001600160a01b038516845290915290205460ff1661063757610f11816001600160a01b031660146113a7565b610f1c8360206113a7565b604051602001610f2d9291906119d1565b60408051601f198184030181529082905262461bcd60e51b825261062491600401611808565b610f5d82826109af565b60008281526001602052604090206105a59082610a4d565b610f7f8282611588565b60008281526001602052604090206105a59082611607565b60075460ff16610fe95760405162461bcd60e51b815260206004820152601460248201527f5061757361626c653a206e6f74207061757365640000000000000000000000006044820152606401610624565b6007805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b6001600160a01b0382166110895760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610624565b6110956000838361139c565b80600460008282546110a791906119b9565b90915550506001600160a01b038216600090815260026020526040812080548392906110d49084906119b9565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b03821661119a5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f73000000000000000000000000000000000000000000000000000000000000006064820152608401610624565b6111a68260008361139c565b6001600160a01b038216600090815260026020526040902054818110156112355760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f63650000000000000000000000000000000000000000000000000000000000006064820152608401610624565b6001600160a01b0383166000908152600260205260408120838303905560048054849290611264908490611a52565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b60075460ff16156113025760405162461bcd60e51b815260206004820152601060248201527f5061757361626c653a20706175736564000000000000000000000000000000006044820152606401610624565b6007805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586110163390565b60006108a4838361161c565b60006104ab825490565b6000818152600183016020526040812054611394575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556104ab565b5060006104ab565b6105a5838383611646565b606060006113b6836002611a69565b6113c19060026119b9565b67ffffffffffffffff8111156113d9576113d9611a88565b6040519080825280601f01601f191660200182016040528015611403576020820181803683370190505b5090507f30000000000000000000000000000000000000000000000000000000000000008160008151811061143a5761143a611a9e565b60200101906001600160f81b031916908160001a9053507f78000000000000000000000000000000000000000000000000000000000000008160018151811061148557611485611a9e565b60200101906001600160f81b031916908160001a90535060006114a9846002611a69565b6114b49060016119b9565b90505b6001811115611539577f303132333435363738396162636465660000000000000000000000000000000085600f16601081106114f5576114f5611a9e565b1a60f81b82828151811061150b5761150b611a9e565b60200101906001600160f81b031916908160001a90535060049490941c9361153281611ab4565b90506114b7565b5083156108a45760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610624565b6000828152602081815260408083206001600160a01b038516845290915290205460ff1615610637576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b60006108a4836001600160a01b0384166116bf565b600082600001828154811061163357611633611a9e565b9060005260206000200154905092915050565b60075460ff16156105a55760405162461bcd60e51b815260206004820152602a60248201527f45524332305061757361626c653a20746f6b656e207472616e7366657220776860448201527f696c6520706175736564000000000000000000000000000000000000000000006064820152608401610624565b600081815260018301602052604081205480156117a85760006116e3600183611a52565b85549091506000906116f790600190611a52565b905081811461175c57600086600001828154811061171757611717611a9e565b906000526020600020015490508087600001848154811061173a5761173a611a9e565b6000918252602080832090910192909255918252600188019052604090208390555b855486908061176d5761176d611acb565b6001900381819060005260206000200160009055905585600101600086815260200190815260200160002060009055600193505050506104ab565b60009150506104ab565b6000602082840312156117c457600080fd5b81356001600160e01b0319811681146108a457600080fd5b60005b838110156117f75781810151838201526020016117df565b83811115610cad5750506000910152565b60208152600082518060208401526118278160408501602087016117dc565b601f01601f19169190910160400192915050565b80356001600160a01b038116811461185257600080fd5b919050565b6000806040838503121561186a57600080fd5b6118738361183b565b946020939093013593505050565b60008060006060848603121561189657600080fd5b61189f8461183b565b92506118ad6020850161183b565b9150604084013590509250925092565b6000602082840312156118cf57600080fd5b5035919050565b600080604083850312156118e957600080fd5b823591506118f96020840161183b565b90509250929050565b60006020828403121561191457600080fd5b6108a48261183b565b6000806040838503121561193057600080fd5b50508035926020909101359150565b6000806040838503121561195257600080fd5b61195b8361183b565b91506118f96020840161183b565b600181811c9082168061197d57607f821691505b60208210810361199d57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b600082198211156119cc576119cc6119a3565b500190565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351611a098160178501602088016117dc565b7f206973206d697373696e6720726f6c65200000000000000000000000000000006017918401918201528351611a468160288401602088016117dc565b01602801949350505050565b600082821015611a6457611a646119a3565b500390565b6000816000190483118215151615611a8357611a836119a3565b500290565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b600081611ac357611ac36119a3565b506000190190565b634e487b7160e01b600052603160045260246000fdfea26469706673582212205fa24fdaf99d054ed566c4ceed8e1aae5ac13d6c4825a1f59758f14482efd5df64736f6c634300080d0033';

type RealTokenMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RealTokenMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RealTokenMock__factory extends ContractFactory {
  constructor(...args: RealTokenMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = 'RealTokenMock';
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RealTokenMock> {
    return super.deploy(overrides || {}) as Promise<RealTokenMock>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): RealTokenMock {
    return super.attach(address) as RealTokenMock;
  }
  connect(signer: Signer): RealTokenMock__factory {
    return super.connect(signer) as RealTokenMock__factory;
  }
  static readonly contractName: 'RealTokenMock';
  public readonly contractName: 'RealTokenMock';
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RealTokenMockInterface {
    return new utils.Interface(_abi) as RealTokenMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RealTokenMock {
    return new Contract(address, _abi, signerOrProvider) as RealTokenMock;
  }
}
