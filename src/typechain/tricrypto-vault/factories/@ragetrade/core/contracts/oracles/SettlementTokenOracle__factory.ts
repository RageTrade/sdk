/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type { PromiseOrValue } from '../../../../../common';
import type {
  SettlementTokenOracle,
  SettlementTokenOracleInterface,
} from '../../../../../@ragetrade/core/contracts/oracles/SettlementTokenOracle';

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
  '0x608060405234801561001057600080fd5b50608b8061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063dd86c10114602d575b600080fd5b604160383660046053565b50600160801b90565b60405190815260200160405180910390f35b600060208284031215606457600080fd5b813563ffffffff81168114607757600080fd5b939250505056fea164736f6c634300080e000a';

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
