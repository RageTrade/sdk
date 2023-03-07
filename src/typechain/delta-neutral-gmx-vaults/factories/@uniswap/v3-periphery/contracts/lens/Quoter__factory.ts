/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from 'ethers';
import type { NonPayableOverrides } from '../../../../../common';
import type {
  Quoter,
  QuoterInterface,
} from '../../../../../@uniswap/v3-periphery/contracts/lens/Quoter';

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_factory',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_WETH9',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'WETH9',
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
    name: 'factory',
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
    inputs: [
      {
        internalType: 'bytes',
        name: 'path',
        type: 'bytes',
      },
      {
        internalType: 'uint256',
        name: 'amountIn',
        type: 'uint256',
      },
    ],
    name: 'quoteExactInput',
    outputs: [
      {
        internalType: 'uint256',
        name: 'amountOut',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'tokenIn',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'tokenOut',
        type: 'address',
      },
      {
        internalType: 'uint24',
        name: 'fee',
        type: 'uint24',
      },
      {
        internalType: 'uint256',
        name: 'amountIn',
        type: 'uint256',
      },
      {
        internalType: 'uint160',
        name: 'sqrtPriceLimitX96',
        type: 'uint160',
      },
    ],
    name: 'quoteExactInputSingle',
    outputs: [
      {
        internalType: 'uint256',
        name: 'amountOut',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'path',
        type: 'bytes',
      },
      {
        internalType: 'uint256',
        name: 'amountOut',
        type: 'uint256',
      },
    ],
    name: 'quoteExactOutput',
    outputs: [
      {
        internalType: 'uint256',
        name: 'amountIn',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'tokenIn',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'tokenOut',
        type: 'address',
      },
      {
        internalType: 'uint24',
        name: 'fee',
        type: 'uint24',
      },
      {
        internalType: 'uint256',
        name: 'amountOut',
        type: 'uint256',
      },
      {
        internalType: 'uint160',
        name: 'sqrtPriceLimitX96',
        type: 'uint160',
      },
    ],
    name: 'quoteExactOutputSingle',
    outputs: [
      {
        internalType: 'uint256',
        name: 'amountIn',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
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
        name: 'path',
        type: 'bytes',
      },
    ],
    name: 'uniswapV3SwapCallback',
    outputs: [],
    stateMutability: 'view',
    type: 'function',
  },
] as const;

