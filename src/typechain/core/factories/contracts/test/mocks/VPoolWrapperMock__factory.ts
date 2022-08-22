/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type {
  VPoolWrapperMock,
  VPoolWrapperMockInterface,
} from '../../../../contracts/test/mocks/VPoolWrapperMock';

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'AccruedProtocolFeeCollected',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'int24',
        name: 'tickLower',
        type: 'int24',
      },
      {
        indexed: false,
        internalType: 'int24',
        name: 'tickUpper',
        type: 'int24',
      },
      {
        indexed: false,
        internalType: 'uint128',
        name: 'liquidity',
        type: 'uint128',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'vTokenPrincipal',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'vQuotePrincipal',
        type: 'uint256',
      },
    ],
    name: 'Burn',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint24',
        name: 'liquidityFeePips',
        type: 'uint24',
      },
    ],
    name: 'LiquidityFeeUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'int24',
        name: 'tickLower',
        type: 'int24',
      },
      {
        indexed: false,
        internalType: 'int24',
        name: 'tickUpper',
        type: 'int24',
      },
      {
        indexed: false,
        internalType: 'uint128',
        name: 'liquidity',
        type: 'uint128',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'vTokenPrincipal',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'vQuotePrincipal',
        type: 'uint256',
      },
    ],
    name: 'Mint',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint24',
        name: 'protocolFeePips',
        type: 'uint24',
      },
    ],
    name: 'ProtocolFeeUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: 'int256',
            name: 'amountSpecified',
            type: 'int256',
          },
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
          {
            internalType: 'uint256',
            name: 'liquidityFees',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'protocolFees',
            type: 'uint256',
          },
          {
            internalType: 'uint160',
            name: 'sqrtPriceX96Start',
            type: 'uint160',
          },
          {
            internalType: 'uint160',
            name: 'sqrtPriceX96End',
            type: 'uint160',
          },
        ],
        indexed: false,
        internalType: 'struct IVPoolWrapper.SwapResult',
        name: 'swapResult',
        type: 'tuple',
      },
    ],
    name: 'Swap',
    type: 'event',
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
      {
        internalType: 'uint128',
        name: 'liquidity',
        type: 'uint128',
      },
    ],
    name: 'burn',
    outputs: [
      {
        internalType: 'uint256',
        name: 'vTokenAmount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'vQuoteAmount',
        type: 'uint256',
      },
      {
        components: [
          {
            internalType: 'int256',
            name: 'sumAX128',
            type: 'int256',
          },
          {
            internalType: 'int256',
            name: 'sumBInsideX128',
            type: 'int256',
          },
          {
            internalType: 'int256',
            name: 'sumFpInsideX128',
            type: 'int256',
          },
          {
            internalType: 'uint256',
            name: 'sumFeeInsideX128',
            type: 'uint256',
          },
        ],
        internalType: 'struct IVPoolWrapper.WrapperValuesInside',
        name: 'wrapperValuesInside',
        type: 'tuple',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'collectAccruedProtocolFee',
    outputs: [
      {
        internalType: 'uint256',
        name: 'accruedProtocolFeeLast',
        type: 'uint256',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getExtrapolatedSumAX128',
    outputs: [
      {
        internalType: 'int256',
        name: '',
        type: 'int256',
      },
    ],
    stateMutability: 'pure',
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
    name: 'getExtrapolatedValuesInside',
    outputs: [
      {
        components: [
          {
            internalType: 'int256',
            name: 'sumAX128',
            type: 'int256',
          },
          {
            internalType: 'int256',
            name: 'sumBInsideX128',
            type: 'int256',
          },
          {
            internalType: 'int256',
            name: 'sumFpInsideX128',
            type: 'int256',
          },
          {
            internalType: 'uint256',
            name: 'sumFeeInsideX128',
            type: 'uint256',
          },
        ],
        internalType: 'struct IVPoolWrapper.WrapperValuesInside',
        name: 'wrapperValuesInside',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getSumAX128',
    outputs: [
      {
        internalType: 'int256',
        name: '',
        type: 'int256',
      },
    ],
    stateMutability: 'pure',
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
    name: 'getValuesInside',
    outputs: [
      {
        components: [
          {
            internalType: 'int256',
            name: 'sumAX128',
            type: 'int256',
          },
          {
            internalType: 'int256',
            name: 'sumBInsideX128',
            type: 'int256',
          },
          {
            internalType: 'int256',
            name: 'sumFpInsideX128',
            type: 'int256',
          },
          {
            internalType: 'uint256',
            name: 'sumFeeInsideX128',
            type: 'uint256',
          },
        ],
        internalType: 'struct IVPoolWrapper.WrapperValuesInside',
        name: 'wrapperValuesInside',
        type: 'tuple',
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
            internalType: 'address',
            name: 'clearingHouse',
            type: 'address',
          },
          {
            internalType: 'contract IVToken',
            name: 'vToken',
            type: 'address',
          },
          {
            internalType: 'contract IVQuote',
            name: 'vQuote',
            type: 'address',
          },
          {
            internalType: 'contract IUniswapV3Pool',
            name: 'vPool',
            type: 'address',
          },
          {
            internalType: 'uint24',
            name: 'liquidityFeePips',
            type: 'uint24',
          },
          {
            internalType: 'uint24',
            name: 'protocolFeePips',
            type: 'uint24',
          },
        ],
        internalType: 'struct IVPoolWrapper.InitializeVPoolWrapperParams',
        name: 'params',
        type: 'tuple',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'liquidityFeePips',
    outputs: [
      {
        internalType: 'uint24',
        name: '',
        type: 'uint24',
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
      {
        internalType: 'uint128',
        name: 'liquidity',
        type: 'uint128',
      },
    ],
    name: 'mint',
    outputs: [
      {
        internalType: 'uint256',
        name: 'vTokenAmount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'vQuoteAmount',
        type: 'uint256',
      },
      {
        components: [
          {
            internalType: 'int256',
            name: 'sumAX128',
            type: 'int256',
          },
          {
            internalType: 'int256',
            name: 'sumBInsideX128',
            type: 'int256',
          },
          {
            internalType: 'int256',
            name: 'sumFpInsideX128',
            type: 'int256',
          },
          {
            internalType: 'uint256',
            name: 'sumFeeInsideX128',
            type: 'uint256',
          },
        ],
        internalType: 'struct IVPoolWrapper.WrapperValuesInside',
        name: 'wrapperValuesInside',
        type: 'tuple',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'protocolFeePips',
    outputs: [
      {
        internalType: 'uint24',
        name: '',
        type: 'uint24',
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
      {
        internalType: 'uint256',
        name: 'vQuotePerLiquidity',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'vTokenPerLiquidity',
        type: 'uint256',
      },
    ],
    name: 'setLiquidityRates',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'vPoolAddress',
        type: 'address',
      },
    ],
    name: 'setVPool',
    outputs: [],
    stateMutability: 'nonpayable',
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
      {
        internalType: 'int256',
        name: 'sumAX128',
        type: 'int256',
      },
      {
        internalType: 'int256',
        name: 'sumBInsideX128',
        type: 'int256',
      },
      {
        internalType: 'int256',
        name: 'sumFpInsideX128',
        type: 'int256',
      },
      {
        internalType: 'uint256',
        name: 'sumFeeInsideX128',
        type: 'uint256',
      },
    ],
    name: 'setValuesInside',
    outputs: [],
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
        internalType: 'uint160',
        name: '',
        type: 'uint160',
      },
    ],
    name: 'swap',
    outputs: [
      {
        components: [
          {
            internalType: 'int256',
            name: 'amountSpecified',
            type: 'int256',
          },
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
          {
            internalType: 'uint256',
            name: 'liquidityFees',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'protocolFees',
            type: 'uint256',
          },
          {
            internalType: 'uint160',
            name: 'sqrtPriceX96Start',
            type: 'uint160',
          },
          {
            internalType: 'uint160',
            name: 'sqrtPriceX96End',
            type: 'uint160',
          },
        ],
        internalType: 'struct IVPoolWrapper.SwapResult',
        name: 'swapResult',
        type: 'tuple',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'int256',
        name: 'vTokenAmount',
        type: 'int256',
      },
    ],
    name: 'swapTokenAmount',
    outputs: [
      {
        internalType: 'int256',
        name: '',
        type: 'int256',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'int256',
        name: 'vTokenNotional',
        type: 'int256',
      },
    ],
    name: 'swapTokenNotional',
    outputs: [
      {
        internalType: 'int256',
        name: '',
        type: 'int256',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'uniswapFeePips',
    outputs: [
      {
        internalType: 'uint24',
        name: '',
        type: 'uint24',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bool',
        name: 'useZeroFundingRate',
        type: 'bool',
      },
    ],
    name: 'updateGlobalFundingState',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'vPool',
    outputs: [
      {
        internalType: 'contract IUniswapV3Pool',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

const _bytecode =
  '0x6080806040523461001657610ab8908161001c8239f35b600080fdfe60806040526004361015610013575b600080fd5b60003560e01c806302dc99511461017d5780630d8f6f4614610174578063195cd92c1461016b5780631dce5fcf146101625780632a99a792146101085780634c2ebc5814610159578063512403361461015057806356d15a88146101475780635e622abc1461013e5780636719578c146101355780637779815c1461011157806386c8e9a71461012c57806397c71faf14610123578063a34123a71461011a578063a3a1e7e914610111578063a3c35e2c14610108578063d74dcaca146100ff578063ea6e4e52146100f65763fca6fbf2146100ee57600080fd5b61000e610850565b5061000e6107ec565b5061000e610794565b5061000e610508565b5061000e61066f565b5061000e6106e5565b5061000e6106c3565b5061000e61069c565b5061000e61063a565b5061000e61061d565b5061000e610609565b5061000e6105ed565b5061000e610562565b5061000e61043e565b5061000e61028b565b5061000e6101a1565b503461000e57600060031936011261000e57602062ffffff60015416604051908152f35b503461000e57602060031936011261000e5760206004357ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0606001827f8000000000000000000000000000000000000000000000000000000000000000058212600084131616610251575b60017ffff7ced916872b020c49ba5e353f7ced916872b020c49ba5e353f7ced916872c8312600084121616610244575b60405191028152f35b61024c610967565b61023b565b610259610967565b61020b565b60043590811515820361000e57565b73ffffffffffffffffffffffffffffffffffffffff81160361000e57565b503461000e57606060031936011261000e576103796102a861025e565b6024356102b660443561026d565b6102be610877565b916000808452602084019080825260408501928184528160608701528160808701528160a08701528160c087015215159084131460001461037d578261030e92936103099252610a47565b6109d4565b90525b6040519182918291909160c060e082019380518352602081015160208401526040810151604084015260608101516060840152608081015160808401528173ffffffffffffffffffffffffffffffffffffffff918260a08201511660a0860152015116910152565b0390f35b61039161038984610a47565b610fa0900590565b905252610311565b600435908160020b820361000e57565b602435908160020b820361000e57565b600319606091011261000e576004358060020b810361000e57906024358060020b810361000e57906044356fffffffffffffffffffffffffffffffff8116810361000e5790565b60409061043c939594929560c0820196825260208201520190606080918051845260208101516020850152604081015160408501520151910152565b565b503461000e576104ef6fffffffffffffffffffffffffffffffff610379610464366103b9565b6104729592959491946108e6565b50169283600454811981116104fb575b016004556104e98560020b948560005260026020526104bf8160016104b88660406000209060020b600052602052604060002090565b0154610997565b9560005260026020526104e38360406000209060020b600052602052604060002090565b54610997565b9461090a565b60405193849384610400565b610503610967565b610482565b503461000e57604060031936011261000e576080610535610527610399565b61052f6103a9565b9061090a565b6105606040518092606080918051845260208101516020850152604081015160408501520151910152565bf35b503461000e5760c060031936011261000e5761057c610399565b60036105866103a9565b9161058f6108c6565b9260443584526020840160643581526105d760408601926084358452606087019460a435865260020b600052600060205260406000209060020b600052602052604060002090565b9451855551600185015551600284015551910155005b503461000e57602060031936011261000e5761060761025e565b005b503461000e5760c060031936011261000e57005b503461000e57600060031936011261000e57602060405160008152f35b503461000e57600060031936011261000e57602073ffffffffffffffffffffffffffffffffffffffff60035416604051908152f35b503461000e57600060031936011261000e5760206040517014000000000000000000000000000000008152f35b503461000e57600060031936011261000e57602062ffffff60015460181c16604051908152f35b503461000e57602060031936011261000e576020604051610fa0600435058152f35b503461000e576104ef6fffffffffffffffffffffffffffffffff61037961070b366103b9565b61071895929491956108e6565b50169384600454818110610787575b036004556107818460020b9586600052600260205261075b816104e38560406000209060020b600052602052604060002090565b96600052600260205260016104b88460406000209060020b600052602052604060002090565b9361090a565b61078f610967565b610727565b503461000e57608060031936011261000e576107dc6107b1610399565b6107b96103a9565b9060020b600052600260205260406000209060020b600052602052604060002090565b6044358155606435600190910155005b503461000e57602060031936011261000e5773ffffffffffffffffffffffffffffffffffffffff60043561081f8161026d565b167fffffffffffffffffffffffff000000000000000000000000000000000000000060035416176003556000604051f35b503461000e57600060031936011261000e57602062ffffff60015460301c16604051908152f35b6040519060e0820182811067ffffffffffffffff82111761089757604052565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051906080820182811067ffffffffffffffff82111761089757604052565b6108ee6108c6565b9060008252600060208301526000604083015260006060830152565b9061093a916109176108e6565b5060020b600052600060205260406000209060020b600052602052604060002090565b60036109446108c6565b918054835260018101546020840152600281015460408401520154606082015290565b507f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048211811515166109c8570290565b6109d0610967565b0290565b610fa09060017e083126e978d4fdf3b645a1cac083126e978d4fdf3b645a1cac083126e978d48211600083131616610a3a575b60017ffff7ced916872b020c49ba5e353f7ced916872b020c49ba5e353f7ced916872c82126000831216166109c8570290565b610a42610967565b610a07565b7f80000000000000000000000000000000000000000000000000000000000000008114610a75575b60000390565b610a7d610967565b610a6f56fea26469706673582212209aaf99d8e08e92bcee69564d87b21fbd357f23b1fed96d53337b1637a4ee3f6d64736f6c634300080e0033';

type VPoolWrapperMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VPoolWrapperMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class VPoolWrapperMock__factory extends ContractFactory {
  constructor(...args: VPoolWrapperMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<VPoolWrapperMock> {
    return super.deploy(overrides || {}) as Promise<VPoolWrapperMock>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): VPoolWrapperMock {
    return super.attach(address) as VPoolWrapperMock;
  }
  override connect(signer: Signer): VPoolWrapperMock__factory {
    return super.connect(signer) as VPoolWrapperMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VPoolWrapperMockInterface {
    return new utils.Interface(_abi) as VPoolWrapperMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VPoolWrapperMock {
    return new Contract(address, _abi, signerOrProvider) as VPoolWrapperMock;
  }
}
