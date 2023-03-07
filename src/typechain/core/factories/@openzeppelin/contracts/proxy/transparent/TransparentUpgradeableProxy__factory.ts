/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  Contract,
  ContractFactory,
  BytesLike,
  ContractTransactionResponse,
  Interface,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from 'ethers';
import type { PayableOverrides } from '../../../../../common';
import type {
  TransparentUpgradeableProxy,
  TransparentUpgradeableProxyInterface,
} from '../../../../../@openzeppelin/contracts/proxy/transparent/TransparentUpgradeableProxy';

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_logic',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'admin_',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    stateMutability: 'payable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'previousAdmin',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'newAdmin',
        type: 'address',
      },
    ],
    name: 'AdminChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'beacon',
        type: 'address',
      },
    ],
    name: 'BeaconUpgraded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'implementation',
        type: 'address',
      },
    ],
    name: 'Upgraded',
    type: 'event',
  },
  {
    stateMutability: 'payable',
    type: 'fallback',
  },
  {
    inputs: [],
    name: 'admin',
    outputs: [
      {
        internalType: 'address',
        name: 'admin_',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newAdmin',
        type: 'address',
      },
    ],
    name: 'changeAdmin',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'implementation',
    outputs: [
      {
        internalType: 'address',
        name: 'implementation_',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newImplementation',
        type: 'address',
      },
    ],
    name: 'upgradeTo',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newImplementation',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'upgradeToAndCall',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    stateMutability: 'payable',
    type: 'receive',
  },
] as const;

