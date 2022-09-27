/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type { PromiseOrValue } from '../../../common';
import type {
  VaultPeriphery,
  VaultPeripheryInterface,
} from '../../../contracts/yieldStrategy/VaultPeriphery';

const _abi = [
  {
    inputs: [],
    name: 'NegativePrice',
    type: 'error',
  },
  {
    inputs: [],
    name: 'OutOfBounds',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'crv3received',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'lpPrice',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'inputAmount',
        type: 'uint256',
      },
    ],
    name: 'SlippageToleranceBreached',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ZeroValue',
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
        name: 'token',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'asset',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'shares',
        type: 'uint256',
      },
    ],
    name: 'DepositPeriphery',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'oldEthOracle',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newEthOracle',
        type: 'address',
      },
    ],
    name: 'EthOracleUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint8',
        name: 'version',
        type: 'uint8',
      },
    ],
    name: 'Initialized',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'oldTolerance',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newTolerance',
        type: 'uint256',
      },
    ],
    name: 'SlippageToleranceUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'oldSwapRouter',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newSwapRouter',
        type: 'address',
      },
    ],
    name: 'SwapRouterUpdated',
    type: 'event',
  },
  {
    inputs: [],
    name: 'MAX_BPS',
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
    inputs: [],
    name: 'MAX_TOLERANCE',
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
    inputs: [],
    name: 'depositEth',
    outputs: [
      {
        internalType: 'uint256',
        name: 'sharesMinted',
        type: 'uint256',
      },
    ],
    stateMutability: 'payable',
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
    name: 'depositUsdc',
    outputs: [
      {
        internalType: 'uint256',
        name: 'sharesMinted',
        type: 'uint256',
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
    name: 'depositWeth',
    outputs: [
      {
        internalType: 'uint256',
        name: 'sharesMinted',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IERC20',
        name: '_usdc',
        type: 'address',
      },
      {
        internalType: 'contract IERC20',
        name: '_usdt',
        type: 'address',
      },
      {
        internalType: 'contract IWETH9',
        name: '_weth',
        type: 'address',
      },
      {
        internalType: 'contract IERC20',
        name: '_lpToken',
        type: 'address',
      },
      {
        internalType: 'contract IERC4626',
        name: '_vault',
        type: 'address',
      },
      {
        internalType: 'contract ISwapRouter',
        name: '_swapRouter',
        type: 'address',
      },
      {
        internalType: 'contract ILPPriceGetter',
        name: '_lpOracle',
        type: 'address',
      },
      {
        internalType: 'contract ICurveStableSwap',
        name: '_stableSwap',
        type: 'address',
      },
      {
        internalType: 'contract AggregatorV3Interface',
        name: '_ethOracle',
        type: 'address',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'lpOracle',
    outputs: [
      {
        internalType: 'contract ILPPriceGetter',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'lpToken',
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
    name: 'owner',
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
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'stableSwap',
    outputs: [
      {
        internalType: 'contract ICurveStableSwap',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'swapRouter',
    outputs: [
      {
        internalType: 'contract ISwapRouter',
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
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOracle',
        type: 'address',
      },
    ],
    name: 'updateEthOracle',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newRouter',
        type: 'address',
      },
    ],
    name: 'updateSwapRouter',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'newTolerance',
        type: 'uint256',
      },
    ],
    name: 'updateTolerance',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'usdc',
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
    name: 'usdt',
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
    name: 'vault',
    outputs: [
      {
        internalType: 'contract IERC4626',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'weth',
    outputs: [
      {
        internalType: 'contract IWETH9',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

const _bytecode =
  '0x60806040526064606e55612710606f5534801561001b57600080fd5b50611cc78061002b6000396000f3fe60806040526004361061011f5760003560e01c8063715018a6116100a0578063c31c9c0711610064578063c31c9c0714610302578063f2fde38b14610322578063f5e95acb14610342578063fbfa77cf14610362578063fd967f471461038257600080fd5b8063715018a61461026f5780638da5cb5b1461028457806398733df0146102a25780639e548b7f146102c2578063b98b677f146102e257600080fd5b8063439370b1116100e7578063439370b1146101ef5780635fcbd285146101f7578063690e0dda146102175780636c13f8d71461023757806370cd8d271461025957600080fd5b8063062b032f146101245780632357928e146101615780632f48ab7d1461018f5780633e413bee146101af5780633fc8cef3146101cf575b600080fd5b34801561013057600080fd5b50606b54610144906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b34801561016d57600080fd5b5061018161017c3660046119b5565b610398565b604051908152602001610158565b34801561019b57600080fd5b50606654610144906001600160a01b031681565b3480156101bb57600080fd5b50606554610144906001600160a01b031681565b3480156101db57600080fd5b50606754610144906001600160a01b031681565b6101816107d5565b34801561020357600080fd5b50606854610144906001600160a01b031681565b34801561022357600080fd5b506101816102323660046119b5565b610b62565b34801561024357600080fd5b506102576102523660046119b5565b610ef9565b005b34801561026557600080fd5b50610181606e5481565b34801561027b57600080fd5b50610257610fa5565b34801561029057600080fd5b506033546001600160a01b0316610144565b3480156102ae57600080fd5b506102576102bd3660046119e3565b610ff9565b3480156102ce57600080fd5b50606c54610144906001600160a01b031681565b3480156102ee57600080fd5b506102576102fd3660046119e3565b6110c4565b34801561030e57600080fd5b50606a54610144906001600160a01b031681565b34801561032e57600080fd5b5061025761033d3660046119e3565b611280565b34801561034e57600080fd5b5061025761035d366004611a00565b611339565b34801561036e57600080fd5b50606954610144906001600160a01b031681565b34801561038e57600080fd5b50610181606f5481565b6000816000036103bb57604051637c946ed760e01b815260040160405180910390fd5b6065546040516323b872dd60e01b8152336004820152306024820152604481018490526001600160a01b03909116906323b872dd906064016020604051808303816000875af1158015610412573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104369190611abc565b506065546066546040516bffffffffffffffffffffffff19606093841b81166020830152607d60ea1b60348301529190921b166037820152600090604b0160408051601f1981840301815260a083018252808352306020840152428383015260608301869052600060808401819052606a54925163c04b8d5960e01b8152919450916001600160a01b03169063c04b8d59906104d6908590600401611ade565b6020604051808303816000875af11580156104f5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105199190611b71565b90506000606b60009054906101000a90046001600160a01b03166001600160a01b03166354f0f7d56040518163ffffffff1660e01b8152600401602060405180830381865afa158015610570573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105949190611b71565b606c54604080516060810182528581526000602082018190528183018190529151634515cef360e01b81529394506001600160a01b0390921692634515cef3926105e2929091600401611b8a565b600060405180830381600087803b1580156105fc57600080fd5b505af1158015610610573d6000803e3d6000fd5b50506068546040516370a0823160e01b8152306004820152600093506001600160a01b0390911691506370a0823190602401602060405180830381865afa15801561065f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106839190611b71565b9050606f54606e54606f546106989190611bd8565b6106a29089611bef565b6106b19064e8d4a51000611bef565b6106bb9190611c0e565b6106ce8284670de0b6b3a7640000611620565b10156107035760405163591a499b60e01b81526004810182905260248101839052604481018890526064015b60405180910390fd5b606954604051636e553f6560e01b8152600481018390523360248201526001600160a01b0390911690636e553f65906044016020604051808303816000875af1158015610754573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107789190611b71565b606554604080518a8152602081018590529081018390529197506001600160a01b03169033907fe9cbb4acfef5baa4563d0097e70de6d95804f768674f44f7f58096a6bb0fe03c9060600160405180910390a35050505050919050565b6000606760009054906101000a90046001600160a01b03166001600160a01b031663d0e30db0346040518263ffffffff1660e01b81526004016000604051808303818588803b15801561082757600080fd5b505af115801561083b573d6000803e3d6000fd5b50505050506000606b60009054906101000a90046001600160a01b03166001600160a01b03166354f0f7d56040518163ffffffff1660e01b8152600401602060405180830381865afa158015610895573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108b99190611b71565b606c546040805160608101825260008082526020820181905234828401529151634515cef360e01b81529394506001600160a01b0390921692634515cef392610906929091600401611b8a565b600060405180830381600087803b15801561092057600080fd5b505af1158015610934573d6000803e3d6000fd5b50506068546040516370a0823160e01b8152306004820152600093506001600160a01b0390911691506370a0823190602401602060405180830381865afa158015610983573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109a79190611b71565b90506109f3606e54606f546109bc9190611bd8565b6109c69034611bef565b606f546109d7906305f5e100611bef565b606d546109ec906001600160a01b03166116d3565b9190611620565b610a068284670de0b6b3a7640000611620565b1015610a355760405163591a499b60e01b815260048101829052602481018390523460448201526064016106fa565b6069546068546040516370a0823160e01b81523060048201526001600160a01b0392831692636e553f659216906370a0823190602401602060405180830381865afa158015610a88573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aac9190611b71565b6040516001600160e01b031960e084901b16815260048101919091523360248201526044016020604051808303816000875af1158015610af0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b149190611b71565b604080513481526020810184905290810182905290935060009033907fe9cbb4acfef5baa4563d0097e70de6d95804f768674f44f7f58096a6bb0fe03c9060600160405180910390a3505090565b600081600003610b8557604051637c946ed760e01b815260040160405180910390fd5b6067546040516323b872dd60e01b8152336004820152306024820152604481018490526001600160a01b03909116906323b872dd906064016020604051808303816000875af1158015610bdc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c009190611abc565b50606b54604080516354f0f7d560e01b815290516000926001600160a01b0316916354f0f7d59160048083019260209291908290030181865afa158015610c4b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c6f9190611b71565b606c54604080516060810182526000808252602082018190528183018890529151634515cef360e01b81529394506001600160a01b0390921692634515cef392610cbd929091600401611b8a565b600060405180830381600087803b158015610cd757600080fd5b505af1158015610ceb573d6000803e3d6000fd5b50506068546040516370a0823160e01b8152306004820152600093506001600160a01b0390911691506370a0823190602401602060405180830381865afa158015610d3a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d5e9190611b71565b9050610d7d606e54606f54610d739190611bd8565b6109c69086611bef565b610d908284670de0b6b3a7640000611620565b1015610dc05760405163591a499b60e01b81526004810182905260248101839052604481018590526064016106fa565b6069546068546040516370a0823160e01b81523060048201526001600160a01b0392831692636e553f659216906370a0823190602401602060405180830381865afa158015610e13573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e379190611b71565b6040516001600160e01b031960e084901b16815260048101919091523360248201526044016020604051808303816000875af1158015610e7b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e9f9190611b71565b60675460408051878152602081018590529081018390529194506001600160a01b03169033907fe9cbb4acfef5baa4563d0097e70de6d95804f768674f44f7f58096a6bb0fe03c9060600160405180910390a35050919050565b6033546001600160a01b03163314610f415760405162461bcd60e51b81526020600482018190526024820152600080516020611c9b83398151915260448201526064016106fa565b606f54811115610f6457604051632d0483c560e21b815260040160405180910390fd5b606e5460408051918252602082018390527fddd31550b26e9ef8ade466958be83ff8a014d9b4f36d546b61a6847a45306575910160405180910390a1606e55565b6033546001600160a01b03163314610fed5760405162461bcd60e51b81526020600482018190526024820152600080516020611c9b83398151915260448201526064016106fa565b610ff76000611766565b565b6033546001600160a01b031633146110415760405162461bcd60e51b81526020600482018190526024820152600080516020611c9b83398151915260448201526064016106fa565b6001600160a01b03811661106857604051637c946ed760e01b815260040160405180910390fd5b606d546040516001600160a01b038084169216907f506c3ce5ff7c5b441ef44fea6a5ac7e95144c4c2c4f548ce2801d7394761dae290600090a3606d80546001600160a01b0319166001600160a01b0392909216919091179055565b6033546001600160a01b0316331461110c5760405162461bcd60e51b81526020600482018190526024820152600080516020611c9b83398151915260448201526064016106fa565b6001600160a01b03811661113357604051637c946ed760e01b815260040160405180910390fd5b60655460405163095ea7b360e01b81526001600160a01b038381166004830152600060248301529091169063095ea7b3906044016020604051808303816000875af1158015611186573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111aa9190611abc565b5060655460405163095ea7b360e01b81526001600160a01b03838116600483015260001960248301529091169063095ea7b3906044016020604051808303816000875af11580156111ff573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112239190611abc565b50606a546040516001600160a01b038084169216907fca394f95d8dbf1e8b2e76b9a8da90cacce1da85181a65508dab13212dc1df53b90600090a3606a80546001600160a01b0319166001600160a01b0392909216919091179055565b6033546001600160a01b031633146112c85760405162461bcd60e51b81526020600482018190526024820152600080516020611c9b83398151915260448201526064016106fa565b6001600160a01b03811661132d5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016106fa565b61133681611766565b50565b600061134560016117b8565b9050801561135d576000805461ff0019166101001790555b6113656118d3565b606580546001600160a01b03199081166001600160a01b038d8116919091179092556066805482168c84161790556067805482168b84169081179091556069805483168a85161790556068805483168b8516179055606b80548316888516179055606c80548316878516908117909155606a805484168a8616179055606d80549093169386169390931790915560405163095ea7b360e01b8152600481019290925260001960248301529063095ea7b3906044016020604051808303816000875af1158015611438573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061145c9190611abc565b50606654606c5460405163095ea7b360e01b81526001600160a01b039182166004820152600019602482015291169063095ea7b3906044016020604051808303816000875af11580156114b3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114d79190611abc565b50606554606a5460405163095ea7b360e01b81526001600160a01b039182166004820152600019602482015291169063095ea7b3906044016020604051808303816000875af115801561152e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115529190611abc565b5060685460695460405163095ea7b360e01b81526001600160a01b039182166004820152600019602482015291169063095ea7b3906044016020604051808303816000875af11580156115a9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115cd9190611abc565b508015611614576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b50505050505050505050565b6000808060001985870985870292508281108382030391505080600003611659576000841161164e57600080fd5b5082900490506116cc565b80841161166557600080fd5b6000848688096000868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010186841190950394909402919094039290920491909117919091029150505b9392505050565b600080826001600160a01b031663feaf968c6040518163ffffffff1660e01b815260040160a060405180830381865afa158015611714573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117389190611c4a565b5050509150506000811215611760576040516330e53b6960e11b815260040160405180910390fd5b92915050565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60008054610100900460ff1615611846578160ff1660011480156117db5750303b155b61183e5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016106fa565b506000919050565b60005460ff8084169116106118b45760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016106fa565b506000805460ff191660ff92909216919091179055600190565b919050565b600054610100900460ff1661193e5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b60648201526084016106fa565b610ff7600054610100900460ff166119ac5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b60648201526084016106fa565b610ff733611766565b6000602082840312156119c757600080fd5b5035919050565b6001600160a01b038116811461133657600080fd5b6000602082840312156119f557600080fd5b81356116cc816119ce565b60008060008060008060008060006101208a8c031215611a1f57600080fd5b8935611a2a816119ce565b985060208a0135611a3a816119ce565b975060408a0135611a4a816119ce565b965060608a0135611a5a816119ce565b955060808a0135611a6a816119ce565b945060a08a0135611a7a816119ce565b935060c08a0135611a8a816119ce565b925060e08a0135611a9a816119ce565b91506101008a0135611aab816119ce565b809150509295985092959850929598565b600060208284031215611ace57600080fd5b815180151581146116cc57600080fd5b60006020808352835160a08285015280518060c086015260005b81811015611b145782810184015186820160e001528301611af8565b81811115611b2657600060e083880101525b50918501516001600160a01b0381166040860152916040860151606086015260608601516080860152608086015160a086015260e0601f19601f830116860101935050505092915050565b600060208284031215611b8357600080fd5b5051919050565b60808101818460005b6003811015611bb2578151835260209283019290910190600101611b93565b5050508260608301529392505050565b634e487b7160e01b600052601160045260246000fd5b600082821015611bea57611bea611bc2565b500390565b6000816000190483118215151615611c0957611c09611bc2565b500290565b600082611c2b57634e487b7160e01b600052601260045260246000fd5b500490565b805169ffffffffffffffffffff811681146118ce57600080fd5b600080600080600060a08688031215611c6257600080fd5b611c6b86611c30565b9450602086015193506040860151925060608601519150611c8e60808701611c30565b9050929550929590935056fe4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572a164736f6c634300080e000a';

type VaultPeripheryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VaultPeripheryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class VaultPeriphery__factory extends ContractFactory {
  constructor(...args: VaultPeripheryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<VaultPeriphery> {
    return super.deploy(overrides || {}) as Promise<VaultPeriphery>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): VaultPeriphery {
    return super.attach(address) as VaultPeriphery;
  }
  override connect(signer: Signer): VaultPeriphery__factory {
    return super.connect(signer) as VaultPeriphery__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VaultPeripheryInterface {
    return new utils.Interface(_abi) as VaultPeripheryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VaultPeriphery {
    return new Contract(address, _abi, signerOrProvider) as VaultPeriphery;
  }
}