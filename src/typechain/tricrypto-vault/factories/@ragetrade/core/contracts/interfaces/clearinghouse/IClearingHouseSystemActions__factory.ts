/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import type { Provider } from '@ethersproject/providers';
import type {
  IClearingHouseSystemActions,
  IClearingHouseSystemActionsInterface,
} from '../../../../../../@ragetrade/core/contracts/interfaces/clearinghouse/IClearingHouseSystemActions';

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'rageTradeFactoryAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'initialGovernance',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'initialTeamMultisig',
        type: 'address',
      },
      {
        internalType: 'contract IERC20',
        name: 'defaultCollateralToken',
        type: 'address',
      },
      {
        internalType: 'contract IOracle',
        name: 'defaultCollateralTokenOracle',
        type: 'address',
      },
      {
        internalType: 'contract IInsuranceFund',
        name: 'insuranceFund',
        type: 'address',
      },
      {
        internalType: 'contract IVQuote',
        name: 'vQuote',
        type: 'address',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'contract IVToken',
            name: 'vToken',
            type: 'address',
          },
          {
            internalType: 'contract IUniswapV3Pool',
            name: 'vPool',
            type: 'address',
          },
          {
            internalType: 'contract IVPoolWrapper',
            name: 'vPoolWrapper',
            type: 'address',
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
            internalType: 'struct IClearingHouseStructures.PoolSettings',
            name: 'settings',
            type: 'tuple',
          },
        ],
        internalType: 'struct IClearingHouseStructures.Pool',
        name: 'poolInfo',
        type: 'tuple',
      },
    ],
    name: 'registerPool',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const;

export class IClearingHouseSystemActions__factory {
  static readonly abi = _abi;
  static createInterface(): IClearingHouseSystemActionsInterface {
    return new utils.Interface(_abi) as IClearingHouseSystemActionsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IClearingHouseSystemActions {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IClearingHouseSystemActions;
  }
}
