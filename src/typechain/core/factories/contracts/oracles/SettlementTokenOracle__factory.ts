/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type { PromiseOrValue } from '../../../common';
import type {
  SettlementTokenOracle,
  SettlementTokenOracleInterface,
} from '../../../contracts/oracles/SettlementTokenOracle';

const _abi = [
  {
    inputs: [
      {
        internalType: 'uint32',
        name: '',
        type: 'uint32',
      },
    ],
    name: 'getTwapPriceX128',
    outputs: [
      {
        internalType: 'uint256',
        name: 'priceX128',
        type: 'uint256',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
] as const;

const _bytecode =
  '0x608080604052346100155760b6908161001b8239f35b600080fdfe6080806040526004361015601257600080fd5b600090813560e01c63dd86c10114602857600080fd5b34607c5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112607c5760043563ffffffff811603607c578070010000000000000000000000000000000060209252f35b5080fdfea2646970667358221220bd81cd24a40737663bfe18cce64c6e37a6e93e9e9779801c3315d748e6a9db0064736f6c634300080e0033';

type SettlementTokenOracleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SettlementTokenOracleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SettlementTokenOracle__factory extends ContractFactory {
  constructor(...args: SettlementTokenOracleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SettlementTokenOracle> {
    return super.deploy(overrides || {}) as Promise<SettlementTokenOracle>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): SettlementTokenOracle {
    return super.attach(address) as SettlementTokenOracle;
  }
  override connect(signer: Signer): SettlementTokenOracle__factory {
    return super.connect(signer) as SettlementTokenOracle__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SettlementTokenOracleInterface {
    return new utils.Interface(_abi) as SettlementTokenOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SettlementTokenOracle {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as SettlementTokenOracle;
  }
}
