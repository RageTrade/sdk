import { ethers } from 'ethers';
import { AggregatorV3Interface__factory } from '../../typechain/core';
import { newError } from '../../utils/loggers';
import {
  getChainIdFromProvider,
  getNetworkName,
  NetworkName,
  SignerOrProvider,
} from '../common';
import { getProvider } from '../providers';

export interface ChainlinkAddresses {
  usdcUsdAggregatorAddress: string;
  usdtUsdAggregatorAddress: string;
  ethUsdAggregatorAddress: string;
  btcUsdAggregatorAddress: string;
  linkUsdAggregatorAddress: string;
  uniUsdAggregatorAddress: string;
}

export function getAddresses(
  networkNameOrChainId: NetworkName | number
): ChainlinkAddresses {
  const networkName = getNetworkName(networkNameOrChainId);
  switch (networkName) {
    case 'arbmain':
    case 'mainnetfork':
      return {
        usdcUsdAggregatorAddress: '0x50834F3163758fcC1Df9973b6e91f0F0F0434aD3',
        usdtUsdAggregatorAddress: '0x3f3f5dF88dC9F13eac63DF89EC16ef6e7E25DdE7',
        btcUsdAggregatorAddress: '0x6ce185860a4963106506C203335A2910413708e9',
        ethUsdAggregatorAddress: '0x639Fe6ab55C921f74e7fac1ee960C0B6293ba612',
        linkUsdAggregatorAddress: '0x86E53CF1B870786351Da77A57575e79CB55812CB',
        uniUsdAggregatorAddress: '0x9C917083fDb403ab5ADbEC26Ee294f6EcAda2720',
      };
    case 'arbgoerli':
      return {
        usdcUsdAggregatorAddress: '0x1692Bdd32F31b831caAc1b0c9fAF68613682813b',
        usdtUsdAggregatorAddress: '0x0a023a3423D9b27A0BE48c768CCF2dD7877fEf5E',
        btcUsdAggregatorAddress: '0x6550bc2301936011c1334555e62A87705A81C12C',
        ethUsdAggregatorAddress: '0x62CAe0FA2da220f43a51F86Db2EDb36DcA9A5A08',
        linkUsdAggregatorAddress: '0xd28Ba6CA3bB72bF371b80a2a0a33cBcf9073C954',
        uniUsdAggregatorAddress: ethers.constants.AddressZero, // TODO change
      };
    default:
      throw newError(
        `chainlink addresses not present for ${networkName} network`
      );
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
    usdcUsdAggregator: AggregatorV3Interface__factory.connect(
      addresses.usdcUsdAggregatorAddress,
      signerOrProvider
    ),
    usdtUsdAggregator: AggregatorV3Interface__factory.connect(
      addresses.usdtUsdAggregatorAddress,
      signerOrProvider
    ),
    btcUsdAggregator: AggregatorV3Interface__factory.connect(
      addresses.btcUsdAggregatorAddress,
      signerOrProvider
    ),
    ethUsdAggregator: AggregatorV3Interface__factory.connect(
      addresses.ethUsdAggregatorAddress,
      signerOrProvider
    ),
    linkUsdAggregator: AggregatorV3Interface__factory.connect(
      addresses.linkUsdAggregatorAddress,
      signerOrProvider
    ),
    uniUsdAggregator: AggregatorV3Interface__factory.connect(
      addresses.uniUsdAggregatorAddress,
      signerOrProvider
    ),
  };
}
