import BatchingManagerBypassDeployment from '../../../deployments/delta-neutral-gmx-vaults/mainnetfork/BatchingManagerBypass.json';
import DepositPeripheryDeployment from '../../../deployments/delta-neutral-gmx-vaults/mainnetfork/DepositPeriphery.json';
import DnGmxBatchingManagerDeployment from '../../../deployments/delta-neutral-gmx-vaults/mainnetfork/DnGmxBatchingManager.json';
import DnGmxBatchingManagerLogicDeployment from '../../../deployments/delta-neutral-gmx-vaults/mainnetfork/DnGmxBatchingManagerLogic.json';
import DnGmxBatchingManagerGlpDeployment from '../../../deployments/delta-neutral-gmx-vaults/mainnetfork/DnGmxBatchingManagerGlp.json';
import DnGmxBatchingManagerGlpLogicDeployment from '../../../deployments/delta-neutral-gmx-vaults/mainnetfork/DnGmxBatchingManagerGlpLogic.json';
import DnGmxJuniorVaultDeployment from '../../../deployments/delta-neutral-gmx-vaults/mainnetfork/DnGmxJuniorVault.json';
import DnGmxJuniorVaultLogicDeployment from '../../../deployments/delta-neutral-gmx-vaults/mainnetfork/DnGmxJuniorVaultLogic.json';
import DnGmxJuniorVaultManagerLibraryDeployment from '../../../deployments/delta-neutral-gmx-vaults/mainnetfork/DnGmxJuniorVaultManagerLibrary.json';
import QuoterLibraryDeployment from '../../../deployments/delta-neutral-gmx-vaults/mainnetfork/QuoterLibrary.json';
import DnGmxSeniorVaultDeployment from '../../../deployments/delta-neutral-gmx-vaults/mainnetfork/DnGmxSeniorVault.json';
import DnGmxSeniorVaultLogicDeployment from '../../../deployments/delta-neutral-gmx-vaults/mainnetfork/DnGmxSeniorVaultLogic.json';
import WithdrawPeripheryDeployment from '../../../deployments/delta-neutral-gmx-vaults/mainnetfork/WithdrawPeriphery.json';
import ProxyAdmin from '../../../deployments/delta-neutral-gmx-vaults/mainnetfork/ProxyAdmin.json';
import DnGmxTraderHedgeStrategyDeployment from '../../../deployments/delta-neutral-gmx-vaults/mainnetfork/DnGmxTraderHedgeStrategy.json';
import DnGmxTraderHedgeStrategyLogicDeployment from '../../../deployments/delta-neutral-gmx-vaults/mainnetfork/DnGmxTraderHedgeStrategyLogic.json';

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
    QuoterLibraryDeployment,
    DnGmxSeniorVaultDeployment,
    DnGmxSeniorVaultLogicDeployment,
    DnGmxTraderHedgeStrategyDeployment,
    DnGmxTraderHedgeStrategyLogicDeployment,
    WithdrawPeripheryDeployment,
    ProxyAdmin,
  };
}
