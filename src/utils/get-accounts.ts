import { core, getNetworkName, NetworkName } from '../contracts';
import { ClearingHouse, IClearingHouse } from '../typechain';

export async function getAccountIdsByAddress(
  addr: string,
  networkName: NetworkName
): Promise<number[]>;
export async function getAccountIdsByAddress(
  addr: string,
  clearingHouse: ClearingHouse | IClearingHouse
): Promise<number[]>;

export async function getAccountIdsByAddress(
  addr: string,
  clearingHouseOrNetworkName: ClearingHouse | IClearingHouse | NetworkName
): Promise<number[]> {
  const clearingHouse =
    typeof clearingHouseOrNetworkName === 'string'
      ? core.getContractsSync(clearingHouseOrNetworkName).clearingHouse
      : clearingHouseOrNetworkName;

  const logs = await clearingHouse.queryFilter(
    clearingHouse.filters.AccountCreated(addr)
  );
  return logs.map((log) => log.args.accountId.toNumber());
}

export async function getAccountInfo(
  accountId: number,
  networkName: NetworkName
) {
  networkName = getNetworkName(networkName);
  const { clearingHouseLens } = core.getContractsSync(networkName);
  const { owner, vQuoteBalance, activeCollateralIds, activePoolIds } =
    await clearingHouseLens.getAccountInfo(accountId);

  const activeCollaterals = await Promise.all(
    activeCollateralIds.map((collateralId) =>
      clearingHouseLens
        .getAccountCollateralInfo(accountId, collateralId)
        .then((collateralInfo) => ({
          collateralAddress: collateralInfo.balance,
          collateralId,
          balance: collateralInfo.balance,
        }))
    )
  );

  const activePools = activePoolIds.map(async (poolId) => {
    const { balance, netTraderPosition, sumALastX128, activeTickRanges } =
      await clearingHouseLens.getAccountPositionInfo(accountId, poolId);

    const liquidityPositions = await Promise.all(
      activeTickRanges.map(async (tickRange) => {
        const lpInfo = await clearingHouseLens.getAccountLiquidityPositionInfo(
          accountId,
          poolId,
          tickRange.tickLower,
          tickRange.tickUpper
        );
        return {
          tickLower: tickRange.tickLower,
          tickUpper: tickRange.tickUpper,
          limitOrderType: lpInfo.limitOrderType,
          liquidity: lpInfo.liquidity,
          vTokenAmountIn: lpInfo.vTokenAmountIn,
          sumALastX128: lpInfo.sumALastX128,
          sumBInsideLastX128: lpInfo.sumBInsideLastX128,
          sumFpInsideLastX128: lpInfo.sumFpInsideLastX128,
          sumFeeInsideLastX128: lpInfo.sumFeeInsideLastX128,
        };
      })
    );

    return {
      poolId,
      balance,
      netTraderPosition,
      sumALastX128,
      liquidityPositions,
    };
  });

  return {
    owner,
    vQuoteBalance,
    activeCollaterals,
    activePools,
  };
}
