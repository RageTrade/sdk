/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
  BytesLike,
} from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type { PromiseOrValue } from '../../../../../common';
import type {
  TransparentUpgradeableProxy,
  TransparentUpgradeableProxyInterface,
} from '../../../../../@openzeppelin/contracts/proxy/transparent/TransparentUpgradeableProxy';

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_logic',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'admin_',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    stateMutability: 'payable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'previousAdmin',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'newAdmin',
        type: 'address',
      },
    ],
    name: 'AdminChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'beacon',
        type: 'address',
      },
    ],
    name: 'BeaconUpgraded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'implementation',
        type: 'address',
      },
    ],
    name: 'Upgraded',
    type: 'event',
  },
  {
    stateMutability: 'payable',
    type: 'fallback',
  },
  {
    inputs: [],
    name: 'admin',
    outputs: [
      {
        internalType: 'address',
        name: 'admin_',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newAdmin',
        type: 'address',
      },
    ],
    name: 'changeAdmin',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'implementation',
    outputs: [
      {
        internalType: 'address',
        name: 'implementation_',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newImplementation',
        type: 'address',
      },
    ],
    name: 'upgradeTo',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newImplementation',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'upgradeToAndCall',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    stateMutability: 'payable',
    type: 'receive',
  },
] as const;

