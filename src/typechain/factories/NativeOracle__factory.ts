/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { NativeOracle, NativeOracleInterface } from '../NativeOracle';

const _abi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: '',
        type: 'uint32',
      },
    ],
    name: 'getTwapSqrtPriceX96',
    outputs: [
      {
        internalType: 'uint160',
        name: 'sqrtPriceX96',
        type: 'uint160',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint160',
        name: 'sqrtPriceX96',
        type: 'uint160',
      },
    ],
    name: 'setSqrtPrice',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

const _bytecode =
  '0x608060405234801561001057600080fd5b50600080546001600160a01b0319166c0100000000000000000000000017905560fc8061003e6000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c806372b6bb3814603757806382a2423e14606e575b600080fd5b60526042366004609d565b506000546001600160a01b031690565b6040516001600160a01b03909116815260200160405180910390f35b609b607936600460c8565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b005b60006020828403121560ae57600080fd5b813563ffffffff8116811460c157600080fd5b9392505050565b60006020828403121560d957600080fd5b81356001600160a01b038116811460c157600080fdfea164736f6c634300080a000a';

type NativeOracleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NativeOracleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NativeOracle__factory extends ContractFactory {
  constructor(...args: NativeOracleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = 'NativeOracle';
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<NativeOracle> {
    return super.deploy(overrides || {}) as Promise<NativeOracle>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): NativeOracle {
    return super.attach(address) as NativeOracle;
  }
  connect(signer: Signer): NativeOracle__factory {
    return super.connect(signer) as NativeOracle__factory;
  }
  static readonly contractName: 'NativeOracle';
  public readonly contractName: 'NativeOracle';
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NativeOracleInterface {
    return new utils.Interface(_abi) as NativeOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NativeOracle {
    return new Contract(address, _abi, signerOrProvider) as NativeOracle;
  }
}