import { formatEther, formatUnits, toBigInt, toNumber } from 'ethers';
import { core, getNetworkName, NetworkName } from '../contracts';
import pools from '../pools.json';
import {
  ClearingHouse,
  IClearingHouse,
  IERC20Metadata__factory,
} from '../typechain';
import * as typechain from '../typechain';
import { formatUsdc } from './amounts';
import { amountsForLiquidity } from './liquidity';
import { unrealizedLpFees } from './lp-fees';
import { tickToPrice } from './price-tick';
import { fpBillForLp, fpBillForTrader } from './funding-payment';

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
  return logs.map((log) => toNumber(log.args.accountId));
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
    activeCollateralIds.map(async (collateralId) => {
      const collateralInfo = await clearingHouseLens.getAccountCollateralInfo(
        accountId,
        collateralId
      );
      const collateralAddress = collateralInfo.collateral;
      const token = IERC20Metadata__factory.connect(
        collateralAddress,
        clearingHouseLens.runner
      );
      const tokenDecimals = await token.decimals();
      return {
        collateralAddress,
        collateralId,
        balance: collateralInfo.balance,
        balanceFormatted: formatUnits(collateralInfo.balance, tokenDecimals),
      };
    })
  );

  const activePools = await Promise.all(
    activePoolIds.map(async (poolId) => {
      const { balance, netTraderPosition, sumALastX128, activeTickRanges } =
        await clearingHouseLens.getAccountPositionInfo(accountId, poolId);

      let { vPoolAddress, vPoolWrapperAddress } =
        pools[networkName].find((pool) => toBigInt(pool.poolId) === poolId)! ||
        {};

      if (vPoolAddress === undefined) {
        const poolInfo = await clearingHouseLens.getPoolInfo(poolId);
        vPoolAddress = poolInfo.vPool;
      }

      const vPool = typechain.uniswapCore.UniswapV3Pool__factory.connect(
        vPoolAddress,
        clearingHouseLens.runner
      );
      const vPoolWrapper = typechain.core.VPoolWrapper__factory.connect(
        vPoolWrapperAddress,
        clearingHouseLens.runner
      );

      const sumAX128 = await vPoolWrapper.getExtrapolatedSumAX128();
      const unrealizedFundingPayment = fpBillForTrader(
        sumAX128,
        sumALastX128,
        netTraderPosition
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

          const valuesInside = await vPoolWrapper.getExtrapolatedValuesInside(
            tickRange.tickLower,
            tickRange.tickUpper
          );
          const unrealizedLpFeesAmount = unrealizedLpFees(
            valuesInside.sumFeeInsideX128,
            lpInfo.sumFeeInsideLastX128,
            lpInfo.liquidity
          );

          const unrealizedFundingPayment = fpBillForLp(
            valuesInside.sumAX128,
            valuesInside.sumFpInsideX128,
            lpInfo.sumALastX128,
            lpInfo.sumBInsideLastX128,
            lpInfo.sumFpInsideLastX128,
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
            unrealizedFundingPaymentFormatted: formatUsdc(
              unrealizedFundingPayment
            ),
            vQuoteAmount,
            vTokenAmount,
            unrealizedLpFeesAmount,
            unrealizedFundingPayment,
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
        balanceFormatted: formatEther(balance),
        netTraderPositionFormatted: formatEther(netTraderPosition),
        unrealizedFundingPaymentFormatted: formatUsdc(unrealizedFundingPayment),
        balance,
        netTraderPosition,
        unrealizedFundingPayment,
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
