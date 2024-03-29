import BatchingManagerBypassDeployment from '../../../deployments/delta-neutral-gmx-vaults/arbgoerli/BatchingManagerBypass.json';
import DepositPeripheryDeployment from '../../../deployments/delta-neutral-gmx-vaults/arbgoerli/DepositPeriphery.json';
import DnGmxBatchingManagerDeployment from '../../../deployments/delta-neutral-gmx-vaults/arbgoerli/DnGmxBatchingManager.json';
import DnGmxBatchingManagerLogicDeployment from '../../../deployments/delta-neutral-gmx-vaults/arbgoerli/DnGmxBatchingManagerLogic.json';
import DnGmxJuniorVaultDeployment from '../../../deployments/delta-neutral-gmx-vaults/arbgoerli/DnGmxJuniorVault.json';
import DnGmxJuniorVaultLogicDeployment from '../../../deployments/delta-neutral-gmx-vaults/arbgoerli/DnGmxJuniorVaultLogic.json';
import DnGmxJuniorVaultManagerLibraryDeployment from '../../../deployments/delta-neutral-gmx-vaults/arbgoerli/DnGmxJuniorVaultManagerLibrary.json';
import DnGmxSeniorVaultDeployment from '../../../deployments/delta-neutral-gmx-vaults/arbgoerli/DnGmxSeniorVault.json';
import DnGmxSeniorVaultLogicDeployment from '../../../deployments/delta-neutral-gmx-vaults/arbgoerli/DnGmxSeniorVaultLogic.json';
import WithdrawPeripheryDeployment from '../../../deployments/delta-neutral-gmx-vaults/arbgoerli/WithdrawPeriphery.json';
import ProxyAdmin from '../../../deployments/delta-neutral-gmx-vaults/arbgoerli/ProxyAdmin.json';

import { DnGmxVaultDeployments } from './interface';
import { ethers } from 'ethers';

export function getDeployments(): DnGmxVaultDeployments {
  return {
    BatchingManagerBypassDeployment,
    DepositPeripheryDeployment,
    DnGmxBatchingManagerDeployment,
    DnGmxBatchingManagerLogicDeployment,
    DnGmxBatchingManagerGlpDeployment: _default(),
    DnGmxBatchingManagerGlpLogicDeployment: _default(),
    DnGmxJuniorVaultDeployment,
    DnGmxJuniorVaultLogicDeployment,
    DnGmxJuniorVaultManagerLibraryDeployment,
    QuoterLibraryDeployment: _default(),
    DnGmxSeniorVaultDeployment,
    DnGmxSeniorVaultLogicDeployment,
    DnGmxTraderHedgeStrategyDeployment: _default(),
    DnGmxTraderHedgeStrategyLogicDeployment: _default(),
    WithdrawPeripheryDeployment,
    ProxyAdmin,
  };
}

function _default() {
  return {
    address: ethers.constants.AddressZero,
  };
}
