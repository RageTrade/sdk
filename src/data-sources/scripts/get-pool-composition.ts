import { parseEther, formatEther, Provider } from 'ethers';
import { VaultName, getVault } from '../../contracts';
import { core } from '../../contracts';
import { Q128, formatUsdc, safeDiv, truncate, abs } from '../../utils';

export interface PoolCompositionResult {
  rageAmountD6: bigint;
  nativeAmountD6: bigint;
  rageAmount: number;
  nativeAmount: number;

  ragePercentage: number;
  nativePercentage: number;
}

export async function getPoolComposition(
  provider: Provider,
  vaultName: VaultName
): Promise<PoolCompositionResult> {
  try {
    const { clearingHouse, eth_vToken } = await core.getContracts(provider);

    const { vault } = await getVault(provider, vaultName);

    const poolId = truncate(await eth_vToken.getAddress());

    // TODO
    const vaultAccountId = await vault.rageAccountNo();

    // net position of eth * twap price
    const netPosition = await clearingHouse.getAccountNetTokenPosition(
      vaultAccountId,
      poolId
    );
    const virtualPriceX128 = await clearingHouse.getVirtualTwapPriceX128(
      poolId
    );

    const rageAmountD6 = (abs(netPosition) * virtualPriceX128) / Q128;
    const nativeAmountD6 = (await vault.getVaultMarketValue()) - rageAmountD6;

    const sum = nativeAmountD6 + rageAmountD6;
    const oneEth = parseEther('1');

    return {
      rageAmountD6,
      nativeAmountD6,
      rageAmount: Number(formatUsdc(rageAmountD6)),
      nativeAmount: Number(formatUsdc(nativeAmountD6)),

      ragePercentage: Number(formatEther(safeDiv(oneEth * rageAmountD6, sum))),
      nativePercentage: Number(
        formatEther(safeDiv(oneEth * nativeAmountD6, sum))
      ),
    };
  } catch {
    const rageAmountD6 = 0n;
    const nativeAmountD6 = 0n;
    return {
      rageAmountD6,
      nativeAmountD6,
      rageAmount: 0,
      nativeAmount: 0,
      ragePercentage: 0,
      nativePercentage: 0,
    };
  }
}
