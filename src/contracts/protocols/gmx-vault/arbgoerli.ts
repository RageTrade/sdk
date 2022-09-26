import GlpStakingManagerDeployment from '@ragetrade/gmx-vault/deployments/arbgoerli/GlpStakingManager.json';
import GlpStakingManagerLogicDeployment from '@ragetrade/gmx-vault/deployments/arbgoerli/GlpStakingManagerLogic.json';
import GMXBatchingManagerDeployment from '@ragetrade/gmx-vault/deployments/arbgoerli/GMXBatchingManager.json';
import GMXBatchingManagerLogicDeployment from '@ragetrade/gmx-vault/deployments/arbgoerli/GMXBatchingManagerLogic.json';
import GMXYieldStrategyDeployment from '@ragetrade/gmx-vault/deployments/arbgoerli/GMXYieldStrategy.json';
import GMXYieldStrategyLogicDeployment from '@ragetrade/gmx-vault/deployments/arbgoerli/GMXYieldStrategyLogic.json';

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
