/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type {
  VTokenPositionTest,
  VTokenPositionTestInterface,
} from '../../../contracts/test/VTokenPositionTest';

const _abi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [
      {
        internalType: 'int256',
        name: '_balance',
        type: 'int256',
      },
      {
        internalType: 'int256',
        name: '_netTraderPosition',
        type: 'int256',
      },
      {
        internalType: 'int256',
        name: '_sumALastX128',
        type: 'int256',
      },
    ],
    name: 'init',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'price',
        type: 'uint256',
      },
    ],
    name: 'marketValue',
    outputs: [
      {
        internalType: 'int256',
        name: 'value',
        type: 'int256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'riskSide',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'unrealizedFundingPayment',
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
  '0x608060405234801561001057600080fd5b5060405161001d9061005f565b604051809103906000f080158015610039573d6000803e3d6000fd5b50600280546001600160a01b0319166001600160a01b039290921691909117905561006c565b610afd8061070a83390190565b61068f8061007b6000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c80635094b8ea116100505780635094b8ea146100a0578063ac210cc7146100b6578063f78231b2146100e157600080fd5b8063125071271461006c578063481050a91461008b575b600080fd5b6100746100f4565b60405160ff90911681526020015b60405180910390f35b61009e610099366004610494565b61013d565b005b6100a8610179565b604051908152602001610082565b6002546100c9906001600160a01b031681565b6040516001600160a01b039091168152602001610082565b6100a86100ef3660046104c0565b6101bb565b600080805260016020526101277fa6eef7e35abe7026729641147f7915573c7e97b47efa546f5f6e3230263bcb49610205565b6001811115610138576101386104d9565b905090565b600080546001908290818061015183610505565b9091555081526020810191909152604001600020938455506001830191909155600290910155565b6002546000808052600160205290610138907fa6eef7e35abe7026729641147f7915573c7e97b47efa546f5f6e3230263bcb49906001600160a01b0316610221565b60025460008080526001602052906101ff907fa6eef7e35abe7026729641147f7915573c7e97b47efa546f5f6e3230263bcb499084906001600160a01b03166102af565b92915050565b6000808260000154136102195760016101ff565b600092915050565b600080826001600160a01b031663a3a1e7e96040518163ffffffff1660e01b8152600401602060405180830381865afa158015610262573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610286919061051e565b9050600061029d82866002015487600101546102e1565b6102a690610537565b95945050505050565b82546000906102c39084600160801b610303565b90506102cf8483610221565b6102d99082610553565b949350505050565b60006102d96102f08486610593565b8390600160801b610345565b9392505050565b600061033161032c600086126103195785610325565b610325866000196105d2565b85856103a2565b610454565b905060008412156102fc576102d981610537565b60006001818080610356888561046a565b94509250610364878561046a565b94509150610372868561046a565b9450905061038461032c8484846103a2565b9450836103975761039485610537565b94505b505050509392505050565b60008080600019858709858702925082811083820303915050806000036103db57600084116103d057600080fd5b5082900490506102fc565b8084116103e757600080fd5b6000848688096000868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010186841190950394909402919094039290920491909117919091029150509392505050565b6000600160ff1b821061046657600080fd5b5090565b60008060008412156104895791159161048284610537565b915061048d565b8391505b5092909150565b6000806000606084860312156104a957600080fd5b505081359360208301359350604090920135919050565b6000602082840312156104d257600080fd5b5035919050565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060018201610517576105176104ef565b5060010190565b60006020828403121561053057600080fd5b5051919050565b6000600160ff1b820161054c5761054c6104ef565b5060000390565b6000808212826001600160ff1b0303841381151615610574576105746104ef565b600160ff1b839003841281161561058d5761058d6104ef565b50500190565b60008083128015600160ff1b8501841216156105b1576105b16104ef565b836001600160ff1b030183138116156105cc576105cc6104ef565b50500390565b60006001600160ff1b036000841360008413858304851182821616156105fa576105fa6104ef565b600160ff1b6000871282811687830589121615610619576106196104ef565b60008712925087820587128484161615610635576106356104ef565b8785058712818416161561064b5761064b6104ef565b50505092909302939250505056fea264697066735822122048a3cc304cceecc363266b9d2a4fa9f7b47bd6824da030db91af2d71d400382264736f6c634300080d0033608060405234801561001057600080fd5b50610add806100206000396000f3fe608060405234801561001057600080fd5b50600436106101515760003560e01c80636719578c116100cd578063a3a1e7e911610081578063d74dcaca11610066578063d74dcaca14610366578063ea6e4e521461039f578063fca6fbf2146103e757600080fd5b8063a3a1e7e914610313578063a3c35e2c1461023957600080fd5b806386c8e9a7116100b257806386c8e9a71461032a57806397c71faf14610340578063a34123a71461035357600080fd5b80636719578c146102e85780637779815c1461031357600080fd5b80632a99a79211610124578063512403361161010957806351240336146102c257806356d15a88146102d35780635e622abc146102e157600080fd5b80632a99a792146102395780634c2ebc581461025957600080fd5b806302dc9951146101565780630d8f6f461461017e578063195cd92c1461019f5780631dce5fcf14610217575b600080fd5b6001546101659062ffffff1681565b60405162ffffff90911681526020015b60405180910390f35b61019161018c3660046106e5565b610400565b604051908152602001610175565b6101b26101ad366004610728565b610415565b6040516101759190600060e082019050825182526020830151602083015260408301516040830152606083015160608301526080830151608083015260a08301516001600160a01b0380821660a08501528060c08601511660c0850152505092915050565b61022a61022536600461077a565b6104c3565b604051610175939291906107c2565b61024c610247366004610806565b610594565b6040516101759190610839565b6102c0610267366004610864565b60408051608081018252948552602080860194855285820193845260608601928352600297880b600090815280825282812097890b81529690529094209251835590516001830155519281019290925551600390910155565b005b6102c06102d03660046108b9565b50565b6102c06102d03660046108d4565b6000610191565b6003546102fb906001600160a01b031681565b6040516001600160a01b039091168152602001610175565b701400000000000000000000000000000000610191565b600154610165906301000000900462ffffff1681565b61019161034e3660046106e5565b610611565b61022a61036136600461077a565b61061f565b6102c06103743660046108ec565b600293840b6000908152602085815260408083209590960b8252939093529290912090815560010155565b6102c06103ad36600461092e565b600380547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0392909216919091179055565b600154610165906601000000000000900462ffffff1681565b600061040f82610f9f19610961565b92915050565b6104676040518060e00160405280600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b031681525090565b8315156000841303610499576020810183905261048383610a01565b61048f90610fa0610961565b60408201526104bc565b610fa06104a584610a01565b6104af9190610a1d565b6020820152604081018390525b9392505050565b6000806104f16040518060800160405280600081526020016000815260200160008152602001600081525090565b836001600160801b03166004600082825461050c9190610a59565b9091555050600286810b6000908152602082815260408083209389900b83529290522060010154610547906001600160801b03861690610a71565b600287810b600090815260208281526040808320938a900b8352929052205490935061057d906001600160801b03861690610a71565b91506105898686610594565b905093509350939050565b6105bf6040518060800160405280600081526020016000815260200160008152602001600081525090565b50600291820b60009081526020818152604080832093850b8352928152908290208251608081018452815481526001820154928101929092529283015491810191909152600390910154606082015290565b600061040f610fa083610a1d565b60008061064d6040518060800160405280600081526020016000815260200160008152602001600081525090565b836001600160801b0316600460008282546106689190610a90565b9091555050600286810b6000908152602082815260408083209389900b835292905220546106a0906001600160801b03861690610a71565b600287810b600090815260208281526040808320938a900b835292905220600101549092506106d9906001600160801b03861690610a71565b92506105898686610594565b6000602082840312156106f757600080fd5b5035919050565b8035801515811461070e57600080fd5b919050565b6001600160a01b03811681146102d057600080fd5b60008060006060848603121561073d57600080fd5b610746846106fe565b925060208401359150604084013561075d81610713565b809150509250925092565b8035600281900b811461070e57600080fd5b60008060006060848603121561078f57600080fd5b61079884610768565b92506107a660208501610768565b915060408401356001600160801b038116811461075d57600080fd5b8381526020810183905260c081016107fe6040830184805182526020810151602083015260408101516040830152606081015160608301525050565b949350505050565b6000806040838503121561081957600080fd5b61082283610768565b915061083060208401610768565b90509250929050565b815181526020808301519082015260408083015190820152606080830151908201526080810161040f565b60008060008060008060c0878903121561087d57600080fd5b61088687610768565b955061089460208801610768565b95989597505050506040840135936060810135936080820135935060a0909101359150565b6000602082840312156108cb57600080fd5b6104bc826106fe565b600060c082840312156108e657600080fd5b50919050565b6000806000806080858703121561090257600080fd5b61090b85610768565b935061091960208601610768565b93969395505050506040820135916060013590565b60006020828403121561094057600080fd5b81356104bc81610713565b634e487b7160e01b600052601160045260246000fd5b60007f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6000841360008413858304851182821616156109a2576109a261094b565b600160ff1b60008712828116878305891216156109c1576109c161094b565b600087129250878205871284841616156109dd576109dd61094b565b878505871281841616156109f3576109f361094b565b505050929093029392505050565b6000600160ff1b8201610a1657610a1661094b565b5060000390565b600082610a3a57634e487b7160e01b600052601260045260246000fd5b600160ff1b821460001984141615610a5457610a5461094b565b500590565b60008219821115610a6c57610a6c61094b565b500190565b6000816000190483118215151615610a8b57610a8b61094b565b500290565b600082821015610aa257610aa261094b565b50039056fea2646970667358221220263efaa3aa4f2f1eabb69c985bfda5e99c93e51dbf8b24c9c9e3453c8f3ab94464736f6c634300080d0033';

type VTokenPositionTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VTokenPositionTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class VTokenPositionTest__factory extends ContractFactory {
  constructor(...args: VTokenPositionTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<VTokenPositionTest> {
    return super.deploy(overrides || {}) as Promise<VTokenPositionTest>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): VTokenPositionTest {
    return super.attach(address) as VTokenPositionTest;
  }
  override connect(signer: Signer): VTokenPositionTest__factory {
    return super.connect(signer) as VTokenPositionTest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VTokenPositionTestInterface {
    return new utils.Interface(_abi) as VTokenPositionTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VTokenPositionTest {
    return new Contract(address, _abi, signerOrProvider) as VTokenPositionTest;
  }
}
