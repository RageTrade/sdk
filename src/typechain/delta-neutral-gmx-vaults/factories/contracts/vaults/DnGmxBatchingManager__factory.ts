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
    inputs: [],
    name: 'NoUsdcBalance',
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
        internalType: 'address',
        name: 'claimer',
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
        name: 'shares',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'assetsReceived',
        type: 'uint256',
      },
    ],
    name: 'ClaimedAndRedeemed',
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
        internalType: 'uint256',
        name: 'newSlippageThresholdGmx',
        type: 'uint256',
      },
    ],
    name: 'ThresholdsUpdated',
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
    inputs: [
      {
        internalType: 'address',
        name: 'receiver',
        type: 'address',
      },
    ],
    name: 'claimAndRedeem',
    outputs: [
      {
        internalType: 'uint256',
        name: 'glpReceived',
        type: 'uint256',
      },
    ],
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
        internalType: 'contract IERC20',
        name: '_usdc',
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
    name: 'roundGlpStaked',
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
        internalType: 'uint256',
        name: '_slippageThresholdGmxBps',
        type: 'uint256',
      },
    ],
    name: 'setThresholds',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'slippageThresholdGmxBps',
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
        name: 'roundGlpStaked',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'roundUsdcBalance',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

const _bytecode =
  '0x608060405234801561001057600080fd5b50611d8e806100206000396000f3fe608060405234801561001057600080fd5b50600436106101c45760003560e01c80638d100017116100f9578063ab504ad511610097578063ca0ede5011610071578063ca0ede5014610424578063cc2a9a5b1461042d578063dae115f614610440578063f2fde38b146104c357600080fd5b8063ab504ad5146103f6578063aced166114610409578063bf9571f11461041c57600080fd5b806395815788116100d357806395815788146103b457806399c6d2de146103bd578063aa88fdc3146103d0578063aad3ec96146103e357600080fd5b80638d1000171461034c5780638da5cb5b1461037c57806395693f26146103a157600080fd5b8063584150751161016657806369026e881161014057806369026e8814610320578063715018a614610328578063748747e6146103305780638a19c8bc1461034357600080fd5b806358415075146102f95780635c7f3c71146103025780635c975abb1461030a57600080fd5b806310684667116101a2578063106846671461029e578063180282b3146102d45780633f955131146102de5780635157ced5146102f157600080fd5b80630124b05a146101c957806301df331d146101e55780630ba36dcd146101f8575b600080fd5b6101d260fd5481565b6040519081526020015b60405180910390f35b6101d26101f3366004611ac3565b6104d6565b61026b610206366004611af3565b6040805160608082018352600080835260208084018290529284018190526001600160a01b039490941684526101078252928290208251938401835280548452600101546001600160801b0380821692850192909252600160801b9004169082015290565b60408051825181526020808401516001600160801b039081169183019190915292820151909216908201526060016101dc565b6101d26102ac366004611af3565b6001600160a01b0316600090815261010760205260409020600101546001600160801b031690565b6102dc61074f565b005b6102dc6102ec366004611b10565b61082c565b6102dc610870565b6101d260fe5481565b6102dc6108a3565b60655460ff1660405190151581526020016101dc565b6102dc61094e565b6102dc610979565b6102dc61033e366004611af3565b61098b565b610104546101d2565b61010454610105546101065461036192919083565b604080519384526020840192909252908201526060016101dc565b6033546001600160a01b03165b6040516001600160a01b0390911681526020016101dc565b6101d26103af366004611af3565b6109e1565b610105546101d2565b6101d26103cb366004611b29565b610b3f565b60fc54610389906001600160a01b031681565b6102dc6103f1366004611b5e565b610cbc565b6101d2610404366004611af3565b610ccb565b60fb54610389906001600160a01b031681565b6102dc610db0565b610106546101d2565b6102dc61043b366004611b8a565b610e35565b61049c61044e366004611b10565b604080518082019091526000808252602082015250600090815261010860209081526040918290208251808401909352546001600160801b038082168452600160801b909104169082015290565b6040805182516001600160801b0390811682526020938401511692810192909252016101dc565b6102dc6104d1366004611af3565b610f62565b60006104e0610fd8565b826105065760405163b80480b160e01b8152602160048201526024015b60405180910390fd5b6001600160a01b0382166105305760405163b80480b160e01b8152602260048201526024016104fd565b610100546040516323b872dd60e01b8152336004820152306024820152604481018590526001600160a01b03909116906323b872dd906064016020604051808303816000875af1158015610588573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105ac9190611c0c565b506001600160a01b03821660009081526101076020526040902060018101548154610104546001600160801b0390921691811080156105f457506000826001600160801b0316115b15610686576000818152610108602052604090208054600185015461063891610633916001600160801b0390811691600160801b81048216911661101e565b6110d2565b60018501805460109061065c908490600160801b90046001600160801b0316611c44565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060009250505b610104548355610695866110d2565b61069f9083611c44565b6001840180546fffffffffffffffffffffffffffffffff19166001600160801b03929092169190911790556106d3866110d2565b6001600160801b031661010460020160008282546106f19190611c6f565b9091555050610100546101045460408051898152602081018890526001600160a01b03898116941692917f3b7ce5782971bc1c2a722cba69f6f8bccbe8dd1a68d213ea39f1b681726092d4910160405180910390a450505092915050565b60655460ff1615610762576107626110ed565b60fe54156108225760fe8054600090915560ff5460fc5460405163a9059cbb60e01b81526001600160a01b0391821660048201526024810184905291169063a9059cbb906044016020604051808303816000875af11580156107c8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107ec9190611c0c565b506040518181527fabf360404ae6ccd945919fc14edb22686b6941aeee15d786c7047e4a0107eba59060200160405180910390a1505b61082a61113f565b565b6108346112a5565b60fd8190556040518181527fe926d7299feb4b516b5458f5eb2f94d6af102302a936cb45f0b8d287b502a21b906020015b60405180910390a150565b60fb546001600160a01b0316331461089b576040516304e1fa9f60e01b815260040160405180910390fd5b61082a6110ed565b6108ab610fd8565b60fb546001600160a01b031633146108d6576040516304e1fa9f60e01b815260040160405180910390fd5b60fc60009054906101000a90046001600160a01b03166001600160a01b031663138cc18f6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561092657600080fd5b505af115801561093a573d6000803e3d6000fd5b505050506109466112ff565b61082a61146d565b60fb546001600160a01b03163314610946576040516304e1fa9f60e01b815260040160405180910390fd5b6109816112a5565b61082a60006114aa565b6109936112a5565b60fb80546001600160a01b0319166001600160a01b0383169081179091556040519081527f0425bcd291db1d48816f2a98edc7ecaf6dd5c64b973d9e4b3b6b750763dc6c2e90602001610865565b60006109f633336109f133610ccb565b6114fc565b60fc546040516370a0823160e01b81523360048201526000916001600160a01b0316906370a0823190602401602060405180830381865afa158015610a3f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a639190611c87565b905080610a735750600092915050565b60fc54604051635d043b2960e11b8152600481018390526001600160a01b0385811660248301523360448301529091169063ba087652906064016020604051808303816000875af1158015610acc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610af09190611c87565b60408051838152602081018390529193506001600160a01b0385169133917f95534f7b5fe41df8a8d92f85b3ba5483590a5f2eff1ec5fb1e712e90846056c5910160405180910390a350919050565b6000610b49610fd8565b60fc546001600160a01b03163314610b745760405163edd7338f60e01b815260040160405180910390fd5b6001600160a01b038416610b9e5760405163b80480b160e01b8152603060048201526024016104fd565b82610bbf5760405163b80480b160e01b8152603160048201526024016104fd565b6040516323b872dd60e01b8152336004820152306024820152604481018490526001600160a01b038516906323b872dd906064016020604051808303816000875af1158015610c12573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c369190611c0c565b50610c42848484611741565b9050610c4d816110d2565b6001600160801b031660fe6000828254610c679190611c6f565b9091555050604080518481526020810183905233916001600160a01b038716916000917f3b7ce5782971bc1c2a722cba69f6f8bccbe8dd1a68d213ea39f1b681726092d4910160405180910390a49392505050565b610cc73383836114fc565b5050565b6001600160a01b03811660009081526101076020908152604091829020825160608101845281548082526001909201546001600160801b0380821694830194909452600160801b900490921692820183905261010454118015610d3b5750600081602001516001600160801b0316115b15610daa578051600090815261010860209081526040918290208251808401909352546001600160801b03808216808552600160801b909204811684840181905292850151610d93936106339391909216919061101e565b610da6906001600160801b031684611c6f565b9250505b50919050565b610db86112a5565b60ff5460fc5460405163095ea7b360e01b81526001600160a01b039182166004820152600019602482015291169063095ea7b3906044016020604051808303816000875af1158015610e0e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e329190611c0c565b50565b600054610100900460ff1615808015610e555750600054600160ff909116105b80610e6f5750303b158015610e6f575060005460ff166001145b610ed25760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016104fd565b6000805460ff191660011790558015610ef5576000805461ff0019166101001790555b610efd61184a565b610f05611879565b610f138787878787876118a8565b8015610f59576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b50505050505050565b610f6a6112a5565b6001600160a01b038116610fcf5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016104fd565b610e32816114aa565b60655460ff161561082a5760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016104fd565b600080806000198587098587029250828110838203039150508060001415611058576000841161104d57600080fd5b5082900490506110cb565b80841161106457600080fd5b6000848688096000868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010186841190950394909402919094039290920491909117919091029150505b9392505050565b806001600160801b03811681146110e857600080fd5b919050565b6110f56119f9565b6065805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b6101055461114957565b60fc5461010554604051636e553f6560e01b815260048101919091523060248201526000916001600160a01b031690636e553f65906044016020604051808303816000875af11580156111a0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111c49190611c87565b905060405180604001604052806111e0610104600201546110d2565b6001600160801b031681526020016111f7836110d2565b6001600160801b039081169091526101048054600090815261010860209081526040918290208551958201518516600160801b029590941694909417909255546101065461010554835191825293810193909352908201839052907fc69cec55f6364843f1bd00b1f28399f11345b53d1f2577e1048d34d216932c279060600160405180910390a26000610106819055610105819055610104805490919061129e90611ca0565b9091555050565b6033546001600160a01b0316331461082a5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104fd565b610106548061133a576040517fff57c67200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61010254610100546040516340d3096b60e11b81526001600160a01b03918216600482015260009291909116906381a612d690602401602060405180830381865afa15801561138d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113b19190611c87565b9050600061140260fd546127106113c89190611cbb565b6113d78464e8d4a51000611cd2565b6113e19190611cd2565b6113fa6127106c0c9f2c9cd04674edea40000000611cd2565b85919061101e565b6101005490915061141d906001600160a01b03168483611741565b6101058190556101045460405190917f48c3ff184c57818bf226589be0a871b387827c42b767756992efc70db2cd0edb9161146091878252602082015260400190565b60405180910390a2505050565b611475610fd8565b6065805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586111223390565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b0382166115265760405163b80480b160e01b8152601060048201526024016104fd565b806115475760405163b80480b160e01b8152601160048201526024016104fd565b6001600160a01b03831660009081526101076020526040902060018101548154610104546001600160801b0380841693600160801b90041691908110801561159857506000836001600160801b0316115b156115fb5760008181526101086020526040902080546115d290610633906001600160801b0387811691600160801b81048216911661101e565b6115dc9084611c44565b6001860180546fffffffffffffffffffffffffffffffff191690559250505b50611605846110d2565b6001600160801b0316816001600160801b03161015611642576040516307f885ff60e21b81526001600160801b03821660048201526024016104fd565b61164b846110d2565b6116559082611cf1565b6001840180546001600160801b03928316600160801b02921691909117905560fc5460405163a9059cbb60e01b81526001600160a01b038781166004830152602482018790529091169063a9059cbb906044016020604051808303816000875af11580156116c7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116eb9190611c0c565b50846001600160a01b0316866001600160a01b03167f5c88b328c5b2ad9ebdf6ff97006b8557bd45f26293da0252d9a34931c684007a8660405161173191815260200190565b60405180910390a3505050505050565b6101015460405163095ea7b360e01b81526001600160a01b0391821660048201526024810184905260009185169063095ea7b3906044016020604051808303816000875af1158015611797573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117bb9190611c0c565b506101035460405163364e231160e01b81526001600160a01b0386811660048301526024820186905260448201859052600060648301529091169063364e2311906084016020604051808303816000875af115801561181e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118429190611c87565b949350505050565b600054610100900460ff166118715760405162461bcd60e51b81526004016104fd90611d19565b61082a611a4b565b600054610100900460ff166118a05760405162461bcd60e51b81526004016104fd90611d19565b61082a611a7b565b600054610100900460ff166118cf5760405162461bcd60e51b81526004016104fd90611d19565b60ff80546001600160a01b038089166001600160a01b0319928316179092556101008054888416908316179055610101805486841690831681179091556101038054938816939092169290921790556040805163fbfa77cf60e01b8152905163fbfa77cf916004808201926020929091908290030181865afa158015611959573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061197d9190611d64565b61010280546001600160a01b03199081166001600160a01b039384161790915560fc8054821685841617905560fb805490911691831691821790556040519081527f0425bcd291db1d48816f2a98edc7ecaf6dd5c64b973d9e4b3b6b750763dc6c2e9060200160405180910390a1505060016101045550505050565b60655460ff1661082a5760405162461bcd60e51b815260206004820152601460248201527f5061757361626c653a206e6f742070617573656400000000000000000000000060448201526064016104fd565b600054610100900460ff16611a725760405162461bcd60e51b81526004016104fd90611d19565b61082a336114aa565b600054610100900460ff16611aa25760405162461bcd60e51b81526004016104fd90611d19565b6065805460ff19169055565b6001600160a01b0381168114610e3257600080fd5b60008060408385031215611ad657600080fd5b823591506020830135611ae881611aae565b809150509250929050565b600060208284031215611b0557600080fd5b81356110cb81611aae565b600060208284031215611b2257600080fd5b5035919050565b600080600060608486031215611b3e57600080fd5b8335611b4981611aae565b95602085013595506040909401359392505050565b60008060408385031215611b7157600080fd5b8235611b7c81611aae565b946020939093013593505050565b60008060008060008060c08789031215611ba357600080fd5b8635611bae81611aae565b95506020870135611bbe81611aae565b94506040870135611bce81611aae565b93506060870135611bde81611aae565b92506080870135611bee81611aae565b915060a0870135611bfe81611aae565b809150509295509295509295565b600060208284031215611c1e57600080fd5b815180151581146110cb57600080fd5b634e487b7160e01b600052601160045260246000fd5b60006001600160801b03808316818516808303821115611c6657611c66611c2e565b01949350505050565b60008219821115611c8257611c82611c2e565b500190565b600060208284031215611c9957600080fd5b5051919050565b6000600019821415611cb457611cb4611c2e565b5060010190565b600082821015611ccd57611ccd611c2e565b500390565b6000816000190483118215151615611cec57611cec611c2e565b500290565b60006001600160801b0383811690831681811015611d1157611d11611c2e565b039392505050565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b600060208284031215611d7657600080fd5b81516110cb81611aae56fea164736f6c634300080a000a';

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
