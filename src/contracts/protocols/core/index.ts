import {
  Account__factory,
  ClearingHouse__factory,
  ClearingHouseLens__factory,
  IERC20Metadata__factory,
  InsuranceFund__factory,
  IOracle__factory,
  IUniswapV3Pool__factory,
  ProxyAdmin__factory,
  RageTradeFactory,
  RageTradeFactory__factory,
  SwapSimulator__factory,
  TimelockControllerWithMinDelayOverride__factory,
  VPoolWrapper__factory,
  VQuote__factory,
  VToken__factory,
} from '../../../typechain';
import { newError } from '../../../utils/loggers';
import {
  getChainIdFromProvider,
  getNetworkName,
  getNetworkNameFromChainId,
  NetworkName,
  SignerOrProvider,
} from '../../common';
import { getProvider } from '../../providers';
import * as arbgoerli from './arbgoerli';
import * as arbmain from './arbmain';

export function getDeployments(networkNameOrChainId: NetworkName | number) {
  const networkName = getNetworkName(networkNameOrChainId);
  switch (networkName) {
    case 'arbmain':
      return arbmain.getDeployments();
    case 'arbgoerli':
      return arbgoerli.getDeployments();
    default:
      throw newError(`core deployment not present for ${networkName} network`);
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
  const deployments = getDeployments(getNetworkName(networkNameOrChainId));
  if (signerOrProvider === undefined) {
    signerOrProvider = getProvider(networkNameOrChainId);
  }
  return {
    accountLib: Account__factory.connect(
      deployments.AccountLibraryDeployment.address,
      signerOrProvider
    ),
    clearingHouse: ClearingHouse__factory.connect(
      deployments.ClearingHouseDeployment.address,
      signerOrProvider
    ),
    clearingHouseLens: ClearingHouseLens__factory.connect(
      deployments.ClearingHouseLensDeployment.address,
      signerOrProvider
    ),
    clearingHouseLogic: ClearingHouse__factory.connect(
      deployments.ClearingHouseLogicDeployment.address,
      signerOrProvider
    ),
    insuranceFund: InsuranceFund__factory.connect(
      deployments.InsuranceFundDeployment.address,
      signerOrProvider
    ),
    insuranceFundLogic: InsuranceFund__factory.connect(
      deployments.InsuranceFundLogicDeployment.address,
      signerOrProvider
    ),
    proxyAdmin: ProxyAdmin__factory.connect(
      deployments.ProxyAdminDeployment.address,
      signerOrProvider
    ),
    timelock: TimelockControllerWithMinDelayOverride__factory.connect(
      deployments.TimelockControllerDeployment.address,
      signerOrProvider
    ),
    rageTradeFactory: RageTradeFactory__factory.connect(
      deployments.RageTradeFactoryDeployment.address,
      signerOrProvider
    ),
    settlementToken: IERC20Metadata__factory.connect(
      deployments.SettlementTokenDeployment.address,
      signerOrProvider
    ),
    vQuote: VQuote__factory.connect(
      deployments.VQuoteDeployment.address,
      signerOrProvider
    ),
    vPoolWrapperLogic: VPoolWrapper__factory.connect(
      deployments.VPoolWrapperLogicDeployment.address,
      signerOrProvider
    ),
    swapSimulator: SwapSimulator__factory.connect(
      deployments.SwapSimulatorDeployment.address,
      signerOrProvider
    ),

    eth_vToken: VToken__factory.connect(
      deployments.ETH_vTokenDeployment.address,
      signerOrProvider
    ),
    eth_vPool: IUniswapV3Pool__factory.connect(
      deployments.ETH_vPoolDeployment.address,
      signerOrProvider
    ),
    eth_vPoolWrapper: VPoolWrapper__factory.connect(
      deployments.ETH_vPoolWrapperDeployment.address,
      signerOrProvider
    ),
    eth_oracle: IOracle__factory.connect(
      deployments.ETH_IndexOracleDeployment.address,
      signerOrProvider
    ),
  };
}

export async function getPoolContracts(rageTradeFactory: RageTradeFactory) {
  const events = await rageTradeFactory.queryFilter(
    rageTradeFactory.filters.PoolInitialized()
  );
  return events.map(({ args: { vToken, vPool, vPoolWrapper } }) => {
    const signerOrProvider =
      rageTradeFactory.signer ?? rageTradeFactory.provider;
    return {
      vToken: VToken__factory.connect(vToken, signerOrProvider),
      vPool: IUniswapV3Pool__factory.connect(vPool, signerOrProvider),
      vPoolWrapper: VPoolWrapper__factory.connect(
        vPoolWrapper,
        signerOrProvider
      ),
    };
  });
}

import poolsList from '../../../pools.json';

export async function getPoolContractsCached(
  signerOrProvider: SignerOrProvider
) {
  const networkName = getNetworkNameFromChainId(
    await getChainIdFromProvider(signerOrProvider)
  );

  return poolsList[networkName].map((pool) => {
    return {
      vToken: VToken__factory.connect(pool.vTokenAddress, signerOrProvider),
      vPool: IUniswapV3Pool__factory.connect(
        pool.vPoolAddress,
        signerOrProvider
      ),
      vPoolWrapper: VPoolWrapper__factory.connect(
        pool.vPoolWrapperAddress,
        signerOrProvider
      ),
    };
  });
}
