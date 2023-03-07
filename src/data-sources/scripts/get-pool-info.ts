import {
  BigNumberish,
  parseUnits,
  Provider,
  toBigInt,
  toNumber,
  ZeroAddress,
} from 'ethers';
import { core } from '../../contracts';
import {
  IUniswapV3Pool__factory,
  VPoolWrapper__factory,
  IOracle__factory,
} from '../../typechain';
import {
  priceX128ToPrice,
  sqrtPriceX96ToPrice,
  formatFundingRate,
  priceX128ToSqrtPriceX96,
  sqrtPriceX96ToPriceX128,
} from '../../utils';
import { newError } from '../../utils/loggers';

export interface PoolInfoResult {
  realPrice: number;
  virtualPrice: number;
  realTwapPrice: number;
  virtualTwapPrice: number;
  fundingRate: number;

  // fixed point
  realSqrtPriceX96: bigint;
  virtualSqrtPriceX96: bigint;
  realPriceX128: bigint;
  virtualPriceX128: bigint;
  realTwapPriceX128: bigint;
  virtualTwapPriceX128: bigint;
  fundingRateX128: bigint;
  sumAX128: bigint;

  // decimal
  realPriceD18: bigint;
  virtualPriceD18: bigint;
  realTwapPriceD18: bigint;
  virtualTwapPriceD18: bigint;
  fundingRateD18: bigint;

  info: {
    vToken: string;
    vPool: string;
    vPoolWrapper: string;
    settings: {
      initialMarginRatioBps: number;
      maintainanceMarginRatioBps: number;
      maxVirtualPriceDeviationRatioBps: number;
      twapDuration: number;
      isAllowedForTrade: boolean;
      isCrossMargined: boolean;
      oracle: string;
    };
  };
}

export async function getPoolInfo(
  provider: Provider,
  poolId: BigNumberish
): Promise<PoolInfoResult> {
  poolId = toBigInt(poolId);
  const { clearingHouse, clearingHouseLens } = await core.getContracts(
    provider
  );

  const [realTwapPriceX128, virtualTwapPriceX128, pool] = await Promise.all([
    clearingHouse.getRealTwapPriceX128(poolId),
    clearingHouse.getVirtualTwapPriceX128(poolId),
    clearingHouseLens.getPoolInfo(poolId),
  ]);

  if (pool.vPool === ZeroAddress) {
    throw newError(`Pool with id ${poolId} not found`);
  }

  const vPool = IUniswapV3Pool__factory.connect(pool.vPool, provider);
  const vPoolWrapper = VPoolWrapper__factory.connect(
    pool.vPoolWrapper,
    provider
  );
  const oracle = IOracle__factory.connect(pool.settings.oracle, provider);
  const { sqrtPriceX96 } = await vPool.slot0();
  const realPriceX128 = await oracle.getTwapPriceX128(0);

  const realPrice = await priceX128ToPrice(realPriceX128, 6, 18);
  const virtualPrice = await sqrtPriceX96ToPrice(sqrtPriceX96, 6, 18);
  const realTwapPrice = await priceX128ToPrice(realTwapPriceX128, 6, 18);
  const virtualTwapPrice = await priceX128ToPrice(virtualTwapPriceX128, 6, 18);

  const { fundingRateX128 } =
    await vPoolWrapper.getFundingRateAndVirtualPrice();
  const sumAX128 = await vPoolWrapper.getExtrapolatedSumAX128();

  return {
    // js number
    realPrice,
    virtualPrice,
    realTwapPrice,
    virtualTwapPrice,
    fundingRate: formatFundingRate(fundingRateX128),

    // fixed point
    realSqrtPriceX96: priceX128ToSqrtPriceX96(realPriceX128),
    virtualSqrtPriceX96: sqrtPriceX96,
    realPriceX128: realPriceX128,
    virtualPriceX128: sqrtPriceX96ToPriceX128(sqrtPriceX96),
    realTwapPriceX128: realTwapPriceX128,
    virtualTwapPriceX128: virtualTwapPriceX128,
    fundingRateX128: fundingRateX128,
    sumAX128: sumAX128,

    // decimal
    realPriceD18: parseUnits(realPrice.toFixed(18), 18),
    virtualPriceD18: parseUnits(virtualPrice.toFixed(18), 18),
    realTwapPriceD18: parseUnits(realTwapPrice.toFixed(18), 18),
    virtualTwapPriceD18: parseUnits(virtualTwapPrice.toFixed(18), 18),
    fundingRateD18: parseUnits(
      formatFundingRate(fundingRateX128).toFixed(18),
      18
    ),

    info: {
      vToken: pool.vToken,
      vPool: pool.vPool,
      vPoolWrapper: pool.vPoolWrapper,
      settings: {
        initialMarginRatioBps: toNumber(pool.settings.initialMarginRatioBps),
        maintainanceMarginRatioBps: toNumber(
          pool.settings.maintainanceMarginRatioBps
        ),
        maxVirtualPriceDeviationRatioBps: toNumber(
          pool.settings.maxVirtualPriceDeviationRatioBps
        ),
        twapDuration: toNumber(pool.settings.twapDuration),
        isAllowedForTrade: pool.settings.isAllowedForTrade,
        isCrossMargined: pool.settings.isCrossMargined,
        oracle: pool.settings.oracle,
      },
    },
  };
}
