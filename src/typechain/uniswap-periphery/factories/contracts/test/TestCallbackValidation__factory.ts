/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type {
  TestCallbackValidation,
  TestCallbackValidationInterface,
} from '../../../contracts/test/TestCallbackValidation';

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'factory',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'tokenA',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'tokenB',
        type: 'address',
      },
      {
        internalType: 'uint24',
        name: 'fee',
        type: 'uint24',
      },
    ],
    name: 'verifyCallback',
    outputs: [
      {
        internalType: 'contract IUniswapV3Pool',
        name: 'pool',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

const _bytecode =
  '0x608060405234801561001057600080fd5b506102eb806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80638bdb192514610030575b600080fd5b61007f6004803603608081101561004657600080fd5b50803573ffffffffffffffffffffffffffffffffffffffff908116916020810135821691604082013516906060013562ffffff166100a8565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b60006100b6858585856100bf565b95945050505050565b60006100b6856100d08686866100d5565b610152565b6100dd6102be565b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161115610115579192915b506040805160608101825273ffffffffffffffffffffffffffffffffffffffff948516815292909316602083015262ffffff169181019190915290565b600061015e8383610188565b90503373ffffffffffffffffffffffffffffffffffffffff82161461018257600080fd5b92915050565b6000816020015173ffffffffffffffffffffffffffffffffffffffff16826000015173ffffffffffffffffffffffffffffffffffffffff16106101ca57600080fd5b508051602080830151604093840151845173ffffffffffffffffffffffffffffffffffffffff94851681850152939091168385015262ffffff166060808401919091528351808403820181526080840185528051908301207fff0000000000000000000000000000000000000000000000000000000000000060a085015294901b7fffffffffffffffffffffffffffffffffffffffff0000000000000000000000001660a183015260b58201939093527fe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b5460d5808301919091528251808303909101815260f5909101909152805191012090565b60408051606081018252600080825260208201819052918101919091529056fea164736f6c6343000706000a';

type TestCallbackValidationConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestCallbackValidationConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestCallbackValidation__factory extends ContractFactory {
  constructor(...args: TestCallbackValidationConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestCallbackValidation> {
    return super.deploy(overrides || {}) as Promise<TestCallbackValidation>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TestCallbackValidation {
    return super.attach(address) as TestCallbackValidation;
  }
  override connect(signer: Signer): TestCallbackValidation__factory {
    return super.connect(signer) as TestCallbackValidation__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestCallbackValidationInterface {
    return new utils.Interface(_abi) as TestCallbackValidationInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestCallbackValidation {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TestCallbackValidation;
  }
}
