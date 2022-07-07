/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type {
  SimulateSwapTest,
  SimulateSwapTestInterface,
} from '../../../contracts/test/SimulateSwapTest';

const _abi = [
  {
    inputs: [
      {
        internalType: 'contract IUniswapV3Pool',
        name: 'vPool_',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [
      {
        internalType: 'uint160',
        name: 'sqrtPriceLimitX96',
        type: 'uint160',
      },
    ],
    name: 'InvalidSqrtPriceLimit',
    type: 'error',
  },
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
    inputs: [],
    name: 'ZeroAmount',
    type: 'error',
  },
  {
    inputs: [],
    name: 'clearSwapSteps',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'extendedFeeGrowthOutsideX128',
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
    name: 'fpGlobal',
    outputs: [
      {
        internalType: 'int256',
        name: 'sumAX128',
        type: 'int256',
      },
      {
        internalType: 'int256',
        name: 'sumBX128',
        type: 'int256',
      },
      {
        internalType: 'int256',
        name: 'sumFpX128',
        type: 'int256',
      },
      {
        internalType: 'uint48',
        name: 'timestampLast',
        type: 'uint48',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bool',
        name: 'zeroForOne',
        type: 'bool',
      },
      {
        internalType: 'int256',
        name: 'amountSpecified',
        type: 'int256',
      },
      {
        internalType: 'uint160',
        name: 'sqrtPriceLimitX96',
        type: 'uint160',
      },
    ],
    name: 'simulateSwap1',
    outputs: [
      {
        internalType: 'int256',
        name: 'amount0',
        type: 'int256',
      },
      {
        internalType: 'int256',
        name: 'amount1',
        type: 'int256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bool',
        name: 'zeroForOne',
        type: 'bool',
      },
      {
        internalType: 'int256',
        name: 'amountSpecified',
        type: 'int256',
      },
      {
        internalType: 'uint160',
        name: 'sqrtPriceLimitX96',
        type: 'uint160',
      },
    ],
    name: 'simulateSwap2',
    outputs: [
      {
        internalType: 'int256',
        name: 'amount0',
        type: 'int256',
      },
      {
        internalType: 'int256',
        name: 'amount1',
        type: 'int256',
      },
      {
        components: [
          {
            internalType: 'uint160',
            name: 'sqrtPriceX96Start',
            type: 'uint160',
          },
          {
            internalType: 'int24',
            name: 'tickStart',
            type: 'int24',
          },
          {
            internalType: 'uint8',
            name: 'feeProtocol',
            type: 'uint8',
          },
          {
            internalType: 'uint128',
            name: 'liquidityStart',
            type: 'uint128',
          },
          {
            internalType: 'int24',
            name: 'tickSpacing',
            type: 'int24',
          },
          {
            internalType: 'uint24',
            name: 'fee',
            type: 'uint24',
          },
          {
            internalType: 'uint256',
            name: 'value1',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'value2',
            type: 'uint256',
          },
        ],
        internalType: 'struct SimulateSwap.Cache',
        name: 'cache',
        type: 'tuple',
      },
      {
        components: [
          {
            components: [
              {
                internalType: 'int256',
                name: 'amountSpecifiedRemaining',
                type: 'int256',
              },
              {
                internalType: 'int256',
                name: 'amountCalculated',
                type: 'int256',
              },
              {
                internalType: 'uint160',
                name: 'sqrtPriceX96',
                type: 'uint160',
              },
              {
                internalType: 'int24',
                name: 'tick',
                type: 'int24',
              },
              {
                internalType: 'uint256',
                name: 'feeGrowthGlobalIncreaseX128',
                type: 'uint256',
              },
              {
                internalType: 'uint128',
                name: 'protocolFee',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'liquidity',
                type: 'uint128',
              },
            ],
            internalType: 'struct SimulateSwap.State',
            name: 'state',
            type: 'tuple',
          },
          {
            components: [
              {
                internalType: 'uint160',
                name: 'sqrtPriceStartX96',
                type: 'uint160',
              },
              {
                internalType: 'int24',
                name: 'tickNext',
                type: 'int24',
              },
              {
                internalType: 'bool',
                name: 'initialized',
                type: 'bool',
              },
              {
                internalType: 'uint160',
                name: 'sqrtPriceNextX96',
                type: 'uint160',
              },
              {
                internalType: 'uint256',
                name: 'amountIn',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'amountOut',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'feeAmount',
                type: 'uint256',
              },
            ],
            internalType: 'struct SimulateSwap.Step',
            name: 'step',
            type: 'tuple',
          },
        ],
        internalType: 'struct SimulateSwapTest.SwapStep[]',
        name: 'steps',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bool',
        name: 'swapVTokenForVQuote',
        type: 'bool',
      },
      {
        internalType: 'int256',
        name: 'amountSpecified',
        type: 'int256',
      },
      {
        internalType: 'uint24',
        name: 'fee',
        type: 'uint24',
      },
    ],
    name: 'simulateSwap3',
    outputs: [
      {
        internalType: 'int256',
        name: 'vTokenIn',
        type: 'int256',
      },
      {
        internalType: 'int256',
        name: 'vQuoteIn',
        type: 'int256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'sqrtPrice',
    outputs: [
      {
        internalType: 'uint160',
        name: 'sq',
        type: 'uint160',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bool',
        name: 'zeroForOne',
        type: 'bool',
      },
      {
        internalType: 'int256',
        name: 'amountSpecified',
        type: 'int256',
      },
      {
        internalType: 'uint160',
        name: 'sqrtPriceLimitX96',
        type: 'uint160',
      },
    ],
    name: 'swap',
    outputs: [
      {
        internalType: 'int256',
        name: 'amount0',
        type: 'int256',
      },
      {
        internalType: 'int256',
        name: 'amount1',
        type: 'int256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'int24',
        name: '',
        type: 'int24',
      },
    ],
    name: 'ticksExtended',
    outputs: [
      {
        internalType: 'int256',
        name: 'sumALastX128',
        type: 'int256',
      },
      {
        internalType: 'int256',
        name: 'sumBOutsideX128',
        type: 'int256',
      },
      {
        internalType: 'int256',
        name: 'sumFpOutsideX128',
        type: 'int256',
      },
      {
        internalType: 'uint256',
        name: 'sumFeeOutsideX128',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'int256',
        name: 'amount0Delta',
        type: 'int256',
      },
      {
        internalType: 'int256',
        name: 'amount1Delta',
        type: 'int256',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'uniswapV3SwapCallback',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

const _bytecode =
  '0x6080346200008357601f6200373138819003918201601f19168301916001600160401b0383118484101762000088578084926020946040528339810103126200008357516001600160a01b03811681036200008357600080546001600160a01b0319166001600160a01b0390921691909117905560405161369290816200009f8239f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe6080604081815260048036101561001557600080fd5b6000803560e01c9384631274ddd2146100e457505050508063195cd92c146100db57806322d03d6d146100d257806348aaa8c0146100c95780636c544335146100c0578063769042d5146100b7578063b83d2683146100ae578063bf0f9789146100a5578063d750ba341461009c5763fa461e3314610094575b600080fd5b61008f6108fc565b5061008f610823565b5061008f61070d565b5061008f610652565b5061008f610608565b5061008f6105c8565b5061008f61056d565b5061008f610543565b5061008f610447565b34610269576101296100f536610288565b96919290610101610b15565b506001600160a01b03978887541691610118610add565b50610121610b15565b958693610e2f565b5095909460019788549267ffffffffffffffff841161025c575b9184519660209260059161015b8588851b018b610a19565b868a52848a01958d85527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf694965b8888106101a6578d8d6101a28e8e8e51948594856103a9565b0390f35b600a8f918890888d61023d89610222898451956101c2876109b8565b6101fb8651966101d1886109e1565b825488528c8301548b8901526002808401549687169189019190915260a095861c900b6060880152565b6003810154868e015201546fffffffffffffffffffffffffffffffff811692850192909252565b891c6fffffffffffffffffffffffffffffffff1660c0830152565b815261024a898b01612d7c565b83820152815201960197019694610189565b610264610958565b610143565b5080fd5b8015150361008f57565b6001600160a01b0381160361008f57565b600319606091011261008f576004356102a08161026d565b90602435906044356102b181610277565b90565b90815180825260208080930193019160005b8281106102d4575050505090565b90919293826101c060019261039d838951805180518552828101518386015260406001600160a01b0381830151169086015260608082015160020b90860152608080820151908601526fffffffffffffffffffffffffffffffff60a08181840151169087015260c0809201511690850152015160e083019060c080916001600160a01b03808251168552602082015160020b602086015260408201511515604086015260608201511660608501526080810151608085015260a081015160a08501520151910152565b019501939291016102c6565b91926102b1949360e092845260208401526001600160a01b038151166040840152602081015160020b606084015260ff6040820151166080840152610407606082015160a08501906fffffffffffffffffffffffffffffffff169052565b608081015160020b60c084015260a081015162ffffff168383015260c08101516101008401520151610120820152610160908161014082015201906102b4565b503461008f57600061045836610288565b6001600160a01b039291838554169060409586946104d9865133602082015260208152610484816109b8565b8751988997889687957f128acb0800000000000000000000000000000000000000000000000000000000875233600488015215156024870152604486015216606484015260a0608484015260a4830190612f40565b03925af1918215610536575b6000918293610501575b50519081526020810191909152604090f35b816105279294506101a293503d851161052f575b61051f8183610a19565b810190612f2a565b9290916104ef565b503d610515565b61053e610ac3565b6104e5565b503461008f57600060031936011261008f576020600654604051908152f35b8060020b0361008f57565b503461008f57602060031936011261008f5760043561058b81610562565b60020b6000526007602052608060406000208054906001810154906003600282015491015491604051938452602084015260408301526060820152f35b503461008f57600060031936011261008f57608060025460035460045465ffffffffffff6005541691604051938452602084015260408301526060820152f35b503461008f5761063f61061a36610288565b906001600160a01b036000541692610630610add565b50610639610b15565b93610e2f565b5060408051928352602083019190915290f35b503461008f57600060031936011261008f57602060046001600160a01b0360e08160005416604051938480927f3850c7bd0000000000000000000000000000000000000000000000000000000082525afa9182156106f3575b6000926106bd575b5060405191168152f35b6106df91925060e03d81116106ec575b6106d78183610a19565b810190610a58565b50505050505090386106b3565b503d6106cd565b6106fb610ac3565b6106ab565b62ffffff81160361008f57565b503461008f57606060031936011261008f5761063f60043561072e8161026d565b6044359061073b82610700565b610754610746610b15565b62ffffff90931660a0840152565b6000546001600160a01b03166107b66040517fd0c93a7c0000000000000000000000000000000000000000000000000000000081526020816004816001600160a01b0387165afa908115610816575b6000916107e8575b5060020b6080850152565b81156107cd576401000276a4915b60243591610e2f565b73fffd8963efd1fc6a506488495d951d5263988d25916107c4565b610809915060203d811161080f575b6108018183610a19565b810190610bb9565b386107ab565b503d6107f7565b61081e610ac3565b6107a3565b503461008f576000806003193601126108f9576001805482825580610849575b82604051f35b7f1999999999999999999999999999999999999999999999999999999999999999811182166108ec575b600a917fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf69183028201915b8281106108ac575050610843565b808585925585838201558560028201558560038201558560048201558560058201558560068201558560078201558560088201558560098201550161089e565b6108f4610988565b610873565b80fd5b503461008f57606060031936011261008f5760443567ffffffffffffffff80821161008f573660238301121561008f57816004013590811161008f57366024828401011161008f5760246109569201602435600435612fbb565b005b507f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b507f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6040810190811067ffffffffffffffff8211176109d457604052565b6109dc610958565b604052565b60e0810190811067ffffffffffffffff8211176109d457604052565b60a0810190811067ffffffffffffffff8211176109d457604052565b90601f601f19910116810190811067ffffffffffffffff8211176109d457604052565b519061ffff8216820361008f57565b5190610a568261026d565b565b908160e091031261008f578051610a6e81610277565b916020820151610a7d81610562565b91610a8a60408201610a3c565b91610a9760608301610a3c565b91610aa460808201610a3c565b9160a082015160ff8116810361008f5760c0909201516102b18161026d565b506040513d6000823e3d90fd5b60405190610a56826109e1565b60405190610aea826109e1565b8160c06000918281528260208201528260408201528260608201528260808201528260a08201520152565b60405190610100820182811067ffffffffffffffff821117610b66575b6040528160e06000918281528260208201528260408201528260608201528260808201528260a08201528260c08201520152565b610b6e610958565b610b32565b51906fffffffffffffffffffffffffffffffff8216820361008f57565b9081602091031261008f576102b190610b73565b9081602091031261008f57516102b181610700565b9081602091031261008f57516102b181610562565b60008112817f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038313811516610c39575b817f800000000000000000000000000000000000000000000000000000000000000003831216610c2d570190565b610c35610988565b0190565b610c41610988565b610bff565b81198111610c2d570190565b60008212827f8000000000000000000000000000000000000000000000000000000000000000018212811516610cbd575b827f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01821316610cb1570390565b610cb9610988565b0390565b610cc5610988565b610c83565b91908261010091031261008f57610ce082610b73565b91602081015180600f0b810361008f579160408201519160608101519160808201518060060b810361008f579160a0810151610d1b81610277565b9160c082015163ffffffff8116810361008f5760e06102b1919301610a4b565b600f0b7fffffffffffffffffffffffffffffffff800000000000000000000000000000008114610d6c575b60000390565b610d74610988565b610d66565b906fffffffffffffffffffffffffffffffff8080931691168092038111610c2d570190565b6fffffffffffffffffffffffffffffffff9182169116818110610cb1570390565b6000199060020b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8000018112600116610c2d570190565b60020b9060020b906000821282627fffff19018212811516610e22575b82627fffff01821316610cb1570390565b610e2a610988565b610e11565b91949394929092610e3e610add565b5080156117e9576001600160a01b03610e5e87516001600160a01b031690565b161561172f575b60608601946fffffffffffffffffffffffffffffffff610e9587516fffffffffffffffffffffffffffffffff1690565b161561168d575b608087015160020b15611573575b841561152657610ed0610ec488516001600160a01b031690565b6001600160a01b031690565b6001600160a01b038416908111908115611517575b505b6114d957610f84610eff88516001600160a01b031690565b96610f5d610f2b610f1460208c015160020b90565b92516fffffffffffffffffffffffffffffffff1690565b91610f53610f37610ad0565b878152600060208201526001600160a01b03909b1660408c0152565b60020b60608a0152565b60006080890181905260a08901526fffffffffffffffffffffffffffffffff1660c0880152565b855b86511515806114bf575b15611480578661100d611003610ff9898c610fe96080610fe06060610fb3610add565b99610fd8610fcb60408301516001600160a01b031690565b6001600160a01b03168c52565b015160020b90565b92015160020b90565b906001600160a01b038c16612889565b1515604085015290565b60020b6020830152565b602081015160020b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2761881121561146857507ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2761860208201525b61108e61107e611079602084015160020b90565b611ffc565b6001600160a01b03166060830152565b6111296111006110a860408b01516001600160a01b031690565b89156114505760608401516001600160a01b038981169116105b15611435578b8b895b6110fa60a06110ed60c08501516fffffffffffffffffffffffffffffffff1690565b935194015162ffffff1690565b93611a00565b60c0860190815260a08601918252608086019283526001600160a01b0390931660408d01529192565b60008713156113f7579061115561114e61114961116c9451865190610c46565b6119d5565b8c51610c52565b8b5261116660208c015191516119d5565b90610c52565b60208a01525b6111a761119260c08b01516fffffffffffffffffffffffffffffffff1690565b6fffffffffffffffffffffffffffffffff1690565b90816113d3575b50506111ba818961339c565b60408801516001600160a01b0316906111e0610ec460608301516001600160a01b031690565b6001600160a01b0383169081036113a1575060408101516112219250611232575b871561122657602001516112179060020b610dbf565b60020b6060890152565b610f86565b6020015160020b611217565b61130c8989611294611248602086015160020b90565b604051907ff30dba93000000000000000000000000000000000000000000000000000000008252818d816001600160a01b038161010097889660048301919091602081019260020b9052565b0392165afa918215611394575b60009261135f575b5050809161134f575b50600081600f0b12600014611311576112ed6111926112e760c06112f39501516fffffffffffffffffffffffffffffffff1690565b92610d3b565b90610d9e565b6fffffffffffffffffffffffffffffffff1660c08b0152565b611201565b61133160c061134a9301516fffffffffffffffffffffffffffffffff1690565b906fffffffffffffffffffffffffffffffff1690610d79565b6112f3565b6113599150610d3b565b386112b2565b61137e9250803d1061138d575b6113768183610a19565b810190610cca565b505050505050905038806112a9565b503d61136c565b61139c610ac3565b6112a1565b90516113b5906001600160a01b0316610ec4565b036113c1575b50610f86565b6112176113cd916123a3565b386113bb565b6113eb916113e1915161181a565b60808a0151610c46565b608089015238806111ae565b61140e61140761142b93516119d5565b8c51610bce565b8b5261142561114960208d01519251855190610c46565b90610bce565b60208a0152611172565b8b8b61144b60608701516001600160a01b031690565b6110cb565b60608401516001600160a01b038981169116116110c2565b620d89e8121561106557620d89e86020820152611065565b9492509550915060008213901515146000146114ab576114a4602091845190610c52565b9201519192565b602083015192516114bb91610c52565b9192565b5060408701516001600160a01b0385811691161415610f90565b6040517f51b516ae0000000000000000000000000000000000000000000000000000000081526001600160a01b0384166004820152602490fd5b0390fd5b6401000276a391501038610ee5565b61153a610ec488516001600160a01b031690565b6001600160a01b038416908110908115611555575b50610ee7565b73fffd8963efd1fc6a506488495d951d5263988d269150113861154f565b61161f6115d760046001600160a01b038716604051907fddca3f43000000000000000000000000000000000000000000000000000000008252602093828d8682878297875afa918215611680575b60009261164e575b5060a0019062ffffff169052565b604051928380927fd0c93a7c0000000000000000000000000000000000000000000000000000000082525afa918215611641575b600092611624575b505060020b6080890152565b610eaa565b61163a9250803d1061080f576108018183610a19565b3880611613565b611649610ac3565b61160b565b60a091925061167290863d8811611679575b61166a8183610a19565b810190610ba4565b91906115c9565b503d611660565b611688610ac3565b6115c1565b6116ef6040517f1a6865020000000000000000000000000000000000000000000000000000000081526020816004816001600160a01b038a165afa908115611722575b6000916116f4575b506fffffffffffffffffffffffffffffffff168752565b610e9c565b611715915060203d811161171b575b61170d8183610a19565b810190610b90565b386116d8565b503d611703565b61172a610ac3565b6116d0565b6117a46040517f3850c7bd00000000000000000000000000000000000000000000000000000000815260e0816004816001600160a01b0389165afa80156117dc575b600090819082906117a9575b60ff1660408b0152909150611797905b60020b60208a0152565b6001600160a01b03168752565b610e65565b5050506117976117c961178d9260e03d81116106ec576106d78183610a19565b509492505050939091905083925061177d565b6117e4610ac3565b611771565b60046040517f1f2a2005000000000000000000000000000000000000000000000000000000008152fd5b1561008f57565b70010000000000000000000000000000000091600019838309928260801b928380861095039480860395146118a657908291611857868411611813565b0981806000031680920460028082600302188083028203028083028203028083028203028083028203028083028203028092029003029360018380600003040190848311900302920304170290565b505091506118b5821515611813565b0490565b906000198183098183029182808310920391808303921461191757620f4240908282111561008f577fde8f6cefed634549b62c77574f722e1ac57e23f24d8fd5cb790fb65668c26139940990828211900360fa1b910360061c170290565b5050620f424091500490565b6c0100000000000000000000000091600019838309928260601b928380861095039480860395146118a657908291611857868411611813565b60001982820990828102928380841093039280840393146119a1576c01000000000000000000000000918383111561008f570990828211900360a01b910360601c1790565b50505060601c90565b909160001983830992808302928380861095039480860395146118a657908291611857868411611813565b7f800000000000000000000000000000000000000000000000000000000000000081101561008f5790565b949190928594600080806001600160a01b03908189169283838c161015978b8389129b898d15988c8a600014611ba157905084929150611a4a62ffffff8c620f424003168d6118b9565b8115611b8f5783611a5c818786611ef6565b955b868310611b7d57505050509e8f965b8716968789149c600014611b25578c80611b1e575b15611b0f575050505b9b8c9980611b08575b15611af85750505b985b80611aed575b611ae2575b5082611ad7575b505015611abc57500390565b90506102b1915062ffffff8082620f42400316911685611c22565b141590503880611ab0565b859003975038611aa9565b508581038911611aa4565b611b0392508d611f5d565b611a9c565b508b611a94565b611b199350611ef6565b611a8b565b5089611a82565b809392918d80611b76575b15611b67575050505b9c8d9a80611b60575b15611b51575050505b98611a9e565b611b5b9350611e9b565b611b4b565b508c611b42565b611b719350611f98565b611b39565b508a611b30565b611b879450611c5d565b9e8f96611a6d565b83611b9b818588611f98565b95611a5e565b9093859392965081600014611be05783611bbc818386611f5d565b915b9197890391888310611bd657505050509e8f96611a6d565b611b879450611df2565b83611bec818584611e9b565b91611bbe565b507f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b929190611c308282866119aa565b938215611c50575b09611c3f57565b9060001981101561008f5760010190565b611c58611bf2565b611c38565b926001600160a01b039081851691821561008f576fffffffffffffffffffffffffffffffff841691821561008f5760009015611ca057505050506102b192611cf0565b506102b19550611cc0949293509091908111611cc55760601b0490610c46565b611dde565b90611ccf91611923565b90610c46565b8015611ce3575b6000190490565b611ceb611bf2565b611cdc565b91908115611d78577bffffffffffffffffffffffffffffffff0000000000000000000000009060601b16906001600160a01b038093168082028183820414611d60575b509081611d479215611d53575b8304610c46565b80820615159104011690565b611d5b611bf2565b611d40565b8301838110611d33579150611d7492611c22565b1690565b505090565b91908115611d78577bffffffffffffffffffffffffffffffff0000000000000000000000006001600160a01b039160601b16921691828083029283041480611dd5575b1561008f576102b192611cc092820391611c22565b50818111611dc0565b906001600160a01b03821691820361008f57565b919290926001600160a01b039384841693841561008f576fffffffffffffffffffffffffffffffff821693841561008f5715611e8c575060009050848211611e50575060601b908082061515910401905b8181111561008f57031690565b90916c01000000000000000000000000611e6a8285611923565b9309611e78575b5090611e43565b6000198210156108f9575060010138611e71565b91935091506102b19350611d7d565b91906001600160a01b039182821683851611611eee575b82841693841561008f57837bffffffffffffffffffffffffffffffff000000000000000000000000916118b59585169403169160601b166119aa565b929092611eb2565b91906001600160a01b039182821683851611611f55575b82841693841561008f57837bffffffffffffffffffffffffffffffff00000000000000000000000091611f499585169403169160601b16611c22565b90808206151591040190565b929092611f0d565b6102b192916fffffffffffffffffffffffffffffffff916001600160a01b039182811683831611611f92575b0316911661195c565b90611f89565b6c01000000000000000000000000916fffffffffffffffffffffffffffffffff916001600160a01b039182811683831611611ff6575b0316921691611fdd818461195c565b9209611fe65790565b60001981101561008f5760010190565b90611fce565b60020b600081121561239d57806000035b620d89e88111612373576001600160a01b0391600182161561234a5770ffffffffffffffffffffffffffffffffff6ffffcb933bd6fad37aa2d162d1a5940015b16916002811661232e575b60048116612312575b600881166122f6575b601081166122da575b602081166122be575b604081166122a2575b608090818116612287575b610100811661226c575b6102008116612251575b6104008116612236575b610800811661221b575b6110008116612200575b61200081166121e5575b61400081166121ca575b61800081166121af575b620100008116612194575b62020000811661217a575b620400008116612160575b6208000016612145575b50600012612137575b63ffffffff811661212e5760ff60005b169060201c011690565b60ff6001612124565b61214090611cd5565b612114565b6b048a170391f7dc42444e8fa26000929302901c919061210b565b6d2216e584f5fa1ea926041bedfe98909302811c92612101565b926e5d6af8dedb81196699c329225ee60402811c926120f6565b926f09aa508b5b7a84e1c677de54f3e99bc902811c926120eb565b926f31be135f97d08fd981231505542fcfa602811c926120e0565b926f70d869a156d2a1b890bb3df62baf32f702811c926120d6565b926fa9f746462d870fdf8a65dc1f90e061e502811c926120cc565b926fd097f3bdfd2022b8845ad8f792aa582502811c926120c2565b926fe7159475a2c29b7443b29c7fa6e889d902811c926120b8565b926ff3392b0822b70005940c7a398e4b70f302811c926120ae565b926ff987a7253ac413176f2b074cf7815e5402811c926120a4565b926ffcbe86c7900a88aedcffc83b479aa3a402811c9261209a565b926ffe5dee046a99a2a811c461f1969c305302811c92612090565b916fff2ea16466c96a3843ec78b326b528610260801c91612085565b916fff973b41fa98c081472e6896dfb254c00260801c9161207c565b916fffcb9843d60f6159c9db58835c9266440260801c91612073565b916fffe5caca7e10e4e61c3624eaa0941cd00260801c9161206a565b916ffff2e50f5f656932ef12357cf3c7fdcc0260801c91612061565b916ffff97272373d413259a46990580e213a0260801c91612058565b70ffffffffffffffffffffffffffffffffff70010000000000000000000000000000000061204d565b60046040517f2bc80f3a000000000000000000000000000000000000000000000000000000008152fd5b8061200d565b6001600160a01b038116906401000276a3821015806126b3575b156126895777ffffffffffffffffffffffffffffffffffffffff000000009060201b16806fffffffffffffffffffffffffffffffff811160071b9181831c9267ffffffffffffffff841160061b93841c9363ffffffff851160051b94851c9461ffff861160041b95861c60ff9687821160031b91821c92600f841160021b93841c94600160038711811b96871c11961717171717171791608083101560001461267d57507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8182011c5b8002607f928392828493841c81841c1c800280851c81851c1c800280861c81861c1c800280871c81871c1c80029081881c82881c1c80029283891c84891c1c800294858a1c868a1c1c800296878b1c888b1c1c800298898c1c8a8c1c1c80029a8b8d1c8c821c1c8002809d1c8d821c1c8002809e81901c90821c1c80029e8f80911c911c1c800260cd1c6604000000000000169d60cc1c6608000000000000169c60cb1c6610000000000000169b60ca1c6620000000000000169a60c91c6640000000000000169960c81c6680000000000000169860c71c670100000000000000169760c61c670200000000000000169660c51c670400000000000000169560c41c670800000000000000169460c31c671000000000000000169360c21c672000000000000000169260c11c674000000000000000169160c01c67800000000000000016907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff800160401b1717171717171717171717171717693627a301d71055774c85027ffffffffffffffffffffffffffffffffffd709b7e5480fba5a50fed5e62ffc556810160801d60020b906fdb2df09e81959a81455e260799a0632f0160801d60020b91600090838314600014612661575050905090565b61266d610ec485611ffc565b119050612678575090565b905090565b905081607f031b612486565b60046040517f4980e1be000000000000000000000000000000000000000000000000000000008152fd5b5073fffd8963efd1fc6a506488495d951d5263988d2682106123bd565b60020b9060020b908115612700575b6000198214627fffff198214166126f4570590565b6126fc610988565b0590565b612708611bf2565b6126df565b9060020b908115612720575b60020b0790565b612728611bf2565b612719565b6000199060020b627fffff198114610c2d570190565b60019060020b6000811281627fffff03831381151661276f575b81627fffff1903831216610c2d570190565b612777610988565b61275d565b60020b9060020b906000811281627fffff03831381151661276f5781627fffff1903831216610c2d570190565b6000199060018110610c2d570190565b9081602091031261008f575190565b60ff168060ff106127da575b60ff0390565b6127e2610988565b6127d4565b60ff9182169116818110610cb1570390565b60020b9060020b9060008213600082139083627fffff81810485118385161661287c575b6000821292627fffff199484878705851291161661286f575b82600087129505861290851616612862575b058312911616612856570290565b61285e610988565b0290565b61286a610988565b612848565b612877610988565b612836565b612884610988565b61281d565b9291909161289782846126d0565b928260008260020b129182612afe575b5050612aee575b156129dc576128cd8260020b9060ff6101008360081d60010b93071690565b909361292d602060ff8416966128ee6001891b6128e9816127a9565b610c46565b9360405180809581947f5339c29600000000000000000000000000000000000000000000000000000000835260048301919091602081019260010b9052565b03915afa9081156129cf575b6000916129a1575b501680158015959061298d57509261297f61297461296e6129859461296861298a98612b1c565b906127e7565b60ff1690565b62ffffff1660020b90565b90610df4565b6127f9565b91565b612985925061298a94915060020b90610df4565b6129c2915060203d81116129c8575b6129ba8183610a19565b8101906127b9565b38612941565b503d6129b0565b6129d7610ac3565b612939565b602092612a55612a046129ee85612743565b60020b9060ff6101008360081d60010b93071690565b9590612a15600160ff89161b6127a9565b199360405180809581947f5339c29600000000000000000000000000000000000000000000000000000000835260048301919091602081019260010b9052565b03915afa908115612ae1575b600091612ac3575b5016801580159490612aa35790612a9d61297461296e61298594612a98612a9261298a99612743565b95612c0a565b6127e7565b9061277c565b6129859150612a9d61297461296e612abd61298a97612743565b936127c8565b612adb915060203d81116129c8576129ba8183610a19565b38612a69565b612ae9610ac3565b612a61565b91612af89061272d565b916128ae565b612b13925090612b0d9161270d565b60020b90565b151582386128a7565b90600091612b2b811515611813565b700100000000000000000000000000000000811015612bff575b80680100000000000000006002921015612bf0575b640100000000811015612be1575b62010000811015612bd2575b610100811015612bc3575b6010811015612bb4575b6004811015612ba6575b1015612b9b57565b90600160ff91011690565b92810160ff1692811c612b93565b600493840160ff16931c612b89565b600893840160ff16931c612b7f565b601093840160ff16931c612b74565b602093840160ff16931c612b68565b604093840160ff16931c612b5a565b60809250821c612b45565b90612c16821515611813565b60ff6fffffffffffffffffffffffffffffffff831615612d725750607f5b67ffffffffffffffff831615612d68577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc00160ff165b63ffffffff831615612d5e57601f190160ff165b61ffff831615612d54577ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00160ff165b60ff831615612d4a577ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff80160ff165b600f831615612d40576003190160ff165b6003831615612d345760ff7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe6001920116925b16612d2857565b9060001960ff91011690565b9160019060021c612d21565b9160041c91612cee565b9160081c91612cdd565b9160101c91612cae565b9160201c91612c7e565b9160401c91612c6a565b9160801c91612c34565b90604051612d89816109e1565b60c060048294805460ff6001600160a01b039182811687528060a01c60020b602088015260b81c1615156040860152600182015416606085015260028101546080850152600381015460a08501520154910152565b9060c0600491612e266001600160a01b0382511685906001600160a01b03167fffffffffffffffffffffffff0000000000000000000000000000000000000000825416179055565b612e7a602082015160020b85907fffffffffffffffffff000000ffffffffffffffffffffffffffffffffffffffff82549160a01b76ffffff0000000000000000000000000000000000000000169116179055565b604081015184547fffffffffffffffff00ffffffffffffffffffffffffffffffffffffffffffffff1690151560b81b77ff0000000000000000000000000000000000000000000000161784556060810151612f0f906001600160a01b031660018601906001600160a01b03167fffffffffffffffffffffffff0000000000000000000000000000000000000000825416179055565b6080810151600285015560a081015160038501550151910155565b919082604091031261008f576020825192015190565b91908251928382526000905b848210612f795750601f8460209495601f199311612f6c575b0116010190565b6000858286010152612f65565b90602090818082850101519082860101520190612f4c565b9081602091031261008f57356102b181610277565b9081602091031261008f57516102b181610277565b919091600091612ffa610ec4612fdb610ec486546001600160a01b031690565b926001600160a01b0397612ff28986163314611813565b810190612f91565b918381136130b4575b5050818313613013575b50505050565b6130709361302b610ec484546001600160a01b031690565b926040517fd21220a7000000000000000000000000000000000000000000000000000000008152602081600481885afa9182156130a7575b91613079575b5016613112565b3880808061300d565b61309a915060203d81116130a0575b6130928183610a19565b810190612fa6565b38613069565b503d613088565b6130af610ac3565b613063565b6130fe9183876040517f0dfe1681000000000000000000000000000000000000000000000000000000008152602081600481875afa908115613105575b8891613079575016613112565b3880613003565b61310d610ac3565b6130f1565b6000916131ca949383926040519560208701937f23b872dd0000000000000000000000000000000000000000000000000000000085526001600160a01b03938480921660248a0152166044880152606487015260648652613172866109fd565b16908260405195613182876109b8565b602087527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656460208801526131b8843b151561328f565b51925af16131c46132f4565b90613342565b8051806131d5575050565b816020806131ea93610a5695010191016131ef565b613204565b9081602091031261008f57516102b18161026d565b1561320b57565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152fd5b1561329657565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152fd5b3d1561333d573d9067ffffffffffffffff8211613330575b604051916133246020601f19601f8401160184610a19565b82523d6000602084013e565b613338610958565b61330c565b606090565b9091901561334e575090565b81511561335e5750805190602001fd5b611513906040519182917f08c379a0000000000000000000000000000000000000000000000000000000008352602060048401526024830190612f40565b604051906133a9826109b8565b8152602081019182526001546801000000000000000081101561364f575b600181018060015581101561362057610a5692613618600a7fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cfb9360016000520293518051857fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6015560208101517fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf78601556135127fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf886016134c36001600160a01b0360408501511682906001600160a01b03167fffffffffffffffffffffffff0000000000000000000000000000000000000000825416179055565b606083015160020b7fffffffffffffffffff000000ffffffffffffffffffffffffffffffffffffffff82549160a01b76ffffff0000000000000000000000000000000000000000169116179055565b60808101517fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf98601556135d860c07fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cfa8701926135c161358460a08301516fffffffffffffffffffffffffffffffff1690565b85906fffffffffffffffffffffffffffffffff167fffffffffffffffffffffffffffffffff00000000000000000000000000000000825416179055565b01516fffffffffffffffffffffffffffffffff1690565b6fffffffffffffffffffffffffffffffff7fffffffffffffffffffffffffffffffff0000000000000000000000000000000083549260801b169116179055565b519101612dde565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b613657610958565b6133c756fea2646970667358221220c1133e0b8aa7e618b2849d07015e5e51708280b677b32cf63d07acfa35c4a98564736f6c634300080e0033';

type SimulateSwapTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SimulateSwapTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SimulateSwapTest__factory extends ContractFactory {
  constructor(...args: SimulateSwapTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    vPool_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SimulateSwapTest> {
    return super.deploy(vPool_, overrides || {}) as Promise<SimulateSwapTest>;
  }
  override getDeployTransaction(
    vPool_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(vPool_, overrides || {});
  }
  override attach(address: string): SimulateSwapTest {
    return super.attach(address) as SimulateSwapTest;
  }
  override connect(signer: Signer): SimulateSwapTest__factory {
    return super.connect(signer) as SimulateSwapTest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SimulateSwapTestInterface {
    return new utils.Interface(_abi) as SimulateSwapTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SimulateSwapTest {
    return new Contract(address, _abi, signerOrProvider) as SimulateSwapTest;
  }
}
