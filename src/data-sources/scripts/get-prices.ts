import {
  BigNumberish,
  Provider,
  parseUnits,
  toBigInt,
  ZeroAddress,
} from 'ethers';
import { core } from '../../contracts';
import { IOracle__factory, IUniswapV3Pool__factory } from '../../typechain';
import { priceX128ToPrice, sqrtPriceX96ToPrice } from '../../utils';
import { newError } from '../../utils/loggers';

export interface PricesResult {
  realPrice: number;
  virtualPrice: number;
  realTwapPrice: number;
  virtualTwapPrice: number;

  realPriceD18: bigint;
  virtualPriceD18: bigint;
  realTwapPriceD18: bigint;
  virtualTwapPriceD18: bigint;
}

export async function getPrices(
  provider: Provider,
  poolId: BigNumberish
): Promise<PricesResult> {
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
  const oracle = IOracle__factory.connect(pool.settings.oracle, provider);
  const { sqrtPriceX96 } = await vPool.slot0();
  const realPriceX128 = await oracle.getTwapPriceX128(0);

  const realPrice = await priceX128ToPrice(realPriceX128, 6, 18);
  const virtualPrice = await sqrtPriceX96ToPrice(sqrtPriceX96, 6, 18);
  const realTwapPrice = await priceX128ToPrice(realTwapPriceX128, 6, 18);
  const virtualTwapPrice = await priceX128ToPrice(virtualTwapPriceX128, 6, 18);

  return {
    realPrice,
    virtualPrice,
    realTwapPrice,
    virtualTwapPrice,

    realPriceD18: parseUnits(realPrice.toFixed(18), 18),
    virtualPriceD18: parseUnits(virtualPrice.toFixed(18), 18),
    realTwapPriceD18: parseUnits(realTwapPrice.toFixed(18), 18),
    virtualTwapPriceD18: parseUnits(virtualTwapPrice.toFixed(18), 18),
  };
}
