import CollateralTokenDeployment from '../../../deployments/tricrypto-vault/arbmain/CollateralToken.json';
import CurveYieldStrategyDeployment from '../../../deployments/tricrypto-vault/arbmain/CurveYieldStrategy.json';
import CurveYieldStrategyLogicDeployment from '../../../deployments/tricrypto-vault/arbmain/CurveYieldStrategyLogic.json';
import LogicLibraryDeployment from '../../../deployments/tricrypto-vault/arbmain/LogicLibrary.json';
import SwapManagerLibraryDeployment from '../../../deployments/tricrypto-vault/arbmain/SwapManagerLibrary.json';
import VaultPeripheryDeployment from '../../../deployments/tricrypto-vault/arbmain/VaultPeriphery.json';

import { TricryptoVaultDeployments } from './interface';

export function getDeployments(): TricryptoVaultDeployments {
  return {
    CollateralTokenDeployment,
    LogicLibraryDeployment,
    SwapManagerLibraryDeployment,
    VaultPeripheryDeployment,
    CurveYieldStrategyDeployment,
    CurveYieldStrategyLogicDeployment,
  };
}
