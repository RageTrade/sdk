import { ContractDeployment } from '../../common';

export interface GmxVaultDeployments {
  GlpStakingManagerDeployment: ContractDeployment;
  GlpStakingManagerLogicDeployment: ContractDeployment;
  GMXBatchingManagerDeployment: ContractDeployment;
  GMXBatchingManagerLogicDeployment: ContractDeployment;
  GMXYieldStrategyDeployment: ContractDeployment;
  GMXYieldStrategyLogicDeployment: ContractDeployment;
}
