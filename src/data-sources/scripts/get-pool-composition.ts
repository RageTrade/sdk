import { BigNumber, ethers } from 'ethers';
import { parseEther, formatEther } from 'ethers/lib/utils';
import { VaultName, getVault } from '../../contracts';
import { core } from '../../contracts';
import { Q128, formatUsdc, safeDiv, truncate } from '../../utils';

export interface PoolCompositionResult {
  rageAmountD6: BigNumber;
  nativeAmountD6: BigNumber;
  rageAmount: number;
  nativeAmount: number;

  ragePercentage: number;
  nativePercentage: number;
}

export async function getPoolComposition(
  provider: ethers.providers.Provider,
  vaultName: VaultName
): Promise<PoolCompositionResult> {
  const { clearingHouse, eth_vToken } = await core.getContracts(provider);

  const { vault } = await getVault(provider, vaultName);

  const poolId = truncate(eth_vToken.address);

  // TODO
  const vaultAccountId = await vault.rageAccountNo();

  // net position of eth * twap price
  const netPosition = await clearingHouse.getAccountNetTokenPosition(
    vaultAccountId,
    poolId
  );
  const virtualPriceX128 = await clearingHouse.getVirtualTwapPriceX128(poolId);

  const rageAmountD6 = netPosition.abs().mul(virtualPriceX128).div(Q128);
  const nativeAmountD6 = (await vault.getVaultMarketValue()).sub(rageAmountD6);

  const sum = nativeAmountD6.add(rageAmountD6);
  const oneEth = parseEther('1');

  return {
    rageAmountD6,
    nativeAmountD6,
    rageAmount: Number(formatUsdc(rageAmountD6)),
    nativeAmount: Number(formatUsdc(nativeAmountD6)),

    ragePercentage: Number(formatEther(safeDiv(oneEth.mul(rageAmountD6), sum))),
    nativePercentage: Number(
      formatEther(safeDiv(oneEth.mul(nativeAmountD6), sum))
    ),
  };
}
