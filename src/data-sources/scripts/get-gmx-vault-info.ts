import { ethers } from 'ethers';
import { gmxProtocol } from '../../contracts';

export async function getGmxVaultInfo(provider: ethers.providers.Provider) {
  const { glpManager, glp } = await gmxProtocol.getContracts(provider);
  const aumInUsdg = await glpManager.getAumInUsdg(true);
  const glpSupply = await glp.totalSupply();
  return {
    aumInUsdg: aumInUsdg,
    glpSupply: glpSupply,
  };
}
