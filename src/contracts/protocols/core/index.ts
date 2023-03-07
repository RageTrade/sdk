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
  getChainIdFromRunner,
  getNetworkName,
  getNetworkNameFromChainId,
  NetworkName,
} from '../../common';
import { getProvider } from '../../providers';
import * as arbgoerli from './arbgoerli';
import * as arbmain from './arbmain';

export function getDeployments(networkNameOrChainId: NetworkName | number) {
  const networkName = getNetworkName(networkNameOrChainId);
  switch (networkName) {
    case 'arbmain':
    case 'mainnetfork':
      return arbmain.getDeployments();
    case 'arbgoerli':
      return arbgoerli.getDeployments();
    default:
      throw newError(`core deployment not present for ${networkName} network`);
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
  const deployments = getDeployments(getNetworkName(networkNameOrChainId));
  if (runner === undefined) {
    runner = getProvider(networkNameOrChainId);
  }
  return {
    accountLib: Account__factory.connect(
      deployments.AccountLibraryDeployment.address,
      runner
    ),
    clearingHouse: ClearingHouse__factory.connect(
      deployments.ClearingHouseDeployment.address,
      runner
    ),
    clearingHouseLens: ClearingHouseLens__factory.connect(
      deployments.ClearingHouseLensDeployment.address,
      runner
    ),
    clearingHouseLogic: ClearingHouse__factory.connect(
      deployments.ClearingHouseLogicDeployment.address,
      runner
    ),
    insuranceFund: InsuranceFund__factory.connect(
      deployments.InsuranceFundDeployment.address,
      runner
    ),
    insuranceFundLogic: InsuranceFund__factory.connect(
      deployments.InsuranceFundLogicDeployment.address,
      runner
    ),
    proxyAdmin: ProxyAdmin__factory.connect(
      deployments.ProxyAdminDeployment.address,
      runner
    ),
    timelock: TimelockControllerWithMinDelayOverride__factory.connect(
      deployments.TimelockControllerDeployment.address,
      runner
    ),
    rageTradeFactory: RageTradeFactory__factory.connect(
      deployments.RageTradeFactoryDeployment.address,
      runner
    ),
    settlementToken: IERC20Metadata__factory.connect(
      deployments.SettlementTokenDeployment.address,
      runner
    ),
    vQuote: VQuote__factory.connect(
      deployments.VQuoteDeployment.address,
      runner
    ),
    vPoolWrapperLogic: VPoolWrapper__factory.connect(
      deployments.VPoolWrapperLogicDeployment.address,
      runner
    ),
    swapSimulator: SwapSimulator__factory.connect(
      deployments.SwapSimulatorDeployment.address,
      runner
    ),

    eth_vToken: VToken__factory.connect(
      deployments.ETH_vTokenDeployment.address,
      runner
    ),
    eth_vPool: IUniswapV3Pool__factory.connect(
      deployments.ETH_vPoolDeployment.address,
      runner
    ),
    eth_vPoolWrapper: VPoolWrapper__factory.connect(
      deployments.ETH_vPoolWrapperDeployment.address,
      runner
    ),
    eth_oracle: IOracle__factory.connect(
      deployments.ETH_IndexOracleDeployment.address,
      runner
    ),
  };
}

export async function getPoolContracts(rageTradeFactory: RageTradeFactory) {
  const events = await rageTradeFactory.queryFilter(
    rageTradeFactory.filters.PoolInitialized()
  );
  return events.map(({ args: { vToken, vPool, vPoolWrapper } }) => {
    const runner = rageTradeFactory.runner;
    return {
      vToken: VToken__factory.connect(vToken, runner),
      vPool: IUniswapV3Pool__factory.connect(vPool, runner),
      vPoolWrapper: VPoolWrapper__factory.connect(vPoolWrapper, runner),
    };
  });
}

import poolsList from '../../../pools.json';
import { ContractRunner } from 'ethers';

export async function getPoolContractsCached(runner: ContractRunner) {
  const networkName = getNetworkNameFromChainId(
    await getChainIdFromRunner(runner)
  );

  return poolsList[networkName].map((pool) => {
    return {
      vToken: VToken__factory.connect(pool.vTokenAddress, runner),
      vPool: IUniswapV3Pool__factory.connect(pool.vPoolAddress, runner),
      vPoolWrapper: VPoolWrapper__factory.connect(
        pool.vPoolWrapperAddress,
        runner
      ),
    };
  });
}
