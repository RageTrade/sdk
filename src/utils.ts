import { BigNumber } from 'ethers';
import { formatUnits, parseUnits } from 'ethers/lib/utils';
import { getEthersInterfaces } from './contracts';

const interfaces = getEthersInterfaces();

export function parseError(str: string) {
  for (const iface of interfaces) {
    try {
      return iface.parseError(str);
    } catch {}
  }
  throw new Error(`Could not parseError ${str}`);
}

export function parseUsdc(str: string) {
  return parseUnits(str, 6);
}

export function formatUsdc(val: BigNumber) {
  return formatUnits(val, 6);
}
