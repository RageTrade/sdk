/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type {
  LiquidityPositionTest,
  LiquidityPositionTestInterface,
} from '../../../contracts/test/LiquidityPositionTest';

const _abi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [
      {
        internalType: 'uint160',
        name: 'sqrtPriceX96',
        type: 'uint160',
      },
    ],
    name: 'IllegalSqrtPrice',
    type: 'error',
  },
  {
    inputs: [],
    name: 'LP_AlreadyInitialized',
    type: 'error',
  },
  {
    inputs: [],
    name: 'T',
    type: 'error',
  },
  {
    inputs: [],
    name: 'balanceAdjustments',
    outputs: [
      {
        internalType: 'int256',
        name: 'vQuoteIncrease',
        type: 'int256',
      },
      {
        internalType: 'int256',
        name: 'vTokenIncrease',
        type: 'int256',
      },
      {
        internalType: 'int256',
        name: 'traderPositionIncrease',
        type: 'int256',
      },
    ],
    stateMutability: 'view',
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
    inputs: [
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
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'int128',
        name: 'liquidity',
        type: 'int128',
      },
    ],
    name: 'liquidityChange',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'lp',
    outputs: [
      {
        internalType: 'enum IClearingHouseEnums.LimitOrderType',
        name: 'limitOrderType',
        type: 'uint8',
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
        internalType: 'uint160',
        name: 'sqrtPriceCurrent',
        type: 'uint160',
      },
    ],
    name: 'marketValue',
    outputs: [
      {
        internalType: 'int256',
        name: '',
        type: 'int256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'maxNetPosition',
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
        internalType: 'uint160',
        name: 'sqrtPriceCurrent',
        type: 'uint160',
      },
    ],
    name: 'netPosition',
    outputs: [
      {
        internalType: 'int256',
        name: '',
        type: 'int256',
      },
    ],
    stateMutability: 'view',
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
    name: 'updateCheckpoints',
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
  '0x608060405234801561001057600080fd5b5060405161001d9061005f565b604051809103906000f080158015610039573d6000803e3d6000fd5b5060db80546001600160a01b0319166001600160a01b039290921691909117905561006d565b610a88806200212283390190565b6120a5806200007d6000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80635ea250321161008c5780639d9ba482116100665780639d9ba482146102e0578063ac210cc7146102e8578063c28fd78714610313578063f04af6ec1461032657600080fd5b80635ea25032146101c257806382d9dbaa146101ef5780638ce744261461021f57600080fd5b80632e0cb31a116100c85780632e0cb31a14610133578063313c06a0146101465780633ffe794c146101a757806357595e87146101ba57600080fd5b80631ca45818146100ef5780631f1b95021461010b5780632c83d1341461011e575b600080fd5b6100f8606d5481565b6040519081526020015b60405180910390f35b6100f86101193660046116dc565b610339565b61013161012c366004611708565b61034c565b005b6100f86101413660046116dc565b61035c565b6071546072546073546074546075546076546101929560ff8116956101008204600290810b96600160201b840490910b95600160381b9093046001600160801b03169491939092919089565b60405161010299989796959493929190611763565b6101316101b53660046117c0565b610379565b6101316103be565b606e54606f546070546101d492919083565b60408051938452602084019290925290820152606001610102565b6101316101fd3660046116dc565b600380546001600160a01b0319166001600160a01b0392909216919091179055565b600254600354604080516101008101825260045461ffff808216835262010000820481166020840152600160201b82048116938301939093526601000000000000810483166060830152600160401b810483166080830152600160501b810490921660a082015267ffffffffffffffff600160601b8304811660c0830152600160a01b90920490911660e08201526005546006546007546102ce956001600160a01b0390811695169392919086565b604051610102969594939291906117d9565b6100f8610481565b60db546102fb906001600160a01b031681565b6040516001600160a01b039091168152602001610102565b6101316103213660046118a0565b610492565b6101316103343660046118f0565b6104b6565b60006103466071836105d8565b92915050565b61035860718383610601565b5050565b60db546000906103469060719084906001600160a01b0316610659565b600061039461038b60208401846116dc565b63ffffffff1690565b63ffffffff8116600090815260208190526040902090915082906103b88282611978565b50505050565b60db546071546040516328f0d78b60e21b81526101008204600290810b6004830152600160201b90920490910b60248201526000916001600160a01b03169063a3c35e2c90604401608060405180830381865afa158015610423573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104479190611b81565b60408051606081018252606e548152606f5460208201526070549181019190915290915061047e906071906000908190859061077c565b50565b600061048d60716108e6565b905090565b84600461049f8282611bb7565b5050600593909355600691909155600755606d5550565b60db54600080805260209081527fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb780546001600160a01b0319166001600160a01b039093169283179055604080516319c655e360e21b81529051636719578c926004808401939192918290030181865afa158015610538573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061055c9190611d2b565b600080805260208181527fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb680546001600160a01b0319166001600160a01b03949094169390931790925560408051606081018252606e548152606f54938101939093526070549083015261047e91607191908190859082610996565b6000806105e6848483610d25565b5060018501549091506105f99082611d5e565b949350505050565b61060a83610dee565b156106285760405163a0bb33f960e01b815260040160405180910390fd5b825466ffffffffffff00191661010062ffffff9384160266ffffff00000000191617600160201b9190921602179055565b60008080610668868683610d25565b915091506000610680866001600160a01b0316610e14565b9050816106928483600160801b610e85565b61069c9190611d9d565b875460405163154cd3c960e11b81526101008204600290810b6004830152600160201b90920490910b6024820152909450600093506001600160a01b0386169250632a99a7929150604401608060405180830381865afa158015610704573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107289190611b81565b9050610749610744826060015187610ecc90919063ffffffff16565b610f03565b6107539083611d9d565b8151604083015191935061076991879190610f19565b6107739083611d9d565b95945050505050565b8151604083015160009161079291889190610f19565b905080826000018181516107a69190611d9d565b90525060608301516000906107c090610744908990610ecc565b905080836000018181516107d49190611d9d565b9052508351600288810182905560208087015160038b0181905560408089015160048d018190556060808b015160058f018190558e5484516101008204890b8152600160201b90910490970b95870195909552858301899052850195909552608084019190915260a083019390935260c0820152905163ffffffff87169188917fb9b041b729bca1f1535dde5369cddca43b655bbc9dbd3e5878047a06e11a45c79181900360e00190a38654604080516101008304600290810b8252600160201b90930490920b6020830152810182905263ffffffff86169087907f8415d777c210eb5ec128f3ed52b314fc5c06eb3a464c58fa8f06a56aea5e7442906060015b60405180910390a350505050505050565b805460009081906108fe90610100900460020b610f53565b835490915060009061091990600160201b900460020b610f53565b9050600084600101541261095a57836001015461095083838760000160079054906101000a90046001600160801b03166001611275565b6105f99190611dde565b600184015461096b90600019611df5565b845461098c9084908490600160381b90046001600160801b03166001611275565b6105f99190611e7a565b63ffffffff8416600090815260208290526040812060020154819081906001600160a01b031690506109e96040518060800160405280600081526020016000815260200160008152602001600081525090565b600087600f0b1315610ab2578954604051631dce5fcf60e01b81526101008204600290810b6004830152600160201b90920490910b60248201526001600160801b038816604482015260009081906001600160a01b03851690631dce5fcf9060640160c0604051808303816000875af1158015610a6a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a8e9190611e92565b94509092509050610a9e82610f03565b9550610aa981610f03565b94505050610b96565b895460009081906001600160a01b0385169063a34123a7906101008104600290810b91600160201b9004900b610ae78d611ec8565b6040516001600160e01b031960e086901b168152600293840b60048201529190920b60248201526001600160801b03909116604482015260640160c0604051808303816000875af1158015610b40573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b649190611e92565b94509092509050610b7482610f03565b610b7d90611ef7565b9550610b8881610f03565b610b9190611ef7565b945050505b610ba38a8a8a848a61077c565b8286600001818151610bb59190611d5e565b905250602086018051859190610bcc908390611d5e565b90525063ffffffff8816600090815260208690526040812060010154610bfa906001600160a01b0316611335565b9050610c1b8b8b8b8b85610c0d8b611ef7565b610c168b611ef7565b6113a6565b6000610c288c8383610d25565b5060018d0154909150610c3b9082611d5e565b88604001818151610c4c9190611d9d565b9052506000600f8a900b1315610ca9578b5489908d90600790610c80908490600160381b90046001600160801b0316611f13565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610d05565b600089600f0b1215610d0557610cbe89611ec8565b8c548d90600790610ce0908490600160381b90046001600160801b0316611f3e565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505b610d0f8682611d9d565b8c60010181905550505050505050505050505050565b825460009081908190610d3f90610100900460020b610f53565b8654909150600090610d5a90600160201b900460020b610f53565b9050856001600160a01b038084169082161015610d78575081610d95565b816001600160a01b0316876001600160a01b03161115610d955750805b8754610db9906107449083908590600160381b90046001600160801b03168a611275565b9450610de161074484838b60000160079054906101000a90046001600160801b03168a611402565b9350505050935093915050565b8054600090610100900460020b15158061034657505054600160201b900460020b151590565b60006401000276a36001600160a01b0383161080610e4f575073fffd8963efd1fc6a506488495d951d5263988d266001600160a01b03831610155b15610e7c57604051635d236c4560e01b81526001600160a01b038316600482015260240160405180910390fd5b61034682611472565b6000610eae61074460008612610e9b5785610ea7565b610ea786600019611df5565b8585611488565b90506000841215610ec557610ec281611ef7565b90505b9392505050565b81546005830154600091610ec591600160381b9091046001600160801b031690600160801b90610efc9086611dde565b9190611488565b6000600160ff1b8210610f1557600080fd5b5090565b6002830154600384015460048501548554600093610f4a9387938793600160381b90046001600160801b031661153a565b610ec290611ef7565b60008060008360020b12610f6a578260020b610f72565b8260020b6000035b9050620d89e8811115610f98576040516315e4079d60e11b815260040160405180910390fd5b600081600116600003610faf57600160801b610fc1565b6ffffcb933bd6fad37aa2d162d1a5940015b70ffffffffffffffffffffffffffffffffff1690506002821615610ff5576ffff97272373d413259a46990580e213a0260801c5b6004821615611014576ffff2e50f5f656932ef12357cf3c7fdcc0260801c5b6008821615611033576fffe5caca7e10e4e61c3624eaa0941cd00260801c5b6010821615611052576fffcb9843d60f6159c9db58835c9266440260801c5b6020821615611071576fff973b41fa98c081472e6896dfb254c00260801c5b6040821615611090576fff2ea16466c96a3843ec78b326b528610260801c5b60808216156110af576ffe5dee046a99a2a811c461f1969c30530260801c5b6101008216156110cf576ffcbe86c7900a88aedcffc83b479aa3a40260801c5b6102008216156110ef576ff987a7253ac413176f2b074cf7815e540260801c5b61040082161561110f576ff3392b0822b70005940c7a398e4b70f30260801c5b61080082161561112f576fe7159475a2c29b7443b29c7fa6e889d90260801c5b61100082161561114f576fd097f3bdfd2022b8845ad8f792aa58250260801c5b61200082161561116f576fa9f746462d870fdf8a65dc1f90e061e50260801c5b61400082161561118f576f70d869a156d2a1b890bb3df62baf32f70260801c5b6180008216156111af576f31be135f97d08fd981231505542fcfa60260801c5b620100008216156111d0576f09aa508b5b7a84e1c677de54f3e99bc90260801c5b620200008216156111f0576e5d6af8dedb81196699c329225ee6040260801c5b6204000082161561120f576d2216e584f5fa1ea926041bedfe980260801c5b6208000082161561122c576b048a170391f7dc42444e8fa20260801c5b60008460020b131561124d57806000198161124957611249611f66565b0490505b600160201b810615611260576001611263565b60005b60ff16602082901c0192505050919050565b6000836001600160a01b0316856001600160a01b03161115611295579293925b6fffffffffffffffffffffffffffffffff60601b606084901b166001600160a01b0386860381169087166112c857600080fd5b836112fe57866001600160a01b03166112eb8383896001600160a01b0316611488565b816112f8576112f8611f66565b0461132a565b61132a6113158383896001600160a01b0316611562565b886001600160a01b0316808204910615150190565b979650505050505050565b6000816001600160a01b0316633850c7bd6040518163ffffffff1660e01b815260040160e060405180830381865afa158015611375573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113999190611f7c565b5094979650505050505050565b865460405163ffffffff87169188917f90ebe5c3d0a3bbd59fb51797eff156440d75c86a623dddef804547362e66595a916108d5916101008204600290810b92600160201b810490910b918b9160ff16908a908a908d9061201e565b6000836001600160a01b0316856001600160a01b03161115611422579293925b8161144f5761144a836001600160801b03168686036001600160a01b0316600160601b611488565b610773565b610773836001600160801b03168686036001600160a01b0316600160601b611562565b60006103466001600160a01b03831680600160401b5b60008080600019858709858702925082811083820303915050806000036114c157600084116114b657600080fd5b508290049050610ec5565b8084116114cd57600080fd5b6000848688096000868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010186841190950394909402919094039290920491909117919091029150509392505050565b600061132a82600160801b6115518888888d6115a2565b61155b908a611d5e565b91906115c7565b600061156f848484611488565b90506000828061158157611581611f66565b8486091115610ec557600019811061159857600080fd5b6001019392505050565b60006115bd6115b18684611d5e565b8590600160801b611605565b6107739084611d9d565b60006115d4848484610e85565b90506000811280156115f457506115f46115ed85611662565b848461166d565b15610ec557610ec260001982611d9d565b600060018180806116168885611686565b945092506116248785611686565b945091506116328685611686565b94509050611644610744848484611488565b9450836116575761165485611ef7565b94505b505050509392505050565b6000610346826116b0565b600081838509801561167e57600191505b509392505050565b60008060008412156116a55791159161169e84611ef7565b91506116a9565b8391505b5092909150565b6000808213610f15576116c282611ef7565b610346565b6001600160a01b038116811461047e57600080fd5b6000602082840312156116ee57600080fd5b8135610ec5816116c7565b8060020b811461047e57600080fd5b6000806040838503121561171b57600080fd5b8235611726816116f9565b91506020830135611736816116f9565b809150509250929050565b6003811061175f57634e487b7160e01b600052602160045260246000fd5b9052565b6101208101611772828c611741565b8960020b60208301528860020b60408301526001600160801b03881660608301528660808301528560a08301528460c08301528360e0830152826101008301529a9950505050505050505050565b600061014082840312156117d357600080fd5b50919050565b60006101a08201905060018060a01b03808916835280881660208401525061ffff80875116604084015280602088015116606084015280604088015116608084015250606086015161183160a084018261ffff169052565b50608086015161ffff811660c08401525060a086015161ffff811660e08401525060c086015167ffffffffffffffff81166101008401525060e086015167ffffffffffffffff811661012084015250846101408301528361016083015282610180830152979650505050505050565b60008060008060008587036101808112156118ba57600080fd5b610100808212156118ca57600080fd5b969896890135975050506101208701359461014088013594506101608801359350915050565b60006020828403121561190257600080fd5b813580600f0b8114610ec557600080fd5b80546001600160a01b0319166001600160a01b0392909216919091179055565b61ffff8116811461047e57600080fd5b6000813561034681611933565b801515811461047e57600080fd5b6000813561034681611950565b60008135610346816116c7565b8135611983816116c7565b61198d8183611913565b50602082013561199c816116c7565b6119a98160018401611913565b5060408201356119b8816116c7565b6119c58160028401611913565b506003810160608301356119d881611933565b815461ffff191661ffff82161782555060808301356119f681611933565b815463ffff00001916601082901b63ffff0000161782555060a0830135611a1c81611933565b815465ffff000000001916602082901b65ffff00000000161782555060c083013563ffffffff81168114611a4f57600080fd5b815469ffffffff000000000000191660309190911b69ffffffff00000000000016178155611aa0611a8260e0850161195e565b82805460ff60501b191691151560501b60ff60501b16919091179055565b611ace611ab0610100850161195e565b82805460ff60581b191691151560581b60ff60581b16919091179055565b611b08611ade610120850161196b565b82546bffffffffffffffffffffffff1660609190911b6bffffffffffffffffffffffff1916178255565b505050565b600060808284031215611b1f57600080fd5b6040516080810181811067ffffffffffffffff82111715611b5057634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600060808284031215611b9357600080fd5b610ec58383611b0d565b6000813567ffffffffffffffff8116811461034657600080fd5b8135611bc281611933565b815461ffff191661ffff8216178255506020820135611be081611933565b815463ffff00001916601082901b63ffff000016178255506040820135611c0681611933565b815465ffff000000001916602082901b65ffff0000000016178255506060820135611c3081611933565b815467ffff0000000000008260301b1691508167ffff0000000000001982161783556080840135611c6081611933565b69ffff00000000000000008160401b168369ffffffff00000000000019841617178455505050611cb5611c9560a08401611943565b82805461ffff60501b191660509290921b61ffff60501b16919091179055565b611cf0611cc460c08401611b9d565b82805467ffffffffffffffff60601b191660609290921b67ffffffffffffffff60601b16919091179055565b610358611cff60e08401611b9d565b82805467ffffffffffffffff60a01b191660a09290921b67ffffffffffffffff60a01b16919091179055565b600060208284031215611d3d57600080fd5b8151610ec5816116c7565b634e487b7160e01b600052601160045260246000fd5b60008083128015600160ff1b850184121615611d7c57611d7c611d48565b6001600160ff1b0384018313811615611d9757611d97611d48565b50500390565b600080821280156001600160ff1b0384900385131615611dbf57611dbf611d48565b600160ff1b8390038412811615611dd857611dd8611d48565b50500190565b600082821015611df057611df0611d48565b500390565b60006001600160ff1b0381841382841380821686840486111615611e1b57611e1b611d48565b600160ff1b6000871282811687830589121615611e3a57611e3a611d48565b60008712925087820587128484161615611e5657611e56611d48565b87850587128184161615611e6c57611e6c611d48565b505050929093029392505050565b60008219821115611e8d57611e8d611d48565b500190565b600080600060c08486031215611ea757600080fd5b8351925060208401519150611ebf8560408601611b0d565b90509250925092565b600081600f0b6f7fffffffffffffffffffffffffffffff198103611eee57611eee611d48565b60000392915050565b6000600160ff1b8201611f0c57611f0c611d48565b5060000390565b60006001600160801b03808316818516808303821115611f3557611f35611d48565b01949350505050565b60006001600160801b0383811690831681811015611f5e57611f5e611d48565b039392505050565b634e487b7160e01b600052601260045260246000fd5b600080600080600080600060e0888a031215611f9757600080fd5b8751611fa2816116c7565b6020890151909750611fb3816116f9565b6040890151909650611fc481611933565b6060890151909550611fd581611933565b6080890151909450611fe681611933565b60a089015190935060ff81168114611ffd57600080fd5b60c089015190925061200e81611950565b8091505092959891949750929550565b600288810b825287900b6020820152600f86900b604082015260e081016120486060830187611741565b608082019490945260a08101929092526001600160a01b031660c09091015294935050505056fea264697066735822122040da67e5614f6f95ba88359371ca4ed12d18994d66df66266cb57476bf2cbc4064736f6c634300080d0033608060405234801561001057600080fd5b50610a68806100206000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c80636719578c116100ad578063a3a1e7e911610071578063a3a1e7e9146102de578063a3c35e2c14610204578063d74dcaca14610324578063ea6e4e521461035d578063fca6fbf21461038d57600080fd5b80636719578c146102b35780637779815c146102de57806386c8e9a7146102e857806397c71faf146102fe578063a34123a71461031157600080fd5b80632a99a792116100f45780632a99a792146102045780634c2ebc5814610224578063512403361461028d57806356d15a881461029e5780635e622abc146102ac57600080fd5b806302dc9951146101265780630d8f6f461461014e578063195cd92c1461016f5780631dce5fcf146101e2575b600080fd5b6001546101359062ffffff1681565b60405162ffffff90911681526020015b60405180910390f35b61016161015c36600461068b565b6103a6565b604051908152602001610145565b61018261017d3660046106ce565b6103bb565b6040516101459190815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301516001600160a01b039081169183019190915260c092830151169181019190915260e00190565b6101f56101f0366004610720565b610469565b60405161014593929190610768565b6102176102123660046107ac565b61053a565b60405161014591906107df565b61028b61023236600461080a565b60408051608081018252948552602080860194855285820193845260608601928352600297880b600090815280825282812097890b81529690529094209251835590516001830155519281019290925551600390910155565b005b61028b61029b36600461085f565b50565b61028b61029b36600461087a565b6000610161565b6003546102c6906001600160a01b031681565b6040516001600160a01b039091168152602001610145565b600560821b610161565b600154610135906301000000900462ffffff1681565b61016161030c36600461068b565b6105b7565b6101f561031f366004610720565b6105c5565b61028b610332366004610892565b600293840b6000908152602085815260408083209590960b8252939093529290912090815560010155565b61028b61036b3660046108d4565b600380546001600160a01b0319166001600160a01b0392909216919091179055565b600154610135906601000000000000900462ffffff1681565b60006103b582610f9f19610907565b92915050565b61040d6040518060e00160405280600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b031681525090565b831515600084130361043f57602081018390526104298361098c565b61043590610fa0610907565b6040820152610462565b610fa061044b8461098c565b61045591906109a8565b6020820152604081018390525b9392505050565b6000806104976040518060800160405280600081526020016000815260200160008152602001600081525090565b836001600160801b0316600460008282546104b291906109e4565b9091555050600286810b6000908152602082815260408083209389900b835292905220600101546104ed906001600160801b038616906109fc565b600287810b600090815260208281526040808320938a900b83529290522054909350610523906001600160801b038616906109fc565b915061052f868661053a565b905093509350939050565b6105656040518060800160405280600081526020016000815260200160008152602001600081525090565b50600291820b60009081526020818152604080832093850b8352928152908290208251608081018452815481526001820154928101929092529283015491810191909152600390910154606082015290565b60006103b5610fa0836109a8565b6000806105f36040518060800160405280600081526020016000815260200160008152602001600081525090565b836001600160801b03166004600082825461060e9190610a1b565b9091555050600286810b6000908152602082815260408083209389900b83529290522054610646906001600160801b038616906109fc565b600287810b600090815260208281526040808320938a900b8352929052206001015490925061067f906001600160801b038616906109fc565b925061052f868661053a565b60006020828403121561069d57600080fd5b5035919050565b803580151581146106b457600080fd5b919050565b6001600160a01b038116811461029b57600080fd5b6000806000606084860312156106e357600080fd5b6106ec846106a4565b9250602084013591506040840135610703816106b9565b809150509250925092565b8035600281900b81146106b457600080fd5b60008060006060848603121561073557600080fd5b61073e8461070e565b925061074c6020850161070e565b915060408401356001600160801b038116811461070357600080fd5b8381526020810183905260c081016107a46040830184805182526020810151602083015260408101516040830152606081015160608301525050565b949350505050565b600080604083850312156107bf57600080fd5b6107c88361070e565b91506107d66020840161070e565b90509250929050565b81518152602080830151908201526040808301519082015260608083015190820152608081016103b5565b60008060008060008060c0878903121561082357600080fd5b61082c8761070e565b955061083a6020880161070e565b95989597505050506040840135936060810135936080820135935060a0909101359150565b60006020828403121561087157600080fd5b610462826106a4565b600060c0828403121561088c57600080fd5b50919050565b600080600080608085870312156108a857600080fd5b6108b18561070e565b93506108bf6020860161070e565b93969395505050506040820135916060013590565b6000602082840312156108e657600080fd5b8135610462816106b9565b634e487b7160e01b600052601160045260246000fd5b60006001600160ff1b038184138284138082168684048611161561092d5761092d6108f1565b600160ff1b600087128281168783058912161561094c5761094c6108f1565b60008712925087820587128484161615610968576109686108f1565b8785058712818416161561097e5761097e6108f1565b505050929093029392505050565b6000600160ff1b82016109a1576109a16108f1565b5060000390565b6000826109c557634e487b7160e01b600052601260045260246000fd5b600160ff1b8214600019841416156109df576109df6108f1565b500590565b600082198211156109f7576109f76108f1565b500190565b6000816000190483118215151615610a1657610a166108f1565b500290565b600082821015610a2d57610a2d6108f1565b50039056fea2646970667358221220b750edbec97ee752931b1de1e202e6669d4baff571f51dc31d356a406380db9d64736f6c634300080d0033';

type LiquidityPositionTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LiquidityPositionTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LiquidityPositionTest__factory extends ContractFactory {
  constructor(...args: LiquidityPositionTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<LiquidityPositionTest> {
    return super.deploy(overrides || {}) as Promise<LiquidityPositionTest>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): LiquidityPositionTest {
    return super.attach(address) as LiquidityPositionTest;
  }
  override connect(signer: Signer): LiquidityPositionTest__factory {
    return super.connect(signer) as LiquidityPositionTest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LiquidityPositionTestInterface {
    return new utils.Interface(_abi) as LiquidityPositionTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LiquidityPositionTest {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as LiquidityPositionTest;
  }
}
