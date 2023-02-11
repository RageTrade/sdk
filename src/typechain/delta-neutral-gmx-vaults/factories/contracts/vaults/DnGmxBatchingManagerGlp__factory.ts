/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type { PromiseOrValue } from '../../../common';
import type {
  DnGmxBatchingManagerGlp,
  DnGmxBatchingManagerGlpInterface,
} from '../../../contracts/vaults/DnGmxBatchingManagerGlp';

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
    inputs: [],
    name: 'DepositCapBreached',
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
    name: 'NoAssetBalance',
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
        name: 'totalAssets',
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
        indexed: false,
        internalType: 'uint256',
        name: 'newDepositCap',
        type: 'uint256',
      },
    ],
    name: 'DepositCapUpdated',
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
        indexed: true,
        internalType: 'uint256',
        name: 'round',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'partialGlpAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'partialShareAmount',
        type: 'uint256',
      },
    ],
    name: 'PartialBatchDeposit',
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
        name: 'minGlpDepositThreshold',
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
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'assetBalance',
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
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'depositCap',
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
        internalType: 'uint128',
        name: 'sGlpToDeposit',
        type: 'uint128',
      },
    ],
    name: 'executeBatch',
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
    name: 'minGlpDepositThreshold',
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
    inputs: [],
    name: 'roundAssetBalance',
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
            name: 'totalAssets',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'totalShares',
            type: 'uint128',
          },
        ],
        internalType: 'struct IDnGmxBatchingManagerGlp.RoundDeposit',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'roundGlpDeposited',
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
    name: 'roundSharesMinted',
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
        name: '_depositCap',
        type: 'uint256',
      },
    ],
    name: 'setDepositCap',
    outputs: [],
    stateMutability: 'nonpayable',
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
        name: '_minGlpDepositThreshold',
        type: 'uint256',
      },
    ],
    name: 'setThresholds',
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
            name: 'assetBalance',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'unclaimedShares',
            type: 'uint128',
          },
        ],
        internalType: 'struct IDnGmxBatchingManagerGlp.UserDeposit',
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
        name: 'roundSharesMinted',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'roundGlpDeposited',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'roundAssetBalance',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

