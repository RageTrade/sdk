/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type {
  InsuranceFund,
  InsuranceFundInterface,
} from '../../../../contracts/protocol/insurancefund/InsuranceFund';

const _abi = [
  {
    inputs: [],
    name: 'Unauthorised',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
    ],
    name: 'allowance',
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
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'approve',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'balanceOf',
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
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'claim',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'clearingHouse',
    outputs: [
      {
        internalType: 'contract IClearingHouse',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'decimals',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'subtractedValue',
        type: 'uint256',
      },
    ],
    name: 'decreaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'deposit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'addedValue',
        type: 'uint256',
      },
    ],
    name: 'increaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IERC20',
        name: '_settlementToken',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_clearingHouse',
        type: 'address',
      },
      {
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'symbol',
        type: 'string',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'settlementToken',
    outputs: [
      {
        internalType: 'contract IERC20',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalSupply',
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
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transfer',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transferFrom',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'shares',
        type: 'uint256',
      },
    ],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

const _bytecode =
  '0x608080604052346100165761197e908161001c8239f35b600080fdfe60806040526004361015610013575b600080fd5b60003560e01c806306fdde0314610167578063095ea7b31461015e5780630af968001461015557806318160ddd1461014c5780632016a0d21461014357806323b872dd1461013a5780632e1a7d4d14610131578063313ce56714610128578063379607f51461011f578063395093511461011657806370a082311461010d5780637b9e618d1461010457806395d89b41146100fb578063a457c2d7146100f2578063a9059cbb146100e9578063b6b55f25146100e05763dd62ed3e146100d857600080fd5b61000e610ac0565b5061000e6109d5565b5061000e6109aa565b5061000e6108df565b5061000e610837565b5061000e61080f565b5061000e6107d0565b5061000e610772565b5061000e610710565b5061000e6106f3565b5061000e610604565b5061000e610521565b5061000e61037f565b5061000e610332565b5061000e61030a565b5061000e6102d4565b5061000e6101c8565b919091602080825283519081818401526000945b8286106101b2575050601f81601f199260409596116101a5575b0116010190565b600085828601015261019e565b8581018201518487016040015294810194610184565b503461000e576000806003193601126102c05760405190806036546101ec81610b26565b808552916001918083169081156102815750600114610226575b6102228561021681870382610bd2565b60405191829182610170565b0390f35b9250603683527f4a11f94e20a93c79f6ec743a1954ec4fc2c08429ae2122118bf234b2185c81b85b82841061026957505050810160200161021682610222610206565b8054602085870181019190915290930192810161024e565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016602087015250506040840192506102169150839050610222610206565b80fd5b6001600160a01b0381160361000e57565b503461000e57604060031936011261000e576102ff6004356102f5816102c3565b6024359033610e5a565b602060405160018152f35b503461000e57600060031936011261000e5760206001600160a01b0360665416604051908152f35b503461000e57600060031936011261000e576020603554604051908152f35b9181601f8401121561000e5782359167ffffffffffffffff831161000e576020838186019501011161000e57565b503461000e57608060031936011261000e5760043561039d816102c3565b6024356103a9816102c3565b67ffffffffffffffff60443581811161000e576103ca903690600401610351565b9160643590811161000e576103e3903690600401610351565b9290916000549460ff8660081c1695866000146105185750303b155b156104ae57610414951596876104485761101b565b61041b575b005b6104197fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff60005416600055565b6104796101007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff6000541617600055565b6104a960017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff006000541617600055565b61101b565b608460405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a65640000000000000000000000000000000000006064820152fd5b60ff16156103ff565b503461000e57606060031936011261000e5760043561053f816102c3565b60243561054b816102c3565b604435906001600160a01b0383166000526034602052610582336040600020906001600160a01b0316600052602052604060002090565b549260001984036105a4575b6105989350610d1f565b60405160018152602090f35b8284106105c0576105bb8361059895033383610e5a565b61058e565b606460405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152fd5b503461000e57602060031936011261000e576104196004356106a061069961063d6001600160a01b03606554166001600160a01b031690565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015290602090829060249082905afa9081156106e6575b6000916106b8575b5061069460355491856113fe565b61141d565b913361176d565b336106b36065546001600160a01b031690565b6118e4565b6106d9915060203d81116106df575b6106d18183610bd2565b8101906113e2565b38610686565b503d6106c7565b6106ee6113f1565b61067e565b503461000e57600060031936011261000e57602060405160128152f35b503461000e57602060031936011261000e576001600160a01b03806066541633036107485761041990600435903390606554166118e4565b60046040517fd7a2ae6a000000000000000000000000000000000000000000000000000000008152fd5b503461000e57604060031936011261000e576102ff600435610793816102c3565b3360005260346020526107c96024356107c3836040600020906001600160a01b0316600052602052604060002090565b54610c25565b9033610e5a565b503461000e57602060031936011261000e576001600160a01b036004356107f6816102c3565b1660005260336020526020604060002054604051908152f35b503461000e57600060031936011261000e5760206001600160a01b0360655416604051908152f35b503461000e576000806003193601126102c057604051908060375461085b81610b26565b808552916001918083169081156102815750600114610884576102228561021681870382610bd2565b9250603783527f42a7b7dd785cd69714a189dffb3fd7d7174edc9ece837694ce50f7078f7c31ae5b8284106108c757505050810160200161021682610222610206565b805460208587018101919091529093019281016108ac565b503461000e57604060031936011261000e576004356108fd816102c3565b6024359033600052603460205261092b816040600020906001600160a01b0316600052602052604060002090565b54918083106109405761059892039033610e5a565b608460405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f0000000000000000000000000000000000000000000000000000006064820152fd5b503461000e57604060031936011261000e576102ff6004356109cb816102c3565b6024359033610d1f565b503461000e57602060031936011261000e57610419600435610a74610a026065546001600160a01b031690565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201529092906020816024816001600160a01b0388165afa908115610ab3575b600091610a95575b506035549081158015610a8d575b15610a7a57505080925b30903390611513565b33611456565b610694610a8792846113fe565b92610a6b565b508015610a61565b610aad915060203d81116106df576106d18183610bd2565b38610a53565b610abb6113f1565b610a4b565b503461000e57604060031936011261000e576020610b1d600435610ae3816102c3565b6001600160a01b0360243591610af8836102c3565b16600052603483526040600020906001600160a01b0316600052602052604060002090565b54604051908152f35b90600182811c92168015610b6f575b6020831014610b4057565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b91607f1691610b35565b507f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040810190811067ffffffffffffffff821117610bc557604052565b610bcd610b79565b604052565b90601f601f19910116810190811067ffffffffffffffff821117610bc557604052565b507f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81198111610c31570190565b610c39610bf5565b0190565b15610c4457565b608460405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f65737300000000000000000000000000000000000000000000000000000000006064820152fd5b15610cb557565b608460405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e636500000000000000000000000000000000000000000000000000006064820152fd5b91906001600160a01b0390818416928315610df057610dce827fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef94610deb941696610d6b881515610c3d565b610db484610d8c836001600160a01b03166000526033602052604060002090565b54610d9982821015610cae565b03916001600160a01b03166000526033602052604060002090565b556001600160a01b03166000526033602052604060002090565b610dd9828254610c25565b90556040519081529081906020820190565b0390a3565b608460405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152fd5b906001600160a01b0391828116928315610f50578216938415610ee65780610ed57f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92594610ebd610deb956001600160a01b03166000526034602052604060002090565b906001600160a01b0316600052602052604060002090565b556040519081529081906020820190565b608460405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f73730000000000000000000000000000000000000000000000000000000000006064820152fd5b608460405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152fd5b601f19601f60209267ffffffffffffffff8111610fd7575b01160190565b610fdf610b79565b610fd1565b929192610ff082610fb9565b91610ffe6040519384610bd2565b82948184528183011161000e578281602093846000960137010152565b92611075949361106d93926001600160a01b0390817fffffffffffffffffffffffff00000000000000000000000000000000000000009316836065541617606555169060665416176066553691610fe4565b923691610fe4565b61108f60ff60005460081c1661108a81611198565b611198565b815167ffffffffffffffff811161118b575b6110b5816110b0603654610b26565b611209565b602080601f83116001146110f8575081906110eb946000926110ed575b50506000198260011b9260031b1c1916176036556112eb565b565b0151905038806110d2565b919293601f19841661112c60366000527f4a11f94e20a93c79f6ec743a1954ec4fc2c08429ae2122118bf234b2185c81b890565b936000905b8282106111735750509160019391856110eb9796941061115a575b505050811b016036556112eb565b015160001960f88460031b161c1916905538808061114c565b80600186978294978701518155019601940190611131565b611193610b79565b6110a1565b1561119f57565b608460405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e670000000000000000000000000000000000000000006064820152fd5b601f8111611215575050565b600090603682527f4a11f94e20a93c79f6ec743a1954ec4fc2c08429ae2122118bf234b2185c81b8906020601f850160051c83019410611270575b601f0160051c01915b82811061126557505050565b818155600101611259565b9092508290611250565b601f8111611286575050565b600090603782527f42a7b7dd785cd69714a189dffb3fd7d7174edc9ece837694ce50f7078f7c31ae906020601f850160051c830194106112e1575b601f0160051c01915b8281106112d657505050565b8181556001016112ca565b90925082906112c1565b90815167ffffffffffffffff81116113d5575b6113128161130d603754610b26565b61127a565b602080601f831160011461134d5750819293600092611342575b50506000198260011b9260031b1c191617603755565b01519050388061132c565b90601f1983169461138060376000527f42a7b7dd785cd69714a189dffb3fd7d7174edc9ece837694ce50f7078f7c31ae90565b926000905b8782106113bd5750508360019596106113a4575b505050811b01603755565b015160001960f88460031b161c19169055388080611399565b80600185968294968601518155019501930190611385565b6113dd610b79565b6112fe565b9081602091031261000e575190565b506040513d6000823e3d90fd5b8060001904821181151516611411570290565b611419610bf5565b0290565b8115611427570490565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6001600160a01b0381169182156114cf576020816114b960009461149d7fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef95603554610c25565b6035556001600160a01b03166000526033602052604060002090565b6114c4828254610c25565b9055604051908152a3565b606460405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152fd5b90926110eb93604051937f23b872dd0000000000000000000000000000000000000000000000000000000060208601526001600160a01b03809216602486015216604484015260648301526064825260a0820182811067ffffffffffffffff821117611582575b604052611618565b61158a610b79565b61157a565b9081602091031261000e5751801515810361000e5790565b156115ae57565b608460405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152fd5b6001600160a01b0316906040519061162f82610ba9565b6020928383527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656484840152803b156116a657600082819282876116819796519301915af161167b6116ea565b9061171a565b8051908161168e57505050565b826110eb936116a193830101910161158f565b6115a7565b6064846040519062461bcd60e51b82526004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152fd5b3d15611715573d906116fb82610fb9565b916117096040519384610bd2565b82523d6000602084013e565b606090565b90919015611726575090565b8151156117365750805190602001fd5b6117529060405191829162461bcd60e51b835260048301610170565b0390fd5b818110611761570390565b611769610bf5565b0390565b6001600160a01b03811690811561187a5761179b816001600160a01b03166000526033602052604060002090565b5483811061181057837fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef926117eb600096610deb9403916001600160a01b03166000526033602052604060002090565b556118006117fb82603554611756565b603555565b6040519081529081906020820190565b608460405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f63650000000000000000000000000000000000000000000000000000000000006064820152fd5b608460405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f73000000000000000000000000000000000000000000000000000000000000006064820152fd5b6110eb926001600160a01b03604051937fa9059cbb0000000000000000000000000000000000000000000000000000000060208601521660248401526044830152604482526080820182811067ffffffffffffffff8211176115825760405261161856fea26469706673582212200f8d463ac774b5dff6ceff1a1582eba9bfe26bad20134ad43c0ac61b71b0c46564736f6c634300080e0033';

type InsuranceFundConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: InsuranceFundConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class InsuranceFund__factory extends ContractFactory {
  constructor(...args: InsuranceFundConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<InsuranceFund> {
    return super.deploy(overrides || {}) as Promise<InsuranceFund>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): InsuranceFund {
    return super.attach(address) as InsuranceFund;
  }
  override connect(signer: Signer): InsuranceFund__factory {
    return super.connect(signer) as InsuranceFund__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): InsuranceFundInterface {
    return new utils.Interface(_abi) as InsuranceFundInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): InsuranceFund {
    return new Contract(address, _abi, signerOrProvider) as InsuranceFund;
  }
}
