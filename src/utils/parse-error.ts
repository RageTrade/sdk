import { BigNumber } from 'ethers';
import { getEthersInterfaces } from '../contracts';

const interfaces = getEthersInterfaces();

export function parseError(errorData: string) {
  for (const iface of interfaces) {
    try {
      return iface.parseError(errorData);
    } catch {}
  }
  throw new Error(`Could not parseError ${errorData}`);
}

export function formatError(errorData: string): string {
  try {
    const err = parseError(errorData);
    // TODO display the params as well, will need to fetch the ABI
    //  and map the param to the result
    return `${err.name}(${err.args
      .map((arg) => stringifyValue(arg))
      .join(',')})`;
  } catch (e: any) {
    return e.message;
  }
}

export function stringifyValue(val: any) {
  if (BigNumber.isBigNumber(val)) {
    return BigNumber.from(val).toString();
  } else if (typeof val === 'number') {
    return val.toString();
  } else {
    return val;
  }
}
