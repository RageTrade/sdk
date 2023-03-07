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
import type { NonPayableOverrides } from '../../../../../../../common';
import type {
  ReserveConfiguration,
  ReserveConfigurationInterface,
} from '../../../../../../../@aave/core-v3/contracts/protocol/libraries/configuration/ReserveConfiguration';

const _abi = [
  {
    inputs: [],
    name: 'DEBT_CEILING_DECIMALS',
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
    inputs: [],
    name: 'MAX_RESERVES_COUNT',
    outputs: [
      {
        internalType: 'uint16',
        name: '',
        type: 'uint16',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
] as const;

const _bytecode =
  '0x60808060405234610019576072908161001f823930815050f35b600080fdfe6080806040526004361015601257600080fd5b600090813560e01c908163280d5de914604c57506331b561ba14603457600080fd5b80600319360112604957602060405160808152f35b80fd5b90508160031936011260615780600260209252f35b5080fdfea164736f6c6343000812000a';

type ReserveConfigurationConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ReserveConfigurationConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ReserveConfiguration__factory extends ContractFactory {
  constructor(...args: ReserveConfigurationConstructorParams) {
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
      ReserveConfiguration & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): ReserveConfiguration__factory {
    return super.connect(runner) as ReserveConfiguration__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ReserveConfigurationInterface {
    return new Interface(_abi) as ReserveConfigurationInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ReserveConfiguration {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as ReserveConfiguration;
  }
}
