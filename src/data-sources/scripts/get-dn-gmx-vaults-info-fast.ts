import { ethers } from 'ethers';
import { formatEther, formatUnits, parseEther } from 'ethers/lib/utils';
import { deltaNeutralGmxVaults } from '../../contracts';
import { safeDiv } from '../../utils';

export interface DnGmxVaultsInfoFastResult {
  juniorVault: {
    ethRewardsSplitRate: number;
  };
  seniorVault: {
    utilizationRatio: number;
    ethRewardsSplitRate: number;
  };
  dnGmxBatchingManager: {
    paused: boolean;
  };
}

export async function getDnGmxVaultsInfoFast(
  provider: ethers.providers.Provider
): Promise<DnGmxVaultsInfoFastResult> {
  const { dnGmxSeniorVault, dnGmxBatchingManager } =
    await deltaNeutralGmxVaults.getContracts(provider);

  const [
    // senior vault
    dnGmxSeniorVault_totalUsdcBorrowed,
    dnGmxSeniorVault_totalAssets,
    dnGmxSeniorVault_getEthRewardsSplitRate,
    // batching manager
    dnGmxBatchingManager_paused,
  ] = await Promise.all([
    // senior vault
    dnGmxSeniorVault.totalUsdcBorrowed(),
    dnGmxSeniorVault.totalAssets(),
    dnGmxSeniorVault.getEthRewardsSplitRate(),
    // batching manager
    dnGmxBatchingManager.paused(),
  ] as const);

  const D18 = parseEther('1');

  const utilizationRatioD18 = safeDiv(
    D18.mul(dnGmxSeniorVault_totalUsdcBorrowed),
    dnGmxSeniorVault_totalAssets
  );

  const seniorVault_ethRewardsSplitRate = Number(
    formatUnits(dnGmxSeniorVault_getEthRewardsSplitRate, 30)
  );
  return {
    juniorVault: {
      ethRewardsSplitRate: 1 - seniorVault_ethRewardsSplitRate,
    },
    seniorVault: {
      utilizationRatio: Number(formatEther(utilizationRatioD18)),
      ethRewardsSplitRate: seniorVault_ethRewardsSplitRate,
    },
    dnGmxBatchingManager: {
      paused: dnGmxBatchingManager_paused,
    },
  };
}
