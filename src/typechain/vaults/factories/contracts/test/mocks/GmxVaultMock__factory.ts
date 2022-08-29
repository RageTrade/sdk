/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type {
  GmxVaultMock,
  GmxVaultMockInterface,
} from '../../../../contracts/test/mocks/GmxVaultMock';

const _abi = [
  {
    inputs: [
      {
        internalType: 'contract IGMXBatchingManager',
        name: '_batchingManager',
        type: 'address',
      },
      {
        internalType: 'contract IERC20',
        name: '_sGlp',
        type: 'address',
      },
    ],
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
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'receiver',
        type: 'address',
      },
    ],
    name: 'deposit',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'minUSDG',
        type: 'uint256',
      },
    ],
    name: 'depositToken',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
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
    inputs: [],
    name: 'grantAllowances',
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
  '0x60806040523480156200001157600080fd5b506040516200204538038062002045833981016040819052620000349162000366565b604080518082018252600980825268474d5853686172657360b81b602080840182815285518087019096529285528401528151919291839183916200007c91600591620002a7565b50805162000092906006906020840190620002a7565b50506007805460ff1916905550620000ac60003362000142565b620000d87f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a63362000142565b620001047f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a3362000142565b505060078054610100600160a81b0319166101006001600160a01b0394851602179055600880546001600160a01b03191691909216179055620003e1565b6200014e828262000152565b5050565b6200016982826200019560201b62000bf41760201c565b60008281526001602090815260409091206200019091839062000c9262000235821b17901c565b505050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff166200014e576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055620001f13390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60006200024c836001600160a01b03841662000255565b90505b92915050565b60008181526001830160205260408120546200029e575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556200024f565b5060006200024f565b828054620002b590620003a5565b90600052602060002090601f016020900481019282620002d9576000855562000324565b82601f10620002f457805160ff191683800117855562000324565b8280016001018555821562000324579182015b828111156200032457825182559160200191906001019062000307565b506200033292915062000336565b5090565b5b8082111562000332576000815560010162000337565b6001600160a01b03811681146200036357600080fd5b50565b600080604083850312156200037a57600080fd5b825162000387816200034d565b60208401519092506200039a816200034d565b809150509250929050565b600181811c90821680620003ba57607f821691505b602082108103620003db57634e487b7160e01b600052602260045260246000fd5b50919050565b611c5480620003f16000396000f3fe608060405234801561001057600080fd5b50600436106101e55760003560e01c806370a082311161010f578063a457c2d7116100a2578063d539139311610071578063d539139314610422578063d547741f14610449578063dd62ed3e1461045c578063e63ab1e91461049557600080fd5b8063a457c2d7146103e1578063a9059cbb146103f4578063bf9571f114610407578063ca15c8731461040f57600080fd5b806391d14854116100de57806391d148541461038757806395d89b41146103be57806399c6d2de146103c6578063a217fddf146103d957600080fd5b806370a082311461031857806379cc6790146103415780638456cb59146103545780639010d07c1461035c57600080fd5b8063313ce5671161018757806340c10f191161015657806340c10f19146102d457806342966c68146102e75780635c975abb146102fa5780636e553f651461030557600080fd5b8063313ce5671461029757806336568abe146102a657806339509351146102b95780633f4ba83a146102cc57600080fd5b806318160ddd116101c357806318160ddd1461023a57806323b872dd1461024c578063248a9ca31461025f5780632f2ff15d1461028257600080fd5b806301ffc9a7146101ea57806306fdde0314610212578063095ea7b314610227575b600080fd5b6101fd6101f83660046118b6565b6104bc565b60405190151581526020015b60405180910390f35b61021a6104e7565b604051610209919061190c565b6101fd61023536600461195b565b610579565b6004545b604051908152602001610209565b6101fd61025a366004611985565b610591565b61023e61026d3660046119c1565b60009081526020819052604090206001015490565b6102956102903660046119da565b6105b5565b005b60405160128152602001610209565b6102956102b43660046119da565b6105df565b6101fd6102c736600461195b565b610662565b6102956106a1565b6102956102e236600461195b565b610747565b6102956102f53660046119c1565b6107ed565b60075460ff166101fd565b61023e6103133660046119da565b6107fa565b61023e610326366004611a06565b6001600160a01b031660009081526002602052604090205490565b61029561034f36600461195b565b610888565b61029561089d565b61036f61036a366004611a21565b610941565b6040516001600160a01b039091168152602001610209565b6101fd6103953660046119da565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b61021a610960565b61023e6103d4366004611a43565b61096f565b61023e600081565b6101fd6103ef36600461195b565b6109fb565b6101fd61040236600461195b565b610a8d565b610295610a9b565b61023e61041d3660046119c1565b610bb8565b61023e7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b6102956104573660046119da565b610bcf565b61023e61046a366004611a76565b6001600160a01b03918216600090815260036020908152604080832093909416825291909152205490565b61023e7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a81565b60006001600160e01b03198216635a05180f60e01b14806104e157506104e182610ca7565b92915050565b6060600580546104f690611aa0565b80601f016020809104026020016040519081016040528092919081815260200182805461052290611aa0565b801561056f5780601f106105445761010080835404028352916020019161056f565b820191906000526020600020905b81548152906001019060200180831161055257829003601f168201915b5050505050905090565b600033610587818585610cdc565b5060019392505050565b60003361059f858285610e00565b6105aa858585610e92565b506001949350505050565b6000828152602081905260409020600101546105d08161106b565b6105da8383611075565b505050565b6001600160a01b03811633146106545760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b61065e8282611097565b5050565b3360008181526003602090815260408083206001600160a01b0387168452909152812054909190610587908290869061069c908790611af0565b610cdc565b6106cb7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a33610395565b61073d5760405162461bcd60e51b815260206004820152603960248201527f45524332305072657365744d696e7465725061757365723a206d75737420686160448201527f76652070617573657220726f6c6520746f20756e706175736500000000000000606482015260840161064b565b6107456110b9565b565b6107717f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a633610395565b6107e35760405162461bcd60e51b815260206004820152603660248201527f45524332305072657365744d696e7465725061757365723a206d75737420686160448201527f7665206d696e74657220726f6c6520746f206d696e7400000000000000000000606482015260840161064b565b61065e8282611155565b6107f73382611240565b50565b6008546040516323b872dd60e01b8152336004820152306024820152604481018490526000916001600160a01b0316906323b872dd906064016020604051808303816000875af1158015610852573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108769190611b08565b506108818284611155565b5090919050565b610893823383610e00565b61065e8282611240565b6108c77f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a33610395565b6109395760405162461bcd60e51b815260206004820152603760248201527f45524332305072657365744d696e7465725061757365723a206d75737420686160448201527f76652070617573657220726f6c6520746f207061757365000000000000000000606482015260840161064b565b61074561139a565b60008281526001602052604081206109599083611415565b9392505050565b6060600680546104f690611aa0565b600754604051634ce3696f60e11b81526001600160a01b0385811660048301526024820185905260448201849052600092610100900416906399c6d2de906064016020604051808303816000875af11580156109cf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109f39190611b2a565b949350505050565b3360008181526003602090815260408083206001600160a01b038716845290915281205490919083811015610a805760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b606482015260840161064b565b6105aa8286868403610cdc565b600033610587818585610e92565b60075460405163095ea7b360e01b81526101009091046001600160a01b0316600482015260001960248201527382af49447d8a07e3bd95bd0d56f35241523fbab19063095ea7b3906044016020604051808303816000875af1158015610b05573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b299190611b08565b5060075460405163095ea7b360e01b81526101009091046001600160a01b03166004820152600019602482015273ff970a61a04b1ca14834a43f5de4533ebddb5cc89063095ea7b3906044016020604051808303816000875af1158015610b94573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107f79190611b08565b60008181526001602052604081206104e190611421565b600082815260208190526040902060010154610bea8161106b565b6105da8383611097565b6000828152602081815260408083206001600160a01b038516845290915290205460ff1661065e576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055610c4e3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000610959836001600160a01b03841661142b565b60006001600160e01b03198216637965db0b60e01b14806104e157506301ffc9a760e01b6001600160e01b03198316146104e1565b6001600160a01b038316610d3e5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161064b565b6001600160a01b038216610d9f5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161064b565b6001600160a01b0383811660008181526003602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b038381166000908152600360209081526040808320938616835292905220546000198114610e8c5781811015610e7f5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604482015260640161064b565b610e8c8484848403610cdc565b50505050565b6001600160a01b038316610ef65760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161064b565b6001600160a01b038216610f585760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161064b565b610f6383838361147a565b6001600160a01b03831660009081526002602052604090205481811015610fdb5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b606482015260840161064b565b6001600160a01b03808516600090815260026020526040808220858503905591851681529081208054849290611012908490611af0565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161105e91815260200190565b60405180910390a3610e8c565b6107f78133611485565b61107f8282610bf4565b60008281526001602052604090206105da9082610c92565b6110a18282611503565b60008281526001602052604090206105da9082611582565b60075460ff1661110b5760405162461bcd60e51b815260206004820152601460248201527f5061757361626c653a206e6f7420706175736564000000000000000000000000604482015260640161064b565b6007805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b6001600160a01b0382166111ab5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161064b565b6111b76000838361147a565b80600460008282546111c99190611af0565b90915550506001600160a01b038216600090815260026020526040812080548392906111f6908490611af0565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b0382166112a05760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b606482015260840161064b565b6112ac8260008361147a565b6001600160a01b038216600090815260026020526040902054818110156113205760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b606482015260840161064b565b6001600160a01b038316600090815260026020526040812083830390556004805484929061134f908490611b43565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b60075460ff16156113e05760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015260640161064b565b6007805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586111383390565b60006109598383611597565b60006104e1825490565b6000818152600183016020526040812054611472575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556104e1565b5060006104e1565b6105da8383836115c1565b6000828152602081815260408083206001600160a01b038516845290915290205460ff1661065e576114c1816001600160a01b03166014611627565b6114cc836020611627565b6040516020016114dd929190611b5a565b60408051601f198184030181529082905262461bcd60e51b825261064b9160040161190c565b6000828152602081815260408083206001600160a01b038516845290915290205460ff161561065e576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b6000610959836001600160a01b0384166117c3565b60008260000182815481106115ae576115ae611bcf565b9060005260206000200154905092915050565b60075460ff16156105da5760405162461bcd60e51b815260206004820152602a60248201527f45524332305061757361626c653a20746f6b656e207472616e736665722077686044820152691a5b19481c185d5cd95960b21b606482015260840161064b565b60606000611636836002611be5565b611641906002611af0565b67ffffffffffffffff81111561165957611659611c04565b6040519080825280601f01601f191660200182016040528015611683576020820181803683370190505b509050600360fc1b8160008151811061169e5761169e611bcf565b60200101906001600160f81b031916908160001a905350600f60fb1b816001815181106116cd576116cd611bcf565b60200101906001600160f81b031916908160001a90535060006116f1846002611be5565b6116fc906001611af0565b90505b6001811115611774576f181899199a1a9b1b9c1cb0b131b232b360811b85600f166010811061173057611730611bcf565b1a60f81b82828151811061174657611746611bcf565b60200101906001600160f81b031916908160001a90535060049490941c9361176d81611c1a565b90506116ff565b5083156109595760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604482015260640161064b565b600081815260018301602052604081205480156118ac5760006117e7600183611b43565b85549091506000906117fb90600190611b43565b905081811461186057600086600001828154811061181b5761181b611bcf565b906000526020600020015490508087600001848154811061183e5761183e611bcf565b6000918252602080832090910192909255918252600188019052604090208390555b855486908061187157611871611c31565b6001900381819060005260206000200160009055905585600101600086815260200190815260200160002060009055600193505050506104e1565b60009150506104e1565b6000602082840312156118c857600080fd5b81356001600160e01b03198116811461095957600080fd5b60005b838110156118fb5781810151838201526020016118e3565b83811115610e8c5750506000910152565b602081526000825180602084015261192b8160408501602087016118e0565b601f01601f19169190910160400192915050565b80356001600160a01b038116811461195657600080fd5b919050565b6000806040838503121561196e57600080fd5b6119778361193f565b946020939093013593505050565b60008060006060848603121561199a57600080fd5b6119a38461193f565b92506119b16020850161193f565b9150604084013590509250925092565b6000602082840312156119d357600080fd5b5035919050565b600080604083850312156119ed57600080fd5b823591506119fd6020840161193f565b90509250929050565b600060208284031215611a1857600080fd5b6109598261193f565b60008060408385031215611a3457600080fd5b50508035926020909101359150565b600080600060608486031215611a5857600080fd5b611a618461193f565b95602085013595506040909401359392505050565b60008060408385031215611a8957600080fd5b611a928361193f565b91506119fd6020840161193f565b600181811c90821680611ab457607f821691505b602082108103611ad457634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115611b0357611b03611ada565b500190565b600060208284031215611b1a57600080fd5b8151801515811461095957600080fd5b600060208284031215611b3c57600080fd5b5051919050565b600082821015611b5557611b55611ada565b500390565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351611b928160178501602088016118e0565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351611bc38160288401602088016118e0565b01602801949350505050565b634e487b7160e01b600052603260045260246000fd5b6000816000190483118215151615611bff57611bff611ada565b500290565b634e487b7160e01b600052604160045260246000fd5b600081611c2957611c29611ada565b506000190190565b634e487b7160e01b600052603160045260246000fdfea164736f6c634300080e000a';

type GmxVaultMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GmxVaultMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GmxVaultMock__factory extends ContractFactory {
  constructor(...args: GmxVaultMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _batchingManager: string,
    _sGlp: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<GmxVaultMock> {
    return super.deploy(
      _batchingManager,
      _sGlp,
      overrides || {}
    ) as Promise<GmxVaultMock>;
  }
  override getDeployTransaction(
    _batchingManager: string,
    _sGlp: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_batchingManager, _sGlp, overrides || {});
  }
  override attach(address: string): GmxVaultMock {
    return super.attach(address) as GmxVaultMock;
  }
  override connect(signer: Signer): GmxVaultMock__factory {
    return super.connect(signer) as GmxVaultMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GmxVaultMockInterface {
    return new utils.Interface(_abi) as GmxVaultMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GmxVaultMock {
    return new Contract(address, _abi, signerOrProvider) as GmxVaultMock;
  }
}