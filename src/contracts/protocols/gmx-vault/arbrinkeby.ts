import GlpStakingManagerDeployment from '@ragetrade/gmx-vault/deployments/arbtest/GlpStakingManager.json';
import GlpStakingManagerLogicDeployment from '@ragetrade/gmx-vault/deployments/arbtest/GlpStakingManagerLogic.json';
import GMXBatchingManagerDeployment from '@ragetrade/gmx-vault/deployments/arbtest/GMXBatchingManager.json';
import GMXBatchingManagerLogicDeployment from '@ragetrade/gmx-vault/deployments/arbtest/GMXBatchingManagerLogic.json';
import GMXYieldStrategyDeployment from '@ragetrade/gmx-vault/deployments/arbtest/GMXYieldStrategy.json';
import GMXYieldStrategyLogicDeployment from '@ragetrade/gmx-vault/deployments/arbtest/GMXYieldStrategyLogic.json';

import { GmxVaultDeployments } from './interface';

export function getDeployments(): GmxVaultDeployments {
  return {
    GlpStakingManagerDeployment,
    GlpStakingManagerLogicDeployment,
    GMXBatchingManagerDeployment,
    GMXBatchingManagerLogicDeployment,
    GMXYieldStrategyDeployment,
    GMXYieldStrategyLogicDeployment,
  };
}
