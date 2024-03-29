/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type { PromiseOrValue } from '../../../../../common';
import type {
  ProxyAdmin,
  ProxyAdminInterface,
} from '../../../../../@openzeppelin/contracts/proxy/transparent/ProxyAdmin';

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'contract TransparentUpgradeableProxy',
        name: 'proxy',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'newAdmin',
        type: 'address',
      },
    ],
    name: 'changeProxyAdmin',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract TransparentUpgradeableProxy',
        name: 'proxy',
        type: 'address',
      },
    ],
    name: 'getProxyAdmin',
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
        internalType: 'contract TransparentUpgradeableProxy',
        name: 'proxy',
        type: 'address',
      },
    ],
    name: 'getProxyImplementation',
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
    inputs: [],
    name: 'owner',
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
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract TransparentUpgradeableProxy',
        name: 'proxy',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'implementation',
        type: 'address',
      },
    ],
    name: 'upgrade',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract TransparentUpgradeableProxy',
        name: 'proxy',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'implementation',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'upgradeAndCall',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
] as const;

const _bytecode =
  '0x6080806040523461005b5760008054336001600160a01b0319821681178355916001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09080a36105e690816100618239f35b600080fdfe6080604081815260048036101561001557600080fd5b600092833560e01c90848263204e1c7a1461045b5750508063715018a6146103f45780637eff275e1461037a5780638da5cb5b146103545780639623609d1461023f5783816399a88ec4146101b357508063f2fde38b146100e75763f3b7dead1461007f57600080fd5b346100e35760203660031901126100e35782806001600160a01b0392836100a4610499565b86516303e1469160e61b815291165afa926100bd61058a565b93156100e057506100d88360208080965183010191016105ba565b169051908152f35b80fd5b8280fd5b50346100e35760203660031901126100e357610101610499565b9061010a610532565b6001600160a01b03809216928315610161575050600054826bffffffffffffffffffffffff60a01b821617600055167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a380f35b906020608492519162461bcd60e51b8352820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152fd5b9290503461023b578060031936011261023b576101ce610499565b6101d66104b4565b906101df610532565b6001600160a01b03809116803b156102375785928360249286519788958694631b2ce7f360e11b865216908401525af190811561022e575061021e5750f35b610227906104ca565b6100e05780f35b513d84823e3d90fd5b8580fd5b5050fd5b508290606036600319011261035057610256610499565b9261025f6104b4565b916044359067ffffffffffffffff821161034c573660238301121561034c57818101359161028c83610516565b92610299855194856104f4565b8084523660248284010111610348576024929181889260209586930183880137850101526102c5610532565b6001600160a01b0380971696873b156103485784519563278f794360e11b87521690850152826024850152815191826044860152855b8381106103345750505082849581606481858983819884010152601f8019910116810103019134905af190811561022e575061021e5750f35b8181018301518682016064015282016102fb565b8680fd5b8480fd5b5080fd5b5050346103505781600319360112610350576001600160a01b0360209254169051908152f35b5090346100e357806003193601126100e35782610395610499565b61039d6104b4565b6103a5610532565b6001600160a01b0380921690813b156103f05783602492865197889586946308f2839760e41b865216908401525af190811561022e57506103e4575080f35b6103ed906104ca565b80f35b8380fd5b83346100e057806003193601126100e05761040d610532565b805473ffffffffffffffffffffffffffffffffffffffff198116825581906001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a380f35b915091346103505760203660031901126103505781906001600160a01b039384610483610499565b635c60da1b60e01b8352165afa926100bd61058a565b600435906001600160a01b03821682036104af57565b600080fd5b602435906001600160a01b03821682036104af57565b67ffffffffffffffff81116104de57604052565b634e487b7160e01b600052604160045260246000fd5b90601f8019910116810190811067ffffffffffffffff8211176104de57604052565b67ffffffffffffffff81116104de57601f01601f191660200190565b6001600160a01b0360005416330361054657565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b3d156105b5573d9061059b82610516565b916105a960405193846104f4565b82523d6000602084013e565b606090565b908160209103126104af57516001600160a01b03811681036104af579056fea164736f6c6343000812000a';

type ProxyAdminConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ProxyAdminConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ProxyAdmin__factory extends ContractFactory {
  constructor(...args: ProxyAdminConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ProxyAdmin> {
    return super.deploy(overrides || {}) as Promise<ProxyAdmin>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ProxyAdmin {
    return super.attach(address) as ProxyAdmin;
  }
  override connect(signer: Signer): ProxyAdmin__factory {
    return super.connect(signer) as ProxyAdmin__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ProxyAdminInterface {
    return new utils.Interface(_abi) as ProxyAdminInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ProxyAdmin {
    return new Contract(address, _abi, signerOrProvider) as ProxyAdmin;
  }
}