const _bytecode =
  '0x60c06040523480156200001157600080fd5b5060405162001cb738038062001cb7833981810160405281019062000037919062000115565b81818173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250508073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1681525050505050506200015c565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620000dd82620000b0565b9050919050565b620000ef81620000d0565b8114620000fb57600080fd5b50565b6000815190506200010f81620000e4565b92915050565b600080604083850312156200012f576200012e620000ab565b5b60006200013f85828601620000fe565b92505060206200015285828601620000fe565b9150509250929050565b60805160a051611b276200019060003960006103f701526000818161041b0152818161067701526108430152611b276000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063c45a01551161005b578063c45a015514610100578063cdca17531461011e578063f7729d431461014e578063fa461e331461017e5761007d565b80632f80bb1d1461008257806330d07f21146100b25780634aa4a4fc146100e2575b600080fd5b61009c60048036038101906100979190610f77565b61019a565b6040516100a99190610fe2565b60405180910390f35b6100cc60048036038101906100c791906110c2565b610207565b6040516100d99190610fe2565b60405180910390f35b6100ea6103f5565b6040516100f7919061114c565b60405180910390f35b610108610419565b604051610115919061114c565b60405180910390f35b61013860048036038101906101339190610f77565b61043d565b6040516101459190610fe2565b60405180910390f35b610168600480360381019061016391906110c2565b6104aa565b6040516101759190610fe2565b60405180910390f35b6101986004803603810190610193919061119d565b610646565b005b60005b6001156102005760006101af8461075f565b905060008060006101bf8761079e565b9250925092506101d3828483896000610207565b955083156101eb576101e4876107f8565b96506101f7565b85945050505050610201565b5050505061019d565b5b92915050565b6000808573ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff1610905060008373ffffffffffffffffffffffffffffffffffffffff160361026157836000819055505b61026c87878761083c565b73ffffffffffffffffffffffffffffffffffffffff1663128acb0830836102928861087b565b61029b9061123b565b60008873ffffffffffffffffffffffffffffffffffffffff16146102bf57876102fe565b856102ea57600173fffd8963efd1fc6a506488495d951d5263988d266102e59190611283565b6102fd565b60016401000276a36102fc91906112b7565b5b5b8b8b8e6040516020016103139392919061137f565b6040516020818303038152906040526040518663ffffffff1660e01b815260040161034295949392919061147d565b60408051808303816000875af192505050801561037d57506040513d601f19601f8201168201806040525081019061037a91906114ec565b60015b6103e8573d80600081146103ad576040519150601f19603f3d011682016040523d82523d6000602084013e6103b2565b606091505b5060008473ffffffffffffffffffffffffffffffffffffffff16036103d657600080555b6103df816108b1565b925050506103ec565b5050505b95945050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b60005b6001156104a35760006104528461075f565b905060008060006104628761079e565b9250925092506104768383838960006104aa565b9550831561048e57610487876107f8565b965061049a565b859450505050506104a4565b50505050610440565b5b92915050565b6000808573ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff161090506104e987878761083c565b73ffffffffffffffffffffffffffffffffffffffff1663128acb08308361050f8861087b565b60008873ffffffffffffffffffffffffffffffffffffffff16146105335787610572565b8561055e57600173fffd8963efd1fc6a506488495d951d5263988d266105599190611283565b610571565b60016401000276a361057091906112b7565b5b5b8c8b8d6040516020016105879392919061137f565b6040516020818303038152906040526040518663ffffffff1660e01b81526004016105b695949392919061147d565b60408051808303816000875af19250505080156105f157506040513d601f19601f820116820180604052508101906105ee91906114ec565b60015b610639573d8060008114610621576040519150601f19603f3d011682016040523d82523d6000602084013e610626565b606091505b50610630816108b1565b9250505061063d565b5050505b95945050505050565b60008313806106555750600082135b61065e57600080fd5b600080600061066c8461079e565b92509250925061069e7f0000000000000000000000000000000000000000000000000000000000000000848484610972565b5060008060008089136106ea578573ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1610888a6106e59061123b565b610725565b8473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff161089896107249061123b565b5b925092509250821561073c57604051818152602081fd5b600080541461075457600054811461075357600080fd5b5b604051828152602081fd5b60006003601461076f919061152c565b60146003601461077f919061152c565b610789919061152c565b610793919061152c565b825110159050919050565b60008060006107b760008561099290919063ffffffff16565b92506107cd601485610a0890919063ffffffff16565b90506107ef600360146107e0919061152c565b8561099290919063ffffffff16565b91509193909250565b60606108356003601461080b919061152c565b60036014610819919061152c565b84516108259190611582565b84610abe9092919063ffffffff16565b9050919050565b60006108727f000000000000000000000000000000000000000000000000000000000000000061086d868686610bdc565b610c78565b90509392505050565b60007f800000000000000000000000000000000000000000000000000000000000000082106108a957600080fd5b819050919050565b6000602082511461095757604482511015610901576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108f890611613565b60405180910390fd5b6004820191508180602001905181019061091b91906116d4565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161094e9190611761565b60405180910390fd5b8180602001905181019061096b9190611798565b9050919050565b600061098885610983868686610bdc565b610d49565b9050949350505050565b60006014826109a1919061152c565b835110156109e4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109db90611811565b60405180910390fd5b60006c01000000000000000000000000836020860101510490508091505092915050565b600081600383610a18919061152c565b1015610a59576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a509061187d565b60405180910390fd5b600382610a66919061152c565b83511015610aa9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aa0906118e9565b60405180910390fd5b60008260038501015190508091505092915050565b606081601f83610ace919061152c565b1015610b0f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b0690611955565b60405180910390fd5b8183610b1b919061152c565b84511015610b5e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b55906119c1565b60405180910390fd5b6060821560008114610b7f5760405191506000825260208201604052610bd0565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015610bbd5780518352602083019250602081019050610ba0565b50868552601f19601f8301166040525050505b50809150509392505050565b610be4610d95565b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161115610c2357828480945081955050505b60405180606001604052808573ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1681526020018362ffffff1681525090509392505050565b6000816020015173ffffffffffffffffffffffffffffffffffffffff16826000015173ffffffffffffffffffffffffffffffffffffffff1610610cba57600080fd5b82826000015183602001518460400151604051602001610cdc939291906119f0565b604051602081830303815290604052805190602001207fe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b5460001b604051602001610d2893929190611aa9565b6040516020818303038152906040528051906020012060001c905092915050565b6000610d558383610c78565b90508073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610d8f57600080fd5b92915050565b6040518060600160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600062ffffff1681525090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610e4e82610e05565b810181811067ffffffffffffffff82111715610e6d57610e6c610e16565b5b80604052505050565b6000610e80610de7565b9050610e8c8282610e45565b919050565b600067ffffffffffffffff821115610eac57610eab610e16565b5b610eb582610e05565b9050602081019050919050565b82818337600083830152505050565b6000610ee4610edf84610e91565b610e76565b905082815260208101848484011115610f0057610eff610e00565b5b610f0b848285610ec2565b509392505050565b600082601f830112610f2857610f27610dfb565b5b8135610f38848260208601610ed1565b91505092915050565b6000819050919050565b610f5481610f41565b8114610f5f57600080fd5b50565b600081359050610f7181610f4b565b92915050565b60008060408385031215610f8e57610f8d610df1565b5b600083013567ffffffffffffffff811115610fac57610fab610df6565b5b610fb885828601610f13565b9250506020610fc985828601610f62565b9150509250929050565b610fdc81610f41565b82525050565b6000602082019050610ff76000830184610fd3565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061102882610ffd565b9050919050565b6110388161101d565b811461104357600080fd5b50565b6000813590506110558161102f565b92915050565b600062ffffff82169050919050565b6110738161105b565b811461107e57600080fd5b50565b6000813590506110908161106a565b92915050565b61109f81610ffd565b81146110aa57600080fd5b50565b6000813590506110bc81611096565b92915050565b600080600080600060a086880312156110de576110dd610df1565b5b60006110ec88828901611046565b95505060206110fd88828901611046565b945050604061110e88828901611081565b935050606061111f88828901610f62565b9250506080611130888289016110ad565b9150509295509295909350565b6111468161101d565b82525050565b6000602082019050611161600083018461113d565b92915050565b6000819050919050565b61117a81611167565b811461118557600080fd5b50565b60008135905061119781611171565b92915050565b6000806000606084860312156111b6576111b5610df1565b5b60006111c486828701611188565b93505060206111d586828701611188565b925050604084013567ffffffffffffffff8111156111f6576111f5610df6565b5b61120286828701610f13565b9150509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061124682611167565b91507f800000000000000000000000000000000000000000000000000000000000000082036112785761127761120c565b5b816000039050919050565b600061128e82610ffd565b915061129983610ffd565b9250828210156112ac576112ab61120c565b5b828203905092915050565b60006112c282610ffd565b91506112cd83610ffd565b92508273ffffffffffffffffffffffffffffffffffffffff038211156112f6576112f561120c565b5b828201905092915050565b60008160601b9050919050565b600061131982611301565b9050919050565b600061132b8261130e565b9050919050565b61134361133e8261101d565b611320565b82525050565b60008160e81b9050919050565b600061136182611349565b9050919050565b6113796113748261105b565b611356565b82525050565b600061138b8286611332565b60148201915061139b8285611368565b6003820191506113ab8284611332565b601482019150819050949350505050565b60008115159050919050565b6113d1816113bc565b82525050565b6113e081611167565b82525050565b6113ef81610ffd565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561142f578082015181840152602081019050611414565b8381111561143e576000848401525b50505050565b600061144f826113f5565b6114598185611400565b9350611469818560208601611411565b61147281610e05565b840191505092915050565b600060a082019050611492600083018861113d565b61149f60208301876113c8565b6114ac60408301866113d7565b6114b960608301856113e6565b81810360808301526114cb8184611444565b90509695505050505050565b6000815190506114e681611171565b92915050565b6000806040838503121561150357611502610df1565b5b6000611511858286016114d7565b9250506020611522858286016114d7565b9150509250929050565b600061153782610f41565b915061154283610f41565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156115775761157661120c565b5b828201905092915050565b600061158d82610f41565b915061159883610f41565b9250828210156115ab576115aa61120c565b5b828203905092915050565b600082825260208201905092915050565b7f556e6578706563746564206572726f7200000000000000000000000000000000600082015250565b60006115fd6010836115b6565b9150611608826115c7565b602082019050919050565b6000602082019050818103600083015261162c816115f0565b9050919050565b600067ffffffffffffffff82111561164e5761164d610e16565b5b61165782610e05565b9050602081019050919050565b600061167761167284611633565b610e76565b90508281526020810184848401111561169357611692610e00565b5b61169e848285611411565b509392505050565b600082601f8301126116bb576116ba610dfb565b5b81516116cb848260208601611664565b91505092915050565b6000602082840312156116ea576116e9610df1565b5b600082015167ffffffffffffffff81111561170857611707610df6565b5b611714848285016116a6565b91505092915050565b600081519050919050565b60006117338261171d565b61173d81856115b6565b935061174d818560208601611411565b61175681610e05565b840191505092915050565b6000602082019050818103600083015261177b8184611728565b905092915050565b60008151905061179281610f4b565b92915050565b6000602082840312156117ae576117ad610df1565b5b60006117bc84828501611783565b91505092915050565b7f746f416464726573735f6f75744f66426f756e64730000000000000000000000600082015250565b60006117fb6015836115b6565b9150611806826117c5565b602082019050919050565b6000602082019050818103600083015261182a816117ee565b9050919050565b7f746f55696e7432345f6f766572666c6f77000000000000000000000000000000600082015250565b60006118676011836115b6565b915061187282611831565b602082019050919050565b600060208201905081810360008301526118968161185a565b9050919050565b7f746f55696e7432345f6f75744f66426f756e6473000000000000000000000000600082015250565b60006118d36014836115b6565b91506118de8261189d565b602082019050919050565b60006020820190508181036000830152611902816118c6565b9050919050565b7f736c6963655f6f766572666c6f77000000000000000000000000000000000000600082015250565b600061193f600e836115b6565b915061194a82611909565b602082019050919050565b6000602082019050818103600083015261196e81611932565b9050919050565b7f736c6963655f6f75744f66426f756e6473000000000000000000000000000000600082015250565b60006119ab6011836115b6565b91506119b682611975565b602082019050919050565b600060208201905081810360008301526119da8161199e565b9050919050565b6119ea8161105b565b82525050565b6000606082019050611a05600083018661113d565b611a12602083018561113d565b611a1f60408301846119e1565b949350505050565b600081905092915050565b7fff00000000000000000000000000000000000000000000000000000000000000600082015250565b6000611a68600183611a27565b9150611a7382611a32565b600182019050919050565b6000819050919050565b6000819050919050565b611aa3611a9e82611a7e565b611a88565b82525050565b6000611ab482611a5b565b9150611ac08286611332565b601482019150611ad08285611a92565b602082019150611ae08284611a92565b60208201915081905094935050505056fea2646970667358221220a72c379c345a952c7c569a8b9f80b9ea94d976cff0640a1a3bc186f3da1b8c8a64736f6c634300080f0033';

type QuoterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: QuoterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Quoter__factory extends ContractFactory {
  constructor(...args: QuoterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _factory: AddressLike,
    _WETH9: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_factory, _WETH9, overrides || {});
  }
  override deploy(
    _factory: AddressLike,
    _WETH9: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_factory, _WETH9, overrides || {}) as Promise<
      Quoter & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Quoter__factory {
    return super.connect(runner) as Quoter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): QuoterInterface {
    return new Interface(_abi) as QuoterInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Quoter {
    return new Contract(address, _abi, runner) as unknown as Quoter;
  }
}
