import { BigNumberish, toBeHex, zeroPadBytes } from 'ethers';

export function bytes32(input: BigNumberish): string {
  return zeroPadBytes(toBeHex(input), 32);
}
