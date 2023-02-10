/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type { PromiseOrValue } from '../../../../../common';
import type {
  TickMath,
  TickMathInterface,
} from '../../../../../@uniswap/v3-core/contracts/libraries/TickMath';

const _abi = [
  {
    inputs: [],
    name: 'R',
    type: 'error',
  },
  {
    inputs: [],
    name: 'T',
    type: 'error',
  },
];

const _bytecode =
  '0x6080806040523460175760119081601d823930815050f35b600080fdfe600080fdfea164736f6c6343000812000a';

type TickMathConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TickMathConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TickMath__factory extends ContractFactory {
  constructor(...args: TickMathConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TickMath> {
    return super.deploy(overrides || {}) as Promise<TickMath>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TickMath {
    return super.attach(address) as TickMath;
  }
  override connect(signer: Signer): TickMath__factory {
    return super.connect(signer) as TickMath__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TickMathInterface {
    return new utils.Interface(_abi) as TickMathInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TickMath {
    return new Contract(address, _abi, signerOrProvider) as TickMath;
  }
}
