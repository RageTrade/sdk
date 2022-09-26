import {
  ERC20PresetMinterPauser__factory,
  IGlpManager__factory,
  IRewardRouterV2__factory,
  ISGLPExtended__factory,
  IVault__factory,
} from '../../typechain';
import { newError } from '../../utils/loggers';
import {
  getChainIdFromProvider,
  getNetworkName,
  NetworkName,
  SignerOrProvider,
} from '../common';
import { getProvider } from '../providers';

export interface GmxAddresses {
  gmxAddress: string;
  glpAddress: string;
  sGLPAddress: string;
  fsGLPAddress: string;
  glpManagerAddress: string;
  rewardRouterAddress: string;
  vaultAddress: string;
}

export function getAddresses(
  networkNameOrChainId: NetworkName | number
): GmxAddresses {
  const networkName = getNetworkName(networkNameOrChainId);
  switch (networkName) {
    case 'arbmain':
      return {
        gmxAddress: '0xfc5A1A6EB076a2C7aD06eD22C90d7E710E35ad0a',
        glpAddress: '0x4277f8F2c384827B5273592FF7CeBd9f2C1ac258',
        sGLPAddress: '0x2F546AD4eDD93B956C8999Be404cdCAFde3E89AE',
        fsGLPAddress: '0x1aDDD80E6039594eE970E5872D247bf0414C8903',
        glpManagerAddress: '0x321F653eED006AD1C29D174e17d96351BDe22649',
        rewardRouterAddress: '0xA906F338CB21815cBc4Bc87ace9e68c87eF8d8F1',
        vaultAddress: '0x489ee077994B6658eAfA855C308275EAd8097C4A',
      };
    case 'arbrinkeby':
    case 'arbtest':
      return {
        gmxAddress: '0x0A72Ee78CcC55b979A4a77943745b202A11A931B',
        glpAddress: '0xc78Cb6Ee5515109064E4DBca1c38759b6da4615f',
        sGLPAddress: '0xe2f057A1F5A1F100b9bF991709432f89602eAC68',
        fsGLPAddress: '0x5964b93A672CAbb2E7D8c482B882Ec66ED15da23',
        glpManagerAddress: '0x9f3be2329E1698eEfFE1c9358a3AB2e7fdBeF527',
        rewardRouterAddress: '0xd007269EbdA744566225FBa7fCCee758d7dCE0FC',
        vaultAddress: '0x613512Ec9906975d29e1308f87454485D1b264fD',
      };
    default:
      throw newError(`gmx addresses not present for ${networkName} network`);
  }
}

export async function getContracts(signerOrProvider: SignerOrProvider) {
  const chainId = await getChainIdFromProvider(signerOrProvider);
  return getContractsSync(chainId, signerOrProvider);
}

export async function getContractsSync(
  networkNameOrChainId: NetworkName | number,
  signerOrProvider?: SignerOrProvider
) {
  const addresses = getAddresses(getNetworkName(networkNameOrChainId));
  if (signerOrProvider === undefined) {
    signerOrProvider = getProvider(networkNameOrChainId);
  }
  return {
    gmx: ERC20PresetMinterPauser__factory.connect(
      addresses.gmxAddress,
      signerOrProvider
    ),
    glp: ERC20PresetMinterPauser__factory.connect(
      addresses.glpAddress,
      signerOrProvider
    ),
    sGLP: ISGLPExtended__factory.connect(
      addresses.sGLPAddress,
      signerOrProvider
    ),
    fsGLP: ERC20PresetMinterPauser__factory.connect(
      addresses.fsGLPAddress,
      signerOrProvider
    ),
    glpManager: IGlpManager__factory.connect(
      addresses.glpManagerAddress,
      signerOrProvider
    ),
    rewardRouter: IRewardRouterV2__factory.connect(
      addresses.rewardRouterAddress,
      signerOrProvider
    ),
    gmxUnderlyingVault: IVault__factory.connect(
      addresses.vaultAddress,
      signerOrProvider
    ),
  };
}