const _bytecode =
  '0x608060405262000f07803803806200001781620000d6565b9283398101606082820312620000ba5762000032826200010b565b9162000041602082016200010b565b604082015190916001600160401b038211620000ba57019282601f85011215620000ba578351936200007d620000778662000120565b620000d6565b9385855260208683010111620000ba57620000aa94620000a491602080870191016200014e565b62000186565b604051610a2f9081620004d88239f35b600080fd5b50634e487b7160e01b600052604160045260246000fd5b6040519190601f01601f191682016001600160401b03811183821017620000fc57604052565b62000106620000bf565b604052565b51906001600160a01b0382168203620000ba57565b6020906001600160401b0381116200013e575b601f01601f19160190565b62000148620000bf565b62000133565b918091926000905b8282106200017057501162000169575050565b6000910152565b9150806020918301518186015201829162000156565b91823b1562000240577f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80546001600160a01b0319166001600160a01b038516908117909155604051620002169491907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a281511580159062000237575b62000218575b50506200029b565b565b6200022e916200022762000369565b91620003d4565b5038806200020e565b50600062000208565b60405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608490fd5b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61038054604080516001600160a01b0380841682529094166020850181905292937f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f9190a1811562000315576001600160a01b031916179055565b60405162461bcd60e51b815260206004820152602660248201527f455243313936373a206e65772061646d696e20697320746865207a65726f206160448201526564647265737360d01b6064820152608490fd5b60405190606082016001600160401b03811183821017620003c4575b60405260278252660819985a5b195960ca1b6040837f416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c60208201520152565b620003ce620000bf565b62000385565b9190823b156200042557600081620004199460208394519201905af43d156200041c573d9062000408620000778362000120565b9182523d6000602084013e62000479565b90565b60609062000479565b60405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608490fd5b9091901562000486575090565b815115620004975750805190602001fd5b6044604051809262461bcd60e51b825260206004830152620004c981518092816024860152602086860191016200014e565b601f01601f19168101030190fdfe6080604052600436101561002c575b361561001f575b61001d610449565b005b610027610449565b610015565b6000803560e01c9081633659cfe614610093575080634f1ef2861461008a5780635c60da1b146100815780638f283970146100785763f851a4400361000e576100736103df565b61000e565b50610073610298565b50610073610201565b5061007361013b565b34610110576020600319360112610110576100ac610113565b73ffffffffffffffffffffffffffffffffffffffff7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035416331460001461010757610102906100f96105a5565b90838252610623565b604051f35b50610102610449565b80fd5b6004359073ffffffffffffffffffffffffffffffffffffffff8216820361013657565b600080fd5b50604060031936011261013657610150610113565b60243567ffffffffffffffff9182821161013657366023830112156101365781600401359283116101365736602484840101116101365773ffffffffffffffffffffffffffffffffffffffff7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103541633146000146101f65760006020848060246101e46101df61001d996105f8565b6105d2565b96828852018387013784010152610765565b50505061001d610449565b5034610136576000600319360112610136576020600073ffffffffffffffffffffffffffffffffffffffff90817fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035416331460001461028a5750807f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5416905b60405191168152f35b90610293610449565b610281565b5034610136576020600319360112610136576102b2610113565b73ffffffffffffffffffffffffffffffffffffffff907fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103918083541633146000146101f6577f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f604084549281519481851686521693846020820152a1811561035b577fffffffffffffffffffffffff000000000000000000000000000000000000000016179055005b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f455243313936373a206e65772061646d696e20697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152fd5b5034610136576000600319360112610136576020600073ffffffffffffffffffffffffffffffffffffffff7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61038181541633146000146104445754604051911681529050f35b506102935b5073ffffffffffffffffffffffffffffffffffffffff807fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103541633146104cb577f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc54166000808092368280378136915af43d82803e156104c7573d90f35b3d90fd5b60a46040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152604260248201527f5472616e73706172656e745570677261646561626c6550726f78793a2061646d60448201527f696e2063616e6e6f742066616c6c6261636b20746f2070726f7879207461726760648201527f65740000000000000000000000000000000000000000000000000000000000006084820152fd5b507f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051906020820182811067ffffffffffffffff8211176105c557604052565b6105cd610575565b604052565b90601f19601f604051930116820182811067ffffffffffffffff8211176105c557604052565b601f19601f60209267ffffffffffffffff8111610616575b01160190565b61061e610575565b610610565b803b156106e15773ffffffffffffffffffffffffffffffffffffffff81167f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc817fffffffffffffffffffffffff00000000000000000000000000000000000000008254161790557fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b6000604051a28151158015906106d9575b6106c4575050565b6106d6916106d061080d565b9161088b565b50565b5060006106bc565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e7472616374000000000000000000000000000000000000006064820152fd5b803b156106e15773ffffffffffffffffffffffffffffffffffffffff81167f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc817fffffffffffffffffffffffff00000000000000000000000000000000000000008254161790557fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b6000604051a2815115801590610805576106c4575050565b5060016106bc565b604051906060820182811067ffffffffffffffff82111761087e575b604052602782527f206661696c6564000000000000000000000000000000000000000000000000006040837f416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c60208201520152565b610886610575565b610829565b9190823b156108d4576000816108c99460208394519201905af43d156108cc573d906108b96101df836105f8565b9182523d6000602084013e610958565b90565b606090610958565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f60448201527f6e747261637400000000000000000000000000000000000000000000000000006064820152fd5b90919015610964575090565b8151156109745750805190602001fd5b604051907f08c379a00000000000000000000000000000000000000000000000000000000082528160208060048301528251928360248401526000915b8483106109e0575050601f83604494601f1993116109d3575b01168101030190fd5b60008582860101526109ca565b81830181015186840160440152859350918201916109b156fea26469706673582212201fc6a087da1ac42bba3b297a5e68b86f4b457aab02395789caa06f2c6a8fb8a764736f6c634300080e0033';

type TransparentUpgradeableProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TransparentUpgradeableProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TransparentUpgradeableProxy__factory extends ContractFactory {
  constructor(...args: TransparentUpgradeableProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _logic: AddressLike,
    admin_: AddressLike,
    _data: BytesLike,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_logic, admin_, _data, overrides || {});
  }
  override deploy(
    _logic: AddressLike,
    admin_: AddressLike,
    _data: BytesLike,
    overrides?: PayableOverrides & { from?: string }
  ) {
    return super.deploy(_logic, admin_, _data, overrides || {}) as Promise<
      TransparentUpgradeableProxy & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): TransparentUpgradeableProxy__factory {
    return super.connect(runner) as TransparentUpgradeableProxy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TransparentUpgradeableProxyInterface {
    return new Interface(_abi) as TransparentUpgradeableProxyInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): TransparentUpgradeableProxy {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as TransparentUpgradeableProxy;
  }
}
