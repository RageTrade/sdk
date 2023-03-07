import { parseUnits, Provider, toBigInt } from 'ethers';
import {
  VaultName,
  getVault,
  getNetworkNameFromRunner,
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
}

const USD_DECIMALS = 6;

export async function getVaultInfo(
  provider: Provider,
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
  let assetPriceX128: bigint;
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
      await vault.getAddress(),
      provider
    ).getPrice(false);
    assetPrice = bigNumberToAmount(priceD18, 18);
    assetPriceX128 = (priceD18 * Q128) / toBigInt(10) ** (18n + 12n);
  }

  // share price
  const assetsPerShareDX = await vault.convertToAssets(
    parseUnits('1', shareDecimals)
  );
  const assetsPerShare = bigNumberToAmount(assetsPerShareDX, assetDecimals);
  const sharePrice = stringToAmount(
    (
      await priceX128ToPrice(
        (assetPriceX128 * assetsPerShareDX) / parseUnits('1', assetDecimals),
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
  const networkName = await getNetworkNameFromRunner(vault.runner);
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

    const usdcBalance = await usdc.balanceOf(dnGmxBatchingManager);
    const sglpBalance = await fsGLP.balanceOf(dnGmxBatchingManager);
    const sglpBalanceOfJuniorVault =
      await dnGmxBatchingManager.dnGmxJuniorVaultGlpBalance();

    const sglpInDollars =
      ((sglpBalance - sglpBalanceOfJuniorVault) * assetPriceX128) / Q128;

    vaultMarketValuePending = bigNumberToAmount(usdcBalance + sglpInDollars, 6);
  }

  const poolComposition = await getPoolComposition(provider, vaultName);

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
  };
}
