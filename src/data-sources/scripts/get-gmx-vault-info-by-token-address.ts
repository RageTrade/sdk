import { ethers } from 'ethers';
import { getGmxVaultContracts } from '../../contracts';

export async function getGmxVaultInfoByTokenAddress(
  provider: ethers.providers.Provider,
  tokenAddress: string
) {
  const { gmxUnderlyingVault } = await getGmxVaultContracts(provider);

  const price = await gmxUnderlyingVault.getMinPrice(tokenAddress);
  return {
    underlyingVaultMinPrice: price,
  };
}
