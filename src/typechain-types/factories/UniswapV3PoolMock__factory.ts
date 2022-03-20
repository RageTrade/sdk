/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type {
  UniswapV3PoolMock,
  UniswapV3PoolMockInterface,
} from '../UniswapV3PoolMock';

const _abi = [
  {
    inputs: [],
    name: 'feeGrowthGlobal0X128',
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
    name: 'feeGrowthGlobal1X128',
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
        internalType: 'uint256',
        name: '_feeGrowthGlobal0X128',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_feeGrowthGlobal1X128',
        type: 'uint256',
      },
    ],
    name: 'setFeeGrowth',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'int24',
        name: 'tick',
        type: 'int24',
      },
      {
        internalType: 'uint128',
        name: 'liquidityGross',
        type: 'uint128',
      },
      {
        internalType: 'int128',
        name: 'liquidityNet',
        type: 'int128',
      },
      {
        internalType: 'uint256',
        name: 'feeGrowthOutside0X128',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'feeGrowthOutside1X128',
        type: 'uint256',
      },
      {
        internalType: 'int56',
        name: 'tickCumulativeOutside',
        type: 'int56',
      },
      {
        internalType: 'uint160',
        name: 'secondsPerLiquidityOutsideX128',
        type: 'uint160',
      },
      {
        internalType: 'uint32',
        name: 'secondsOutside',
        type: 'uint32',
      },
      {
        internalType: 'bool',
        name: 'initialized',
        type: 'bool',
      },
    ],
    name: 'setTick',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'int24',
        name: '',
        type: 'int24',
      },
    ],
    name: 'ticks',
    outputs: [
      {
        internalType: 'uint128',
        name: 'liquidityGross',
        type: 'uint128',
      },
      {
        internalType: 'int128',
        name: 'liquidityNet',
        type: 'int128',
      },
      {
        internalType: 'uint256',
        name: 'feeGrowthOutside0X128',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'feeGrowthOutside1X128',
        type: 'uint256',
      },
      {
        internalType: 'int56',
        name: 'tickCumulativeOutside',
        type: 'int56',
      },
      {
        internalType: 'uint160',
        name: 'secondsPerLiquidityOutsideX128',
        type: 'uint160',
      },
      {
        internalType: 'uint32',
        name: 'secondsOutside',
        type: 'uint32',
      },
      {
        internalType: 'bool',
        name: 'initialized',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

const _bytecode =
  '0x608060405234801561001057600080fd5b50610481806100206000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c8063ecb217ea11610050578063ecb217ea146100a3578063f3058399146101cb578063f30dba93146101d457600080fd5b8063461413191461006c5780637a79037514610088575b600080fd5b61007560025481565b6040519081526020015b60405180910390f35b6100a16100963660046102e5565b600191909155600255565b005b6100a16100b1366004610366565b600298890b60009081526020819052604090206fffffffffffffffffffffffffffffffff978816700100000000000000000000000000000000029790981696909617875560018701949094559585019190915560039093018054921515600160f81b027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff63ffffffff909316600160d81b02929092167affffffffffffffffffffffffffffffffffffffffffffffffffffff73ffffffffffffffffffffffffffffffffffffffff909616670100000000000000027fffffffffff00000000000000000000000000000000000000000000000000000090941666ffffffffffffff90951694909417929092179390931691909117919091179055565b61007560015481565b6102736101e2366004610429565b60006020819052908152604090208054600182015460028301546003909301546fffffffffffffffffffffffffffffffff831693700100000000000000000000000000000000909304600f0b9290600681900b90670100000000000000810473ffffffffffffffffffffffffffffffffffffffff1690600160d81b810463ffffffff1690600160f81b900460ff1688565b604080516fffffffffffffffffffffffffffffffff9099168952600f9790970b602089015295870194909452606086019290925260060b608085015273ffffffffffffffffffffffffffffffffffffffff1660a084015263ffffffff1660c0830152151560e08201526101000161007f565b600080604083850312156102f857600080fd5b50508035926020909101359150565b8035600281900b811461031957600080fd5b919050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461031957600080fd5b803563ffffffff8116811461031957600080fd5b8035801515811461031957600080fd5b60008060008060008060008060006101208a8c03121561038557600080fd5b61038e8a610307565b985060208a01356fffffffffffffffffffffffffffffffff811681146103b357600080fd5b975060408a0135600f81900b81146103ca57600080fd5b965060608a0135955060808a0135945060a08a0135600681900b81146103ef57600080fd5b93506103fd60c08b0161031e565b925061040b60e08b01610342565b915061041a6101008b01610356565b90509295985092959850929598565b60006020828403121561043b57600080fd5b61044482610307565b939250505056fea2646970667358221220a07b901c0285e0750a55192c0d98c41d13d871434591931beb955d639718539d64736f6c634300080d0033';

type UniswapV3PoolMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UniswapV3PoolMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UniswapV3PoolMock__factory extends ContractFactory {
  constructor(...args: UniswapV3PoolMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = 'UniswapV3PoolMock';
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<UniswapV3PoolMock> {
    return super.deploy(overrides || {}) as Promise<UniswapV3PoolMock>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): UniswapV3PoolMock {
    return super.attach(address) as UniswapV3PoolMock;
  }
  connect(signer: Signer): UniswapV3PoolMock__factory {
    return super.connect(signer) as UniswapV3PoolMock__factory;
  }
  static readonly contractName: 'UniswapV3PoolMock';
  public readonly contractName: 'UniswapV3PoolMock';
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UniswapV3PoolMockInterface {
    return new utils.Interface(_abi) as UniswapV3PoolMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UniswapV3PoolMock {
    return new Contract(address, _abi, signerOrProvider) as UniswapV3PoolMock;
  }
}
