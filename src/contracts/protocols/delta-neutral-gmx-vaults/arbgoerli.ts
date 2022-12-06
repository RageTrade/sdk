import DnGmxBatchingManagerDeployment from '../../../deployments/delta-neutral-gmx-vaults/arbgoerli/DnGmxBatchingManager.json';
import DnGmxJuniorVaultDeployment from '../../../deployments/delta-neutral-gmx-vaults/arbgoerli/DnGmxJuniorVault.json';
import DnGmxSeniorVaultDeployment from '../../../deployments/delta-neutral-gmx-vaults/arbgoerli/DnGmxSeniorVault.json';
import WithdrawPeripheryDeployment from '../../../deployments/delta-neutral-gmx-vaults/arbgoerli/WithdrawPeriphery.json';
import BatchingManagerBypassDeployment from '../../../deployments/delta-neutral-gmx-vaults/arbgoerli/BatchingManagerBypass.json';
import DepositPeripheryDeployment from '../../../deployments/delta-neutral-gmx-vaults/arbgoerli/DepositPeriphery.json';

import { DnGmxVaultDeployments } from './interface';

export function getDeployments(): DnGmxVaultDeployments {
  return {
    DnGmxBatchingManagerDeployment,
    DnGmxJuniorVaultDeployment,
    DnGmxSeniorVaultDeployment,
    WithdrawPeripheryDeployment,
    BatchingManagerBypassDeployment,
    DepositPeripheryDeployment,
  };
}
