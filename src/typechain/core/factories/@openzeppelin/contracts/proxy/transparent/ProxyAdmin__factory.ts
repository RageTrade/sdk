/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
  ContractDeployTransaction,
  ContractRunner,
} from 'ethers';
import type { NonPayableOverrides } from '../../../../../common';
import type {
  ProxyAdmin,
  ProxyAdminInterface,
} from '../../../../../@openzeppelin/contracts/proxy/transparent/ProxyAdmin';

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'contract TransparentUpgradeableProxy',
        name: 'proxy',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'newAdmin',
        type: 'address',
      },
    ],
    name: 'changeProxyAdmin',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract TransparentUpgradeableProxy',
        name: 'proxy',
        type: 'address',
      },
    ],
    name: 'getProxyAdmin',
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
        internalType: 'contract TransparentUpgradeableProxy',
        name: 'proxy',
        type: 'address',
      },
    ],
    name: 'getProxyImplementation',
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
    name: 'owner',
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
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract TransparentUpgradeableProxy',
        name: 'proxy',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'implementation',
        type: 'address',
      },
    ],
    name: 'upgrade',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract TransparentUpgradeableProxy',
        name: 'proxy',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'implementation',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'upgradeAndCall',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
] as const;

const _bytecode =
  '0x6080806040523461005b5760008054336001600160a01b0319821681178355916001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09084a361086f90816100618239f35b600080fdfe608080604052600436101561001357600080fd5b6000803560e01c918263204e1c7a146100b85750508063715018a6146100af5780637eff275e146100a65780638da5cb5b1461009d5780639623609d1461009457806399a88ec41461008b578063f2fde38b146100825763f3b7dead1461007a575b600080fd5b6100756105ea565b506100756104c9565b50610075610446565b506100756103ba565b506100756102e6565b50610075610245565b5061007561019a565b3461016d57602060031936011261016d57818060048035936100d985610171565b7f5c60da1b00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8095165afa9161011f6106f8565b921561016a575061013c8260208061016695518301019101610728565b166040519182918291909173ffffffffffffffffffffffffffffffffffffffff6020820193169052565b0390f35b80fd5b5080fd5b73ffffffffffffffffffffffffffffffffffffffff81160361007557565b600091031261007557565b50346100755760008060031936011261016a576101b5610679565b80547fffffffffffffffffffffffff0000000000000000000000000000000000000000811682558173ffffffffffffffffffffffffffffffffffffffff60405192167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08284a3f35b60031960409101126100755760043561023581610171565b9060243561024281610171565b90565b5034610075576102543661021d565b61025c610679565b73ffffffffffffffffffffffffffffffffffffffff80921691823b1561007557602491604051928380927f8f283970000000000000000000000000000000000000000000000000000000008252600096879586921660048401525af180156102d9575b6102ca575b50604051f35b6102d39061034b565b386102c4565b6102e161073d565b6102bf565b503461007557600060031936011261007557602073ffffffffffffffffffffffffffffffffffffffff60005416604051908152f35b507f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b67ffffffffffffffff811161035f57604052565b61036761031b565b604052565b90601f601f19910116810190811067ffffffffffffffff82111761035f57604052565b601f19601f60209267ffffffffffffffff81116103ad575b01160190565b6103b561031b565b6103a7565b506060600319360112610075576004356103d381610171565b602435906103e082610171565b6044359167ffffffffffffffff831161007557366023840112156100755782600401359161040d8361038f565b9261041b604051948561036c565b80845236602482870101116100755760208160009260246104449801838801378501015261074a565b005b5034610075576104553661021d565b61045d610679565b73ffffffffffffffffffffffffffffffffffffffff80921691823b1561007557602491604051928380927f3659cfe6000000000000000000000000000000000000000000000000000000008252600096879586921660048401525af180156102d9576102ca5750604051f35b5034610075576020600319360112610075576004356104e781610171565b6104ef610679565b73ffffffffffffffffffffffffffffffffffffffff80911690811561056657600091825491817fffffffffffffffffffffffff0000000000000000000000000000000000000000841617845560405192167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08484a3f35b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152fd5b50346100755760206003193601126100755760043561060881610171565b60008060046040517ff851a44000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8095165afa906106566106f8565b911561007557610670826020808095518301019101610728565b16604051908152f35b73ffffffffffffffffffffffffffffffffffffffff60005416330361069a57565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b3d15610723573d906107098261038f565b91610717604051938461036c565b82523d6000602084013e565b606090565b90816020910312610075575161024281610171565b506040513d6000823e3d90fd5b9091610754610679565b73ffffffffffffffffffffffffffffffffffffffff80921691823b156100755792906040519384927f4f1ef286000000000000000000000000000000000000000000000000000000008452166004830152604060248301528051908160448401526000905b82821061081d5750606483601f19601f8560009896849611610811575b0116810103019134905af18015610804575b6107ef5750565b806107fc6108029261034b565b8061018f565b565b61080c61073d565b6107e8565b888582860101526107d6565b91925080602080928401015160648288010152018492916107b956fea264697066735822122009f3527a806b43dc16a2437ff246770ecedd80bc4871546dd12cb4899ee729f164736f6c634300080e0033';

type ProxyAdminConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ProxyAdminConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ProxyAdmin__factory extends ContractFactory {
  constructor(...args: ProxyAdminConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      ProxyAdmin & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): ProxyAdmin__factory {
    return super.connect(runner) as ProxyAdmin__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ProxyAdminInterface {
    return new Interface(_abi) as ProxyAdminInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): ProxyAdmin {
    return new Contract(address, _abi, runner) as unknown as ProxyAdmin;
  }
}
