import {
  BigNumberish,
  formatUnits,
  parseUnits,
  toBigInt,
  toNumber,
} from 'ethers';
import { BigNumberStringified } from './stringify-bignumber';

export function parseUsdc(str: string) {
  return parseUnits(str, 6);
}

export function formatUsdc(val: BigNumberish) {
  return formatUnits(val, 6);
}

export interface Amount {
  value: bigint;
  decimals: number;
  formatted: string;
}

export function bigNumberToAmount(
  value: bigint,
  decimals: BigNumberish
): Amount {
  decimals = toNumber(decimals);
  return {
    value,
    decimals,
    formatted: formatUnits(value, decimals),
  };
}

export function stringToAmount(str: string, decimals: number): Amount {
  const bn = parseUnits(str, decimals);
  return {
    value: bn,
    decimals,
    formatted: formatUnits(bn, decimals),
  };
}

export function parseAmount(amount: BigNumberStringified<Amount>): Amount {
  return {
    value: toBigInt(amount.value),
    decimals: amount.decimals,
    formatted: amount.formatted,
  };
}
