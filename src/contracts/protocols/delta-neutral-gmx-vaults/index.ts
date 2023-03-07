import {
  DnGmxBatchingManager__factory,
  DnGmxJuniorVault__factory,
  DnGmxSeniorVault__factory,
  WithdrawPeriphery__factory,
  BatchingManagerBypass__factory,
  DepositPeriphery__factory,
  ProxyAdmin__factory,
  DnGmxBatchingManagerGlp__factory,
  DnGmxTraderHedgeStrategy__factory,
} from '../../../typechain';
import { newError } from '../../../utils/loggers';
import {
  getChainIdFromRunner,
  getNetworkName,
  NetworkName,
} from '../../common';
import { getProvider } from '../../providers';
import * as arbmain from './arbmain';
import * as mainnetfork from './mainnetfork';
import * as arbgoerli from './arbgoerli';
import { DnGmxVaultDeployments } from './interface';
import { ContractRunner } from 'ethers';

export function getDeployments(
  networkNameOrChainId: NetworkName | number
): DnGmxVaultDeployments {
  const networkName = getNetworkName(networkNameOrChainId);
  switch (networkName) {
    case 'arbmain':
      return arbmain.getDeployments();
    case 'mainnetfork':
      return mainnetfork.getDeployments();
    case 'arbgoerli':
      return arbgoerli.getDeployments();
    default:
      throw newError(
        `delta-neutral-gmx-vaults deployment not present for ${networkName} network`
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
    dnGmxSeniorVault: DnGmxSeniorVault__factory.connect(
      deployments.DnGmxSeniorVaultDeployment.address,
      runner
    ),
    dnGmxSeniorVaultLogic: DnGmxSeniorVault__factory.connect(
      deployments.DnGmxSeniorVaultLogicDeployment.address,
      runner
    ),
    dnGmxJuniorVault: DnGmxJuniorVault__factory.connect(
      deployments.DnGmxJuniorVaultDeployment.address,
      runner
    ),
    dnGmxJuniorVaultLogic: DnGmxJuniorVault__factory.connect(
      deployments.DnGmxJuniorVaultLogicDeployment.address,
      runner
    ),
    dnGmxBatchingManager: DnGmxBatchingManager__factory.connect(
      deployments.DnGmxBatchingManagerDeployment.address,
      runner
    ),
    dnGmxBatchingManagerGlp: DnGmxBatchingManagerGlp__factory.connect(
      deployments.DnGmxBatchingManagerGlpDeployment.address,
      runner
    ),
    dnGmxBatchingManagerLogic: DnGmxBatchingManager__factory.connect(
      deployments.DnGmxBatchingManagerLogicDeployment.address,
      runner
    ),
    dnGmxTraderHedgeStrategy: DnGmxTraderHedgeStrategy__factory.connect(
      deployments.DnGmxTraderHedgeStrategyDeployment.address,
      runner
    ),
    withdrawPeriphery: WithdrawPeriphery__factory.connect(
      deployments.WithdrawPeripheryDeployment.address,
      runner
    ),
    batchingManagerBypass: BatchingManagerBypass__factory.connect(
      deployments.BatchingManagerBypassDeployment.address,
      runner
    ),
    depositPeriphery: DepositPeriphery__factory.connect(
      deployments.DepositPeripheryDeployment.address,
      runner
    ),
    proxyAdmin: ProxyAdmin__factory.connect(
      deployments.ProxyAdmin.address,
      runner
    ),
  };
}
