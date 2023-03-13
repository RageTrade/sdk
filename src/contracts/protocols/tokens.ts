import { ethers } from 'ethers';
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
  linkAddress: string;
  uniAddress: string;
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
    case 'mainnetfork':
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
        linkAddress: '0xf97f4df75117a78c1A5a0DBb814Af92458539FB4',
        uniAddress: '0xFa7F8980b0f1E64A2062791cc3b0871572f1F7f0',
      };
    case 'arbgoerli':
      return {
        wethAddress: '0xCDa739D69067333974cD73A722aB92E5e0ad8a4F',
        wbtcAddress: '0x2Df743730160059c50c6bA9E87b30876FA6Db720',
        usdtAddress: '0xbAc565f93f3192D35E9106E67B9d5c9348bD9389',
        usdcAddress: coreDeployments.SettlementTokenDeployment.address,
        crvAddress,
        tricryptoAddress,
        gmxAddress,
        glpAddress,
        sGLPAddress,
        fsGLPAddress,
        linkAddress: '0x56033E114c61183590d39BA847400F02022Ebe47',
        uniAddress: ethers.constants.AddressZero, // TODO change
      };
    default:
      throw newError(`token addresses not present for ${networkName} network`);
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
