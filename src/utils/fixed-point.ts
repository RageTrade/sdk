import { BigNumber, BigNumberish } from 'ethers';
import { formatUnits } from 'ethers/lib/utils';

// TODO: add tests for this stuff as well

export const Q128 = BigNumber.from(1).shl(128);

export function toQ128(num: number): BigNumber {
  const frac = num - Math.floor(num);
  num -= frac;
  return Q128.mul(num).add(
    // BigNumber.from(Math.floor(Number.MAX_SAFE_INTEGER * frac))
    //   .mul(Q128)
    //   .div('0x1fffffffffffff'), // Number.MAX_SAFE_INTEGER

    // fractional part
    Q128.mul(Math.floor((1 << 30) * frac)).div(BigNumber.from(1).shl(30))
  );
}

export function fromQ128(val: BigNumberish): number {
  val = BigNumber.from(val);
  const isNegative = val.isNegative();
  val = val.abs();
  let formatted;
  try {
    formatted = val.shr(128).toNumber();
    formatted +=
      val
        .mod(Q128)
        .mul(Number.MAX_SAFE_INTEGER - 1)
        .div(Q128)
        .toNumber() /
      (Number.MAX_SAFE_INTEGER - 1);
  } catch {
    formatted = Number(formatUnits(val.shr(128), 0));
  }

  if (isNegative) formatted *= -1;
  return formatted;
}

export const Q96 = BigNumber.from(1).shl(96);

export function toQ96(num: number): BigNumber {
  const frac = num - Math.floor(num);
  num -= frac;
  return Q96.mul(num).add(
    // BigNumber.from(Math.floor(Number.MAX_SAFE_INTEGER * frac))
    //   .mul(Q96)
    //   .div('0x1fffffffffffff'), // Number.MAX_SAFE_INTEGER

    // fractional part
    Q96.mul(Math.floor((1 << 30) * frac)).div(BigNumber.from(1).shl(30))
  );
}

/**
 *
 * @param val A javascript number, can be fractional
 * @param jsDecimals The number of decimal places to round to
 * @returns A number rounded to the nearest jsDecimals
 */
export function fromQ96(val: BigNumberish, jsDecimals?: number): number {
  val = BigNumber.from(val);
  const isNegative = val.isNegative();
  val = val.abs();
  let formatted;
  try {
    formatted = val.shr(96).toNumber();
    formatted +=
      val
        .mod(Q96)
        .mul(Number.MAX_SAFE_INTEGER - 1)
        .div(Q96)
        .toNumber() /
      (Number.MAX_SAFE_INTEGER - 1);
  } catch {
    formatted = Number(formatUnits(val.shr(128), 0));
  }
  if (isNegative) formatted *= -1;
  return typeof jsDecimals === 'undefined'
    ? formatted
    : roundToNearest(formatted, jsDecimals);
}

export function roundToNearest(num: number, nearest: number) {
  return Math.round(num / nearest) * nearest;
}
