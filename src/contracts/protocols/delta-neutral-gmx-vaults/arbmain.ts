import BatchingManagerBypassDeployment from '../../../deployments/delta-neutral-gmx-vaults/arbmain/BatchingManagerBypass.json';
import DepositPeripheryDeployment from '../../../deployments/delta-neutral-gmx-vaults/arbmain/DepositPeriphery.json';
import DnGmxBatchingManagerDeployment from '../../../deployments/delta-neutral-gmx-vaults/arbmain/DnGmxBatchingManager.json';
import DnGmxBatchingManagerLogicDeployment from '../../../deployments/delta-neutral-gmx-vaults/arbmain/DnGmxBatchingManagerLogic.json';
import DnGmxBatchingManagerGlpDeployment from '../../../deployments/delta-neutral-gmx-vaults/arbmain/DnGmxBatchingManagerGlp.json';
import DnGmxBatchingManagerGlpLogicDeployment from '../../../deployments/delta-neutral-gmx-vaults/arbmain/DnGmxBatchingManagerGlpLogic.json';
import DnGmxJuniorVaultDeployment from '../../../deployments/delta-neutral-gmx-vaults/arbmain/DnGmxJuniorVault.json';
import DnGmxJuniorVaultLogicDeployment from '../../../deployments/delta-neutral-gmx-vaults/arbmain/DnGmxJuniorVaultLogic.json';
import DnGmxJuniorVaultManagerLibraryDeployment from '../../../deployments/delta-neutral-gmx-vaults/arbmain/DnGmxJuniorVaultManagerLibrary.json';
import DnGmxSeniorVaultDeployment from '../../../deployments/delta-neutral-gmx-vaults/arbmain/DnGmxSeniorVault.json';
import DnGmxSeniorVaultLogicDeployment from '../../../deployments/delta-neutral-gmx-vaults/arbmain/DnGmxSeniorVaultLogic.json';
import WithdrawPeripheryDeployment from '../../../deployments/delta-neutral-gmx-vaults/arbmain/WithdrawPeriphery.json';
import ProxyAdmin from '../../../deployments/delta-neutral-gmx-vaults/arbmain/ProxyAdmin.json';
import DnGmxTraderHedgeStrategyDeployment from '../../../deployments/delta-neutral-gmx-vaults/arbmain/DnGmxTraderHedgeStrategy.json';

import { DnGmxVaultDeployments } from './interface';

export function getDeployments(): DnGmxVaultDeployments {
  return {
    BatchingManagerBypassDeployment,
    DepositPeripheryDeployment,
    DnGmxBatchingManagerDeployment,
    DnGmxBatchingManagerLogicDeployment,
    DnGmxBatchingManagerGlpDeployment,
    DnGmxBatchingManagerGlpLogicDeployment,
    DnGmxJuniorVaultDeployment,
    DnGmxJuniorVaultLogicDeployment,
    DnGmxJuniorVaultManagerLibraryDeployment,
    DnGmxSeniorVaultDeployment,
    DnGmxSeniorVaultLogicDeployment,
    DnGmxTraderHedgeStrategyDeployment,
    WithdrawPeripheryDeployment,
    ProxyAdmin,
  };
}
