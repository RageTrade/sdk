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
  '0x60808060405234610016576107e0908161001c8239f35b600080fdfe60806040526004361015610013575b600080fd5b60003560e01c806313c369ed146100b35780631f7b6d32146100aa578063296eaea2146100a15780633fc1d8ce146100985780634c84b36e1461008f578063557c1b5314610086578063817bbe161461007d5763dd6c35241461007557600080fd5b61000e6104a6565b5061000e610351565b5061000e61032d565b5061000e6102f4565b5061000e6101d6565b5061000e61017d565b5061000e6100f8565b3461000e57602060031936011261000e576020600860ff6100da6100d56100e5565b61071d565b161415604051908152f35b6004359063ffffffff8216820361000e57565b503461000e57600060031936011261000e576000805b60088110610129575b60405160ff83168152602090f35b0390f35b61013281610567565b63ffffffff809254600392831b1c1661016d575b61014f83610567565b9054911b1c1615610168576101639061052d565b61010e565b610117565b926101779061070b565b92610146565b503461000e57600060031936011261000e576020610199610764565b604051908152f35b610100810192916000915b600883106101b957505050565b60019063ffffffff835116815260208091019201920191906101ac565b503461000e57600060031936011261000e57604080516101f5816106bf565b61010080913690378151908160009182915b6008600784011061022a576101258587610220826106bf565b51918291826101a1565b6001826008926102d887546102cd63ffffffff61024e8582851663ffffffff169052565b61026560208285828901921c1663ffffffff169052565b63ffffffff838e1c821616858e015261028b60608285828901921c1663ffffffff169052565b6102a260808285828901921c1663ffffffff169052565b6102b960a08285828901921c1663ffffffff169052565b60c09083828701921c1663ffffffff169052565b60e090811c90830152565b01940192019192610207565b6004359060ff8216820361000e57565b503461000e57602060031936011261000e57602063ffffffff61031d6103186102e4565b610567565b9190546040519260031b1c168152f35b503461000e57602060031936011261000e5761034f61034a6100e5565b6105d8565b005b503461000e57602060031936011261000e5763ffffffff6103706100e5565b16801561047457600880916000905b828210610405575b508082036103ff57506007905b820361039c57005b8082036103c257506103b061034f91610567565b63ffffffff82549160031b1b19169055565b906103b0826103fa6103f26103ec6103dc61034f97610567565b905463ffffffff9160031b1c1690565b94610567565b939092610567565b6105ae565b90610394565b9190826104206104176103dc84610567565b63ffffffff1690565b1461046c575b6104356104176103dc83610567565b1561044a576104439061052d565b909161037f565b9091506000908015610466576104609150610691565b38610387565b50610460565b925082610426565b6040517f3b16221e00000000000000000000000000000000000000000000000000000000815260006004820152602490fd5b503461000e57604060031936011261000e576104c06102e4565b6024359063ffffffff821680920361000e576104de6104f991610567565b819391549060031b63ffffffff811b9283911b169119161790565b9055005b507f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6001907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811461055b570190565b6105636104fd565b0190565b90600882101561057f57601c8260031c9260021b1690565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b919063ffffffff6105d492169083549060031b63ffffffff811b9283911b169119161790565b9055565b63ffffffff81168015610474576008809160005b828110610648575b50508114610611579061060961060f92610567565b906105ae565b565b6040517f4e99453600000000000000000000000000000000000000000000000000000000815263ffffffff83166004820152602490fd5b816106586104176103dc84610567565b1461068a5761066c6104176103dc83610567565b1561067f5761067a9061052d565b6105ec565b9250389050806105f4565b5050505050565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff906001811061055b570190565b610100810190811067ffffffffffffffff8211176106dc57604052565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60ff6001911660ff811461055b570190565b60005b600860ff821610610732575050600890565b61073b81610567565b905463ffffffff908185169260031b1c161461075f5761075a9061070b565b610720565b905090565b60005b60ff81169060088210156107a35763ffffffff61078382610567565b90549060031b1c161561079f5761079a915061070b565b610767565b5090565b505060089056fea2646970667358221220f2c960e14e4e5db3d783e935af22ea401b50aed8b145e75ea9452dbb111a4d0e64736f6c634300080e0033';

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
