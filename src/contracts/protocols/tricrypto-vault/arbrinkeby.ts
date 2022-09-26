import CollateralTokenDeployment from '@ragetrade/tricrypto-vault/deployments/arbtest/CollateralToken.json';
import CurveYieldStrategyDeployment from '@ragetrade/tricrypto-vault/deployments/arbtest/CurveYieldStrategy.json';
import CurveYieldStrategyLogicDeployment from '@ragetrade/tricrypto-vault/deployments/arbtest/CurveYieldStrategyLogic.json';
import LogicLibraryDeployment from '@ragetrade/tricrypto-vault/deployments/arbtest/LogicLibrary.json';
import SwapManagerLibraryDeployment from '@ragetrade/tricrypto-vault/deployments/arbtest/SwapManagerLibrary.json';
import VaultPeripheryDeployment from '@ragetrade/tricrypto-vault/deployments/arbtest/VaultPeriphery.json';

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
