import {
  IAToken__factory,
  IPoolAddressesProvider__factory,
} from '../../typechain/delta-neutral-gmx-vaults';
import { newError } from '../../utils/loggers';
import {
  getChainIdFromProvider,
  getNetworkName,
  NetworkName,
  SignerOrProvider,
} from '../common';
import { getProvider } from '../providers';

export interface AaveAddresses {
  poolAddressProviderAddress: string;
  // usdc
  usdcATokenAddress: string;
  usdcVariableDebtTokenAddress: string;
  // usdt
  usdtATokenAddress: string;
  usdtVariableDebtTokenAddress: string;
  // wbtc
  wbtcATokenAddress: string;
  wbtcVariableDebtTokenAddress: string;
  // weth
  wethATokenAddress: string;
  wethVariableDebtTokenAddress: string;
}

export function getAddresses(
  networkNameOrChainId: NetworkName | number
): AaveAddresses {
  const networkName = getNetworkName(networkNameOrChainId);
  switch (networkName) {
    case 'arbgoerli':
      return {
        poolAddressProviderAddress:
          '0xF8aa90E66B8BAe13f2e4aDe6104abAb8eeDaBfdc',
        // usdc
        usdcATokenAddress: '0x4de6918B9D2c953bb003168D64A49A6A189510D5',
        usdcVariableDebtTokenAddress:
          '0xED2c6669a19F76E1CCaE65ec121821228c3b31bD',
        // usdt
        usdtATokenAddress: '0x4c78955a00c4b2a623267eb68bec88DFCb4cb4C4',
        usdtVariableDebtTokenAddress:
          '0x0Ec8D5052Ce329198146167F2e6B0A2A58507EbA',
        // wbtc
        wbtcATokenAddress: '0x7Cc089eF07803A84Bb63C66d728A211fc9808eA6',
        wbtcVariableDebtTokenAddress:
          '0x3bf376701600ACAF865EBdf902Ef3b322BB433aE',
        // weth
        wethATokenAddress: '0x4f57EAA84fe40cC1eCaa77D3db3108A146c9a39B',
        wethVariableDebtTokenAddress:
          '0xf69Ff61eE59Cd1Fd191B094C957938C7Dd0F8c3c',
      };
    default:
      throw newError(`aave addresses not present for ${networkName} network`);
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
    poolAddressProvider: IPoolAddressesProvider__factory.connect(
      addresses.poolAddressProviderAddress,
      signerOrProvider
    ),
    aUsdc: IAToken__factory.connect(
      addresses.usdcATokenAddress,
      signerOrProvider
    ),
    aUsdt: IAToken__factory.connect(
      addresses.usdtATokenAddress,
      signerOrProvider
    ),
    aWbtc: IAToken__factory.connect(
      addresses.wbtcATokenAddress,
      signerOrProvider
    ),
    aWeth: IAToken__factory.connect(
      addresses.wethATokenAddress,
      signerOrProvider
    ),
  };
}
