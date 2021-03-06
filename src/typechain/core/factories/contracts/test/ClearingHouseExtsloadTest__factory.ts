/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type {
  ClearingHouseExtsloadTest,
  ClearingHouseExtsloadTestInterface,
} from '../../../contracts/test/ClearingHouseExtsloadTest';

const _abi = [
  {
    inputs: [
      {
        internalType: 'contract IClearingHouse',
        name: 'clearingHouse',
        type: 'address',
      },
      {
        internalType: 'uint32',
        name: 'poolId',
        type: 'uint32',
      },
    ],
    name: 'checkVPoolAndTwapDuration',
    outputs: [
      {
        internalType: 'contract IUniswapV3Pool',
        name: 'vPool',
        type: 'address',
      },
      {
        internalType: 'uint32',
        name: 'twapDuration',
        type: 'uint32',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IClearingHouse',
        name: 'clearingHouse',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'accountId',
        type: 'uint256',
      },
      {
        internalType: 'uint32',
        name: 'collateralId',
        type: 'uint32',
      },
    ],
    name: 'getAccountCollateralBalance',
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
        internalType: 'contract IClearingHouse',
        name: 'clearingHouse',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'accountId',
        type: 'uint256',
      },
      {
        internalType: 'uint32',
        name: 'collateralId',
        type: 'uint32',
      },
    ],
    name: 'getAccountCollateralInfo',
    outputs: [
      {
        internalType: 'contract IERC20',
        name: 'collateral',
        type: 'address',
      },
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
        internalType: 'contract IClearingHouse',
        name: 'clearingHouse',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'accountId',
        type: 'uint256',
      },
    ],
    name: 'getAccountInfo',
    outputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'int256',
        name: 'vQuoteBalance',
        type: 'int256',
      },
      {
        internalType: 'uint32[]',
        name: 'activeCollateralIds',
        type: 'uint32[]',
      },
      {
        internalType: 'uint32[]',
        name: 'activePoolIds',
        type: 'uint32[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IClearingHouse',
        name: 'clearingHouse',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'accountId',
        type: 'uint256',
      },
      {
        internalType: 'uint32',
        name: 'poolId',
        type: 'uint32',
      },
      {
        internalType: 'int24',
        name: 'tickLower',
        type: 'int24',
      },
      {
        internalType: 'int24',
        name: 'tickUpper',
        type: 'int24',
      },
    ],
    name: 'getAccountLiquidityPositionInfo',
    outputs: [
      {
        internalType: 'uint8',
        name: 'limitOrderType',
        type: 'uint8',
      },
      {
        internalType: 'uint128',
        name: 'liquidity',
        type: 'uint128',
      },
      {
        internalType: 'int256',
        name: 'vTokenAmountIn',
        type: 'int256',
      },
      {
        internalType: 'int256',
        name: 'sumALastX128',
        type: 'int256',
      },
      {
        internalType: 'int256',
        name: 'sumBInsideLastX128',
        type: 'int256',
      },
      {
        internalType: 'int256',
        name: 'sumFpInsideLastX128',
        type: 'int256',
      },
      {
        internalType: 'uint256',
        name: 'sumFeeInsideLastX128',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IClearingHouse',
        name: 'clearingHouse',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'accountId',
        type: 'uint256',
      },
      {
        internalType: 'uint32',
        name: 'poolId',
        type: 'uint32',
      },
    ],
    name: 'getAccountLiquidityPositionList',
    outputs: [
      {
        components: [
          {
            internalType: 'int24',
            name: 'tickLower',
            type: 'int24',
          },
          {
            internalType: 'int24',
            name: 'tickUpper',
            type: 'int24',
          },
        ],
        internalType: 'struct IClearingHouseStructures.TickRange[]',
        name: 'activeTickRanges',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getAccountOffsets',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IClearingHouse',
        name: 'clearingHouse',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'accountId',
        type: 'uint256',
      },
      {
        internalType: 'uint32',
        name: 'poolId',
        type: 'uint32',
      },
    ],
    name: 'getAccountPositionInfo',
    outputs: [
      {
        internalType: 'int256',
        name: 'balance',
        type: 'int256',
      },
      {
        internalType: 'int256',
        name: 'netTraderPosition',
        type: 'int256',
      },
      {
        internalType: 'int256',
        name: 'sumALastX128',
        type: 'int256',
      },
      {
        components: [
          {
            internalType: 'int24',
            name: 'tickLower',
            type: 'int24',
          },
          {
            internalType: 'int24',
            name: 'tickUpper',
            type: 'int24',
          },
        ],
        internalType: 'struct IClearingHouseStructures.TickRange[]',
        name: 'activeTickRanges',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IClearingHouse',
        name: 'clearingHouse',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'accountId',
        type: 'uint256',
      },
      {
        internalType: 'uint32',
        name: 'poolId',
        type: 'uint32',
      },
    ],
    name: 'getAccountTokenPositionInfo',
    outputs: [
      {
        internalType: 'int256',
        name: 'balance',
        type: 'int256',
      },
      {
        internalType: 'int256',
        name: 'netTraderPosition',
        type: 'int256',
      },
      {
        internalType: 'int256',
        name: 'sumALastX128',
        type: 'int256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getAccountsMappingSlot',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IClearingHouse',
        name: 'clearingHouse',
        type: 'address',
      },
      {
        internalType: 'uint32',
        name: 'collateralId',
        type: 'uint32',
      },
    ],
    name: 'getCollateralInfo',
    outputs: [
      {
        components: [
          {
            internalType: 'contract IERC20',
            name: 'token',
            type: 'address',
          },
          {
            components: [
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
              {
                internalType: 'bool',
                name: 'isAllowedForDeposit',
                type: 'bool',
              },
            ],
            internalType: 'struct IClearingHouseStructures.CollateralSettings',
            name: 'settings',
            type: 'tuple',
          },
        ],
        internalType: 'struct IClearingHouseStructures.Collateral',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getCollateralOffsets',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getLiquidityPositionOffsets',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IClearingHouse',
        name: 'clearingHouse',
        type: 'address',
      },
      {
        internalType: 'uint32',
        name: 'poolId',
        type: 'uint32',
      },
    ],
    name: 'getPoolInfo',
    outputs: [
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
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getPoolOffsets',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IClearingHouse',
        name: 'clearingHouse',
        type: 'address',
      },
      {
        internalType: 'uint32',
        name: 'poolId',
        type: 'uint32',
      },
    ],
    name: 'getPoolSettings',
    outputs: [
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
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IClearingHouse',
        name: 'clearingHouse',
        type: 'address',
      },
    ],
    name: 'getProtocolInfo',
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
    inputs: [],
    name: 'getProtocolOffsets',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getProtocolSlot',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IClearingHouse',
        name: 'clearingHouse',
        type: 'address',
      },
      {
        internalType: 'uint32',
        name: 'poolId',
        type: 'uint32',
      },
    ],
    name: 'getVPool',
    outputs: [
      {
        internalType: 'contract IUniswapV3Pool',
        name: 'vPool',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IClearingHouse',
        name: 'clearingHouse',
        type: 'address',
      },
      {
        internalType: 'uint32',
        name: 'poolId',
        type: 'uint32',
      },
    ],
    name: 'getVPoolAndTwapDuration',
    outputs: [
      {
        internalType: 'contract IUniswapV3Pool',
        name: 'vPool',
        type: 'address',
      },
      {
        internalType: 'uint32',
        name: 'twapDuration',
        type: 'uint32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getVTokenPositionOffsets',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IClearingHouse',
        name: 'clearingHouse',
        type: 'address',
      },
      {
        internalType: 'uint32',
        name: 'poolId',
        type: 'uint32',
      },
    ],
    name: 'isPoolIdAvailable',
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
];

