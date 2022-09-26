import { ContractDeployment } from '../../common';

export interface TricryptoVaultDeployments {
  CollateralTokenDeployment: ContractDeployment;
  LogicLibraryDeployment: ContractDeployment;
  SwapManagerLibraryDeployment: ContractDeployment;
  VaultPeripheryDeployment: ContractDeployment;
  CurveYieldStrategyDeployment: ContractDeployment;
  CurveYieldStrategyLogicDeployment: ContractDeployment;
}
