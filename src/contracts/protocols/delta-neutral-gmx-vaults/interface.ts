import { ContractDeployment } from '../../common';

export interface DnGmxVaultDeployments {
  DnGmxBatchingManagerDeployment: ContractDeployment;
  DnGmxJuniorVaultDeployment: ContractDeployment;
  DnGmxSeniorVaultDeployment: ContractDeployment;
  WithdrawPeripheryDeployment: ContractDeployment;
  BatchingManagerBypassDeployment: ContractDeployment;
  DepositPeripheryDeployment: ContractDeployment;
}
