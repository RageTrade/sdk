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
  '0x608060405234801561001057600080fd5b5061038a806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063461413191461005c5780637a79037514610078578063ecb217ea14610093578063f305839914610150578063f30dba9314610159575b600080fd5b61006560025481565b6040519081526020015b60405180910390f35b61009161008636600461022d565b600191909155600255565b005b6100916100a13660046102a1565b600298890b60009081526020819052604090206001600160801b03978816600160801b029790981696909617875560018701949094559585019190915560039093018054921515600160f81b026001600160f81b0363ffffffff909316600160d81b02929092166001600160d81b036001600160a01b03909616600160381b026001600160d81b031990941666ffffffffffffff90951694909417929092179390931691909117919091179055565b61006560015481565b6101d161016736600461035b565b60006020819052908152604090208054600182015460028301546003909301546001600160801b03831693600160801b909304600f0b9290600681900b90600160381b81046001600160a01b031690600160d81b810463ffffffff1690600160f81b900460ff1688565b604080516001600160801b039099168952600f9790970b602089015295870194909452606086019290925260060b60808501526001600160a01b031660a084015263ffffffff1660c0830152151560e08201526101000161006f565b6000806040838503121561024057600080fd5b50508035926020909101359150565b8035600281900b811461026157600080fd5b919050565b80356001600160a01b038116811461026157600080fd5b803563ffffffff8116811461026157600080fd5b8035801515811461026157600080fd5b60008060008060008060008060006101208a8c0312156102c057600080fd5b6102c98a61024f565b985060208a01356001600160801b03811681146102e557600080fd5b975060408a0135600f81900b81146102fc57600080fd5b965060608a0135955060808a0135945060a08a0135600681900b811461032157600080fd5b935061032f60c08b01610266565b925061033d60e08b0161027d565b915061034c6101008b01610291565b90509295985092959850929598565b60006020828403121561036d57600080fd5b6103768261024f565b939250505056fea164736f6c634300080a000a';

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
