/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type { PromiseOrValue } from '../../../../../common';
import type {
  CollateralDeposit,
  CollateralDepositInterface,
} from '../../../../../@ragetrade/core/contracts/libraries/CollateralDeposit';

const _abi = [
  {
    inputs: [],
    name: 'InsufficientCollateralBalance',
    type: 'error',
  },
];

const _bytecode =
  '0x602d6037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea164736f6c634300080e000a';

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
