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
  ERC1967Proxy,
  ERC1967ProxyInterface,
} from '../../../../../@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy';

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_logic',
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
    stateMutability: 'payable',
    type: 'receive',
  },
];

const _bytecode =
  '0x6040608081526103ea908138038061001681610272565b938439820191818184031261026d578051926001600160a01b03841680850361026d576020838101516001600160401b039491939185821161026d570181601f8201121561026d5780519061007261006d836102ad565b610272565b918083528583019386828401011161026d57838661009093016102c8565b863b15610213577f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80546001600160a01b031916841790556000927fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b8480a280511580159061020c575b61010c575b855160a490816103468239f35b85519460608601908111868210176101f8578652602785527f416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c84860152660819985a5b195960ca1b86860152863b156101a55761018f95968392839251915af4903d1561019b573d9061018161006d836102ad565b91825281933d92013e6102eb565b508038808080806100ff565b50606091506102eb565b855162461bcd60e51b815260048101859052602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608490fd5b634e487b7160e01b84526041600452602484fd5b50826100fa565b855162461bcd60e51b815260048101859052602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608490fd5b600080fd5b6040519190601f01601f191682016001600160401b0381118382101761029757604052565b634e487b7160e01b600052604160045260246000fd5b6001600160401b03811161029757601f01601f191660200190565b60005b8381106102db5750506000910152565b81810151838201526020016102cb565b909190156102f7575090565b8151156103075750805190602001fd5b6044604051809262461bcd60e51b82526020600483015261033781518092816024860152602086860191016102c8565b601f01601f19168101030190fdfe608060405236156052576001600160a01b037f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc54166000808092368280378136915af43d82803e15604e573d90f35b3d90fd5b6001600160a01b037f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc54166000808092368280378136915af43d82803e15604e573d90f3fea164736f6c6343000811000a';

type ERC1967ProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC1967ProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC1967Proxy__factory extends ContractFactory {
  constructor(...args: ERC1967ProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _logic: PromiseOrValue<string>,
    _data: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC1967Proxy> {
    return super.deploy(
      _logic,
      _data,
      overrides || {}
    ) as Promise<ERC1967Proxy>;
  }
  override getDeployTransaction(
    _logic: PromiseOrValue<string>,
    _data: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_logic, _data, overrides || {});
  }
  override attach(address: string): ERC1967Proxy {
    return super.attach(address) as ERC1967Proxy;
  }
  override connect(signer: Signer): ERC1967Proxy__factory {
    return super.connect(signer) as ERC1967Proxy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC1967ProxyInterface {
    return new utils.Interface(_abi) as ERC1967ProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1967Proxy {
    return new Contract(address, _abi, signerOrProvider) as ERC1967Proxy;
  }
}