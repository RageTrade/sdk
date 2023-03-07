import { formatUnits, Provider } from 'ethers';
import { gmxProtocol, gmxVault } from '../../contracts';

export interface GmxVaultInfoResult {
  aumInUsdgD18: bigint;
  glpSupplyD18: bigint;
  aumInUsdg: number;
  glpSupply: number;
  gmxBatchingManager: {
    paused: boolean;
  };
}

// TODO rename to gmx protocol info
export async function getGmxVaultInfo(
  provider: Provider
): Promise<GmxVaultInfoResult> {
  const { glpManager, glp } = await gmxProtocol.getContracts(provider);
  const aumInUsdgD18 = await glpManager.getAumInUsdg(true);
  const glpSupplyD18 = await glp.totalSupply();

  const { gmxBatchingManager } = await gmxVault.getContracts(provider);
  const paused = await gmxBatchingManager.paused();
  return {
    aumInUsdgD18,
    glpSupplyD18,
    aumInUsdg: Number(formatUnits(aumInUsdgD18, 18)),
    glpSupply: Number(formatUnits(glpSupplyD18, 18)),
    gmxBatchingManager: {
      paused,
    },
  };
}
