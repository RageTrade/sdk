/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type {
  SignedMathTest,
  SignedMathTestInterface,
} from '../SignedMathTest';

const _abi = [
  {
    inputs: [
      {
        internalType: 'int256',
        name: 'value',
        type: 'int256',
      },
    ],
    name: 'abs',
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
        name: 'value',
        type: 'int256',
      },
    ],
    name: 'absUint',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'int256',
        name: 'a',
        type: 'int256',
      },
      {
        internalType: 'bool',
        name: 'positive',
        type: 'bool',
      },
    ],
    name: 'extractSign',
    outputs: [
      {
        internalType: 'uint256',
        name: '_a',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'int256',
        name: 'a',
        type: 'int256',
      },
    ],
    name: 'extractSign',
    outputs: [
      {
        internalType: 'uint256',
        name: '_a',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'int256',
        name: 'value',
        type: 'int256',
      },
    ],
    name: 'sign',
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
];

const _bytecode =
  '0x608060405234801561001057600080fd5b50610299806100206000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c80635755298d116100505780635755298d146100ba57806363fa2823146100cd578063ae610b48146100e057600080fd5b80631b5ac4b51461006c57806328f7328014610092575b600080fd5b61007f61007a3660046101b6565b6100f3565b6040519081526020015b60405180910390f35b6100a56100a03660046101cf565b610104565b60408051928352901515602083015201610089565b6100a56100c83660046101b6565b61011c565b61007f6100db3660046101b6565b610131565b61007f6100ee3660046101b6565b61013c565b60006100fe82610147565b92915050565b6000806101118484610162565b915091509250929050565b6000806101288361018c565b91509150915091565b60006100fe826100f3565b60006100fe8261019a565b600080821361015e5761015982610204565b6100fe565b5090565b60008060008412156101815791159161017a84610204565b9150610185565b8391505b5092909150565b600080610128836001610162565b6000808212156101ae576101596001610204565b600192915050565b6000602082840312156101c857600080fd5b5035919050565b600080604083850312156101e257600080fd5b82359150602083013580151581146101f957600080fd5b809150509250929050565b60007f8000000000000000000000000000000000000000000000000000000000000000820361025c577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b506000039056fea2646970667358221220ecedebfd034ff5ce76cbfb93ff1d144456e651284d18efa427bd688149949ea064736f6c634300080d0033';

type SignedMathTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SignedMathTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SignedMathTest__factory extends ContractFactory {
  constructor(...args: SignedMathTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = 'SignedMathTest';
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SignedMathTest> {
    return super.deploy(overrides || {}) as Promise<SignedMathTest>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SignedMathTest {
    return super.attach(address) as SignedMathTest;
  }
  connect(signer: Signer): SignedMathTest__factory {
    return super.connect(signer) as SignedMathTest__factory;
  }
  static readonly contractName: 'SignedMathTest';
  public readonly contractName: 'SignedMathTest';
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SignedMathTestInterface {
    return new utils.Interface(_abi) as SignedMathTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SignedMathTest {
    return new Contract(address, _abi, signerOrProvider) as SignedMathTest;
  }
}
