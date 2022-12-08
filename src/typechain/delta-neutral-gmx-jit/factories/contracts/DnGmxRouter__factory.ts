/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type { PromiseOrValue } from '../../common';
import type {
  DnGmxRouter,
  DnGmxRouterInterface,
} from '../../contracts/DnGmxRouter';

const _abi = [
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
    inputs: [],
    name: 'batchingManagerKeeper',
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
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'receiver',
        type: 'address',
      },
    ],
    name: 'deposit',
    outputs: [
      {
        internalType: 'uint256',
        name: 'shares',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'depositPeriphery',
    outputs: [
      {
        internalType: 'contract DepositPeriphery',
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
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'receiver',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenAmount',
        type: 'uint256',
      },
    ],
    name: 'depositToken',
    outputs: [
      {
        internalType: 'uint256',
        name: 'sharesReceived',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'dnGmxBatchingManager',
    outputs: [
      {
        internalType: 'contract IDnGmxBatchingManager',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'dnGmxJuniorVault',
    outputs: [
      {
        internalType: 'contract IDnGmxJuniorVault',
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
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'executeBatchDeposit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'executeBatchStake',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'assets',
        type: 'uint256',
      },
    ],
    name: 'getQuotes',
    outputs: [
      {
        internalType: 'uint256',
        name: 'ethQuoteWithoutJIT',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'btcQuoteWithoutJIT',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'ethQuoteWithJIT',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'btcQuoteWithJIT',
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
        name: 'assets',
        type: 'uint256',
      },
    ],
    name: 'getQuotesJitRevert',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'gmxVault',
    outputs: [
      {
        internalType: 'contract IVault',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'jitManager1',
    outputs: [
      {
        internalType: 'contract IJITManager',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'jitManager2',
    outputs: [
      {
        internalType: 'contract IJITManager',
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
    name: 'quoterV1',
    outputs: [
      {
        internalType: 'contract IQuoter',
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
    name: 'sGLP',
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
    inputs: [
      {
        internalType: 'address',
        name: '_bmKeeper',
        type: 'address',
      },
    ],
    name: 'setBatchingManagerKeeper',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IDnGmxJuniorVault',
        name: '_dnGmxJuniorVault',
        type: 'address',
      },
      {
        internalType: 'contract IDnGmxBatchingManager',
        name: '_dnGmxBatchingManager',
        type: 'address',
      },
      {
        internalType: 'contract DepositPeriphery',
        name: '_depositPeriphery',
        type: 'address',
      },
      {
        internalType: 'contract IVault',
        name: '_gmxVault',
        type: 'address',
      },
      {
        internalType: 'contract IJITManager',
        name: '_jitManager1',
        type: 'address',
      },
      {
        internalType: 'contract IJITManager',
        name: '_jitManager2',
        type: 'address',
      },
      {
        internalType: 'contract IQuoter',
        name: '_quoterV1',
        type: 'address',
      },
      {
        internalType: 'contract IERC20',
        name: '_sGLP',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_weth',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_wbtc',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_usdc',
        type: 'address',
      },
    ],
    name: 'setValues',
    outputs: [],
    stateMutability: 'nonpayable',
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
    inputs: [],
    name: 'usdc',
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
    name: 'wbtc',
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
    name: 'weth',
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
  '0x608060405234801561001057600080fd5b50612b76806100206000396000f3fe608060405234801561001057600080fd5b50600436106101585760003560e01c80638da5cb5b116100c3578063d049bfef1161007c578063d049bfef14610347578063d11533311461037a578063dd9edb5514610398578063f2fde38b146103b6578063f8a85dd8146103d2578063fb0f97a8146103f057610158565b80638da5cb5b14610297578063a25ea0ff146102b5578063a8d77412146102d1578063aa88fdc3146102ef578063b3b3453e1461030d578063c3e6ebc91461032b57610158565b80635062f814116101155780635062f8141461020d578063506f255c1461022b5780635c7f3c71146102495780636e553f6514610253578063715018a6146102835780638129fc1c1461028d57610158565b80630268f8f21461015d578063046289321461017957806304cd85bf146101955780633cdc5389146101b35780633e413bee146101d15780633fc8cef3146101ef575b600080fd5b61017760048036038101906101729190611ce3565b610420565b005b610193600480360381019061018e9190611d46565b61046c565b005b61019d6104b2565b6040516101aa9190611dd2565b60405180910390f35b6101bb6104d8565b6040516101c89190611dfc565b60405180910390f35b6101d96104fe565b6040516101e69190611dfc565b60405180910390f35b6101f7610524565b6040516102049190611dfc565b60405180910390f35b61021561054a565b6040516102229190611dd2565b60405180910390f35b610233610570565b6040516102409190611e38565b60405180910390f35b610251610596565b005b61026d60048036038101906102689190611e53565b6106aa565b60405161027a9190611ea2565b60405180910390f35b61028b610807565b005b61029561081b565b005b61029f610959565b6040516102ac9190611dfc565b60405180910390f35b6102cf60048036038101906102ca919061206f565b610983565b005b6102d9610d46565b6040516102e69190612184565b60405180910390f35b6102f7610d6c565b60405161030491906121c0565b60405180910390f35b610315610d92565b60405161032291906121fc565b60405180910390f35b61034560048036038101906103409190611d46565b610db8565b005b610361600480360381019061035c9190611d46565b610ee8565b6040516103719493929190612217565b60405180910390f35b610382611005565b60405161038f919061227d565b60405180910390f35b6103a061102b565b6040516103ad9190611dfc565b60405180910390f35b6103d060048036038101906103cb9190611ce3565b611051565b005b6103da6110d5565b6040516103e791906122b9565b60405180910390f35b61040a600480360381019061040591906122d4565b6110fb565b6040516104179190611ea2565b60405180910390f35b6104286112ca565b80607060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b610474611348565b6000806104808361148a565b9150915060008282604051602001610499929190612327565b6040516020818303038152906040529050805181602001fd5b606960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b606e60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b606f60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b606d60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b606a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b606660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b607060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610626576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161061d906123d3565b60405180910390fd5b606660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635c7f3c716040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561069057600080fd5b505af11580156106a4573d6000803e3d6000fd5b50505050565b60006106b4611348565b606b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330866040518463ffffffff1660e01b8152600401610713939291906123f3565b6020604051808303816000875af1158015610732573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107569190612462565b50606560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636e553f6584846040518363ffffffff1660e01b81526004016107b492919061248f565b6020604051808303816000875af11580156107d3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107f791906124cd565b90506108016119cf565b92915050565b61080f6112ca565b6108196000611ad5565b565b60008060019054906101000a900460ff1615905080801561084c5750600160008054906101000a900460ff1660ff16105b80610879575061085b30611b9b565b1580156108785750600160008054906101000a900460ff1660ff16145b5b6108b8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108af9061256c565b60405180910390fd5b60016000806101000a81548160ff021916908360ff16021790555080156108f5576001600060016101000a81548160ff0219169083151502179055505b6108fd611bbe565b80156109565760008060016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498600160405161094d91906125d4565b60405180910390a15b50565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b61098b6112ca565b8a606560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555089606660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555088606760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555087606860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555086606960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555085606a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555084606c60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083606b60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082606d60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081606e60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080606f60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550606b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663095ea7b3606560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff167fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6040518363ffffffff1660e01b8152600401610cf59291906125ef565b6020604051808303816000875af1158015610d14573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d389190612462565b505050505050505050505050565b606b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b606560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b606860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b607060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610e48576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e3f906123d3565b60405180910390fd5b610e50611348565b606660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663c3e6ebc9826040518263ffffffff1660e01b8152600401610eab9190611ea2565b600060405180830381600087803b158015610ec557600080fd5b505af1158015610ed9573d6000803e3d6000fd5b50505050610ee56119cf565b50565b600080600080610ef78561148a565b809450819550505060003073ffffffffffffffffffffffffffffffffffffffff16630462893260e01b87604051602401610f319190611ea2565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050604051610f9b9190612692565b6000604051808303816000865af19150503d8060008114610fd8576040519150601f19603f3d011682016040523d82523d6000602084013e610fdd565b606091505b5091505080806020019051810190610ff591906126a9565b8093508194505050509193509193565b606c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b607060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6110596112ca565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156110c9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110c09061275b565b60405180910390fd5b6110d281611ad5565b50565b606760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008373ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b815260040161113a939291906123f3565b6020604051808303816000875af1158015611159573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061117d9190612462565b508373ffffffffffffffffffffffffffffffffffffffff1663095ea7b3606760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16846040518363ffffffff1660e01b81526004016111db9291906125ef565b6020604051808303816000875af11580156111fa573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061121e9190612462565b50606760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663fb0f97a88585856040518463ffffffff1660e01b815260040161127e939291906123f3565b6020604051808303816000875af115801561129d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112c191906124cd565b90509392505050565b6112d2611c17565b73ffffffffffffffffffffffffffffffffffffffff166112f0610959565b73ffffffffffffffffffffffffffffffffffffffff1614611346576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161133d906127c7565b60405180910390fd5b565b606960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663da620cd760006040518263ffffffff1660e01b81526004016113a491906127f6565b6020604051808303816000875af11580156113c3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113e791906124cd565b50606a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663da620cd760006040518263ffffffff1660e01b815260040161144491906127f6565b6020604051808303816000875af1158015611463573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061148791906124cd565b50565b6000806000606560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633d672a456040518163ffffffff1660e01b8152600401602060405180830381865afa1580156114fc573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061152091906124cd565b90506000608085836115329190612840565b901c90506000606860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663dc8f5fac6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156115a5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115c991906124cd565b90506000606860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ab2f3ad4606d60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518263ffffffff1660e01b815260040161164a9190611dfc565b602060405180830381865afa158015611667573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061168b91906124cd565b90506000606860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ab2f3ad4606e60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518263ffffffff1660e01b815260040161170c9190611dfc565b602060405180830381865afa158015611729573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061174d91906124cd565b9050600083838661175e9190612840565b61176891906128c9565b905060008483876117799190612840565b61178391906128c9565b9050606c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16632f80bb1d606f60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166101f4606d60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660405160200161181e93929190612987565b604051602081830303815290604052846040518363ffffffff1660e01b815260040161184b929190612a1f565b6020604051808303816000875af115801561186a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061188e91906124cd565b9850606c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16632f80bb1d606f60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166101f4606d60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166101f4606e60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051602001611951959493929190612a4f565b604051602081830303815290604052836040518363ffffffff1660e01b815260040161197e929190612a1f565b6020604051808303816000875af115801561199d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119c191906124cd565b975050505050505050915091565b606960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166367b9a2866040518163ffffffff1660e01b8152600401600060405180830381600087803b158015611a3957600080fd5b505af1158015611a4d573d6000803e3d6000fd5b50505050606a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166367b9a2866040518163ffffffff1660e01b8152600401600060405180830381600087803b158015611abb57600080fd5b505af1158015611acf573d6000803e3d6000fd5b50505050565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081603360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600060019054906101000a900460ff16611c0d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c0490612b20565b60405180910390fd5b611c15611c1f565b565b600033905090565b600060019054906101000a900460ff16611c6e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c6590612b20565b60405180910390fd5b611c7e611c79611c17565b611ad5565b565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611cb082611c85565b9050919050565b611cc081611ca5565b8114611ccb57600080fd5b50565b600081359050611cdd81611cb7565b92915050565b600060208284031215611cf957611cf8611c80565b5b6000611d0784828501611cce565b91505092915050565b6000819050919050565b611d2381611d10565b8114611d2e57600080fd5b50565b600081359050611d4081611d1a565b92915050565b600060208284031215611d5c57611d5b611c80565b5b6000611d6a84828501611d31565b91505092915050565b6000819050919050565b6000611d98611d93611d8e84611c85565b611d73565b611c85565b9050919050565b6000611daa82611d7d565b9050919050565b6000611dbc82611d9f565b9050919050565b611dcc81611db1565b82525050565b6000602082019050611de76000830184611dc3565b92915050565b611df681611ca5565b82525050565b6000602082019050611e116000830184611ded565b92915050565b6000611e2282611d9f565b9050919050565b611e3281611e17565b82525050565b6000602082019050611e4d6000830184611e29565b92915050565b60008060408385031215611e6a57611e69611c80565b5b6000611e7885828601611d31565b9250506020611e8985828601611cce565b9150509250929050565b611e9c81611d10565b82525050565b6000602082019050611eb76000830184611e93565b92915050565b6000611ec882611ca5565b9050919050565b611ed881611ebd565b8114611ee357600080fd5b50565b600081359050611ef581611ecf565b92915050565b6000611f0682611ca5565b9050919050565b611f1681611efb565b8114611f2157600080fd5b50565b600081359050611f3381611f0d565b92915050565b6000611f4482611ca5565b9050919050565b611f5481611f39565b8114611f5f57600080fd5b50565b600081359050611f7181611f4b565b92915050565b6000611f8282611ca5565b9050919050565b611f9281611f77565b8114611f9d57600080fd5b50565b600081359050611faf81611f89565b92915050565b6000611fc082611ca5565b9050919050565b611fd081611fb5565b8114611fdb57600080fd5b50565b600081359050611fed81611fc7565b92915050565b6000611ffe82611ca5565b9050919050565b61200e81611ff3565b811461201957600080fd5b50565b60008135905061202b81612005565b92915050565b600061203c82611ca5565b9050919050565b61204c81612031565b811461205757600080fd5b50565b60008135905061206981612043565b92915050565b60008060008060008060008060008060006101608c8e03121561209557612094611c80565b5b60006120a38e828f01611ee6565b9b505060206120b48e828f01611f24565b9a505060406120c58e828f01611f62565b99505060606120d68e828f01611fa0565b98505060806120e78e828f01611fde565b97505060a06120f88e828f01611fde565b96505060c06121098e828f0161201c565b95505060e061211a8e828f0161205a565b94505061010061212c8e828f01611cce565b93505061012061213e8e828f01611cce565b9250506101406121508e828f01611cce565b9150509295989b509295989b9093969950565b600061216e82611d9f565b9050919050565b61217e81612163565b82525050565b60006020820190506121996000830184612175565b92915050565b60006121aa82611d9f565b9050919050565b6121ba8161219f565b82525050565b60006020820190506121d560008301846121b1565b92915050565b60006121e682611d9f565b9050919050565b6121f6816121db565b82525050565b600060208201905061221160008301846121ed565b92915050565b600060808201905061222c6000830187611e93565b6122396020830186611e93565b6122466040830185611e93565b6122536060830184611e93565b95945050505050565b600061226782611d9f565b9050919050565b6122778161225c565b82525050565b6000602082019050612292600083018461226e565b92915050565b60006122a382611d9f565b9050919050565b6122b381612298565b82525050565b60006020820190506122ce60008301846122aa565b92915050565b6000806000606084860312156122ed576122ec611c80565b5b60006122fb86828701611cce565b935050602061230c86828701611cce565b925050604061231d86828701611d31565b9150509250925092565b600060408201905061233c6000830185611e93565b6123496020830184611e93565b9392505050565b600082825260208201905092915050565b7f446e476d78526f757465723a206e6f74206261746368696e67206d616e61676560008201527f72206b6565706572000000000000000000000000000000000000000000000000602082015250565b60006123bd602883612350565b91506123c882612361565b604082019050919050565b600060208201905081810360008301526123ec816123b0565b9050919050565b60006060820190506124086000830186611ded565b6124156020830185611ded565b6124226040830184611e93565b949350505050565b60008115159050919050565b61243f8161242a565b811461244a57600080fd5b50565b60008151905061245c81612436565b92915050565b60006020828403121561247857612477611c80565b5b60006124868482850161244d565b91505092915050565b60006040820190506124a46000830185611e93565b6124b16020830184611ded565b9392505050565b6000815190506124c781611d1a565b92915050565b6000602082840312156124e3576124e2611c80565b5b60006124f1848285016124b8565b91505092915050565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b6000612556602e83612350565b9150612561826124fa565b604082019050919050565b6000602082019050818103600083015261258581612549565b9050919050565b6000819050919050565b600060ff82169050919050565b60006125be6125b96125b48461258c565b611d73565b612596565b9050919050565b6125ce816125a3565b82525050565b60006020820190506125e960008301846125c5565b92915050565b60006040820190506126046000830185611ded565b6126116020830184611e93565b9392505050565b600081519050919050565b600081905092915050565b60005b8381101561264c578082015181840152602081019050612631565b8381111561265b576000848401525b50505050565b600061266c82612618565b6126768185612623565b935061268681856020860161262e565b80840191505092915050565b600061269e8284612661565b915081905092915050565b600080604083850312156126c0576126bf611c80565b5b60006126ce858286016124b8565b92505060206126df858286016124b8565b9150509250929050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000612745602683612350565b9150612750826126e9565b604082019050919050565b6000602082019050818103600083015261277481612738565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006127b1602083612350565b91506127bc8261277b565b602082019050919050565b600060208201905081810360008301526127e0816127a4565b9050919050565b6127f08161242a565b82525050565b600060208201905061280b60008301846127e7565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061284b82611d10565b915061285683611d10565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561288f5761288e612811565b5b828202905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006128d482611d10565b91506128df83611d10565b9250826128ef576128ee61289a565b5b828204905092915050565b60008160601b9050919050565b6000612912826128fa565b9050919050565b600061292482612907565b9050919050565b61293c61293782611ca5565b612919565b82525050565b600062ffffff82169050919050565b60008160e81b9050919050565b600061296982612951565b9050919050565b61298161297c82612942565b61295e565b82525050565b6000612993828661292b565b6014820191506129a38285612970565b6003820191506129b3828461292b565b601482019150819050949350505050565b600082825260208201905092915050565b6000601f19601f8301169050919050565b60006129f182612618565b6129fb81856129c4565b9350612a0b81856020860161262e565b612a14816129d5565b840191505092915050565b60006040820190508181036000830152612a3981856129e6565b9050612a486020830184611e93565b9392505050565b6000612a5b828861292b565b601482019150612a6b8287612970565b600382019150612a7b828661292b565b601482019150612a8b8285612970565b600382019150612a9b828461292b565b6014820191508190509695505050505050565b7f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960008201527f6e697469616c697a696e67000000000000000000000000000000000000000000602082015250565b6000612b0a602b83612350565b9150612b1582612aae565b604082019050919050565b60006020820190508181036000830152612b3981612afd565b905091905056fea26469706673582212201928ee41f4a5a5cafe59558bf22239f2786b12e6e9e87f3847c7c2fa3231e37c64736f6c634300080a0033';

type DnGmxRouterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DnGmxRouterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DnGmxRouter__factory extends ContractFactory {
  constructor(...args: DnGmxRouterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DnGmxRouter> {
    return super.deploy(overrides || {}) as Promise<DnGmxRouter>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DnGmxRouter {
    return super.attach(address) as DnGmxRouter;
  }
  override connect(signer: Signer): DnGmxRouter__factory {
    return super.connect(signer) as DnGmxRouter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DnGmxRouterInterface {
    return new utils.Interface(_abi) as DnGmxRouterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DnGmxRouter {
    return new Contract(address, _abi, signerOrProvider) as DnGmxRouter;
  }
}
