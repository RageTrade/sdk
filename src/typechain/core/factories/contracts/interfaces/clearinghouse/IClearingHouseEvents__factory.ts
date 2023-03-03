/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import type { Provider } from '@ethersproject/providers';
import type {
  IClearingHouseEvents,
  IClearingHouseEventsInterface,
} from '../../../../contracts/interfaces/clearinghouse/IClearingHouseEvents';

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'ownerAddress',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'accountId',
        type: 'uint256',
      },
    ],
    name: 'AccountCreated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'contract IERC20',
        name: 'cToken',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'contract IOracle',
            name: 'oracle',
            type: 'address',
          },
          {
            internalType: 'uint32',
            name: 'twapDuration',
            type: 'uint32',
          },
          {
            internalType: 'bool',
            name: 'isAllowedForDeposit',
            type: 'bool',
          },
        ],
        indexed: false,
        internalType: 'struct IClearingHouseStructures.CollateralSettings',
        name: 'cTokenInfo',
        type: 'tuple',
      },
    ],
    name: 'CollateralSettingsUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bool',
        name: 'paused',
        type: 'bool',
      },
    ],
    name: 'PausedUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint32',
        name: 'poolId',
        type: 'uint32',
      },
      {
        components: [
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
        indexed: false,
        internalType: 'struct IClearingHouseStructures.PoolSettings',
        name: 'settings',
        type: 'tuple',
      },
    ],
    name: 'PoolSettingsUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: 'uint16',
            name: 'rangeLiquidationFeeFraction',
            type: 'uint16',
          },
          {
            internalType: 'uint16',
            name: 'tokenLiquidationFeeFraction',
            type: 'uint16',
          },
          {
            internalType: 'uint16',
            name: 'closeFactorMMThresholdBps',
            type: 'uint16',
          },
          {
            internalType: 'uint16',
            name: 'partialLiquidationCloseFactorBps',
            type: 'uint16',
          },
          {
            internalType: 'uint16',
            name: 'insuranceFundFeeShareBps',
            type: 'uint16',
          },
          {
            internalType: 'uint16',
            name: 'liquidationSlippageSqrtToleranceBps',
            type: 'uint16',
          },
          {
            internalType: 'uint64',
            name: 'maxRangeLiquidationFees',
            type: 'uint64',
          },
          {
            internalType: 'uint64',
            name: 'minNotionalLiquidatable',
            type: 'uint64',
          },
        ],
        indexed: false,
        internalType: 'struct IClearingHouseStructures.LiquidationParams',
        name: 'liquidationParams',
        type: 'tuple',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'removeLimitOrderFee',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'minimumOrderNotional',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'minRequiredMargin',
        type: 'uint256',
      },
    ],
    name: 'ProtocolSettingsUpdated',
    type: 'event',
  },
] as const;

export class IClearingHouseEvents__factory {
  static readonly abi = _abi;
  static createInterface(): IClearingHouseEventsInterface {
    return new utils.Interface(_abi) as IClearingHouseEventsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IClearingHouseEvents {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IClearingHouseEvents;
  }
}
