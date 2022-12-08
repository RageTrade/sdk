import { ContractDeployment } from '../../common';

export interface DnGmxVaultDeployments {
  BatchingManagerBypassDeployment: ContractDeployment;
  DepositPeripheryDeployment: ContractDeployment;
  DnGmxBatchingManagerDeployment: ContractDeployment;
  DnGmxBatchingManagerLogicDeployment: ContractDeployment;
  DnGmxJuniorVaultDeployment: ContractDeployment;
  DnGmxJuniorVaultLogicDeployment: ContractDeployment;
  DnGmxJuniorVaultManagerLibraryDeployment: ContractDeployment;
  DnGmxSeniorVaultDeployment: ContractDeployment;
  DnGmxSeniorVaultLogicDeployment: ContractDeployment;
  WithdrawPeripheryDeployment: ContractDeployment;
  ProxyAdmin: ContractDeployment;
}
