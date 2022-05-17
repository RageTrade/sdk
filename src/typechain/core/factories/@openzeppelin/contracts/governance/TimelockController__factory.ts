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
  TimelockController,
  TimelockControllerInterface,
} from '../../../../@openzeppelin/contracts/governance/TimelockController';

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
  '0x60806040523480156200001157600080fd5b5060405162001e1938038062001e198339810160408190526200003491620003a4565b6200004f60008051602062001db983398151915280620001c9565b6200007960008051602062001dd983398151915260008051602062001db9833981519152620001c9565b620000a360008051602062001df983398151915260008051602062001db9833981519152620001c9565b620000be60008051602062001db98339815191523362000214565b620000d960008051602062001db98339815191523062000214565b60005b825181101562000136576200012360008051602062001dd98339815191528483815181106200010f576200010f62000418565b60200260200101516200021460201b60201c565b6200012e816200042e565b9050620000dc565b5060005b815181101562000180576200016d60008051602062001df98339815191528383815181106200010f576200010f62000418565b62000178816200042e565b90506200013a565b5060028390556040805160008152602081018590527f11c24f4ead16507c69ac467fbd5e4eed5fb5c699626d2cc6d66421df253886d5910160405180910390a150505062000456565b600082815260208190526040808220600101805490849055905190918391839186917fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff9190a4505050565b62000220828262000224565b5050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff1662000220576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055620002803390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b634e487b7160e01b600052604160045260246000fd5b80516001600160a01b0381168114620002f257600080fd5b919050565b600082601f8301126200030957600080fd5b815160206001600160401b0380831115620003285762000328620002c4565b8260051b604051601f19603f83011681018181108482111715620003505762000350620002c4565b6040529384528581018301938381019250878511156200036f57600080fd5b83870191505b8482101562000399576200038982620002da565b8352918301919083019062000375565b979650505050505050565b600080600060608486031215620003ba57600080fd5b835160208501519093506001600160401b0380821115620003da57600080fd5b620003e887838801620002f7565b93506040860151915080821115620003ff57600080fd5b506200040e86828701620002f7565b9150509250925092565b634e487b7160e01b600052603260045260246000fd5b6000600182016200044f57634e487b7160e01b600052601160045260246000fd5b5060010190565b61195380620004666000396000f3fe60806040526004361061014f5760003560e01c806364d62353116100b6578063b1c5f4271161006f578063b1c5f427146103f3578063c4d252f514610413578063d45c443514610433578063d547741f14610460578063e38335e514610480578063f27a0c921461049357600080fd5b806364d623531461033c5780638065657f1461035c5780638f2a0bb01461037c5780638f61f4f51461039c57806391d14854146103be578063a217fddf146103de57600080fd5b8063248a9ca311610108578063248a9ca31461025b5780632ab0f5291461028b5780632f2ff15d146102bc57806331d50750146102dc57806336568abe146102fc578063584b153e1461031c57600080fd5b806301d5062a1461015b57806301ffc9a71461017d57806307bd0265146101b25780630d3cf6fc146101f4578063134008d31461022857806313bc9f201461023b57600080fd5b3661015657005b600080fd5b34801561016757600080fd5b5061017b6101763660046111b5565b6104a8565b005b34801561018957600080fd5b5061019d61019836600461122a565b61052c565b60405190151581526020015b60405180910390f35b3480156101be57600080fd5b506101e67fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e6381565b6040519081526020016101a9565b34801561020057600080fd5b506101e67f5f58e3a2316349923ce3780f8d587db2d72378aed66a8261c916544fa6846ca581565b61017b610236366004611254565b610563565b34801561024757600080fd5b5061019d6102563660046112c0565b6105db565b34801561026757600080fd5b506101e66102763660046112c0565b60009081526020819052604090206001015490565b34801561029757600080fd5b5061019d6102a63660046112c0565b6000908152600160208190526040909120541490565b3480156102c857600080fd5b5061017b6102d73660046112d9565b610601565b3480156102e857600080fd5b5061019d6102f73660046112c0565b61062c565b34801561030857600080fd5b5061017b6103173660046112d9565b610645565b34801561032857600080fd5b5061019d6103373660046112c0565b6106c8565b34801561034857600080fd5b5061017b6103573660046112c0565b6106de565b34801561036857600080fd5b506101e6610377366004611254565b610782565b34801561038857600080fd5b5061017b61039736600461134a565b6107c1565b3480156103a857600080fd5b506101e66000805160206118fe83398151915281565b3480156103ca57600080fd5b5061019d6103d93660046112d9565b610902565b3480156103ea57600080fd5b506101e6600081565b3480156103ff57600080fd5b506101e661040e3660046113fc565b61092b565b34801561041f57600080fd5b5061017b61042e3660046112c0565b610970565b34801561043f57600080fd5b506101e661044e3660046112c0565b60009081526001602052604090205490565b34801561046c57600080fd5b5061017b61047b3660046112d9565b610a34565b61017b61048e3660046113fc565b610a5a565b34801561049f57600080fd5b506002546101e6565b6000805160206118fe8339815191526104c18133610b8f565b60006104d1898989898989610782565b90506104dd8184610bf3565b6000817f4cf4410cc57040e44862ef0f45f3dd5a5e02db8eb8add648d4b0e236f1d07dca8b8b8b8b8b8a604051610519969594939291906114ce565b60405180910390a3505050505050505050565b60006001600160e01b03198216637965db0b60e01b148061055d57506301ffc9a760e01b6001600160e01b03198316145b92915050565b7fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e6361058f816000610902565b61059d5761059d8133610b8f565b60006105ad888888888888610782565b90506105b98185610ce2565b6105c88160008a8a8a8a610d7e565b6105d181610e92565b5050505050505050565b6000818152600160205260408120546001811180156105fa5750428111155b9392505050565b60008281526020819052604090206001015461061d8133610b8f565b6106278383610ecb565b505050565b60008181526001602052604081205481905b1192915050565b6001600160a01b03811633146106ba5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b6106c48282610f4f565b5050565b600081815260016020819052604082205461063e565b3330146107415760405162461bcd60e51b815260206004820152602b60248201527f54696d656c6f636b436f6e74726f6c6c65723a2063616c6c6572206d7573742060448201526a62652074696d656c6f636b60a81b60648201526084016106b1565b60025460408051918252602082018390527f11c24f4ead16507c69ac467fbd5e4eed5fb5c699626d2cc6d66421df253886d5910160405180910390a1600255565b600086868686868660405160200161079f969594939291906114ce565b6040516020818303038152906040528051906020012090509695505050505050565b6000805160206118fe8339815191526107da8133610b8f565b8887146107f95760405162461bcd60e51b81526004016106b19061150b565b8885146108185760405162461bcd60e51b81526004016106b19061150b565b600061082a8b8b8b8b8b8b8b8b61092b565b90506108368184610bf3565b60005b8a8110156108f45780827f4cf4410cc57040e44862ef0f45f3dd5a5e02db8eb8add648d4b0e236f1d07dca8e8e858181106108765761087661154e565b905060200201602081019061088b9190611564565b8d8d8681811061089d5761089d61154e565b905060200201358c8c878181106108b6576108b661154e565b90506020028101906108c8919061157f565b8c8b6040516108dc969594939291906114ce565b60405180910390a36108ed816115dc565b9050610839565b505050505050505050505050565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b6000888888888888888860405160200161094c98979695949392919061168a565b60405160208183030381529060405280519060200120905098975050505050505050565b6000805160206118fe8339815191526109898133610b8f565b610992826106c8565b6109f85760405162461bcd60e51b815260206004820152603160248201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e2063616044820152701b9b9bdd0818994818d85b98d95b1b1959607a1b60648201526084016106b1565b6000828152600160205260408082208290555183917fbaa1eb22f2a492ba1a5fea61b8df4d27c6c8b5f3971e63bb58fa14ff72eedb7091a25050565b600082815260208190526040902060010154610a508133610b8f565b6106278383610f4f565b7fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e63610a86816000610902565b610a9457610a948133610b8f565b878614610ab35760405162461bcd60e51b81526004016106b19061150b565b878414610ad25760405162461bcd60e51b81526004016106b19061150b565b6000610ae48a8a8a8a8a8a8a8a61092b565b9050610af08185610ce2565b60005b89811015610b7957610b6982828d8d85818110610b1257610b1261154e565b9050602002016020810190610b279190611564565b8c8c86818110610b3957610b3961154e565b905060200201358b8b87818110610b5257610b5261154e565b9050602002810190610b64919061157f565b610d7e565b610b72816115dc565b9050610af3565b50610b8381610e92565b50505050505050505050565b610b998282610902565b6106c457610bb1816001600160a01b03166014610fb4565b610bbc836020610fb4565b604051602001610bcd929190611765565b60408051601f198184030181529082905262461bcd60e51b82526106b1916004016117da565b610bfc8261062c565b15610c615760405162461bcd60e51b815260206004820152602f60248201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e20616c60448201526e1c9958591e481cd8da19591d5b1959608a1b60648201526084016106b1565b600254811015610cc25760405162461bcd60e51b815260206004820152602660248201527f54696d656c6f636b436f6e74726f6c6c65723a20696e73756666696369656e746044820152652064656c617960d01b60648201526084016106b1565b610ccc814261180d565b6000928352600160205260409092209190915550565b610ceb826105db565b610d075760405162461bcd60e51b81526004016106b190611825565b801580610d235750600081815260016020819052604090912054145b6106c45760405162461bcd60e51b815260206004820152602660248201527f54696d656c6f636b436f6e74726f6c6c65723a206d697373696e6720646570656044820152656e64656e637960d01b60648201526084016106b1565b6000846001600160a01b0316848484604051610d9b92919061186f565b60006040518083038185875af1925050503d8060008114610dd8576040519150601f19603f3d011682016040523d82523d6000602084013e610ddd565b606091505b5050905080610e4a5760405162461bcd60e51b815260206004820152603360248201527f54696d656c6f636b436f6e74726f6c6c65723a20756e6465726c79696e6720746044820152721c985b9cd858dd1a5bdb881c995d995c9d1959606a1b60648201526084016106b1565b85877fc2617efa69bab66782fa219543714338489c4e9e178271560a91b82c3f612b5887878787604051610e81949392919061187f565b60405180910390a350505050505050565b610e9b816105db565b610eb75760405162461bcd60e51b81526004016106b190611825565b600090815260016020819052604090912055565b610ed58282610902565b6106c4576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055610f0b3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b610f598282610902565b156106c4576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b60606000610fc38360026118b1565b610fce90600261180d565b67ffffffffffffffff811115610fe657610fe66118d0565b6040519080825280601f01601f191660200182016040528015611010576020820181803683370190505b509050600360fc1b8160008151811061102b5761102b61154e565b60200101906001600160f81b031916908160001a905350600f60fb1b8160018151811061105a5761105a61154e565b60200101906001600160f81b031916908160001a905350600061107e8460026118b1565b61108990600161180d565b90505b6001811115611101576f181899199a1a9b1b9c1cb0b131b232b360811b85600f16601081106110bd576110bd61154e565b1a60f81b8282815181106110d3576110d361154e565b60200101906001600160f81b031916908160001a90535060049490941c936110fa816118e6565b905061108c565b5083156105fa5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016106b1565b80356001600160a01b038116811461116757600080fd5b919050565b60008083601f84011261117e57600080fd5b50813567ffffffffffffffff81111561119657600080fd5b6020830191508360208285010111156111ae57600080fd5b9250929050565b600080600080600080600060c0888a0312156111d057600080fd5b6111d988611150565b965060208801359550604088013567ffffffffffffffff8111156111fc57600080fd5b6112088a828b0161116c565b989b979a50986060810135976080820135975060a09091013595509350505050565b60006020828403121561123c57600080fd5b81356001600160e01b0319811681146105fa57600080fd5b60008060008060008060a0878903121561126d57600080fd5b61127687611150565b955060208701359450604087013567ffffffffffffffff81111561129957600080fd5b6112a589828a0161116c565b979a9699509760608101359660809091013595509350505050565b6000602082840312156112d257600080fd5b5035919050565b600080604083850312156112ec57600080fd5b823591506112fc60208401611150565b90509250929050565b60008083601f84011261131757600080fd5b50813567ffffffffffffffff81111561132f57600080fd5b6020830191508360208260051b85010111156111ae57600080fd5b600080600080600080600080600060c08a8c03121561136857600080fd5b893567ffffffffffffffff8082111561138057600080fd5b61138c8d838e01611305565b909b50995060208c01359150808211156113a557600080fd5b6113b18d838e01611305565b909950975060408c01359150808211156113ca57600080fd5b506113d78c828d01611305565b9a9d999c50979a969997986060880135976080810135975060a0013595509350505050565b60008060008060008060008060a0898b03121561141857600080fd5b883567ffffffffffffffff8082111561143057600080fd5b61143c8c838d01611305565b909a50985060208b013591508082111561145557600080fd5b6114618c838d01611305565b909850965060408b013591508082111561147a57600080fd5b506114878b828c01611305565b999c989b509699959896976060870135966080013595509350505050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b60018060a01b038716815285602082015260a0604082015260006114f660a0830186886114a5565b60608301949094525060800152949350505050565b60208082526023908201527f54696d656c6f636b436f6e74726f6c6c65723a206c656e677468206d69736d616040820152620e8c6d60eb1b606082015260800190565b634e487b7160e01b600052603260045260246000fd5b60006020828403121561157657600080fd5b6105fa82611150565b6000808335601e1984360301811261159657600080fd5b83018035915067ffffffffffffffff8211156115b157600080fd5b6020019150368190038213156111ae57600080fd5b634e487b7160e01b600052601160045260246000fd5b6000600182016115ee576115ee6115c6565b5060010190565b60008383855260208086019550808560051b8301018460005b8781101561167d57848303601f19018952813536889003601e1901811261163457600080fd5b8701803567ffffffffffffffff81111561164d57600080fd5b80360389131561165c57600080fd5b61166985828885016114a5565b9a86019a945050509083019060010161160e565b5090979650505050505050565b60a0808252810188905260008960c08301825b8b8110156116cb576001600160a01b036116b684611150565b1682526020928301929091019060010161169d565b5083810360208501528881526001600160fb1b038911156116eb57600080fd5b8860051b9150818a60208301378181019150506020810160008152602084830301604085015261171c81888a6115f5565b6060850196909652505050608001529695505050505050565b60005b83811015611750578181015183820152602001611738565b8381111561175f576000848401525b50505050565b7f416363657373436f6e74726f6c3a206163636f756e742000000000000000000081526000835161179d816017850160208801611735565b7001034b99036b4b9b9b4b733903937b6329607d1b60179184019182015283516117ce816028840160208801611735565b01602801949350505050565b60208152600082518060208401526117f9816040850160208701611735565b601f01601f19169190910160400192915050565b60008219821115611820576118206115c6565b500190565b6020808252602a908201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e206973604082015269206e6f7420726561647960b01b606082015260800190565b8183823760009101908152919050565b60018060a01b03851681528360208201526060604082015260006118a76060830184866114a5565b9695505050505050565b60008160001904831182151516156118cb576118cb6115c6565b500290565b634e487b7160e01b600052604160045260246000fd5b6000816118f5576118f56115c6565b50600019019056feb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc1a2646970667358221220a7b93444a8df47797df92b5ea39e45c51951c89cfcee9291969eec1b4a67f47464736f6c634300080d00335f58e3a2316349923ce3780f8d587db2d72378aed66a8261c916544fa6846ca5b09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc1d8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e63';

type TimelockControllerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TimelockControllerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TimelockController__factory extends ContractFactory {
  constructor(...args: TimelockControllerConstructorParams) {
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
  ): Promise<TimelockController> {
    return super.deploy(
      minDelay,
      proposers,
      executors,
      overrides || {}
    ) as Promise<TimelockController>;
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
  override attach(address: string): TimelockController {
    return super.attach(address) as TimelockController;
  }
  override connect(signer: Signer): TimelockController__factory {
    return super.connect(signer) as TimelockController__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TimelockControllerInterface {
    return new utils.Interface(_abi) as TimelockControllerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TimelockController {
    return new Contract(address, _abi, signerOrProvider) as TimelockController;
  }
}
