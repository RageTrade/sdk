import { ContractRunner } from 'ethers';
import {
  CurveYieldStrategy__factory,
  ERC20PresetMinterPauser__factory,
  Logic__factory,
  SwapManager__factory,
  VaultPeriphery__factory,
} from '../../../typechain';
import { newError } from '../../../utils/loggers';
import {
  getChainIdFromRunner,
  getNetworkName,
  NetworkName,
} from '../../common';
import { getProvider } from '../../providers';
import * as arbgoerli from './arbgoerli';
import * as arbmain from './arbmain';

export function getDeployments(networkNameOrChainId: NetworkName | number) {
  const networkName = getNetworkName(networkNameOrChainId);
  switch (networkName) {
    case 'arbmain':
    case 'mainnetfork':
      return arbmain.getDeployments();
    case 'arbgoerli':
      return arbgoerli.getDeployments();
    default:
      throw newError(
        `tricrypto vault deployment not present for ${networkName} network`
      );
  }
}

export async function getContracts(runner: ContractRunner) {
  const chainId = await getChainIdFromRunner(runner);
  return getContractsSync(chainId, runner);
}

export function getContractsSync(
  networkNameOrChainId: NetworkName | number,
  runner?: ContractRunner
) {
  const deployments = getDeployments(getNetworkName(networkNameOrChainId));
  if (runner === undefined) {
    runner = getProvider(networkNameOrChainId);
  }
  return {
    collateralToken: ERC20PresetMinterPauser__factory.connect(
      deployments.CollateralTokenDeployment.address,
      runner
    ),
    logicLibrary: Logic__factory.connect(
      deployments.LogicLibraryDeployment.address,
      runner
    ),
    swapManagerLibrary: SwapManager__factory.connect(
      deployments.SwapManagerLibraryDeployment.address,
      runner
    ),
    vaultPeriphery: VaultPeriphery__factory.connect(
      deployments.VaultPeripheryDeployment.address,
      runner
    ),
    curveYieldStrategy: CurveYieldStrategy__factory.connect(
      deployments.CurveYieldStrategyDeployment.address,
      runner
    ),
    curveYieldStrategyLogic: CurveYieldStrategy__factory.connect(
      deployments.CurveYieldStrategyLogicDeployment.address,
      runner
    ),
  };
}