const _bytecode =
  '0x608060405260405162000f0e38038062000f0e833981016040819052620000269162000519565b82816200005560017f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbd620005f9565b60008051602062000ec7833981519152146200007557620000756200061f565b6200008382826000620000e7565b50620000b3905060017fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6104620005f9565b60008051602062000ea783398151915214620000d357620000d36200061f565b620000de8262000124565b50505062000688565b620000f2836200017f565b600082511180620001005750805b156200011f576200011d8383620001c160201b6200022e1760201c565b505b505050565b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f6200014f620001f0565b604080516001600160a01b03928316815291841660208301520160405180910390a16200017c8162000229565b50565b6200018a81620002de565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b6060620001e9838360405180606001604052806027815260200162000ee76027913962000381565b9392505050565b60006200021a60008051602062000ea783398151915260001b6200046760201b620001ea1760201c565b546001600160a01b0316919050565b6001600160a01b038116620002945760405162461bcd60e51b815260206004820152602660248201527f455243313936373a206e65772061646d696e20697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b80620002bd60008051602062000ea783398151915260001b6200046760201b620001ea1760201c565b80546001600160a01b0319166001600160a01b039290921691909117905550565b620002f4816200046a60201b6200025a1760201c565b620003585760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084016200028b565b80620002bd60008051602062000ec783398151915260001b6200046760201b620001ea1760201c565b60606001600160a01b0384163b620003eb5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084016200028b565b600080856001600160a01b03168560405162000408919062000635565b600060405180830381855af49150503d806000811462000445576040519150601f19603f3d011682016040523d82523d6000602084013e6200044a565b606091505b5090925090506200045d82828662000479565b9695505050505050565b90565b6001600160a01b03163b151590565b606083156200048a575081620001e9565b8251156200049b5782518084602001fd5b8160405162461bcd60e51b81526004016200028b919062000653565b80516001600160a01b0381168114620004cf57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101562000507578181015183820152602001620004ed565b838111156200011d5750506000910152565b6000806000606084860312156200052f57600080fd5b6200053a84620004b7565b92506200054a60208501620004b7565b60408501519092506001600160401b03808211156200056857600080fd5b818601915086601f8301126200057d57600080fd5b815181811115620005925762000592620004d4565b604051601f8201601f19908116603f01168101908382118183101715620005bd57620005bd620004d4565b81604052828152896020848701011115620005d757600080fd5b620005ea836020830160208801620004ea565b80955050505050509250925092565b6000828210156200061a57634e487b7160e01b600052601160045260246000fd5b500390565b634e487b7160e01b600052600160045260246000fd5b6000825162000649818460208701620004ea565b9190910192915050565b602081526000825180602084015262000674816040850160208701620004ea565b601f01601f19169190910160400192915050565b61080f80620006986000396000f3fe60806040526004361061004e5760003560e01c80633659cfe6146100655780634f1ef286146100855780635c60da1b146100985780638f283970146100c9578063f851a440146100e95761005d565b3661005d5761005b6100fe565b005b61005b6100fe565b34801561007157600080fd5b5061005b6100803660046106c2565b610118565b61005b6100933660046106dd565b610155565b3480156100a457600080fd5b506100ad6101bc565b6040516001600160a01b03909116815260200160405180910390f35b3480156100d557600080fd5b5061005b6100e43660046106c2565b6101ed565b3480156100f557600080fd5b506100ad61020d565b610106610269565b6101166101116102fe565b610308565b565b61012061032c565b6001600160a01b0316330361014d5761014a8160405180602001604052806000815250600061035f565b50565b61014a6100fe565b61015d61032c565b6001600160a01b031633036101b4576101af8383838080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506001925061035f915050565b505050565b6101af6100fe565b60006101c661032c565b6001600160a01b031633036101e2576101dd6102fe565b905090565b6101ea6100fe565b90565b6101f561032c565b6001600160a01b0316330361014d5761014a8161038a565b600061021761032c565b6001600160a01b031633036101e2576101dd61032c565b606061025383836040518060600160405280602781526020016107dc602791396103de565b9392505050565b6001600160a01b03163b151590565b61027161032c565b6001600160a01b031633036101165760405162461bcd60e51b815260206004820152604260248201527f5472616e73706172656e745570677261646561626c6550726f78793a2061646d60448201527f696e2063616e6e6f742066616c6c6261636b20746f2070726f78792074617267606482015261195d60f21b608482015260a4015b60405180910390fd5b60006101dd6104bb565b3660008037600080366000845af43d6000803e808015610327573d6000f35b3d6000fd5b60007fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035b546001600160a01b0316919050565b610368836104e3565b6000825111806103755750805b156101af57610384838361022e565b50505050565b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f6103b361032c565b604080516001600160a01b03928316815291841660208301520160405180910390a161014a81610523565b60606001600160a01b0384163b6104465760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084016102f5565b600080856001600160a01b031685604051610461919061078c565b600060405180830381855af49150503d806000811461049c576040519150601f19603f3d011682016040523d82523d6000602084013e6104a1565b606091505b50915091506104b18282866105d9565b9695505050505050565b60007f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc610350565b6104ec81610612565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b6001600160a01b0381166105885760405162461bcd60e51b815260206004820152602660248201527f455243313936373a206e65772061646d696e20697320746865207a65726f206160448201526564647265737360d01b60648201526084016102f5565b807fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035b805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b039290921691909117905550565b606083156105e8575081610253565b8251156105f85782518084602001fd5b8160405162461bcd60e51b81526004016102f591906107a8565b6001600160a01b0381163b61067f5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084016102f5565b807f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc6105ab565b80356001600160a01b03811681146106bd57600080fd5b919050565b6000602082840312156106d457600080fd5b610253826106a6565b6000806000604084860312156106f257600080fd5b6106fb846106a6565b9250602084013567ffffffffffffffff8082111561071857600080fd5b818601915086601f83011261072c57600080fd5b81358181111561073b57600080fd5b87602082850101111561074d57600080fd5b6020830194508093505050509250925092565b60005b8381101561077b578181015183820152602001610763565b838111156103845750506000910152565b6000825161079e818460208701610760565b9190910192915050565b60208152600082518060208401526107c7816040850160208701610760565b601f01601f1916919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a164736f6c634300080e000ab53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564';

type TransparentUpgradeableProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TransparentUpgradeableProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TransparentUpgradeableProxy__factory extends ContractFactory {
  constructor(...args: TransparentUpgradeableProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _logic: PromiseOrValue<string>,
    admin_: PromiseOrValue<string>,
    _data: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<TransparentUpgradeableProxy> {
    return super.deploy(
      _logic,
      admin_,
      _data,
      overrides || {}
    ) as Promise<TransparentUpgradeableProxy>;
  }
  override getDeployTransaction(
    _logic: PromiseOrValue<string>,
    admin_: PromiseOrValue<string>,
    _data: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_logic, admin_, _data, overrides || {});
  }
  override attach(address: string): TransparentUpgradeableProxy {
    return super.attach(address) as TransparentUpgradeableProxy;
  }
  override connect(signer: Signer): TransparentUpgradeableProxy__factory {
    return super.connect(signer) as TransparentUpgradeableProxy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TransparentUpgradeableProxyInterface {
    return new utils.Interface(_abi) as TransparentUpgradeableProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TransparentUpgradeableProxy {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TransparentUpgradeableProxy;
  }
}
