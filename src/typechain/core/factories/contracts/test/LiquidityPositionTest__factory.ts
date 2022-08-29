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
  '0x6080806040523461008557610ad48181016001600160401b0381118382101761006f57829161253d833903906000f080156100635760dc80546001600160a01b0319166001600160a01b03929092169190911790556040516124b2908161008b8239f35b6040513d6000823e3d90fd5b634e487b7160e01b600052604160045260246000fd5b600080fdfe60806040526004361015610013575b600080fd5b60003560e01c80631ca458181461012b5780631f1b9502146101225780632c83d134146101195780632e0cb31a14610110578063313c06a0146101075780633ffe794c146100fe57806357595e87146100f55780635ea25032146100ec57806382d9dbaa146100e35780638ce74426146100da5780639d9ba482146100d1578063ac210cc7146100c8578063c28fd787146100bf5763f04af6ec146100b757600080fd5b61000e610e43565b5061000e610baf565b5061000e610b7a565b5061000e610b5e565b5061000e610a7f565b5061000e6108cb565b5061000e61089b565b5061000e6107d0565b5061000e6104b9565b5061000e610431565b5061000e610299565b5061000e6101b0565b5061000e610168565b503461000e57600060031936011261000e576020606e54604051908152f35b73ffffffffffffffffffffffffffffffffffffffff81160361000e57565b503461000e57602060031936011261000e57602061019d61019360043561018e8161014a565b611678565b50607354906113c0565b604051908152f35b8060020b0361000e57565b503461000e57604060031936011261000e576004356101ce816101a5565b6024356101da816101a5565b6072548060081c60020b1580159061028a575b610260577fffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000ff61025e9360081b63ffffff00169116176072557fffffffffffffffffffffffffffffffffffffffffffffffffff000000ffffffff6072549160201b66ffffff0000000016911617607255565b005b60046040517fa0bb33f9000000000000000000000000000000000000000000000000000000008152fd5b508060201c60020b15156101ed565b503461000e57602060031936011261000e576103ac61039c6103576004356102c08161014a565b60806103016102f66102fc73ffffffffffffffffffffffffffffffffffffffff60dc5416946102ee81611678565b93909161238e565b90611629565b611128565b6072546040517f2a99a792000000000000000000000000000000000000000000000000000000008152600882901c600290810b600483015260209290921c90910b60248201529390928491829081906044820190565b03915afa9182156103e8575b6000926103b0575b5061038e61038891610388610383606086015161141c565b611298565b90611128565b9160408151910151906112c6565b6040519081529081906020820190565b0390f35b6103889192506103d961038e9160803d81116103e1575b6103d1818361097b565b81019061103d565b92915061036b565b503d6103c7565b6103f0611054565b610363565b9060038210156104025752565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b503461000e57600060031936011261000e5761012060725460735460745460755460765491607754936fffffffffffffffffffffffffffffffff6040519661047c8860ff83166103f5565b8060081c60020b60208901528060201c60020b604089015260381c166060870152608086015260a085015260c084015260e0830152610100820152f35b503461000e5761014060031936011261000e576004356104d88161014a565b63ffffffff600360009282811684528360205261053d60408520916104fc8161014a565b829073ffffffffffffffffffffffffffffffffffffffff167fffffffffffffffffffffffff0000000000000000000000000000000000000000825416179055565b61059060243561054c8161014a565b600183019073ffffffffffffffffffffffffffffffffffffffff167fffffffffffffffffffffffff0000000000000000000000000000000000000000825416179055565b6105e360443561059f8161014a565b600283019073ffffffffffffffffffffffffffffffffffffffff167fffffffffffffffffffffffff0000000000000000000000000000000000000000825416179055565b016106226064356105f3816121f6565b829061ffff167fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000825416179055565b610666608435610631816121f6565b82547fffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000ffff1660109190911b63ffff000016178255565b6106ac60a435610675816121f6565b82547fffffffffffffffffffffffffffffffffffffffffffffffffffff0000ffffffff1660209190911b65ffff0000000016178255565b60c43591821682036107cc576107c7917fffffffffffffffffffffffffffffffffffffffffffff00000000ffffffffffff69ffffffff00000000000083549260301b16911617815561073b6106ff612456565b82547fffffffffffffffffffffffffffffffffffffffffff00ffffffffffffffffffff1690151560501b6aff0000000000000000000016178255565b610783610746612462565b82547fffffffffffffffffffffffffffffffffffffffff00ffffffffffffffffffffff1690151560581b6bff000000000000000000000016178255565b61078b61246f565b6bffffffffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000083549260601b169116179055565b604051f35b8280fd5b503461000e57600060031936011261000e5760dc546072546040517fa3c35e2c000000000000000000000000000000000000000000000000000000008152600882901c600290810b600483015260209290921c90910b602482015261025e916080908290604490829073ffffffffffffffffffffffffffffffffffffffff165afa90811561088e575b600091610870575b5061086a611061565b9061116a565b610888915060803d81116103e1576103d1818361097b565b38610861565b610896611054565b610859565b503461000e57600060031936011261000e576060606f546070546071549060405192835260208301526040820152f35b503461000e57602060031936011261000e5773ffffffffffffffffffffffffffffffffffffffff6004356108fe8161014a565b167fffffffffffffffffffffffff000000000000000000000000000000000000000060045416176004556000604051f35b610100810190811067ffffffffffffffff82111761094c57604052565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff82111761094c57604052565b9260e0610a6f91610180969399989794996101a087019a73ffffffffffffffffffffffffffffffffffffffff809216885216602087015261ffff8082511660408801528060208301511660608801526040820151166080870152610a2b606082015160a088019061ffff169052565b608081015161ffff1660c087015260a081015161ffff168683015260c081015167ffffffffffffffff16610100870152015167ffffffffffffffff16610120850152565b6101408301526101608201520152565b503461000e57600060031936011261000e5773ffffffffffffffffffffffffffffffffffffffff80600354169060045416906103ac604051610ac08161092f565b610b47600554610b2461ffff8083168552808360101c166020860152610af2818460201c16604087019061ffff169052565b61ffff603084901c821616606086015261ffff604084901c82161660808601528260501c1660a085019061ffff169052565b67ffffffffffffffff606082901c811660c085015260a09190911c1660e0830152565b6006546007549060085492604051968796876109bc565b503461000e57600060031936011261000e57602061019d6122fe565b503461000e57600060031936011261000e57602073ffffffffffffffffffffffffffffffffffffffff60dc5416604051908152f35b503461000e576003193601610180811261000e576101001361000e57610c09600435610bda816121f6565b61ffff167fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00006005541617600555565b610c4e602435610c18816121f6565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000ffff63ffff00006005549260101b16911617600555565b610c95604435610c5d816121f6565b7fffffffffffffffffffffffffffffffffffffffffffffffffffff0000ffffffff65ffff000000006005549260201b16911617600555565b606435610ca1816121f6565b7fffffffffffffffffffffffffffffffffffffffffffffffff0000ffffffffffff67ffff0000000000006005549260301b16911617600555610d20610ce4612410565b7fffffffffffffffffffffffffffffffffffffffffffff0000ffffffffffffffff69ffff00000000000000006005549260401b16911617600555565b610d69610d2b61241c565b7fffffffffffffffffffffffffffffffffffffffff0000ffffffffffffffffffff6bffff000000000000000000006005549260501b16911617600555565b610dba610d74612428565b7fffffffffffffffffffffffff0000000000000000ffffffffffffffffffffffff73ffffffffffffffff0000000000000000000000006005549260601b16911617600555565b610e13610dc561243f565b7fffffffff0000000000000000ffffffffffffffffffffffffffffffffffffffff7bffffffffffffffff00000000000000000000000000000000000000006005549260a01b16911617600555565b610e1f61010435600655565b610e2b61012435600755565b610e3761014435600855565b61025e61016435606e55565b503461000e57602060031936011261000e5760043580600f0b810361000e5761025e90610f11610ea4610e8b60dc5473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff1690565b600080805260205260027fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb55b019073ffffffffffffffffffffffffffffffffffffffff167fffffffffffffffffffffffff0000000000000000000000000000000000000000825416179055565b610fa760046020610f3a610e8b60dc5473ffffffffffffffffffffffffffffffffffffffff1690565b604051928380927f6719578c0000000000000000000000000000000000000000000000000000000082525afa908115610fe3575b600091610fb5575b50600080805260205260017fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5610ed0565b610faf611061565b90611d04565b610fd6915060203d8111610fdc575b610fce818361097b565b810190611c23565b38610f76565b503d610fc4565b610feb611054565b610f6e565b919082608091031261000e576040516080810181811067ffffffffffffffff82111761094c5760405260608082948051845260208101516020850152604081015160408501520151910152565b9060808282031261000e5761105191610ff0565b90565b506040513d6000823e3d90fd5b604051906060820182811067ffffffffffffffff82111761094c5760405281606f54815260705460208201526040607154910152565b507f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600081129060001991817f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03831381151661111b575b81600160ff1b0383121661110f570190565b611117611097565b0190565b611123611097565b6110fd565b60008112817f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03831381151661111b5781600160ff1b0383121661110f570190565b7f8415d777c210eb5ec128f3ed52b314fc5c06eb3a464c58fa8f06a56aea5e744260009291839261128c82519185807fb9b041b729bca1f1535dde5369cddca43b655bbc9dbd3e5878047a06e11a45c76111ca60408801968751906112c6565b6111d5818651611128565b8552606088016111e8610383825161141c565b956111f4878251611128565b905261126660208a519a8b607455015198896075555191826076555180607755607254928360081c60020b9a8b9460201c60020b9c8d966040519788978893909796959260c0959260e086019960020b865260020b602086015260408501526060840152608083015260a08201520152565b0390a360405193849384604091949392606082019560020b825260020b60208201520152565b0390a3565b1561000e57565b600160ff1b81101561000e5790565b600160ff1b81146112b9575b60000390565b6112c1611097565b6112b3565b61133b611051926113356074546075549061132a610383611324611305607654946fffffffffffffffffffffffffffffffff60725460381c169a6113c0565b946001906000808212156113b957915061131e906112a7565b9561165e565b94611457565b91156113af57611128565b906113c0565b6113458282611629565b91600083129182611366575b5050156112a757611361906110c7565b6112a7565b700100000000000000000000000000000000919250600081136000146113a057915b60009209611398575b3880611351565b506001611391565b6113a9906112a7565b91611388565b90610388906112a7565b509561165e565b6000821282600160ff1b01821281151661140f575b827f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01821316611403570390565b61140b611097565b0390565b611417611097565b6113d5565b6110519060775480821061144a575b6fffffffffffffffffffffffffffffffff60725460381c169103611457565b611452611097565b61142b565b60001982820990828102928380841093039280840393146114a057700100000000000000000000000000000000918383111561000e570990828211900360801b910360801c1790565b50505060801c90565b60001982820990828102928380841093039280840393146114ee576c01000000000000000000000000918383111561000e570990828211900360a01b910360601c1790565b50505060601c90565b60001982820990828102928380841093039280840393146115385768010000000000000000918383111561000e570990828211900360c01b910360401c1790565b50505060401c90565b909160001983830992808302928380861095039480860395146115bb5790829161156c868411611291565b0981806000031680920460028082600302188083028203028083028203028083028203028083028203028083028203028092029003029360018380600003040190848311900302920304170290565b505091506115ca821515611291565b0490565b60016000198183600160ff1b05821260008513161661161c575b827f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff05136000831216166112b95760000390565b611624611097565b6115e8565b919061038361164d9160008512948560001461164857611648906115ce565b611457565b9161165457565b90611051906112a7565b91906000831215611051576116749015926112a7565b9190565b906072549161168c8360081c60020b61186f565b9261169c8160201c60020b61186f565b90829173ffffffffffffffffffffffffffffffffffffffff9283808816951685811060001461176c57505085925b8391809582861691838116831161175f575b5082841695861561000e5761173b610383976117358a876fffffffffffffffffffffffffffffffff99816110519e169203167bffffffffffffffffffffffffffffffff0000000000000000000000008b60281b16611541565b04611298565b998093829311611754575b505003169160381c166114a9565b915091503880611746565b96509250849592386116dc565b84839592951610156116ca57925080926116ca565b507f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b80156117bf575b6000190490565b6117c7611781565b6117b8565b73ffffffffffffffffffffffffffffffffffffffff9283831684831611611867575b7bffffffffffffffffffffffffffffffff0000000000000000000000009060601b1692808083850316921692831561000e57169061182d828286611541565b93821561185a575b09611846575b808206151591040190565b9060001981101561000e576001019061183b565b611862611781565b611835565b9091906117ee565b60020b6000811215611c1d57806000035b620d89e88111611bf35773ffffffffffffffffffffffffffffffffffffffff916001821615611bca5770ffffffffffffffffffffffffffffffffff6ffffcb933bd6fad37aa2d162d1a5940015b169160028116611bae575b60048116611b92575b60088116611b76575b60108116611b5a575b60208116611b3e575b60408116611b22575b608090818116611b07575b6101008116611aec575b6102008116611ad1575b6104008116611ab6575b6108008116611a9b575b6110008116611a80575b6120008116611a65575b6140008116611a4a575b6180008116611a2f575b620100008116611a14575b6202000081166119fa575b6204000081166119e0575b62080000166119c5575b506000126119b7575b63ffffffff81166119ae5760ff60005b169060201c011690565b60ff60016119a4565b6119c0906117b1565b611994565b6b048a170391f7dc42444e8fa26000929302901c919061198b565b6d2216e584f5fa1ea926041bedfe98909302811c92611981565b926e5d6af8dedb81196699c329225ee60402811c92611976565b926f09aa508b5b7a84e1c677de54f3e99bc902811c9261196b565b926f31be135f97d08fd981231505542fcfa602811c92611960565b926f70d869a156d2a1b890bb3df62baf32f702811c92611956565b926fa9f746462d870fdf8a65dc1f90e061e502811c9261194c565b926fd097f3bdfd2022b8845ad8f792aa582502811c92611942565b926fe7159475a2c29b7443b29c7fa6e889d902811c92611938565b926ff3392b0822b70005940c7a398e4b70f302811c9261192e565b926ff987a7253ac413176f2b074cf7815e5402811c92611924565b926ffcbe86c7900a88aedcffc83b479aa3a402811c9261191a565b926ffe5dee046a99a2a811c461f1969c305302811c92611910565b916fff2ea16466c96a3843ec78b326b528610260801c91611905565b916fff973b41fa98c081472e6896dfb254c00260801c916118fc565b916fffcb9843d60f6159c9db58835c9266440260801c916118f3565b916fffe5caca7e10e4e61c3624eaa0941cd00260801c916118ea565b916ffff2e50f5f656932ef12357cf3c7fdcc0260801c916118e1565b916ffff97272373d413259a46990580e213a0260801c916118d8565b70ffffffffffffffffffffffffffffffffff7001000000000000000000000000000000006118cd565b60046040517f2bc80f3a000000000000000000000000000000000000000000000000000000008152fd5b80611880565b9081602091031261000e57516110518161014a565b604051906080820182811067ffffffffffffffff82111761094c5760405260006060838281528260208201528260408201520152565b600f0b7fffffffffffffffffffffffffffffffff8000000000000000000000000000000081146112b95760000390565b909160c08284031261000e57611051825193604060208501519401610ff0565b6fffffffffffffffffffffffffffffffff9182169116818110611403570390565b906fffffffffffffffffffffffffffffffff808093169116809203811161110f570190565b60008080526020819052611d5060027fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb55b015473ffffffffffffffffffffffffffffffffffffffff1690565b91611d59611c38565b5080600f0b82811392858460001461204e5750506072546040517f1dce5fcf000000000000000000000000000000000000000000000000000000008152600882901c600290810b600483015260209290921c90910b60248201526fffffffffffffffffffffffffffffffff831660448201529360c0908590606490829060009073ffffffffffffffffffffffffffffffffffffffff165af18015612041575b8560009182968391611ff8575b50611e9e9291611e21611e1b611e279394611298565b98611298565b9261116a565b611e328188516113c0565b875260208701611e438782516113c0565b9052600080805260205261018e611e83611e7e60017fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5611d35565b61220c565b91611e96611e90896112a7565b916112a7565b908387612170565b5094611ebb6040611eb1607354896113c0565b9201918251611128565b905260725460381c6fffffffffffffffffffffffffffffffff169215611fb3575090611ef9916fffffffffffffffffffffffffffffffff1690611cdf565b915b6fffffffffffffffffffffffffffffffff831615611f68576102fc611f63937fffffffffffffffffff00000000000000000000000000000000ffffffffffffff76ffffffffffffffffffffffffffffffff000000000000006072549260381b16911617607255565b607355565b505050611f987fffffffffffffffffff00000000000000000000000000000000ffffffffffffff60725416607255565b60006073556000607455600060755560006076556000607755565b60009094929412611fc5575b50611efb565b92611feb611fd6611ff19395611c6e565b6fffffffffffffffffffffffffffffffff1690565b90611cbe565b9138611fbf565b611e219750611e9e9350611e2791509161202b611e1b9360c03d811161203a575b612023818361097b565b810190611c9e565b90995090949193509150611e05565b503d612019565b612049611054565b611df8565b60c06120ea929660725490612065611fd688611c6e565b918973ffffffffffffffffffffffffffffffffffffffff6040518098819682957fa34123a70000000000000000000000000000000000000000000000000000000084528060201c60020b9060081c60020b600485019160409194936fffffffffffffffffffffffffffffffff91606085019660020b855260020b602085015216910152565b0393165af18015612163575b86928791612121575b50611e9e9291611e2161136161211b611361611e279596611298565b99611298565b61211b9750611e9e9350611e27915091611e216113616121516113619560c03d811161203a57612023818361097b565b9b9196909b95505050505091926120ff565b61216b611054565b6120f6565b60e09073ffffffffffffffffffffffffffffffffffffffff7f90ebe5c3d0a3bbd59fb51797eff156440d75c86a623dddef804547362e66595a9360009687966121e3607254604051968160081c60020b88528160201c60020b6020890152600f0b604088015260ff6060880191166103f5565b608085015260a08401521660c0820152a3565b61ffff81160361000e57565b8015150361000e57565b60e073ffffffffffffffffffffffffffffffffffffffff916004604051809481937f3850c7bd000000000000000000000000000000000000000000000000000000008352165afa9081156122f1575b600091612266575090565b60e0813d82116122e9575b8161227e60e0938361097b565b810103126122e5578051916122928361014a565b61229f60208301516101a5565b6122ac60408301516121f6565b6122b960608301516121f6565b6122c660808301516121f6565b60a082015160ff8116036122e2575060c0611051910151612202565b80fd5b5080fd5b3d9150612271565b6122f9611054565b61225b565b6072546123108160081c60020b61186f565b906123208160201c60020b61186f565b607354929060008412612357576fffffffffffffffffffffffffffffffff61234c9360381c16916117cc565b818110611403570390565b9061237b916fffffffffffffffffffffffffffffffff6123819460381c16916117cc565b916115ce565b908119811161110f570190565b73ffffffffffffffffffffffffffffffffffffffff166401000276a3811080156123f2575b6123c15780611051916114f7565b602490604051907f5d236c450000000000000000000000000000000000000000000000000000000082526004820152fd5b5073fffd8963efd1fc6a506488495d951d5263988d268110156123b3565b608435611051816121f6565b60a435611051816121f6565b60c43567ffffffffffffffff8116810361000e5790565b60e43567ffffffffffffffff8116810361000e5790565b60e43561105181612202565b6101043561105181612202565b610124356110518161014a56fea26469706673582212208ea88d29afe11f56e332089020e8163606fdd69c8c822061dd265f6cd9f9f72964736f6c634300080e00336080806040523461001657610ab8908161001c8239f35b600080fdfe60806040526004361015610013575b600080fd5b60003560e01c806302dc99511461017d5780630d8f6f4614610174578063195cd92c1461016b5780631dce5fcf146101625780632a99a792146101085780634c2ebc5814610159578063512403361461015057806356d15a88146101475780635e622abc1461013e5780636719578c146101355780637779815c1461011157806386c8e9a71461012c57806397c71faf14610123578063a34123a71461011a578063a3a1e7e914610111578063a3c35e2c14610108578063d74dcaca146100ff578063ea6e4e52146100f65763fca6fbf2146100ee57600080fd5b61000e610850565b5061000e6107ec565b5061000e610794565b5061000e610508565b5061000e61066f565b5061000e6106e5565b5061000e6106c3565b5061000e61069c565b5061000e61063a565b5061000e61061d565b5061000e610609565b5061000e6105ed565b5061000e610562565b5061000e61043e565b5061000e61028b565b5061000e6101a1565b503461000e57600060031936011261000e57602062ffffff60015416604051908152f35b503461000e57602060031936011261000e5760206004357ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0606001827f8000000000000000000000000000000000000000000000000000000000000000058212600084131616610251575b60017ffff7ced916872b020c49ba5e353f7ced916872b020c49ba5e353f7ced916872c8312600084121616610244575b60405191028152f35b61024c610967565b61023b565b610259610967565b61020b565b60043590811515820361000e57565b73ffffffffffffffffffffffffffffffffffffffff81160361000e57565b503461000e57606060031936011261000e576103796102a861025e565b6024356102b660443561026d565b6102be610877565b916000808452602084019080825260408501928184528160608701528160808701528160a08701528160c087015215159084131460001461037d578261030e92936103099252610a47565b6109d4565b90525b6040519182918291909160c060e082019380518352602081015160208401526040810151604084015260608101516060840152608081015160808401528173ffffffffffffffffffffffffffffffffffffffff918260a08201511660a0860152015116910152565b0390f35b61039161038984610a47565b610fa0900590565b905252610311565b600435908160020b820361000e57565b602435908160020b820361000e57565b600319606091011261000e576004358060020b810361000e57906024358060020b810361000e57906044356fffffffffffffffffffffffffffffffff8116810361000e5790565b60409061043c939594929560c0820196825260208201520190606080918051845260208101516020850152604081015160408501520151910152565b565b503461000e576104ef6fffffffffffffffffffffffffffffffff610379610464366103b9565b6104729592959491946108e6565b50169283600454811981116104fb575b016004556104e98560020b948560005260026020526104bf8160016104b88660406000209060020b600052602052604060002090565b0154610997565b9560005260026020526104e38360406000209060020b600052602052604060002090565b54610997565b9461090a565b60405193849384610400565b610503610967565b610482565b503461000e57604060031936011261000e576080610535610527610399565b61052f6103a9565b9061090a565b6105606040518092606080918051845260208101516020850152604081015160408501520151910152565bf35b503461000e5760c060031936011261000e5761057c610399565b60036105866103a9565b9161058f6108c6565b9260443584526020840160643581526105d760408601926084358452606087019460a435865260020b600052600060205260406000209060020b600052602052604060002090565b9451855551600185015551600284015551910155005b503461000e57602060031936011261000e5761060761025e565b005b503461000e5760c060031936011261000e57005b503461000e57600060031936011261000e57602060405160008152f35b503461000e57600060031936011261000e57602073ffffffffffffffffffffffffffffffffffffffff60035416604051908152f35b503461000e57600060031936011261000e5760206040517014000000000000000000000000000000008152f35b503461000e57600060031936011261000e57602062ffffff60015460181c16604051908152f35b503461000e57602060031936011261000e576020604051610fa0600435058152f35b503461000e576104ef6fffffffffffffffffffffffffffffffff61037961070b366103b9565b61071895929491956108e6565b50169384600454818110610787575b036004556107818460020b9586600052600260205261075b816104e38560406000209060020b600052602052604060002090565b96600052600260205260016104b88460406000209060020b600052602052604060002090565b9361090a565b61078f610967565b610727565b503461000e57608060031936011261000e576107dc6107b1610399565b6107b96103a9565b9060020b600052600260205260406000209060020b600052602052604060002090565b6044358155606435600190910155005b503461000e57602060031936011261000e5773ffffffffffffffffffffffffffffffffffffffff60043561081f8161026d565b167fffffffffffffffffffffffff000000000000000000000000000000000000000060035416176003556000604051f35b503461000e57600060031936011261000e57602062ffffff60015460301c16604051908152f35b6040519060e0820182811067ffffffffffffffff82111761089757604052565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051906080820182811067ffffffffffffffff82111761089757604052565b6108ee6108c6565b9060008252600060208301526000604083015260006060830152565b9061093a916109176108e6565b5060020b600052600060205260406000209060020b600052602052604060002090565b60036109446108c6565b918054835260018101546020840152600281015460408401520154606082015290565b507f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048211811515166109c8570290565b6109d0610967565b0290565b610fa09060017e083126e978d4fdf3b645a1cac083126e978d4fdf3b645a1cac083126e978d48211600083131616610a3a575b60017ffff7ced916872b020c49ba5e353f7ced916872b020c49ba5e353f7ced916872c82126000831216166109c8570290565b610a42610967565b610a07565b7f80000000000000000000000000000000000000000000000000000000000000008114610a75575b60000390565b610a7d610967565b610a6f56fea2646970667358221220165296e1e9a54e8708d3e8ccde9bd22fc837938d7d302d58073e2850174fb18e64736f6c634300080e0033';

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