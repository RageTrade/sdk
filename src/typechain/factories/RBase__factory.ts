/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { RBase, RBaseInterface } from '../RBase';

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
    stateMutability: 'pure',
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
        name: 'recipient',
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
        name: 'sender',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'recipient',
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
  '0x60806040523480156200001157600080fd5b506040805180820182526004808252635553444360e01b6020808401828152855180870190965292855284015281519192918391839162000055916005916200024a565b5080516200006b9060069060208401906200024a565b50506007805460ff191690555062000085600033620000e5565b620000b17f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a633620000e5565b620000dd7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a33620000e5565b50506200032d565b620000fc82826200012860201b620009e91760201c565b600082815260016020908152604090912062000123918390620009f362000138821b17901c565b505050565b62000134828262000158565b5050565b60006200014f836001600160a01b038416620001f8565b90505b92915050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff1662000134576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055620001b43390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000818152600183016020526040812054620002415750815460018181018455600084815260208082209093018490558454848252828601909352604090209190915562000152565b50600062000152565b8280546200025890620002f0565b90600052602060002090601f0160209004810192826200027c5760008555620002c7565b82601f106200029757805160ff1916838001178555620002c7565b82800160010185558215620002c7579182015b82811115620002c7578251825591602001919060010190620002aa565b50620002d5929150620002d9565b5090565b5b80821115620002d55760008155600101620002da565b600181811c908216806200030557607f821691505b602082108114156200032757634e487b7160e01b600052602260045260246000fd5b50919050565b611977806200033d6000396000f3fe608060405234801561001057600080fd5b50600436106101c45760003560e01c806370a08231116100f9578063a457c2d711610097578063d539139311610071578063d5391393146103af578063d547741f146103d6578063dd62ed3e146103e9578063e63ab1e91461042257600080fd5b8063a457c2d714610376578063a9059cbb14610389578063ca15c8731461039c57600080fd5b80639010d07c116100d35780639010d07c1461032857806391d148541461035357806395d89b4114610366578063a217fddf1461036e57600080fd5b806370a08231146102e457806379cc67901461030d5780638456cb591461032057600080fd5b8063313ce567116101665780633f4ba83a116101405780633f4ba83a146102ab57806340c10f19146102b357806342966c68146102c65780635c975abb146102d957600080fd5b8063313ce5671461027657806336568abe14610285578063395093511461029857600080fd5b806318160ddd116101a257806318160ddd1461021957806323b872dd1461022b578063248a9ca31461023e5780632f2ff15d1461026157600080fd5b806301ffc9a7146101c957806306fdde03146101f1578063095ea7b314610206575b600080fd5b6101dc6101d7366004611646565b610449565b60405190151581526020015b60405180910390f35b6101f9610474565b6040516101e8919061169c565b6101dc6102143660046116eb565b610506565b6004545b6040519081526020016101e8565b6101dc610239366004611715565b61051c565b61021d61024c366004611751565b60009081526020819052604090206001015490565b61027461026f36600461176a565b6105cb565b005b604051600681526020016101e8565b61027461029336600461176a565b6105f2565b6101dc6102a63660046116eb565b610614565b610274610650565b6102746102c13660046116eb565b6106f6565b6102746102d4366004611751565b610799565b60075460ff166101dc565b61021d6102f2366004611796565b6001600160a01b031660009081526002602052604090205490565b61027461031b3660046116eb565b6107a6565b610274610827565b61033b6103363660046117b1565b6108cb565b6040516001600160a01b0390911681526020016101e8565b6101dc61036136600461176a565b6108ea565b6101f9610913565b61021d600081565b6101dc6103843660046116eb565b610922565b6101dc6103973660046116eb565b6109bb565b61021d6103aa366004611751565b6109c8565b61021d7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b6102746103e436600461176a565b6109df565b61021d6103f73660046117d3565b6001600160a01b03918216600090815260036020908152604080832093909416825291909152205490565b61021d7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a81565b60006001600160e01b03198216635a05180f60e01b148061046e575061046e82610a08565b92915050565b606060058054610483906117fd565b80601f01602080910402602001604051908101604052809291908181526020018280546104af906117fd565b80156104fc5780601f106104d1576101008083540402835291602001916104fc565b820191906000526020600020905b8154815290600101906020018083116104df57829003601f168201915b5050505050905090565b6000610513338484610a3d565b50600192915050565b6000610529848484610b61565b6001600160a01b0384166000908152600360209081526040808320338452909152902054828110156105b35760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b6105c08533858403610a3d565b506001949350505050565b6105d58282610d3c565b60008281526001602052604090206105ed90826109f3565b505050565b6105fc8282610d62565b60008281526001602052604090206105ed9082610ddc565b3360008181526003602090815260408083206001600160a01b0387168452909152812054909161051391859061064b90869061184e565b610a3d565b61067a7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a336108ea565b6106ec5760405162461bcd60e51b815260206004820152603960248201527f45524332305072657365744d696e7465725061757365723a206d75737420686160448201527f76652070617573657220726f6c6520746f20756e70617573650000000000000060648201526084016105aa565b6106f4610df1565b565b6107207f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6336108ea565b61078b5760405162461bcd60e51b815260206004820152603660248201527f45524332305072657365744d696e7465725061757365723a206d7573742068616044820152751d99481b5a5b9d195c881c9bdb19481d1bc81b5a5b9d60521b60648201526084016105aa565b6107958282610e84565b5050565b6107a33382610f6f565b50565b60006107b283336103f7565b9050818110156108105760405162461bcd60e51b8152602060048201526024808201527f45524332303a206275726e20616d6f756e74206578636565647320616c6c6f77604482015263616e636560e01b60648201526084016105aa565b61081d8333848403610a3d565b6105ed8383610f6f565b6108517f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a336108ea565b6108c35760405162461bcd60e51b815260206004820152603760248201527f45524332305072657365744d696e7465725061757365723a206d75737420686160448201527f76652070617573657220726f6c6520746f20706175736500000000000000000060648201526084016105aa565b6106f46110c9565b60008281526001602052604081206108e39083611144565b9392505050565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b606060068054610483906117fd565b3360009081526003602090815260408083206001600160a01b0386168452909152812054828110156109a45760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016105aa565b6109b13385858403610a3d565b5060019392505050565b6000610513338484610b61565b600081815260016020526040812061046e90611150565b6105fc828261115a565b6107958282611180565b60006108e3836001600160a01b038416611204565b60006001600160e01b03198216637965db0b60e01b148061046e57506301ffc9a760e01b6001600160e01b031983161461046e565b6001600160a01b038316610a9f5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016105aa565b6001600160a01b038216610b005760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016105aa565b6001600160a01b0383811660008181526003602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b038316610bc55760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016105aa565b6001600160a01b038216610c275760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016105aa565b610c32838383611253565b6001600160a01b03831660009081526002602052604090205481811015610caa5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016105aa565b6001600160a01b03808516600090815260026020526040808220858503905591851681529081208054849290610ce190849061184e565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610d2d91815260200190565b60405180910390a35b50505050565b600082815260208190526040902060010154610d58813361125e565b6105ed8383611180565b6001600160a01b0381163314610dd25760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084016105aa565b61079582826112c2565b60006108e3836001600160a01b038416611327565b60075460ff16610e3a5760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b60448201526064016105aa565b6007805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b6001600160a01b038216610eda5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016105aa565b610ee660008383611253565b8060046000828254610ef8919061184e565b90915550506001600160a01b03821660009081526002602052604081208054839290610f2590849061184e565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b038216610fcf5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016105aa565b610fdb82600083611253565b6001600160a01b0382166000908152600260205260409020548181101561104f5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016105aa565b6001600160a01b038316600090815260026020526040812083830390556004805484929061107e908490611866565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b60075460ff161561110f5760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016105aa565b6007805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610e673390565b60006108e3838361141a565b600061046e825490565b600082815260208190526040902060010154611176813361125e565b6105ed83836112c2565b61118a82826108ea565b610795576000828152602081815260408083206001600160a01b03851684529091529020805460ff191660011790556111c03390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b600081815260018301602052604081205461124b5750815460018181018455600084815260208082209093018490558454848252828601909352604090209190915561046e565b50600061046e565b6105ed838383611444565b61126882826108ea565b61079557611280816001600160a01b031660146114aa565b61128b8360206114aa565b60405160200161129c92919061187d565b60408051601f198184030181529082905262461bcd60e51b82526105aa9160040161169c565b6112cc82826108ea565b15610795576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b6000818152600183016020526040812054801561141057600061134b600183611866565b855490915060009061135f90600190611866565b90508181146113c457600086600001828154811061137f5761137f6118f2565b90600052602060002001549050808760000184815481106113a2576113a26118f2565b6000918252602080832090910192909255918252600188019052604090208390555b85548690806113d5576113d5611908565b60019003818190600052602060002001600090559055856001016000868152602001908152602001600020600090556001935050505061046e565b600091505061046e565b6000826000018281548110611431576114316118f2565b9060005260206000200154905092915050565b60075460ff16156105ed5760405162461bcd60e51b815260206004820152602a60248201527f45524332305061757361626c653a20746f6b656e207472616e736665722077686044820152691a5b19481c185d5cd95960b21b60648201526084016105aa565b606060006114b983600261191e565b6114c490600261184e565b67ffffffffffffffff8111156114dc576114dc61193d565b6040519080825280601f01601f191660200182016040528015611506576020820181803683370190505b509050600360fc1b81600081518110611521576115216118f2565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110611550576115506118f2565b60200101906001600160f81b031916908160001a905350600061157484600261191e565b61157f90600161184e565b90505b60018111156115f7576f181899199a1a9b1b9c1cb0b131b232b360811b85600f16601081106115b3576115b36118f2565b1a60f81b8282815181106115c9576115c96118f2565b60200101906001600160f81b031916908160001a90535060049490941c936115f081611953565b9050611582565b5083156108e35760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016105aa565b60006020828403121561165857600080fd5b81356001600160e01b0319811681146108e357600080fd5b60005b8381101561168b578181015183820152602001611673565b83811115610d365750506000910152565b60208152600082518060208401526116bb816040850160208701611670565b601f01601f19169190910160400192915050565b80356001600160a01b03811681146116e657600080fd5b919050565b600080604083850312156116fe57600080fd5b611707836116cf565b946020939093013593505050565b60008060006060848603121561172a57600080fd5b611733846116cf565b9250611741602085016116cf565b9150604084013590509250925092565b60006020828403121561176357600080fd5b5035919050565b6000806040838503121561177d57600080fd5b8235915061178d602084016116cf565b90509250929050565b6000602082840312156117a857600080fd5b6108e3826116cf565b600080604083850312156117c457600080fd5b50508035926020909101359150565b600080604083850312156117e657600080fd5b6117ef836116cf565b915061178d602084016116cf565b600181811c9082168061181157607f821691505b6020821081141561183257634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b6000821982111561186157611861611838565b500190565b60008282101561187857611878611838565b500390565b7f416363657373436f6e74726f6c3a206163636f756e74200000000000000000008152600083516118b5816017850160208801611670565b7001034b99036b4b9b9b4b733903937b6329607d1b60179184019182015283516118e6816028840160208801611670565b01602801949350505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052603160045260246000fd5b600081600019048311821515161561193857611938611838565b500290565b634e487b7160e01b600052604160045260246000fd5b60008161196257611962611838565b50600019019056fea164736f6c634300080c000a';

type RBaseConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RBaseConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RBase__factory extends ContractFactory {
  constructor(...args: RBaseConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = 'RBase';
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RBase> {
    return super.deploy(overrides || {}) as Promise<RBase>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): RBase {
    return super.attach(address) as RBase;
  }
  connect(signer: Signer): RBase__factory {
    return super.connect(signer) as RBase__factory;
  }
  static readonly contractName: 'RBase';
  public readonly contractName: 'RBase';
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RBaseInterface {
    return new utils.Interface(_abi) as RBaseInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): RBase {
    return new Contract(address, _abi, signerOrProvider) as RBase;
  }
}
