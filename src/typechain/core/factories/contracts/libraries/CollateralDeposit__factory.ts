/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type { PromiseOrValue } from '../../../common';
import type {
  CollateralDeposit,
  CollateralDepositInterface,
} from '../../../contracts/libraries/CollateralDeposit';

const _abi = [
  {
    inputs: [],
    name: 'InsufficientCollateralBalance',
    type: 'error',
  },
];

const _bytecode =
  '0x60808060405234601757603a9081601d823930815050f35b600080fdfe600080fdfea2646970667358221220c31ee151c709213a7e6a4ead2b9498f89060a0b7caf110abc6699ee45478340e64736f6c634300080e0033';

type CollateralDepositConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CollateralDepositConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CollateralDeposit__factory extends ContractFactory {
  constructor(...args: CollateralDepositConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CollateralDeposit> {
    return super.deploy(overrides || {}) as Promise<CollateralDeposit>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): CollateralDeposit {
    return super.attach(address) as CollateralDeposit;
  }
  override connect(signer: Signer): CollateralDeposit__factory {
    return super.connect(signer) as CollateralDeposit__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CollateralDepositInterface {
    return new utils.Interface(_abi) as CollateralDepositInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CollateralDeposit {
    return new Contract(address, _abi, signerOrProvider) as CollateralDeposit;
  }
}
