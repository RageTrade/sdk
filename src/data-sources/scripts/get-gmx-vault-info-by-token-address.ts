import { formatUnits, Provider } from 'ethers';
import { gmxProtocol } from '../../contracts';

export interface GmxVaultInfoByTokenAddressResult {
  underlyingVaultMinPrice: number;
  underlyingVaultMinPriceD30: bigint;
}

export async function getGmxVaultInfoByTokenAddress(
  provider: Provider,
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
