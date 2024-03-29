import { BigNumber, Contract, ethers } from 'ethers';
import { parseUnits } from 'ethers/lib/utils';
import {
  VaultName,
  getVault,
  getNetworkNameFromProvider,
  getVaultDeployBlockNumber,
  tokens,
  deltaNeutralGmxVaults,
} from '../../contracts';
import { IERC20Metadata__factory } from '../../typechain';
import { DnGmxJuniorVault__factory } from '../../typechain/delta-neutral-gmx-vaults';
import {
  priceX128ToPrice,
  Amount,
  bigNumberToAmount,
  stringToAmount,
  Q128,
} from '../../utils';
import { BaseDataSource } from '../base-data-source';
import { getAvgVaultMarketValue } from './get-avg-vault-market-value';
import {
  getPoolComposition,
  PoolCompositionResult,
} from './get-pool-composition';

export interface VaultInfoResult {
  nativeProtocolName: string;

  poolComposition: PoolCompositionResult;

  totalSupply: Amount;
  totalShares: Amount;
  totalAssets: Amount;
  assetsPerShare: Amount;
  assetPrice: Amount;
  sharePrice: Amount;
  depositCap: Amount;
  vaultMarketValue: Amount;
  vaultMarketValuePending: Amount;
  avgVaultMarketValue: Amount;
  paused: boolean | undefined;
}

const USD_DECIMALS = 6;

export async function getVaultInfo(
  provider: ethers.providers.Provider,
  vaultName: VaultName,
  dataSource: BaseDataSource
): Promise<VaultInfoResult> {
  if (vaultName === undefined) {
    throw new Error('vaultName is undefined');
  }

  const { vault, nativeProtocolName } = await getVault(provider, vaultName);

  const shareDecimals = await vault.decimals();
  const assetDecimals = await IERC20Metadata__factory.connect(
    await vault.asset(),
    provider
  ).decimals();

  // total supply, total assets
  const totalSupply = bigNumberToAmount(
    await vault.totalSupply(),
    shareDecimals
  );
  const totalAssets = bigNumberToAmount(
    await vault.totalAssets(),
    assetDecimals
  );

  // asset price
  let assetPrice: Amount;
  let assetPriceX128: BigNumber;
  try {
    assetPriceX128 = await vault.getPriceX128(); // dollars per asset
    assetPrice = stringToAmount(
      (
        await priceX128ToPrice(assetPriceX128, USD_DECIMALS, assetDecimals)
      ).toFixed(USD_DECIMALS),
      USD_DECIMALS
    );
  } catch {
    const priceD18 = await DnGmxJuniorVault__factory.connect(
      vault.address,
      provider
    ).getPrice(false);
    assetPrice = bigNumberToAmount(priceD18, 18);
    assetPriceX128 = priceD18.mul(Q128).div(BigNumber.from(10).pow(18 + 12));
  }

  // share price
  const assetsPerShareDX = parseUnits('1', assetDecimals + shareDecimals).div(
    await vault.convertToShares(parseUnits('1', assetDecimals))
  );
  const assetsPerShare = bigNumberToAmount(assetsPerShareDX, assetDecimals);
  const sharePrice = stringToAmount(
    (
      await priceX128ToPrice(
        assetPriceX128
          .mul(assetsPerShareDX)
          .div(parseUnits('1', assetDecimals)),
        6,
        shareDecimals
      )
    ).toFixed(USD_DECIMALS),
    USD_DECIMALS
  );

  // deposit cap
  const depositCapDX = await vault.depositCap();
  const depositCap = bigNumberToAmount(depositCapDX, shareDecimals);

  // vault market value
  const vaultMarketValueUSD = await vault.getVaultMarketValue();
  const vaultMarketValue = bigNumberToAmount(vaultMarketValueUSD, USD_DECIMALS);

  // avg vault market value
  const networkName = await getNetworkNameFromProvider(vault.provider);
  const vaultDeployBlockNumber = getVaultDeployBlockNumber(
    networkName,
    vaultName
  );
  const { avgVaultMarketValue } = await getAvgVaultMarketValue(
    vault,
    dataSource,
    vaultDeployBlockNumber
  );

  // vault market value pending
  let vaultMarketValuePending = stringToAmount('0', USD_DECIMALS);
  if (vaultName === 'dn_gmx_junior') {
    const { usdc, fsGLP } = await tokens.getContracts(provider);
    const { dnGmxBatchingManager } = await deltaNeutralGmxVaults.getContracts(
      provider
    );

    const usdcBalance = await usdc.balanceOf(dnGmxBatchingManager.address);
    const sglpBalance = await fsGLP.balanceOf(dnGmxBatchingManager.address);
    const sglpBalanceOfJuniorVault =
      await dnGmxBatchingManager.dnGmxJuniorVaultGlpBalance();

    const sglpInDollars = sglpBalance
      .sub(sglpBalanceOfJuniorVault)
      .mul(assetPriceX128)
      .div(Q128);

    vaultMarketValuePending = bigNumberToAmount(
      usdcBalance.add(sglpInDollars),
      6
    );
  }

  const poolComposition = await getPoolComposition(provider, vaultName);

  let paused: boolean | undefined;

  try {
    const pausedInterface = new Contract(
      vault.address,
      ['function paused() view returns (bool)'],
      vault.provider
    );
    paused = await pausedInterface.paused();
  } catch {}

  return {
    nativeProtocolName,

    poolComposition,

    totalSupply,
    totalShares: totalSupply,
    totalAssets,
    assetsPerShare,
    assetPrice,
    sharePrice,
    depositCap,
    vaultMarketValue,
    vaultMarketValuePending,
    avgVaultMarketValue,
    paused,
  };
}
