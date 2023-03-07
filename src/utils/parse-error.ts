import { Interface } from 'ethers';
import { getEthersInterfaces } from '../contracts/index';
import { newError } from './loggers';

const interfaces = getEthersInterfaces();

export function parseError(errorData: string) {
  for (const iface of interfaces) {
    try {
      return iface.parseError(errorData);
    } catch {}
  }

  try {
    const iface = new Interface([
      'function Error(string) public view',
      'function Panic(uint256) public view',
    ]);
    const args = iface.decodeFunctionData(errorData.slice(0, 10), errorData);
    const fragment = iface.getFunction(errorData.slice(0, 10));
    if (!fragment) {
      throw new Error('fragment is nullish');
    }
    return {
      name: fragment.name,
      args,
    };
  } catch {}

  throw newError(`Could not parseError ${errorData}`);
}

export function formatError(errorData: string): string {
  try {
    const err = parseError(errorData);
    if (!err) {
      throw new Error('err is nullish');
    }
    // TODO display the params as well, will need to fetch the ABI
    //  and map the param to the result
    return `${err.name}(${err.args
      .map((arg) => stringifyValue(arg))
      .join(',')})`;
  } catch (e: any) {
    return e.message;
  }
}

// TODO does this belong here?
export function stringifyValue(val: any) {
  if (typeof val === 'bigint') {
    return val.toString();
  } else if (typeof val === 'number') {
    return val.toString();
  } else {
    return val;
  }
}
