import { Signer } from 'ethers';

import { Provider } from '@ethersproject/abstract-provider';

import {
  ContractDeployment,
  getChainIdFromProvider,
  getDeployment,
  getNetworkNameFromChainId,
  NetworkName,
} from './common';
import {
  GlpStakingManager__factory,
  GMXBatchingManager__factory,
  GMXYieldStrategy__factory,
  IGlpManager__factory,
  IRewardRouterV2__factory,
  ISGLPExtended__factory,
  IVault__factory,
} from '../typechain/vaults';
import { IERC20Metadata__factory } from '../typechain';

export const gmxVaultMetaData = {
  name: '80-20 GLP Strategy',
  assetName: 'GLP Shares',
};

export interface GmxVaultDeployments {
  GlpStakingManagerDeployment: ContractDeployment;
  GlpStakingManagerLogicDeployment: ContractDeployment;
  GMXBatchingManagerDeployment: ContractDeployment;
  GMXBatchingManagerLogicDeployment: ContractDeployment;
  GMXYieldStrategyDeployment: ContractDeployment;
  GMXYieldStrategyLogicDeployment: ContractDeployment;
}

export interface GmxVaultExtraContracts {
  gmx: string;
  glp: string;
  sGLP: string;
  fsGLP: string;
  glpManager: string;
  rewardRouter: string;
  vault: string;
}

export function getContractAddresses(chainId: number): GmxVaultExtraContracts {
  switch (chainId) {
    case 42161: // arbmain
      return {
        gmx: '0xfc5A1A6EB076a2C7aD06eD22C90d7E710E35ad0a',
        glp: '0x4277f8F2c384827B5273592FF7CeBd9f2C1ac258',
        sGLP: '0x2F546AD4eDD93B956C8999Be404cdCAFde3E89AE',
        fsGLP: '0x1aDDD80E6039594eE970E5872D247bf0414C8903',
        glpManager: '0x321F653eED006AD1C29D174e17d96351BDe22649',
        rewardRouter: '0xA906F338CB21815cBc4Bc87ace9e68c87eF8d8F1',
        vault: '0x489ee077994B6658eAfA855C308275EAd8097C4A',
      };
    case 421611: // arbtest
      return {
        gmx: '0x35601e6181887bd6Edc6261be5C8fc9dA50679F6',
        glp: '0xb4f81Fa74e06b5f762A104e47276BA9b2929cb27',
        sGLP: '0xfa14956e27D55427f7E267313D1E12d2217747e6',
        fsGLP: '0x98deA01800071212da93a6e76bb6De012c3a483D',
        glpManager: '0xD875d99E09118d2Be80579b9d23E83469077b498',
        rewardRouter: '0xE4180809231B554423b28EfB8c13819fe5b2c930',
        vault: '0xBc9BC47A7aB63db1E0030dC7B60DDcDe29CF4Ffb',
      };
    default:
      throw new Error(
        `The token addresses are not present in sdk for chainId ${chainId}.`
      );
  }
}

export async function getGmxVaultContractsWithDeployments(
  signerOrProvider: Signer | Provider,
  deployments: GmxVaultDeployments
) {
  return {
    glpStakingManager: GlpStakingManager__factory.connect(
      deployments.GlpStakingManagerDeployment.address,
      signerOrProvider
    ),
    glpStakingManagerLogic: GlpStakingManager__factory.connect(
      deployments.GlpStakingManagerLogicDeployment.address,
      signerOrProvider
    ),
    gmxBatchingManager: GMXBatchingManager__factory.connect(
      deployments.GMXBatchingManagerDeployment.address,
      signerOrProvider
    ),
    gmxBatchingManagerLogic: GMXBatchingManager__factory.connect(
      deployments.GMXBatchingManagerLogicDeployment.address,
      signerOrProvider
    ),
    gmxYieldStrategy: GMXYieldStrategy__factory.connect(
      deployments.GMXYieldStrategyDeployment.address,
      signerOrProvider
    ),
    gmxYieldStrategyLogic: GMXYieldStrategy__factory.connect(
      deployments.GMXYieldStrategyLogicDeployment.address,
      signerOrProvider
    ),
  };
}

export async function getGmxVaultContracts(
  signerOrProvider: Signer | Provider
) {
  const chainId = await getChainIdFromProvider(signerOrProvider);
  const contracts = await getGmxVaultContractsWithChainId(
    signerOrProvider,
    chainId
  );
  const addresses = getContractAddresses(chainId);
  return {
    ...contracts,
    gmx: IERC20Metadata__factory.connect(addresses.gmx, signerOrProvider),
    glp: IERC20Metadata__factory.connect(addresses.glp, signerOrProvider),
    sGLP: ISGLPExtended__factory.connect(addresses.sGLP, signerOrProvider),
    fsGLP: IERC20Metadata__factory.connect(addresses.fsGLP, signerOrProvider),
    glpManager: IGlpManager__factory.connect(
      addresses.glpManager,
      signerOrProvider
    ),
    rewardRouter: IRewardRouterV2__factory.connect(
      addresses.rewardRouter,
      signerOrProvider
    ),
    gmxUnderlyingVault: IVault__factory.connect(
      addresses.vault,
      signerOrProvider
    ),
  };
}

export async function getGmxVaultContractsWithChainId(
  signerOrProvider: Signer | Provider,
  chainId: number
) {
  const d = await getGmxVaultDeployments(getNetworkNameFromChainId(chainId));
  return getGmxVaultContractsWithDeployments(signerOrProvider, d);
}

export async function getGmxVaultDeployments(
  network: NetworkName
): Promise<GmxVaultDeployments> {
  const GlpStakingManagerDeployment = await getDeployment(
    'vaults',
    network,
    'GlpStakingManager'
  );
  const GlpStakingManagerLogicDeployment = await getDeployment(
    'vaults',
    network,
    'GlpStakingManagerLogic'
  );
  const GMXBatchingManagerDeployment = await getDeployment(
    'vaults',
    network,
    'GMXBatchingManager'
  );
  const GMXBatchingManagerLogicDeployment = await getDeployment(
    'vaults',
    network,
    'GMXBatchingManagerLogic'
  );
  const GMXYieldStrategyDeployment = await getDeployment(
    'vaults',
    network,
    'GMXYieldStrategy'
  );
  const GMXYieldStrategyLogicDeployment = await getDeployment(
    'vaults',
    network,
    'GMXYieldStrategyLogic'
  );

  return {
    GlpStakingManagerDeployment,
    GlpStakingManagerLogicDeployment,
    GMXBatchingManagerDeployment,
    GMXBatchingManagerLogicDeployment,
    GMXYieldStrategyDeployment,
    GMXYieldStrategyLogicDeployment,
  };
}
