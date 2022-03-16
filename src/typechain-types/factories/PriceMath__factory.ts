/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { PriceMath, PriceMathInterface } from '../PriceMath';

const _abi = [
  {
    inputs: [
      {
        internalType: 'uint160',
        name: 'sqrtPriceX96',
        type: 'uint160',
      },
    ],
    name: 'IllegalSqrtPrice',
    type: 'error',
  },
];

const _bytecode =
  '0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220fec0c2eef009bc64bff05c641caee95242ad4b114f95659d763e294be5ed745564736f6c634300080c0033';

type PriceMathConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PriceMathConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PriceMath__factory extends ContractFactory {
  constructor(...args: PriceMathConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = 'PriceMath';
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PriceMath> {
    return super.deploy(overrides || {}) as Promise<PriceMath>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): PriceMath {
    return super.attach(address) as PriceMath;
  }
  connect(signer: Signer): PriceMath__factory {
    return super.connect(signer) as PriceMath__factory;
  }
  static readonly contractName: 'PriceMath';
  public readonly contractName: 'PriceMath';
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PriceMathInterface {
    return new utils.Interface(_abi) as PriceMathInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PriceMath {
    return new Contract(address, _abi, signerOrProvider) as PriceMath;
  }
}
