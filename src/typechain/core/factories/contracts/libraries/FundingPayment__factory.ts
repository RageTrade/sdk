/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
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
];

const _bytecode =
  '0x60808060405234601757603a9081601d823930815050f35b600080fdfe600080fdfea26469706673582212201cf9eaa1d70d15f05689bfabc80e07aa95ae0c365cc158f576c740190468843664736f6c634300080e0033';

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

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<FundingPayment> {
    return super.deploy(overrides || {}) as Promise<FundingPayment>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): FundingPayment {
    return super.attach(address) as FundingPayment;
  }
  override connect(signer: Signer): FundingPayment__factory {
    return super.connect(signer) as FundingPayment__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FundingPaymentInterface {
    return new utils.Interface(_abi) as FundingPaymentInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FundingPayment {
    return new Contract(address, _abi, signerOrProvider) as FundingPayment;
  }
}
