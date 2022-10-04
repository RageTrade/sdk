import { BigNumber, ethers } from 'ethers';
import { formatUnits } from 'ethers/lib/utils';
import { gmxProtocol } from '../../contracts';

export interface GmxVaultInfoResult {
  aumInUsdgD18: BigNumber;
  glpSupplyD18: BigNumber;
  aumInUsdg: number;
  glpSupply: number;
}

// TODO rename to gmx protocol info
export async function getGmxVaultInfo(
  provider: ethers.providers.Provider
): Promise<GmxVaultInfoResult> {
  const { glpManager, glp } = await gmxProtocol.getContracts(provider);
  const aumInUsdgD18 = await glpManager.getAumInUsdg(true);
  const glpSupplyD18 = await glp.totalSupply();
  return {
    aumInUsdgD18,
    glpSupplyD18,
    aumInUsdg: Number(formatUnits(aumInUsdgD18, 18)),
    glpSupply: Number(formatUnits(glpSupplyD18, 18)),
  };
}
