/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type {
  CollateralDepositSetTest,
  CollateralDepositSetTestInterface,
} from '../../../contracts/test/CollateralDepositSetTest';

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_settlementToken',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'InsufficientCollateralBalance',
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
    inputs: [],
    name: 'cleanDeposits',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'realTokenAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'decreaseBalance',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'fixFee',
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
    name: 'getAllDepositAccountMarketValue',
    outputs: [
      {
        internalType: 'int256',
        name: 'depositValue',
        type: 'int256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'realTokenAddress',
        type: 'address',
      },
    ],
    name: 'getBalance',
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
        name: 'realTokenAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'increaseBalance',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IERC20',
        name: 'cToken',
        type: 'address',
      },
      {
        internalType: 'contract IOracle',
        name: 'oracle',
        type: 'address',
      },
      {
        internalType: 'uint32',
        name: 'twapDuration',
        type: 'uint32',
      },
    ],
    name: 'init',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'vToken',
        type: 'address',
      },
    ],
    name: 'initVToken',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'protocol',
    outputs: [
      {
        internalType: 'contract IERC20',
        name: 'settlementToken',
        type: 'address',
      },
      {
        internalType: 'contract IVQuote',
        name: 'vQuote',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'uint16',
            name: 'rangeLiquidationFeeFraction',
            type: 'uint16',
          },
          {
            internalType: 'uint16',
            name: 'tokenLiquidationFeeFraction',
            type: 'uint16',
          },
          {
            internalType: 'uint16',
            name: 'closeFactorMMThresholdBps',
            type: 'uint16',
          },
          {
            internalType: 'uint16',
            name: 'partialLiquidationCloseFactorBps',
            type: 'uint16',
          },
          {
            internalType: 'uint16',
            name: 'insuranceFundFeeShareBps',
            type: 'uint16',
          },
          {
            internalType: 'uint16',
            name: 'liquidationSlippageSqrtToleranceBps',
            type: 'uint16',
          },
          {
            internalType: 'uint64',
            name: 'maxRangeLiquidationFees',
            type: 'uint64',
          },
          {
            internalType: 'uint64',
            name: 'minNotionalLiquidatable',
            type: 'uint64',
          },
        ],
        internalType: 'struct IClearingHouseStructures.LiquidationParams',
        name: 'liquidationParams',
        type: 'tuple',
      },
      {
        internalType: 'uint256',
        name: 'minRequiredMargin',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'removeLimitOrderFee',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'minimumOrderNotional',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'contract IVToken',
            name: 'vToken',
            type: 'address',
          },
          {
            internalType: 'contract IUniswapV3Pool',
            name: 'vPool',
            type: 'address',
          },
          {
            internalType: 'contract IVPoolWrapper',
            name: 'vPoolWrapper',
            type: 'address',
          },
          {
            components: [
              {
                internalType: 'uint16',
                name: 'initialMarginRatioBps',
                type: 'uint16',
              },
              {
                internalType: 'uint16',
                name: 'maintainanceMarginRatioBps',
                type: 'uint16',
              },
              {
                internalType: 'uint16',
                name: 'maxVirtualPriceDeviationRatioBps',
                type: 'uint16',
              },
              {
                internalType: 'uint32',
                name: 'twapDuration',
                type: 'uint32',
              },
              {
                internalType: 'bool',
                name: 'isAllowedForTrade',
                type: 'bool',
              },
              {
                internalType: 'bool',
                name: 'isCrossMargined',
                type: 'bool',
              },
              {
                internalType: 'contract IOracle',
                name: 'oracle',
                type: 'address',
              },
            ],
            internalType: 'struct IClearingHouseStructures.PoolSettings',
            name: 'settings',
            type: 'tuple',
          },
        ],
        internalType: 'struct IClearingHouseStructures.Pool',
        name: 'poolInfo',
        type: 'tuple',
      },
    ],
    name: 'registerPool',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'uint16',
            name: 'rangeLiquidationFeeFraction',
            type: 'uint16',
          },
          {
            internalType: 'uint16',
            name: 'tokenLiquidationFeeFraction',
            type: 'uint16',
          },
          {
            internalType: 'uint16',
            name: 'closeFactorMMThresholdBps',
            type: 'uint16',
          },
          {
            internalType: 'uint16',
            name: 'partialLiquidationCloseFactorBps',
            type: 'uint16',
          },
          {
            internalType: 'uint16',
            name: 'insuranceFundFeeShareBps',
            type: 'uint16',
          },
          {
            internalType: 'uint16',
            name: 'liquidationSlippageSqrtToleranceBps',
            type: 'uint16',
          },
          {
            internalType: 'uint64',
            name: 'maxRangeLiquidationFees',
            type: 'uint64',
          },
          {
            internalType: 'uint64',
            name: 'minNotionalLiquidatable',
            type: 'uint64',
          },
        ],
        internalType: 'struct IClearingHouseStructures.LiquidationParams',
        name: '_liquidationParams',
        type: 'tuple',
      },
      {
        internalType: 'uint256',
        name: '_minRequiredMargin',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_removeLimitOrderFee',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_minimumOrderNotional',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_fixFee',
        type: 'uint256',
      },
    ],
    name: 'setAccountStorage',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IVQuote',
        name: '_vQuote',
        type: 'address',
      },
    ],
    name: 'setVQuoteAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'wrapper',
    outputs: [
      {
        internalType: 'contract VPoolWrapperMock',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

const _bytecode =
  '0x608060405234801561001057600080fd5b50604051611dc9380380611dc983398101604081905261002f91610099565b60405161003b9061008c565b604051809103906000f080158015610057573d6000803e3d6000fd5b5060d480546001600160a01b039283166001600160a01b031991821617909155600280549390921692169190911790556100c9565b610a888061134183390190565b6000602082840312156100ab57600080fd5b81516001600160a01b03811681146100c257600080fd5b9392505050565b611269806100d86000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80638ce744261161008c578063c28fd78711610066578063c28fd78714610297578063ed16575a146102aa578063f8b2cb4f146102b2578063ff056949146102d857600080fd5b80638ce744261461019d578063a96822a314610264578063ac210cc71461026c57600080fd5b80631ca45818146100d45780633ffe794c146100f05780635b86f59914610105578063713fdf471461011857806382d9dbaa1461012b5780638b1a8fb61461015b575b600080fd5b6100dd606d5481565b6040519081526020015b60405180910390f35b6101036100fe366004610b7f565b6102eb565b005b610103610113366004610bad565b610330565b610103610126366004610beb565b610346565b610103610139366004610c36565b600380546001600160a01b0319166001600160a01b0392909216919091179055565b610103610169366004610c36565b63ffffffff8116600090815260208190526040902080546001600160a01b0319166001600160a01b03909216919091179055565b600254600354604080516101008101825260045461ffff8082168352620100008204811660208401526401000000008204811693830193909352660100000000000081048316606083015268010000000000000000810483166080830152600160501b810490921660a082015267ffffffffffffffff600160601b8304811660c0830152600160a01b90920490911660e0820152600554600654600754610252956001600160a01b0390811695169392919086565b6040516100e796959493929190610c53565b6100dd610422565b60d45461027f906001600160a01b031681565b6040516001600160a01b0390911681526020016100e7565b6101036102a5366004610d1a565b610434565b610103610458565b6100dd6102c0366004610c36565b63ffffffff166000908152606f602052604090205490565b6101036102e6366004610bad565b6104e5565b60006103066102fd6020840184610c36565b63ffffffff1690565b63ffffffff81166000908152602081905260409020909150829061032a8282610dbd565b50505050565b610342606e63ffffffff8416836104f7565b5050565b6040805180820182526001600160a01b0380861682528251606081018452858216815263ffffffff8516602082810191909152600194820185905283015281519192839290916000916103999116610532565b63ffffffff90811682526020808301939093526040918201600020845181546001600160a01b039182166001600160a01b0319909116178255948401518051600190920180549582015191909401511515600160c01b0260ff60c01b1991909316600160a01b026001600160c01b03199095169190951617929092179290921617905550505050565b600061042f606e82610542565b905090565b8460046104418282610f55565b5050600593909355600691909155600755606d5550565b60005b60088110156104e2576000606e826008811061047957610479611082565b600891828204019190066004029054906101000a900463ffffffff1690508063ffffffff166000036104a9575050565b63ffffffff8082166000908152606f60205260409020546104cf91606e91849161068716565b50806104da816110ae565b91505061045b565b50565b610342606e63ffffffff841683610687565b6105018383610718565b63ffffffff82166000908152600184016020526040812080548392906105289084906110c7565b9091555050505050565b600063ffffffff82165b92915050565b60008060005b60088160ff16101561067f5760008560ff83166008811061056b5761056b611082565b600891828204019190066004029054906101000a900463ffffffff1690508063ffffffff1660000361059d575061067f565b63ffffffff8181166000908152600187810160205260409182902090810154915163dd86c10160e01b8152600160a01b830490931660048401529161065e916001600160a01b03169063dd86c10190602401602060405180830381865afa15801561060c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061063091906110df565b63ffffffff8416600090815260018a016020526040902054600160801b906106579061085c565b9190610872565b61066890856110f8565b93505050808061067790611139565b915050610548565b509392505050565b63ffffffff821660009081526001840160205260409020548111156106bf5760405163b1eae4f160e01b815260040160405180910390fd5b63ffffffff82166000908152600184016020526040812080548392906106e6908490611158565b909155505063ffffffff8216600090815260018401602052604081205490036107135761071383836108be565b505050565b8063ffffffff1660000361074757604051631d8b110f60e11b8152600060048201526024015b60405180910390fd5b600860005b60088110156107f0578263ffffffff1684826008811061076e5761076e611082565b600891828204019190066004029054906101000a900463ffffffff1663ffffffff160361079b5750505050565b60008482600881106107af576107af611082565b600891828204019190066004029054906101000a900463ffffffff1663ffffffff16036107de578091506107f0565b806107e8816110ae565b91505061074c565b50600719810161081b5760405163274ca29b60e11b815263ffffffff8316600482015260240161073e565b8183826008811061082e5761082e611082565b600891828204019190066004026101000a81548163ffffffff021916908363ffffffff160217905550505050565b6000600160ff1b821061086e57600080fd5b5090565b60006108a061089b600086126108885785610894565b6108948660001961116f565b8585610acd565b61085c565b905060008412156108b7576108b4816111f4565b90505b9392505050565b8063ffffffff166000036108e857604051631d8b110f60e11b81526000600482015260240161073e565b600860005b60088110156109a8578263ffffffff1684826008811061090f5761090f611082565b600891828204019190066004029054906101000a900463ffffffff1663ffffffff160361093a578091505b83816008811061094c5761094c611082565b600891828204019190066004029054906101000a900463ffffffff1663ffffffff16600003610996576000811161098457600061098f565b61098f600182611158565b90506109a8565b806109a0816110ae565b9150506108ed565b600881146109b657806109c6565b6109c260016008611210565b60ff165b90506008821461032a57818103610a195760008483600881106109eb576109eb611082565b600891828204019190066004026101000a81548163ffffffff021916908363ffffffff16021790555061032a565b838160088110610a2b57610a2b611082565b600891828204019190066004029054906101000a900463ffffffff166000858460088110610a5b57610a5b611082565b60089182820401919006600402878560088110610a7a57610a7a611082565b600891828204019190066004028491906101000a81548163ffffffff021916908363ffffffff1602179055508391906101000a81548163ffffffff021916908363ffffffff160217905550505050505050565b6000808060001985870985870292508281108382030391505080600003610b065760008411610afb57600080fd5b5082900490506108b7565b808411610b1257600080fd5b6000848688096000868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010186841190950394909402919094039290920491909117919091029150509392505050565b60006101408284031215610b9257600080fd5b50919050565b6001600160a01b03811681146104e257600080fd5b60008060408385031215610bc057600080fd5b8235610bcb81610b98565b946020939093013593505050565b63ffffffff811681146104e257600080fd5b600080600060608486031215610c0057600080fd5b8335610c0b81610b98565b92506020840135610c1b81610b98565b91506040840135610c2b81610bd9565b809150509250925092565b600060208284031215610c4857600080fd5b81356108b781610b98565b60006101a08201905060018060a01b03808916835280881660208401525061ffff808751166040840152806020880151166060840152806040880151166080840152506060860151610cab60a084018261ffff169052565b50608086015161ffff811660c08401525060a086015161ffff811660e08401525060c086015167ffffffffffffffff81166101008401525060e086015167ffffffffffffffff811661012084015250846101408301528361016083015282610180830152979650505050505050565b6000806000806000858703610180811215610d3457600080fd5b61010080821215610d4457600080fd5b969896890135975050506101208701359461014088013594506101608801359350915050565b80546001600160a01b0319166001600160a01b0392909216919091179055565b6000813561ffff8116811461053c57600080fd5b60008135801515811461053c57600080fd5b6000813561053c81610b98565b8135610dc881610b98565b610dd28183610d6a565b506020820135610de181610b98565b610dee8160018401610d6a565b506040820135610dfd81610b98565b610e0a8160028401610d6a565b5060038101610e31610e1e60608501610d8a565b825461ffff191661ffff91909116178255565b610e5a610e4060808501610d8a565b825463ffff0000191660109190911b63ffff000016178255565b610e87610e6960a08501610d8a565b825465ffff00000000191660209190911b65ffff0000000016178255565b60c0830135610e9581610bd9565b815460ff60501b610ea860e08701610d9e565b151560501b1669ffffffff0000000000008360301b166affffffffff000000000000198316171783555050610f01610ee36101008501610d9e565b82805460ff60581b191691151560581b60ff60581b16919091179055565b610713610f116101208501610db0565b82546bffffffffffffffffffffffff1660609190911b6bffffffffffffffffffffffff1916178255565b6000813567ffffffffffffffff8116811461053c57600080fd5b610f61610e1e83610d8a565b610f70610e4060208401610d8a565b610f7f610e6960408401610d8a565b610f8b60608301610d8a565b815467ffff0000000000008260301b1691508167ffff00000000000019821617835569ffff0000000000000000610fc460808601610d8a565b60401b16808369ffffffff0000000000001984161717845561ffff60501b610fee60a08701610d8a565b60501b16836bffffffffffff00000000000019841617821717845550505061104761101b60c08401610f3b565b82805467ffffffffffffffff60601b191660609290921b67ffffffffffffffff60601b16919091179055565b61034261105660e08401610f3b565b82805467ffffffffffffffff60a01b191660a09290921b67ffffffffffffffff60a01b16919091179055565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000600182016110c0576110c0611098565b5060010190565b600082198211156110da576110da611098565b500190565b6000602082840312156110f157600080fd5b5051919050565b600080821280156001600160ff1b038490038513161561111a5761111a611098565b600160ff1b839003841281161561113357611133611098565b50500190565b600060ff821660ff810361114f5761114f611098565b60010192915050565b60008282101561116a5761116a611098565b500390565b60006001600160ff1b038184138284138082168684048611161561119557611195611098565b600160ff1b60008712828116878305891216156111b4576111b4611098565b600087129250878205871284841616156111d0576111d0611098565b878505871281841616156111e6576111e6611098565b505050929093029392505050565b6000600160ff1b820161120957611209611098565b5060000390565b600060ff821660ff84168082101561122a5761122a611098565b9003939250505056fea264697066735822122098111449f96a14ba411956a7c13ca6f7dc65fbc369585f5dbbe7fc76c74c1a9064736f6c634300080d0033608060405234801561001057600080fd5b50610a68806100206000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c80636719578c116100ad578063a3a1e7e911610071578063a3a1e7e9146102de578063a3c35e2c14610204578063d74dcaca14610324578063ea6e4e521461035d578063fca6fbf21461038d57600080fd5b80636719578c146102b35780637779815c146102de57806386c8e9a7146102e857806397c71faf146102fe578063a34123a71461031157600080fd5b80632a99a792116100f45780632a99a792146102045780634c2ebc5814610224578063512403361461028d57806356d15a881461029e5780635e622abc146102ac57600080fd5b806302dc9951146101265780630d8f6f461461014e578063195cd92c1461016f5780631dce5fcf146101e2575b600080fd5b6001546101359062ffffff1681565b60405162ffffff90911681526020015b60405180910390f35b61016161015c36600461068b565b6103a6565b604051908152602001610145565b61018261017d3660046106ce565b6103bb565b6040516101459190815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301516001600160a01b039081169183019190915260c092830151169181019190915260e00190565b6101f56101f0366004610720565b610469565b60405161014593929190610768565b6102176102123660046107ac565b61053a565b60405161014591906107df565b61028b61023236600461080a565b60408051608081018252948552602080860194855285820193845260608601928352600297880b600090815280825282812097890b81529690529094209251835590516001830155519281019290925551600390910155565b005b61028b61029b36600461085f565b50565b61028b61029b36600461087a565b6000610161565b6003546102c6906001600160a01b031681565b6040516001600160a01b039091168152602001610145565b600560821b610161565b600154610135906301000000900462ffffff1681565b61016161030c36600461068b565b6105b7565b6101f561031f366004610720565b6105c5565b61028b610332366004610892565b600293840b6000908152602085815260408083209590960b8252939093529290912090815560010155565b61028b61036b3660046108d4565b600380546001600160a01b0319166001600160a01b0392909216919091179055565b600154610135906601000000000000900462ffffff1681565b60006103b582610f9f19610907565b92915050565b61040d6040518060e00160405280600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b031681525090565b831515600084130361043f57602081018390526104298361098c565b61043590610fa0610907565b6040820152610462565b610fa061044b8461098c565b61045591906109a8565b6020820152604081018390525b9392505050565b6000806104976040518060800160405280600081526020016000815260200160008152602001600081525090565b836001600160801b0316600460008282546104b291906109e4565b9091555050600286810b6000908152602082815260408083209389900b835292905220600101546104ed906001600160801b038616906109fc565b600287810b600090815260208281526040808320938a900b83529290522054909350610523906001600160801b038616906109fc565b915061052f868661053a565b905093509350939050565b6105656040518060800160405280600081526020016000815260200160008152602001600081525090565b50600291820b60009081526020818152604080832093850b8352928152908290208251608081018452815481526001820154928101929092529283015491810191909152600390910154606082015290565b60006103b5610fa0836109a8565b6000806105f36040518060800160405280600081526020016000815260200160008152602001600081525090565b836001600160801b03166004600082825461060e9190610a1b565b9091555050600286810b6000908152602082815260408083209389900b83529290522054610646906001600160801b038616906109fc565b600287810b600090815260208281526040808320938a900b8352929052206001015490925061067f906001600160801b038616906109fc565b925061052f868661053a565b60006020828403121561069d57600080fd5b5035919050565b803580151581146106b457600080fd5b919050565b6001600160a01b038116811461029b57600080fd5b6000806000606084860312156106e357600080fd5b6106ec846106a4565b9250602084013591506040840135610703816106b9565b809150509250925092565b8035600281900b81146106b457600080fd5b60008060006060848603121561073557600080fd5b61073e8461070e565b925061074c6020850161070e565b915060408401356001600160801b038116811461070357600080fd5b8381526020810183905260c081016107a46040830184805182526020810151602083015260408101516040830152606081015160608301525050565b949350505050565b600080604083850312156107bf57600080fd5b6107c88361070e565b91506107d66020840161070e565b90509250929050565b81518152602080830151908201526040808301519082015260608083015190820152608081016103b5565b60008060008060008060c0878903121561082357600080fd5b61082c8761070e565b955061083a6020880161070e565b95989597505050506040840135936060810135936080820135935060a0909101359150565b60006020828403121561087157600080fd5b610462826106a4565b600060c0828403121561088c57600080fd5b50919050565b600080600080608085870312156108a857600080fd5b6108b18561070e565b93506108bf6020860161070e565b93969395505050506040820135916060013590565b6000602082840312156108e657600080fd5b8135610462816106b9565b634e487b7160e01b600052601160045260246000fd5b60006001600160ff1b038184138284138082168684048611161561092d5761092d6108f1565b600160ff1b600087128281168783058912161561094c5761094c6108f1565b60008712925087820587128484161615610968576109686108f1565b8785058712818416161561097e5761097e6108f1565b505050929093029392505050565b6000600160ff1b82016109a1576109a16108f1565b5060000390565b6000826109c557634e487b7160e01b600052601260045260246000fd5b600160ff1b8214600019841416156109df576109df6108f1565b500590565b600082198211156109f7576109f76108f1565b500190565b6000816000190483118215151615610a1657610a166108f1565b500290565b600082821015610a2d57610a2d6108f1565b50039056fea2646970667358221220b750edbec97ee752931b1de1e202e6669d4baff571f51dc31d356a406380db9d64736f6c634300080d0033';

type CollateralDepositSetTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CollateralDepositSetTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CollateralDepositSetTest__factory extends ContractFactory {
  constructor(...args: CollateralDepositSetTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _settlementToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CollateralDepositSetTest> {
    return super.deploy(
      _settlementToken,
      overrides || {}
    ) as Promise<CollateralDepositSetTest>;
  }
  override getDeployTransaction(
    _settlementToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_settlementToken, overrides || {});
  }
  override attach(address: string): CollateralDepositSetTest {
    return super.attach(address) as CollateralDepositSetTest;
  }
  override connect(signer: Signer): CollateralDepositSetTest__factory {
    return super.connect(signer) as CollateralDepositSetTest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CollateralDepositSetTestInterface {
    return new utils.Interface(_abi) as CollateralDepositSetTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CollateralDepositSetTest {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as CollateralDepositSetTest;
  }
}
