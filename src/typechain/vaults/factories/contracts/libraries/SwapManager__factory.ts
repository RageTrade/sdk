/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type {
  SwapManager,
  SwapManagerInterface,
} from '../../../contracts/libraries/SwapManager';

const _abi = [
  {
    inputs: [],
    name: 'CYS_NEGATIVE_CRV_PRICE',
    type: 'error',
  },
];

const _bytecode =
  '0x61085161003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061004b5760003560e01c8063585f5c691461005057806369b6f5dc146100825780638b8f9f0f146100a2575b600080fd5b81801561005c57600080fd5b5061007061006b366004610552565b6100c4565b60405190815260200160405180910390f35b81801561008e57600080fd5b5061007061009d3660046105ad565b610163565b8180156100ae57600080fd5b506100c26100bd366004610636565b6102e5565b005b6040805160a081018252838152306020820152428183015260608101859052600060808201819052915163c04b8d5960e01b81526001600160a01b0384169063c04b8d59906101179084906004016106a2565b6020604051808303816000875af1158015610136573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061015a9190610735565b95945050505050565b600080612710878961017489610404565b61017e919061074e565b610188919061074e565b610192919061077b565b90506305f5e100670de0b6b3a76400006101af83620f424061074e565b6101b9919061077b565b6101c3919061077b565b6040805160a0810182528781523060208201524281830152606081018b905260808101839052905163c04b8d5960e01b8152919250906001600160a01b0386169063c04b8d59906102189084906004016106a2565b6020604051808303816000875af1158015610237573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061025b9190610735565b604080516060810182528281526000602082018190528183018190529151634515cef360e01b8152929550916001600160a01b03871691634515cef3916102a691859160040161079d565b600060405180830381600087803b1580156102c057600080fd5b505af11580156102d4573d6000803e3d6000fd5b505050505050509695505050505050565b6040805160a081018252848152306020820152428183015260608101869052600060808201819052915163c04b8d5960e01b81529091906001600160a01b0385169063c04b8d599061033b9085906004016106a2565b6020604051808303816000875af115801561035a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061037e9190610735565b604080516060810182528281526000602082018190528183018190529151634515cef360e01b8152929350916001600160a01b03861691634515cef3916103c991859160040161079d565b600060405180830381600087803b1580156103e357600080fd5b505af11580156103f7573d6000803e3d6000fd5b5050505050505050505050565b600080826001600160a01b031663feaf968c6040518163ffffffff1660e01b815260040160a060405180830381865afa158015610445573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061046991906107f4565b50505091505060008112156104915760405163033e96f360e21b815260040160405180910390fd5b92915050565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126104be57600080fd5b813567ffffffffffffffff808211156104d9576104d9610497565b604051601f8301601f19908116603f0116810190828211818310171561050157610501610497565b8160405283815286602085880101111561051a57600080fd5b836020870160208301376000602085830101528094505050505092915050565b6001600160a01b038116811461054f57600080fd5b50565b60008060006060848603121561056757600080fd5b83359250602084013567ffffffffffffffff81111561058557600080fd5b610591868287016104ad565b92505060408401356105a28161053a565b809150509250925092565b60008060008060008060c087890312156105c657600080fd5b863595506020870135945060408701356105df8161053a565b9350606087013567ffffffffffffffff8111156105fb57600080fd5b61060789828a016104ad565b93505060808701356106188161053a565b915060a08701356106288161053a565b809150509295509295509295565b6000806000806080858703121561064c57600080fd5b84359350602085013567ffffffffffffffff81111561066a57600080fd5b610676878288016104ad565b93505060408501356106878161053a565b915060608501356106978161053a565b939692955090935050565b60006020808352835160a08285015280518060c086015260005b818110156106d85782810184015186820160e0015283016106bc565b818111156106ea57600060e083880101525b50918501516001600160a01b0381166040860152916040860151606086015260608601516080860152608086015160a086015260e0601f19601f830116860101935050505092915050565b60006020828403121561074757600080fd5b5051919050565b600081600019048311821515161561077657634e487b7160e01b600052601160045260246000fd5b500290565b60008261079857634e487b7160e01b600052601260045260246000fd5b500490565b60808101818460005b60038110156107c55781518352602092830192909101906001016107a6565b5050508260608301529392505050565b805169ffffffffffffffffffff811681146107ef57600080fd5b919050565b600080600080600060a0868803121561080c57600080fd5b610815866107d5565b9450602086015193506040860151925060608601519150610838608087016107d5565b9050929550929590935056fea164736f6c634300080d000a';

type SwapManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SwapManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SwapManager__factory extends ContractFactory {
  constructor(...args: SwapManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SwapManager> {
    return super.deploy(overrides || {}) as Promise<SwapManager>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): SwapManager {
    return super.attach(address) as SwapManager;
  }
  override connect(signer: Signer): SwapManager__factory {
    return super.connect(signer) as SwapManager__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SwapManagerInterface {
    return new utils.Interface(_abi) as SwapManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SwapManager {
    return new Contract(address, _abi, signerOrProvider) as SwapManager;
  }
}
