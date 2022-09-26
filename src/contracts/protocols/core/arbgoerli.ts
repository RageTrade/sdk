import AccountLibraryDeployment from '@ragetrade/core/deployments/arbgoerli/AccountLibrary.json';
import ClearingHouseDeployment from '@ragetrade/core/deployments/arbgoerli/ClearingHouse.json';
import ClearingHouseLensDeployment from '@ragetrade/core/deployments/arbgoerli/ClearingHouseLens.json';
import ClearingHouseLogicDeployment from '@ragetrade/core/deployments/arbgoerli/ClearingHouseLogic.json';
import ETH_IndexOracleDeployment from '@ragetrade/core/deployments/arbgoerli/ETH-IndexOracle.json';
import ETH_vPoolDeployment from '@ragetrade/core/deployments/arbgoerli/ETH-vPool.json';
import ETH_vPoolWrapperDeployment from '@ragetrade/core/deployments/arbgoerli/ETH-vPoolWrapper.json';
import ETH_vTokenDeployment from '@ragetrade/core/deployments/arbgoerli/ETH-vToken.json';
import InsuranceFundDeployment from '@ragetrade/core/deployments/arbgoerli/InsuranceFund.json';
import InsuranceFundLogicDeployment from '@ragetrade/core/deployments/arbgoerli/InsuranceFundLogic.json';
import ProxyAdminDeployment from '@ragetrade/core/deployments/arbgoerli/ProxyAdmin.json';
import RageTradeFactoryDeployment from '@ragetrade/core/deployments/arbgoerli/RageTradeFactory.json';
import SettlementTokenDeployment from '@ragetrade/core/deployments/arbgoerli/SettlementToken.json';
import SettlementTokenOracleDeployment from '@ragetrade/core/deployments/arbgoerli/SettlementTokenOracle.json';
import SwapSimulatorDeployment from '@ragetrade/core/deployments/arbgoerli/SwapSimulator.json';
import TimelockControllerDeployment from '@ragetrade/core/deployments/arbgoerli/TimelockController.json';
import VPoolWrapperLogicDeployment from '@ragetrade/core/deployments/arbgoerli/VPoolWrapperLogic.json';
import VQuoteDeployment from '@ragetrade/core/deployments/arbgoerli/VQuote.json';

import { CoreDeployments } from './interface';

export function getDeployments(): CoreDeployments {
  return {
    AccountLibraryDeployment,
    ClearingHouseDeployment,
    ClearingHouseLensDeployment,
    ClearingHouseLogicDeployment,
    InsuranceFundDeployment,
    InsuranceFundLogicDeployment,
    ProxyAdminDeployment,
    RageTradeFactoryDeployment,
    SettlementTokenDeployment,
    SettlementTokenOracleDeployment,
    SwapSimulatorDeployment,
    TimelockControllerDeployment,
    VPoolWrapperLogicDeployment,
    VQuoteDeployment,
    ETH_vTokenDeployment,
    ETH_vPoolDeployment,
    ETH_vPoolWrapperDeployment,
    ETH_IndexOracleDeployment,
  };
}
