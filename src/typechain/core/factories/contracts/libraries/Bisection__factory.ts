/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type {
  Bisection,
  BisectionInterface,
} from '../../../contracts/libraries/Bisection';

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
  '0x60808060405234601757603a9081601d823930815050f35b600080fdfe600080fdfea26469706673582212202802a3ece86bc6890863c4ffeff1353beb818e16e2a4725bf789bd99b2c3af8664736f6c634300080e0033';

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

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Bisection> {
    return super.deploy(overrides || {}) as Promise<Bisection>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Bisection {
    return super.attach(address) as Bisection;
  }
  override connect(signer: Signer): Bisection__factory {
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
