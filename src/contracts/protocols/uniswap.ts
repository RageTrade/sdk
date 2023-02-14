import {
  INonfungiblePositionManager__factory,
  IQuoter__factory,
  ISwapRouter__factory,
  ITickLens__factory,
  IUniswapV3Factory__factory,
} from '../../typechain';
import { newError } from '../../utils/loggers';
import {
  getChainIdFromProvider,
  getNetworkName,
  NetworkName,
  SignerOrProvider,
} from '../common';
import { getProvider } from '../providers';

export interface UniswapAddresses {
  uniswapV3FactoryAddress: string;
  nonFungiblePositionManagerAddress: string;
  uniswapV3RouterAddress: string;
  tickLensAddress: string;
  uniswapV3QuoterV1Address: string;
}

export function getAddresses(
  networkNameOrChainId: NetworkName | number
): UniswapAddresses {
  const networkName = getNetworkName(networkNameOrChainId);
  switch (networkName) {
    case 'arbmain':
    case 'mainnetfork':
      return {
        uniswapV3FactoryAddress: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
        nonFungiblePositionManagerAddress:
          '0xC36442b4a4522E871399CD717aBDD847Ab11FE88',
        uniswapV3RouterAddress: '0xE592427A0AEce92De3Edee1F18E0157C05861564',
        tickLensAddress: '0xbfd8137f7d1516D3ea5cA83523914859ec47F573',
        uniswapV3QuoterV1Address: '0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6',
      };
    case 'arbgoerli':
      return {
        uniswapV3FactoryAddress: '0x4584E64B9cae7c86810a8a0A3c4469c4d164459f',
        nonFungiblePositionManagerAddress:
          '0xa41f9445ced72d9b01e3e0fd65277e78e3e0f6dc',
        uniswapV3RouterAddress: '0xc05237c7c22bd0550fdab72858bc9fb517e3324e',
        tickLensAddress: '0x34b2a8bc446632e629f889c9ae02c8aef1d59394',
        uniswapV3QuoterV1Address: '0xf3b4640aba3d6580a340ad7d53e728d75acee474',
      };
    default:
      throw newError(
        `uniswap addresses not present for ${networkName} network`
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
    uniswapV3Factory: IUniswapV3Factory__factory.connect(
      addresses.uniswapV3FactoryAddress,
      signerOrProvider
    ),
    nonfungiblePositionManager: INonfungiblePositionManager__factory.connect(
      addresses.nonFungiblePositionManagerAddress,
      signerOrProvider
    ),
    uniswapV3RouterAddress: ISwapRouter__factory.connect(
      addresses.uniswapV3RouterAddress,
      signerOrProvider
    ),
    tickLens: ITickLens__factory.connect(
      addresses.tickLensAddress,
      signerOrProvider
    ),
    uniswapV3QuoterV1: IQuoter__factory.connect(
      addresses.uniswapV3QuoterV1Address,
      signerOrProvider
    ),
  };
}
