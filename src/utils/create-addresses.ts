import { BigNumber } from '@ethersproject/bignumber';
import { hexDataSlice, keccak256, RLP, getAddress } from 'ethers/lib/utils';
import { Signer } from 'ethers';

export function getCreateAddress(
  deployerAddress: string,
  nonce: number
): string {
  return getAddress(
    hexDataSlice(
      keccak256(
        RLP.encode([deployerAddress, BigNumber.from(nonce).toHexString()])
      ),
      12
    )
  );
}

export async function getCreateAddressFor(
  signer: Signer,
  destination: number
): Promise<string> {
  const txCount = await signer.getTransactionCount();
  return getCreateAddress(await signer.getAddress(), txCount + destination);
}
