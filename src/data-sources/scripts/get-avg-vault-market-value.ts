import { toBigInt } from 'ethers';
import { BaseVault } from '../../typechain';
import { Amount, bigNumberToAmount } from '../../utils';
import { BaseDataSource } from '../base-data-source';

export interface AvgVaultMarketValueResult {
  avgVaultMarketValue: Amount;
}

export async function getAvgVaultMarketValue(
  vault: BaseVault,
  dataSource: BaseDataSource,
  vaultDeployBlockNumber?: number
): Promise<AvgVaultMarketValueResult> {
  let timestamp = Math.floor(Date.now() / 1000);
  let vmvSum = 0n;

  const hourDelay = 2;
  let i = 0;
  for (; i < 24 / hourDelay; i++) {
    try {
      const { result: blockNumber } = await dataSource.getBlockByTimestamp(
        timestamp
      );
      const vmv = await vault.getVaultMarketValue({
        blockTag: Math.max(blockNumber, vaultDeployBlockNumber || 0),
      });
      vmvSum = vmvSum + vmv;
      timestamp -= 3600 * hourDelay;
    } catch {
      // this might fail if node does not support archive queries older than this or
      // if contract does not exist at this block
      i++; // counting this iteration
      break;
    }
  }

  const avgVaultMarketValueD6 = vmvSum / toBigInt(i);
  return {
    avgVaultMarketValue: bigNumberToAmount(avgVaultMarketValueD6, 6),
  };
}
