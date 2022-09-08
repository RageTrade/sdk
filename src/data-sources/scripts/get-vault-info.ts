import { ethers } from 'ethers';
import { parseEther, formatEther } from 'ethers/lib/utils';
import { VaultName, getVaultContracts } from '../../contracts';
import { vaults } from '../../typechain';
import { priceX128ToPrice, formatUsdc } from '../../utils';

export async function getVaultInfo(
  provider: ethers.providers.Provider,
  vaultName: VaultName
) {
  let vaultAddress = '';
  // TODO move switch to getParam
  switch (vaultName) {
    case 'tricrypto':
      const { curveYieldStrategy } = await getVaultContracts(provider);
      vaultAddress = curveYieldStrategy.address;
      break;
    case 'gmx':
      //   const { gmxYieldStrategy } = await getGmxVaultContracts(provider);
      //   vaultAddress = gmxYieldStrategy.address;
      throw new Error('gmx not implemented');
      break;
    default:
      throw new Error(`vaultName should be either tricrypto or gmx`);
  }

  const vault = vaults.BaseVault__factory.connect(vaultAddress, provider);

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
    (await priceX128ToPrice(assetPriceX128, 6, 18)).toFixed(6)
  );
  const sharePrice = Number(
    (
      await priceX128ToPrice(
        assetPriceX128.mul(assetsPerShareD18).div(parseEther('1')),
        6,
        18
      )
    ).toFixed(6)
  );
  const depositCap = Number(formatEther(depositCapD18));
  const vaultMarketValue = Number(formatUsdc(vaultMarketValueD6));
  return {
    totalSupply,
    totalAssets,
    assetPrice,
    sharePrice,
    depositCap,
    vaultMarketValue,
  };
}
