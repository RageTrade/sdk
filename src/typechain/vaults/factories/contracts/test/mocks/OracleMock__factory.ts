/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type {
  OracleMock,
  OracleMockInterface,
} from '../../../../contracts/test/mocks/OracleMock';

const _abi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
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
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'y_target',
        type: 'uint256',
      },
      {
        internalType: 'uint160',
        name: 'x_lower',
        type: 'uint160',
      },
      {
        internalType: 'uint160',
        name: 'x_upper',
        type: 'uint160',
      },
    ],
    name: 'SolutionOutOfBounds',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: '',
        type: 'uint32',
      },
    ],
    name: 'getTwapPriceX128',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: '',
        type: 'uint32',
      },
    ],
    name: 'getTwapSqrtPriceX96',
    outputs: [
      {
        internalType: 'uint160',
        name: 'sqrtPriceX96',
        type: 'uint160',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_priceX128',
        type: 'uint256',
      },
    ],
    name: 'setPriceX128',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint160',
        name: '_sqrtPriceX96',
        type: 'uint160',
      },
    ],
    name: 'setSqrtPriceX96',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

const _bytecode =
  '0x608060405234801561001057600080fd5b5061001e600160801b600055565b6104988061002d6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063726416331461005157806372b6bb3814610066578063c9c32f2a14610096578063dd86c101146100a9575b600080fd5b61006461005f366004610386565b600055565b005b61007961007436600461039f565b6100cc565b6040516001600160a01b0390911681526020015b60405180910390f35b6100646100a43660046103c5565b6100df565b6100be6100b736600461039f565b5060005490565b60405190815260200161008d565b60006100d96000546100f7565b92915050565b6100f1816001600160a01b031661012a565b60005550565b60006100d9610198836401000276a3610125600173fffd8963efd1fc6a506488495d951d5263988d26610404565b6101b7565b60006401000276a36001600160a01b0383161080610165575073fffd8963efd1fc6a506488495d951d5263988d266001600160a01b03831610155b1561019357604051635d236c4560e01b81526001600160a01b03831660048201526024015b60405180910390fd5b6100d9825b60006100d96001600160a01b03831680680100000000000000006102d3565b6000806101c7848763ffffffff16565b905060006101d8848863ffffffff16565b9050818610806101e757508086115b1561021f5760405163f7b6b2e960e01b8152600481018790526001600160a01b0380871660248301528516604482015260640161018a565b6000805b600161022f8888610404565b6001600160a01b0316111561028d57600261024a8888610404565b610254919061042c565b61025e9088610460565b905061026d818a63ffffffff16565b91508782111561028257809550819250610223565b809650819350610223565b856001600160a01b0316876001600160a01b0316141580156102ba5750876102b8878b63ffffffff16565b145b6102c457866102c6565b855b9998505050505050505050565b600080806000198587098587029250828110838203039150508060000361030c576000841161030157600080fd5b50829004905061037f565b80841161031857600080fd5b6000848688096000868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010186841190950394909402919094039290920491909117919091029150505b9392505050565b60006020828403121561039857600080fd5b5035919050565b6000602082840312156103b157600080fd5b813563ffffffff8116811461037f57600080fd5b6000602082840312156103d757600080fd5b81356001600160a01b038116811461037f57600080fd5b634e487b7160e01b600052601160045260246000fd5b60006001600160a01b0383811690831681811015610424576104246103ee565b039392505050565b60006001600160a01b038084168061045457634e487b7160e01b600052601260045260246000fd5b92169190910492915050565b60006001600160a01b03808316818516808303821115610482576104826103ee565b0194935050505056fea164736f6c634300080e000a';

type OracleMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OracleMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class OracleMock__factory extends ContractFactory {
  constructor(...args: OracleMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<OracleMock> {
    return super.deploy(overrides || {}) as Promise<OracleMock>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): OracleMock {
    return super.attach(address) as OracleMock;
  }
  override connect(signer: Signer): OracleMock__factory {
    return super.connect(signer) as OracleMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OracleMockInterface {
    return new utils.Interface(_abi) as OracleMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OracleMock {
    return new Contract(address, _abi, signerOrProvider) as OracleMock;
  }
}
