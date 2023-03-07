import { keccak256, encodeRlp, getAddress, dataSlice, toBeHex } from 'ethers';

import { Signer } from 'ethers';

export function getCreateAddress(
  deployerAddress: string,
  nonce: number
): string {
  return getAddress(
    dataSlice(keccak256(encodeRlp([deployerAddress, toBeHex(nonce)])), 12)
  );
}

export async function getCreateAddressFor(
  signer: Signer,
  destination: number
): Promise<string> {
  if (!signer.provider) {
    throw new Error('signer.provider is undefined');
  }
  const txCount = await signer.provider.getTransactionCount(signer);
  return getCreateAddress(await signer.getAddress(), txCount + destination);
}
