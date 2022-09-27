import AccountLibraryDeployment from '../../../deployments/core/arbgoerli/AccountLibrary.json';
import ClearingHouseDeployment from '../../../deployments/core/arbgoerli/ClearingHouse.json';
import ClearingHouseLensDeployment from '../../../deployments/core/arbgoerli/ClearingHouseLens.json';
import ClearingHouseLogicDeployment from '../../../deployments/core/arbgoerli/ClearingHouseLogic.json';
import ETH_IndexOracleDeployment from '../../../deployments/core/arbgoerli/ETH-IndexOracle.json';
import ETH_vPoolDeployment from '../../../deployments/core/arbgoerli/ETH-vPool.json';
import ETH_vPoolWrapperDeployment from '../../../deployments/core/arbgoerli/ETH-vPoolWrapper.json';
import ETH_vTokenDeployment from '../../../deployments/core/arbgoerli/ETH-vToken.json';
import InsuranceFundDeployment from '../../../deployments/core/arbgoerli/InsuranceFund.json';
import InsuranceFundLogicDeployment from '../../../deployments/core/arbgoerli/InsuranceFundLogic.json';
import ProxyAdminDeployment from '../../../deployments/core/arbgoerli/ProxyAdmin.json';
import RageTradeFactoryDeployment from '../../../deployments/core/arbgoerli/RageTradeFactory.json';
import SettlementTokenDeployment from '../../../deployments/core/arbgoerli/SettlementToken.json';
import SettlementTokenOracleDeployment from '../../../deployments/core/arbgoerli/SettlementTokenOracle.json';
import SwapSimulatorDeployment from '../../../deployments/core/arbgoerli/SwapSimulator.json';
import TimelockControllerDeployment from '../../../deployments/core/arbgoerli/TimelockController.json';
import VPoolWrapperLogicDeployment from '../../../deployments/core/arbgoerli/VPoolWrapperLogic.json';
import VQuoteDeployment from '../../../deployments/core/arbgoerli/VQuote.json';

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
