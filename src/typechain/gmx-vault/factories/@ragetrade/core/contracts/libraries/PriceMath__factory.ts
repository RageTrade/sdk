/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type { PromiseOrValue } from '../../../../../common';
import type {
  PriceMath,
  PriceMathInterface,
} from '../../../../../@ragetrade/core/contracts/libraries/PriceMath';

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
] as const;

const _bytecode =
  '0x602d6037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea164736f6c634300080e000a';

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
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<PriceMath> {
    return super.deploy(overrides || {}) as Promise<PriceMath>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): PriceMath {
    return super.attach(address) as PriceMath;
  }
  override connect(signer: Signer): PriceMath__factory {
    return super.connect(signer) as PriceMath__factory;
  }

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
