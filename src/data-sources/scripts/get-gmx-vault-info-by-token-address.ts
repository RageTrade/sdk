import { ethers } from 'ethers';
import { gmxProtocol } from '../../contracts';

export async function getGmxVaultInfoByTokenAddress(
  provider: ethers.providers.Provider,
  tokenAddress: string
) {
  const { gmxUnderlyingVault } = await gmxProtocol.getContracts(provider);

  const price = await gmxUnderlyingVault.getMinPrice(tokenAddress);
  return {
    underlyingVaultMinPrice: price,
  };
}
