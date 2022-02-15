/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { Bisection, BisectionInterface } from '../Bisection';

const _abi = [
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'y_target',
        type: 'uint256',
      },
      {
        internalType: 'uint160',
        name: 'x_lower',
        type: 'uint160',
      },
      {
        internalType: 'uint160',
        name: 'x_upper',
        type: 'uint160',
      },
    ],
    name: 'SolutionOutOfBounds',
    type: 'error',
  },
];

const _bytecode =
  '0x602d6037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea164736f6c634300080a000a';

type BisectionConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BisectionConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Bisection__factory extends ContractFactory {
  constructor(...args: BisectionConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Bisection> {
    return super.deploy(overrides || {}) as Promise<Bisection>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Bisection {
    return super.attach(address) as Bisection;
  }
  connect(signer: Signer): Bisection__factory {
    return super.connect(signer) as Bisection__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BisectionInterface {
    return new utils.Interface(_abi) as BisectionInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Bisection {
    return new Contract(address, _abi, signerOrProvider) as Bisection;
  }
}