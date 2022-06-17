/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type {
  ArbSysMock,
  ArbSysMockInterface,
} from '../../../../contracts/test/mocks/ArbSysMock';

const _abi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'arbBlockNumber',
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
        name: '_arbBlockNumber',
        type: 'uint256',
      },
    ],
    name: 'setArbBlockNumber',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

const _bytecode =
  '0x608080604052346018576000805560d5908161001e8239f35b600080fdfe6080806040526004361015601257600080fd5b600090813560e01c80634259d1be14606a5763a3b1b31d14603257600080fd5b34606657817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112606657602091548152f35b5080fd5b503460665760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126066576004358255f3fea2646970667358221220af0b209ad3c899bd66643ac9d838f10caa598cc17a8da048a80f221600b8a69664736f6c634300080e0033';

type ArbSysMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ArbSysMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ArbSysMock__factory extends ContractFactory {
  constructor(...args: ArbSysMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ArbSysMock> {
    return super.deploy(overrides || {}) as Promise<ArbSysMock>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ArbSysMock {
    return super.attach(address) as ArbSysMock;
  }
  override connect(signer: Signer): ArbSysMock__factory {
    return super.connect(signer) as ArbSysMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ArbSysMockInterface {
    return new utils.Interface(_abi) as ArbSysMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ArbSysMock {
    return new Contract(address, _abi, signerOrProvider) as ArbSysMock;
  }
}
