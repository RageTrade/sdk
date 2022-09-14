import { Provider } from '@ethersproject/providers';
import { Signer } from 'ethers';
import { IERC20Metadata__factory } from '../typechain';
import { ISGLPExtended__factory } from '../typechain/vaults';
import { getChainIdFromProvider, getDeployment } from './common';
import { getDeployments } from './core';

export interface TokenAddresses {
  weth: string;
  wbtc: string;
  usdc: string;
  usdt: string;
  crv: string;
  crv3: string;
  gmx: string;
  glp: string;
  sGLP: string;
  fsGLP: string;
}

export async function getTokenAddresses(
  chainId: number
): Promise<TokenAddresses> {
  switch (chainId) {
    case 42161: // arbmain
      return {
        weth: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
        wbtc: '0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f',
        usdc: '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8',
        usdt: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
        crv: '0x11cdb42b0eb46d95f990bedd4695a6e3fa034978',
        crv3: '0x8e0B8c8BB9db49a46697F3a5Bb8A308e744821D2',
        gmx: '0xfc5A1A6EB076a2C7aD06eD22C90d7E710E35ad0a',
        glp: '0x4277f8F2c384827B5273592FF7CeBd9f2C1ac258',
        sGLP: '0x2F546AD4eDD93B956C8999Be404cdCAFde3E89AE',
        fsGLP: '0x1aDDD80E6039594eE970E5872D247bf0414C8903',
      };
    case 421611: // arbtest
      const { SettlementTokenDeployment } = await getDeployments('arbtest');
      return {
        weth: (await getDeployment('vaults', 'arbtest', 'WETH')).address,
        wbtc: (await getDeployment('vaults', 'arbtest', 'WBTC')).address,
        usdc: SettlementTokenDeployment.address,
        usdt: (await getDeployment('vaults', 'arbtest', 'USDT')).address,
        crv: (await getDeployment('vaults', 'arbtest', 'CurveToken')).address,
        crv3: (
          await getDeployment('vaults', 'arbtest', 'CurveTriCryptoLpToken')
        ).address,
        gmx: '0x0A72Ee78CcC55b979A4a77943745b202A11A931B',
        glp: '0xc78Cb6Ee5515109064E4DBca1c38759b6da4615f',
        sGLP: '0xe2f057A1F5A1F100b9bF991709432f89602eAC68',
        fsGLP: '0x5964b93A672CAbb2E7D8c482B882Ec66ED15da23',
      };
    default:
      throw new Error(
        `The token addresses are not present in sdk for chainId ${chainId}.`
      );
  }
}

export async function getTokenContracts(signerOrProvider: Signer | Provider) {
  const chainId = await getChainIdFromProvider(signerOrProvider);
  const addresses = await getTokenAddresses(chainId);
  return {
    weth: IERC20Metadata__factory.connect(addresses.weth, signerOrProvider),
    wbtc: IERC20Metadata__factory.connect(addresses.wbtc, signerOrProvider),
    usdc: IERC20Metadata__factory.connect(addresses.usdc, signerOrProvider),
    usdt: IERC20Metadata__factory.connect(addresses.usdt, signerOrProvider),
    // curve
    crv: IERC20Metadata__factory.connect(addresses.crv, signerOrProvider),
    crv3: IERC20Metadata__factory.connect(addresses.crv3, signerOrProvider),
    // gmx
    gmx: IERC20Metadata__factory.connect(addresses.gmx, signerOrProvider),
    glp: IERC20Metadata__factory.connect(addresses.glp, signerOrProvider),
    sGLP: ISGLPExtended__factory.connect(addresses.sGLP, signerOrProvider),
    fsGLP: IERC20Metadata__factory.connect(addresses.fsGLP, signerOrProvider),
  };
}
