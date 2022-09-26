import CollateralTokenDeployment from '@ragetrade/tricrypto-vault/deployments/arbmain/CollateralToken.json';
import CurveYieldStrategyDeployment from '@ragetrade/tricrypto-vault/deployments/arbmain/CurveYieldStrategy.json';
import CurveYieldStrategyLogicDeployment from '@ragetrade/tricrypto-vault/deployments/arbmain/CurveYieldStrategyLogic.json';
import LogicLibraryDeployment from '@ragetrade/tricrypto-vault/deployments/arbmain/LogicLibrary.json';
import SwapManagerLibraryDeployment from '@ragetrade/tricrypto-vault/deployments/arbmain/SwapManagerLibrary.json';
import VaultPeripheryDeployment from '@ragetrade/tricrypto-vault/deployments/arbmain/VaultPeriphery.json';

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
