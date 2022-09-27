import { BigNumber, ethers } from 'ethers';
import { parseEther, formatEther, parseUnits } from 'ethers/lib/utils';
import { VaultName, getVault } from '../../contracts';
import { priceX128ToPrice, formatUsdc } from '../../utils';
import { BaseDataSource } from '../base-data-source';
import { getAvgVaultMarketValue } from './get-avg-vault-market-value';
import {
  getPoolComposition,
  PoolCompositionResult,
} from './get-pool-composition';

export interface VaultInfoResult {
  nativeProtocolName: string;

  poolComposition: PoolCompositionResult;

  totalSupply: number;
  totalShares: number;
  totalAssets: number;
  assetPrice: number;
  sharePrice: number;
  depositCap: number;
  vaultMarketValue: number;
  avgVaultMarketValue: number;

  totalSupplyD18: BigNumber;
  totalSharesD18: BigNumber;
  totalAssetsD18: BigNumber;
  assetPriceD18: BigNumber;
  sharePriceD18: BigNumber;
  depositCapD18: BigNumber;
  vaultMarketValueD6: BigNumber;
  avgVaultMarketValueD6: BigNumber;
}

export async function getVaultInfo(
  provider: ethers.providers.Provider,
  vaultName: VaultName,
  dataSource: BaseDataSource
): Promise<VaultInfoResult> {
  const { vault, nativeProtocolName } = await getVault(provider, vaultName);

  const totalSupplyD18 = await vault.totalSupply();
  const totalAssetsD18 = await vault.totalAssets();
  const assetPriceX128 = await vault.getPriceX128(); // dollars per asset
  const assetsPerShareD18 = await vault.convertToAssets(parseEther('1'));
  const depositCapD18 = await vault.depositCap();
  const vaultMarketValueD6 = await vault.getVaultMarketValue();

  // formatting
  const totalSupply = Number(formatEther(totalSupplyD18));
  const totalAssets = Number(formatEther(totalAssetsD18));
  const assetPrice = Number(
    (await priceX128ToPrice(assetPriceX128, 6, 18)).toFixed(8)
  );
  const sharePrice = Number(
    (
      await priceX128ToPrice(
        assetPriceX128.mul(assetsPerShareD18).div(parseEther('1')),
        6,
        18
      )
    ).toFixed(8)
  );
  const depositCap = Number(formatEther(depositCapD18));
  const vaultMarketValue = Number(formatUsdc(vaultMarketValueD6));

  const { avgVaultMarketValue, avgVaultMarketValueD6 } =
    await getAvgVaultMarketValue(vault, dataSource);

  const poolComposition = await getPoolComposition(provider, vaultName);
  return {
    nativeProtocolName,

    poolComposition,

    totalSupply,
    totalShares: totalSupply,
    totalAssets,
    assetPrice,
    sharePrice,
    depositCap,
    vaultMarketValue,
    avgVaultMarketValue,

    totalSupplyD18,
    totalSharesD18: totalSupplyD18,
    totalAssetsD18,
    assetPriceD18: parseUnits(String(assetPrice), 18),
    sharePriceD18: parseUnits(String(sharePrice), 18),
    depositCapD18,
    vaultMarketValueD6,
    avgVaultMarketValueD6,
  };
}
