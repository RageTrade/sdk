import { BigNumberish, toBigInt } from 'ethers';
import { Q128 } from './fixed-point';

export function unrealizedLpFees(
  sumFeeInsideX128: BigNumberish,
  sumFeeInsideLastX128: BigNumberish,
  liquidity: BigNumberish
) {
  sumFeeInsideX128 = toBigInt(sumFeeInsideX128);
  sumFeeInsideLastX128 = toBigInt(sumFeeInsideLastX128);
  liquidity = toBigInt(liquidity);

  return ((sumFeeInsideX128 - sumFeeInsideLastX128) * liquidity) / Q128;
}
