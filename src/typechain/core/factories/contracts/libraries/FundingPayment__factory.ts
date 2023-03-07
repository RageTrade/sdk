/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
  ContractDeployTransaction,
  ContractRunner,
} from 'ethers';
import type { NonPayableOverrides } from '../../../common';
import type {
  FundingPayment,
  FundingPaymentInterface,
} from '../../../contracts/libraries/FundingPayment';

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: 'int256',
            name: 'sumAX128',
            type: 'int256',
          },
          {
            internalType: 'int256',
            name: 'sumBX128',
            type: 'int256',
          },
          {
            internalType: 'int256',
            name: 'sumFpX128',
            type: 'int256',
          },
          {
            internalType: 'uint48',
            name: 'timestampLast',
            type: 'uint48',
          },
        ],
        indexed: false,
        internalType: 'struct FundingPayment.Info',
        name: 'fundingPayment',
        type: 'tuple',
      },
      {
        indexed: false,
        internalType: 'int256',
        name: 'fundingRateX128',
        type: 'int256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'virtualPriceX128',
        type: 'uint256',
      },
    ],
    name: 'FundingPaymentStateUpdated',
    type: 'event',
  },
] as const;

const _bytecode =
  '0x60808060405234601757603a9081601d823930815050f35b600080fdfe600080fdfea2646970667358221220192e6b472af4e370601980c5254b4c88ec90cfef66f8e3e862f48e29a4d8a32b64736f6c634300080e0033';

type FundingPaymentConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FundingPaymentConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FundingPayment__factory extends ContractFactory {
  constructor(...args: FundingPaymentConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      FundingPayment & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): FundingPayment__factory {
    return super.connect(runner) as FundingPayment__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FundingPaymentInterface {
    return new Interface(_abi) as FundingPaymentInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): FundingPayment {
    return new Contract(address, _abi, runner) as unknown as FundingPayment;
  }
}
