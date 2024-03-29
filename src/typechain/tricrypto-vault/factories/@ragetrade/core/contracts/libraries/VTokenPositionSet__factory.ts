/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type { PromiseOrValue } from '../../../../../common';
import type {
  VTokenPositionSet,
  VTokenPositionSetInterface,
} from '../../../../../@ragetrade/core/contracts/libraries/VTokenPositionSet';

const _abi = [
  {
    inputs: [
      {
        internalType: 'uint32',
        name: 'poolId',
        type: 'uint32',
      },
    ],
    name: 'VPS_DeactivationFailed',
    type: 'error',
  },
  {
    inputs: [],
    name: 'VPS_IncorrectUpdate',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: 'poolId',
        type: 'uint32',
      },
    ],
    name: 'VPS_TokenInactive',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'accountId',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'uint32',
        name: 'poolId',
        type: 'uint32',
      },
      {
        indexed: false,
        internalType: 'int256',
        name: 'vTokenAmountOut',
        type: 'int256',
      },
      {
        indexed: false,
        internalType: 'int256',
        name: 'vQuoteAmountOut',
        type: 'int256',
      },
      {
        indexed: false,
        internalType: 'uint160',
        name: 'sqrtPriceX96Start',
        type: 'uint160',
      },
      {
        indexed: false,
        internalType: 'uint160',
        name: 'sqrtPriceX96End',
        type: 'uint160',
      },
    ],
    name: 'TokenPositionChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'accountId',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'uint32',
        name: 'poolId',
        type: 'uint32',
      },
      {
        indexed: false,
        internalType: 'int256',
        name: 'amount',
        type: 'int256',
      },
      {
        indexed: false,
        internalType: 'int256',
        name: 'sumALastX128',
        type: 'int256',
      },
    ],
    name: 'TokenPositionFundingPaymentRealized',
    type: 'event',
  },
] as const;

const _bytecode =
  '0x602d6037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea164736f6c634300080e000a';

type VTokenPositionSetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VTokenPositionSetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class VTokenPositionSet__factory extends ContractFactory {
  constructor(...args: VTokenPositionSetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<VTokenPositionSet> {
    return super.deploy(overrides || {}) as Promise<VTokenPositionSet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): VTokenPositionSet {
    return super.attach(address) as VTokenPositionSet;
  }
  override connect(signer: Signer): VTokenPositionSet__factory {
    return super.connect(signer) as VTokenPositionSet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VTokenPositionSetInterface {
    return new utils.Interface(_abi) as VTokenPositionSetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VTokenPositionSet {
    return new Contract(address, _abi, signerOrProvider) as VTokenPositionSet;
  }
}
