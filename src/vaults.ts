import { Provider } from '@ethersproject/abstract-provider';
import { Signer } from 'ethers';

import {
  ContractDeployment,
  getDeployment,
  getNetworkNameFromChainId,
  NetworkName,
} from './contracts';
import { IERC20Metadata__factory } from './typechain/core/factories/@openzeppelin/contracts/token/ERC20/extensions';
import {
  CurveYieldStrategy__factory,
  ICurveGauge__factory,
} from './typechain/vaults';

export const vaultMetaData = {
  name: '80-20 TriCrypto Strategy',
  assetName: 'TriCrypto Shares',
};

export interface VaultDeployments {
  CurveYieldStrategyDeployment: ContractDeployment;
  CurveGaugeDeployment: ContractDeployment;
  CurveTokenDeployment: ContractDeployment;
  CurveTriCryptoDeployment: ContractDeployment;
  USDCDeployment: ContractDeployment;
  USDTDeployment: ContractDeployment;
  WETHDeployment: ContractDeployment;
}

export async function getVaultContractsWithDeployments(
  signerOrProvider: Signer | Provider,
  deployments: VaultDeployments
) {
  return {
    curveYieldStrategy: CurveYieldStrategy__factory.connect(
      deployments.CurveYieldStrategyDeployment.address,
      signerOrProvider
    ),
    curveGauge: ICurveGauge__factory.connect(
      deployments.CurveGaugeDeployment.address,
      signerOrProvider
    ),
    curveToken: IERC20Metadata__factory.connect(
      deployments.CurveTokenDeployment.address,
      signerOrProvider
    ),
    curveTriCrypto: IERC20Metadata__factory.connect(
      deployments.CurveTriCryptoDeployment.address,
      signerOrProvider
    ),
    usdc: IERC20Metadata__factory.connect(
      deployments.USDCDeployment.address,
      signerOrProvider
    ),
    usdt: IERC20Metadata__factory.connect(
      deployments.USDTDeployment.address,
      signerOrProvider
    ),
    weth: IERC20Metadata__factory.connect(
      deployments.WETHDeployment.address,
      signerOrProvider
    ),
  };
}

export async function getVaultContracts(signerOrProvider: Signer | Provider) {
  const provider = Provider.isProvider(signerOrProvider)
    ? signerOrProvider
    : signerOrProvider.provider;
  if (provider === undefined) {
    throw new Error('provider is not present in getContracts signerOrProvider');
  }

  const network = await provider.getNetwork();
  return await getVaultContractsWithChainId(signerOrProvider, network.chainId);
}

export async function getVaultContractsWithChainId(
  signerOrProvider: Signer | Provider,
  chainId: number
) {
  const d = await getVaultDeployments(getNetworkNameFromChainId(chainId));
  return getVaultContractsWithDeployments(signerOrProvider, d);
}

export async function getVaultDeployments(
  network: NetworkName
): Promise<VaultDeployments> {
  const CurveYieldStrategyDeployment = await getDeployment(
    'vaults',
    network,
    'CurveYieldStrategy'
  );
  const CurveGaugeDeployment = await getDeployment(
    'vaults',
    network,
    'CurveGauge'
  );
  const CurveTokenDeployment = await getDeployment(
    'vaults',
    network,
    'CurveToken'
  );
  const CurveTriCryptoDeployment = await getDeployment(
    'vaults',
    network,
    'CurveTriCrypto'
  );
  const USDCDeployment = await getDeployment('vaults', network, 'USDC');
  const USDTDeployment = await getDeployment('vaults', network, 'USDT');
  const WETHDeployment = await getDeployment('vaults', network, 'WETH');
  return {
    CurveYieldStrategyDeployment,
    CurveGaugeDeployment,
    CurveTokenDeployment,
    CurveTriCryptoDeployment,
    USDCDeployment,
    USDTDeployment,
    WETHDeployment,
  };
}
