import { BigNumber, ethers } from 'ethers';
import { formatUnits } from 'ethers/lib/utils';
import { gmxProtocol } from '../../contracts';

export interface GmxVaultInfoByTokenAddressResult {
  underlyingVaultMinPrice: number;
  underlyingVaultMinPriceD30: BigNumber;
}

export async function getGmxVaultInfoByTokenAddress(
  provider: ethers.providers.Provider,
  tokenAddress: string
): Promise<GmxVaultInfoByTokenAddressResult> {
  const { gmxUnderlyingVault } = await gmxProtocol.getContracts(provider);

  const underlyingVaultMinPriceD30 = await gmxUnderlyingVault.getMinPrice(
    tokenAddress
  );
  return {
    underlyingVaultMinPriceD30,
    underlyingVaultMinPrice: Number(
      formatUnits(underlyingVaultMinPriceD30, 30)
    ),
  };
}
