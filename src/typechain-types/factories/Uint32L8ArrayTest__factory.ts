/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type {
  Uint32L8ArrayTest,
  Uint32L8ArrayTestInterface,
} from '../Uint32L8ArrayTest';

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
  '0x608060405234801561001057600080fd5b50610928806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80634c84b36e1161005b5780634c84b36e146100fa578063557c1b5314610122578063817bbe1614610137578063dd6c35241461014a57600080fd5b806313c369ed1461008d5780631f7b6d32146100b5578063296eaea2146100cf5780633fc1d8ce146100e5575b600080fd5b6100a061009b366004610798565b61015d565b60405190151581526020015b60405180910390f35b6100bd61016f565b60405160ff90911681526020016100ac565b6100d761020d565b6040519081526020016100ac565b6100ed61021e565b6040516100ac91906107ba565b61010d610108366004610803565b610284565b60405163ffffffff90911681526020016100ac565b610135610130366004610798565b6102be565b005b610135610145366004610798565b6102cc565b61013561015836600461081e565b6102d7565b6000610169818361031b565b92915050565b6000805b6008811015610209576000816008811061018f5761018f610851565b60088104919091015460079091166004026101000a900463ffffffff16156101bf57816101bb8161087d565b9250505b600081600881106101d2576101d2610851565b60088104919091015460079091166004026101000a900463ffffffff166101f7575090565b806102018161089d565b915050610173565b5090565b60006102196000610335565b905090565b610226610760565b60408051610100810191829052906000906008908280855b82829054906101000a900463ffffffff1663ffffffff168152602001906004019060208260030104928301926001038202915080841161023e5790505050505050905090565b6000808260ff166008811061029b5761029b610851565b600891828204019190066004029054906101000a900463ffffffff169050919050565b6102c960008261039f565b50565b6102c96000826104e2565b8060008360ff16600881106102ee576102ee610851565b600891828204019190066004026101000a81548163ffffffff021916908363ffffffff1602179055505050565b6000600861032984846106e9565b60ff1614159392505050565b6000805b600860ff8216101561039657828160ff166008811061035a5761035a610851565b60088104919091015460079091166004026101000a900463ffffffff166103845760ff1692915050565b8061038e8161087d565b915050610339565b50600892915050565b63ffffffff81166103cb57604051631d8b110f60e11b8152600060048201526024015b60405180910390fd5b600860005b6008811015610476578263ffffffff168482600881106103f2576103f2610851565b600891828204019190066004029054906101000a900463ffffffff1663ffffffff1614156104205750505050565b600084826008811061043457610434610851565b600891828204019190066004029054906101000a900463ffffffff1663ffffffff16141561046457809150610476565b8061046e8161089d565b9150506103d0565b5060088114156104a15760405163274ca29b60e11b815263ffffffff831660048201526024016103c2565b818382600881106104b4576104b4610851565b600891828204019190066004026101000a81548163ffffffff021916908363ffffffff160217905550505050565b63ffffffff811661050957604051631d8b110f60e11b8152600060048201526024016103c2565b600860005b60088110156105c2578263ffffffff1684826008811061053057610530610851565b600891828204019190066004029054906101000a900463ffffffff1663ffffffff16141561055c578091505b83816008811061056e5761056e610851565b60088104919091015460079091166004026101000a900463ffffffff166105b0576000811161059e5760006105a9565b6105a96001826108b8565b90506105c2565b806105ba8161089d565b91505061050e565b600881146105d057806105e0565b6105dc600160086108cf565b60ff165b9050600882146106e3578181141561063457600084836008811061060657610606610851565b600891828204019190066004026101000a81548163ffffffff021916908363ffffffff1602179055506106e3565b83816008811061064657610646610851565b600891828204019190066004029054906101000a900463ffffffff16600085846008811061067657610676610851565b6008918282040191900660040287856008811061069557610695610851565b600891828204019190066004028491906101000a81548163ffffffff021916908363ffffffff1602179055508391906101000a81548163ffffffff021916908363ffffffff16021790555050505b50505050565b6000805b600860ff82161015610756578263ffffffff16848260ff166008811061071557610715610851565b600891828204019190066004029054906101000a900463ffffffff1663ffffffff161415610744579050610169565b8061074e8161087d565b9150506106ed565b5060089392505050565b6040518061010001604052806008906020820280368337509192915050565b803563ffffffff8116811461079357600080fd5b919050565b6000602082840312156107aa57600080fd5b6107b38261077f565b9392505050565b6101008101818360005b60088110156107e957815163ffffffff168352602092830192909101906001016107c4565b50505092915050565b803560ff8116811461079357600080fd5b60006020828403121561081557600080fd5b6107b3826107f2565b6000806040838503121561083157600080fd5b61083a836107f2565b91506108486020840161077f565b90509250929050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060ff821660ff81141561089457610894610867565b60010192915050565b60006000198214156108b1576108b1610867565b5060010190565b6000828210156108ca576108ca610867565b500390565b600060ff821660ff8416808210156108e9576108e9610867565b9003939250505056fea26469706673582212208713d234378a95da6d2f60aa045d59549b8012486d209468354184545b70f80f64736f6c634300080c0033';

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
    this.contractName = 'Uint32L8ArrayTest';
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Uint32L8ArrayTest> {
    return super.deploy(overrides || {}) as Promise<Uint32L8ArrayTest>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Uint32L8ArrayTest {
    return super.attach(address) as Uint32L8ArrayTest;
  }
  connect(signer: Signer): Uint32L8ArrayTest__factory {
    return super.connect(signer) as Uint32L8ArrayTest__factory;
  }
  static readonly contractName: 'Uint32L8ArrayTest';
  public readonly contractName: 'Uint32L8ArrayTest';
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
