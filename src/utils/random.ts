import { hexlify, randomBytes } from 'ethers';

export function randomAddress() {
  return hexlify(randomBytes(20));
}
