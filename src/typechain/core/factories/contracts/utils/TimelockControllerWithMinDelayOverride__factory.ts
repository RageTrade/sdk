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
  TimelockControllerWithMinDelayOverride,
  TimelockControllerWithMinDelayOverrideInterface,
} from '../../../contracts/utils/TimelockControllerWithMinDelayOverride';

const _abi = [
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'minDelay',
        type: 'uint256',
      },
      {
        internalType: 'address[]',
        name: 'proposers',
        type: 'address[]',
      },
      {
        internalType: 'address[]',
        name: 'executors',
        type: 'address[]',
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
        internalType: 'bytes32',
        name: 'id',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'CallExecuted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'id',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'predecessor',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'delay',
        type: 'uint256',
      },
    ],
    name: 'CallScheduled',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'id',
        type: 'bytes32',
      },
    ],
    name: 'Cancelled',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'oldDuration',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newDuration',
        type: 'uint256',
      },
    ],
    name: 'MinDelayChange',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bytes4',
        name: 'selector',
        type: 'bytes4',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newMinDelay',
        type: 'uint256',
      },
    ],
    name: 'MinDelayOverrideSet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bytes4',
        name: 'selector',
        type: 'bytes4',
      },
    ],
    name: 'MinDelayOverrideUnset',
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
    name: 'EXECUTOR_ROLE',
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
    name: 'PROPOSER_ROLE',
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
    name: 'TIMELOCK_ADMIN_ROLE',
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
        name: 'id',
        type: 'bytes32',
      },
    ],
    name: 'cancel',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
      {
        internalType: 'bytes32',
        name: 'predecessor',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: 'salt',
        type: 'bytes32',
      },
    ],
    name: 'execute',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'targets',
        type: 'address[]',
      },
      {
        internalType: 'uint256[]',
        name: 'values',
        type: 'uint256[]',
      },
      {
        internalType: 'bytes[]',
        name: 'datas',
        type: 'bytes[]',
      },
      {
        internalType: 'bytes32',
        name: 'predecessor',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: 'salt',
        type: 'bytes32',
      },
    ],
    name: 'executeBatch',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getMinDelay',
    outputs: [
      {
        internalType: 'uint256',
        name: 'duration',
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
        name: 'target',
        type: 'address',
      },
      {
        internalType: 'bytes4',
        name: 'selector',
        type: 'bytes4',
      },
    ],
    name: 'getMinDelayOverride',
    outputs: [
      {
        internalType: 'uint256',
        name: 'minDelayOverride',
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
        name: 'id',
        type: 'bytes32',
      },
    ],
    name: 'getTimestamp',
    outputs: [
      {
        internalType: 'uint256',
        name: 'timestamp',
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
        name: 'target',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
      {
        internalType: 'bytes32',
        name: 'predecessor',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: 'salt',
        type: 'bytes32',
      },
    ],
    name: 'hashOperation',
    outputs: [
      {
        internalType: 'bytes32',
        name: 'hash',
        type: 'bytes32',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'targets',
        type: 'address[]',
      },
      {
        internalType: 'uint256[]',
        name: 'values',
        type: 'uint256[]',
      },
      {
        internalType: 'bytes[]',
        name: 'datas',
        type: 'bytes[]',
      },
      {
        internalType: 'bytes32',
        name: 'predecessor',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: 'salt',
        type: 'bytes32',
      },
    ],
    name: 'hashOperationBatch',
    outputs: [
      {
        internalType: 'bytes32',
        name: 'hash',
        type: 'bytes32',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'id',
        type: 'bytes32',
      },
    ],
    name: 'isOperation',
    outputs: [
      {
        internalType: 'bool',
        name: 'pending',
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
        name: 'id',
        type: 'bytes32',
      },
    ],
    name: 'isOperationDone',
    outputs: [
      {
        internalType: 'bool',
        name: 'done',
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
        name: 'id',
        type: 'bytes32',
      },
    ],
    name: 'isOperationPending',
    outputs: [
      {
        internalType: 'bool',
        name: 'pending',
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
        name: 'id',
        type: 'bytes32',
      },
    ],
    name: 'isOperationReady',
    outputs: [
      {
        internalType: 'bool',
        name: 'ready',
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
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
      {
        internalType: 'bytes32',
        name: 'predecessor',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: 'salt',
        type: 'bytes32',
      },
      {
        internalType: 'uint256',
        name: 'delay',
        type: 'uint256',
      },
    ],
    name: 'schedule',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'targets',
        type: 'address[]',
      },
      {
        internalType: 'uint256[]',
        name: 'values',
        type: 'uint256[]',
      },
      {
        internalType: 'bytes[]',
        name: 'datas',
        type: 'bytes[]',
      },
      {
        internalType: 'bytes32',
        name: 'predecessor',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: 'salt',
        type: 'bytes32',
      },
      {
        internalType: 'uint256',
        name: 'delay',
        type: 'uint256',
      },
    ],
    name: 'scheduleBatch',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
      {
        internalType: 'bytes4',
        name: 'selector',
        type: 'bytes4',
      },
      {
        internalType: 'uint256',
        name: 'minDelayOverride',
        type: 'uint256',
      },
    ],
    name: 'setMinDelayOverride',
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
    inputs: [
      {
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
      {
        internalType: 'bytes4',
        name: 'selector',
        type: 'bytes4',
      },
    ],
    name: 'unsetMinDelayOverride',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'newDelay',
        type: 'uint256',
      },
    ],
    name: 'updateDelay',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    stateMutability: 'payable',
    type: 'receive',
  },
];

