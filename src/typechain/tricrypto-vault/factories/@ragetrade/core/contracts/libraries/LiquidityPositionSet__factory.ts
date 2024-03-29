/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type { PromiseOrValue } from '../../../../../common';
import type {
  LiquidityPositionSet,
  LiquidityPositionSetInterface,
} from '../../../../../@ragetrade/core/contracts/libraries/LiquidityPositionSet';

const _abi = [
  {
    inputs: [
      {
        internalType: 'int24',
        name: 'tickLower',
        type: 'int24',
      },
      {
        internalType: 'int24',
        name: 'tickUpper',
        type: 'int24',
      },
      {
        internalType: 'uint256',
        name: 'liquidity',
        type: 'uint256',
      },
    ],
    name: 'LPS_DeactivationFailed',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'int24',
        name: 'tickLower',
        type: 'int24',
      },
      {
        internalType: 'int24',
        name: 'tickUpper',
        type: 'int24',
      },
    ],
    name: 'LPS_IllegalTicks',
    type: 'error',
  },
  {
    inputs: [],
    name: 'LPS_InactiveRange',
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
        internalType: 'int24',
        name: 'tickLower',
        type: 'int24',
      },
      {
        indexed: false,
        internalType: 'int24',
        name: 'tickUpper',
        type: 'int24',
      },
      {
        indexed: false,
        internalType: 'int256',
        name: 'vTokenAmountOut',
        type: 'int256',
      },
    ],
    name: 'TokenPositionChangedDueToLiquidityChanged',
    type: 'event',
  },
] as const;

const _bytecode =
  '0x602d6037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea164736f6c634300080e000a';

type LiquidityPositionSetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LiquidityPositionSetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LiquidityPositionSet__factory extends ContractFactory {
  constructor(...args: LiquidityPositionSetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<LiquidityPositionSet> {
    return super.deploy(overrides || {}) as Promise<LiquidityPositionSet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): LiquidityPositionSet {
    return super.attach(address) as LiquidityPositionSet;
  }
  override connect(signer: Signer): LiquidityPositionSet__factory {
    return super.connect(signer) as LiquidityPositionSet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LiquidityPositionSetInterface {
    return new utils.Interface(_abi) as LiquidityPositionSetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LiquidityPositionSet {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as LiquidityPositionSet;
  }
}
