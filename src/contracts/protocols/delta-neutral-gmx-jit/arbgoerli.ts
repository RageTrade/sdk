import DnGmxJITDeployment from '../../../deployments/delta-neutral-gmx-jit/arbgoerli/DnGmxJIT.json';
import DnGmxRouterDeployment from '../../../deployments/delta-neutral-gmx-jit/arbgoerli/DnGmxRouter.json';

import { DnGmxJITDeployments } from './interface';

export function getDeployments(): DnGmxJITDeployments {
  return {
    DnGmxJITDeployment,
    DnGmxRouterDeployment,
  };
}
