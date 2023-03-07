import { BigNumberish, formatUnits, toBigInt, toNumber } from 'ethers';
import { abs } from './bigint';

// TODO: add tests for this stuff as well

export const Q128 = toBigInt(1) << 128n;

export function toQ128(num: number): bigint {
  const frac = num - Math.floor(num);
  num -= frac;
  return (
    Q128 * toBigInt(num) +
    // toBigInt(Math.floor(Number.MAX_SAFE_INTEGER * frac))
    //   .mul(Q128)
    //   .div('0x1fffffffffffff'), // Number.MAX_SAFE_INTEGER

    // fractional part
    (Q128 * toBigInt(Math.floor((1 << 30) * frac))) / (toBigInt(1) << 30n)
  );
}

export function fromQ128(val: BigNumberish): number {
  val = toBigInt(val);
  const isNegative = val < 0n;
  val = abs(val);
  let formatted;
  try {
    formatted = toNumber(val >> 128n);
    formatted +=
      toNumber(((val % Q128) * toBigInt(Number.MAX_SAFE_INTEGER - 1)) / Q128) /
      (Number.MAX_SAFE_INTEGER - 1);
  } catch {
    formatted = Number(formatUnits(val >> 128n, 0));
  }

  if (isNegative) formatted *= -1;
  return formatted;
}

export const Q96 = toBigInt(1) << 96n;

export function toQ96(num: number): bigint {
  const frac = num - Math.floor(num);
  num -= frac;
  return (
    Q96 * toBigInt(num) +
    // toBigInt(Math.floor(Number.MAX_SAFE_INTEGER * frac))
    //   .mul(Q96)
    //   .div('0x1fffffffffffff'), // Number.MAX_SAFE_INTEGER

    // fractional part
    (Q96 * toBigInt(Math.floor((1 << 30) * frac))) / (toBigInt(1) << 30n)
  );
}

/**
 *
 * @param val A javascript number, can be fractional
 * @param jsDecimals The number of decimal places to round to
 * @returns A number rounded to the nearest jsDecimals
 */
export function fromQ96(val: BigNumberish, jsDecimals?: number): number {
  val = toBigInt(val);
  const isNegative = val < 0n;
  val = abs(val);
  let formatted;
  try {
    formatted = toNumber(val >> 96n);
    formatted +=
      toNumber(((val % Q96) * toBigInt(Number.MAX_SAFE_INTEGER - 1)) / Q96) /
      (Number.MAX_SAFE_INTEGER - 1);
  } catch {
    formatted = Number(formatUnits(val >> 128n, 0));
  }
  if (isNegative) formatted *= -1;
  return typeof jsDecimals === 'undefined'
    ? formatted
    : roundToNearest(formatted, jsDecimals);
}

export function roundToNearest(num: number, nearest: number) {
  return Math.round(num / nearest) * nearest;
}
