import { ContractRunner } from 'ethers';
import { ERC20PresetMinterPauser__factory } from '../../typechain';
import { IWETH9__factory } from '../../typechain';
import { newError } from '../../utils/loggers';
import { getChainIdFromRunner, getNetworkName, NetworkName } from '../common';
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
      };
    default:
      throw newError(`token addresses not present for ${networkName} network`);
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
    weth: IWETH9__factory.connect(addresses.wethAddress, runner),
    wbtc: ERC20PresetMinterPauser__factory.connect(
      addresses.wbtcAddress,
      runner
    ),
    usdc: ERC20PresetMinterPauser__factory.connect(
      addresses.usdcAddress,
      runner
    ),
    usdt: ERC20PresetMinterPauser__factory.connect(
      addresses.usdtAddress,
      runner
    ),
    crv: ERC20PresetMinterPauser__factory.connect(addresses.crvAddress, runner),
    crv3: ERC20PresetMinterPauser__factory.connect(
      addresses.tricryptoAddress,
      runner
    ),
    tricrypto: ERC20PresetMinterPauser__factory.connect(
      addresses.tricryptoAddress,
      runner
    ),
    gmx: ERC20PresetMinterPauser__factory.connect(addresses.gmxAddress, runner),
    glp: ERC20PresetMinterPauser__factory.connect(addresses.glpAddress, runner),
    sGLP: ERC20PresetMinterPauser__factory.connect(
      addresses.sGLPAddress,
      runner
    ),
    fsGLP: ERC20PresetMinterPauser__factory.connect(
      addresses.fsGLPAddress,
      runner
    ),
  };
}
