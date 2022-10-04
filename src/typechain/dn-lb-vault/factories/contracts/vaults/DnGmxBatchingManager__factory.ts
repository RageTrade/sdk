/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type { PromiseOrValue } from '../../../common';
import type {
  DnGmxBatchingManager,
  DnGmxBatchingManagerInterface,
} from '../../../contracts/vaults/DnGmxBatchingManager';

const _abi = [
  {
    inputs: [],
    name: 'CallerNotKeeper',
    type: 'error',
  },
  {
    inputs: [],
    name: 'CallerNotVault',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'balance',
        type: 'uint256',
      },
    ],
    name: 'InsufficientShares',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'errorCode',
        type: 'uint256',
      },
    ],
    name: 'InvalidInput',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'bool',
        name: 'currentValue',
        type: 'bool',
      },
    ],
    name: 'InvalidSetDepositPaused',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'vault',
        type: 'address',
      },
    ],
    name: 'InvalidVault',
    type: 'error',
  },
  {
    inputs: [],
    name: 'NoUsdcBalance',
    type: 'error',
  },
  {
    inputs: [],
    name: 'VaultAlreadyAdded',
    type: 'error',
  },
  {
    inputs: [],
    name: 'VaultsLimitExceeded',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ZeroBalance',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'round',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'userUsdcAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'userGlpAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'userShareAmount',
        type: 'uint256',
      },
    ],
    name: 'BatchDeposit',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'round',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'userUsdcAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'userGlpAmount',
        type: 'uint256',
      },
    ],
    name: 'BatchStake',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'round',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'receiver',
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
        name: 'glpStaked',
        type: 'uint256',
      },
    ],
    name: 'DepositToken',
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
        indexed: false,
        internalType: 'address',
        name: 'newKeeper',
        type: 'address',
      },
    ],
    name: 'KeeperUpdated',
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
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'Paused',
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
        name: 'receiver',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'claimAmount',
        type: 'uint256',
      },
    ],
    name: 'SharesClaimed',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'Unpaused',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'vault',
        type: 'address',
      },
    ],
    name: 'VaultAdded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'vaultGlpAmount',
        type: 'uint256',
      },
    ],
    name: 'VaultDeposit',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'receiver',
        type: 'address',
      },
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
    name: 'currentRound',
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
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'minUSDG',
        type: 'uint256',
      },
    ],
    name: 'depositToken',
    outputs: [
      {
        internalType: 'uint256',
        name: 'glpStaked',
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
      {
        internalType: 'address',
        name: 'receiver',
        type: 'address',
      },
    ],
    name: 'depositUsdc',
    outputs: [
      {
        internalType: 'uint256',
        name: 'glpStaked',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
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
    inputs: [],
    name: 'dnGmxJuniorVaultGlpBalance',
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
    inputs: [],
    name: 'grantAllowances',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IERC20',
        name: '_sGlp',
        type: 'address',
      },
      {
        internalType: 'contract IRewardRouterV2',
        name: '_rewardRouter',
        type: 'address',
      },
      {
        internalType: 'contract IGlpManager',
        name: '_glpManager',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_dnGmxJuniorVault',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_keeper',
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
    name: 'keeper',
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
    name: 'pauseDeposit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'paused',
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
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'round',
        type: 'uint256',
      },
    ],
    name: 'roundDeposits',
    outputs: [
      {
        components: [
          {
            internalType: 'uint128',
            name: 'totalUsdc',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'totalShares',
            type: 'uint128',
          },
        ],
        internalType: 'struct IDnGmxBatchingManager.RoundDeposit',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'roundUsdcBalance',
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
        name: '_keeper',
        type: 'address',
      },
    ],
    name: 'setKeeper',
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
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'unclaimedShares',
    outputs: [
      {
        internalType: 'uint256',
        name: 'shares',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'unpauseDeposit',
    outputs: [],
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
    name: 'usdcBalance',
    outputs: [
      {
        internalType: 'uint256',
        name: 'balance',
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
        name: 'account',
        type: 'address',
      },
    ],
    name: 'userDeposits',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'round',
            type: 'uint256',
          },
          {
            internalType: 'uint128',
            name: 'usdcBalance',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'unclaimedShares',
            type: 'uint128',
          },
        ],
        internalType: 'struct IDnGmxBatchingManager.UserDeposit',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'vaultBatchingState',
    outputs: [
      {
        internalType: 'uint256',
        name: 'currentRound',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'roundUsdcBalance',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'roundGlpStaked',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'vaultCount',
    outputs: [
      {
        internalType: 'uint16',
        name: '',
        type: 'uint16',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

const _bytecode =
  '0x608060405234801561001057600080fd5b5061194f806100206000396000f3fe608060405234801561001057600080fd5b50600436106101a35760003560e01c80638a19c8bc116100ee578063aad3ec9611610097578063bf9571f111610071578063bf9571f1146103fe578063ca0ede5014610406578063dae115f61461040f578063f2fde38b1461049257600080fd5b8063aad3ec96146103c5578063ab504ad5146103d8578063aced1661146103eb57600080fd5b806399c6d2de116100c857806399c6d2de14610377578063a7c6a1001461038a578063aa88fdc3146103b257600080fd5b80638a19c8bc146103195780638d100017146103225780638da5cb5b1461035257600080fd5b8063584150751161015057806369026e881161012a57806369026e88146102f6578063715018a6146102fe578063748747e61461030657600080fd5b806358415075146102cf5780635c7f3c71146102d85780635c975abb146102e057600080fd5b80631459457a116101815780631459457a146102aa578063180282b3146102bf5780635157ced5146102c757600080fd5b806301df331d146101a85780630ba36dcd146101ce5780631068466714610274575b600080fd5b6101bb6101b63660046116ea565b6104a5565b6040519081526020015b60405180910390f35b6102416101dc36600461171a565b6040805160608082018352600080835260208084018290529284018190526001600160a01b039490941684526101058252928290208251938401835280548452600101546001600160801b0380821692850192909252600160801b9004169082015290565b60408051825181526020808401516001600160801b039081169183019190915292820151909216908201526060016101c5565b6101bb61028236600461171a565b6001600160a01b0316600090815261010560205260409020600101546001600160801b031690565b6102bd6102b8366004611737565b61071f565b005b6102bd61084a565b6102bd610927565b6101bb60fd5481565b6102bd61095a565b60655460ff1660405190151581526020016101c5565b6102bd610974565b6102bd6109a7565b6102bd61031436600461171a565b6109b9565b610102546101bb565b61010254610103546101045461033792919083565b604080519384526020840192909252908201526060016101c5565b6033546001600160a01b03165b6040516001600160a01b0390911681526020016101c5565b6101bb6103853660046117a8565b610a15565b60fc5461039f90600160a01b900461ffff1681565b60405161ffff90911681526020016101c5565b60fc5461035f906001600160a01b031681565b6102bd6103d33660046117dd565b610b95565b6101bb6103e636600461171a565b610dc5565b60fb5461035f906001600160a01b031681565b6102bd610eaa565b610103546101bb565b61046b61041d366004611809565b604080518082019091526000808252602082015250600090815261010660209081526040918290208251808401909352546001600160801b038082168452600160801b909104169082015290565b6040805182516001600160801b0390811682526020938401511692810192909252016101c5565b6102bd6104a036600461171a565b610f2f565b60006104af610fa5565b826000036104d85760405163b80480b160e01b8152602160048201526024015b60405180910390fd5b6001600160a01b0382166105025760405163b80480b160e01b8152602260048201526024016104cf565b60ff546040516323b872dd60e01b8152336004820152306024820152604481018590526001600160a01b03909116906323b872dd906064016020604051808303816000875af1158015610559573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061057d9190611822565b506001600160a01b03821660009081526101056020526040902060018101548154610102546001600160801b0390921691811080156105c557506000826001600160801b0316115b15610657576000818152610106602052604090208054600185015461060991610604916001600160801b0390811691600160801b810482169116610feb565b61109e565b60018501805460109061062d908490600160801b90046001600160801b031661185a565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060009250505b6101025483556106668661109e565b610670908361185a565b6001840180546fffffffffffffffffffffffffffffffff19166001600160801b03929092169190911790556106a48661109e565b6001600160801b031661010260010160008282546106c29190611885565b909155505060ff546101025460408051898152602081018890526001600160a01b03898116941692917f3b7ce5782971bc1c2a722cba69f6f8bccbe8dd1a68d213ea39f1b681726092d4910160405180910390a450505092915050565b600054610100900460ff161580801561073f5750600054600160ff909116105b806107595750303b158015610759575060005460ff166001145b6107bc5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016104cf565b6000805460ff1916600117905580156107df576000805461ff0019166101001790555b6107e76110b9565b6107ef6110e8565b6107fc8686868686611117565b8015610842576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b505050505050565b60fd541561090a5760fd8054600090915560fe5460fc5460405163a9059cbb60e01b81526001600160a01b0391821660048201526024810184905291169063a9059cbb906044016020604051808303816000875af11580156108b0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108d49190611822565b506040518181527fabf360404ae6ccd945919fc14edb22686b6941aeee15d786c7047e4a0107eba59060200160405180910390a1505b6109126111cf565b60655460ff161561092557610925611334565b565b60fb546001600160a01b03163314610952576040516304e1fa9f60e01b815260040160405180910390fd5b610925611334565b610962611386565b60655460ff166109255761092561142e565b60fb546001600160a01b0316331461099f576040516304e1fa9f60e01b815260040160405180910390fd5b61092561142e565b6109af61146b565b61092560006114c5565b6109c161146b565b60fb80546001600160a01b0319166001600160a01b0383169081179091556040519081527f0425bcd291db1d48816f2a98edc7ecaf6dd5c64b973d9e4b3b6b750763dc6c2e9060200160405180910390a150565b6000610a1f610fa5565b60fc546001600160a01b03163314610a4a5760405163edd7338f60e01b815260040160405180910390fd5b6001600160a01b038416610a745760405163b80480b160e01b8152603060048201526024016104cf565b82600003610a985760405163b80480b160e01b8152603160048201526024016104cf565b6040516323b872dd60e01b8152336004820152306024820152604481018490526001600160a01b038516906323b872dd906064016020604051808303816000875af1158015610aeb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b0f9190611822565b50610b1b848484611517565b9050610b268161109e565b6001600160801b031660fd6000828254610b409190611885565b9091555050604080518481526020810183905233916001600160a01b038716916000917f3b7ce5782971bc1c2a722cba69f6f8bccbe8dd1a68d213ea39f1b681726092d4910160405180910390a49392505050565b6001600160a01b038216610bbf5760405163b80480b160e01b8152601060048201526024016104cf565b80600003610be35760405163b80480b160e01b8152601160048201526024016104cf565b3360009081526101056020526040902060018101548154610102546001600160801b03600160801b840481169316919081108015610c2a57506000826001600160801b0316115b15610c8d576000818152610106602052604090208054610c6490610604906001600160801b0386811691600160801b810482169116610feb565b610c6e908561185a565b6001860180546fffffffffffffffffffffffffffffffff191690559350505b50610c978461109e565b6001600160801b0316826001600160801b03161015610cd4576040516307f885ff60e21b81526001600160801b03831660048201526024016104cf565b610cdd8461109e565b610ce7908361189d565b6001840180546001600160801b03928316600160801b02921691909117905560fc5460405163a9059cbb60e01b81526001600160a01b038781166004830152602482018790529091169063a9059cbb906044016020604051808303816000875af1158015610d59573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d7d9190611822565b506040518481526001600160a01b0386169033907f5c88b328c5b2ad9ebdf6ff97006b8557bd45f26293da0252d9a34931c684007a9060200160405180910390a35050505050565b6001600160a01b03811660009081526101056020908152604091829020825160608101845281548082526001909201546001600160801b0380821694830194909452600160801b900490921692820183905261010254118015610e355750600081602001516001600160801b0316115b15610ea4578051600090815261010660209081526040918290208251808401909352546001600160801b03808216808552600160801b909204811684840181905292850151610e8d9361060493919092169190610feb565b610ea0906001600160801b031684611885565b9250505b50919050565b610eb261146b565b60fe5460fc5460405163095ea7b360e01b81526001600160a01b039182166004820152600019602482015291169063095ea7b3906044016020604051808303816000875af1158015610f08573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f2c9190611822565b50565b610f3761146b565b6001600160a01b038116610f9c5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016104cf565b610f2c816114c5565b60655460ff16156109255760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016104cf565b6000808060001985870985870292508281108382030391505080600003611024576000841161101957600080fd5b508290049050611097565b80841161103057600080fd5b6000848688096000868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010186841190950394909402919094039290920491909117919091029150505b9392505050565b806001600160801b03811681146110b457600080fd5b919050565b600054610100900460ff166110e05760405162461bcd60e51b81526004016104cf906118c5565b610925611620565b600054610100900460ff1661110f5760405162461bcd60e51b81526004016104cf906118c5565b610925611650565b600054610100900460ff1661113e5760405162461bcd60e51b81526004016104cf906118c5565b60fe80546001600160a01b03199081166001600160a01b0388811691909117909255610101805482168784161790556101008054821686841617905560fc8054821685841617905560fb805490911691831691821790556040519081527f0425bcd291db1d48816f2a98edc7ecaf6dd5c64b973d9e4b3b6b750763dc6c2e9060200160405180910390a15050505050565b61010454156109255760fc5461010454604051636e553f6560e01b815260048101919091523060248201526000916001600160a01b031690636e553f65906044016020604051808303816000875af115801561122f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112539190611910565b9050604051806040016040528061126f6101026001015461109e565b6001600160801b031681526020016112868361109e565b6001600160801b039081169091526101028054600090815261010660209081526040918290208551958201518516600160801b029590941694909417909255546101035461010454835191825293810193909352908201839052907fc69cec55f6364843f1bd00b1f28399f11345b53d1f2577e1048d34d216932c279060600160405180910390a26000610103819055610104819055610102805490919061132d90611929565b9091555050565b61133c611683565b6065805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b61010354156113fc5760ff54610103546000916113af916001600160a01b039091169083611517565b610104819055610102546101035460408051918252602082019390935290917f48c3ff184c57818bf226589be0a871b387827c42b767756992efc70db2cd0edb910160405180910390a250565b6040517fff57c67200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611436610fa5565b6065805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586113693390565b6033546001600160a01b031633146109255760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104cf565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6101005460405163095ea7b360e01b81526001600160a01b0391821660048201526024810184905260009185169063095ea7b3906044016020604051808303816000875af115801561156d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115919190611822565b506101015460405163364e231160e01b81526001600160a01b0386811660048301526024820186905260448201859052600060648301529091169063364e2311906084016020604051808303816000875af11580156115f4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116189190611910565b949350505050565b600054610100900460ff166116475760405162461bcd60e51b81526004016104cf906118c5565b610925336114c5565b600054610100900460ff166116775760405162461bcd60e51b81526004016104cf906118c5565b6065805460ff19169055565b60655460ff166109255760405162461bcd60e51b815260206004820152601460248201527f5061757361626c653a206e6f742070617573656400000000000000000000000060448201526064016104cf565b6001600160a01b0381168114610f2c57600080fd5b600080604083850312156116fd57600080fd5b82359150602083013561170f816116d5565b809150509250929050565b60006020828403121561172c57600080fd5b8135611097816116d5565b600080600080600060a0868803121561174f57600080fd5b853561175a816116d5565b9450602086013561176a816116d5565b9350604086013561177a816116d5565b9250606086013561178a816116d5565b9150608086013561179a816116d5565b809150509295509295909350565b6000806000606084860312156117bd57600080fd5b83356117c8816116d5565b95602085013595506040909401359392505050565b600080604083850312156117f057600080fd5b82356117fb816116d5565b946020939093013593505050565b60006020828403121561181b57600080fd5b5035919050565b60006020828403121561183457600080fd5b8151801515811461109757600080fd5b634e487b7160e01b600052601160045260246000fd5b60006001600160801b0380831681851680830382111561187c5761187c611844565b01949350505050565b6000821982111561189857611898611844565b500190565b60006001600160801b03838116908316818110156118bd576118bd611844565b039392505050565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b60006020828403121561192257600080fd5b5051919050565b60006001820161193b5761193b611844565b506001019056fea164736f6c634300080e000a';

type DnGmxBatchingManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DnGmxBatchingManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DnGmxBatchingManager__factory extends ContractFactory {
  constructor(...args: DnGmxBatchingManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DnGmxBatchingManager> {
    return super.deploy(overrides || {}) as Promise<DnGmxBatchingManager>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DnGmxBatchingManager {
    return super.attach(address) as DnGmxBatchingManager;
  }
  override connect(signer: Signer): DnGmxBatchingManager__factory {
    return super.connect(signer) as DnGmxBatchingManager__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DnGmxBatchingManagerInterface {
    return new utils.Interface(_abi) as DnGmxBatchingManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DnGmxBatchingManager {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as DnGmxBatchingManager;
  }
}
