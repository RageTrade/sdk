/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type { PromiseOrValue } from '../../../../common';
import type {
  BalancerVaultMock,
  BalancerVaultMockInterface,
} from '../../../../contracts/mocks/balancer/BalancerVaultMock';

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'feeAmount',
        type: 'uint256',
      },
    ],
    name: 'FlashLoan',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        internalType: 'address[]',
        name: 'tokens',
        type: 'address[]',
      },
      {
        internalType: 'uint256[]',
        name: 'amounts',
        type: 'uint256[]',
      },
      {
        internalType: 'bytes',
        name: 'userData',
        type: 'bytes',
      },
    ],
    name: 'flashLoan',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

const _bytecode =
  '0x608080604052346100165761093c908161001c8239f35b600080fdfe6080604052600436101561001257600080fd5b6000803560e01c635c38449e1461002857600080fd5b34610783576080366003190112610783576004356001600160a01b0381168103610786576024359167ffffffffffffffff8311610783573660238401121561078357826004013591610079836107c2565b93610087604051958661078a565b83855260208501906024829560051b8201019036821161077f57602401915b81831061075f575050506044359067ffffffffffffffff821161074b573660238301121561074b578160040135916100dd836107c2565b926100eb604051948561078a565b8084526024602085019160051b8301019136831161074357602401905b82821061074f5750505067ffffffffffffffff6064351161074b5736602360643501121561074b5761013f606435600401356107da565b9461014d604051968761078a565b6004606435908101358088523691016024011161074757606435600401356024606435016020880137836020606435600401358801015261018e81516107f6565b61019882516107f6565b968590815b8451831015610538576001600160a01b03806101b9858861084d565b5116911610156104e2576001600160a01b036101d5838661084d565b511691602460206001600160a01b036101ee848961084d565b5116604051928380926370a0823160e01b82523060048301525afa9081156104d75789916104a5575b50610222828661084d565b5261022d818561084d565b51610238828961084d565b5111610443576001600160a01b03610250828761084d565b511661025c828961084d565b516040519063a9059cbb60e01b60208301526001600160a01b038916602483015260448201526044815280608081011067ffffffffffffffff60808301111761042f576080810160c082011067ffffffffffffffff60c08301111761042f5760c08101604052602060808201527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656460a0820152813b156103ea57898061033a938351908260208601915af1903d156103e05760803d9161031b836107da565b92610329604051948561078a565b83523d8d602085013e5b01916108eb565b80518061035f575b50508088610353610359938d61084d565b52610828565b9161019d565b81602091810103126103dc57602001518015908115036103dc57610384573880610342565b60405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608490fd5b8880fd5b6080606091610333565b60405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606490fd5b634e487b7160e01b8a52604160045260248afd5b60405162461bcd60e51b815260206004820152603460248201527f42616c616e6365725661756c744d6f636b3a20696e73756666696369656e74206044820152733130b630b731b2903a3790333630b9b43637b0b760611b6064820152608490fd5b90506020813d6020116104cf575b816104c06020938361078a565b810103126103dc575138610217565b3d91506104b3565b6040513d8b823e3d90fd5b60405162461bcd60e51b815260206004820152602860248201527f42616c616e6365725661756c744d6f636b3a20746f6b656e73206d757374206260448201526719481cdbdc9d195960c21b6064820152608490fd5b509297919690506001600160a01b0384163b1561074357939185939160405195869463f04f270760e01b865260848601608060048801528b5180915260a487019290885b81811061071e575050506105d386946105c189956105af6001600160a01b03968996600319888303016024890152610877565b85810360031901604487015290610877565b838103600319016064850152906108ab565b0393165af18015610713576106e7575b50805b83518110156106e357602460206001600160a01b03610605848861084d565b5116604051928380926370a0823160e01b82523060048301525afa9081156106d85783916106a1575b50610639828561084d565b511161064d5761064890610828565b6105e6565b60405162461bcd60e51b815260206004820152602660248201527f42616c616e6365725661756c744d6f636b3a20616d6f756e74206e6f742072656044820152651d1d5c9b995960d21b6064820152608490fd5b90506020813d6020116106d0575b816106bc6020938361078a565b810103126106cb57513861062e565b600080fd5b3d91506106af565b6040513d85823e3d90fd5b5080f35b67ffffffffffffffff81116106ff57604052386105e3565b634e487b7160e01b82526041600452602482fd5b6040513d84823e3d90fd5b82516001600160a01b031685528b99508a98506020948501949092019160010161057c565b8580fd5b8380fd5b8280fd5b8135815260209182019101610108565b82356001600160a01b0381168103610743578152602092830192016100a6565b8480fd5b80fd5b5080fd5b90601f8019910116810190811067ffffffffffffffff8211176107ac57604052565b634e487b7160e01b600052604160045260246000fd5b67ffffffffffffffff81116107ac5760051b60200190565b67ffffffffffffffff81116107ac57601f01601f191660200190565b90610800826107c2565b61080d604051918261078a565b828152809261081e601f19916107c2565b0190602036910137565b60001981146108375760010190565b634e487b7160e01b600052601160045260246000fd5b80518210156108615760209160051b010190565b634e487b7160e01b600052603260045260246000fd5b90815180825260208080930193019160005b828110610897575050505090565b835185529381019392810192600101610889565b919082519283825260005b8481106108d7575050826000602080949584010152601f8019910116010190565b6020818301810151848301820152016108b6565b909190156108f7575090565b8151156109075750805190602001fd5b60405162461bcd60e51b81526020600482015290819061092b9060248301906108ab565b0390fdfea164736f6c6343000812000a';

type BalancerVaultMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BalancerVaultMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BalancerVaultMock__factory extends ContractFactory {
  constructor(...args: BalancerVaultMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BalancerVaultMock> {
    return super.deploy(overrides || {}) as Promise<BalancerVaultMock>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): BalancerVaultMock {
    return super.attach(address) as BalancerVaultMock;
  }
  override connect(signer: Signer): BalancerVaultMock__factory {
    return super.connect(signer) as BalancerVaultMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BalancerVaultMockInterface {
    return new utils.Interface(_abi) as BalancerVaultMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BalancerVaultMock {
    return new Contract(address, _abi, signerOrProvider) as BalancerVaultMock;
  }
}
