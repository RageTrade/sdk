import { BigNumber } from 'ethers';
import { formatUnits, parseUnits } from 'ethers/lib/utils';

export function parseUsdc(str: string) {
  return parseUnits(str, 6);
}

export function formatUsdc(val: BigNumber) {
  return formatUnits(val, 6);
}
