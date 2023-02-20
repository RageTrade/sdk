import { ContractDeployment } from '../../common';

export interface DnGmxVaultDeployments {
  BatchingManagerBypassDeployment: ContractDeployment;
  DepositPeripheryDeployment: ContractDeployment;
  DnGmxBatchingManagerDeployment: ContractDeployment;
  DnGmxBatchingManagerLogicDeployment: ContractDeployment;
  DnGmxBatchingManagerGlpDeployment: ContractDeployment;
  DnGmxBatchingManagerGlpLogicDeployment: ContractDeployment;
  DnGmxJuniorVaultDeployment: ContractDeployment;
  DnGmxJuniorVaultLogicDeployment: ContractDeployment;
  DnGmxJuniorVaultManagerLibraryDeployment: ContractDeployment;
  DnGmxSeniorVaultDeployment: ContractDeployment;
  DnGmxSeniorVaultLogicDeployment: ContractDeployment;
  DnGmxTraderHedgeStrategyDeployment: ContractDeployment;
  DnGmxTraderHedgeStrategyLogicDeployment: ContractDeployment;
  WithdrawPeripheryDeployment: ContractDeployment;
  ProxyAdmin: ContractDeployment;
}
