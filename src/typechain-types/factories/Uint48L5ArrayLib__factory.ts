/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type {
  Uint48L5ArrayLib,
  Uint48L5ArrayLibInterface,
} from '../Uint48L5ArrayLib';

const _abi = [
  {
    inputs: [
      {
        internalType: 'uint48',
        name: 'element',
        type: 'uint48',
      },
    ],
    name: 'IllegalElement',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint48',
        name: 'element',
        type: 'uint48',
      },
    ],
    name: 'NoSpaceLeftToInsert',
    type: 'error',
  },
];

const _bytecode =
  '0x602d6037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea164736f6c634300080a000a';

type Uint48L5ArrayLibConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Uint48L5ArrayLibConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Uint48L5ArrayLib__factory extends ContractFactory {
  constructor(...args: Uint48L5ArrayLibConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Uint48L5ArrayLib> {
    return super.deploy(overrides || {}) as Promise<Uint48L5ArrayLib>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Uint48L5ArrayLib {
    return super.attach(address) as Uint48L5ArrayLib;
  }
  connect(signer: Signer): Uint48L5ArrayLib__factory {
    return super.connect(signer) as Uint48L5ArrayLib__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Uint48L5ArrayLibInterface {
    return new utils.Interface(_abi) as Uint48L5ArrayLibInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Uint48L5ArrayLib {
    return new Contract(address, _abi, signerOrProvider) as Uint48L5ArrayLib;
  }
}
