import GlpStakingManagerDeployment from '../../../deployments/gmx-vault/arbgoerli/GlpStakingManager.json';
import GlpStakingManagerLogicDeployment from '../../../deployments/gmx-vault/arbgoerli/GlpStakingManagerLogic.json';
import GMXBatchingManagerDeployment from '../../../deployments/gmx-vault/arbgoerli/GMXBatchingManager.json';
import GMXBatchingManagerLogicDeployment from '../../../deployments/gmx-vault/arbgoerli/GMXBatchingManagerLogic.json';
import GMXYieldStrategyDeployment from '../../../deployments/gmx-vault/arbgoerli/GMXYieldStrategy.json';
import GMXYieldStrategyLogicDeployment from '../../../deployments/gmx-vault/arbgoerli/GMXYieldStrategyLogic.json';

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
