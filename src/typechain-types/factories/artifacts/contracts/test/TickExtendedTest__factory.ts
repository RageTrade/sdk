/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type {
  TickExtendedTest,
  TickExtendedTestInterface,
} from '../../../../artifacts/contracts/test/TickExtendedTest';

const _abi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [
      {
        internalType: 'int24',
        name: 'tickNext',
        type: 'int24',
      },
    ],
    name: 'cross',
    outputs: [],
    stateMutability: 'nonpayable',
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
        internalType: 'int24',
        name: 'tickCurrent',
        type: 'int24',
      },
    ],
    name: 'getFeeGrowthInside',
    outputs: [
      {
        internalType: 'uint256',
        name: 'extendedFeeGrowthInside',
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
      {
        internalType: 'int24',
        name: 'tickCurrent',
        type: 'int24',
      },
    ],
    name: 'getFundingPaymentGrowthInside',
    outputs: [
      {
        internalType: 'int256',
        name: 'fundingPaymentGrowth',
        type: 'int256',
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
        internalType: 'int24',
        name: 'tickCurrent',
        type: 'int24',
      },
    ],
    name: 'getNetPositionInside',
    outputs: [
      {
        internalType: 'int256',
        name: 'netPositionGrowthX128',
        type: 'int256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'int256',
        name: 'vTokenAmount',
        type: 'int256',
      },
      {
        internalType: 'uint256',
        name: 'liquidity',
        type: 'uint256',
      },
      {
        internalType: 'uint48',
        name: 'blockTimestamp',
        type: 'uint48',
      },
      {
        internalType: 'uint256',
        name: 'realPriceX128',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'virtualPriceX128',
        type: 'uint256',
      },
    ],
    name: 'registerTrade',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_extendedFeeGrowthOutsideX128',
        type: 'uint256',
      },
    ],
    name: 'setFeeGrowthOutsideX128',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
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
        internalType: 'struct FundingPayment.Info',
        name: 'fpGlobal_',
        type: 'tuple',
      },
    ],
    name: 'setFpGlobal',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'int24',
        name: 'tickIndex',
        type: 'int24',
      },
      {
        components: [
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
        internalType: 'struct TickExtended.Info',
        name: 'tick',
        type: 'tuple',
      },
    ],
    name: 'setTick',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'sumFeeGlobalX128',
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
  '0x60806040526001600160ff1b0360065534801561001b57600080fd5b506040516100289061006a565b604051809103906000f080158015610044573d6000803e3d6000fd5b50600780546001600160a01b0319166001600160a01b0392909216919091179055610077565b61045380610dc383390190565b610d3d806100866000396000f3fe608060405234801561001057600080fd5b50600436106100d45760003560e01c8063aac9125111610081578063d31834e31161005b578063d31834e31461026a578063d5a839951461027d578063f255c94b1461029057600080fd5b8063aac9125114610207578063c04b98c41461021a578063c13a44f61461022357600080fd5b80636719578c116100b25780636719578c1461015b5780636c544335146101a0578063a885d285146101e657600080fd5b80633e89175b146100d957806348aaa8c0146100ee57806348effdd714610148575b600080fd5b6100ec6100e73660046109af565b600555565b005b6101236100fc3660046109df565b60006020819052908152604090208054600182015460028301546003909301549192909184565b6040805194855260208501939093529183015260608201526080015b60405180910390f35b6100ec6101563660046109fa565b6102a3565b60075461017b9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161013f565b6001546002546003546004546101be9392919065ffffffffffff1684565b6040805194855260208501939093529183015265ffffffffffff16606082015260800161013f565b6101f96101f4366004610a12565b6102b5565b60405190815260200161013f565b6101f9610215366004610a12565b610307565b6101f960055481565b6100ec610231366004610a55565b600291820b6000908152602081815260409182902083518155908301516001820155908201519281019290925560600151600390910155565b6100ec6102783660046109df565b610359565b6101f961028b366004610a12565b61039f565b6100ec61029e366004610b01565b6103f2565b8060016102b08282610b4a565b505050565b60408051608081018252600154815260025460208201526003549181019190915260045465ffffffffffff1660608201526005546000916102fd918391879187918791610412565b5095945050505050565b60408051608081018252600154815260025460208201526003549181019190915260045465ffffffffffff16606082015260055460009161034f918391879187918791610412565b9695505050505050565b60408051608081018252600154815260025460208201526003549181019190915260045465ffffffffffff16606082015260055461039c9160009184919061056a565b50565b60408051608081018252600154815260025460208201526003549181019190915260045465ffffffffffff1660608201526005546000916103e7918391879187918791610412565b509095945050505050565b60065461040b90600190879087908790879087906105eb565b5050505050565b600285810b60009081526020889052604080822087840b835290822060018201548254948301548751949586958695949392869261045392909185916106fe565b90506000846003015490508a60020b8d60020b131561049d57828a6020015161047c9190610ba7565b9250818a6040015161048e9190610ba7565b915061049a818a610be6565b90505b6001840154845460028601548c516000926104bc9290918591906106fe565b90506000866003015490508d60020b8f60020b1361050557828d602001516104e49190610ba7565b9250818d604001516104f69190610ba7565b9150610502818d610be6565b90505b82868e602001516105169190610ba7565b6105209190610ba7565b9a5081858e604001516105339190610ba7565b61053d9190610ba7565b99508061054a858e610be6565b6105549190610be6565b9850505050505050505096509650969350505050565b600283810b6000908152602086905260408120805460018201549382015486519294610598939091906106fe565b84518355600183015460208601519192506105b291610ba7565b600183015560408401516105c7908290610ba7565b600283015560038201546105db9084610be6565b8260030181905550505050505050565b60038701546000906106089065ffffffffffff168686868661072c565b6001890154909150610620908290600160801b610785565b8860020160008282546106339190610bfd565b909155505087548190899060009061064c908490610bfd565b90915550610661905087600160801b886107dd565b8860010160008282546106749190610bfd565b909155505060038801805465ffffffffffff871665ffffffffffff199091168117909155604080518a54815260018b0154602082015260028b01548183015260608101929092526080820186905260a08201859052517faa55fabd6f264910ebc37d1f213e504b0952aeed471eac51bb24a792cf40ce789181900360c00190a15050505050505050565b600061071961070d8684610ba7565b8590600160801b6107dd565b6107239084610bfd565b95945050505050565b60006001600160ff1b038214610758576107468686610c3d565b6107539060050b83610c64565b61034f565b61034f6107658787610c3d565b65ffffffffffff166201518061077e8688828282610ba7565b919061083f565b60006107928484846107dd565b90506000811280156107c257506107c26107ab8561087c565b6107b48561087c565b6107bd8561087c565b61088d565b156107d6576107d360001982610bfd565b90505b9392505050565b600060018180806107ee88856108a6565b945092506107fc87856108a6565b9450915061080a86856108a6565b9450905061082161081c8484846108d0565b610982565b9450836108345761083185610ceb565b94505b505050509392505050565b600061086861081c600086126108555785610861565b61086186600019610c64565b85856108d0565b905060008412156107d6576107d381610ceb565b600061088782610998565b92915050565b600081838509801561089e57600191505b509392505050565b60008060008412156108c5579115916108be84610ceb565b91506108c9565b8391505b5092909150565b600080806000198587098587029250828110838203039150508060000361090957600084116108fe57600080fd5b5082900490506107d6565b80841161091557600080fd5b6000848688096000868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010186841190950394909402919094039290920491909117919091029150509392505050565b6000600160ff1b821061099457600080fd5b5090565b6000808213610994576109aa82610ceb565b610887565b6000602082840312156109c157600080fd5b5035919050565b8035600281900b81146109da57600080fd5b919050565b6000602082840312156109f157600080fd5b6107d6826109c8565b600060808284031215610a0c57600080fd5b50919050565b600080600060608486031215610a2757600080fd5b610a30846109c8565b9250610a3e602085016109c8565b9150610a4c604085016109c8565b90509250925092565b60008082840360a0811215610a6957600080fd5b610a72846109c8565b92506080601f1982011215610a8657600080fd5b506040516080810181811067ffffffffffffffff82111715610ab857634e487b7160e01b600052604160045260246000fd5b806040525060208401358152604084013560208201526060840135604082015260808401356060820152809150509250929050565b65ffffffffffff8116811461039c57600080fd5b600080600080600060a08688031215610b1957600080fd5b85359450602086013593506040860135610b3281610aed565b94979396509394606081013594506080013592915050565b813581556020820135600182015560408201356002820155600381016060830135610b7481610aed565b815465ffffffffffff191665ffffffffffff919091161790555050565b634e487b7160e01b600052601160045260246000fd5b60008083128015600160ff1b850184121615610bc557610bc5610b91565b836001600160ff1b03018313811615610be057610be0610b91565b50500390565b600082821015610bf857610bf8610b91565b500390565b6000808212826001600160ff1b0303841381151615610c1e57610c1e610b91565b600160ff1b8390038412811615610c3757610c37610b91565b50500190565b600065ffffffffffff83811690831681811015610c5c57610c5c610b91565b039392505050565b60006001600160ff1b03600084136000841385830485118282161615610c8c57610c8c610b91565b600160ff1b6000871282811687830589121615610cab57610cab610b91565b60008712925087820587128484161615610cc757610cc7610b91565b87850587128184161615610cdd57610cdd610b91565b505050929093029392505050565b6000600160ff1b8201610d0057610d00610b91565b506000039056fea264697066735822122017f685e651f9fc3f3c99bfc529365db6cebcba9bf01bc723e6bfa3a5f168364564736f6c634300080d0033608060405234801561001057600080fd5b50610433806100206000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c8063ecb217ea11610050578063ecb217ea146100a3578063f3058399146101b1578063f30dba93146101ba57600080fd5b8063461413191461006c5780637a79037514610088575b600080fd5b61007560025481565b6040519081526020015b60405180910390f35b6100a16100963660046102a4565b600191909155600255565b005b6100a16100b1366004610318565b600298890b60009081526020819052604090206fffffffffffffffffffffffffffffffff978816600160801b029790981696909617875560018701949094559585019190915560039093018054921515600160f81b027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff63ffffffff909316600160d81b02929092167affffffffffffffffffffffffffffffffffffffffffffffffffffff6001600160a01b03909616670100000000000000027fffffffffff00000000000000000000000000000000000000000000000000000090941666ffffffffffffff90951694909417929092179390931691909117919091179055565b61007560015481565b61023f6101c83660046103db565b60006020819052908152604090208054600182015460028301546003909301546fffffffffffffffffffffffffffffffff831693600160801b909304600f0b9290600681900b9067010000000000000081046001600160a01b031690600160d81b810463ffffffff1690600160f81b900460ff1688565b604080516fffffffffffffffffffffffffffffffff9099168952600f9790970b602089015295870194909452606086019290925260060b60808501526001600160a01b031660a084015263ffffffff1660c0830152151560e08201526101000161007f565b600080604083850312156102b757600080fd5b50508035926020909101359150565b8035600281900b81146102d857600080fd5b919050565b80356001600160a01b03811681146102d857600080fd5b803563ffffffff811681146102d857600080fd5b803580151581146102d857600080fd5b60008060008060008060008060006101208a8c03121561033757600080fd5b6103408a6102c6565b985060208a01356fffffffffffffffffffffffffffffffff8116811461036557600080fd5b975060408a0135600f81900b811461037c57600080fd5b965060608a0135955060808a0135945060a08a0135600681900b81146103a157600080fd5b93506103af60c08b016102dd565b92506103bd60e08b016102f4565b91506103cc6101008b01610308565b90509295985092959850929598565b6000602082840312156103ed57600080fd5b6103f6826102c6565b939250505056fea2646970667358221220be0beecda68faf253748946a9f01382fa0bc6459158b36356798c635942d67c364736f6c634300080d0033';

type TickExtendedTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TickExtendedTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TickExtendedTest__factory extends ContractFactory {
  constructor(...args: TickExtendedTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TickExtendedTest> {
    return super.deploy(overrides || {}) as Promise<TickExtendedTest>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TickExtendedTest {
    return super.attach(address) as TickExtendedTest;
  }
  override connect(signer: Signer): TickExtendedTest__factory {
    return super.connect(signer) as TickExtendedTest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TickExtendedTestInterface {
    return new utils.Interface(_abi) as TickExtendedTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TickExtendedTest {
    return new Contract(address, _abi, signerOrProvider) as TickExtendedTest;
  }
}
