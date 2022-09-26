import AccountLibraryDeployment from '@ragetrade/core/deployments/arbtest/AccountLibrary.json';
import ClearingHouseDeployment from '@ragetrade/core/deployments/arbtest/ClearingHouse.json';
import ClearingHouseLensDeployment from '@ragetrade/core/deployments/arbtest/ClearingHouseLens.json';
import ClearingHouseLogicDeployment from '@ragetrade/core/deployments/arbtest/ClearingHouseLogic.json';
import ETH_IndexOracleDeployment from '@ragetrade/core/deployments/arbtest/ETH-IndexOracle.json';
import ETH_vPoolDeployment from '@ragetrade/core/deployments/arbtest/ETH-vPool.json';
import ETH_vPoolWrapperDeployment from '@ragetrade/core/deployments/arbtest/ETH-vPoolWrapper.json';
import ETH_vTokenDeployment from '@ragetrade/core/deployments/arbtest/ETH-vToken.json';
import InsuranceFundDeployment from '@ragetrade/core/deployments/arbtest/InsuranceFund.json';
import InsuranceFundLogicDeployment from '@ragetrade/core/deployments/arbtest/InsuranceFundLogic.json';
import ProxyAdminDeployment from '@ragetrade/core/deployments/arbtest/ProxyAdmin.json';
import RageTradeFactoryDeployment from '@ragetrade/core/deployments/arbtest/RageTradeFactory.json';
import SettlementTokenDeployment from '@ragetrade/core/deployments/arbtest/SettlementToken.json';
import SettlementTokenOracleDeployment from '@ragetrade/core/deployments/arbtest/SettlementTokenOracle.json';
import SwapSimulatorDeployment from '@ragetrade/core/deployments/arbtest/SwapSimulator.json';
import TimelockControllerDeployment from '@ragetrade/core/deployments/arbtest/TimelockController.json';
import VPoolWrapperLogicDeployment from '@ragetrade/core/deployments/arbtest/VPoolWrapperLogic.json';
import VQuoteDeployment from '@ragetrade/core/deployments/arbtest/VQuote.json';

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
