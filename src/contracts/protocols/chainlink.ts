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
  ethUsdAggregatorAddress: string;
  btcUsdAggregatorAddress: string;
}

export function getAddresses(
  networkNameOrChainId: NetworkName | number
): ChainlinkAddresses {
  const networkName = getNetworkName(networkNameOrChainId);
  switch (networkName) {
    case 'arbmain':
    case 'mainnetfork':
      return {
        btcUsdAggregatorAddress: '0x6ce185860a4963106506C203335A2910413708e9',
        ethUsdAggregatorAddress: '0x639Fe6ab55C921f74e7fac1ee960C0B6293ba612',
      };
    case 'arbgoerli':
      return {
        btcUsdAggregatorAddress: '0x6550bc2301936011c1334555e62A87705A81C12C',
        ethUsdAggregatorAddress: '0x62CAe0FA2da220f43a51F86Db2EDb36DcA9A5A08',
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
    btcUsdAggregator: AggregatorV3Interface__factory.connect(
      addresses.btcUsdAggregatorAddress,
      signerOrProvider
    ),
    ethUsdAggregator: AggregatorV3Interface__factory.connect(
      addresses.ethUsdAggregatorAddress,
      signerOrProvider
    ),
  };
}
