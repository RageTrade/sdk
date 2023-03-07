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
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from 'ethers';
import type { NonPayableOverrides } from '../../../../../common';
import type {
  TimelockControllerWithMinDelayOverride,
  TimelockControllerWithMinDelayOverrideInterface,
} from '../../../../../@ragetrade/core/contracts/utils/TimelockControllerWithMinDelayOverride';

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
    name: 'CANCELLER_ROLE',
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
        name: 'payload',
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
        name: 'payloads',
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
        name: 'payloads',
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
        name: 'registered',
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
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    name: 'onERC1155BatchReceived',
    outputs: [
      {
        internalType: 'bytes4',
        name: '',
        type: 'bytes4',
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
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    name: 'onERC1155Received',
    outputs: [
      {
        internalType: 'bytes4',
        name: '',
        type: 'bytes4',
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
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    name: 'onERC721Received',
    outputs: [
      {
        internalType: 'bytes4',
        name: '',
        type: 'bytes4',
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
        name: 'payloads',
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
] as const;

const _bytecode =
  '0x60406080815234620003fe576200242a90813803806200001f8162000403565b9384398201606083820312620003fe57825192602090818101519260018060401b0393848111620003fe5781620000589184016200043f565b9385830151908111620003fe576200007192016200043f565b7f5f58e3a2316349923ce3780f8d587db2d72378aed66a8261c916544fa6846ca5926000938085528484526001918287872001908282549255827fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff9281848a80a483887fb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc1808a528583838c2001818154915582878d80a4857fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e6395868c52818c8883888884200192848454945580a48b857ffd643c72710c63c0180259aba6b2d05451e3591a24e58b62239378085726f78395828780945220019183835493558d80a4858a528a8a20338b52895260ff95868c8c20541615620003c6575b808b528a8a528b8b20308c528a52868c8c205416156200038d575b508a8a845b62000291575b508a94505050505b62000203575b877f11c24f4ead16507c69ac467fbd5e4eed5fb5c699626d2cc6d66421df253886d581898c8a816002558351928352820152a151611f0090816200050a8239f35b84518110156200028b5783906200024c906001600160a01b03620002288289620004de565b5116848a528989528a8a20818b528952858b8b2054161562000253575b50620004b8565b90620001bc565b848a528989528a8a20818b5289528a8a20805460ff1916851790553390856000805160206200240a8339815191528c80a43862000245565b620001c2565b8b8b875183101562000385576200030a93826001600160a01b0380620002b8878d620004de565b511688835282855283832081845285528d8484205416156200034d575b50620002e2868c620004de565b511692888252528d81842090838552528d8b82852054161562000313575b50505050620004b8565b8b9084620001ae565b8390888252528d818420908385525282208760ff19825416179055856000805160206200240a833981519152339380a48b388e8d62000300565b8883528285528383208184528552838320805460ff19168c1790553390896000805160206200240a8339815191528580a438620002d5565b5050620001b4565b808b528a8a528b8b2030808d52908b528c8c20805460ff19168617905533916000805160206200240a8339815191528d80a438620001a9565b808b528a8a528b8b2033808d52908b528c8c20805460ff19168617905580826000805160206200240a8339815191528e80a46200018e565b600080fd5b6040519190601f01601f191682016001600160401b038111838210176200042957604052565b634e487b7160e01b600052604160045260246000fd5b81601f82011215620003fe578051916001600160401b03831162000429578260051b60209283806200047381850162000403565b809781520192820101928311620003fe578301905b82821062000497575050505090565b81516001600160a01b0381168103620003fe57815290830190830162000488565b6000198114620004c85760010190565b634e487b7160e01b600052601160045260246000fd5b8051821015620004f35760209160051b010190565b634e487b7160e01b600052603260045260246000fdfe6080604052600436101561001b575b361561001957600080fd5b005b60003560e01c806301d5062a1461020b57806301ffc9a71461020657806307bd0265146102015780630d3cf6fc146101fc578063134008d3146101f757806313bc9f20146101f2578063150b7a02146101ed578063248a9ca3146101e85780632ab0f529146101e35780632c3b2c01146101de5780632f2ff15d146101d957806331d50750146101d457806336568abe146101cf578063584b153e146101ca57806364d62353146101c55780638065657f146101c05780638f2a0bb0146101bb5780638f61f4f5146101b657806391d14854146101b157806395e7f9b9146101ac578063a217fddf146101a7578063b08e51c0146101a2578063b1c5f4271461019d578063bc197c8114610198578063c4d252f514610193578063d45c44351461018e578063d547741f14610189578063e38335e514610184578063e86db08f1461017f578063f23a6e611461017a5763f27a0c920361000e576111c8565b61116f565b6110c4565b610f92565b610f4e565b610f22565b610e51565b610dc5565b610d3d565b610ca1565b610c85565b610be4565b610b8d565b610b52565b610a21565b6109ca565b610974565b610947565b6108b1565b610885565b6107ad565b61072a565b6106fd565b6106ce565b610675565b6105af565b6104d2565b610450565b610415565b6103a5565b610253565b6001600160a01b0381160361022157565b600080fd5b9181601f84011215610221578235916001600160401b038311610221576020838186019501011161022157565b346102215760c0366003190112610221576004803561027181610210565b6024356044356001600160401b038111610221576102929036908501610226565b60649391933560a435916102a533611249565b8681108015610318575b6000877f4cf4410cc57040e44862ef0f45f3dd5a5e02db8eb8add648d4b0e236f1d07dca888861030b8989896102e433611249565b6102f460843583838b8a8a6115be565b976102ff848a61189b565b60405196879687611855565b0390a36100196000600355565b610379579161030b917f4cf4410cc57040e44862ef0f45f3dd5a5e02db8eb8add648d4b0e236f1d07dca95949360406000998a90818052808b8337815188188252602052205480610370575b509193949550916102af565b60035538610364565b600187634e487b7160e01b6000525260246000fd5b602435906001600160e01b03198216820361022157565b346102215760203660031901126102215760043563ffffffff60e01b811680910361022157602090630271189760e51b81149081156103ea575b506040519015158152f35b637965db0b60e01b811491508115610404575b50386103df565b6301ffc9a760e01b149050386103fd565b346102215760003660031901126102215760206040517fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e638152f35b346102215760003660031901126102215760206040517f5f58e3a2316349923ce3780f8d587db2d72378aed66a8261c916544fa6846ca58152f35b60a0600319820112610221576004356104a381610210565b9160243591604435906001600160401b038211610221576104c691600401610226565b90916064359060843590565b61057561059e61057e7fc2617efa69bab66782fa219543714338489c4e9e178271560a91b82c3f612b586105966105083661048b565b60008080527fdae2aa361dfd1ca020a396615627d436107c35eff9fe7738a3512819782d70696020527f5ba6852781629bcdcd4bdaa6de76d786f1c64b16acdac474e55bebc0ea15795154909b8c99939893979593949392909160ff16156105a1575b88848489896115be565b98899788611acd565b61058a828287876119bf565b60405194859485611997565b0390a3611b63565b80f35b6105aa3361133e565b61056b565b346102215760203660031901126102215760206105cd600435611579565b6040519015158152f35b634e487b7160e01b600052604160045260246000fd5b90601f801991011681019081106001600160401b0382111761060e57604052565b6105d7565b6001600160401b03811161060e57601f01601f191660200190565b81601f820112156102215780359061064582610613565b9261065360405194856105ed565b8284526020838301011161022157816000926020809301838601378301015290565b3461022157608036600319011261022157610691600435610210565b61069c602435610210565b6064356001600160401b038111610221576106bb90369060040161062e565b50604051630a85bd0160e11b8152602090f35b346102215760203660031901126102215760043560005260006020526020600160406000200154604051908152f35b346102215760203660031901126102215760206105cd600435600052600160205260016040600020541490565b34610221576040366003190112610221577f19a57c9d1534b323e9fe3746f31c9a6202ddedebb52f2b2a6cdb0d4905ddc5b3604060043561076a81610210565b61077261038e565b61077d303314611b81565b80821860005260046020526000838120556001600160a01b0383519216825263ffffffff60e01b166020820152a1005b34610221576040366003190112610221576004356024356107cd81610210565b600091808352826020526107e96001604085200154339061140e565b8083528260205260ff6108128360408620906001600160a01b0316600052602052604060002090565b54161561081d578280f35b808352826020526108448260408520906001600160a01b0316600052602052604060002090565b805460ff1916600117905533916001600160a01b0316907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d8480a438808280f35b346102215760203660031901126102215760206105cd6004356000526001602052604060002054151590565b34610221576040366003190112610221576024356108ce81610210565b336001600160a01b038216036108ea57610019906004356114e2565b60405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b6064820152608490fd5b346102215760203660031901126102215760206105cd600435600052600160205260016040600020541190565b3461022157602036600319011261022157600435610993303314611b81565b7f11c24f4ead16507c69ac467fbd5e4eed5fb5c699626d2cc6d66421df253886d560406002548151908152836020820152a1600255005b346102215760206109e96109dd3661048b565b949390939291926115be565b604051908152f35b9181601f84011215610221578235916001600160401b038311610221576020808501948460051b01011161022157565b346102215760c0366003190112610221576001600160401b0360043581811161022157610a529036906004016109f1565b60249291923582811161022157610a6d9036906004016109f1565b91909260443590811161022157610a889036906004016109f1565b906064359460a43593610a9a33611249565b610aa5868214611771565b610ab0848214611771565b610ac26084358886868a87878f6116bb565b94610acd818761189b565b60005b828110610ad957005b8080887f4cf4410cc57040e44862ef0f45f3dd5a5e02db8eb8add648d4b0e236f1d07dca88888f8f8f90610b388f9a610b4d9b610b318f8f96610b21858093610b459b611804565b3599610b2c8b610210565b611804565b3597611814565b9060405196879687611855565b0390a36117df565b610ad0565b346102215760003660031901126102215760206040517fb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc18152f35b3461022157604036600319011261022157602060ff610bd8602435610bb181610210565b600435600052600084526040600020906001600160a01b0316600052602052604060002090565b54166040519015158152f35b3461022157606036600319011261022157600435610c0181610210565b610c0961038e565b9060443590610c19303314611b81565b6001820191828111610c8057836060937f2e5b50c2b84febe5b9f241a1394c287773688ea86f2abf46c1dc134fc69af6ef95841860005260046020526040600020556001600160a01b036040519316835263ffffffff60e01b1660208301526040820152a1005b6117c9565b3461022157600036600319011261022157602060405160008152f35b346102215760003660031901126102215760206040517ffd643c72710c63c0180259aba6b2d05451e3591a24e58b62239378085726f7838152f35b9060a0600319830112610221576001600160401b036004358181116102215783610d08916004016109f1565b939093926024358381116102215782610d23916004016109f1565b93909392604435918211610221576104c6916004016109f1565b346102215760206109e9610d5036610cdc565b969590959491949392936116bb565b9080601f83011215610221578135906001600160401b03821161060e578160051b60405193602093610d93858401876105ed565b85528380860192820101928311610221578301905b828210610db6575050505090565b81358152908301908301610da8565b346102215760a036600319011261022157610de1600435610210565b610dec602435610210565b6001600160401b0360443581811161022157610e0c903690600401610d5f565b5060643581811161022157610e25903690600401610d5f565b5060843590811161022157610e3e90369060040161062e565b5060405163bc197c8160e01b8152602090f35b3461022157602036600319011261022157600435610e6e336113a6565b610e8681600052600160205260016040600020541190565b15610ec35760009080825260016020528160408120557fbaa1eb22f2a492ba1a5fea61b8df4d27c6c8b5f3971e63bb58fa14ff72eedb708280a280f35b60405162461bcd60e51b815260206004820152603160248201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e2063616044820152701b9b9bdd0818994818d85b98d95b1b1959607a1b6064820152608490fd5b346102215760203660031901126102215760043560005260016020526020604060002054604051908152f35b3461022157604036600319011261022157610019602435600435610f7182610210565b806000526000602052610f8d600160406000200154339061140e565b6114e2565b610f9b36610cdc565b60008080527fdae2aa361dfd1ca020a396615627d436107c35eff9fe7738a3512819782d706960205297919691959394604093929091819088908a868a878b7f5ba6852781629bcdcd4bdaa6de76d786f1c64b16acdac474e55bebc0ea1579515460ff16159761102997611030996110b6575b611019848314611771565b611024868314611771565b6116bb565b9889611acd565b885b818110611043578961059e8a611b63565b80808a7fc2617efa69bab66782fa219543714338489c4e9e178271560a91b82c3f612b588a8a610b456110998f988c611092828e6110878f6110b19f908491611804565b3597610b2c89610210565b3595611814565b906110a6828287876119bf565b8d5194859485611997565b611032565b6110bf3361133e565b61100e565b34610221576040366003190112610221576004356110e181610210565b6110e961038e565b1860005260046020526040600020548015611115576000198101908111610c8057604051908152602090f35b60405162461bcd60e51b815260206004820152602c60248201527f54696d656c6f636b436f6e74726f6c6c65723a206d696e44656c61794f76657260448201526b1c9a5919481b9bdd081cd95d60a21b6064820152608490fd5b346102215760a03660031901126102215761118b600435610210565b611196602435610210565b6084356001600160401b038111610221576111b590369060040161062e565b5060405163f23a6e6160e01b8152602090f35b346102215760003660031901126102215760206109e9611ed5565b60005b8381106111f65750506000910152565b81810151838201526020016111e6565b90611219602092828151948592016111e3565b0190565b6040916020825261123d81518092816020860152602086860191016111e3565b601f01601f1916010190565b6001600160a01b03811660009081527f3412d5605ac6cd444957cedb533e5dacad6378b4bc819ebe3652188a665066d5602052604090205460ff161561128c5750565b60486113226112a66001600160a01b0361133a9416611c92565b6113146112b1611d22565b6040519485937f416363657373436f6e74726f6c3a206163636f756e742000000000000000000060208601526112f18151809260206037890191016111e3565b84017001034b99036b4b9b9b4b733903937b6329607d1b60378201520190611206565b03601f1981018352826105ed565b60405162461bcd60e51b81529182916004830161121d565b0390fd5b6001600160a01b03811660009081527fdae2aa361dfd1ca020a396615627d436107c35eff9fe7738a3512819782d7069602052604090205460ff16156113815750565b604861132261139b6001600160a01b0361133a9416611c92565b6113146112b1611db3565b6001600160a01b03811660009081527fc3ad33e20b0c56a223ad5104fff154aa010f8715b9c981fd38fdc60a4d1a52fb602052604090205460ff16156113e95750565b60486113226114036001600160a01b0361133a9416611c92565b6113146112b1611e44565b9081600052600060205260ff61143b826040600020906001600160a01b0316600052602052604060002090565b541615611446575050565b6001600160a01b036114589116611c92565b611460611be1565b91603061146c84611c0c565b53607861147884611c19565b5360415b6001811161149b5761133a604861132285611314886112b18815611c47565b90600f81169060108210156114dd576114d8916f181899199a1a9b1b9c1cb0b131b232b360811b901a6114ce8487611c29565b5360041c91611c3a565b61147c565b6117ee565b6000908082528160205260ff61150e8460408520906001600160a01b0316600052602052604060002090565b541661151957505050565b808252816020526115408360408420906001600160a01b0316600052602052604060002090565b60ff1981541690557ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b6001600160a01b033394169280a4565b6000526001602052604060002054600181119081611595575090565b905042101590565b908060209392818452848401376000828201840152601f01601f1916010190565b946115f561160e949592936040519687956001600160a01b03602088019a168a52604087015260a0606087015260c086019161159d565b91608084015260a083015203601f1981018352826105ed565b51902090565b81835290916001600160fb1b0383116102215760209260051b809284830137010190565b90808352602080930192838260051b850194846000925b858410611660575050505050505090565b9091929394959681810384528735601e19843603018112156102215783018681019190356001600160401b038111610221578036038313610221576116aa8892839260019561159d565b99019401940192959493919061164f565b9495919396909660405196879460208087019a808c60a060c08b0191525260e08801999160005b82811061173457505050509061170d61160e9861171d9493601f19998a8a84030160408b0152611614565b9187878403016060880152611638565b91608084015260a0830152039081018352826105ed565b919394969850919496989982806001926001600160a01b03893561175781610210565b1681520196019101918b9896949391929a9997959a6116e2565b1561177857565b60405162461bcd60e51b815260206004820152602360248201527f54696d656c6f636b436f6e74726f6c6c65723a206c656e677468206d69736d616044820152620e8c6d60eb1b6064820152608490fd5b634e487b7160e01b600052601160045260246000fd5b6000198114610c805760010190565b634e487b7160e01b600052603260045260246000fd5b91908110156114dd5760051b0190565b91908110156114dd5760051b81013590601e19813603018212156102215701908135916001600160401b038311610221576020018236038113610221579190565b929093611884926001600160a01b0360809699989799168552602085015260a0604085015260a084019161159d565b9460608201520152565b91908201809211610c8057565b906118b3826000526001602052604060002054151590565b61193a576118bf611ed5565b81106118e6576118d26118e3914261188e565b916000526001602052604060002090565b55565b60405162461bcd60e51b815260206004820152602660248201527f54696d656c6f636b436f6e74726f6c6c65723a20696e73756666696369656e746044820152652064656c617960d01b6064820152608490fd5b60405162461bcd60e51b815260206004820152602f60248201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e20616c60448201526e1c9958591e481cd8da19591d5b1959608a1b6064820152608490fd5b6119bc94926001600160a01b036060931682526020820152816040820152019161159d565b90565b90926000938493826040519384928337810185815203925af13d15611a69573d6119e881610613565b906119f660405192836105ed565b8152600060203d92013e5b15611a0857565b60405162461bcd60e51b815260206004820152603360248201527f54696d656c6f636b436f6e74726f6c6c65723a20756e6465726c79696e6720746044820152721c985b9cd858dd1a5bdb881c995d995c9d1959606a1b6064820152608490fd5b611a01565b15611a7557565b60405162461bcd60e51b815260206004820152602a60248201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e206973604482015269206e6f7420726561647960b01b6064820152608490fd5b611ad9611ade91611579565b611a6e565b8015908115611b44575b5015611af057565b60405162461bcd60e51b815260206004820152602660248201527f54696d656c6f636b436f6e74726f6c6c65723a206d697373696e6720646570656044820152656e64656e637960d01b6064820152608490fd5b611b5d9150600052600160205260016040600020541490565b38611ae8565b611b6f611ad982611579565b60005260016020526001604060002055565b15611b8857565b60405162461bcd60e51b815260206004820152602b60248201527f54696d656c6f636b436f6e74726f6c6c65723a2063616c6c6572206d7573742060448201526a62652074696d656c6f636b60a81b6064820152608490fd5b60405190608082018281106001600160401b0382111761060e57604052604282526060366020840137565b8051156114dd5760200190565b8051600110156114dd5760210190565b9081518110156114dd570160200190565b8015610c80576000190190565b15611c4e57565b606460405162461bcd60e51b815260206004820152602060248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152fd5b60405190606082018281106001600160401b0382111761060e57604052602a825260403660208401376030611cc683611c0c565b536078611cd283611c19565b536029905b60018211611cea576119bc915015611c47565b600f81169060108210156114dd57611d1c916f181899199a1a9b1b9c1cb0b131b232b360811b901a6114ce8486611c29565b90611cd7565b7fb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc1611d4b611be1565b906030611d5783611c0c565b536078611d6383611c19565b536041905b60018211611d7b576119bc915015611c47565b600f81169060108210156114dd57611dad916f181899199a1a9b1b9c1cb0b131b232b360811b901a6114ce8486611c29565b90611d68565b7fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e63611ddc611be1565b906030611de883611c0c565b536078611df483611c19565b536041905b60018211611e0c576119bc915015611c47565b600f81169060108210156114dd57611e3e916f181899199a1a9b1b9c1cb0b131b232b360811b901a6114ce8486611c29565b90611df9565b7ffd643c72710c63c0180259aba6b2d05451e3591a24e58b62239378085726f783611e6d611be1565b906030611e7983611c0c565b536078611e8583611c19565b536041905b60018211611e9d576119bc915015611c47565b600f81169060108210156114dd57611ecf916f181899199a1a9b1b9c1cb0b131b232b360811b901a6114ce8486611c29565b90611e8a565b60035480611ee4575060025490565b6000198101908111610c80579056fea164736f6c6343000812000a2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d';

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

  override getDeployTransaction(
    minDelay: BigNumberish,
    proposers: AddressLike[],
    executors: AddressLike[],
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      minDelay,
      proposers,
      executors,
      overrides || {}
    );
  }
  override deploy(
    minDelay: BigNumberish,
    proposers: AddressLike[],
    executors: AddressLike[],
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      minDelay,
      proposers,
      executors,
      overrides || {}
    ) as Promise<
      TimelockControllerWithMinDelayOverride & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): TimelockControllerWithMinDelayOverride__factory {
    return super.connect(
      runner
    ) as TimelockControllerWithMinDelayOverride__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TimelockControllerWithMinDelayOverrideInterface {
    return new Interface(
      _abi
    ) as TimelockControllerWithMinDelayOverrideInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): TimelockControllerWithMinDelayOverride {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as TimelockControllerWithMinDelayOverride;
  }
}
