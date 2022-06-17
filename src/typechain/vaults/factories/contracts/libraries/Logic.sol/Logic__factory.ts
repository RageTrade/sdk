/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type {
  Logic,
  LogicInterface,
} from '../../../../contracts/libraries/Logic.sol/Logic';

const _abi = [
  {
    inputs: [],
    name: 'R',
    type: 'error',
  },
  {
    inputs: [],
    name: 'T',
    type: 'error',
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
      {
        indexed: false,
        internalType: 'address',
        name: 'newKeeperAddress',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint32',
        name: 'rebalanceTimeThreshold',
        type: 'uint32',
      },
      {
        indexed: false,
        internalType: 'uint16',
        name: 'rebalancePriceThresholdBps',
        type: 'uint16',
      },
    ],
    name: 'BaseParamsUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'crvSlippageTolerance',
        type: 'uint256',
      },
    ],
    name: 'CrvSwapFailedDueToSlippage',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'feeBps',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'stablecoinSlippage',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'crvHarvestThreshold',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'crvSlippageTolerance',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'crvOracle',
        type: 'address',
      },
    ],
    name: 'CurveParamsUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint16',
        name: 'closePositionSlippageSqrtToleranceBps',
        type: 'uint16',
      },
      {
        indexed: false,
        internalType: 'uint16',
        name: 'resetPositionThresholdBps',
        type: 'uint16',
      },
      {
        indexed: false,
        internalType: 'uint64',
        name: 'minNotionalPositionToCloseThreshold',
        type: 'uint64',
      },
    ],
    name: 'EightyTwentyParamsUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'fee',
        type: 'uint256',
      },
    ],
    name: 'FeesUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'total',
        type: 'uint256',
      },
    ],
    name: 'FeesWithdrawn',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'crvAmount',
        type: 'uint256',
      },
    ],
    name: 'Harvested',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [],
    name: 'Rebalance',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'depositor',
        type: 'address',
      },
    ],
    name: 'Staked',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'lpPrice',
        type: 'uint256',
      },
    ],
    name: 'StateInfo',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [],
    name: 'TokenPositionClosed',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'contract ILPPriceGetter',
        name: 'lpPriceHolder',
        type: 'ILPPriceGetter',
      },
    ],
    name: 'getMarketValue',
    outputs: [
      {
        internalType: 'uint256',
        name: 'marketValue',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract ILPPriceGetter',
        name: 'lpPriceHolder',
        type: 'ILPPriceGetter',
      },
    ],
    name: 'getPriceX128',
    outputs: [
      {
        internalType: 'uint256',
        name: 'priceX128',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IUniswapV3Pool',
        name: 'rageVPool',
        type: 'IUniswapV3Pool',
      },
      {
        internalType: 'uint32',
        name: 'rageTwapDuration',
        type: 'uint32',
      },
    ],
    name: 'getTwapSqrtPriceX96',
    outputs: [
      {
        internalType: 'uint160',
        name: 'twapSqrtPriceX96',
        type: 'uint160',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint160',
        name: 'sqrtPriceX96',
        type: 'uint160',
      },
      {
        internalType: 'int256',
        name: 'vaultMarketValue',
        type: 'int256',
      },
      {
        internalType: 'uint64',
        name: 'SQRT_PRICE_FACTOR_PIPS',
        type: 'uint64',
      },
    ],
    name: 'getUpdatedBaseRangeParams',
    outputs: [
      {
        internalType: 'int24',
        name: 'baseTickLowerUpdate',
        type: 'int24',
      },
      {
        internalType: 'int24',
        name: 'baseTickUpperUpdate',
        type: 'int24',
      },
      {
        internalType: 'uint128',
        name: 'baseLiquidityUpdate',
        type: 'uint128',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IUniswapV3Pool',
        name: 'rageVPool',
        type: 'IUniswapV3Pool',
      },
      {
        internalType: 'uint32',
        name: 'rageTwapDuration',
        type: 'uint32',
      },
      {
        internalType: 'uint16',
        name: 'rebalancePriceThresholdBps',
        type: 'uint16',
      },
      {
        internalType: 'int24',
        name: 'baseTickLower',
        type: 'int24',
      },
      {
        internalType: 'int24',
        name: 'baseTickUpper',
        type: 'int24',
      },
    ],
    name: 'isValidRebalanceRangeWithoutCheckReset',
    outputs: [
      {
        internalType: 'bool',
        name: 'isValid',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'vault',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amountBeforeWithdraw',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amountWithdrawn',
        type: 'uint256',
      },
    ],
    name: 'simulateBeforeWithdraw',
    outputs: [
      {
        internalType: 'uint256',
        name: 'updatedAmountWithdrawn',
        type: 'uint256',
      },
      {
        internalType: 'int256',
        name: 'tokensToTrade',
        type: 'int256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint160',
        name: 'sqrtPriceX96',
        type: 'uint160',
      },
      {
        internalType: 'bool',
        name: 'isTickUpper',
        type: 'bool',
      },
    ],
    name: 'sqrtPriceX96ToValidTick',
    outputs: [
      {
        internalType: 'int24',
        name: 'roundedTick',
        type: 'int24',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
];

const _bytecode =
  '0x61223561003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100925760003560e01c8063ad6ed5b011610065578063ad6ed5b01461012e578063e4a66f3f1461016d578063e54c8fd81461018d578063ffe2e69a146101b857600080fd5b80632780ee3114610097578063757d5fd6146100c45780637a5fda79146100e7578063854292c714610108575b600080fd5b6100aa6100a5366004611851565b6101cb565b604080519283526020830191909152015b60405180910390f35b6100d76100d23660046118b7565b6105df565b60405190151581526020016100bb565b6100fa6100f5366004611928565b610664565b6040519081526020016100bb565b61011b610116366004611966565b610685565b60405160029190910b81526020016100bb565b61014161013c3660046119aa565b6106f9565b60408051600294850b81529290930b60208301526001600160801b0316918101919091526060016100bb565b81801561017957600080fd5b506100fa6101883660046119ec565b6107b6565b6101a061019b366004611a83565b610a54565b6040516001600160a01b0390911681526020016100bb565b6100fa6101c6366004611ab1565b610a69565b6000806000856001600160a01b031663d4406e896040518163ffffffff1660e01b8152600401602060405180830381865afa15801561020e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102329190611ace565b90506000866001600160a01b0316635f63e0666040518163ffffffff1660e01b8152600401602060405180830381865afa158015610274573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102989190611aeb565b90506000610314886001600160a01b031663ee3a98ff6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156102dd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103019190611aeb565b61019b6001600160a01b03851686610a7a565b90506000826001600160a01b0316636a4864828a6001600160a01b031663e66488536040518163ffffffff1660e01b8152600401602060405180830381865afa158015610365573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103899190611b08565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b168152600481019190915263ffffffff87166024820152604401602060405180830381865afa1580156103e9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061040d9190611b08565b905061041a81888a610b12565b61042390611b37565b945060006104318284610b5c565b905060008a6001600160a01b0316631aa3dfbb6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610473573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104979190611b53565b905060008b6001600160a01b0316636a8db81d6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156104d9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104fd9190611b70565b905060008c6001600160a01b031663fcb777ef6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561053f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105639190611aeb565b90508267ffffffffffffffff168411156105c7576000610587898b898b8688610b8a565b509050898103610599578b9a506105c1565b60006105af6105a78f610c9b565b839089610ce4565b6105b890611b37565b9b509099508990505b506105cf565b8a9950600098505b5050505050505050935093915050565b6000806105ec8787610a54565b6001600160a01b03169050600061060a8261ffff8816612710610d41565b9050600284900b61062b6106266106218486611b8d565b610df3565b610e3c565b60020b138061064f5750600285900b61064a6106266106218486611ba5565b60020b125b1561065957600192505b505095945050505050565b600061067e6106728361114f565b8490600160801b610d41565b9392505050565b60008061069184610e3c565b905082156106c0576106a4600a82611bd2565b6106af82600a611bf4565b6106b99190611c3b565b91506106d8565b6106cb600a82611bd2565b6106d59082611c3b565b91505b60008160020b12156106f2576106ef600a83611c3b565b91505b5092915050565b60008080806107226106216001600160a01b03891667ffffffffffffffff8816620f4240610d41565b9050600061074a6106216001600160a01b038a16620f424067ffffffffffffffff8a16610d41565b9050610757826000610685565b9450610764816001610685565b935050506000610773846111d2565b90506107aa6107a561078a600a600160601b611c83565b610794848b611c97565b8991906001600160a01b0316610d41565b6114f5565b91505093509350939050565b600080876001600160a01b03166354f0f7d56040518163ffffffff1660e01b8152600401602060405180830381865afa1580156107f7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061081b9190611b08565b905060008161082f8c64e8d4a51000611cbf565b61084190670de0b6b3a7640000611cbf565b61084b9190611c83565b604051632e1a7d4d60e01b8152600481018290529091506001600160a01b03891690632e1a7d4d90602401600060405180830381600087803b15801561089057600080fd5b505af11580156108a4573d6000803e3d6000fd5b505060405163f1dc3cc960e01b81526004810184905260006024820181905260448201526001600160a01b038a16925063f1dc3cc99150606401600060405180830381600087803b1580156108f857600080fd5b505af115801561090c573d6000803e3d6000fd5b50506040516370a0823160e01b8152306004820152600092506001600160a01b03891691506370a0823190602401602060405180830381865afa158015610957573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061097b9190611b08565b6040516bffffffffffffffffffffffff1960608a811b82166020840152607d60ea1b603484015288901b166037820152909150600090604b01604051602081830303815290604052905073__$f09208ef53137b379b85ea4a8d399069d8$__63abd9ebe5838e848b6040518563ffffffff1660e01b8152600401610a029493929190611cde565b602060405180830381865af4158015610a1f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a439190611b08565b9d9c50505050505050505050505050565b600061067e6001600160a01b0384168361150b565b6000610a748261114f565b92915050565b600080836001600160a01b0316631e2eaeaf610a9e6003610a9a8761152c565b0190565b6040518263ffffffff1660e01b8152600401610abc91815260200190565b602060405180830381865afa158015610ad9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610afd9190611b08565b90506106ef63ffffffff60b083901c16611546565b6000610b40610b3b60008612610b285785610b34565b610b3486600019611d59565b8585610d41565b61154e565b9050600084121561067e57610b5481611b37565b949350505050565b600061067e610b856001600160a01b038416600160601b610b7e878383610b12565b9190610b12565b611560565b600080600080881315610bc757610bc0610621610ba986612710611dde565b6001600160a01b038a169061ffff16612710610d41565b9050610bdc565b610bd9610621610ba986612710611e04565b90505b60405163e6ea159760e01b81526001600160a01b03878116600483015263ffffffff8b166024830152604482018a90528281166064830152600060848301819052919087169063e6ea15979060a40160e060405180830381865afa158015610c48573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c6c9190611e66565b90508060200151610c7c90611b37565b8160400151610c8a90611b37565b935093505050965096945050505050565b6000600160ff1b8210610ce05760405162461bcd60e51b81526020600482015260086024820152674f766572666c6f7760c01b60448201526064015b60405180910390fd5b5090565b60006001818080610cf5888561156b565b94509250610d03878561156b565b94509150610d11868561156b565b94509050610d23610b3b848484610d41565b945083610d3657610d3385611b37565b94505b505050509392505050565b6000808060001985870985870292508281108382030391505080600003610d7a5760008411610d6f57600080fd5b50829004905061067e565b808411610d8657600080fd5b6000848688096000868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010186841190950394909402919094039290920491909117919091029150509392505050565b806001600160a01b0381168114610e375760405162461bcd60e51b81526020600482015260086024820152674f766572666c6f7760c01b6044820152606401610cd7565b919050565b60006401000276a36001600160a01b03831610801590610e78575073fffd8963efd1fc6a506488495d951d5263988d266001600160a01b038316105b610e95576040516324c070df60e11b815260040160405180910390fd5b77ffffffffffffffffffffffffffffffffffffffff00000000602083901b166001600160801b03811160071b81811c67ffffffffffffffff811160061b90811c63ffffffff811160051b90811c61ffff811160041b90811c60ff8111600390811b91821c600f811160021b90811c918211600190811b92831c97908811961790941790921717909117171760808110610f3657607f810383901c9150610f40565b80607f0383901b91505b908002607f81811c60ff83811c9190911c800280831c81831c1c800280841c81841c1c800280851c81851c1c800280861c81861c1c800280871c81871c1c800280881c81881c1c800280891c81891c1c8002808a1c818a1c1c8002808b1c818b1c1c8002808c1c818c1c1c8002808d1c818d1c1c8002808e1c9c81901c9c909c1c80029c8d901c9e9d607f198f0160401b60c09190911c678000000000000000161760c19b909b1c674000000000000000169a909a1760c29990991c672000000000000000169890981760c39790971c671000000000000000169690961760c49590951c670800000000000000169490941760c59390931c670400000000000000169290921760c69190911c670200000000000000161760c79190911c670100000000000000161760c89190911c6680000000000000161760c99190911c6640000000000000161760ca9190911c6620000000000000161760cb9190911c6610000000000000161760cc9190911c6608000000000000161760cd9190911c66040000000000001617693627a301d71055774c8581026f028f6481ab7f045a5af012a19d003aa9198101608090811d906fdb2df09e81959a81455e260799a0632f8301901d600281810b9083900b1461114057886001600160a01b0316611125826111d2565b6001600160a01b0316111561113a5781611142565b80611142565b815b9998505050505050505050565b600080826001600160a01b03166354f0f7d56040518163ffffffff1660e01b8152600401602060405180830381865afa158015611190573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111b49190611b08565b905061067e81600160801b6c0c9f2c9cd04674edea40000000610d41565b60008060008360020b126111e9578260020b6111f1565b8260020b6000035b9050620d89e8811115611217576040516315e4079d60e11b815260040160405180910390fd5b60008160011660000361122e57600160801b611240565b6ffffcb933bd6fad37aa2d162d1a5940015b70ffffffffffffffffffffffffffffffffff1690506002821615611274576ffff97272373d413259a46990580e213a0260801c5b6004821615611293576ffff2e50f5f656932ef12357cf3c7fdcc0260801c5b60088216156112b2576fffe5caca7e10e4e61c3624eaa0941cd00260801c5b60108216156112d1576fffcb9843d60f6159c9db58835c9266440260801c5b60208216156112f0576fff973b41fa98c081472e6896dfb254c00260801c5b604082161561130f576fff2ea16466c96a3843ec78b326b528610260801c5b608082161561132e576ffe5dee046a99a2a811c461f1969c30530260801c5b61010082161561134e576ffcbe86c7900a88aedcffc83b479aa3a40260801c5b61020082161561136e576ff987a7253ac413176f2b074cf7815e540260801c5b61040082161561138e576ff3392b0822b70005940c7a398e4b70f30260801c5b6108008216156113ae576fe7159475a2c29b7443b29c7fa6e889d90260801c5b6110008216156113ce576fd097f3bdfd2022b8845ad8f792aa58250260801c5b6120008216156113ee576fa9f746462d870fdf8a65dc1f90e061e50260801c5b61400082161561140e576f70d869a156d2a1b890bb3df62baf32f70260801c5b61800082161561142e576f31be135f97d08fd981231505542fcfa60260801c5b6201000082161561144f576f09aa508b5b7a84e1c677de54f3e99bc90260801c5b6202000082161561146f576e5d6af8dedb81196699c329225ee6040260801c5b6204000082161561148e576d2216e584f5fa1ea926041bedfe980260801c5b620800008216156114ab576b048a170391f7dc42444e8fa20260801c5b60008460020b13156114cc5780600019816114c8576114c8611bbc565b0490505b6401000000008106156114e05760016114e3565b60005b60ff16602082901c0192505050919050565b806001600160801b0381168114610e3757600080fd5b6000806115216001600160a01b03851684611595565b90506106ef816111d2565b63ffffffff81166000908152606460205260408120610a74565b600081610a74565b6000600160ff1b8210610ce057600080fd5b6000610a74826117b1565b600080600084121561158a5791159161158384611b37565b915061158e565b8391505b5092909150565b60008163ffffffff166000036115be576115b7836001600160a01b03166117c8565b9050610a74565b60408051600280825260608201835260009260208301908036833701905050905082816000815181106115f3576115f3611ef9565b602002602001019063ffffffff16908163ffffffff168152505060008160018151811061162257611622611ef9565b63ffffffff9092166020928302919091019091015260405163883bdbfd60e01b81526001600160a01b0385169063883bdbfd90611663908490600401611f0f565b600060405180830381865afa9250505080156116a157506040513d6000823e601f3d908101601f1916820160405261169e9190810190611ff1565b60015b61171657836001600160a01b0316633850c7bd6040518163ffffffff1660e01b815260040160e060405180830381865afa1580156116e3573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061170791906120bd565b509396506106f2945050505050565b60008260008151811061172b5761172b611ef9565b60200260200101518360018151811061174657611746611ef9565b6020026020010151611758919061215f565b9050600061176c63ffffffff8816836121a5565b905060008260060b128015611792575061178c63ffffffff8816836121e3565b60060b15155b156117a557806117a181612205565b9150505b9450610a749350505050565b6000808213610ce0576117c382611b37565b610a74565b6000816001600160a01b0316633850c7bd6040518163ffffffff1660e01b815260040160e060405180830381865afa158015611808573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061182c91906120bd565b5093979650505050505050565b6001600160a01b038116811461184e57600080fd5b50565b60008060006060848603121561186657600080fd5b833561187181611839565b95602085013595506040909401359392505050565b63ffffffff8116811461184e57600080fd5b61ffff8116811461184e57600080fd5b8060020b811461184e57600080fd5b600080600080600060a086880312156118cf57600080fd5b85356118da81611839565b945060208601356118ea81611886565b935060408601356118fa81611898565b9250606086013561190a816118a8565b9150608086013561191a816118a8565b809150509295509295909350565b6000806040838503121561193b57600080fd5b82359150602083013561194d81611839565b809150509250929050565b801515811461184e57600080fd5b6000806040838503121561197957600080fd5b823561198481611839565b9150602083013561194d81611958565b67ffffffffffffffff8116811461184e57600080fd5b6000806000606084860312156119bf57600080fd5b83356119ca81611839565b92506020840135915060408401356119e181611994565b809150509250925092565b600080600080600080600080610100898b031215611a0957600080fd5b88359750602089013596506040890135611a2281611839565b95506060890135611a3281611839565b94506080890135611a4281611839565b935060a0890135611a5281611839565b925060c0890135611a6281611839565b915060e0890135611a7281611839565b809150509295985092959890939650565b60008060408385031215611a9657600080fd5b8235611aa181611839565b9150602083013561194d81611886565b600060208284031215611ac357600080fd5b813561067e81611839565b600060208284031215611ae057600080fd5b815161067e81611886565b600060208284031215611afd57600080fd5b815161067e81611839565b600060208284031215611b1a57600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b6000600160ff1b8201611b4c57611b4c611b21565b5060000390565b600060208284031215611b6557600080fd5b815161067e81611994565b600060208284031215611b8257600080fd5b815161067e81611898565b60008219821115611ba057611ba0611b21565b500190565b600082821015611bb757611bb7611b21565b500390565b634e487b7160e01b600052601260045260246000fd5b60008260020b80611be557611be5611bbc565b808360020b0791505092915050565b60008160020b8360020b6000821282627fffff03821381151615611c1a57611c1a611b21565b82627fffff19038212811615611c3257611c32611b21565b50019392505050565b60008160020b8360020b6000811281627fffff1901831281151615611c6257611c62611b21565b81627fffff018313811615611c7957611c79611b21565b5090039392505050565b600082611c9257611c92611bbc565b500490565b60006001600160a01b0383811690831681811015611cb757611cb7611b21565b039392505050565b6000816000190483118215151615611cd957611cd9611b21565b500290565b84815260006020858184015260806040840152845180608085015260005b81811015611d185786810183015185820160a001528201611cfc565b81811115611d2a57600060a083870101525b50601f01601f1916830160a0019150611d50905060608301846001600160a01b03169052565b95945050505050565b60006001600160ff1b0381841382841380821686840486111615611d7f57611d7f611b21565b600160ff1b6000871282811687830589121615611d9e57611d9e611b21565b60008712925087820587128484161615611dba57611dba611b21565b87850587128184161615611dd057611dd0611b21565b505050929093029392505050565b600061ffff808316818516808303821115611dfb57611dfb611b21565b01949350505050565b600061ffff83811690831681811015611cb757611cb7611b21565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715611e5e57611e5e611e1f565b604052919050565b600060e08284031215611e7857600080fd5b60405160e0810181811067ffffffffffffffff82111715611e9b57611e9b611e1f565b8060405250825181526020830151602082015260408301516040820152606083015160608201526080830151608082015260a0830151611eda81611839565b60a082015260c0830151611eed81611839565b60c08201529392505050565b634e487b7160e01b600052603260045260246000fd5b6020808252825182820181905260009190848201906040850190845b81811015611f4d57835163ffffffff1683529284019291840191600101611f2b565b50909695505050505050565b600067ffffffffffffffff821115611f7357611f73611e1f565b5060051b60200190565b600082601f830112611f8e57600080fd5b81516020611fa3611f9e83611f59565b611e35565b82815260059290921b84018101918181019086841115611fc257600080fd5b8286015b84811015611fe6578051611fd981611839565b8352918301918301611fc6565b509695505050505050565b6000806040838503121561200457600080fd5b825167ffffffffffffffff8082111561201c57600080fd5b818501915085601f83011261203057600080fd5b81516020612040611f9e83611f59565b82815260059290921b8401810191818101908984111561205f57600080fd5b948201945b8386101561208d5785518060060b811461207e5760008081fd5b82529482019490820190612064565b918801519196509093505050808211156120a657600080fd5b506120b385828601611f7d565b9150509250929050565b600080600080600080600060e0888a0312156120d857600080fd5b87516120e381611839565b60208901519097506120f4816118a8565b604089015190965061210581611898565b606089015190955061211681611898565b608089015190945061212781611898565b60a089015190935060ff8116811461213e57600080fd5b60c089015190925061214f81611958565b8091505092959891949750929550565b60008160060b8360060b6000811281667fffffffffffff190183128115161561218a5761218a611b21565b81667fffffffffffff018313811615611c7957611c79611b21565b60008160060b8360060b806121bc576121bc611bbc565b667fffffffffffff198214600019821416156121da576121da611b21565b90059392505050565b60008260060b806121f6576121f6611bbc565b808360060b0791505092915050565b60008160020b627fffff19810361221e5761221e611b21565b600019019291505056fea164736f6c634300080e000a';

type LogicConstructorParams =
  | [linkLibraryAddresses: LogicLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LogicConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === 'string' ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    '_isInterface' in xs[0]
  );
};

export class Logic__factory extends ContractFactory {
  constructor(...args: LogicConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(_abi, Logic__factory.linkBytecode(linkLibraryAddresses), signer);
    }
  }

  static linkBytecode(linkLibraryAddresses: LogicLibraryAddresses): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp('__\\$f09208ef53137b379b85ea4a8d399069d8\\$__', 'g'),
      linkLibraryAddresses['contracts/libraries/SwapManager.sol:SwapManager']
        .replace(/^0x/, '')
        .toLowerCase()
    );

    return linkedBytecode;
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Logic> {
    return super.deploy(overrides || {}) as Promise<Logic>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Logic {
    return super.attach(address) as Logic;
  }
  override connect(signer: Signer): Logic__factory {
    return super.connect(signer) as Logic__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LogicInterface {
    return new utils.Interface(_abi) as LogicInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Logic {
    return new Contract(address, _abi, signerOrProvider) as Logic;
  }
}

export interface LogicLibraryAddresses {
  ['contracts/libraries/SwapManager.sol:SwapManager']: string;
}