import CollateralTokenDeployment from '@ragetrade/tricrypto-vault/deployments/arbgoerli/CollateralToken.json';
import CurveYieldStrategyDeployment from '@ragetrade/tricrypto-vault/deployments/arbgoerli/CurveYieldStrategy.json';
import CurveYieldStrategyLogicDeployment from '@ragetrade/tricrypto-vault/deployments/arbgoerli/CurveYieldStrategyLogic.json';
import LogicLibraryDeployment from '@ragetrade/tricrypto-vault/deployments/arbgoerli/LogicLibrary.json';
import SwapManagerLibraryDeployment from '@ragetrade/tricrypto-vault/deployments/arbgoerli/SwapManagerLibrary.json';
import VaultPeripheryDeployment from '@ragetrade/tricrypto-vault/deployments/arbgoerli/VaultPeriphery.json';

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
