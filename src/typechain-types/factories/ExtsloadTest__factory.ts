/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { ExtsloadTest, ExtsloadTestInterface } from '../ExtsloadTest';

const _abi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'slot',
        type: 'bytes32',
      },
    ],
    name: 'extsload',
    outputs: [
      {
        internalType: 'bytes32',
        name: 'val',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32[]',
        name: 'slots',
        type: 'bytes32[]',
      },
    ],
    name: 'extsload',
    outputs: [
      {
        internalType: 'bytes32[]',
        name: '',
        type: 'bytes32[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

const _bytecode =
  '0x608060405234801561001057600080fd5b506009600355601060045560196005556101ec8061002f6000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80631e2eaeaf1461003b578063dbd035ff14610060575b600080fd5b61004d6100493660046100ae565b5490565b6040519081526020015b60405180910390f35b61007361006e3660046100dd565b610080565b604051610057919061019b565b606060208251028201602001602083015b818110156100a6578051548152602001610091565b509192915050565b6000602082840312156100c057600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b600060208083850312156100f057600080fd5b823567ffffffffffffffff8082111561010857600080fd5b818501915085601f83011261011c57600080fd5b81358181111561012e5761012e6100c7565b8060051b604051601f19603f83011681018181108582111715610153576101536100c7565b60405291825284820192508381018501918883111561017157600080fd5b938501935b8285101561018f57843584529385019392850192610176565b98975050505050505050565b6020808252825182820181905260009190848201906040850190845b818110156101d3578351835292840192918401916001016101b7565b5090969550505050505056fea164736f6c634300080a000a';

type ExtsloadTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ExtsloadTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ExtsloadTest__factory extends ContractFactory {
  constructor(...args: ExtsloadTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ExtsloadTest> {
    return super.deploy(overrides || {}) as Promise<ExtsloadTest>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ExtsloadTest {
    return super.attach(address) as ExtsloadTest;
  }
  connect(signer: Signer): ExtsloadTest__factory {
    return super.connect(signer) as ExtsloadTest__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ExtsloadTestInterface {
    return new utils.Interface(_abi) as ExtsloadTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ExtsloadTest {
    return new Contract(address, _abi, signerOrProvider) as ExtsloadTest;
  }
}
