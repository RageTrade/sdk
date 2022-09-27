/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type { PromiseOrValue } from '../../../../../common';
import type {
  LiquidityPosition,
  LiquidityPositionInterface,
} from '../../../../../@ragetrade/core/contracts/libraries/LiquidityPosition';

const _abi = [
  {
    inputs: [],
    name: 'LP_AlreadyInitialized',
    type: 'error',
  },
  {
    inputs: [],
    name: 'LP_IneligibleLimitOrderRemoval',
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
        internalType: 'int128',
        name: 'liquidityDelta',
        type: 'int128',
      },
      {
        indexed: false,
        internalType: 'enum IClearingHouseEnums.LimitOrderType',
        name: 'limitOrderType',
        type: 'uint8',
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
        name: 'sqrtPriceX96',
        type: 'uint160',
      },
    ],
    name: 'LiquidityChanged',
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
        name: 'amount',
        type: 'int256',
      },
    ],
    name: 'LiquidityPositionEarningsRealized',
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
        name: 'amount',
        type: 'int256',
      },
      {
        indexed: false,
        internalType: 'int256',
        name: 'sumALastX128',
        type: 'int256',
      },
      {
        indexed: false,
        internalType: 'int256',
        name: 'sumBInsideLastX128',
        type: 'int256',
      },
      {
        indexed: false,
        internalType: 'int256',
        name: 'sumFpInsideLastX128',
        type: 'int256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'sumFeeInsideLastX128',
        type: 'uint256',
      },
    ],
    name: 'LiquidityPositionFundingPaymentRealized',
    type: 'event',
  },
];

const _bytecode =
  '0x602d6037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea164736f6c634300080e000a';

type LiquidityPositionConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LiquidityPositionConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LiquidityPosition__factory extends ContractFactory {
  constructor(...args: LiquidityPositionConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<LiquidityPosition> {
    return super.deploy(overrides || {}) as Promise<LiquidityPosition>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): LiquidityPosition {
    return super.attach(address) as LiquidityPosition;
  }
  override connect(signer: Signer): LiquidityPosition__factory {
    return super.connect(signer) as LiquidityPosition__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LiquidityPositionInterface {
    return new utils.Interface(_abi) as LiquidityPositionInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LiquidityPosition {
    return new Contract(address, _abi, signerOrProvider) as LiquidityPosition;
  }
}