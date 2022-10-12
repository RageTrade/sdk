import { BigNumber } from 'ethers';
import { formatEther } from 'ethers/lib/utils';
import { core, getNetworkName, NetworkName } from '../contracts';
import pools from '../pools.json';
import { ClearingHouse, IClearingHouse } from '../typechain';
import * as typechain from '../typechain';
import { formatUsdc } from './amounts';
import { amountsForLiquidity } from './liquidity';
import { unrealizedLpFees } from './lp-fees';
import { tickToPrice } from './price-tick';

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
          collateralAddress: collateralInfo.collateral,
          collateralId,
          balance: collateralInfo.balance,
        }))
    )
  );

  const activePools = await Promise.all(
    activePoolIds.map(async (poolId) => {
      const { balance, netTraderPosition, sumALastX128, activeTickRanges } =
        await clearingHouseLens.getAccountPositionInfo(accountId, poolId);

      let { vPoolAddress, vPoolWrapperAddress } =
        pools[networkName].find((pool) =>
          BigNumber.from(pool.poolId).eq(poolId)
        )! || {};

      if (vPoolAddress === undefined) {
        const poolInfo = await clearingHouseLens.getPoolInfo(poolId);
        vPoolAddress = poolInfo.vPool;
      }

      const vPool = typechain.uniswapCore.UniswapV3Pool__factory.connect(
        vPoolAddress,
        clearingHouseLens.provider
      );
      const vPoolWrapper = typechain.core.VPoolWrapper__factory.connect(
        vPoolWrapperAddress,
        clearingHouseLens.provider
      );

      const { sqrtPriceX96 } = await vPool.slot0();

      const liquidityPositions = await Promise.all(
        activeTickRanges.map(async (tickRange) => {
          const lpInfo =
            await clearingHouseLens.getAccountLiquidityPositionInfo(
              accountId,
              poolId,
              tickRange.tickLower,
              tickRange.tickUpper
            );
          const { vQuoteAmount, vTokenAmount } = amountsForLiquidity(
            tickRange.tickLower,
            sqrtPriceX96,
            tickRange.tickUpper,
            lpInfo.liquidity
          );

          // TODO take the decimals dynamically
          const priceLower = await tickToPrice(tickRange.tickLower, 6, 18);
          const priceUpper = await tickToPrice(tickRange.tickUpper, 6, 18);

          const { sumFeeInsideX128 } =
            await vPoolWrapper.getExtrapolatedValuesInside(
              tickRange.tickLower,
              tickRange.tickUpper
            );
          const unrealizedLpFeesAmount = unrealizedLpFees(
            sumFeeInsideX128,
            lpInfo.sumFeeInsideLastX128,
            lpInfo.liquidity
          );

          return {
            tickLower: tickRange.tickLower,
            tickUpper: tickRange.tickUpper,
            priceLower,
            priceUpper,
            vQuoteAmountFormatted: formatUsdc(vQuoteAmount),
            vTokenAmountFormatted: formatEther(vTokenAmount),
            unrealizedLpFeesAmountFormatted: formatUsdc(unrealizedLpFeesAmount),
            vQuoteAmount,
            vTokenAmount,
            unrealizedLpFeesAmount,
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
    })
  );

  return {
    owner,
    vQuoteBalance,
    activeCollaterals,
    activePools,
  };
}
