import { Signer } from 'ethers';

import { Provider } from '@ethersproject/abstract-provider';
import { IQuoter__factory } from '../typechain';
import { IUniswapV3Factory__factory } from '../typechain/core';
import {
  INonfungiblePositionManager__factory,
  ISwapRouter__factory,
  ITickLens__factory,
} from '../typechain/uniswap-periphery';

// uniswap addresses are same across all networks
const uniswapV3FactoryAddress = '0x1F98431c8aD98523631AE4a59f267346ea31F984';
const nonfungiblePositionManagerAddress =
  '0xC36442b4a4522E871399CD717aBDD847Ab11FE88';
const swapRouterAddress = '0xE592427A0AEce92De3Edee1F18E0157C05861564';
const tickLensAddress = '0xbfd8137f7d1516D3ea5cA83523914859ec47F573';
const quoterV1Address = '0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6';

export function getUniswapContracts(signerOrProvider: Signer | Provider) {
  const uniswapV3Factory = IUniswapV3Factory__factory.connect(
    uniswapV3FactoryAddress,
    signerOrProvider
  );
  const nonfungiblePositionManager =
    INonfungiblePositionManager__factory.connect(
      nonfungiblePositionManagerAddress,
      signerOrProvider
    );
  const swapRouter = ISwapRouter__factory.connect(
    swapRouterAddress,
    signerOrProvider
  );
  const tickLens = ITickLens__factory.connect(
    tickLensAddress,
    signerOrProvider
  );
  const quoterV1 = IQuoter__factory.connect(quoterV1Address, signerOrProvider);

  return {
    uniswapV3Factory,
    nonfungiblePositionManager,
    swapRouter,
    tickLens,
    quoterV1,
  };
}
