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
        internalType: 'uint32',
        name: 'poolId',
        type: 'uint32',
      },
    ],
    name: 'getPoolSettings',
    outputs: [
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
];

const _bytecode =
  '0x608060405234801561001057600080fd5b506108d0806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063313ae160146100515780635290a27c1461008157806354112e80146100b8578063e2b504fa146100cb575b600080fd5b61006461005f36600461059a565b610131565b6040516001600160a01b0390911681526020015b60405180910390f35b61009461008f36600461059a565b610144565b604080516001600160a01b03909316835263ffffffff909116602083015201610078565b6100946100c636600461059a565b61015c565b6100de6100d936600461059a565b6101e5565b6040805161ffff98891681529688166020880152969094169585019590955263ffffffff90911660608401521515608083015291151560a08201526001600160a01b0390911660c082015260e001610078565b600061013d8383610212565b9392505050565b6000806101518484610294565b909590945092505050565b6000806101698484610294565b604051635b3876a960e11b815263ffffffff8616600482015291935091506001600160a01b0385169063b670ed529060240161014060405180830381865afa1580156101b9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101dd919061068d565b509250929050565b60008060008060008060006101fa89896103e6565b959f949e50929c50909a509850965090945092505050565b600080836001600160a01b0316631e2eaeaf61022d856104db565b6040518263ffffffff1660e01b815260040161024b91815260200190565b602060405180830381865afa158015610268573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061028c9190610781565b949350505050565b6040805160028082526060820183526000928392839290916020830190803683370190505090506102c4846104db565b816000815181106102d7576102d761079a565b6020026020010181815250506102ec84610509565b816001815181106102ff576102ff61079a565b602090810291909101015260405163dbd035ff60e01b81526001600160a01b0386169063dbd035ff906103369084906004016107b0565b600060405180830381865afa158015610353573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261037b91908101906107f4565b905060006103a2826000815181106103955761039561079a565b6020026020010151610521565b50809150508093506103db60b060d0846001815181106103c4576103c461079a565b60200260200101516105399092919063ffffffff16565b925050509250929050565b600080600080600080600080896001600160a01b0316631e2eaeaf61040a8b610509565b6040518263ffffffff1660e01b815260040161042891815260200190565b602060405180830381865afa158015610445573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104699190610781565b905061047481610548565b909850905061048281610548565b909750905061049081610548565b909650905061049e8161055b565b90955060ff80821615159550600882901c161515935060101c905060006104c482610521565b50989b979a50959850939692959194509192509050565b600061050360016104ff606463ffffffff86165b9060009182526020526040902090565b0190565b92915050565b600061050360036104ff606463ffffffff86166104ef565b600080806001600160a01b03841660a085901c610151565b91811b61010092909203011c90565b6000808061ffff8416601085901c610151565b6000808063ffffffff8416602085901c610151565b6001600160a01b038116811461058557600080fd5b50565b63ffffffff8116811461058557600080fd5b600080604083850312156105ad57600080fd5b82356105b881610570565b915060208301356105c881610588565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b6040516080810167ffffffffffffffff8111828210171561060c5761060c6105d3565b60405290565b60405160e0810167ffffffffffffffff8111828210171561060c5761060c6105d3565b604051601f8201601f1916810167ffffffffffffffff8111828210171561065e5761065e6105d3565b604052919050565b805161ffff8116811461067857600080fd5b919050565b8051801515811461067857600080fd5b60008183036101408112156106a157600080fd5b6106a96105e9565b83516106b481610570565b815260208401516106c481610570565b602082015260408401516106d781610570565b604082015260e0605f19830112156106ee57600080fd5b6106f6610612565b915061070460608501610666565b825261071260808501610666565b602083015261072360a08501610666565b604083015260c084015161073681610588565b606083015261074760e0850161067d565b6080830152610759610100850161067d565b60a083015261012084015161076d81610570565b60c083015260608101919091529392505050565b60006020828403121561079357600080fd5b5051919050565b634e487b7160e01b600052603260045260246000fd5b6020808252825182820181905260009190848201906040850190845b818110156107e8578351835292840192918401916001016107cc565b50909695505050505050565b6000602080838503121561080757600080fd5b825167ffffffffffffffff8082111561081f57600080fd5b818501915085601f83011261083357600080fd5b815181811115610845576108456105d3565b8060051b9150610856848301610635565b818152918301840191848101908884111561087057600080fd5b938501935b8385101561088e57845182529385019390850190610875565b9897505050505050505056fea26469706673582212201b9aa44d34355c35cdcffaab6807f87289ee3f2b7d9aabd3f80529b79cb2417d64736f6c634300080d0033';

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
