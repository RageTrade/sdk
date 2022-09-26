import { ContractDeployment } from '../../common';

export interface CoreDeployments {
  AccountLibraryDeployment: ContractDeployment;
  ClearingHouseDeployment: ContractDeployment;
  ClearingHouseLensDeployment: ContractDeployment;
  ClearingHouseLogicDeployment: ContractDeployment;
  InsuranceFundDeployment: ContractDeployment;
  InsuranceFundLogicDeployment: ContractDeployment;
  ProxyAdminDeployment: ContractDeployment;
  TimelockControllerDeployment: ContractDeployment;
  RageTradeFactoryDeployment: ContractDeployment;
  SettlementTokenOracleDeployment: ContractDeployment;
  SettlementTokenDeployment: ContractDeployment;
  VQuoteDeployment: ContractDeployment;
  VPoolWrapperLogicDeployment: ContractDeployment;
  SwapSimulatorDeployment: ContractDeployment;
  ETH_vTokenDeployment: ContractDeployment;
  ETH_vPoolDeployment: ContractDeployment;
  ETH_vPoolWrapperDeployment: ContractDeployment;
  ETH_IndexOracleDeployment: ContractDeployment;
}
