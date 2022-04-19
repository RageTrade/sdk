/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type {
  StableSwapMock,
  StableSwapMockInterface,
} from '../../../../../contracts/test/curve-mocks/StableSwapMock.sol/StableSwapMock';

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_lpToken',
        type: 'address',
      },
      {
        internalType: 'address[3]',
        name: '_tokens',
        type: 'address[3]',
      },
      {
        internalType: 'address[3]',
        name: '_oracles',
        type: 'address[3]',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'NEGATIVE_PRICE',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256[3]',
        name: 'amounts',
        type: 'uint256[3]',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'add_liquidity',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'decimals',
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
        internalType: 'int128',
        name: 'from',
        type: 'int128',
      },
      {
        internalType: 'int128',
        name: 'to',
        type: 'int128',
      },
      {
        internalType: 'uint256',
        name: '_from_amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'exchange',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'lpToken',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'lp_price',
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
        name: '',
        type: 'uint256',
      },
    ],
    name: 'oracles',
    outputs: [
      {
        internalType: 'address',
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
        name: '',
        type: 'uint256',
      },
    ],
    name: 'quantities',
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
        name: 'token_amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'remove_liquidity_one_coin',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'tokens',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

const _bytecode =
  '0x60806040523480156200001157600080fd5b5060405162000fc538038062000fc58339810160408190526200003491620001fa565b620000436000836003620000aa565b506200005260038281620000aa565b5060408051606081018252600680825260086020830152601292820192909252620000809190600362000107565b5050600c80546001600160a01b0319166001600160a01b0393909316929092179091555062000246565b8260038101928215620000f5579160200282015b82811115620000f557825182546001600160a01b0319166001600160a01b03909116178255602090920191600190910190620000be565b50620001039291506200013d565b5090565b8260038101928215620000f5579160200282015b82811115620000f5578251829060ff169055916020019190600101906200011b565b5b808211156200010357600081556001016200013e565b80516001600160a01b03811681146200016c57600080fd5b919050565b600082601f8301126200018357600080fd5b604051606081016001600160401b0381118282101715620001b457634e487b7160e01b600052604160045260246000fd5b604052806060840185811115620001ca57600080fd5b845b81811015620001ef57620001e08162000154565b835260209283019201620001cc565b509195945050505050565b600080600060e084860312156200021057600080fd5b6200021b8462000154565b92506200022c856020860162000171565b91506200023d856080860162000171565b90509250925092565b610d6f80620002566000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c806354f0f7d51161006657806354f0f7d5146101115780635b69a7d8146101195780635fcbd2851461012c578063a41254031461013f578063f1dc3cc91461015257600080fd5b80633df02124146100985780633f47e662146100ad5780634515cef3146100d35780634f64b2be146100e6575b600080fd5b6100ab6100a6366004610b23565b610165565b005b6100c06100bb366004610b65565b610418565b6040519081526020015b60405180910390f35b6100ab6100e1366004610b7e565b61042f565b6100f96100f4366004610b65565b6106bb565b6040516001600160a01b0390911681526020016100ca565b6100c06106db565b6100f9610127366004610b65565b610841565b600c546100f9906001600160a01b031681565b6100c061014d366004610b65565b610851565b6100ab610160366004610bac565b610861565b6fffffffffffffffffffffffffffffffff808516908416600080836003811061019057610190610bd8565b0160009054906101000a90046001600160a01b03166001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156101e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102069190610bee565b9050600080836003811061021c5761021c610bd8565b0160009054906101000a90046001600160a01b03166001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa15801561026e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102929190610bee565b9050600084600381106102a7576102a7610bd8565b01546040516323b872dd60e01b81526001600160a01b03909116906323b872dd906102da90339030908b90600401610c11565b6020604051808303816000875af11580156102f9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061031d9190610c35565b5060006103838260ff1661034d6000886003811061033d5761033d610bd8565b01546001600160a01b03166109c6565b6103579190610c6d565b8460ff166103716000886003811061033d5761033d610bd8565b61037b9190610c6d565b899190610a59565b90506000846003811061039857610398610bd8565b015460405163a9059cbb60e01b8152336004820152602481018390526001600160a01b039091169063a9059cbb906044016020604051808303816000875af11580156103e8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061040c9190610c35565b50505050505050505050565b6006816003811061042857600080fd5b0154905081565b60036000805b8281101561063757600085826003811061045157610451610bd8565b60200201351115610627576000816003811061046f5761046f610bd8565b01546001600160a01b03166323b872dd333088856003811061049357610493610bd8565b60200201356040518463ffffffff1660e01b81526004016104b693929190610c11565b6020604051808303816000875af11580156104d5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104f99190610c35565b5084816003811061050c5761050c610bd8565b60200201356009826003811061052457610524610bd8565b0160008282546105349190610c8c565b909155506000905080826003811061054e5761054e610bd8565b0160009054906101000a90046001600160a01b03166001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156105a0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105c49190610bee565b60ff168683600381106105d9576105d9610bd8565b60200201356105f46003856003811061033d5761033d610bd8565b610603906402540be400610c6d565b61060d9190610c6d565b6106179190610ca4565b90506106238184610c8c565b9250505b61063081610cc6565b9050610435565b50600061064f60016106476106db565b849190610a59565b600c546040516340c10f1960e01b8152336004820152602481018390529192506001600160a01b0316906340c10f1990604401600060405180830381600087803b15801561069c57600080fd5b505af11580156106b0573d6000803e3d6000fd5b505050505050505050565b600081600381106106cb57600080fd5b01546001600160a01b0316905081565b600080600c60009054906101000a90046001600160a01b03166001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610731573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107559190610cdf565b1115610834576000620f424060098201546107726003600061033d565b610781906402540be400610c6d565b61078b9190610c6d565b6107959190610ca4565b905060006305f5e1006009600101546107b06003600161033d565b6107bf906402540be400610c6d565b6107c99190610c6d565b6107d39190610ca4565b90506000670de0b6b3a76400006009600201546107f26003600261033d565b610801906402540be400610c6d565b61080b9190610c6d565b6108159190610ca4565b9050806108228385610c8c565b61082c9190610c8c565b935050505090565b50670de0b6b3a764000090565b600381600381106106cb57600080fd5b6009816003811061042857600080fd5b600c546040516323b872dd60e01b81526001600160a01b03909116906323b872dd906108969033906000908890600401610c11565b6020604051808303816000875af11580156108b5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108d99190610c35565b506000670de0b6b3a76400006108ed6106db565b6108f79086610c6d565b6109019190610ca4565b9050600061091b6003856003811061033d5761033d610bd8565b610929836305f5e100610c6d565b6109339190610ca4565b90506000846003811061094857610948610bd8565b01546040516323b872dd60e01b81526001600160a01b03909116906323b872dd9061097b90309033908690600401610c11565b6020604051808303816000875af115801561099a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109be9190610c35565b505050505050565b600080826001600160a01b031663feaf968c6040518163ffffffff1660e01b815260040160a060405180830381865afa158015610a07573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a2b9190610d12565b5050509150506000811215610a535760405163b6cc0ca160e01b815260040160405180910390fd5b92915050565b6000808060001985870985870292508281108382030391505080600003610a925760008411610a8757600080fd5b508290049050610b05565b808411610a9e57600080fd5b6000848688096000868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010186841190950394909402919094039290920491909117919091029150505b9392505050565b8035600f81900b8114610b1e57600080fd5b919050565b60008060008060808587031215610b3957600080fd5b610b4285610b0c565b9350610b5060208601610b0c565b93969395505050506040820135916060013590565b600060208284031215610b7757600080fd5b5035919050565b60008060808385031215610b9157600080fd5b6060830184811115610ba257600080fd5b9294923593505050565b600080600060608486031215610bc157600080fd5b505081359360208301359350604090920135919050565b634e487b7160e01b600052603260045260246000fd5b600060208284031215610c0057600080fd5b815160ff81168114610b0557600080fd5b6001600160a01b039384168152919092166020820152604081019190915260600190565b600060208284031215610c4757600080fd5b81518015158114610b0557600080fd5b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615610c8757610c87610c57565b500290565b60008219821115610c9f57610c9f610c57565b500190565b600082610cc157634e487b7160e01b600052601260045260246000fd5b500490565b600060018201610cd857610cd8610c57565b5060010190565b600060208284031215610cf157600080fd5b5051919050565b805169ffffffffffffffffffff81168114610b1e57600080fd5b600080600080600060a08688031215610d2a57600080fd5b610d3386610cf8565b9450602086015193506040860151925060608601519150610d5660808701610cf8565b9050929550929590935056fea164736f6c634300080d000a';

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
    _lpToken: string,
    _tokens: [string, string, string],
    _oracles: [string, string, string],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<StableSwapMock> {
    return super.deploy(
      _lpToken,
      _tokens,
      _oracles,
      overrides || {}
    ) as Promise<StableSwapMock>;
  }
  override getDeployTransaction(
    _lpToken: string,
    _tokens: [string, string, string],
    _oracles: [string, string, string],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _lpToken,
      _tokens,
      _oracles,
      overrides || {}
    );
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