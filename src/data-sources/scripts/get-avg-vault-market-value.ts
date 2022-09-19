import { BigNumber } from 'ethers';
import { BaseVault } from '../../typechain/vaults';
import { BaseDataSource } from '../base-data-source';

export async function getAvgVaultMarketValue(
  vault: BaseVault,
  dataSource: BaseDataSource
): Promise<BigNumber> {
  let timestamp = Math.floor(Date.now() / 1000);
  let vmvSum = BigNumber.from(0);

  for (let i = 0; i < 24; i++) {
    const blockNumber = await dataSource.getBlockByTimestamp(timestamp);
    const vmv = await vault.getVaultMarketValue({
      blockTag: blockNumber,
    });
    vmvSum = vmvSum.add(vmv);
    timestamp -= 3600;
  }

  return vmvSum.div(24);
}
