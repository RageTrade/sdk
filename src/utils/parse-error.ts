import { getEthersInterfaces } from '../contracts';

const interfaces = getEthersInterfaces();

export function parseError(str: string) {
  for (const iface of interfaces) {
    try {
      return iface.parseError(str);
    } catch {}
  }
  throw new Error(`Could not parseError ${str}`);
}
