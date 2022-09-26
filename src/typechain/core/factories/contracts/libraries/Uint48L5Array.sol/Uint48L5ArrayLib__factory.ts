/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type { PromiseOrValue } from '../../../../common';
import type {
  Uint48L5ArrayLib,
  Uint48L5ArrayLibInterface,
} from '../../../../contracts/libraries/Uint48L5Array.sol/Uint48L5ArrayLib';

const _abi = [
  {
    inputs: [
      {
        internalType: 'uint48',
        name: 'element',
        type: 'uint48',
      },
    ],
    name: 'U48L5_IllegalElement',
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
    name: 'U48L5_NoSpaceLeftToInsert',
    type: 'error',
  },
];

const _bytecode =
  '0x60808060405234601757603a9081601d823930815050f35b600080fdfe600080fdfea2646970667358221220ce38925fa1259f90342c4b03ae17a7dc41c46c43ca461c420b7eb159b864fb9064736f6c634300080e0033';

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

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Uint48L5ArrayLib> {
    return super.deploy(overrides || {}) as Promise<Uint48L5ArrayLib>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Uint48L5ArrayLib {
    return super.attach(address) as Uint48L5ArrayLib;
  }
  override connect(signer: Signer): Uint48L5ArrayLib__factory {
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
