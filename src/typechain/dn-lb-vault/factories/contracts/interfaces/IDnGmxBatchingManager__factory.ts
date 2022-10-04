/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import type { Provider } from '@ethersproject/providers';
import type {
  IDnGmxBatchingManager,
  IDnGmxBatchingManagerInterface,
} from '../../../contracts/interfaces/IDnGmxBatchingManager';

const _abi = [
  {
    inputs: [],
    name: 'CallerNotKeeper',
    type: 'error',
  },
  {
    inputs: [],
    name: 'CallerNotVault',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'balance',
        type: 'uint256',
      },
    ],
    name: 'InsufficientShares',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'errorCode',
        type: 'uint256',
      },
    ],
    name: 'InvalidInput',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'bool',
        name: 'currentValue',
        type: 'bool',
      },
    ],
    name: 'InvalidSetDepositPaused',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'vault',
        type: 'address',
      },
    ],
    name: 'InvalidVault',
    type: 'error',
  },
  {
    inputs: [],
    name: 'NoUsdcBalance',
    type: 'error',
  },
  {
    inputs: [],
    name: 'VaultAlreadyAdded',
    type: 'error',
  },
  {
    inputs: [],
    name: 'VaultsLimitExceeded',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ZeroBalance',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'round',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'userUsdcAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'userGlpAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'userShareAmount',
        type: 'uint256',
      },
    ],
    name: 'BatchDeposit',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'round',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'userUsdcAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'userGlpAmount',
        type: 'uint256',
      },
    ],
    name: 'BatchStake',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'round',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'receiver',
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
        name: 'glpStaked',
        type: 'uint256',
      },
    ],
    name: 'DepositToken',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'newKeeper',
        type: 'address',
      },
    ],
    name: 'KeeperUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'receiver',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'claimAmount',
        type: 'uint256',
      },
    ],
    name: 'SharesClaimed',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'vault',
        type: 'address',
      },
    ],
    name: 'VaultAdded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'vaultGlpAmount',
        type: 'uint256',
      },
    ],
    name: 'VaultDeposit',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'receiver',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'claim',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'currentRound',
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
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'minUSDG',
        type: 'uint256',
      },
    ],
    name: 'depositToken',
    outputs: [
      {
        internalType: 'uint256',
        name: 'glpStaked',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'receiver',
        type: 'address',
      },
    ],
    name: 'depositUsdc',
    outputs: [
      {
        internalType: 'uint256',
        name: 'glpStaked',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'dnGmxJuniorVaultGlpBalance',
    outputs: [
      {
        internalType: 'uint256',
        name: 'balance',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'executeBatchDeposit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'executeBatchStake',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'round',
        type: 'uint256',
      },
    ],
    name: 'roundDeposits',
    outputs: [
      {
        components: [
          {
            internalType: 'uint128',
            name: 'totalUsdc',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'totalShares',
            type: 'uint128',
          },
        ],
        internalType: 'struct IDnGmxBatchingManager.RoundDeposit',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'unclaimedShares',
    outputs: [
      {
        internalType: 'uint256',
        name: 'shares',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'usdcBalance',
    outputs: [
      {
        internalType: 'uint256',
        name: 'balance',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

export class IDnGmxBatchingManager__factory {
  static readonly abi = _abi;
  static createInterface(): IDnGmxBatchingManagerInterface {
    return new utils.Interface(_abi) as IDnGmxBatchingManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IDnGmxBatchingManager {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IDnGmxBatchingManager;
  }
}
