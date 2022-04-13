/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type {
  SimulateSwap,
  SimulateSwapInterface,
} from '../../../../artifacts/contracts/libraries/SimulateSwap';

const _abi = [
  {
    inputs: [
      {
        internalType: 'uint160',
        name: 'sqrtPriceLimitX96',
        type: 'uint160',
      },
    ],
    name: 'InvalidSqrtPriceLimit',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ZeroAmount',
    type: 'error',
  },
];

const _bytecode =
  '0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220f9caf34545070c2f1e8c237696fd9f285fc4e00ba6e81407c6b4e6b8db5cbc6c64736f6c634300080d0033';

type SimulateSwapConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SimulateSwapConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SimulateSwap__factory extends ContractFactory {
  constructor(...args: SimulateSwapConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SimulateSwap> {
    return super.deploy(overrides || {}) as Promise<SimulateSwap>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): SimulateSwap {
    return super.attach(address) as SimulateSwap;
  }
  override connect(signer: Signer): SimulateSwap__factory {
    return super.connect(signer) as SimulateSwap__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SimulateSwapInterface {
    return new utils.Interface(_abi) as SimulateSwapInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SimulateSwap {
    return new Contract(address, _abi, signerOrProvider) as SimulateSwap;
  }
}
