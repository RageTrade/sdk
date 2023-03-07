import { ContractRunner } from 'ethers';
import {
  ERC20PresetMinterPauser__factory,
  IGlpManager__factory,
  IRewardRouterV2__factory,
  ISGLPExtended__factory,
  IVault__factory,
} from '../../typechain';
import { newError } from '../../utils/loggers';
import { getChainIdFromRunner, getNetworkName, NetworkName } from '../common';
import { getProvider } from '../providers';

export interface GmxAddresses {
  gmxAddress: string;
  glpAddress: string;
  sGLPAddress: string;
  fsGLPAddress: string;
  glpManagerAddress: string;
  rewardRouterAddress: string;
  mintBurnRewardRouterAddress: string;
  vaultAddress: string;
}

export function getAddresses(
  networkNameOrChainId: NetworkName | number
): GmxAddresses {
  const networkName = getNetworkName(networkNameOrChainId);
  switch (networkName) {
    case 'arbmain':
    case 'mainnetfork':
      return {
        gmxAddress: '0xfc5A1A6EB076a2C7aD06eD22C90d7E710E35ad0a',
        glpAddress: '0x4277f8F2c384827B5273592FF7CeBd9f2C1ac258',
        sGLPAddress: '0x2F546AD4eDD93B956C8999Be404cdCAFde3E89AE',
        fsGLPAddress: '0x1aDDD80E6039594eE970E5872D247bf0414C8903',
        glpManagerAddress: '0x3963FfC9dff443c2A94f21b129D429891E32ec18',
        rewardRouterAddress: '0xA906F338CB21815cBc4Bc87ace9e68c87eF8d8F1',
        mintBurnRewardRouterAddress:
          '0xB95DB5B167D75e6d04227CfFFA61069348d271F5',
        vaultAddress: '0x489ee077994B6658eAfA855C308275EAd8097C4A',
      };
    case 'arbgoerli':
      return {
        gmxAddress: '0x2633773f03E411183eA45490eAEcA801a0046AfA',
        glpAddress: '0x0f2fbf4083Ec327c53C6213145e9789fe7a4D334',
        sGLPAddress: '0x28Fa343Dc9af1B976688C6551784FF9AC20D2937',
        fsGLPAddress: '0x88f69b7c69a0326bc0Bc960ad9Cd30305D6eC8E6',
        glpManagerAddress: '0x17e14B4C2C519DC119ffE9E01520650D938fcD94',
        rewardRouterAddress: '0xB627689d94BE29451b3E4Fa734F9cA4Be83b7eE3',
        mintBurnRewardRouterAddress:
          '0xB627689d94BE29451b3E4Fa734F9cA4Be83b7eE3',
        vaultAddress: '0x0178CAb9fD21167F01425b9c1C0327168a2164EF',
      };
    default:
      throw newError(`gmx addresses not present for ${networkName} network`);
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
  const addresses = getAddresses(getNetworkName(networkNameOrChainId));
  if (runner === undefined) {
    runner = getProvider(networkNameOrChainId);
  }
  return {
    gmx: ERC20PresetMinterPauser__factory.connect(addresses.gmxAddress, runner),
    glp: ERC20PresetMinterPauser__factory.connect(addresses.glpAddress, runner),
    sGLP: ISGLPExtended__factory.connect(addresses.sGLPAddress, runner),
    fsGLP: ERC20PresetMinterPauser__factory.connect(
      addresses.fsGLPAddress,
      runner
    ),
    glpManager: IGlpManager__factory.connect(
      addresses.glpManagerAddress,
      runner
    ),
    rewardRouter: IRewardRouterV2__factory.connect(
      addresses.rewardRouterAddress,
      runner
    ),
    mintBurnRewardRouter: IRewardRouterV2__factory.connect(
      addresses.mintBurnRewardRouterAddress,
      runner
    ),
    gmxUnderlyingVault: IVault__factory.connect(addresses.vaultAddress, runner),
  };
}
