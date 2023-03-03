/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type { PromiseOrValue } from '../../../common';
import type {
  StableSwapMock,
  StableSwapMockInterface,
} from '../../../contracts/mocks/StableSwapMock';

const _abi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'InsufficientOutput',
    type: 'error',
  },
  {
    inputs: [],
    name: 'SwapNotAllowed',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
    ],
    name: 'coins',
    outputs: [
      {
        internalType: 'contract IERC20',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'i',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'j',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'dx',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'min_dy',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: 'use_eth',
        type: 'bool',
      },
    ],
    name: 'exchange',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_price',
        type: 'uint256',
      },
    ],
    name: 'setPrice',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const;

const _bytecode =
  '0x608080604052346100e35760016020527fa6eef7e35abe7026729641147f7915573c7e97b47efa546f5f6e3230263bcb4980546001600160a01b031990811673fd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9179091557fcc69885fda6bcc1a4ace058b4a62bf5e179ea78fd58a1ccd71c22cc9b688792f80548216732f2a2543b76a4166549f7aab2e75bef0aefc5b0f17905560026000527fd9d16d34ffb15ba3a3d852f0d403e2ce1d691fb54de27ac87cd2f993f3ec330f80549091167382af49447d8a07e3bd95bd0d56f35241523fbab11790556102ea90816100e98239f35b600080fdfe6080604081815260048036101561001557600080fd5b600092833560e01c908163394747c5146100945750806391b7f5ed146100775763c66106571461004457600080fd5b3461007357602036600319011261007357816020936001600160a01b0392358152600185522054169051908152f35b8280fd5b8382346100905760203660031901126100905735815580f35b5080fd5b929050346102845760a0366003190112610284578135916024908135936044359560843580151581036102805761027257508015908180610268575b8015610255575b15610245578752602095600187526001600160a01b0391888884888320541660648951809481936323b872dd60e01b8352338b840152308c8401528860448401525af1801561023b5761021e575b50156101fe576305f5e100908181029181830414901517156101ec5787549081156101da5704945b60643586106101ca57918760449288959482526001865286822054168651978895869463a9059cbb60e01b865233908601528401525af19081156101c15750610194578280f35b816101b392903d106101ba575b6101ab8183610288565b8101906102c0565b5038808280f35b503d6101a1565b513d85823e3d90fd5b845163bb2875c360e01b81528390fd5b634e487b7160e01b8952601284528489fd5b634e487b7160e01b8852601183528388fd5b8754908181029181830414901517156101ec576305f5e10090049461014d565b61023490893d8b116101ba576101ab8183610288565b5038610125565b87513d8c823e3d90fd5b8451630dd99c5560e01b81528390fd5b506001811480156100d7575085156100d7565b50600186146100d0565b630dd99c5560e01b81529050fd5b8880fd5b8380fd5b90601f8019910116810190811067ffffffffffffffff8211176102aa57604052565b634e487b7160e01b600052604160045260246000fd5b908160209103126102d8575180151581036102d85790565b600080fdfea164736f6c6343000812000a';

type StableSwapMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StableSwapMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StableSwapMock__factory extends ContractFactory {
  constructor(...args: StableSwapMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<StableSwapMock> {
    return super.deploy(overrides || {}) as Promise<StableSwapMock>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): StableSwapMock {
    return super.attach(address) as StableSwapMock;
  }
  override connect(signer: Signer): StableSwapMock__factory {
    return super.connect(signer) as StableSwapMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StableSwapMockInterface {
    return new utils.Interface(_abi) as StableSwapMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StableSwapMock {
    return new Contract(address, _abi, signerOrProvider) as StableSwapMock;
  }
}
