/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type {
  ClearingHouseLens,
  ClearingHouseLensInterface,
} from '../../../contracts/lens/ClearingHouseLens';

const _abi = [
  {
    inputs: [
      {
        internalType: 'contract IClearingHouse',
        name: '_clearingHouse',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
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
    inputs: [
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
    inputs: [
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
    inputs: [
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
    inputs: [
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
        name: 'pool',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
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
    inputs: [],
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
    inputs: [
      {
        internalType: 'uint32',
        name: 'poolId',
        type: 'uint32',
      },
    ],
    name: 'getTwapDuration',
    outputs: [
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
    inputs: [
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
    inputs: [
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
  '0x60a0346100d357601f611e5838819003918201601f19168301916001600160401b038311848410176100d8578084926020946040528339810103126100d357516001600160a01b03811681036100d357608052604051611d6990816100ef82396080518181816101e00152818161028d0152818161041f0152818161056401528181610713015281816108a301528181610a2101528181610b6b01528181610c5601528181610d0b01528181610e7a01528181610fc60152818161115f015281816112500152818161131b015261143c0152f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe60806040526004361015610013575b600080fd5b60003560e01c8063040c2d4a146101535780630af968001461014a5780630dca69f9146101415780631057ec4014610138578063217826701461012f57806323b161b9146101265780632b51132c1461011d5780633b561afc14610114578063440ab7451461010b5780638b139a4814610102578063b670ed52146100f9578063bc38d542146100f0578063bd138ffc146100e7578063e9330856146100de578063e9b7c367146100d55763f59c97ec146100cd57600080fd5b61000e6113b2565b5061000e6112bf565b5061000e6111df565b5061000e6110ee565b5061000e610f52565b5061000e610e1b565b5061000e610cc5565b5061000e610c13565b5061000e610b02565b5061000e6109b6565b5061000e6107cd565b5061000e61067b565b5061000e6104fd565b5061000e610367565b5061000e61026c565b5061000e610182565b6004359063ffffffff8216820361000e57565b6024359063ffffffff8216820361000e57565b503461000e57602060031936011261000e5763ffffffff60036101bc6101a661015c565b63ffffffff166000526064602052604060002090565b0160405190631e2eaeaf60e01b825260048201526020816024816001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000165afa90811561025f575b600091610231575b5060405160b09190911c9190911663ffffffff168152602090f35b0390f35b610252915060203d8111610258575b61024a818361153f565b810190611a37565b38610212565b503d610240565b610267611846565b61020a565b503461000e57600060031936011261000e5760206040516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168152f35b9260e061035791610180969399989794996101a087019a6001600160a01b03809216885216602087015261ffff8082511660408801528060208301511660608801526040820151166080870152610313606082015160a088019061ffff169052565b608081015161ffff1660c087015260a081015161ffff168683015260c081015167ffffffffffffffff16610100870152015167ffffffffffffffff16610120850152565b6101408301526101608201520152565b503461000e576000806003193601126104fa57610382611562565b5061038b611562565b50610413816103986115e7565b60676103a382611700565b5260686103af8261171a565b5260696103bb8261172b565b52606a6103c78261173c565b52606b6103d38261174d565b52606c6103df8261175e565b52604051809381927fdbd035ff0000000000000000000000000000000000000000000000000000000083526004830161180b565b03816001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000165afa9182156104ed575b80926104ca575b8261047961046d61046083611700565b516001600160a01b031690565b6001600160a01b031690565b61022d61048b61046d6104608561171a565b9261049e6104988261172b565b51611853565b906104a88161173c565b516104bc6104b58361174d565b519261175e565b5192604051968796876102b1565b6104e692503d8091833e6104de818361153f565b810190611791565b3880610450565b6104f5611846565b610449565b80fd5b503461000e57602060031936011261000e57610558600061051c61015c565b6003610540610529611621565b9263ffffffff166000526064602052604060002090565b6001810161054d84611700565b52016103df8261171a565b03816001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000165afa908115610601575b6000916105e8575b506105c563ffffffff6105b76105b161046d61046086611700565b9361171a565b5160301c1663ffffffff1690565b604080516001600160a01b0393909316835263ffffffff91909116602083015290f35b6105fb913d8091833e6104de818361153f565b38610596565b610609611846565b61058e565b90815180825260208080930193019160005b82811061062e575050505090565b83518051600290810b875290830151900b8583015260409094019392810192600101610620565b90926080926106789594835260208301526040820152816060820152019061060e565b90565b503461000e57604060031936011261000e5761070760006106cb61069d61016f565b6106b360043560005260d3602052604060002090565b63ffffffff6002921660005201602052604060002090565b60036106d561165c565b91806106e084611700565b52600181016106ee8461171a565b52600281016106fc8461172b565b52016103df8261173c565b03816001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000165afa9081156107a0575b600091610787575b5061074f81611700565b5161022d61075c8361171a565b519261077a61077461076d8361172b565b519261173c565b51611c5c565b9060405194859485610655565b61079a913d8091833e6104de818361153f565b38610745565b6107a8611846565b61073d565b604435908160020b820361000e57565b606435908160020b820361000e57565b503461000e57608060031936011261000e57610897600061083f6107ef61016f565b6107f76107ad565b6108196108026107bd565b926106b360043560005260d3602052604060002090565b9065ffffffffffff9062ffffff600494169060181b011660005201602052604060002090565b60056108496115e7565b918061085484611700565b52600181016108628461171a565b52600281016108708461172b565b526003810161087e8461173c565b526004810161088c8461174d565b52016103df8261175e565b03816001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000165afa9081156109a9575b600091610990575b506108e86108e282611700565b51611af9565b805160b881901c90915260ff81169061022d9060381c6fffffffffffffffffffffffffffffffff169261091a8161171a565b51906109258161172b565b5161092f8261173c565b519061094461093d8461174d565b519361175e565b5193604051978897889390979695926fffffffffffffffffffffffffffffffff60c0969360ff60e088019b16875216602086015260408501526060840152608083015260a08201520152565b6109a3913d8091833e6104de818361153f565b386108d5565b6109b1611846565b6108cd565b503461000e57604060031936011261000e5761022d6109fe6109d661016f565b60043560005260d3602052604060002063ffffffff6069921660005201602052604060002090565b60405190631e2eaeaf60e01b825260048201526020816024816001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000165afa908115610a82575b600091610a64575b506040519081529081906020820190565b610a7c915060203d81116102585761024a818361153f565b38610a53565b610a8a611846565b610a4b565b90815180825260208080930193019160005b828110610aaf575050505090565b835163ffffffff1685529381019392810192600101610aa1565b9261067894926001600160a01b03610af4931685526020850152608060408501526080840190610a8f565b916060818403910152610a8f565b503461000e57602060031936011261000e57610b5f6000610b2161165c565b6001610b3960043560005260d3602052604060002090565b80610b4384611700565b5260038101610b518461171a565b52606881016106fc8461172b565b03816001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000165afa908115610c06575b600091610bed575b50610bb461046d610bad83611700565b5160601c90565b61022d610bc08361171a565b5192610be0610bd4610bda610bd48461172b565b51611b4b565b9261173c565b9060405194859485610ac9565b610c00913d8091833e6104de818361153f565b38610b9d565b610c0e611846565b610b95565b503461000e57602060031936011261000e5761022d610c336101a661015c565b60405190631e2eaeaf60e01b825260048201526020816024816001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000165afa908115610cb8575b600091610c9a575b50604051901581529081906020820190565b610cb2915060203d81116102585761024a818361153f565b38610c88565b610cc0611846565b610c80565b503461000e57602060031936011261000e5761022d6001610ce76101a661015c565b0160405190631e2eaeaf60e01b825260048201526020816024816001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000165afa908115610d76575b600091610d58575b506040516001600160a01b0390911681529081906020820190565b610d70915060203d81116102585761024a818361153f565b38610d3d565b610d7e611846565b610d35565b610e19909291926060806101408301956001600160a01b03808251168552806020830151166020860152604082015116604085015201519101906001600160a01b0360c0809261ffff808251168652806020830151166020870152604082015116604086015263ffffffff606082015116606086015260808101511515608086015260a0810151151560a0860152015116910152565b565b503461000e57602060031936011261000e5761022d610e3861015c565b610e40611941565b50610f1b610f15610e6e60006106cb610e57611941565b9563ffffffff166000526064602052604060002090565b03816001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000165afa908115610f45575b600091610f2c575b50610ecc610ebf61046d61046084611700565b6001600160a01b03168552565b610eee610ede61046d6104608461171a565b6001600160a01b03166020860152565b610f10610f0061046d6104608461172b565b6001600160a01b03166040860152565b61173c565b5161198f565b606082015260405191829182610d83565b610f3f913d8091833e6104de818361153f565b38610eac565b610f4d611846565b610ea4565b503461000e57602060031936011261000e5761022d610f6f61015c565b610f77611a84565b50611019611013610fba6000610f8b611a84565b946001610fb0610f99611621565b9263ffffffff166000526065602052604060002090565b8061054d84611700565b03816001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000165afa908115611079575b600091611060575b5061100e610ebf61046d61046d61046085611700565b61171a565b51611aa0565b60208281019182526040805193516001600160a01b03908116855292518051909316848301529082015163ffffffff16838201520151151560608201529081906080820190565b611073913d8091833e6104de818361153f565b38610ff8565b611081611846565b610ff0565b610e199092919260e08101936001600160a01b0360c0809261ffff808251168652806020830151166020870152604082015116604086015263ffffffff606082015116606086015260808101511515608086015260a0810151151560a0860152015116910152565b503461000e57602060031936011261000e5761022d611197600361113b61111361015c565b61111b6118ea565b506111246118ea565b5063ffffffff166000526064602052604060002090565b0160405190631e2eaeaf60e01b825260048201526020816024816001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000165afa9081156111c1575b6000916111a3575b5061198f565b60405191829182611086565b6111bb915060203d81116102585761024a818361153f565b38611191565b6111c9611846565b611189565b90602061067892818152019061060e565b503461000e57604060031936011261000e5761022d611288600361122c61120461016f565b60043560005260d3602052604060002063ffffffff6002921660005201602052604060002090565b0160405190631e2eaeaf60e01b825260048201526020816024816001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000165afa9081156112b2575b600091611294575b50611c5c565b604051918291826111ce565b6112ac915060203d81116102585761024a818361153f565b38611282565b6112ba611846565b61127a565b503461000e57604060031936011261000e5761130f60006112e161069d61016f565b60026112eb611696565b91806112f684611700565b52600181016113048461171a565b52016103df8261172b565b03816001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000165afa9081156113a5575b60009161138c575b5061135781611700565b5161022d61136e6113678461171a565b519361172b565b51604051938493846040919493926060820195825260208201520152565b61139f913d8091833e6104de818361153f565b3861134d565b6113ad611846565b611345565b503461000e57604060031936011261000e5761143060006113d161016f565b6114276113dc611621565b91600435845260d3602052611407816040862063ffffffff6069921660005201602052604060002090565b61141084611700565b5263ffffffff166000526065602052604060002090565b6103df8261171a565b03816001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000165afa9081156114bd575b6000916114a4575b5061148861046d61046061148184611700565b519361171a565b604080516001600160a01b039290921682526020820192909252f35b6114b7913d8091833e6104de818361153f565b3861146e565b6114c5611846565b611466565b507f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040810190811067ffffffffffffffff82111761151657604052565b61151e6114ca565b604052565b6020810190811067ffffffffffffffff82111761151657604052565b90601f601f19910116810190811067ffffffffffffffff82111761151657604052565b60405190610100820182811067ffffffffffffffff8211176115b3575b6040528160e06000918281528260208201528260408201528260608201528260808201528260a08201528260c08201520152565b6115bb6114ca565b61157f565b60209067ffffffffffffffff81116115da575b60051b0190565b6115e26114ca565b6115d3565b6040519060e0820182811067ffffffffffffffff821117611614575b6040526006825260c0366020840137565b61161c6114ca565b611603565b604051906060820182811067ffffffffffffffff82111761164f575b60405260028252604082602036910137565b6116576114ca565b61163d565b6040519060a0820182811067ffffffffffffffff821117611689575b604052600482526080366020840137565b6116916114ca565b611678565b604051906080820182811067ffffffffffffffff8211176116c3575b604052600382526060366020840137565b6116cb6114ca565b6116b2565b507f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60209080511561170e570190565b6117166116d0565b0190565b60409080516001101561170e570190565b60609080516002101561170e570190565b60809080516003101561170e570190565b60a09080516004101561170e570190565b60c09080516005101561170e570190565b6020918151811015611784575b60051b010190565b61178c6116d0565b61177c565b602090818184031261000e5780519067ffffffffffffffff821161000e57019180601f8401121561000e5782516117c7816115c0565b936117d5604051958661153f565b818552838086019260051b82010192831161000e578301905b8282106117fc575050505090565b815181529083019083016117ee565b6020908160408183019282815285518094520193019160005b828110611832575050505090565b835185529381019392810192600101611824565b506040513d6000823e3d90fd5b9061186561185f611562565b92611af9565b8051601081811c835261ffff9182168552825180821c845282166020860152825180821c84528216604080870191909152835180831c855283166060870152835180831c85528316608087015283519182901c8452911660a0850152815180821c835267ffffffffffffffff90811660c086015282519182901c9092521660e0830152565b6040519060e0820182811067ffffffffffffffff821117611934575b6040528160c06000918281528260208201528260408201528260608201528260808201528260a08201520152565b61193c6114ca565b611906565b604051906080820182811067ffffffffffffffff821117611982575b60405281600081526000602082015260006040820152606061197d6118ea565b910152565b61198a6114ca565b61195d565b906001600160a01b03611a2f6119ac6119a66118ea565b94611af9565b8051601081811c835261ffff9182168752825180821c8452821660208089019190915283519182901c84529116604087015281519081901c825263ffffffff1660608601528051600881811c835260ff9182161515608088015282519081901c835216151560a08087019190915281519081901c9091526001600160a01b031690565b1660c0830152565b9081602091031261000e575190565b604051906060820182811067ffffffffffffffff821117611a77575b60405260006040838281528260208201520152565b611a7f6114ca565b611a62565b60405190611a91826114fa565b8160008152602061197d611a46565b90611af0611ab5611aaf611a46565b93611af9565b805160a081901c82526001600160a01b031684528051602081811c835263ffffffff909116908501528051600881901c90915260ff16151590565b15156040830152565b6000604051611b0781611523565b5260405190611b1582611523565b815290565b90611b24826115c0565b611b31604051918261153f565b828152601f19611b4182946115c0565b0190602036910137565b9060089182835b611bb1575b611b62848203611b1a565b9384905b828110611b735750505050565b611bac600591611ba163ffffffff82851b946001840195868a821b921b61010003011c16916007038561176f565b9063ffffffff169052565b611b66565b927fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff810190600582811b8285821b921b61010003011c15611bf457509283611b52565b939050611b57565b90611c06826115c0565b604090611c158251918261153f565b838152601f19611c2582956115c0565b0191600090815b848110611c3a575050505050565b6020908251611c48816114fa565b848152828581830152828701015201611c2c565b9060059182835b611ce8575b611c73848203611bfc565b935b818110611c8157505050565b611ce3611cd36020611cd9603094611cb965ffffffffffff8783029760018401988b816010011b918a0261010003011c168060181c91565b94909160040391611cca838d61176f565b519060020b9052565b8961176f565b51019060020b9052565b611c75565b927fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff810190603080830284811b91830261010003011c15611d2b57509283611c63565b939050611c6856fea2646970667358221220d36c0975230e1cf379a16a08e122d0b830ada5f0ec165fbddd6c5fec9683efcc64736f6c634300080e0033';

type ClearingHouseLensConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ClearingHouseLensConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ClearingHouseLens__factory extends ContractFactory {
  constructor(...args: ClearingHouseLensConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _clearingHouse: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ClearingHouseLens> {
    return super.deploy(
      _clearingHouse,
      overrides || {}
    ) as Promise<ClearingHouseLens>;
  }
  override getDeployTransaction(
    _clearingHouse: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_clearingHouse, overrides || {});
  }
  override attach(address: string): ClearingHouseLens {
    return super.attach(address) as ClearingHouseLens;
  }
  override connect(signer: Signer): ClearingHouseLens__factory {
    return super.connect(signer) as ClearingHouseLens__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ClearingHouseLensInterface {
    return new utils.Interface(_abi) as ClearingHouseLensInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ClearingHouseLens {
    return new Contract(address, _abi, signerOrProvider) as ClearingHouseLens;
  }
}
