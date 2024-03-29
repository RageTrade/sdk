/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type { PromiseOrValue } from '../../../../../common';
import type {
  UniswapV3PoolHelper,
  UniswapV3PoolHelperInterface,
} from '../../../../../@ragetrade/core/contracts/libraries/UniswapV3PoolHelper';

const _abi = [
  {
    inputs: [],
    name: 'UV3PH_OracleConsultFailed',
    type: 'error',
  },
] as const;

const _bytecode =
  '0x602d6037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea164736f6c634300080e000a';

type UniswapV3PoolHelperConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UniswapV3PoolHelperConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UniswapV3PoolHelper__factory extends ContractFactory {
  constructor(...args: UniswapV3PoolHelperConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<UniswapV3PoolHelper> {
    return super.deploy(overrides || {}) as Promise<UniswapV3PoolHelper>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): UniswapV3PoolHelper {
    return super.attach(address) as UniswapV3PoolHelper;
  }
  override connect(signer: Signer): UniswapV3PoolHelper__factory {
    return super.connect(signer) as UniswapV3PoolHelper__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UniswapV3PoolHelperInterface {
    return new utils.Interface(_abi) as UniswapV3PoolHelperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UniswapV3PoolHelper {
    return new Contract(address, _abi, signerOrProvider) as UniswapV3PoolHelper;
  }
}
