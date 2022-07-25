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
  RealTokenMockDecimals,
  RealTokenMockDecimalsInterface,
} from '../../../../../contracts/test/mocks/RealTokenMock1.sol/RealTokenMockDecimals';

const _abi = [
  {
    inputs: [
      {
        internalType: 'uint8',
        name: 'decimalsToSet',
        type: 'uint8',
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
  '0x60a060405234620001b6576200246080380390816200001e81620001d2565b9283928339602092839181010312620001b657519060ff82168203620001b6576200004862000207565b906200005362000207565b825190916001600160401b038211620001a6575b6200007f826200007960055462000249565b62000286565b80601f83116001146200011157508190620000b89460009262000105575b50508160011b916000199060031b1c19161760055562000338565b620000c860ff1960075416600755565b620000d3336200043c565b620000de33620004f2565b620000e933620005c8565b608052604051611d839081620006bd8239608051816106950152f35b0151905038806200009d565b60056000529293919291601f1984167f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db0936000905b8282106200018d575050916001939185620000b89796941062000173575b505050811b0160055562000338565b015160001960f88460031b161c1916905538808062000164565b8060018697829497870151815501960194019062000146565b620001b0620001bb565b62000067565b600080fd5b50634e487b7160e01b600052604160045260246000fd5b6040519190601f01601f191682016001600160401b03811183821017620001f857604052565b62000202620001bb565b604052565b60408051919082016001600160401b0381118382101762000239575b60405260048252630ae8aa8960e31b6020830152565b62000243620001bb565b62000223565b90600182811c921680156200027b575b60208310146200026557565b634e487b7160e01b600052602260045260246000fd5b91607f169162000259565b601f811162000293575050565b6000906005825260208220906020601f850160051c83019410620002d4575b601f0160051c01915b828110620002c857505050565b818155600101620002bb565b9092508290620002b2565b601f8111620002ec575050565b6000906006825260208220906020601f850160051c830194106200032d575b601f0160051c01915b8281106200032157505050565b81815560010162000314565b90925082906200030b565b80519091906001600160401b0381116200042c575b62000365816200035f60065462000249565b620002df565b602080601f8311600114620003a4575081929360009262000398575b50508160011b916000199060031b1c191617600655565b01519050388062000381565b6006600052601f198316949091907ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f926000905b87821062000413575050836001959610620003f9575b505050811b01600655565b015160001960f88460031b161c19169055388080620003ee565b80600185968294968601518155019501930190620003d8565b62000436620001bb565b6200034d565b6001600160a01b03811660009081527fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5602052604080822054620004a193929060ff1615620004a4575b8080526001602052206001600160a01b039091169062000632565b50565b80805260208181528282206001600160a01b03851660008181529190925260409020805460ff191660011790558251339190839060008051602062002440833981519152908290a462000486565b6001600160a01b03811660009081527f0781d7cac9c378efa22a7481e4d4d29704a680ddf504b3bc50b517700ee11e6c6020526040808220620004a19392907f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a69060ff905b5416156200057a575b81526001602052206001600160a01b039091169062000632565b80825260208281528383206001600160a01b03861660008181529190925260409020805460ff191660011790558351339190839060008051602062002440833981519152908690a462000560565b6001600160a01b03811660009081527ff7c9542c591017a21c74b6f3fab6263c7952fc0aaf9db4c22a2a04ddc7f8674f6020526040808220620004a19392907f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a9060ff9062000557565b91906001830160009082825280602052604082205415600014620006b65784549468010000000000000000861015620006a6575b600186018082558610156200069257836040949596828552602085200155549382526020522055600190565b634e487b7160e01b83526032600452602483fd5b620006b0620001bb565b62000666565b5092505056fe60806040526004361015610013575b600080fd5b60003560e01c806301ffc9a71461024357806306fdde031461023a578063095ea7b31461023157806318160ddd1461022857806323b872dd1461021f578063248a9ca3146102165780632f2ff15d1461020d578063313ce5671461020457806336568abe146101fb57806339509351146101f25780633f4ba83a146101e957806340c10f19146101e057806342966c68146101d75780635c975abb146101ce57806370a08231146101c557806379cc6790146101bc5780638456cb59146101b35780639010d07c146101aa57806391d14854146101a157806395d89b4114610198578063a217fddf1461018f578063a457c2d714610186578063a9059cbb1461017d578063ca15c87314610174578063d53913931461016b578063d547741f14610162578063dd62ed3e146101595763e63ab1e91461015157600080fd5b61000e61103d565b5061000e610fdf565b5061000e610f9d565b5061000e610f61565b5061000e610f34565b5061000e610f0d565b5061000e610e3a565b5061000e610e1d565b5061000e610d59565b5061000e610d05565b5061000e610cbe565b5061000e610b68565b5061000e610b37565b5061000e610afc565b5061000e610ad8565b5061000e610aba565b5061000e610908565b5061000e6107b5565b5061000e61075b565b5061000e6106b9565b5061000e61067a565b5061000e610580565b5061000e610550565b5061000e610517565b5061000e6104f8565b5061000e6104c6565b5061000e610379565b503461000e57602060031936011261000e576004357fffffffff00000000000000000000000000000000000000000000000000000000811680910361000e57807f5a05180f00000000000000000000000000000000000000000000000000000000602092149081156102bb575b506040519015158152f35b7f7965db0b000000000000000000000000000000000000000000000000000000008114915081156102ee575b50386102b0565b7f01ffc9a700000000000000000000000000000000000000000000000000000000915014386102e7565b918091926000905b828210610338575011610331575050565b6000910152565b91508060209183015181860152018291610320565b601f19601f604093602084526103728151809281602088015260208888019101610318565b0116010190565b503461000e576000806003193601126104975760405190806005549060019180831c9280821692831561048d575b602092838610851461046057858852602088019490811561044457506001146103eb575b6103e7876103db818903826110c0565b6040519182918261034d565b0390f35b600560005294509192917f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db05b83861061043357505050910190506103db826103e738806103cb565b805485870152948201948101610417565b60ff191685525050500191506103db9050826103e738806103cb565b6024827f4e487b710000000000000000000000000000000000000000000000000000000081526022600452fd5b93607f16936103a7565b80fd5b600435906001600160a01b038216820361000e57565b602435906001600160a01b038216820361000e57565b503461000e57604060031936011261000e576104ed6104e361049a565b6024359033611585565b602060405160018152f35b503461000e57600060031936011261000e576020600454604051908152f35b503461000e57606060031936011261000e576104ed61053461049a565b61053c6104b0565b6044359161054b8333836116e4565b611442565b503461000e57602060031936011261000e5760043560005260006020526020600160406000200154604051908152f35b503461000e5760408060031936011261000e57600435906106046105a26104b0565b6105ff600094808652856020526105c06001868820015433906110f0565b8086528560205260ff6105e884878920906001600160a01b0316600052602052604060002090565b541615610608576000526001602052604060002090565b611b46565b5051f35b8086528560205261062e83868820906001600160a01b0316600052602052604060002090565b600160ff19825416179055336001600160a01b038416827f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d898951a46000526001602052604060002090565b503461000e57600060031936011261000e57602060405160ff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b503461000e57604060031936011261000e576106d36104b0565b336001600160a01b038216036106f1576106ef9060043561126b565b005b608460405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c6600000000000000000000000000000000006064820152fd5b503461000e57604060031936011261000e576104ed61077861049a565b3360005260036020526107ae6024356107a8836040600020906001600160a01b0316600052602052604060002090565b5461134c565b9033611585565b503461000e57600080600319360112610497577f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a81528060205260ff6108113360408420906001600160a01b0316600052602052604060002090565b54161561089e5760075460ff81161561085a5760ff19166007557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa6020604051338152a1604051f35b606460405162461bcd60e51b815260206004820152601460248201527f5061757361626c653a206e6f74207061757365640000000000000000000000006044820152fd5b608460405162461bcd60e51b815260206004820152603960248201527f45524332305072657365744d696e7465725061757365723a206d75737420686160448201527f76652070617573657220726f6c6520746f20756e7061757365000000000000006064820152fd5b503461000e5760408060031936011261000e5761092361049a565b90602435917f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6600052600060205260ff6109733384600020906001600160a01b0316600052602052604060002090565b541615610a51576001600160a01b038116908115610a0e577fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef610a086000956109ec87946109bf61190b565b6109d36109ce8460045461134c565b600455565b6001600160a01b03166000526002602052604060002090565b6109f782825461134c565b905585519081529081906020820190565b0390a351f35b6064835162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152fd5b6084825162461bcd60e51b815260206004820152603660248201527f45524332305072657365744d696e7465725061757365723a206d75737420686160448201527f7665206d696e74657220726f6c6520746f206d696e74000000000000000000006064820152fd5b503461000e57602060031936011261000e576106ef60043533611811565b503461000e57600060031936011261000e57602060ff600754166040519015158152f35b503461000e57602060031936011261000e576001600160a01b03610b1e61049a565b1660005260026020526020604060002054604051908152f35b503461000e57604060031936011261000e576106ef610b5461049a565b60243590610b638233836116e4565b611811565b503461000e57600080600319360112610497577f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a81528060205260ff610bc43360408420906001600160a01b0316600052602052604060002090565b541615610c545760075460ff8116610c105760ff1960019116176007557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586020604051338152a1604051f35b606460405162461bcd60e51b815260206004820152601060248201527f5061757361626c653a20706175736564000000000000000000000000000000006044820152fd5b608460405162461bcd60e51b815260206004820152603760248201527f45524332305072657365744d696e7465725061757365723a206d75737420686160448201527f76652070617573657220726f6c6520746f2070617573650000000000000000006064820152fd5b503461000e57604060031936011261000e57600435600052600160205260206001600160a01b03610cf56024356040600020611b59565b9190546040519260031b1c168152f35b503461000e57604060031936011261000e57602060ff610d4d610d266104b0565b600435600052600084526040600020906001600160a01b0316600052602052604060002090565b54166040519015158152f35b503461000e576000806003193601126104975760405190806006549060019180831c92808216928315610e13575b60209283861085146104605785885260208801949081156104445750600114610dba576103e7876103db818903826110c0565b600660005294509192917ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f5b838610610e0257505050910190506103db826103e738806103cb565b805485870152948201948101610de6565b93607f1693610d87565b503461000e57600060031936011261000e57602060405160008152f35b503461000e57604060031936011261000e57610e5461049a565b60243590336000526003602052610e82816040600020906001600160a01b0316600052602052604060002090565b5491808310610ea357610e9792039033611585565b60405160018152602090f35b608460405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f0000000000000000000000000000000000000000000000000000006064820152fd5b503461000e57604060031936011261000e576104ed610f2a61049a565b6024359033611442565b503461000e57602060031936011261000e5760043560005260016020526020604060002054604051908152f35b503461000e57600060031936011261000e5760206040517f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a68152f35b503461000e57604060031936011261000e576106ef600435610fbd6104b0565b90806000526000602052610fda60016040600020015433906110f0565b61126b565b503461000e57604060031936011261000e576020611034610ffe61049a565b6001600160a01b0361100e6104b0565b9116600052600383526040600020906001600160a01b0316600052602052604060002090565b54604051908152f35b503461000e57600060031936011261000e5760206040517f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a8152f35b9061108c60209282815194859201610318565b0190565b507f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b90601f601f19910116810190811067ffffffffffffffff8211176110e357604052565b6110eb611090565b604052565b9081600052600060205260ff61111d826040600020906001600160a01b0316600052602052604060002090565b541615611128575050565b6001600160a01b03169061113a611981565b916030611146846119ec565b53607861115284611a02565b5360295b600181116112105761120c6111b76111f4866111e661117e886111798915611a40565b611a8b565b6111e06040519586947f416363657373436f6e74726f6c3a206163636f756e742000000000000000000060208701526037860190611079565b7f206973206d697373696e6720726f6c6520000000000000000000000000000000815260110190565b90611079565b03601f1981018352826110c0565b60405191829162461bcd60e51b83526004830161034d565b0390fd5b90807f3031323334353637383961626364656600000000000000000000000000000000600f6112599316601081101561125e575b1a61124f8487611a13565b5360041c91611a32565b611156565b6112666119bc565b611244565b906001600160a01b0360406112bc936000908082528160205260ff6112a586858520906001600160a01b0316600052602052604060002090565b54166112bf575b8152600160205220911690611c7d565b50565b808252816020526112e585848420906001600160a01b0316600052602052604060002090565b60ff19815416905533848616827ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b858751a46112ac565b507f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81198111611358570190565b61108c61131c565b1561136757565b608460405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f65737300000000000000000000000000000000000000000000000000000000006064820152fd5b156113d857565b608460405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e636500000000000000000000000000000000000000000000000000006064820152fd5b91906001600160a01b039081841692831561151b576114f9827fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9461151694169661148e881515611360565b61149661190b565b6114df846114b7836001600160a01b03166000526002602052604060002090565b546114c4828210156113d1565b03916001600160a01b03166000526002602052604060002090565b556001600160a01b03166000526002602052604060002090565b61150482825461134c565b90556040519081529081906020820190565b0390a3565b608460405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152fd5b906001600160a01b039182811692831561167b57821693841561161157806116007f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925946115e8611516956001600160a01b03166000526003602052604060002090565b906001600160a01b0316600052602052604060002090565b556040519081529081906020820190565b608460405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f73730000000000000000000000000000000000000000000000000000000000006064820152fd5b608460405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152fd5b906001600160a01b0382166000526003602052611718816040600020906001600160a01b0316600052602052604060002090565b5492600019840361172a575b50505050565b8084106117455761173c930391611585565b38808080611724565b606460405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152fd5b1561179057565b608460405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f63650000000000000000000000000000000000000000000000000000000000006064820152fd5b818110611805570390565b61180d61131c565b0390565b906001600160a01b0382169081156118a1576115167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9160009461185361190b565b61188182611874836001600160a01b03166000526002602052604060002090565b546114c482821015611789565b556118916109ce826004546117fa565b6040519081529081906020820190565b608460405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f73000000000000000000000000000000000000000000000000000000000000006064820152fd5b60ff6007541661191757565b608460405162461bcd60e51b815260206004820152602a60248201527f45524332305061757361626c653a20746f6b656e207472616e7366657220776860448201527f696c6520706175736564000000000000000000000000000000000000000000006064820152fd5b604051906060820182811067ffffffffffffffff8211176119af575b604052602a8252604082602036910137565b6119b7611090565b61199d565b507f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020908051156119fa570190565b61108c6119bc565b6021908051600110156119fa570190565b906020918051821015611a2557010190565b611a2d6119bc565b010190565b600019908015611358570190565b15611a4757565b606460405162461bcd60e51b815260206004820152602060248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152fd5b604051906080820182811067ffffffffffffffff821117611b39575b6040526042825260603660208401376030611ac1836119ec565b536078611acd83611a02565b536041905b60018211611ae857611ae5915015611a40565b90565b807f3031323334353637383961626364656600000000000000000000000000000000600f611b2693166010811015611b2c575b1a61124f8486611a13565b90611ad2565b611b346119bc565b611b1b565b611b41611090565b611aa7565b6001600160a01b03611ae5921690611b9f565b8054821015611b72575b60005260206000200190600090565b611b7a6119bc565b611b63565b91611b9b9183549060031b600019811b9283911b169119161790565b9055565b6001810190826000528160205260406000205415600014611c1c5782611bfa611be1835468010000000000000000811015611c0f575b60018101855584611b59565b819391549060031b600019811b9283911b169119161790565b90555491600052602052604060002055600190565b611c17611090565b611bd5565b505050600090565b8054908115611c4e5760001980920191611c3e8383611b59565b909182549160031b1b1916905555565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b6001810191806000528260205260406000205492831515600014611d4457611cd2611ce19385600160009710611d37575b60001980820190835460018110611d2a575b0190808203611ce7575b505050611c24565b90600052602052604060002090565b55600190565b611d11611d0b91611cfb611d219487611b59565b90549060031b1c92839187611b59565b90611b7f565b8590600052602052604060002090565b55388080611cca565b611d3261131c565b611cc0565b611d3f61131c565b611cae565b5050505060009056fea26469706673582212207c95a04250dd50b5630bef57fe784dc75fd9b650172aea68b7c6226f9044130664736f6c634300080e00332f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d';

type RealTokenMockDecimalsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RealTokenMockDecimalsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RealTokenMockDecimals__factory extends ContractFactory {
  constructor(...args: RealTokenMockDecimalsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    decimalsToSet: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RealTokenMockDecimals> {
    return super.deploy(
      decimalsToSet,
      overrides || {}
    ) as Promise<RealTokenMockDecimals>;
  }
  override getDeployTransaction(
    decimalsToSet: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(decimalsToSet, overrides || {});
  }
  override attach(address: string): RealTokenMockDecimals {
    return super.attach(address) as RealTokenMockDecimals;
  }
  override connect(signer: Signer): RealTokenMockDecimals__factory {
    return super.connect(signer) as RealTokenMockDecimals__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RealTokenMockDecimalsInterface {
    return new utils.Interface(_abi) as RealTokenMockDecimalsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RealTokenMockDecimals {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as RealTokenMockDecimals;
  }
}
