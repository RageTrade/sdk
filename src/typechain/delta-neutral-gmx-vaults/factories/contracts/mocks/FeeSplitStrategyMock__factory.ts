/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type { PromiseOrValue } from '../../../common';
import type {
  FeeSplitStrategyMock,
  FeeSplitStrategyMockInterface,
} from '../../../contracts/mocks/FeeSplitStrategyMock';

const _abi = [
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'availableLiquidity',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'usedLiquidity',
        type: 'uint256',
      },
    ],
    name: 'calculateFeeSplit',
    outputs: [
      {
        internalType: 'uint256',
        name: 'feeSplitRate',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getMaxVariableBorrowRate',
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
    inputs: [],
    name: 'info',
    outputs: [
      {
        internalType: 'uint128',
        name: 'optimalUtilizationRate',
        type: 'uint128',
      },
      {
        internalType: 'uint128',
        name: 'baseVariableBorrowRate',
        type: 'uint128',
      },
      {
        internalType: 'uint128',
        name: 'variableRateSlope1',
        type: 'uint128',
      },
      {
        internalType: 'uint128',
        name: 'variableRateSlope2',
        type: 'uint128',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'uint128',
            name: 'optimalUtilizationRate',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'baseVariableBorrowRate',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'variableRateSlope1',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'variableRateSlope2',
            type: 'uint128',
          },
        ],
        internalType: 'struct FeeSplitStrategy.Info',
        name: '_info',
        type: 'tuple',
      },
    ],
    name: 'setFeeSplitStrategy',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

const _bytecode =
  '0x608080604052346100165761042f908161001c8239f35b600080fdfe608080604052600436101561001357600080fd5b600090813560e01c908163370158ea1461020a575080637558c28d14610109578063761b914514610095576380031e371461004d57600080fd5b346100925780600319360112610092576020905461008960015461007f6001600160801b03938483169060801c61024d565b9060801c9061024d565b16604051908152f35b80fd5b5034610092576080366003190112610092576004356001600160801b039081811680910361010557602435908282168203610101576001600160801b0319809260801b16178355604435918083168093036101015760643590811681036101015760801b161760015580f35b8380fd5b8280fd5b503461009257604036600319011261009257602435806101ef5750805b8154916001600160801b0391828416916c0c9f2c9cd04674edea40000000928084039384116101db57808311156101b45782039182116101a0575091610191610175602095936101989561028b565b610188600154948486169060801c61024d565b9360801c610322565b911661027e565b604051908152f35b634e487b7160e01b81526011600452602490fd5b905060209492506101cd916101d69460015416906103ad565b9060801c61027e565b610198565b634e487b7160e01b82526011600452602482fd5b806101ff6102059260043561027e565b9061028b565b610126565b90503461024957816003193601126102495760809154600154906001600160801b03908181168452841c602084015281166040830152821c6060820152f35b5080fd5b9190916001600160801b038080941691160191821161026857565b634e487b7160e01b600052601160045260246000fd5b9190820180921161026857565b906c0c9f2c9cd04674edea40000000906000198284099282810292838086109503948086039514610314578483111561030f5782910981806000031680920460028082600302188083028203028083028203028083028203028083028203028083028203028092029003029360018380600003040190848311900302920304170290565b600080fd5b50508092501561030f570490565b90919060001983820983820291828083109203948286039260009614610395576c0c9f2c9cd04674edea400000009183831115610391577f7d33c22789773a07feda8b6f0930e26fa397c439f1d5cf4b2eb27d7306d2dc999596500990828211900360e21b9103601e1c170290565b8680fd5b5050506c0c9f2c9cd04674edea400000009192500490565b916000198284099282810292838086109503948086039514610314578483111561030f578291098180600003168092046002808260030218808302820302808302820302808302820302808302820302808302820302809202900302936001838060000304019084831190030292030417029056fea164736f6c6343000811000a';

type FeeSplitStrategyMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FeeSplitStrategyMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FeeSplitStrategyMock__factory extends ContractFactory {
  constructor(...args: FeeSplitStrategyMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<FeeSplitStrategyMock> {
    return super.deploy(overrides || {}) as Promise<FeeSplitStrategyMock>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): FeeSplitStrategyMock {
    return super.attach(address) as FeeSplitStrategyMock;
  }
  override connect(signer: Signer): FeeSplitStrategyMock__factory {
    return super.connect(signer) as FeeSplitStrategyMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FeeSplitStrategyMockInterface {
    return new utils.Interface(_abi) as FeeSplitStrategyMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FeeSplitStrategyMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as FeeSplitStrategyMock;
  }
}