const _bytecode =
  '0x6080604052346200008d57620026f5803803806200001d81620000a9565b92833981016060828203126200008d57815160208301516001600160401b0393919291908481116200008d578262000057918301620000de565b9160408201519485116200008d576200007d94620000769201620000de565b91620001b9565b60405161215c9081620005198239f35b600080fd5b50634e487b7160e01b600052604160045260246000fd5b6040519190601f01601f191682016001600160401b03811183821017620000cf57604052565b620000d962000092565b604052565b81601f820112156200008d578051916001600160401b03831162000158575b8260051b602092838062000113818501620000a9565b8097815201928201019283116200008d578301905b82821062000137575050505090565b81516001600160a01b03811681036200008d57815290830190830162000128565b6200016262000092565b620000fd565b6000198114620001785760010190565b634e487b7160e01b600052601160045260246000fd5b8051821015620001a35760209160051b010190565b634e487b7160e01b600052603260045260246000fd5b9190600080516020620026958339815191526000818152806020526001928392836040842001548185604086200155816000805160206200267583398151915285604051a46200020862000314565b6200021262000369565b6200021d33620003be565b6200022830620003be565b81835b620002d4575b5050905b6200028b575b50505062000286816200026e7f11c24f4ead16507c69ac467fbd5e4eed5fb5c699626d2cc6d66421df253886d593600255565b60405191829182919060206040840193600081520152565b0390a1565b8251811015620002ce5780620002c1620002bb620002ae620002c794876200018e565b516001600160a01b031690565b620004c7565b62000168565b8162000235565b6200023b565b81929391518110156200030a5780620002c1620002fa620002ae6200030094876200018e565b62000476565b819392916200022b565b8193925062000231565b600080516020620026b5833981519152806000526000602052600160406000200154600080516020620026958339815191529182600160406000200155600080516020620026758339815191526000604051a4565b600080516020620026d5833981519152806000526000602052600160406000200154600080516020620026958339815191529182600160406000200155600080516020620026758339815191526000604051a4565b6001600160a01b03811660009081527f64494413541ff93b31aa309254e3fed72a7456e9845988b915b4c7a7ceba881360205260408120600080516020620026958339815191529060ff905b5416156200041757505050565b808252602082815260408084206001600160a01b038616600090815292529020805460ff1916600117905560405133936001600160a01b0316927f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d91a4565b6001600160a01b03811660009081527f3412d5605ac6cd444957cedb533e5dacad6378b4bc819ebe3652188a665066d560205260408120600080516020620026b58339815191529060ff906200040a565b6001600160a01b03811660009081527fdae2aa361dfd1ca020a396615627d436107c35eff9fe7738a3512819782d706960205260408120600080516020620026d58339815191529060ff906200040a56fe6080604052600436101561001b575b361561001957600080fd5b005b60003560e01c806301d5062a1461023757806301ffc9a71461022e57806307bd0265146102255780630d3cf6fc1461021c578063134008d31461021357806313bc9f201461020a578063248a9ca3146102015780632ab0f529146101f85780632c3b2c01146101ef5780632f2ff15d146101e657806331d50750146101dd57806336568abe146101d4578063584b153e146101cb57806364d62353146101c25780638065657f146101b95780638f2a0bb0146101b05780638f61f4f5146101a757806391d148541461019e57806395e7f9b914610195578063a217fddf1461018c578063b1c5f42714610183578063c4d252f51461017a578063d45c443514610171578063d547741f14610168578063e38335e51461015f578063e86db08f146101565763f27a0c920361000e576101516110dd565b61000e565b50610151611012565b50610151610f05565b50610151610ec0565b50610151610e93565b50610151610db3565b50610151610d90565b50610151610d11565b50610151610c24565b50610151610bbf565b50610151610b83565b50610151610b08565b50610151610aaf565b50610151610a58565b50610151610a2a565b50610151610979565b5061015161094c565b50610151610830565b50610151610786565b50610151610758565b50610151610728565b506101516106ff565b50610151610578565b506101516104f4565b506101516104b8565b50610151610416565b50610151610291565b73ffffffffffffffffffffffffffffffffffffffff81160361025e57565b600080fd5b9181601f8401121561025e5782359167ffffffffffffffff831161025e576020838186019501011161025e57565b503461025e5760c060031936011261025e57600480356102b081610240565b60243560443567ffffffffffffffff811161025e576102d29036908501610263565b60649391933560a435916102e5336111d1565b8681108015610358575b6000877f4cf4410cc57040e44862ef0f45f3dd5a5e02db8eb8add648d4b0e236f1d07dca888861034b898989610324336111d1565b61033460843583838b8a8a611594565b9761033f848a611a30565b604051968796876119de565b0390a36100196000600355565b6103b9579161034b917f4cf4410cc57040e44862ef0f45f3dd5a5e02db8eb8add648d4b0e236f1d07dca95949360406000998a90818052808b83378151881882526020522054806103b0575b509193949550916102ef565b600355386103a4565b6001877f4e487b71000000000000000000000000000000000000000000000000000000006000525260246000fd5b602435907fffffffff000000000000000000000000000000000000000000000000000000008216820361025e57565b503461025e57602060031936011261025e576004357fffffffff00000000000000000000000000000000000000000000000000000000811680910361025e57807f7965db0b000000000000000000000000000000000000000000000000000000006020921490811561048e575b506040519015158152f35b7f01ffc9a70000000000000000000000000000000000000000000000000000000091501438610483565b503461025e57600060031936011261025e5760206040517fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e638152f35b503461025e57600060031936011261025e5760206040517f5f58e3a2316349923ce3780f8d587db2d72378aed66a8261c916544fa6846ca58152f35b60a060031982011261025e5760043561054881610240565b91602435916044359067ffffffffffffffff821161025e5761056c91600401610263565b90916064359060843590565b5061058236610530565b60008080527fdae2aa361dfd1ca020a396615627d436107c35eff9fe7738a3512819782d70696020527f5ba6852781629bcdcd4bdaa6de76d786f1c64b16acdac474e55bebc0ea157951549096604096939593949093909290916105fe916105f79160ff16156106f1575b8785858989611594565b9586611bc0565b868087518484823780858101838152039087875af13d156106ec573d61062381611c8a565b9061063089519283611175565b81528860203d92013e5b15610683578493879361067861068097947fc2617efa69bab66782fa219543714338489c4e9e178271560a91b82c3f612b58948a5194859485611cb5565b0390a3611c6c565b51f35b6084865162461bcd60e51b815260206004820152603360248201527f54696d656c6f636b436f6e74726f6c6c65723a20756e6465726c79696e67207460448201527f72616e73616374696f6e207265766572746564000000000000000000000000006064820152fd5b61063a565b6106fa336112ec565b6105ed565b503461025e57602060031936011261025e57602061071e60043561154f565b6040519015158152f35b503461025e57602060031936011261025e5760043560005260006020526020600160406000200154604051908152f35b503461025e57602060031936011261025e57602061071e600435600052600160205260016040600020541490565b503461025e57604060031936011261025e577f19a57c9d1534b323e9fe3746f31c9a6202ddedebb52f2b2a6cdb0d4905ddc5b360406004356107c781610240565b7fffffffff000000000000000000000000000000000000000000000000000000006107f06103e7565b6107fb303314611ddb565b808318600052600460205260008481205573ffffffffffffffffffffffffffffffffffffffff845193168352166020820152a1005b503461025e5760408060031936011261025e576004359060243561085381610240565b6000928084528360205261086e60018486200154339061136e565b8084528360205260ff6108a3838587209073ffffffffffffffffffffffffffffffffffffffff16600052602052604060002090565b5416156108af57505051f35b808452836020526108e2828486209073ffffffffffffffffffffffffffffffffffffffff16600052602052604060002090565b60017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0082541617905573ffffffffffffffffffffffffffffffffffffffff339216907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d858551a451f35b503461025e57602060031936011261025e57602061071e6004356000526001602052604060002054151590565b503461025e57604060031936011261025e5760243561099781610240565b3373ffffffffffffffffffffffffffffffffffffffff8216036109c05761001990600435611471565b608460405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c6600000000000000000000000000000000006064820152fd5b503461025e57602060031936011261025e57602061071e600435600052600160205260016040600020541190565b503461025e57602060031936011261025e57600435610a78303314611ddb565b7f11c24f4ead16507c69ac467fbd5e4eed5fb5c699626d2cc6d66421df253886d560406002548151908152836020820152a1600255005b503461025e576020610acf610ac336610530565b94939093929192611594565b604051908152f35b9181601f8401121561025e5782359167ffffffffffffffff831161025e576020808501948460051b01011161025e57565b503461025e5760c060031936011261025e5767ffffffffffffffff60043581811161025e57610b3b903690600401610ad7565b60243583811161025e57610b53903690600401610ad7565b60449391933594851161025e57610b71610019953690600401610ad7565b9160a43595608435956064359561179d565b503461025e57600060031936011261025e5760206040517fb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc18152f35b503461025e57604060031936011261025e57602060ff610c18602435610be481610240565b6004356000526000845260406000209073ffffffffffffffffffffffffffffffffffffffff16600052602052604060002090565b54166040519015158152f35b503461025e57606060031936011261025e577f2e5b50c2b84febe5b9f241a1394c287773688ea86f2abf46c1dc134fc69af6ef6060600435610c6581610240565b610c6d6103e7565b7fffffffff0000000000000000000000000000000000000000000000000000000060443591610c9d303314611ddb565b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe8311610d04575b80841860005260046020526001830160406000205573ffffffffffffffffffffffffffffffffffffffff604051941684521660208301526040820152a1005b610d0c6118da565b610cc5565b503461025e57600060031936011261025e57602060405160008152f35b9060a060031983011261025e5767ffffffffffffffff60043581811161025e5783610d5b91600401610ad7565b9390939260243583811161025e5782610d7691600401610ad7565b9390939260443591821161025e5761056c91600401610ad7565b503461025e576020610acf610da436610d2e565b969590959491949392936116da565b503461025e57602060031936011261025e57600435610dd1336111d1565b610de981600052600160205260016040600020541190565b15610e29578060009182526001602052816040812055604051907fbaa1eb22f2a492ba1a5fea61b8df4d27c6c8b5f3971e63bb58fa14ff72eedb708383a2f35b608460405162461bcd60e51b815260206004820152603160248201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e20636160448201527f6e6e6f742062652063616e63656c6c65640000000000000000000000000000006064820152fd5b503461025e57602060031936011261025e5760043560005260016020526020604060002054604051908152f35b503461025e57604060031936011261025e57610019602435600435610ee482610240565b806000526000602052610f00600160406000200154339061136e565b611471565b50610f0f36610d2e565b60008080527fdae2aa361dfd1ca020a396615627d436107c35eff9fe7738a3512819782d70696020527f5ba6852781629bcdcd4bdaa6de76d786f1c64b16acdac474e55bebc0ea1579515494989097929690959094909291610fa291610f9b919060ff1615611004575b610f84858514611869565b610f8f868514611869565b88868c878a888d6116da565b9687611bc0565b865b818110610fba5787610fb588611c6c565b604051f35b80610ffa8a87610ff08489610fe9828b8f610fff9b8d610fd992611952565b3596610fe488610240565b611952565b3594611970565b929091858d611cea565b61190a565b610fa4565b61100d336112ec565b610f79565b503461025e57604060031936011261025e5760043561103081610240565b6110386103e7565b1860005260046020526040600020548015611073578060016000199210611066575b60405191018152602090f35b61106e6118da565b61105a565b608460405162461bcd60e51b815260206004820152602c60248201527f54696d656c6f636b436f6e74726f6c6c65723a206d696e44656c61794f76657260448201527f72696465206e6f742073657400000000000000000000000000000000000000006064820152fd5b503461025e57600060031936011261025e576020610acf612107565b918091926000905b828210611119575011611112575050565b6000910152565b91508060209183015181860152018291611101565b90611141602092828151948592016110f9565b0190565b507f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b90601f601f19910116810190811067ffffffffffffffff82111761119857604052565b6111a0611145565b604052565b601f19601f604093602084526111ca81518092816020880152602088880191016110f9565b0116010190565b73ffffffffffffffffffffffffffffffffffffffff811660009081527f3412d5605ac6cd444957cedb533e5dacad6378b4bc819ebe3652188a665066d5602052604090205460ff16156112215750565b60486112d061124873ffffffffffffffffffffffffffffffffffffffff6112e89416611f25565b6112c2611253611fcf565b6040519485937f416363657373436f6e74726f6c3a206163636f756e742000000000000000000060208601526112938151809260206037890191016110f9565b84017f206973206d697373696e6720726f6c65200000000000000000000000000000006037820152019061112e565b03601f198101835282611175565b60405191829162461bcd60e51b8352600483016111a5565b0390fd5b73ffffffffffffffffffffffffffffffffffffffff811660009081527fdae2aa361dfd1ca020a396615627d436107c35eff9fe7738a3512819782d7069602052604090205460ff161561133c5750565b60486112d061136373ffffffffffffffffffffffffffffffffffffffff6112e89416611f25565b6112c261125361206b565b9081600052600060205260ff6113a88260406000209073ffffffffffffffffffffffffffffffffffffffff16600052602052604060002090565b5416156113b3575050565b73ffffffffffffffffffffffffffffffffffffffff6113d29116611f25565b906113db611e4c565b9060306113e783611e86565b5360786113f383611e9c565b5360415b60018111611416576112e860486112d0866112c2876112538815611eda565b90807f3031323334353637383961626364656600000000000000000000000000000000600f61145f93166010811015611464575b1a6114558486611ead565b5360041c91611ecc565b6113f7565b61146c611922565b61144a565b6000908082528160205260ff6114aa84604085209073ffffffffffffffffffffffffffffffffffffffff16600052602052604060002090565b54166114b557505050565b808252816020526114e983604084209073ffffffffffffffffffffffffffffffffffffffff16600052602052604060002090565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0081541690557ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b73ffffffffffffffffffffffffffffffffffffffff33941692604051a4565b600052600160205260406000205460018111908161156b575090565b905042101590565b601f8260209493601f19938186528686013760008582860101520116010190565b946115d86115f19495929360405196879573ffffffffffffffffffffffffffffffffffffffff602088019a168a52604087015260a0606087015260c0860191611573565b91608084015260a083015203601f198101835282611175565b51902090565b90918281527f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff831161025e5760209260051b80928483013701016000815290565b90808352602080930192838260051b850194846000925b858410611660575050505050505090565b90919293949596818103845287357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181121561025e57830186810191903567ffffffffffffffff811161025e57803603831361025e576116c988928392600195611573565b99019401940192959493919061164f565b9495919396909660405196879460208087019a808c60a060c08b0191525260e08801999160005b82811061175357505050509061172c6115f19861173c9493601f19998a8a84030160408b01526115f7565b9187878403016060880152611638565b91608084015260a083015203908101835282611175565b9193949698509194969899828060019273ffffffffffffffffffffffffffffffffffffffff893561178381610240565b1681520196019101918b9896949391929a9997959a611701565b9793959290966117d59084878985878d8f9c999c6117ba336111d1565b6117c5848314611869565b6117d0868314611869565b6116da565b966117e08589611a30565b60005b8181106117f65750505050505050505050565b80808a7f4cf4410cc57040e44862ef0f45f3dd5a5e02db8eb8add648d4b0e236f1d07dca8b8b8f8c8c61184f888e6118488f9d8f9e6118649f8261183d9161185c9b611952565b3599610fe48b610240565b3597611970565b90604051968796876119de565b0390a361190a565b6117e3565b1561187057565b608460405162461bcd60e51b815260206004820152602360248201527f54696d656c6f636b436f6e74726f6c6c65723a206c656e677468206d69736d6160448201527f74636800000000000000000000000000000000000000000000000000000000006064820152fd5b507f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600190600019811461191a570190565b6111416118da565b507f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9190811015611963575b60051b0190565b61196b611922565b61195c565b91908110156119d1575b60051b810135907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18136030182121561025e57019081359167ffffffffffffffff831161025e57602001823603811361025e579190565b6119d9611922565b61197a565b929093611a1a9273ffffffffffffffffffffffffffffffffffffffff60809699989799168552602085015260a0604085015260a0840191611573565b9460608201520152565b8119811161191a570190565b90611a48826000526001602052604060002054151590565b611ae557611a54612107565b8110611a7b57611a67611a789142611a24565b916000526001602052604060002090565b55565b608460405162461bcd60e51b815260206004820152602660248201527f54696d656c6f636b436f6e74726f6c6c65723a20696e73756666696369656e7460448201527f2064656c617900000000000000000000000000000000000000000000000000006064820152fd5b608460405162461bcd60e51b815260206004820152602f60248201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e20616c60448201527f7265616479207363686564756c656400000000000000000000000000000000006064820152fd5b15611b5657565b608460405162461bcd60e51b815260206004820152602a60248201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e20697360448201527f206e6f74207265616479000000000000000000000000000000000000000000006064820152fd5b611bcc611bd19161154f565b611b4f565b8015908115611c4d575b5015611be357565b608460405162461bcd60e51b815260206004820152602660248201527f54696d656c6f636b436f6e74726f6c6c65723a206d697373696e67206465706560448201527f6e64656e637900000000000000000000000000000000000000000000000000006064820152fd5b611c669150600052600160205260016040600020541490565b38611bdb565b611c78611bcc8261154f565b60005260016020526001604060002055565b601f19601f60209267ffffffffffffffff8111611ca8575b01160190565b611cb0611145565b611ca2565b611ce7949273ffffffffffffffffffffffffffffffffffffffff60609316825260208201528160408201520191611573565b90565b9394929190946000806040518684823780878101838152039086865af13d15611dd6573d611d1781611c8a565b90611d256040519283611175565b8152600060203d92013e5b15611d6c577fc2617efa69bab66782fa219543714338489c4e9e178271560a91b82c3f612b5893611d679160405194859485611cb5565b0390a3565b608460405162461bcd60e51b815260206004820152603360248201527f54696d656c6f636b436f6e74726f6c6c65723a20756e6465726c79696e67207460448201527f72616e73616374696f6e207265766572746564000000000000000000000000006064820152fd5b611d30565b15611de257565b608460405162461bcd60e51b815260206004820152602b60248201527f54696d656c6f636b436f6e74726f6c6c65723a2063616c6c6572206d7573742060448201527f62652074696d656c6f636b0000000000000000000000000000000000000000006064820152fd5b604051906080820182811067ffffffffffffffff821117611e79575b604052604282526060366020840137565b611e81611145565b611e68565b602090805115611e94570190565b611141611922565b602190805160011015611e94570190565b906020918051821015611ebf57010190565b611ec7611922565b010190565b60001990801561191a570190565b15611ee157565b606460405162461bcd60e51b815260206004820152602060248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152fd5b604051906060820182811067ffffffffffffffff821117611fc2575b604052602a825260403660208401376030611f5b83611e86565b536078611f6783611e9c565b536029905b60018211611f7f57611ce7915015611eda565b807f3031323334353637383961626364656600000000000000000000000000000000600f611fbc93166010811015611464571a6114558486611ead565b90611f6c565b611fca611145565b611f41565b7fb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc1611ff8611e4c565b90603061200483611e86565b53607861201083611e9c565b536041905b6001821161202857611ce7915015611eda565b807f3031323334353637383961626364656600000000000000000000000000000000600f61206593166010811015611464571a6114558486611ead565b90612015565b7fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e63612094611e4c565b9060306120a083611e86565b5360786120ac83611e9c565b536041905b600182116120c457611ce7915015611eda565b807f3031323334353637383961626364656600000000000000000000000000000000600f61210193166010811015611464571a6114558486611ead565b906120b1565b60035480612116575060025490565b806001600019921061191a57019056fea2646970667358221220c02b2e1b9f0b21df1628b7792f0d4d7f2e65892ff4b1595e9838fa3cf04a124464736f6c634300080e0033bd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff5f58e3a2316349923ce3780f8d587db2d72378aed66a8261c916544fa6846ca5b09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc1d8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e63';

type TimelockControllerWithMinDelayOverrideConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TimelockControllerWithMinDelayOverrideConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TimelockControllerWithMinDelayOverride__factory extends ContractFactory {
  constructor(
    ...args: TimelockControllerWithMinDelayOverrideConstructorParams
  ) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    minDelay: BigNumberish,
    proposers: string[],
    executors: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TimelockControllerWithMinDelayOverride> {
    return super.deploy(
      minDelay,
      proposers,
      executors,
      overrides || {}
    ) as Promise<TimelockControllerWithMinDelayOverride>;
  }
  override getDeployTransaction(
    minDelay: BigNumberish,
    proposers: string[],
    executors: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      minDelay,
      proposers,
      executors,
      overrides || {}
    );
  }
  override attach(address: string): TimelockControllerWithMinDelayOverride {
    return super.attach(address) as TimelockControllerWithMinDelayOverride;
  }
  override connect(
    signer: Signer
  ): TimelockControllerWithMinDelayOverride__factory {
    return super.connect(
      signer
    ) as TimelockControllerWithMinDelayOverride__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TimelockControllerWithMinDelayOverrideInterface {
    return new utils.Interface(
      _abi
    ) as TimelockControllerWithMinDelayOverrideInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TimelockControllerWithMinDelayOverride {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TimelockControllerWithMinDelayOverride;
  }
}
