import DnGmxBatchingManagerDeployment from '../../../deployments/dn-lb-vault/arbgoerli/DnGmxBatchingManager.json';
import DnGmxJuniorVaultDeployment from '../../../deployments/dn-lb-vault/arbgoerli/DnGmxJuniorVault.json';
import DnGmxSeniorVaultDeployment from '../../../deployments/dn-lb-vault/arbgoerli/DnGmxSeniorVault.json';

import { DnGmxVaultDeployments } from './interface';

export function getDeployments(): DnGmxVaultDeployments {
  return {
    DnGmxBatchingManagerDeployment,
    DnGmxJuniorVaultDeployment,
    DnGmxSeniorVaultDeployment,
  };
}
