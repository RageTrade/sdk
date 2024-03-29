/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type { PromiseOrValue } from '../../../common';
import type {
  SafeCast,
  SafeCastInterface,
} from '../../../contracts/libraries/SafeCast';

const _abi = [
  {
    inputs: [
      {
        internalType: 'uint128',
        name: 'value',
        type: 'uint128',
      },
    ],
    name: 'SafeCast_Int128Overflow',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'SafeCast_Int256Overflow',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'SafeCast_UInt224Overflow',
    type: 'error',
  },
] as const;

const _bytecode =
  '0x60808060405234601757603a9081601d823930815050f35b600080fdfe600080fdfea264697066735822122009c029b6db6842e5a89185469a95d6c15a8c2fc3c3dba76460b1c751fbe0265e64736f6c634300080e0033';

type SafeCastConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SafeCastConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SafeCast__factory extends ContractFactory {
  constructor(...args: SafeCastConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SafeCast> {
    return super.deploy(overrides || {}) as Promise<SafeCast>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): SafeCast {
    return super.attach(address) as SafeCast;
  }
  override connect(signer: Signer): SafeCast__factory {
    return super.connect(signer) as SafeCast__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SafeCastInterface {
    return new utils.Interface(_abi) as SafeCastInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SafeCast {
    return new Contract(address, _abi, signerOrProvider) as SafeCast;
  }
}
