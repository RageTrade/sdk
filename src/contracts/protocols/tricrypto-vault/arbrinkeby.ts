import CollateralTokenDeployment from '../../../deployments/tricrypto-vault/arbtest/CollateralToken.json';
import CurveYieldStrategyDeployment from '../../../deployments/tricrypto-vault/arbtest/CurveYieldStrategy.json';
import CurveYieldStrategyLogicDeployment from '../../../deployments/tricrypto-vault/arbtest/CurveYieldStrategyLogic.json';
import LogicLibraryDeployment from '../../../deployments/tricrypto-vault/arbtest/LogicLibrary.json';
import SwapManagerLibraryDeployment from '../../../deployments/tricrypto-vault/arbtest/SwapManagerLibrary.json';
import VaultPeripheryDeployment from '../../../deployments/tricrypto-vault/arbtest/VaultPeriphery.json';

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
