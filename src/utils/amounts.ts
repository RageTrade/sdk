import { BigNumber } from 'ethers';
import { formatUnits, parseUnits } from 'ethers/lib/utils';
import { BigNumberStringified } from './stringify-bignumber';

export function parseUsdc(str: string) {
  return parseUnits(str, 6);
}

export function formatUsdc(val: BigNumber) {
  return formatUnits(val, 6);
}

export interface Amount {
  value: BigNumber;
  decimals: number;
  formatted: string;
}

export function bigNumberToAmount(value: BigNumber, decimals: number): Amount {
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
    value: BigNumber.from(amount.value),
    decimals: amount.decimals,
    formatted: amount.formatted,
  };
}