const _bytecode =
  '0x6080806040523461001657611dc9908161001c8239f35b600080fdfe60806040526004361015610013575b600080fd5b60003560e01c806257ecd9146101d55780630d8d47da146101cc5780632df6929e146101c3578063313ae160146101ba57806333f2b7d9146101b15780633ea4825d146101a85780633fd891231461019f5780634a632710146101965780634c33a9981461018d5780635290a27c1461018457806354112e8014610184578063542be3231461017b5780635f34f0d914610172578063674251241461016957806369f3237e146101605780636dec29df146101575780638a2012381461014e578063aeea364114610145578063cf50b0f51461013c578063d09fba6b14610133578063d343b06e1461012a578063d7a1a200146101215763e2b504fa1461011957600080fd5b61000e611448565b5061000e6112f3565b5061000e6112a4565b5061000e611287565b5061000e611175565b5061000e610f0d565b5061000e610dc9565b5061000e610cd3565b5061000e610c9a565b5061000e610c68565b5061000e610b93565b5061000e610b76565b5061000e610a42565b5061000e610978565b5061000e6108bb565b5061000e61077a565b5061000e61073a565b5061000e61063f565b5061000e6104de565b5061000e610391565b5061000e6102f8565b5061000e61021a565b600435906001600160a01b038216820361000e57565b6024359063ffffffff8216820361000e57565b6044359063ffffffff8216820361000e57565b503461000e57604060031936011261000e576102b96001600160a01b0360206102416101de565b602461026461024e6101f4565b63ffffffff166000526064602052604060002090565b60405194859384927f1e2eaeaf0000000000000000000000000000000000000000000000000000000084526004840152165afa9081156102eb575b6000916102bd575b50604051901581529081906020820190565b0390f35b6102de915060203d81116102e4575b6102d6818361159f565b810190611855565b386102a7565b503d6102cc565b6102f3611848565b61029f565b503461000e57600060031936011261000e57604080516000815260016020820152f35b90815180825260208080930193019160005b82811061033b575050505090565b835163ffffffff168552938101939281019260010161032d565b9261038e94926001600160a01b0361038093168552602085015260806040850152608084019061031b565b91606081840391015261031b565b90565b503461000e57604060031936011261000e576001600160a01b03600061043f6103b86101de565b6103c06115e9565b60016103d860243560005260d3602052604060002090565b806103e284611702565b52600381016103f08461171c565b52606881016103fe8461172d565b52016104098261173e565b526040519485809481937fdbd035ff0000000000000000000000000000000000000000000000000000000083526004830161180d565b0392165afa9081156104d1575b6000916104b0575b5061047761046b61046483611702565b5160601c90565b6001600160a01b031690565b6102b96104838361171c565b51926104a361049761049d6104978461172d565b51611bab565b9261173e565b9060405194859485610355565b6104cb913d8091833e6104c3818361159f565b810190611793565b38610454565b6104d9611848565b61044c565b503461000e57604060031936011261000e576102b96001600160a01b0360206105056101de565b6024600161051461024e6101f4565b0160405194859384927f1e2eaeaf0000000000000000000000000000000000000000000000000000000084526004840152165afa908115610591575b600091610573575b506040516001600160a01b0390911681529081906020820190565b61058b915060203d81116102e4576102d6818361159f565b38610558565b610599611848565b610550565b600319606091011261000e576004356001600160a01b038116810361000e57906024359060443563ffffffff8116810361000e5790565b90815180825260208080930193019160005b8281106105f5575050505090565b83518051600290810b875290830151900b85830152604090940193928101926001016105e7565b909260809261038e959483526020830152604082015281606082015201906105d5565b503461000e576001600160a01b0360006106bd61067461068c6106613661059e565b91939060005260d3602052604060002090565b63ffffffff6002921660005201602052604060002090565b60036106966115e9565b91806106a184611702565b52600181016106af8461171c565b52600281016103fe8461172d565b0392165afa90811561072d575b600091610714575b506106dc81611702565b516102b96106e98361171c565b51926107076107016106fa8361172d565b519261173e565b51611cbc565b906040519485948561061c565b610727913d8091833e6104c3818361159f565b386106d2565b610735611848565b6106ca565b503461000e57600060031936011261000e5760c06040516000815260016020820152600260408201526003606082015260686080820152606960a0820152f35b503461000e57604060031936011261000e576102b96107976101de565b61084e6108486001600160a01b0360006107fe6107b26101f4565b956107bb611b05565b506107c4611b05565b9660016107e96107d2611623565b9263ffffffff166000526065602052604060002090565b806107f384611702565b52016104098261171c565b0392165afa9081156108ae575b600091610895575b5061084361083661046b61046b61082985611702565b516001600160a01b031690565b6001600160a01b03168552565b61171c565b51611b21565b60208281019182526040805193516001600160a01b03908116855292518051909316848301529082015163ffffffff16838201520151151560608201529081906080820190565b6108a8913d8091833e6104c3818361159f565b38610813565b6108b6611848565b61080b565b503461000e5760206001600160a01b038161090260246108da3661059e565b9060009492945260d38552604060002063ffffffff6069921660005201602052604060002090565b60405194859384927f1e2eaeaf0000000000000000000000000000000000000000000000000000000084526004840152165afa90811561096b575b60009161094e575b50604051908152f35b6109659150823d81116102e4576102d6818361159f565b38610945565b610973611848565b61093d565b503461000e576001600160a01b0360006109c861067461099a6106613661059e565b60026109a461165e565b91806109af84611702565b52600181016109bd8461171c565b52016104098261172d565b0392165afa908115610a35575b600091610a1c575b506109e781611702565b516102b96109fe6109f78461171c565b519361172d565b51604051938493846040919493926060820195825260208201520152565b610a2f913d8091833e6104c3818361159f565b386109dd565b610a3d611848565b6109d5565b503461000e57604060031936011261000e57610ad9610a5f6101de565b6000610a696101f4565b6003610a8d610a76611623565b9263ffffffff166000526064602052604060002090565b60018101610a9a84611702565b5201610aa58261171c565b52604051809481927fdbd035ff0000000000000000000000000000000000000000000000000000000083526004830161180d565b03816001600160a01b038095165afa918215610b69575b600092610b44575b50610b1363ffffffff91610b0b84611702565b51169261171c565b5160301c16906102b96040519283928390929163ffffffff6020916001600160a01b03604085019616845216910152565b610b61610b139163ffffffff93943d8091833e6104c3818361159f565b929150610af8565b610b71611848565b610af0565b503461000e57600060031936011261000e57602060405160648152f35b503461000e57610bdf610c296001600160a01b03610bb03661059e565b919060005260246003602096879460d38652604060002063ffffffff6002921660005201602052604060002090565b0160405194859384927f1e2eaeaf0000000000000000000000000000000000000000000000000000000084526004840152165afa908115610c5b575b600091610c3e575b50611cbc565b906102b96040519282849384528301906105d5565b610c559150833d85116102e4576102d6818361159f565b38610c23565b610c63611848565b610c1b565b503461000e57600060031936011261000e57608060405160008152600160208201526002604082015260036060820152f35b503461000e57600060031936011261000e5760a06040516000815260016020820152600260408201526003606082015260046080820152f35b503461000e57600060031936011261000e5760c06040516000815260016020820152600260408201526003606082015260046080820152600560a0820152f35b9260e0610db991610180969399989794996101a087019a6001600160a01b03809216885216602087015261ffff8082511660408801528060208301511660608801526040820151166080870152610d75606082015160a088019061ffff169052565b608081015161ffff1660c087015260a081015161ffff168683015260c081015167ffffffffffffffff16610100870152015167ffffffffffffffff16610120850152565b6101408301526101608201520152565b503461000e57602060031936011261000e576001600160a01b036000610e51610df06101de565b610df86119d2565b50610e016119d2565b50610e0a611698565b6067610e1582611702565b526068610e218261171c565b526069610e2d8261172d565b52606a610e398261173e565b52606b610e458261174f565b52606c61040982611760565b0392165afa908115610ee0575b600091610ec7575b50610e7661046b61082983611702565b6102b9610e8861046b6108298561171c565b92610e9b610e958261172d565b51611a30565b90610ea58161173e565b51610eb9610eb28361174f565b5192611760565b519260405196879687610d13565b610eda913d8091833e6104c3818361159f565b38610e66565b610ee8611848565b610e5e565b606435908160020b820361000e57565b608435908160020b820361000e57565b503461000e5760a060031936011261000e576001600160a01b036000610fe7610f346101de565b610f8f610f3f610207565b610f47610eed565b610f69610f52610efd565b9261067460243560005260d3602052604060002090565b9065ffffffffffff9062ffffff600494169060181b011660005201602052604060002090565b6005610f99611698565b9180610fa484611702565b5260018101610fb28461171c565b5260028101610fc08461172d565b5260038101610fce8461173e565b5260048101610fdc8461174f565b520161040982611760565b0392165afa9081156110d0575b6000916110b7575b5061100f61100982611702565b51611963565b805160b881901c90915260ff8116906102b99060381c6fffffffffffffffffffffffffffffffff16926110418161171c565b519061104c8161172d565b516110568261173e565b519061106b6110648461174f565b5193611760565b5193604051978897889390979695926fffffffffffffffffffffffffffffffff60c0969360ff60e088019b16875216602086015260408501526060840152608083015260a08201520152565b6110ca913d8091833e6104c3818361159f565b38610ffc565b6110d8611848565b610ff4565b611173909291926060806101408301956001600160a01b03808251168552806020830151166020860152604082015116604085015201519101906001600160a01b0360c0809261ffff808251168652806020830151166020870152604082015116604086015263ffffffff606082015116606086015260808101511515608086015260a0810151151560a0860152015116910152565b565b503461000e57604060031936011261000e576102b96111926101de565b61125061124a6001600160a01b0360006111d96111ad6101f4565b956111b6611984565b5061068c6111c2611984565b9763ffffffff166000526064602052604060002090565b0392165afa90811561127a575b600091611261575b5061120161083661046b61082984611702565b61122361121361046b6108298461171c565b6001600160a01b03166020860152565b61124561123561046b6108298461172d565b6001600160a01b03166040860152565b61173e565b516118bb565b6060820152604051918291826110dd565b611274913d8091833e6104c3818361159f565b386111ee565b611282611848565b6111e6565b503461000e57600060031936011261000e57602060405160d38152f35b503461000e57600060031936011261000e576101006040516000815260016020820152600360408201526004606082015260056080820152600660a0820152600760c0820152600860e0820152f35b503461000e576001600160a01b03600061136f6113666113123661059e565b61131e93919293611623565b92865260d3602052611346816040882063ffffffff6069921660005201602052604060002090565b61134f84611702565b5263ffffffff166000526065602052604060002090565b6104098261171c565b0392165afa9081156113d3575b6000916113ba575b5061139e61046b61082961139784611702565b519361171c565b604080516001600160a01b039290921682526020820192909252f35b6113cd913d8091833e6104c3818361159f565b38611384565b6113db611848565b61137c565b6111739092919260e08101936001600160a01b0360c0809261ffff808251168652806020830151166020870152604082015116604086015263ffffffff606082015116606086015260808101511515608086015260a0810151151560a0860152015116910152565b503461000e57604060031936011261000e576102b96114f36001600160a01b0360206114726101de565b602460036114a96114816101f4565b611489611864565b50611492611864565b5063ffffffff166000526064602052604060002090565b0160405194859384927f1e2eaeaf0000000000000000000000000000000000000000000000000000000084526004840152165afa90811561151d575b6000916114ff575b506118bb565b604051918291826113e0565b611517915060203d81116102e4576102d6818361159f565b386114ed565b611525611848565b6114e5565b507f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6020810190811067ffffffffffffffff82111761157657604052565b61157e61152a565b604052565b6040810190811067ffffffffffffffff82111761157657604052565b90601f601f19910116810190811067ffffffffffffffff82111761157657604052565b60209067ffffffffffffffff81116115dc575b60051b0190565b6115e461152a565b6115d5565b6040519060a0820182811067ffffffffffffffff821117611616575b604052600482526080366020840137565b61161e61152a565b611605565b604051906060820182811067ffffffffffffffff821117611651575b60405260028252604082602036910137565b61165961152a565b61163f565b604051906080820182811067ffffffffffffffff82111761168b575b604052600382526060366020840137565b61169361152a565b61167a565b6040519060e0820182811067ffffffffffffffff8211176116c5575b6040526006825260c0366020840137565b6116cd61152a565b6116b4565b507f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602090805115611710570190565b6117186116d2565b0190565b604090805160011015611710570190565b606090805160021015611710570190565b608090805160031015611710570190565b60a090805160041015611710570190565b60c090805160051015611710570190565b6020918151811015611786575b60051b010190565b61178e6116d2565b61177e565b602090818184031261000e5780519067ffffffffffffffff821161000e57019180601f8401121561000e5782516117c9816115c2565b936117d7604051958661159f565b818552838086019260051b82010192831161000e578301905b8282106117fe575050505090565b815181529083019083016117f0565b6020908160408183019282815285518094520193019160005b828110611834575050505090565b835185529381019392810192600101611826565b506040513d6000823e3d90fd5b9081602091031261000e575190565b6040519060e0820182811067ffffffffffffffff8211176118ae575b6040528160c06000918281528260208201528260408201528260608201528260808201528260a08201520152565b6118b661152a565b611880565b906001600160a01b0361195b6118d86118d2611864565b94611963565b8051601081811c835261ffff9182168752825180821c8452821660208089019190915283519182901c84529116604087015281519081901c825263ffffffff1660608601528051600881811c835260ff9182161515608088015282519081901c835216151560a08087019190915281519081901c9091526001600160a01b031690565b1660c0830152565b60006040516119718161155a565b526040519061197f8261155a565b815290565b604051906080820182811067ffffffffffffffff8211176119c5575b6040528160008152600060208201526000604082015260606119c0611864565b910152565b6119cd61152a565b6119a0565b60405190610100820182811067ffffffffffffffff821117611a23575b6040528160e06000918281528260208201528260408201528260608201528260808201528260a08201528260c08201520152565b611a2b61152a565b6119ef565b90611a42611a3c6119d2565b92611963565b8051601081811c835261ffff9182168552825180821c845282166020860152825180821c84528216604080870191909152835180831c855283166060870152835180831c85528316608087015283519182901c8452911660a0850152815180821c835267ffffffffffffffff90811660c086015282519182901c9092521660e0830152565b604051906060820182811067ffffffffffffffff821117611af8575b60405260006040838281528260208201520152565b611b0061152a565b611ae3565b60405190611b1282611583565b816000815260206119c0611ac7565b90611b71611b36611b30611ac7565b93611963565b805160a081901c82526001600160a01b031684528051602081811c835263ffffffff909116908501528051600881901c90915260ff16151590565b15156040830152565b90611b84826115c2565b611b91604051918261159f565b828152601f19611ba182946115c2565b0190602036910137565b9060089182835b611c11575b611bc2848203611b7a565b9384905b828110611bd35750505050565b611c0c600591611c0163ffffffff82851b946001840195868a821b921b61010003011c169160070385611771565b9063ffffffff169052565b611bc6565b927fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff810190600582811b8285821b921b61010003011c15611c5457509283611bb2565b939050611bb7565b90611c66826115c2565b604090611c758251918261159f565b838152601f19611c8582956115c2565b0191600090815b848110611c9a575050505050565b6020908251611ca881611583565b848152828581830152828701015201611c8c565b9060059182835b611d48575b611cd3848203611c5c565b935b818110611ce157505050565b611d43611d336020611d39603094611d1965ffffffffffff8783029760018401988b816010011b918a0261010003011c168060181c91565b94909160040391611d2a838d611771565b519060020b9052565b89611771565b51019060020b9052565b611cd5565b927fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff810190603080830284811b91830261010003011c15611d8b57509283611cc3565b939050611cc856fea2646970667358221220e5ba0c149ad0f2f250087f2d2bbc10f7f3e87b81b638b02b96d67fb28671c7e664736f6c634300080e0033';

type ClearingHouseExtsloadTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ClearingHouseExtsloadTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ClearingHouseExtsloadTest__factory extends ContractFactory {
  constructor(...args: ClearingHouseExtsloadTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ClearingHouseExtsloadTest> {
    return super.deploy(overrides || {}) as Promise<ClearingHouseExtsloadTest>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ClearingHouseExtsloadTest {
    return super.attach(address) as ClearingHouseExtsloadTest;
  }
  override connect(signer: Signer): ClearingHouseExtsloadTest__factory {
    return super.connect(signer) as ClearingHouseExtsloadTest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ClearingHouseExtsloadTestInterface {
    return new utils.Interface(_abi) as ClearingHouseExtsloadTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ClearingHouseExtsloadTest {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ClearingHouseExtsloadTest;
  }
}
