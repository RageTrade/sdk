import { ethers } from 'ethers';
import { parseUnits } from 'ethers/lib/utils';
import {
  VaultName,
  getVault,
  getNetworkNameFromProvider,
  getVaultDeployBlockNumber,
} from '../../contracts';
import { IERC20Metadata__factory } from '../../typechain';
import {
  priceX128ToPrice,
  Amount,
  bigNumberToAmount,
  stringToAmount,
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
  assetPrice: Amount;
  sharePrice: Amount;
  depositCap: Amount;
  vaultMarketValue: Amount;
  avgVaultMarketValue: Amount;
}

const USD_DECIMALS = 6;

export async function getVaultInfo(
  provider: ethers.providers.Provider,
  vaultName: VaultName,
  dataSource: BaseDataSource
): Promise<VaultInfoResult> {
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
  const assetPriceX128 = await vault.getPriceX128(); // dollars per asset
  const assetPrice = stringToAmount(
    (
      await priceX128ToPrice(assetPriceX128, USD_DECIMALS, assetDecimals)
    ).toFixed(USD_DECIMALS),
    USD_DECIMALS
  );

  // share price
  const assetsPerShareDX = await vault.convertToAssets(
    parseUnits('1', shareDecimals)
  );
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
  };
}
