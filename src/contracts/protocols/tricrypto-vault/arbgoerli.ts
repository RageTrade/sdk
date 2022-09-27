import CollateralTokenDeployment from '../../../deployments/tricrypto-vault/arbgoerli/CollateralToken.json';
import CurveYieldStrategyDeployment from '../../../deployments/tricrypto-vault/arbgoerli/CurveYieldStrategy.json';
import CurveYieldStrategyLogicDeployment from '../../../deployments/tricrypto-vault/arbgoerli/CurveYieldStrategyLogic.json';
import LogicLibraryDeployment from '../../../deployments/tricrypto-vault/arbgoerli/LogicLibrary.json';
import SwapManagerLibraryDeployment from '../../../deployments/tricrypto-vault/arbgoerli/SwapManagerLibrary.json';
import VaultPeripheryDeployment from '../../../deployments/tricrypto-vault/arbgoerli/VaultPeriphery.json';

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
