/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type {
  Uint32L8ArrayTest,
  Uint32L8ArrayTestInterface,
} from '../../../contracts/test/Uint32L8ArrayTest';

const _abi = [
  {
    inputs: [
      {
        internalType: 'uint32',
        name: 'element',
        type: 'uint32',
      },
    ],
    name: 'U32L8_IllegalElement',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: 'element',
        type: 'uint32',
      },
    ],
    name: 'U32L8_NoSpaceLeftToInsert',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: 'element',
        type: 'uint32',
      },
    ],
    name: 'exclude',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: 'element',
        type: 'uint32',
      },
    ],
    name: 'exists',
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
        internalType: 'uint8',
        name: 'index',
        type: 'uint8',
      },
    ],
    name: 'getter',
    outputs: [
      {
        internalType: 'uint32',
        name: '',
        type: 'uint32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getterAll',
    outputs: [
      {
        internalType: 'uint32[8]',
        name: '',
        type: 'uint32[8]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: 'element',
        type: 'uint32',
      },
    ],
    name: 'include',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'length',
    outputs: [
      {
        internalType: 'uint8',
        name: 'len',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'numberOfNonZeroElements',
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
        internalType: 'uint8',
        name: 'index',
        type: 'uint8',
      },
      {
        internalType: 'uint32',
        name: 'element',
        type: 'uint32',
      },
    ],
    name: 'setter',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

const _bytecode =
  '0x608060405234801561001057600080fd5b50610933806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80634c84b36e1161005b5780634c84b36e146100fa578063557c1b5314610122578063817bbe1614610137578063dd6c35241461014a57600080fd5b806313c369ed1461008d5780631f7b6d32146100b5578063296eaea2146100cf5780633fc1d8ce146100e5575b600080fd5b6100a061009b3660046107a6565b61015d565b60405190151581526020015b60405180910390f35b6100bd61016f565b60405160ff90911681526020016100ac565b6100d761020a565b6040519081526020016100ac565b6100ed61021b565b6040516100ac91906107c8565b61010d610108366004610811565b610281565b60405163ffffffff90911681526020016100ac565b6101356101303660046107a6565b6102bb565b005b6101356101453660046107a6565b6102c9565b61013561015836600461082c565b6102d4565b60006101698183610318565b92915050565b6000805b6008811015610206576000816008811061018f5761018f61085f565b60088104919091015460079091166004026101000a900463ffffffff16156101bf57816101bb8161088b565b9250505b600081600881106101d2576101d261085f565b60088104919091015460079091166004026101000a900463ffffffff161561020657806101fe816108aa565b915050610173565b5090565b60006102166000610332565b905090565b61022361076e565b60408051610100810191829052906000906008908280855b82829054906101000a900463ffffffff1663ffffffff168152602001906004019060208260030104928301926001038202915080841161023b5790505050505050905090565b6000808260ff16600881106102985761029861085f565b600891828204019190066004029054906101000a900463ffffffff169050919050565b6102c66000826103a4565b50565b6102c66000826104e8565b8060008360ff16600881106102eb576102eb61085f565b600891828204019190066004026101000a81548163ffffffff021916908363ffffffff1602179055505050565b6000600861032684846106f8565b60ff1614159392505050565b6000805b600860ff8216101561039b57828160ff16600881106103575761035761085f565b600891828204019190066004029054906101000a900463ffffffff1663ffffffff166000036103895760ff1692915050565b806103938161088b565b915050610336565b50600892915050565b8063ffffffff166000036103d357604051631d8b110f60e11b8152600060048201526024015b60405180910390fd5b600860005b600881101561047c578263ffffffff168482600881106103fa576103fa61085f565b600891828204019190066004029054906101000a900463ffffffff1663ffffffff16036104275750505050565b600084826008811061043b5761043b61085f565b600891828204019190066004029054906101000a900463ffffffff1663ffffffff160361046a5780915061047c565b80610474816108aa565b9150506103d8565b5060071981016104a75760405163274ca29b60e11b815263ffffffff831660048201526024016103ca565b818382600881106104ba576104ba61085f565b600891828204019190066004026101000a81548163ffffffff021916908363ffffffff160217905550505050565b8063ffffffff1660000361051257604051631d8b110f60e11b8152600060048201526024016103ca565b600860005b60088110156105d2578263ffffffff168482600881106105395761053961085f565b600891828204019190066004029054906101000a900463ffffffff1663ffffffff1603610564578091505b8381600881106105765761057661085f565b600891828204019190066004029054906101000a900463ffffffff1663ffffffff166000036105c057600081116105ae5760006105b9565b6105b96001826108c3565b90506105d2565b806105ca816108aa565b915050610517565b600881146105e057806105f0565b6105ec600160086108da565b60ff165b9050600882146106f2578181036106435760008483600881106106155761061561085f565b600891828204019190066004026101000a81548163ffffffff021916908363ffffffff1602179055506106f2565b8381600881106106555761065561085f565b600891828204019190066004029054906101000a900463ffffffff1660008584600881106106855761068561085f565b600891828204019190066004028785600881106106a4576106a461085f565b600891828204019190066004028491906101000a81548163ffffffff021916908363ffffffff1602179055508391906101000a81548163ffffffff021916908363ffffffff16021790555050505b50505050565b6000805b600860ff82161015610764578263ffffffff16848260ff16600881106107245761072461085f565b600891828204019190066004029054906101000a900463ffffffff1663ffffffff1603610752579050610169565b8061075c8161088b565b9150506106fc565b5060089392505050565b6040518061010001604052806008906020820280368337509192915050565b803563ffffffff811681146107a157600080fd5b919050565b6000602082840312156107b857600080fd5b6107c18261078d565b9392505050565b6101008101818360005b60088110156107f757815163ffffffff168352602092830192909101906001016107d2565b50505092915050565b803560ff811681146107a157600080fd5b60006020828403121561082357600080fd5b6107c182610800565b6000806040838503121561083f57600080fd5b61084883610800565b91506108566020840161078d565b90509250929050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060ff821660ff81036108a1576108a1610875565b60010192915050565b6000600182016108bc576108bc610875565b5060010190565b6000828210156108d5576108d5610875565b500390565b600060ff821660ff8416808210156108f4576108f4610875565b9003939250505056fea2646970667358221220994aa6396b5cf9da678f5acac7d3bf15ceda897db10c75baeee7f94d978871f464736f6c634300080d0033';

type Uint32L8ArrayTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Uint32L8ArrayTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Uint32L8ArrayTest__factory extends ContractFactory {
  constructor(...args: Uint32L8ArrayTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Uint32L8ArrayTest> {
    return super.deploy(overrides || {}) as Promise<Uint32L8ArrayTest>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Uint32L8ArrayTest {
    return super.attach(address) as Uint32L8ArrayTest;
  }
  override connect(signer: Signer): Uint32L8ArrayTest__factory {
    return super.connect(signer) as Uint32L8ArrayTest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Uint32L8ArrayTestInterface {
    return new utils.Interface(_abi) as Uint32L8ArrayTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Uint32L8ArrayTest {
    return new Contract(address, _abi, signerOrProvider) as Uint32L8ArrayTest;
  }
}
