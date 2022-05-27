/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
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
    inputs: [],
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
  '0x60806040526064606e55612710606f5534801561001b57600080fd5b506119ba8061002b6000396000f3fe6080604052600436106100ff5760003560e01c8063715018a611610090578063715018a6146102485780638da5cb5b1461025d57806398733df0146102725780639e548b7f14610292578063b98b677f146102b2578063c31c9c07146102d2578063f2fde38b146102f2578063f5e95acb14610312578063fbfa77cf14610332578063fd967f471461035257600080fd5b8063062b032f146101045780632357928e1461013a5780632f48ab7d146101685780633e413bee146101885780633fc8cef3146101a8578063439370b1146101c85780635fcbd285146101d0578063690e0dda146101f05780636c13f8d71461021057806370cd8d2714610232575b600080fd5b34801561011057600080fd5b50606b54610124906001600160a01b031681565b60405161013191906115bb565b60405180910390f35b34801561014657600080fd5b5061015a6101553660046115cf565b610368565b604051908152602001610131565b34801561017457600080fd5b50606654610124906001600160a01b031681565b34801561019457600080fd5b50606554610124906001600160a01b031681565b3480156101b457600080fd5b50606754610124906001600160a01b031681565b61015a610779565b3480156101dc57600080fd5b50606854610124906001600160a01b031681565b3480156101fc57600080fd5b5061015a61020b3660046115cf565b610ae7565b34801561021c57600080fd5b5061023061022b3660046115cf565b610e5a565b005b34801561023e57600080fd5b5061015a606e5481565b34801561025457600080fd5b50610230610eba565b34801561026957600080fd5b50610124610ef5565b34801561027e57600080fd5b5061023061028d3660046115fd565b610f04565b34801561029e57600080fd5b50606c54610124906001600160a01b031681565b3480156102be57600080fd5b506102306102cd3660046115fd565b610f7c565b3480156102de57600080fd5b50606a54610124906001600160a01b031681565b3480156102fe57600080fd5b5061023061030d3660046115fd565b610ff4565b34801561031e57600080fd5b5061023061032d36600461161a565b611094565b34801561033e57600080fd5b50606954610124906001600160a01b031681565b34801561035e57600080fd5b5061015a606f5481565b60008160000361038b57604051637c946ed760e01b815260040160405180910390fd5b6065546040516323b872dd60e01b81526001600160a01b03909116906323b872dd906103bf903390309087906004016116d6565b6020604051808303816000875af11580156103de573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061040291906116fa565b506065546066546040516001600160601b0319606093841b81166020830152607d60ea1b60348301529190921b166037820152600090604b0160408051601f1981840301815260a083018252808352306020840152428383015260608301869052600060808401819052606a54925163c04b8d5960e01b8152919450916001600160a01b03169063c04b8d599061049d90859060040161171c565b6020604051808303816000875af11580156104bc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104e091906117af565b90506000606b60009054906101000a90046001600160a01b03166001600160a01b03166354f0f7d56040518163ffffffff1660e01b8152600401602060405180830381865afa158015610537573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061055b91906117af565b606c54604080516060810182528581526000602082018190528183018190529151634515cef360e01b81529394506001600160a01b0390921692634515cef3926105a99290916004016117c8565b600060405180830381600087803b1580156105c357600080fd5b505af11580156105d7573d6000803e3d6000fd5b50506068546040516370a0823160e01b8152600093506001600160a01b0390911691506370a082319061060e9030906004016115bb565b602060405180830381865afa15801561062b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061064f91906117af565b9050606f54606e54606f546106649190611816565b61066e908961182d565b61067d9064e8d4a5100061182d565b610687919061184c565b61069a8284670de0b6b3a76400006113c9565b10156106b9576040516397ebf5d960e01b815260040160405180910390fd5b606954604051636e553f6560e01b81526001600160a01b0390911690636e553f65906106eb908490339060040161186e565b6020604051808303816000875af115801561070a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061072e91906117af565b606554604080518a8152602081018590529081018390529197506001600160a01b031690339060008051602061198e8339815191529060600160405180910390a35050505050919050565b6000606760009054906101000a90046001600160a01b03166001600160a01b031663d0e30db0346040518263ffffffff1660e01b81526004016000604051808303818588803b1580156107cb57600080fd5b505af11580156107df573d6000803e3d6000fd5b50505050506000606b60009054906101000a90046001600160a01b03166001600160a01b03166354f0f7d56040518163ffffffff1660e01b8152600401602060405180830381865afa158015610839573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061085d91906117af565b606c546040805160608101825260008082526020820181905234828401529151634515cef360e01b81529394506001600160a01b0390921692634515cef3926108aa9290916004016117c8565b600060405180830381600087803b1580156108c457600080fd5b505af11580156108d8573d6000803e3d6000fd5b50506068546040516370a0823160e01b8152600093506001600160a01b0390911691506370a082319061090f9030906004016115bb565b602060405180830381865afa15801561092c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061095091906117af565b905061099c606e54606f546109659190611816565b61096f903461182d565b606f54610980906305f5e10061182d565b606d54610995906001600160a01b031661147c565b91906113c9565b6109af8284670de0b6b3a76400006113c9565b10156109ce576040516397ebf5d960e01b815260040160405180910390fd5b6069546068546040516370a0823160e01b81526001600160a01b0392831692636e553f659216906370a0823190610a099030906004016115bb565b602060405180830381865afa158015610a26573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a4a91906117af565b336040518363ffffffff1660e01b8152600401610a6892919061186e565b6020604051808303816000875af1158015610a87573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aab91906117af565b6040805134815260208101849052908101829052909350600090339060008051602061198e8339815191529060600160405180910390a3505090565b600081600003610b0a57604051637c946ed760e01b815260040160405180910390fd5b6067546040516323b872dd60e01b81526001600160a01b03909116906323b872dd90610b3e903390309087906004016116d6565b6020604051808303816000875af1158015610b5d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b8191906116fa565b50606b54604080516354f0f7d560e01b815290516000926001600160a01b0316916354f0f7d59160048083019260209291908290030181865afa158015610bcc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bf091906117af565b606c54604080516060810182526000808252602082018190528183018890529151634515cef360e01b81529394506001600160a01b0390921692634515cef392610c3e9290916004016117c8565b600060405180830381600087803b158015610c5857600080fd5b505af1158015610c6c573d6000803e3d6000fd5b50506068546040516370a0823160e01b8152600093506001600160a01b0390911691506370a0823190610ca39030906004016115bb565b602060405180830381865afa158015610cc0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ce491906117af565b9050610d03606e54606f54610cf99190611816565b61096f908661182d565b610d168284670de0b6b3a76400006113c9565b1015610d35576040516397ebf5d960e01b815260040160405180910390fd5b6069546068546040516370a0823160e01b81526001600160a01b0392831692636e553f659216906370a0823190610d709030906004016115bb565b602060405180830381865afa158015610d8d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610db191906117af565b336040518363ffffffff1660e01b8152600401610dcf92919061186e565b6020604051808303816000875af1158015610dee573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e1291906117af565b60655460408051878152602081018590529081018390529194506001600160a01b031690339060008051602061198e8339815191529060600160405180910390a35050919050565b33610e63610ef5565b6001600160a01b031614610e925760405162461bcd60e51b8152600401610e8990611885565b60405180910390fd5b606f54811115610eb557604051632d0483c560e21b815260040160405180910390fd5b606e55565b33610ec3610ef5565b6001600160a01b031614610ee95760405162461bcd60e51b8152600401610e8990611885565b610ef3600061150f565b565b6033546001600160a01b031690565b33610f0d610ef5565b6001600160a01b031614610f335760405162461bcd60e51b8152600401610e8990611885565b6001600160a01b038116610f5a57604051637c946ed760e01b815260040160405180910390fd5b606d80546001600160a01b0319166001600160a01b0392909216919091179055565b33610f85610ef5565b6001600160a01b031614610fab5760405162461bcd60e51b8152600401610e8990611885565b6001600160a01b038116610fd257604051637c946ed760e01b815260040160405180910390fd5b606a80546001600160a01b0319166001600160a01b0392909216919091179055565b33610ffd610ef5565b6001600160a01b0316146110235760405162461bcd60e51b8152600401610e8990611885565b6001600160a01b0381166110885760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610e89565b6110918161150f565b50565b600054610100900460ff166110af5760005460ff16156110b3565b303b155b6111165760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610e89565b600054610100900460ff16158015611138576000805461ffff19166101011790555b611140611561565b606580546001600160a01b03199081166001600160a01b038d8116919091179092556066805482168c84161790556067805482168b84169081179091556069805483168a85161790556068805483168b8516179055606b80548316888516179055606c80548316878516908117909155606a805484168a8616179055606d80549093169386169390931790915560405163095ea7b360e01b8152909163095ea7b3916111f39190600019906004016118ba565b6020604051808303816000875af1158015611212573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061123691906116fa565b50606654606c5460405163095ea7b360e01b81526001600160a01b039283169263095ea7b39261126f92911690600019906004016118ba565b6020604051808303816000875af115801561128e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112b291906116fa565b50606554606a5460405163095ea7b360e01b81526001600160a01b039283169263095ea7b3926112eb92911690600019906004016118ba565b6020604051808303816000875af115801561130a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061132e91906116fa565b5060685460695460405163095ea7b360e01b81526001600160a01b039283169263095ea7b39261136792911690600019906004016118ba565b6020604051808303816000875af1158015611386573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113aa91906116fa565b5080156113bd576000805461ff00191690555b50505050505050505050565b600080806000198587098587029250828110838203039150508060000361140257600084116113f757600080fd5b508290049050611475565b80841161140e57600080fd5b6000848688096000868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010186841190950394909402919094039290920491909117919091029150505b9392505050565b600080826001600160a01b031663feaf968c6040518163ffffffff1660e01b815260040160a060405180830381865afa1580156114bd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114e191906118f2565b5050509150506000811215611509576040516330e53b6960e11b815260040160405180910390fd5b92915050565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff166115885760405162461bcd60e51b8152600401610e8990611942565b610ef3600054610100900460ff166115b25760405162461bcd60e51b8152600401610e8990611942565b610ef33361150f565b6001600160a01b0391909116815260200190565b6000602082840312156115e157600080fd5b5035919050565b6001600160a01b038116811461109157600080fd5b60006020828403121561160f57600080fd5b8135611475816115e8565b60008060008060008060008060006101208a8c03121561163957600080fd5b8935611644816115e8565b985060208a0135611654816115e8565b975060408a0135611664816115e8565b965060608a0135611674816115e8565b955060808a0135611684816115e8565b945060a08a0135611694816115e8565b935060c08a01356116a4816115e8565b925060e08a01356116b4816115e8565b91506101008a01356116c5816115e8565b809150509295985092959850929598565b6001600160a01b039384168152919092166020820152604081019190915260600190565b60006020828403121561170c57600080fd5b8151801515811461147557600080fd5b60006020808352835160a08285015280518060c086015260005b818110156117525782810184015186820160e001528301611736565b8181111561176457600060e083880101525b50918501516001600160a01b0381166040860152916040860151606086015260608601516080860152608086015160a086015260e0601f19601f830116860101935050505092915050565b6000602082840312156117c157600080fd5b5051919050565b60808101818460005b60038110156117f05781518352602092830192909101906001016117d1565b5050508260608301529392505050565b634e487b7160e01b600052601160045260246000fd5b60008282101561182857611828611800565b500390565b600081600019048311821515161561184757611847611800565b500290565b60008261186957634e487b7160e01b600052601260045260246000fd5b500490565b9182526001600160a01b0316602082015260400190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6001600160a01b03929092168252602082015260400190565b805169ffffffffffffffffffff811681146118ed57600080fd5b919050565b600080600080600060a0868803121561190a57600080fd5b611913866118d3565b9450602086015193506040860151925060608601519150611936608087016118d3565b90509295509295909350565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b60608201526080019056fee9cbb4acfef5baa4563d0097e70de6d95804f768674f44f7f58096a6bb0fe03ca164736f6c634300080d000a';

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
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<VaultPeriphery> {
    return super.deploy(overrides || {}) as Promise<VaultPeriphery>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
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