const _bytecode =
  '0x6080806040523461001657611747908161001c8239f35b600080fdfe6080604081815260048036101561001557600080fd5b600092833560e01c9081630ba36dcd14611000575080631459457a14610d675780633f95513114610d1a57806344e805bb14610cfb5780634968856c146109705780635157ced5146108d15780635c975abb146108ad57806369026e881461083a5780636e553f651461060b578063715018a6146105ae578063748747e61461054157806386651203146104f45780638a19c8bc146104d55780638d1000171461049c5780638da5cb5b1461047457806395693f261461044e578063a8c775f71461042f578063aa88fdc314610407578063aad3ec96146103de578063ab504ad5146103b1578063aced166114610389578063ae4127861461036a578063bf9571f1146102d5578063c108a970146102b6578063cd88e55814610273578063dae115f61461020e578063dbd5edc7146101eb5763f2fde38b1461015757600080fd5b346101e75760203660031901126101e757610170611090565b916101796110ab565b6001600160a01b03831615610195578361019284611103565b80f35b906020608492519162461bcd60e51b8352820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152fd5b8280fd5b50503461020a578160031936011261020a576020906099549051908152f35b5080fd5b50346101e75760203660031901126101e7579181928160208451610231816111df565b828152015235815260a46020522081519061024b826111df565b546001600160801b0390602082821693848152019060801c8152835192835251166020820152f35b50503461020a57602036600319011261020a576001600160801b036001826020946001600160a01b036102a4611090565b16815260a38652200154169051908152f35b50503461020a578160031936011261020a5760209060a1549051908152f35b5090346101e757826003193601126101e7576102ef6110ab565b60206001600160a01b0392604484609b5416946098541691868551968794859363095ea7b360e01b855284015260001960248401525af19081156103615750610336575080f35b6103569060203d811161035a575b61034e81836111fb565b81019061121d565b5080f35b503d610344565b513d84823e3d90fd5b50503461020a578160031936011261020a5760209060a0549051908152f35b50503461020a578160031936011261020a576020906001600160a01b03609754169051908152f35b50503461020a57602036600319011261020a576020906103d76103d2611090565b6114b8565b9051908152f35b50503461020a57366003190112610404576101926103fa611090565b602435903361158c565b80fd5b50503461020a578160031936011261020a576020906001600160a01b03609854169051908152f35b50503461020a578160031936011261020a5760209060a2549051908152f35b50503461020a57602036600319011261020a576020906103d761046f611090565b611353565b50503461020a578160031936011261020a576020906001600160a01b03603354169051908152f35b50503461020a578160031936011261020a57608090609f549060a0549060a1549060a25492815194855260208501528301526060820152f35b50503461020a578160031936011261020a57602090609f549051908152f35b50346101e75760203660031901126101e7577f333b26cca69716ad4680ddb07663f5bfb4f06045671f336af9a83690a3ae00f99160209135906105356110ab565b8160995551908152a180f35b50503461020a57602036600319011261020a5760207f0425bcd291db1d48816f2a98edc7ecaf6dd5c64b973d9e4b3b6b750763dc6c2e916001600160a01b03610588611090565b6105906110ab565b1690816001600160601b0360a01b609754161760975551908152a180f35b83346104045780600319360112610404576105c76110ab565b806001600160a01b036033546001600160601b0360a01b8116603355167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a380f35b5091903461020a578060031936011261020a576001600160a01b03602435818116928535918490036108365761063f611235565b811561082057831561080a57609a5482106107f4576106608260a254611279565b609954106107e557849583609b96959654168251916323b872dd60e01b835233908301523060248301528360448301528160648160209889945af180156107db576107be575b5084865260a3845280862091600183018054906001600160801b0394858316928154609f548110806107b5575b61074e575b5050609f5490558483169083820361074a577f3b7ce5782971bc1c2a722cba69f6f8bccbe8dd1a68d213ea39f1b681726092d495610719836107319561129c565b166001600160801b031982541617905560a254611279565b60a25586609f5494609b5416958351928352820152a480f35b8980fd5b9361076d9192948c5260a48a52868c2054908882169160801c906112b7565b908682169182036107b1576107a8916107889160801c61129c565b82546001600160801b031660809190911b6001600160801b031916178255565b889138806106d8565b8a80fd5b508415156106d3565b6107d490853d871161035a5761034e81836111fb565b50386106a6565b82513d89823e3d90fd5b516321af65c160e11b81528590fd5b5163b80480b160e01b8152602381870152602490fd5b5163b80480b160e01b8152602281870152602490fd5b5163b80480b160e01b8152602181870152602490fd5b8480fd5b50346101e757826003193601126101e7576001600160a01b0360975416330361089f575060207f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2589161088a611235565b600160ff19606554161760655551338152a180f35b90516304e1fa9f60e01b8152fd5b50503461020a578160031936011261020a5760209060ff6065541690519015158152f35b50346101e757826003193601126101e7576001600160a01b0360975416330361089f576065549060ff821615610936575060ff1916606555513381527f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa90602090a180f35b606490602084519162461bcd60e51b8352820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b6044820152fd5b5091903461020a57602090816003193601126101e7576001600160801b038435818116808203610cf7576001600160a01b039182609754163303610ce75760655460ff811615610ca6575b508115610c8f5760a25491848316928303610c2757821115610c8857905b8382168015610c7857609a54908582169082820361074a5790808794939210610c70575b5082610a09858461133a565b161115610c68575b82610a1b9161133a565b1660a25582811691610a2f8360a154611279565b60a1556098541691858160448a8a89519788948593636e553f6560e01b85528401523060248401525af1928315610c5e578793610c2f575b50838316928303610c2b57908291610a82869460a054611279565b60a0557f996c81bb856ed13ee8b426c49c5470c8182f6ec9ef1e06745504d5c60bcc65c1609f549485928151908152858a820152a260a25492848416938403610c2757875260a486528487208054610b2c93928690610ae39083831661129c565b16906001600160801b031916179055609f54875260a48652610b0c85882091825460801c61129c565b81546001600160801b031660809190911b6001600160801b031916179055565b15610b35578380f35b6060907fc69cec55f6364843f1bd00b1f28399f11345b53d1f2577e1048d34d216932c27609f5492839283885260a48752858820541660a15460a0549087519283528883015286820152a28360a1558360a0556000198114610c1457600101609f556065549360ff851615610bdc57507f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa929360ff191660655551338152a1803880808380f35b82606492519162461bcd60e51b8352820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b6044820152fd5b634e487b7160e01b845260118552602484fd5b8780fd5b8680fd5b9092508581813d8311610c57575b610c4781836111fb565b81010312610c2b57519138610a67565b503d610c3d565b85513d89823e3d90fd5b915081610a11565b9350386109fd565b8551637ad2d1db60e11b81528990fd5b50806109d9565b845163b80480b160e01b8152808901869052602490fd5b600190610cb1611235565b60ff1916176065557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258868651338152a1386109bb565b84516304e1fa9f60e01b81528890fd5b8580fd5b50503461020a578160031936011261020a57602090609a549051908152f35b50346101e75760203660031901126101e7577fe926d7299feb4b516b5458f5eb2f94d6af102302a936cb45f0b8d287b502a21b916020913590610d5b6110ab565b81609a5551908152a180f35b5090346101e75760a03660031901126101e7578135906001600160a01b03918281168091036108365760243590838216809203610cf75760443593808516809503610c2b5760643591818316809303610c275760843591808316809303610ffc5788549760ff8960081c161595868097610fef575b8015610fd8575b15610f7e5760ff198a81166001178c559987610f6d575b50610e1460ff8c5460081c16610e0f8161114d565b61114d565b610e1d33611103565b610e498b549a60ff8c60081c1690610e348261114d565b610e3d8261114d565b6065541660655561114d565b6001600160601b0360a01b9384609b541617609b558884609c541617609c5583609e541617609e5586519788809263fbfa77cf60e01b825260209a8b935afa908115610f63579088949392918b91610f27575b50948392917f0425bcd291db1d48816f2a98edc7ecaf6dd5c64b973d9e4b3b6b750763dc6c2e961682609d541617609d5581609854161760985560975416176097558451908152a16001609f55610ef1578380f35b7f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989261ff00191684555160018152a13880808380f35b8581939692503d8311610f5c575b610f3f81836111fb565b8101031261074a575190838216820361074a578793909183610e9c565b503d610f35565b87513d8c823e3d90fd5b61ffff1916610101178b5538610dfa565b875162461bcd60e51b8152602081840152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608490fd5b50303b158015610de35750600160ff8b1614610de3565b50600160ff8b1610610ddc565b8880fd5b915050346101e75760203660031901126101e757826001600160a01b0383926060958461102b611090565b92611035816111ad565b828152826020820152015216815260a36020522090808051611056816111ad565b6001845494858352015490602081016001600160801b039384928385168352019260801c8352845195865251166020850152511690820152f35b600435906001600160a01b03821682036110a657565b600080fd5b6001600160a01b036033541633036110bf57565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b603354906001600160a01b0380911691826001600160601b0360a01b821617603355167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a3565b1561115457565b60405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608490fd5b6060810190811067ffffffffffffffff8211176111c957604052565b634e487b7160e01b600052604160045260246000fd5b6040810190811067ffffffffffffffff8211176111c957604052565b90601f8019910116810190811067ffffffffffffffff8211176111c957604052565b908160209103126110a6575180151581036110a65790565b60ff6065541661124157565b60405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606490fd5b9190820180921161128657565b634e487b7160e01b600052601160045260246000fd5b9190916001600160801b038080941691160191821161128657565b91600019828409928281029283808610950394808603951461132c57848311156110a65782910981806000031680920460028082600302188083028203028083028203028083028203028083028203028083028203028092029003029360018380600003040190848311900302920304170290565b5050809250156110a6570490565b6001600160801b03918216908216039190821161128657565b90611367611360336114b8565b333361158c565b6001600160a01b0380609854169060408051916370a0823160e01b83523360048401526020958684602481885afa9384156114ad5760009461147e575b508315611473576000916064889285519485938492635d043b2960e11b845289600485015216988960248401523360448401525af19081156114685760009161141b575b5090817f95534f7b5fe41df8a8d92f85b3ba5483590a5f2eff1ec5fb1e712e90846056c5929682519485528401523392a3565b908682813d8311611461575b61143181836111fb565b810103126104045750517f95534f7b5fe41df8a8d92f85b3ba5483590a5f2eff1ec5fb1e712e90846056c56113e8565b503d611427565b82513d6000823e3d90fd5b506000955050505050565b90938782813d83116114a6575b61149581836111fb565b8101031261040457505192386113a4565b503d61148b565b83513d6000823e3d90fd5b906001600160a01b0360009216825260a36020526040822091604051926114de846111ad565b6040600182549283875201546001600160801b039283821696602081019288845260801c93849101528296609f5482109081611582575b50611522575b5050505050565b8461155e93949597505260a4602052602084604088209260405193611546856111df565b54938285169485825260801c938491015251166112b7565b91821691820361157e57611573929350611279565b90388080808061151b565b8380fd5b9050151538611515565b909291926001600160a01b038091169182156117215784156117085781169060009482865260209160a383526040908188206001810190898254916001600160801b0392838116878260801c935494609f548610806116ff575b6116b6575b505050509050818616918683036116b257811682811061169b57508692610b0c8c95936116179361133a565b60985416604484518094819363a9059cbb60e01b83528b60048401528860248401525af18015611691577f5c88b328c5b2ad9ebdf6ff97006b8557bd45f26293da0252d9a34931c684007a9596979850611674575b5051908152a3565b61168a90843d861161035a5761034e81836111fb565b503861166c565b82513d8a823e3d90fd5b6024908651906307f885ff60e21b82526004820152fd5b8b80fd5b6116d19395815260a48c522054908582169160801c906112b7565b8381169081036116fb576116e49161129c565b906001600160801b0319168355803880878e6115eb565b8c80fd5b508215156115e6565b60405163b80480b160e01b815260116004820152602490fd5b60405163b80480b160e01b815260106004820152602490fdfea164736f6c6343000812000a';

type DnGmxBatchingManagerGlpConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DnGmxBatchingManagerGlpConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DnGmxBatchingManagerGlp__factory extends ContractFactory {
  constructor(...args: DnGmxBatchingManagerGlpConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DnGmxBatchingManagerGlp> {
    return super.deploy(overrides || {}) as Promise<DnGmxBatchingManagerGlp>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DnGmxBatchingManagerGlp {
    return super.attach(address) as DnGmxBatchingManagerGlp;
  }
  override connect(signer: Signer): DnGmxBatchingManagerGlp__factory {
    return super.connect(signer) as DnGmxBatchingManagerGlp__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DnGmxBatchingManagerGlpInterface {
    return new utils.Interface(_abi) as DnGmxBatchingManagerGlpInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DnGmxBatchingManagerGlp {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as DnGmxBatchingManagerGlp;
  }
}
