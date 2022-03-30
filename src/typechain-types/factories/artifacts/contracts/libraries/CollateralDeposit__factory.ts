/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type {
  CollateralDeposit,
  CollateralDepositInterface,
} from '../../../../artifacts/contracts/libraries/CollateralDeposit';

const _abi = [
  {
    inputs: [],
    name: 'InsufficientCollateralBalance',
    type: 'error',
  },
];

const _bytecode =
  '0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122017ccf5e2d0e46a594dc90fd3a86dd68d334e073668adb2d0ac8a5f84e6686f7e64736f6c634300080d0033';

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
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CollateralDeposit> {
    return super.deploy(overrides || {}) as Promise<CollateralDeposit>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
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