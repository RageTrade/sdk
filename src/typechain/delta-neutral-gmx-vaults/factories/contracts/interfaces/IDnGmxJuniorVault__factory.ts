/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, ContractRunner } from 'ethers';
import type {
  IDnGmxJuniorVault,
  IDnGmxJuniorVaultInterface,
} from '../../../contracts/interfaces/IDnGmxJuniorVault';

const _abi = [
  {
    inputs: [],
    name: 'ArraysLengthMismatch',
    type: 'error',
  },
  {
    inputs: [],
    name: 'DepositCapExceeded',
    type: 'error',
  },
  {
    inputs: [],
    name: 'FlashloanNotInitiated',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidFeeBps',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidFeeRecipient',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidRebalance',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidRebalanceDeltaThresholdBps',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidRebalanceHfThresholdBps',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidRebalanceTimeThreshold',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidSlippageThresholdGmx',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidSlippageThresholdSwapBtc',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidSlippageThresholdSwapEth',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidTargetHealthFactor',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'int128',
        name: 'btcTraderOIHedge',
        type: 'int128',
      },
      {
        internalType: 'int128',
        name: 'ethTraderOIHedge',
        type: 'int128',
      },
    ],
    name: 'InvalidTraderOIHedges',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidWithdrawFeeBps',
    type: 'error',
  },
  {
    inputs: [],
    name: 'NotBalancerVault',
    type: 'error',
  },
  {
    inputs: [],
    name: 'NotDnGmxSeniorVault',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'msgSender',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'authorisedKeeperAddress',
        type: 'address',
      },
    ],
    name: 'OnlyKeeperAllowed',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'msgSender',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'authorisedKeeperAddress',
        type: 'address',
      },
    ],
    name: 'OnlyTraderHedgeStrategyAllowed',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'netSlippage',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'assets',
        type: 'uint256',
      },
    ],
    name: 'TooMuchSlippage',
    type: 'error',
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
      {
        indexed: false,
        internalType: 'address',
        name: 'dnGmxSeniorVault',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newDepositCap',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'batchingManager',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint16',
        name: 'withdrawFeeBps',
        type: 'uint16',
      },
    ],
    name: 'AdminParamsUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [],
    name: 'AllowancesGranted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'caller',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'assets',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'shares',
        type: 'uint256',
      },
    ],
    name: 'Deposit',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: '_newDepositCap',
        type: 'uint256',
      },
    ],
    name: 'DepositCapUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: '_dnGmxSeniorVault',
        type: 'address',
      },
    ],
    name: 'DnGmxSeniorVaultUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'EsGmxStaked',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'EsGmxVested',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'feeBps',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: '_newFeeRecipient',
        type: 'address',
      },
    ],
    name: 'FeeParamsUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'feeAmount',
        type: 'uint256',
      },
    ],
    name: 'FeesWithdrawn',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'GmxClaimed',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'contract IBalancerVault',
        name: 'vault',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'contract ISwapRouter',
        name: 'swapRouter',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'targetHealthFactor',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'contract IRewardsController',
        name: 'aaveRewardsController',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'contract IPool',
        name: 'pool',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'contract IPriceOracle',
        name: 'oracle',
        type: 'address',
      },
    ],
    name: 'HedgeParamsUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: '_newKeeper',
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
        indexed: false,
        internalType: 'uint128',
        name: 'rebalanceProfitUsdcAmountThreshold',
        type: 'uint128',
      },
      {
        indexed: false,
        internalType: 'contract IDnGmxTraderHedgeStrategy',
        name: 'dnGmxTraderHedgeStrategy',
        type: 'address',
      },
    ],
    name: 'ParamsV1Updated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint32',
        name: 'rebalanceTimeThreshold',
        type: 'uint32',
      },
      {
        indexed: false,
        internalType: 'uint16',
        name: 'rebalanceDeltaThresholdBps',
        type: 'uint16',
      },
      {
        indexed: false,
        internalType: 'uint16',
        name: 'rebalanceHfThresholdBps',
        type: 'uint16',
      },
    ],
    name: 'RebalanceParamsUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [],
    name: 'Rebalanced',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint16',
        name: 'slippageThresholdSwapBtcBps',
        type: 'uint16',
      },
      {
        indexed: false,
        internalType: 'uint16',
        name: 'slippageThresholdSwapEthBps',
        type: 'uint16',
      },
      {
        indexed: false,
        internalType: 'uint16',
        name: 'slippageThresholdGmxBps',
        type: 'uint16',
      },
      {
        indexed: false,
        internalType: 'uint128',
        name: 'usdcConversionThreshold',
        type: 'uint128',
      },
      {
        indexed: false,
        internalType: 'uint128',
        name: 'wethConversionThreshold',
        type: 'uint128',
      },
      {
        indexed: false,
        internalType: 'uint128',
        name: 'hedgeUsdcAmountThreshold',
        type: 'uint128',
      },
      {
        indexed: false,
        internalType: 'uint128',
        name: 'partialBtcHedgeUsdcAmountThreshold',
        type: 'uint128',
      },
      {
        indexed: false,
        internalType: 'uint128',
        name: 'partialEthHedgeUsdcAmountThreshold',
        type: 'uint128',
      },
    ],
    name: 'ThresholdsUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'int256',
        name: 'btcTraderOIHedge',
        type: 'int256',
      },
      {
        indexed: false,
        internalType: 'int256',
        name: 'ethTraderOIHedge',
        type: 'int256',
      },
    ],
    name: 'TraderOIHedgesUpdated',
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
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'caller',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'receiver',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'assets',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'shares',
        type: 'uint256',
      },
    ],
    name: 'Withdraw',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: '_withdrawFeeBps',
        type: 'uint256',
      },
    ],
    name: 'WithdrawFeeUpdated',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
    ],
    name: 'allowance',
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
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'approve',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'asset',
    outputs: [
      {
        internalType: 'address',
        name: 'assetTokenAddress',
        type: 'address',
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
    name: 'balanceOf',
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
        internalType: 'uint256',
        name: 'shares',
        type: 'uint256',
      },
    ],
    name: 'convertToAssets',
    outputs: [
      {
        internalType: 'uint256',
        name: 'assets',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'assets',
        type: 'uint256',
      },
    ],
    name: 'convertToShares',
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
        internalType: 'uint256',
        name: 'assets',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'receiver',
        type: 'address',
      },
    ],
    name: 'deposit',
    outputs: [
      {
        internalType: 'uint256',
        name: 'shares',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'depositCap',
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
        internalType: 'uint256',
        name: 'assetAmount',
        type: 'uint256',
      },
    ],
    name: 'getMarketValue',
    outputs: [
      {
        internalType: 'uint256',
        name: 'marketValue',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getPriceX128',
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
    name: 'getUsdcBorrowed',
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
    name: 'getVaultMarketValue',
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
    name: 'harvestFees',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'receiver',
        type: 'address',
      },
    ],
    name: 'maxDeposit',
    outputs: [
      {
        internalType: 'uint256',
        name: 'maxAssets',
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
        name: 'receiver',
        type: 'address',
      },
    ],
    name: 'maxMint',
    outputs: [
      {
        internalType: 'uint256',
        name: 'maxShares',
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
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'maxRedeem',
    outputs: [
      {
        internalType: 'uint256',
        name: 'maxShares',
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
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'maxWithdraw',
    outputs: [
      {
        internalType: 'uint256',
        name: 'maxAssets',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'shares',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'receiver',
        type: 'address',
      },
    ],
    name: 'mint',
    outputs: [
      {
        internalType: 'uint256',
        name: 'assets',
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
        name: 'assets',
        type: 'uint256',
      },
    ],
    name: 'previewDeposit',
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
        internalType: 'uint256',
        name: 'shares',
        type: 'uint256',
      },
    ],
    name: 'previewMint',
    outputs: [
      {
        internalType: 'uint256',
        name: 'assets',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'shares',
        type: 'uint256',
      },
    ],
    name: 'previewRedeem',
    outputs: [
      {
        internalType: 'uint256',
        name: 'assets',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'assets',
        type: 'uint256',
      },
    ],
    name: 'previewWithdraw',
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
        internalType: 'uint256',
        name: 'shares',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'receiver',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'redeem',
    outputs: [
      {
        internalType: 'uint256',
        name: 'assets',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalAssets',
    outputs: [
      {
        internalType: 'uint256',
        name: 'totalManagedAssets',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalSupply',
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
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transfer',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transferFrom',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'assets',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'receiver',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'withdraw',
    outputs: [
      {
        internalType: 'uint256',
        name: 'shares',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const;

export class IDnGmxJuniorVault__factory {
  static readonly abi = _abi;
  static createInterface(): IDnGmxJuniorVaultInterface {
    return new Interface(_abi) as IDnGmxJuniorVaultInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IDnGmxJuniorVault {
    return new Contract(address, _abi, runner) as unknown as IDnGmxJuniorVault;
  }
}
