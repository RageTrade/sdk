import GlpStakingManagerDeployment from '../../../deployments/gmx-vault/arbtest/GlpStakingManager.json';
import GlpStakingManagerLogicDeployment from '../../../deployments/gmx-vault/arbtest/GlpStakingManagerLogic.json';
import GMXBatchingManagerDeployment from '../../../deployments/gmx-vault/arbtest/GMXBatchingManager.json';
import GMXBatchingManagerLogicDeployment from '../../../deployments/gmx-vault/arbtest/GMXBatchingManagerLogic.json';
import GMXYieldStrategyDeployment from '../../../deployments/gmx-vault/arbtest/GMXYieldStrategy.json';
import GMXYieldStrategyLogicDeployment from '../../../deployments/gmx-vault/arbtest/GMXYieldStrategyLogic.json';

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
