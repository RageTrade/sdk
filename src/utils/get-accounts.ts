import { ClearingHouse } from '../typechain';
import { IClearingHouse } from '../typechain/core';

export async function getAccountIdsByAddress(
  addr: string,
  clearingHouse: ClearingHouse | IClearingHouse
) {
  const logs = await clearingHouse.queryFilter(
    clearingHouse.filters.AccountCreated(addr)
  );
  return logs.map((log) => log.args.accountId);
}
