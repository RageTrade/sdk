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
  getChainIdFromProvider,
  getNetworkName,
  NetworkName,
  SignerOrProvider,
} from '../../common';
import { getProvider } from '../../providers';
import * as arbmain from './arbmain';
import * as mainnetfork from './mainnetfork';
import * as arbgoerli from './arbgoerli';
import { DnGmxVaultDeployments } from './interface';

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

export async function getContracts(signerOrProvider: SignerOrProvider) {
  const chainId = await getChainIdFromProvider(signerOrProvider);
  return getContractsSync(chainId, signerOrProvider);
}

export function getContractsSync(
  networkNameOrChainId: NetworkName | number,
  signerOrProvider?: SignerOrProvider
) {
  const deployments = getDeployments(getNetworkName(networkNameOrChainId));
  if (signerOrProvider === undefined) {
    signerOrProvider = getProvider(networkNameOrChainId);
  }
  return {
    dnGmxSeniorVault: DnGmxSeniorVault__factory.connect(
      deployments.DnGmxSeniorVaultDeployment.address,
      signerOrProvider
    ),
    dnGmxSeniorVaultLogic: DnGmxSeniorVault__factory.connect(
      deployments.DnGmxSeniorVaultLogicDeployment.address,
      signerOrProvider
    ),
    dnGmxJuniorVault: DnGmxJuniorVault__factory.connect(
      deployments.DnGmxJuniorVaultDeployment.address,
      signerOrProvider
    ),
    dnGmxJuniorVaultLogic: DnGmxJuniorVault__factory.connect(
      deployments.DnGmxJuniorVaultLogicDeployment.address,
      signerOrProvider
    ),
    dnGmxBatchingManager: DnGmxBatchingManager__factory.connect(
      deployments.DnGmxBatchingManagerDeployment.address,
      signerOrProvider
    ),
    dnGmxBatchingManagerLogic: DnGmxBatchingManager__factory.connect(
      deployments.DnGmxBatchingManagerLogicDeployment.address,
      signerOrProvider
    ),
    dnGmxBatchingManagerGlp: DnGmxBatchingManagerGlp__factory.connect(
      deployments.DnGmxBatchingManagerGlpDeployment.address,
      signerOrProvider
    ),
    dnGmxBatchingManagerGlpLogic: DnGmxBatchingManagerGlp__factory.connect(
      deployments.DnGmxBatchingManagerGlpLogicDeployment.address,
      signerOrProvider
    ),
    dnGmxTraderHedgeStrategy: DnGmxTraderHedgeStrategy__factory.connect(
      deployments.DnGmxTraderHedgeStrategyDeployment.address,
      signerOrProvider
    ),
    withdrawPeriphery: WithdrawPeriphery__factory.connect(
      deployments.WithdrawPeripheryDeployment.address,
      signerOrProvider
    ),
    batchingManagerBypass: BatchingManagerBypass__factory.connect(
      deployments.BatchingManagerBypassDeployment.address,
      signerOrProvider
    ),
    depositPeriphery: DepositPeriphery__factory.connect(
      deployments.DepositPeripheryDeployment.address,
      signerOrProvider
    ),
    proxyAdmin: ProxyAdmin__factory.connect(
      deployments.ProxyAdmin.address,
      signerOrProvider
    ),
  };
}
