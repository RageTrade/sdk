import { Provider } from 'ethers';

import { getVault, VaultName } from '../../contracts';
import { Amount, formatUsdc } from '../../utils';

export interface VaultMarketValueResult {
  vaultMarketValue: Amount;
}
export async function getVaultMarketValue(
  provider: Provider,
  vaultName: VaultName
): Promise<{ vaultMarketValue: Amount }> {
  const { vault } = await getVault(provider, vaultName);
  const vmvD6 = await vault.getVaultMarketValue();

  return {
    vaultMarketValue: {
      decimals: 6,
      value: vmvD6,
      formatted: formatUsdc(vmvD6),
    },
  };
}
