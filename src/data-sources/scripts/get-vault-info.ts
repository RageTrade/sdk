import { BigNumber, ethers } from 'ethers';
import { parseEther, formatEther, parseUnits } from 'ethers/lib/utils';
import { VaultName, getVault, core } from '../../contracts';
import {
  priceX128ToPrice,
  formatUsdc,
  safeDiv,
  Q128,
  truncate,
} from '../../utils';
import { BaseDataSource } from '../base-data-source';
import { getAvgVaultMarketValue } from './get-avg-vault-market-value';

export async function getVaultInfo(
  provider: ethers.providers.Provider,
  vaultName: VaultName,
  dataSource: BaseDataSource
): Promise<{
  poolComposition: {
    rageAmount: string;
    nativeAmount: string;
    ragePercentage: string;
    nativePercentage: string;
    nativeProtocolName: string;
  };

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
}> {
  const { vault } = await getVault(provider, vaultName);

  // const vault = BaseVault__factory.connect(vaultAddress, provider);

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

  const avgVaultMarketValueD6 = await getAvgVaultMarketValue(vault, dataSource);

  const poolComposition = await getPoolComposition(provider, vaultName);
  return {
    poolComposition,

    totalSupply,
    totalShares: totalSupply,
    totalAssets,
    assetPrice,
    sharePrice,
    depositCap,
    vaultMarketValue,
    avgVaultMarketValue: Number(formatUsdc(avgVaultMarketValueD6)),

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

export async function getPoolComposition(
  provider: ethers.providers.Provider,
  vaultName: VaultName
): Promise<{
  rageAmount: string;
  nativeAmount: string;
  ragePercentage: string;
  nativePercentage: string;
  nativeProtocolName: string;
}> {
  const { clearingHouse, eth_vToken } = await core.getContracts(provider);

  const { vault, nativeProtocolName } = await getVault(provider, vaultName);

  const poolId = truncate(eth_vToken.address);

  // TODO
  const vaultAccountId = await vault.rageAccountNo();

  // net position of eth * twap price
  const netPosition = await clearingHouse.getAccountNetTokenPosition(
    vaultAccountId,
    poolId
  );
  const virtualPriceX128 = await clearingHouse.getVirtualTwapPriceX128(poolId);

  const rageAmount = netPosition.abs().mul(virtualPriceX128).div(Q128);
  const nativeAmount = (await vault.getVaultMarketValue()).sub(rageAmount);

  const sum = nativeAmount.add(rageAmount);
  const oneEth = parseEther('1');

  return {
    rageAmount: formatUsdc(rageAmount),
    nativeAmount: formatUsdc(nativeAmount),
    ragePercentage: formatEther(safeDiv(oneEth.mul(rageAmount), sum)),
    nativePercentage: formatEther(safeDiv(oneEth.mul(nativeAmount), sum)),
    nativeProtocolName: nativeProtocolName,
  };
}
