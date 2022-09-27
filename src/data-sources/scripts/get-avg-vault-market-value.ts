import { BigNumber } from 'ethers';
import { BaseVault } from '../../typechain';
import { formatUsdc } from '../../utils';
import { BaseDataSource } from '../base-data-source';

export interface AvgVaultMarketValueResult {
  avgVaultMarketValue: number;
  avgVaultMarketValueD6: BigNumber;
}

export async function getAvgVaultMarketValue(
  vault: BaseVault,
  dataSource: BaseDataSource
): Promise<AvgVaultMarketValueResult> {
  let timestamp = Math.floor(Date.now() / 1000);
  let vmvSum = BigNumber.from(0);

  const hourDelay = 2;
  let i = 0;
  for (; i < 24 / hourDelay; i++) {
    const blockNumber = await dataSource.getBlockByTimestamp(timestamp);
    const vmv = await vault.getVaultMarketValue({
      blockTag: blockNumber,
    });
    vmvSum = vmvSum.add(vmv);
    timestamp -= 3600 * hourDelay;
  }

  const avgVaultMarketValueD6 = vmvSum.div(i);
  return {
    avgVaultMarketValueD6,
    avgVaultMarketValue: Number(formatUsdc(avgVaultMarketValueD6)),
  };
}
