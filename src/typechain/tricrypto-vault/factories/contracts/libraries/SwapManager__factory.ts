/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type { PromiseOrValue } from '../../../common';
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
  '0x6108dc61003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061004b5760003560e01c806330267db91461005057806369b6f5dc14610072578063abd9ebe5146100a4575b600080fd5b81801561005c57600080fd5b5061007061006b3660046105aa565b6100c4565b005b81801561007e57600080fd5b5061009261008d366004610622565b61020a565b60405190815260200160405180910390f35b8180156100b057600080fd5b506100926100bf3660046106ab565b610395565b60006127106100d38682610724565b6100dd908861073b565b6100e7919061075a565b6040805160a08101825286815230602082015242818301526060810189905260808101839052905163c04b8d5960e01b8152919250906000906001600160a01b0386169063c04b8d599061013f90859060040161077c565b6020604051808303816000875af115801561015e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610182919061080f565b604080516060810182528281526000602082018190528183018190529151634515cef360e01b8152929350916001600160a01b03871691634515cef3916101cd918591600401610828565b600060405180830381600087803b1580156101e757600080fd5b505af11580156101fb573d6000803e3d6000fd5b50505050505050505050505050565b60008061271061021a8882610724565b896102248961045c565b61022e919061073b565b610238919061073b565b610242919061075a565b90506305f5e100670de0b6b3a764000061025f83620f424061073b565b610269919061075a565b610273919061075a565b6040805160a0810182528781523060208201524281830152606081018b905260808101839052905163c04b8d5960e01b8152919250906001600160a01b0386169063c04b8d59906102c890849060040161077c565b6020604051808303816000875af11580156102e7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061030b919061080f565b604080516060810182528281526000602082018190528183018190529151634515cef360e01b8152929550916001600160a01b03871691634515cef391610356918591600401610828565b600060405180830381600087803b15801561037057600080fd5b505af1158015610384573d6000803e3d6000fd5b505050505050509695505050505050565b6000806127106103a58682610724565b6103af908861073b565b6103b9919061075a565b6040805160a08101825286815230602082015242818301526060810189905260808101839052905163c04b8d5960e01b8152919250906001600160a01b0385169063c04b8d599061040e90849060040161077c565b6020604051808303816000875af115801561042d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610451919061080f565b979650505050505050565b600080826001600160a01b031663feaf968c6040518163ffffffff1660e01b815260040160a060405180830381865afa15801561049d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104c1919061087f565b50505091505060008112156104e95760405163033e96f360e21b815260040160405180910390fd5b92915050565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261051657600080fd5b813567ffffffffffffffff80821115610531576105316104ef565b604051601f8301601f19908116603f01168101908282118183101715610559576105596104ef565b8160405283815286602085880101111561057257600080fd5b836020870160208301376000602085830101528094505050505092915050565b6001600160a01b03811681146105a757600080fd5b50565b600080600080600060a086880312156105c257600080fd5b8535945060208601359350604086013567ffffffffffffffff8111156105e757600080fd5b6105f388828901610505565b935050606086013561060481610592565b9150608086013561061481610592565b809150509295509295909350565b60008060008060008060c0878903121561063b57600080fd5b8635955060208701359450604087013561065481610592565b9350606087013567ffffffffffffffff81111561067057600080fd5b61067c89828a01610505565b935050608087013561068d81610592565b915060a087013561069d81610592565b809150509295509295509295565b600080600080608085870312156106c157600080fd5b8435935060208501359250604085013567ffffffffffffffff8111156106e657600080fd5b6106f287828801610505565b925050606085013561070381610592565b939692955090935050565b634e487b7160e01b600052601160045260246000fd5b6000828210156107365761073661070e565b500390565b60008160001904831182151516156107555761075561070e565b500290565b60008261077757634e487b7160e01b600052601260045260246000fd5b500490565b60006020808352835160a08285015280518060c086015260005b818110156107b25782810184015186820160e001528301610796565b818111156107c457600060e083880101525b50918501516001600160a01b0381166040860152916040860151606086015260608601516080860152608086015160a086015260e0601f19601f830116860101935050505092915050565b60006020828403121561082157600080fd5b5051919050565b60808101818460005b6003811015610850578151835260209283019290910190600101610831565b5050508260608301529392505050565b805169ffffffffffffffffffff8116811461087a57600080fd5b919050565b600080600080600060a0868803121561089757600080fd5b6108a086610860565b94506020860151935060408601519250606086015191506108c360808701610860565b9050929550929590935056fea164736f6c634300080e000a';

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
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SwapManager> {
    return super.deploy(overrides || {}) as Promise<SwapManager>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
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
