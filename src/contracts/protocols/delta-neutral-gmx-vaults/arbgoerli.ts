import DnGmxBatchingManagerDeployment from '../../../deployments/delta-neutral-gmx-vaults/arbgoerli/DnGmxBatchingManager.json';
import DnGmxJuniorVaultDeployment from '../../../deployments/delta-neutral-gmx-vaults/arbgoerli/DnGmxJuniorVault.json';
import DnGmxSeniorVaultDeployment from '../../../deployments/delta-neutral-gmx-vaults/arbgoerli/DnGmxSeniorVault.json';

import { DnGmxVaultDeployments } from './interface';

export function getDeployments(): DnGmxVaultDeployments {
  return {
    DnGmxBatchingManagerDeployment,
    DnGmxJuniorVaultDeployment,
    DnGmxSeniorVaultDeployment,
  };
}
