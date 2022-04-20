import { Signer } from 'ethers';

import { Provider } from '@ethersproject/abstract-provider';

import {
  ContractDeployment,
  getDeployment,
  getNetworkNameFromChainId,
  NetworkName,
} from './contracts';
import {
  CurveYieldStrategy__factory,
  ICurveGauge__factory,
  ICurveStableSwap__factory,
  IERC20Metadata__factory,
} from './typechain';

export const vaultMetaData = {
  name: '80-20 TriCrypto Strategy',
  assetName: 'TriCrypto Shares',
};

export interface VaultDeployments {
  CurveYieldStrategyDeployment: ContractDeployment;
  CurveGaugeDeployment: ContractDeployment;
  CurveTokenDeployment: ContractDeployment;
  CurveTriCryptoPoolDeployment: ContractDeployment;
  CurveTriCryptoLpTokenDeployment: ContractDeployment;
  WETHDeployment: ContractDeployment;
  WBTCDeployment: ContractDeployment;
  USDTDeployment: ContractDeployment;
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
    curveTriCryptoPool: ICurveStableSwap__factory.connect(
      deployments.CurveTriCryptoPoolDeployment.address,
      signerOrProvider
    ),
    curveTriCryptoLpToken: IERC20Metadata__factory.connect(
      deployments.CurveTriCryptoLpTokenDeployment.address,
      signerOrProvider
    ),
    usdc: IERC20Metadata__factory.connect(
      deployments.WBTCDeployment.address,
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
  return getVaultContractsWithChainId(signerOrProvider, network.chainId);
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
  const CurveTriCryptoPoolDeployment = await getDeployment(
    'vaults',
    network,
    'CurveTriCryptoPool'
  );
  const CurveTriCryptoLpTokenDeployment = await getDeployment(
    'vaults',
    network,
    'CurveTriCryptoLpToken'
  );
  const WETHDeployment = await getDeployment('vaults', network, 'WETH');
  const WBTCDeployment = await getDeployment('vaults', network, 'WBTC');
  const USDTDeployment = await getDeployment('vaults', network, 'USDT');
  return {
    CurveYieldStrategyDeployment,
    CurveGaugeDeployment,
    CurveTokenDeployment,
    CurveTriCryptoPoolDeployment,
    CurveTriCryptoLpTokenDeployment,
    WBTCDeployment,
    USDTDeployment,
    WETHDeployment,
  };
}
