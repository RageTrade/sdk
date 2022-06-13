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
  '0x60806040523480156200001157600080fd5b506040516200113b3803806200113b8339810160408190526200003491620001fa565b620000436000836003620000aa565b506200005260038281620000aa565b5060408051606081018252600680825260086020830152601292820192909252620000809190600362000107565b5050600c80546001600160a01b0319166001600160a01b0393909316929092179091555062000246565b8260038101928215620000f5579160200282015b82811115620000f557825182546001600160a01b0319166001600160a01b03909116178255602090920191600190910190620000be565b50620001039291506200013d565b5090565b8260038101928215620000f5579160200282015b82811115620000f5578251829060ff169055916020019190600101906200011b565b5b808211156200010357600081556001016200013e565b80516001600160a01b03811681146200016c57600080fd5b919050565b600082601f8301126200018357600080fd5b604051606081016001600160401b0381118282101715620001b457634e487b7160e01b600052604160045260246000fd5b604052806060840185811115620001ca57600080fd5b845b81811015620001ef57620001e08162000154565b835260209283019201620001cc565b509195945050505050565b600080600060e084860312156200021057600080fd5b6200021b8462000154565b92506200022c856020860162000171565b91506200023d856080860162000171565b90509250925092565b610ee580620002566000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c806354f0f7d51161006657806354f0f7d5146101115780635b69a7d8146101195780635fcbd2851461012c578063a41254031461013f578063f1dc3cc91461015257600080fd5b80633df02124146100985780633f47e662146100ad5780634515cef3146100d35780634f64b2be146100e6575b600080fd5b6100ab6100a6366004610bbe565b610165565b005b6100c06100bb366004610c00565b61042a565b6040519081526020015b60405180910390f35b6100ab6100e1366004610c19565b610441565b6100f96100f4366004610c00565b61070e565b6040516001600160a01b0390911681526020016100ca565b6100c061072e565b6100f9610127366004610c00565b6108b6565b600c546100f9906001600160a01b031681565b6100c061014d366004610c00565b6108c6565b6100ab610160366004610c47565b6108d6565b6fffffffffffffffffffffffffffffffff808516908416600080836003811061019057610190610c73565b0160009054906101000a90046001600160a01b03166001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156101e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102069190610c89565b9050600080836003811061021c5761021c610c73565b0160009054906101000a90046001600160a01b03166001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa15801561026e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102929190610c89565b9050600084600381106102a7576102a7610c73565b01546040516323b872dd60e01b8152336004820152306024820152604481018890526001600160a01b03909116906323b872dd906064016020604051808303816000875af11580156102fd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103219190610cac565b50600061039561033283600a610dc8565b6103586000886003811061034857610348610c73565b01546001600160a01b0316610a61565b6103629190610dd7565b61036d85600a610dc8565b6103836000886003811061034857610348610c73565b61038d9190610dd7565b899190610af4565b9050600084600381106103aa576103aa610c73565b015460405163a9059cbb60e01b8152336004820152602481018390526001600160a01b039091169063a9059cbb906044016020604051808303816000875af11580156103fa573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061041e9190610cac565b50505050505050505050565b6006816003811061043a57600080fd5b0154905081565b60036000805b8281101561068357600085826003811061046357610463610c73565b60200201351115610673576000816003811061048157610481610c73565b01546001600160a01b03166323b872dd33308885600381106104a5576104a5610c73565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e087901b1681526001600160a01b039485166004820152939092166024840152602091909102013560448201526064016020604051808303816000875af1158015610519573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061053d9190610cac565b5084816003811061055057610550610c73565b60200201356009826003811061056857610568610c73565b0160008282546105789190610df6565b909155506000905080826003811061059257610592610c73565b0160009054906101000a90046001600160a01b03166001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156105e4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106089190610c89565b61061390600a610dc8565b86836003811061062557610625610c73565b60200201356106406003856003811061034857610348610c73565b61064f906402540be400610dd7565b6106599190610dd7565b6106639190610e0e565b905061066f8184610df6565b9250505b61067c81610e30565b9050610447565b5060006106a2670de0b6b3a764000061069a61072e565b849190610af4565b600c546040516340c10f1960e01b8152336004820152602481018390529192506001600160a01b0316906340c10f1990604401600060405180830381600087803b1580156106ef57600080fd5b505af1158015610703573d6000803e3d6000fd5b505050505050505050565b6000816003811061071e57600080fd5b01546001600160a01b0316905081565b600080600c60009054906101000a90046001600160a01b03166001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610784573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107a89190610e49565b905080156108a7576000620f424060098201546107c760036000610348565b6107d6906402540be400610dd7565b6107e09190610dd7565b6107ea9190610e0e565b905060006305f5e10060096001015461080560036001610348565b610814906402540be400610dd7565b61081e9190610dd7565b6108289190610e0e565b90506000670de0b6b3a764000060096002015461084760036002610348565b610856906402540be400610dd7565b6108609190610dd7565b61086a9190610e0e565b905083816108788486610df6565b6108829190610df6565b61089490670de0b6b3a7640000610dd7565b61089e9190610e0e565b94505050505090565b670de0b6b3a764000091505090565b6003816003811061071e57600080fd5b6009816003811061043a57600080fd5b600c5460405163079cc67960e41b8152336004820152602481018590526001600160a01b03909116906379cc679090604401600060405180830381600087803b15801561092257600080fd5b505af1158015610936573d6000803e3d6000fd5b505050506000670de0b6b3a764000061094d61072e565b6109579086610dd7565b6109619190610e0e565b90506000670de0b6b3a76400006109846003866003811061034857610348610c73565b6006866003811061099757610997610c73565b01546109a490600a610e62565b6109ae9085610dd7565b6109bc906305f5e100610dd7565b6109c69190610e0e565b6109d09190610e0e565b9050600084600381106109e5576109e5610c73565b015460405163a9059cbb60e01b8152336004820152602481018390526001600160a01b039091169063a9059cbb906044016020604051808303816000875af1158015610a35573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a599190610cac565b505050505050565b600080826001600160a01b031663feaf968c6040518163ffffffff1660e01b815260040160a060405180830381865afa158015610aa2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ac69190610e88565b5050509150506000811215610aee5760405163b6cc0ca160e01b815260040160405180910390fd5b92915050565b6000808060001985870985870292508281108382030391505080600003610b2d5760008411610b2257600080fd5b508290049050610ba0565b808411610b3957600080fd5b6000848688096000868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010186841190950394909402919094039290920491909117919091029150505b9392505050565b8035600f81900b8114610bb957600080fd5b919050565b60008060008060808587031215610bd457600080fd5b610bdd85610ba7565b9350610beb60208601610ba7565b93969395505050506040820135916060013590565b600060208284031215610c1257600080fd5b5035919050565b60008060808385031215610c2c57600080fd5b6060830184811115610c3d57600080fd5b9294923593505050565b600080600060608486031215610c5c57600080fd5b505081359360208301359350604090920135919050565b634e487b7160e01b600052603260045260246000fd5b600060208284031215610c9b57600080fd5b815160ff81168114610ba057600080fd5b600060208284031215610cbe57600080fd5b81518015158114610ba057600080fd5b634e487b7160e01b600052601160045260246000fd5b600181815b80851115610d1f578160001904821115610d0557610d05610cce565b80851615610d1257918102915b93841c9390800290610ce9565b509250929050565b600082610d3657506001610aee565b81610d4357506000610aee565b8160018114610d595760028114610d6357610d7f565b6001915050610aee565b60ff841115610d7457610d74610cce565b50506001821b610aee565b5060208310610133831016604e8410600b8410161715610da2575081810a610aee565b610dac8383610ce4565b8060001904821115610dc057610dc0610cce565b029392505050565b6000610ba060ff841683610d27565b6000816000190483118215151615610df157610df1610cce565b500290565b60008219821115610e0957610e09610cce565b500190565b600082610e2b57634e487b7160e01b600052601260045260246000fd5b500490565b600060018201610e4257610e42610cce565b5060010190565b600060208284031215610e5b57600080fd5b5051919050565b6000610ba08383610d27565b805169ffffffffffffffffffff81168114610bb957600080fd5b600080600080600060a08688031215610ea057600080fd5b610ea986610e6e565b9450602086015193506040860151925060608601519150610ecc60808701610e6e565b9050929550929590935056fea164736f6c634300080e000a';

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
