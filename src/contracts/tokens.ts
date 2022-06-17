import { Provider } from '@ethersproject/providers';
import { Signer } from 'ethers';
import { IERC20Metadata__factory } from '../typechain';
import { getChainIdFromProvider } from './common';

export interface TokenAddresses {
  weth: string;
  wbtc: string;
  usdc: string;
  usdt: string;
  crv: string;
  crv3: string;
}

export function getTokenAddresses(chainId: number): TokenAddresses {
  switch (chainId) {
    case 42161: // arbmain
      return {
        weth: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
        wbtc: '0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f',
        usdc: '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8',
        usdt: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
        crv: '0x11cdb42b0eb46d95f990bedd4695a6e3fa034978',
        crv3: '0x8e0B8c8BB9db49a46697F3a5Bb8A308e744821D2',
      };
    case 421611: // arbtest
      return {
        weth: '0xFCfbfcC11d12bCf816415794E5dc1BBcc5304e01',
        wbtc: '0xF2bf2a5CF00c9121A18d161F6738D39Ab576DB68',
        usdc: '0x33a010E74A354bd784a62cca3A4047C1A84Ceeab',
        usdt: '0x237b3B5238D2022aA80cAd1f67dAE53f353F74bF',
        crv: '0xc6BeC13cBf941E3f9a0D3d21B68c5518475a3bAd',
        crv3: '0x931073e47baA30389A195CABcf5F3549157afdc9',
      };
    default:
      throw new Error(
        `The token addresses are not present in sdk for chainId ${chainId}.`
      );
  }
}

export async function getTokenContracts(signerOrProvider: Signer | Provider) {
  const chainId = await getChainIdFromProvider(signerOrProvider);
  const addresses = getTokenAddresses(chainId);
  return {
    weth: IERC20Metadata__factory.connect(addresses.weth, signerOrProvider),
    wbtc: IERC20Metadata__factory.connect(addresses.wbtc, signerOrProvider),
    usdc: IERC20Metadata__factory.connect(addresses.usdc, signerOrProvider),
    usdt: IERC20Metadata__factory.connect(addresses.usdt, signerOrProvider),
    crv: IERC20Metadata__factory.connect(addresses.crv, signerOrProvider),
    crv3: IERC20Metadata__factory.connect(addresses.crv3, signerOrProvider),
  };
}
