import {
  CurveYieldStrategy__factory,
  ERC20PresetMinterPauser__factory,
  Logic__factory,
  SwapManager__factory,
  VaultPeriphery__factory,
} from '../../../typechain';
import { newError } from '../../../utils/loggers';
import {
  getChainIdFromProvider,
  getNetworkName,
  NetworkName,
  SignerOrProvider,
} from '../../common';
import { getProvider } from '../../providers';
import * as arbgoerli from './arbgoerli';
import * as arbmain from './arbmain';
import * as arbrinkeby from './arbrinkeby';

export function getDeployments(networkNameOrChainId: NetworkName | number) {
  const networkName = getNetworkName(networkNameOrChainId);
  switch (networkName) {
    case 'arbmain':
      return arbmain.getDeployments();
    case 'arbrinkeby':
    case 'arbtest':
      return arbrinkeby.getDeployments();
    case 'arbgoerli':
      return arbgoerli.getDeployments();
    default:
      throw newError(
        `tricrypto vault deployment not present for ${networkName} network`
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
    collateralToken: ERC20PresetMinterPauser__factory.connect(
      deployments.CollateralTokenDeployment.address,
      signerOrProvider
    ),
    logicLibrary: Logic__factory.connect(
      deployments.LogicLibraryDeployment.address,
      signerOrProvider
    ),
    swapManagerLibrary: SwapManager__factory.connect(
      deployments.SwapManagerLibraryDeployment.address,
      signerOrProvider
    ),
    vaultPeriphery: VaultPeriphery__factory.connect(
      deployments.VaultPeripheryDeployment.address,
      signerOrProvider
    ),
    curveYieldStrategy: CurveYieldStrategy__factory.connect(
      deployments.CurveYieldStrategyDeployment.address,
      signerOrProvider
    ),
    curveYieldStrategyLogic: CurveYieldStrategy__factory.connect(
      deployments.CurveYieldStrategyLogicDeployment.address,
      signerOrProvider
    ),
  };
}
