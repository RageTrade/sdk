/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type {
  CollateralDeposit,
  CollateralDepositInterface,
} from '../CollateralDeposit';

const _abi = [
  {
    inputs: [],
    name: 'InsufficientCollateralBalance',
    type: 'error',
  },
];

const _bytecode =
  '0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212203ecc5ba49a65bc0566d69e5b1bf56d24be6fbe7026424d4580f2d0ea0bf8ff8264736f6c634300080c0033';

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
    this.contractName = 'CollateralDeposit';
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CollateralDeposit> {
    return super.deploy(overrides || {}) as Promise<CollateralDeposit>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CollateralDeposit {
    return super.attach(address) as CollateralDeposit;
  }
  connect(signer: Signer): CollateralDeposit__factory {
    return super.connect(signer) as CollateralDeposit__factory;
  }
  static readonly contractName: 'CollateralDeposit';
  public readonly contractName: 'CollateralDeposit';
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
