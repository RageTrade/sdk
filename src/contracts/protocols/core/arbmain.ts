import AccountLibraryDeployment from '../../../deployments/core/arbmain/AccountLibrary.json';
import ClearingHouseDeployment from '../../../deployments/core/arbmain/ClearingHouse.json';
import ClearingHouseLensDeployment from '../../../deployments/core/arbmain/ClearingHouseLens.json';
import ClearingHouseLogicDeployment from '../../../deployments/core/arbmain/ClearingHouseLogic.json';
import ETH_IndexOracleDeployment from '../../../deployments/core/arbmain/ETH-IndexOracle.json';
import ETH_vPoolDeployment from '../../../deployments/core/arbmain/ETH-vPool.json';
import ETH_vPoolWrapperDeployment from '../../../deployments/core/arbmain/ETH-vPoolWrapper.json';
import ETH_vTokenDeployment from '../../../deployments/core/arbmain/ETH-vToken.json';
import InsuranceFundDeployment from '../../../deployments/core/arbmain/InsuranceFund.json';
import InsuranceFundLogicDeployment from '../../../deployments/core/arbmain/InsuranceFundLogic.json';
import ProxyAdminDeployment from '../../../deployments/core/arbmain/ProxyAdmin.json';
import RageTradeFactoryDeployment from '../../../deployments/core/arbmain/RageTradeFactory.json';
import SettlementTokenDeployment from '../../../deployments/core/arbmain/SettlementToken.json';
import SettlementTokenOracleDeployment from '../../../deployments/core/arbmain/SettlementTokenOracle.json';
import SwapSimulatorDeployment from '../../../deployments/core/arbmain/SwapSimulator.json';
import TimelockControllerDeployment from '../../../deployments/core/arbmain/TimelockController.json';
import VPoolWrapperLogicDeployment from '../../../deployments/core/arbmain/VPoolWrapperLogic.json';
import VQuoteDeployment from '../../../deployments/core/arbmain/VQuote.json';

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
