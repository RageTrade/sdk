import AccountLibraryDeployment from '../../../deployments/core/arbtest/AccountLibrary.json';
import ClearingHouseDeployment from '../../../deployments/core/arbtest/ClearingHouse.json';
import ClearingHouseLensDeployment from '../../../deployments/core/arbtest/ClearingHouseLens.json';
import ClearingHouseLogicDeployment from '../../../deployments/core/arbtest/ClearingHouseLogic.json';
import ETH_IndexOracleDeployment from '../../../deployments/core/arbtest/ETH-IndexOracle.json';
import ETH_vPoolDeployment from '../../../deployments/core/arbtest/ETH-vPool.json';
import ETH_vPoolWrapperDeployment from '../../../deployments/core/arbtest/ETH-vPoolWrapper.json';
import ETH_vTokenDeployment from '../../../deployments/core/arbtest/ETH-vToken.json';
import InsuranceFundDeployment from '../../../deployments/core/arbtest/InsuranceFund.json';
import InsuranceFundLogicDeployment from '../../../deployments/core/arbtest/InsuranceFundLogic.json';
import ProxyAdminDeployment from '../../../deployments/core/arbtest/ProxyAdmin.json';
import RageTradeFactoryDeployment from '../../../deployments/core/arbtest/RageTradeFactory.json';
import SettlementTokenDeployment from '../../../deployments/core/arbtest/SettlementToken.json';
import SettlementTokenOracleDeployment from '../../../deployments/core/arbtest/SettlementTokenOracle.json';
import SwapSimulatorDeployment from '../../../deployments/core/arbtest/SwapSimulator.json';
import TimelockControllerDeployment from '../../../deployments/core/arbtest/TimelockController.json';
import VPoolWrapperLogicDeployment from '../../../deployments/core/arbtest/VPoolWrapperLogic.json';
import VQuoteDeployment from '../../../deployments/core/arbtest/VQuote.json';

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
