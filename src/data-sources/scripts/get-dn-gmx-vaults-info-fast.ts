import { formatEther, formatUnits, parseEther, Provider } from 'ethers';
import { deltaNeutralGmxVaults } from '../../contracts';
import { Amount, bigNumberToAmount, safeDiv } from '../../utils';

export interface DnGmxVaultsInfoFastResult {
  juniorVault: {
    ethRewardsSplitRate: number;
    assetPriceMinimized: Amount;
    assetPriceMaximized: Amount;
  };
  seniorVault: {
    utilizationRatio: number;
    ethRewardsSplitRate: number;
  };
  dnGmxBatchingManager: {
    paused: boolean;
    roundUsdcBalance: Amount;
  };
}

export async function getDnGmxVaultsInfoFast(
  provider: Provider
): Promise<DnGmxVaultsInfoFastResult> {
  const { dnGmxJuniorVault, dnGmxSeniorVault, dnGmxBatchingManager } =
    await deltaNeutralGmxVaults.getContracts(provider);

  const [
    // junior vault
    dnGmxJuniorVault_getPrice_false,
    dnGmxJuniorVault_getPrice_true,
    // senior vault
    dnGmxSeniorVault_totalUsdcBorrowed,
    dnGmxSeniorVault_totalAssets,
    dnGmxSeniorVault_getEthRewardsSplitRate,
    // batching manager
    dnGmxBatchingManager_paused,
    dnGmxBatchingManager_roundUsdcBalance,
  ] = await Promise.all([
    // junior vault
    dnGmxJuniorVault.getPrice(false),
    dnGmxJuniorVault.getPrice(true),
    // senior vault
    dnGmxSeniorVault.totalUsdcBorrowed(),
    dnGmxSeniorVault.totalAssets(),
    dnGmxSeniorVault.getEthRewardsSplitRate(),
    // batching manager
    dnGmxBatchingManager.paused(),
    dnGmxBatchingManager.roundUsdcBalance(),
  ] as const);

  const D18 = parseEther('1');

  const utilizationRatioD18 = safeDiv(
    D18 * dnGmxSeniorVault_totalUsdcBorrowed,
    dnGmxSeniorVault_totalAssets
  );

  const seniorVault_ethRewardsSplitRate = Number(
    formatUnits(dnGmxSeniorVault_getEthRewardsSplitRate, 30)
  );
  return {
    juniorVault: {
      ethRewardsSplitRate: 1 - seniorVault_ethRewardsSplitRate,
      assetPriceMinimized: bigNumberToAmount(
        dnGmxJuniorVault_getPrice_false,
        18
      ),
      assetPriceMaximized: bigNumberToAmount(
        dnGmxJuniorVault_getPrice_true,
        18
      ),
    },
    seniorVault: {
      utilizationRatio: Number(formatEther(utilizationRatioD18)),
      ethRewardsSplitRate: seniorVault_ethRewardsSplitRate,
    },
    dnGmxBatchingManager: {
      paused: dnGmxBatchingManager_paused,
      roundUsdcBalance: bigNumberToAmount(
        dnGmxBatchingManager_roundUsdcBalance,
        6
      ),
    },
  };
}
