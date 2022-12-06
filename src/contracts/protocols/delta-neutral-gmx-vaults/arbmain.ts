import DnGmxBatchingManagerDeployment from '../../../deployments/delta-neutral-gmx-vaults/arbmain/DnGmxBatchingManager.json';
import DnGmxJuniorVaultDeployment from '../../../deployments/delta-neutral-gmx-vaults/arbmain/DnGmxJuniorVault.json';
import DnGmxSeniorVaultDeployment from '../../../deployments/delta-neutral-gmx-vaults/arbmain/DnGmxSeniorVault.json';
import WithdrawPeripheryDeployment from '../../../deployments/delta-neutral-gmx-vaults/arbmain/WithdrawPeriphery.json';
import BatchingManagerBypassDeployment from '../../../deployments/delta-neutral-gmx-vaults/arbmain/BatchingManagerBypass.json';
import DepositPeripheryDeployment from '../../../deployments/delta-neutral-gmx-vaults/arbmain/DepositPeriphery.json';

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
