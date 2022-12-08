import JITManager1Deployment from '../../../deployments/delta-neutral-gmx-jit/arbmain/JITManager1.json';
import JITManager2Deployment from '../../../deployments/delta-neutral-gmx-jit/arbmain/JITManager2.json';
import DnGmxRouterDeployment from '../../../deployments/delta-neutral-gmx-jit/arbmain/DnGmxRouter.json';
import DnGmxRouterLogicDeployment from '../../../deployments/delta-neutral-gmx-jit/arbmain/DnGmxRouterLogic.json';

import { DnGmxJITDeployments } from './interface';

export function getDeployments(): DnGmxJITDeployments {
  return {
    JITManager1Deployment,
    JITManager2Deployment,
    DnGmxRouterDeployment,
    DnGmxRouterLogicDeployment,
  };
}
