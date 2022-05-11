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
  '0x60a06040523480156200001157600080fd5b5060405162001dcd38038062001dcd833981016040819052620000349162000318565b6040805180820182526004808252630ae8aa8960e31b60208084018281528551808701909652928552840152815191929183918391620000779160059162000272565b5080516200008d90600690602084019062000272565b50506007805460ff1916905550620000a76000336200010d565b620000d37f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6336200010d565b620000ff7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a336200010d565b505060ff1660805262000380565b6200011982826200011d565b5050565b6200013482826200016060201b620009b81760201c565b60008281526001602090815260409091206200015b91839062000a5662000200821b17901c565b505050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff1662000119576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055620001bc3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b600062000217836001600160a01b03841662000220565b90505b92915050565b600081815260018301602052604081205462000269575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556200021a565b5060006200021a565b828054620002809062000344565b90600052602060002090601f016020900481019282620002a45760008555620002ef565b82601f10620002bf57805160ff1916838001178555620002ef565b82800160010185558215620002ef579182015b82811115620002ef578251825591602001919060010190620002d2565b50620002fd92915062000301565b5090565b5b80821115620002fd576000815560010162000302565b6000602082840312156200032b57600080fd5b815160ff811681146200033d57600080fd5b9392505050565b600181811c908216806200035957607f821691505b6020821081036200037a57634e487b7160e01b600052602260045260246000fd5b50919050565b608051611a316200039c600039600061027d0152611a316000f3fe608060405234801561001057600080fd5b50600436106101c45760003560e01c806370a08231116100f9578063a457c2d711610097578063d539139311610071578063d5391393146103f5578063d547741f1461041c578063dd62ed3e1461042f578063e63ab1e91461046857600080fd5b8063a457c2d7146103bc578063a9059cbb146103cf578063ca15c873146103e257600080fd5b80639010d07c116100d35780639010d07c1461034a57806391d148541461037557806395d89b41146103ac578063a217fddf146103b457600080fd5b806370a082311461030657806379cc67901461032f5780638456cb591461034257600080fd5b8063313ce567116101665780633f4ba83a116101405780633f4ba83a146102cd57806340c10f19146102d557806342966c68146102e85780635c975abb146102fb57600080fd5b8063313ce5671461027657806336568abe146102a757806339509351146102ba57600080fd5b806318160ddd116101a257806318160ddd1461021957806323b872dd1461022b578063248a9ca31461023e5780632f2ff15d1461026157600080fd5b806301ffc9a7146101c957806306fdde03146101f1578063095ea7b314610206575b600080fd5b6101dc6101d73660046116cc565b61048f565b60405190151581526020015b60405180910390f35b6101f96104ba565b6040516101e89190611722565b6101dc610214366004611771565b61054c565b6004545b6040519081526020016101e8565b6101dc61023936600461179b565b610564565b61021d61024c3660046117d7565b60009081526020819052604090206001015490565b61027461026f3660046117f0565b610588565b005b60405160ff7f00000000000000000000000000000000000000000000000000000000000000001681526020016101e8565b6102746102b53660046117f0565b6105b3565b6101dc6102c8366004611771565b610644565b610274610683565b6102746102e3366004611771565b610729565b6102746102f63660046117d7565b6107cf565b60075460ff166101dc565b61021d61031436600461181c565b6001600160a01b031660009081526002602052604090205490565b61027461033d366004611771565b6107dc565b6102746107f1565b61035d610358366004611837565b610895565b6040516001600160a01b0390911681526020016101e8565b6101dc6103833660046117f0565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b6101f96108b4565b61021d600081565b6101dc6103ca366004611771565b6108c3565b6101dc6103dd366004611771565b61096d565b61021d6103f03660046117d7565b61097b565b61021d7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b61027461042a3660046117f0565b610992565b61021d61043d366004611859565b6001600160a01b03918216600090815260036020908152604080832093909416825291909152205490565b61021d7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a81565b60006001600160e01b03198216635a05180f60e01b14806104b457506104b482610a6b565b92915050565b6060600580546104c990611883565b80601f01602080910402602001604051908101604052809291908181526020018280546104f590611883565b80156105425780601f1061051757610100808354040283529160200191610542565b820191906000526020600020905b81548152906001019060200180831161052557829003601f168201915b5050505050905090565b60003361055a818585610aa0565b5060019392505050565b600033610572858285610bc4565b61057d858585610c56565b506001949350505050565b6000828152602081905260409020600101546105a48133610e5e565b6105ae8383610edc565b505050565b6001600160a01b03811633146106365760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c66000000000000000000000000000000000060648201526084015b60405180910390fd5b6106408282610efe565b5050565b3360008181526003602090815260408083206001600160a01b038716845290915281205490919061055a908290869061067e9087906118d3565b610aa0565b6106ad7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a33610383565b61071f5760405162461bcd60e51b815260206004820152603960248201527f45524332305072657365744d696e7465725061757365723a206d75737420686160448201527f76652070617573657220726f6c6520746f20756e706175736500000000000000606482015260840161062d565b610727610f20565b565b6107537f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a633610383565b6107c55760405162461bcd60e51b815260206004820152603660248201527f45524332305072657365744d696e7465725061757365723a206d75737420686160448201527f7665206d696e74657220726f6c6520746f206d696e7400000000000000000000606482015260840161062d565b6106408282610fbc565b6107d933826110a7565b50565b6107e7823383610bc4565b61064082826110a7565b61081b7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a33610383565b61088d5760405162461bcd60e51b815260206004820152603760248201527f45524332305072657365744d696e7465725061757365723a206d75737420686160448201527f76652070617573657220726f6c6520746f207061757365000000000000000000606482015260840161062d565b610727611201565b60008281526001602052604081206108ad9083611289565b9392505050565b6060600680546104c990611883565b3360008181526003602090815260408083206001600160a01b0387168452909152812054909190838110156109605760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f000000000000000000000000000000000000000000000000000000606482015260840161062d565b61057d8286868403610aa0565b60003361055a818585610c56565b60008181526001602052604081206104b490611295565b6000828152602081905260409020600101546109ae8133610e5e565b6105ae8383610efe565b6000828152602081815260408083206001600160a01b038516845290915290205460ff16610640576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055610a123390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60006108ad836001600160a01b03841661129f565b60006001600160e01b03198216637965db0b60e01b14806104b457506301ffc9a760e01b6001600160e01b03198316146104b4565b6001600160a01b038316610b025760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161062d565b6001600160a01b038216610b635760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161062d565b6001600160a01b0383811660008181526003602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b038381166000908152600360209081526040808320938616835292905220546000198114610c505781811015610c435760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604482015260640161062d565b610c508484848403610aa0565b50505050565b6001600160a01b038316610cd25760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f6472657373000000000000000000000000000000000000000000000000000000606482015260840161062d565b6001600160a01b038216610d345760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161062d565b610d3f8383836112ee565b6001600160a01b03831660009081526002602052604090205481811015610dce5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e63650000000000000000000000000000000000000000000000000000606482015260840161062d565b6001600160a01b03808516600090815260026020526040808220858503905591851681529081208054849290610e059084906118d3565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610e5191815260200190565b60405180910390a3610c50565b6000828152602081815260408083206001600160a01b038516845290915290205460ff1661064057610e9a816001600160a01b031660146112f9565b610ea58360206112f9565b604051602001610eb69291906118eb565b60408051601f198184030181529082905262461bcd60e51b825261062d91600401611722565b610ee682826109b8565b60008281526001602052604090206105ae9082610a56565b610f0882826114a2565b60008281526001602052604090206105ae9082611521565b60075460ff16610f725760405162461bcd60e51b815260206004820152601460248201527f5061757361626c653a206e6f7420706175736564000000000000000000000000604482015260640161062d565b6007805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b6001600160a01b0382166110125760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161062d565b61101e600083836112ee565b806004600082825461103091906118d3565b90915550506001600160a01b0382166000908152600260205260408120805483929061105d9084906118d3565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b0382166111075760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b606482015260840161062d565b611113826000836112ee565b6001600160a01b038216600090815260026020526040902054818110156111875760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b606482015260840161062d565b6001600160a01b03831660009081526002602052604081208383039055600480548492906111b690849061196c565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b60075460ff16156112545760405162461bcd60e51b815260206004820152601060248201527f5061757361626c653a2070617573656400000000000000000000000000000000604482015260640161062d565b6007805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610f9f3390565b60006108ad8383611536565b60006104b4825490565b60008181526001830160205260408120546112e6575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556104b4565b5060006104b4565b6105ae838383611560565b60606000611308836002611983565b6113139060026118d3565b67ffffffffffffffff81111561132b5761132b6119a2565b6040519080825280601f01601f191660200182016040528015611355576020820181803683370190505b509050600360fc1b81600081518110611370576113706119b8565b60200101906001600160f81b031916908160001a905350600f60fb1b8160018151811061139f5761139f6119b8565b60200101906001600160f81b031916908160001a90535060006113c3846002611983565b6113ce9060016118d3565b90505b6001811115611453577f303132333435363738396162636465660000000000000000000000000000000085600f166010811061140f5761140f6119b8565b1a60f81b828281518110611425576114256119b8565b60200101906001600160f81b031916908160001a90535060049490941c9361144c816119ce565b90506113d1565b5083156108ad5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604482015260640161062d565b6000828152602081815260408083206001600160a01b038516845290915290205460ff1615610640576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b60006108ad836001600160a01b0384166115d9565b600082600001828154811061154d5761154d6119b8565b9060005260206000200154905092915050565b60075460ff16156105ae5760405162461bcd60e51b815260206004820152602a60248201527f45524332305061757361626c653a20746f6b656e207472616e7366657220776860448201527f696c652070617573656400000000000000000000000000000000000000000000606482015260840161062d565b600081815260018301602052604081205480156116c25760006115fd60018361196c565b85549091506000906116119060019061196c565b9050818114611676576000866000018281548110611631576116316119b8565b9060005260206000200154905080876000018481548110611654576116546119b8565b6000918252602080832090910192909255918252600188019052604090208390555b8554869080611687576116876119e5565b6001900381819060005260206000200160009055905585600101600086815260200190815260200160002060009055600193505050506104b4565b60009150506104b4565b6000602082840312156116de57600080fd5b81356001600160e01b0319811681146108ad57600080fd5b60005b838110156117115781810151838201526020016116f9565b83811115610c505750506000910152565b60208152600082518060208401526117418160408501602087016116f6565b601f01601f19169190910160400192915050565b80356001600160a01b038116811461176c57600080fd5b919050565b6000806040838503121561178457600080fd5b61178d83611755565b946020939093013593505050565b6000806000606084860312156117b057600080fd5b6117b984611755565b92506117c760208501611755565b9150604084013590509250925092565b6000602082840312156117e957600080fd5b5035919050565b6000806040838503121561180357600080fd5b8235915061181360208401611755565b90509250929050565b60006020828403121561182e57600080fd5b6108ad82611755565b6000806040838503121561184a57600080fd5b50508035926020909101359150565b6000806040838503121561186c57600080fd5b61187583611755565b915061181360208401611755565b600181811c9082168061189757607f821691505b6020821081036118b757634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b600082198211156118e6576118e66118bd565b500190565b7f416363657373436f6e74726f6c3a206163636f756e74200000000000000000008152600083516119238160178501602088016116f6565b7f206973206d697373696e6720726f6c652000000000000000000000000000000060179184019182015283516119608160288401602088016116f6565b01602801949350505050565b60008282101561197e5761197e6118bd565b500390565b600081600019048311821515161561199d5761199d6118bd565b500290565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b6000816119dd576119dd6118bd565b506000190190565b634e487b7160e01b600052603160045260246000fdfea264697066735822122004eedcc540f5fa1c538ae9fbfbe2ca90a0300ce56e2be29f178bd0c46f58a59964736f6c634300080d0033';

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