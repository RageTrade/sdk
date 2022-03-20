/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type {
  FundingPaymentTest,
  FundingPaymentTestInterface,
} from '../FundingPaymentTest';

const _abi = [
  {
    inputs: [
      {
        internalType: 'int256',
        name: 'sumA',
        type: 'int256',
      },
      {
        internalType: 'uint48',
        name: 'timestampLast',
        type: 'uint48',
      },
      {
        internalType: 'uint48',
        name: 'blockTimestamp',
        type: 'uint48',
      },
      {
        internalType: 'uint256',
        name: 'realPriceX128',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'virtualPriceX128',
        type: 'uint256',
      },
    ],
    name: 'extrapolatedSumAX128',
    outputs: [
      {
        internalType: 'int256',
        name: '',
        type: 'int256',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
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
        internalType: 'int256',
        name: 'sumALatestX128',
        type: 'int256',
      },
    ],
    name: 'extrapolatedSumFpX128',
    outputs: [
      {
        internalType: 'int256',
        name: '',
        type: 'int256',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'fpGlobal',
    outputs: [
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
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint48',
        name: 'timestampLast',
        type: 'uint48',
      },
      {
        internalType: 'uint48',
        name: 'blockTimestamp',
        type: 'uint48',
      },
      {
        internalType: 'uint256',
        name: 'realPriceX128',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'virtualPriceX128',
        type: 'uint256',
      },
    ],
    name: 'nextAX128',
    outputs: [
      {
        internalType: 'int256',
        name: '',
        type: 'int256',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'int256',
        name: 'vTokenAmount',
        type: 'int256',
      },
      {
        internalType: 'uint256',
        name: 'liquidity',
        type: 'uint256',
      },
      {
        internalType: 'uint48',
        name: 'blockTimestamp',
        type: 'uint48',
      },
      {
        internalType: 'uint256',
        name: 'realPriceX128',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'virtualPriceX128',
        type: 'uint256',
      },
    ],
    name: 'update',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

const _bytecode =
  '0x608060405234801561001057600080fd5b5061079e806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063115635da1461005c5780631d14114f146100825780636c544335146100955780637cfee5a8146100db578063951d34f0146100f0575b600080fd5b61006f61006a366004610519565b610103565b6040519081526020015b60405180910390f35b61006f610090366004610567565b61011c565b6000546001546002546003546100b39392919065ffffffffffff1684565b6040805194855260208501939093529183015265ffffffffffff166060820152608001610079565b6100ee6100e93660046105a9565b610133565b005b61006f6100fe3660046105d8565b610149565b60006101128686868686610157565b9695505050505050565b600061012a8585858561016f565b95945050505050565b6101426000868686868661019e565b5050505050565b600061012a858585856102af565b60006101658585858561016f565b6101129087610620565b600061012a61017e8686610661565b65ffffffffffff16620151806101978587828282610688565b91906102d4565b60038601546000906101ba9065ffffffffffff1685858561016f565b60018801549091506101d2908290600160801b610320565b8760020160008282546101e59190610620565b90915550508654819088906000906101fe908490610620565b90915550610213905086600160801b8761036e565b8760010160008282546102269190610620565b909155505060038701805465ffffffffffff861665ffffffffffff199091168117909155604080518954815260018a0154602082015260028a01548183015260608101929092526080820185905260a08201849052517faa55fabd6f264910ebc37d1f213e504b0952aeed471eac51bb24a792cf40ce789181900360c00190a150505050505050565b60006102ca6102be8684610688565b8590600160801b61036e565b61012a9084610620565b60006103026102fd600086126102ea57856102f6565b6102f6866000196106c7565b85856103cb565b61047d565b90506000841215610319576103168161074c565b90505b9392505050565b600061032d84848461036e565b905060008112801561035d575061035d61034685610493565b61034f85610493565b61035885610493565b6104a4565b156103195761031660001982610620565b6000600181808061037f88856104bd565b9450925061038d87856104bd565b9450915061039b86856104bd565b945090506103ad6102fd8484846103cb565b9450836103c0576103bd8561074c565b94505b505050509392505050565b600080806000198587098587029250828110838203039150508060000361040457600084116103f957600080fd5b508290049050610319565b80841161041057600080fd5b6000848688096000868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010186841190950394909402919094039290920491909117919091029150509392505050565b6000600160ff1b821061048f57600080fd5b5090565b600061049e826104e7565b92915050565b60008183850980156104b557600191505b509392505050565b60008060008412156104dc579115916104d58461074c565b91506104e0565b8391505b5092909150565b600080821361048f576104f98261074c565b61049e565b803565ffffffffffff8116811461051457600080fd5b919050565b600080600080600060a0868803121561053157600080fd5b85359450610541602087016104fe565b935061054f604087016104fe565b94979396509394606081013594506080013592915050565b6000806000806080858703121561057d57600080fd5b610586856104fe565b9350610594602086016104fe565b93969395505050506040820135916060013590565b600080600080600060a086880312156105c157600080fd5b853594506020860135935061054f604087016104fe565b600080600080608085870312156105ee57600080fd5b5050823594602084013594506040840135936060013592509050565b634e487b7160e01b600052601160045260246000fd5b600080821280156001600160ff1b03849003851316156106425761064261060a565b600160ff1b839003841281161561065b5761065b61060a565b50500190565b600065ffffffffffff838116908316818110156106805761068061060a565b039392505050565b60008083128015600160ff1b8501841216156106a6576106a661060a565b6001600160ff1b03840183138116156106c1576106c161060a565b50500390565b60006001600160ff1b03818413828413808216868404861116156106ed576106ed61060a565b600160ff1b600087128281168783058912161561070c5761070c61060a565b600087129250878205871284841616156107285761072861060a565b8785058712818416161561073e5761073e61060a565b505050929093029392505050565b6000600160ff1b82016107615761076161060a565b506000039056fea2646970667358221220a4dbe4bfb68ac95ee59b4791e71e967731a3dca2e784f99f617ba2c49c4ca98a64736f6c634300080d0033';

type FundingPaymentTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FundingPaymentTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FundingPaymentTest__factory extends ContractFactory {
  constructor(...args: FundingPaymentTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = 'FundingPaymentTest';
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<FundingPaymentTest> {
    return super.deploy(overrides || {}) as Promise<FundingPaymentTest>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): FundingPaymentTest {
    return super.attach(address) as FundingPaymentTest;
  }
  connect(signer: Signer): FundingPaymentTest__factory {
    return super.connect(signer) as FundingPaymentTest__factory;
  }
  static readonly contractName: 'FundingPaymentTest';
  public readonly contractName: 'FundingPaymentTest';
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FundingPaymentTestInterface {
    return new utils.Interface(_abi) as FundingPaymentTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FundingPaymentTest {
    return new Contract(address, _abi, signerOrProvider) as FundingPaymentTest;
  }
}
