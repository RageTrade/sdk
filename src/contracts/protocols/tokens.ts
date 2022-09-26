import { ERC20PresetMinterPauser__factory } from '../../typechain';
import { IWETH9__factory } from '../../typechain';
import { newError } from '../../utils/loggers';
import {
  getChainIdFromProvider,
  getNetworkName,
  NetworkName,
  SignerOrProvider,
} from '../common';
import { getProvider } from '../providers';

export interface TokenAddresses {
  wethAddress: string;
  wbtcAddress: string;
  usdcAddress: string;
  usdtAddress: string;
  crvAddress: string;
  tricryptoAddress: string;
  gmxAddress: string;
  glpAddress: string;
  sGLPAddress: string;
  fsGLPAddress: string;
}

import * as core from './core';
import * as curveFinance from './curve';
import * as gmx from './gmx';

export function getAddresses(
  networkNameOrChainId: NetworkName | number
): TokenAddresses {
  const networkName = getNetworkName(networkNameOrChainId);
  const coreDeployments = core.getDeployments(networkName);
  const { crvAddress, tricryptoAddress } =
    curveFinance.getAddresses(networkName);
  const { gmxAddress, glpAddress, sGLPAddress, fsGLPAddress } =
    gmx.getAddresses(networkName);
  switch (networkName) {
    case 'arbmain':
      return {
        wethAddress: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
        wbtcAddress: '0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f',
        usdtAddress: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
        usdcAddress: coreDeployments.SettlementTokenDeployment.address,
        crvAddress,
        tricryptoAddress,
        gmxAddress,
        glpAddress,
        sGLPAddress,
        fsGLPAddress,
      };
    case 'arbrinkeby':
    case 'arbtest':
      return {
        wethAddress: '0xFCfbfcC11d12bCf816415794E5dc1BBcc5304e01',
        wbtcAddress: '0xF2bf2a5CF00c9121A18d161F6738D39Ab576DB68',
        usdtAddress: '0x237b3B5238D2022aA80cAd1f67dAE53f353F74bF',
        usdcAddress: coreDeployments.SettlementTokenDeployment.address,
        crvAddress,
        tricryptoAddress,
        gmxAddress,
        glpAddress,
        sGLPAddress,
        fsGLPAddress,
      };
    case 'arbgoerli':
      return {
        wethAddress: '0x007354C7DD2EB9f636204192092d7221c9d988F2',
        wbtcAddress: '0x577231039631e714d89a99828C9038D390dfe909',
        usdtAddress: '0x37E607e9f601D718A50221f62b3f4816D0e6352e',
        usdcAddress: coreDeployments.SettlementTokenDeployment.address,
        crvAddress,
        tricryptoAddress,
        gmxAddress,
        glpAddress,
        sGLPAddress,
        fsGLPAddress,
      };
    default:
      throw newError(`token addresses not present for ${networkName} network`);
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
    weth: IWETH9__factory.connect(addresses.wethAddress, signerOrProvider),
    wbtc: ERC20PresetMinterPauser__factory.connect(
      addresses.wbtcAddress,
      signerOrProvider
    ),
    usdc: ERC20PresetMinterPauser__factory.connect(
      addresses.usdcAddress,
      signerOrProvider
    ),
    usdt: ERC20PresetMinterPauser__factory.connect(
      addresses.usdtAddress,
      signerOrProvider
    ),
    crv: ERC20PresetMinterPauser__factory.connect(
      addresses.crvAddress,
      signerOrProvider
    ),
    crv3: ERC20PresetMinterPauser__factory.connect(
      addresses.tricryptoAddress,
      signerOrProvider
    ),
    tricrypto: ERC20PresetMinterPauser__factory.connect(
      addresses.tricryptoAddress,
      signerOrProvider
    ),
    gmx: ERC20PresetMinterPauser__factory.connect(
      addresses.gmxAddress,
      signerOrProvider
    ),
    glp: ERC20PresetMinterPauser__factory.connect(
      addresses.glpAddress,
      signerOrProvider
    ),
    sGLP: ERC20PresetMinterPauser__factory.connect(
      addresses.sGLPAddress,
      signerOrProvider
    ),
    fsGLP: ERC20PresetMinterPauser__factory.connect(
      addresses.fsGLPAddress,
      signerOrProvider
    ),
  };
}
