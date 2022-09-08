import { BigNumber, BigNumberish, ethers } from 'ethers';
import { getContracts } from '../../contracts';
import { IOracle__factory, IUniswapV3Pool__factory } from '../../typechain';
import { priceX128ToPrice, sqrtPriceX96ToPrice } from '../../utils';

export async function getPrices(
  provider: ethers.providers.Provider,
  poolId: BigNumberish
) {
  poolId = BigNumber.from(poolId);
  const { clearingHouse, clearingHouseLens } = await getContracts(provider);

  const [realTwapPriceX128, virtualTwapPriceX128, pool] = await Promise.all([
    clearingHouse.getRealTwapPriceX128(poolId),
    clearingHouse.getVirtualTwapPriceX128(poolId),
    clearingHouseLens.getPoolInfo(poolId),
  ]);

  if (pool.vPool === ethers.constants.AddressZero) {
    throw new Error(`Pool with id ${poolId} not found`);
  }

  const vPool = IUniswapV3Pool__factory.connect(pool.vPool, provider);
  const oracle = IOracle__factory.connect(pool.settings.oracle, provider);
  const { sqrtPriceX96 } = await vPool.slot0();
  const realPriceX128 = await oracle.getTwapPriceX128(0);

  return {
    realPrice: await priceX128ToPrice(realPriceX128, 6, 18),
    virtualPrice: await sqrtPriceX96ToPrice(sqrtPriceX96, 6, 18),
    realTwapPrice: await priceX128ToPrice(realTwapPriceX128, 6, 18),
    virtualTwapPrice: await priceX128ToPrice(virtualTwapPriceX128, 6, 18),
  };
}
