/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type {
  BatchedLoopTest2,
  BatchedLoopTest2Interface,
} from '../../../../contracts/test/BatchedLoopTest.sol/BatchedLoopTest2';

const _abi = [
  {
    inputs: [],
    name: 'getOutput',
    outputs: [
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'isInProgress',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'startAt',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'endBefore',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'batchSize',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: 'expectTrue',
        type: 'bool',
      },
    ],
    name: 'iterate',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'iteration',
    outputs: [
      {
        internalType: 'uint256',
        name: 'progress',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

const _bytecode =
  '0x6080806040523461001657610427908161001c8239f35b600080fdfe60808060405260048036101561001457600080fd5b600090813560e01c9283630c0399a4146102055750826349e8c31b1461006257505080636dfc2fa8146100595763ab1b4b2214610051575b600080fd5b61004c61027b565b5061004c61021f565b346102015760806003193601126102015760249081359160443592606435928315158094036101fd5785549485156101f4575b806101d357508192945b8381106100cd57506100c194505081149081156100c657508380555b14610374565b604051f35b84556100bb565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048111811515166101c6575b8080027ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe81116101b9575b6001805491680100000000000000008310156101ac575b81830180835583101561018157818a52017fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf69091015561017c906103c3565b61009f565b888a6032877f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b6101b4610344565b61013d565b6101c161037b565b610126565b6101ce61037b565b6100fb565b6101dd90866103ab565b828110156101ed575b929461009f565b50816101e6565b81359550610095565b8580fd5b5080fd5b905034610201578160031936011261020157602091548152f35b503461004c57600060031936011261004c5760206000541515604051908152f35b6020908160408183019282815285518094520193019160005b828110610267575050505090565b835185529381019392810192600101610259565b503461004c57600060031936011261004c5760405180600191825492838252602080920193816000527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6926000905b82821061032f57858703601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01686018061031e8867ffffffffffffffff831181841017610322575b8260405282610240565b0390f35b61032a610344565b610314565b845487529586019593830193908301906102ca565b507f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b1561004c57565b507f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b811981116103b7570190565b6103bf61037b565b0190565b6001907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146103b757019056fea2646970667358221220f941d78d9b61a5ac4438c08d1bfa70dc8ec0a46cb384c930ae5275c7746922a864736f6c634300080e0033';

type BatchedLoopTest2ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BatchedLoopTest2ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BatchedLoopTest2__factory extends ContractFactory {
  constructor(...args: BatchedLoopTest2ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BatchedLoopTest2> {
    return super.deploy(overrides || {}) as Promise<BatchedLoopTest2>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): BatchedLoopTest2 {
    return super.attach(address) as BatchedLoopTest2;
  }
  override connect(signer: Signer): BatchedLoopTest2__factory {
    return super.connect(signer) as BatchedLoopTest2__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BatchedLoopTest2Interface {
    return new utils.Interface(_abi) as BatchedLoopTest2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BatchedLoopTest2 {
    return new Contract(address, _abi, signerOrProvider) as BatchedLoopTest2;
  }
}
