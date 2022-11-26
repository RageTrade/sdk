import DnGmxJITDeployment from '../../../deployments/delta-neutral-gmx-jit/arbmain/DnGmxJIT.json';
import DnGmxRouterDeployment from '../../../deployments/delta-neutral-gmx-jit/arbmain/DnGmxRouter.json';

import { DnGmxJITDeployments } from './interface';

export function getDeployments(): DnGmxJITDeployments {
  return {
    DnGmxJITDeployment,
    DnGmxRouterDeployment,
  };
}
