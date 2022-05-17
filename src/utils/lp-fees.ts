import { BigNumber, BigNumberish } from 'ethers';
import { Q128 } from './fixed-point';

export function unrealizedLpFees(
  sumFeeInsideX128: BigNumberish,
  sumFeeInsideLastX128: BigNumberish,
  liquidity: BigNumberish
) {
  sumFeeInsideX128 = BigNumber.from(sumFeeInsideX128);
  sumFeeInsideLastX128 = BigNumber.from(sumFeeInsideLastX128);
  liquidity = BigNumber.from(liquidity);

  return sumFeeInsideX128.sub(sumFeeInsideLastX128).mul(liquidity).div(Q128);
}
