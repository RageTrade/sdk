import AccountLibraryDeployment from '@ragetrade/core/deployments/arbmain/AccountLibrary.json';
import ClearingHouseDeployment from '@ragetrade/core/deployments/arbmain/ClearingHouse.json';
import ClearingHouseLensDeployment from '@ragetrade/core/deployments/arbmain/ClearingHouseLens.json';
import ClearingHouseLogicDeployment from '@ragetrade/core/deployments/arbmain/ClearingHouseLogic.json';
import ETH_IndexOracleDeployment from '@ragetrade/core/deployments/arbmain/ETH-IndexOracle.json';
import ETH_vPoolDeployment from '@ragetrade/core/deployments/arbmain/ETH-vPool.json';
import ETH_vPoolWrapperDeployment from '@ragetrade/core/deployments/arbmain/ETH-vPoolWrapper.json';
import ETH_vTokenDeployment from '@ragetrade/core/deployments/arbmain/ETH-vToken.json';
import InsuranceFundDeployment from '@ragetrade/core/deployments/arbmain/InsuranceFund.json';
import InsuranceFundLogicDeployment from '@ragetrade/core/deployments/arbmain/InsuranceFundLogic.json';
import ProxyAdminDeployment from '@ragetrade/core/deployments/arbmain/ProxyAdmin.json';
import RageTradeFactoryDeployment from '@ragetrade/core/deployments/arbmain/RageTradeFactory.json';
import SettlementTokenDeployment from '@ragetrade/core/deployments/arbmain/SettlementToken.json';
import SettlementTokenOracleDeployment from '@ragetrade/core/deployments/arbmain/SettlementTokenOracle.json';
import SwapSimulatorDeployment from '@ragetrade/core/deployments/arbmain/SwapSimulator.json';
import TimelockControllerDeployment from '@ragetrade/core/deployments/arbmain/TimelockController.json';
import VPoolWrapperLogicDeployment from '@ragetrade/core/deployments/arbmain/VPoolWrapperLogic.json';
import VQuoteDeployment from '@ragetrade/core/deployments/arbmain/VQuote.json';

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
