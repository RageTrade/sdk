import { Signer } from 'ethers';

import { Provider } from '@ethersproject/abstract-provider';

import {
  Account__factory,
  ClearingHouse__factory,
  IERC20Metadata__factory,
  InsuranceFund__factory,
  IOracle__factory,
  IUniswapV3Pool__factory,
  ProxyAdmin__factory,
  RageTradeFactory,
  RageTradeFactory__factory,
  SwapSimulator__factory,
  VPoolWrapper__factory,
  VQuote__factory,
  VToken__factory,
} from '../typechain';
import {
  ContractDeployment,
  getDeployment,
  getNetworkNameFromChainId,
  NetworkName,
} from './common';

/**
 * This method can be used to get contract instances
 * @param signerOrProvider Ethers.js provider for readonly contract instance, and signer if
 *      it should also be able to make read+write contract instance
 */
export async function getContracts(signerOrProvider: Signer | Provider) {
  const provider = Provider.isProvider(signerOrProvider)
    ? signerOrProvider
    : signerOrProvider.provider;
  if (provider === undefined) {
    throw new Error('provider is not present in getContracts signerOrProvider');
  }

  const network = await provider.getNetwork();
  return getContractsWithChainId(signerOrProvider, network.chainId);
}

export async function getContractsWithChainId(
  signerOrProvider: Signer | Provider,
  chainId: number
) {
  const d = await getDeployments(getNetworkNameFromChainId(chainId));
  return getContractsWithDeployments(signerOrProvider, d);
}

export interface CoreDeployments {
  AccountLibraryDeployment: ContractDeployment;
  ClearingHouseDeployment: ContractDeployment;
  ClearingHouseLogicDeployment: ContractDeployment;
  InsuranceFundDeployment: ContractDeployment;
  InsuranceFundLogicDeployment: ContractDeployment;
  ProxyAdminDeployment: ContractDeployment;
  RageTradeFactoryDeployment: ContractDeployment;
  SettlementTokenDeployment: ContractDeployment;
  VQuoteDeployment: ContractDeployment;
  VPoolWrapperLogicDeployment: ContractDeployment;
  SwapSimulatorDeployment: ContractDeployment;
  ETH_vTokenDeployment: ContractDeployment;
  ETH_vPoolDeployment: ContractDeployment;
  ETH_vPoolWrapperDeployment: ContractDeployment;
  ETH_IndexOracleDeployment: ContractDeployment;
}

export async function getContractsWithDeployments(
  signerOrProvider: Signer | Provider,
  deployments: CoreDeployments
) {
  return {
    accountLib: Account__factory.connect(
      deployments.AccountLibraryDeployment.address,
      signerOrProvider
    ),
    clearingHouse: ClearingHouse__factory.connect(
      deployments.ClearingHouseDeployment.address,
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

export async function getDeployments(
  network: NetworkName
): Promise<CoreDeployments> {
  const AccountLibraryDeployment = await getDeployment(
    'core',
    network,
    'AccountLibrary'
  );
  const ClearingHouseDeployment = await getDeployment(
    'core',
    network,
    'ClearingHouse'
  );
  const ClearingHouseLogicDeployment = await getDeployment(
    'core',
    network,
    'ClearingHouseLogic'
  );
  const InsuranceFundDeployment = await getDeployment(
    'core',
    network,
    'InsuranceFund'
  );
  const InsuranceFundLogicDeployment = await getDeployment(
    'core',
    network,
    'InsuranceFundLogic'
  );
  const ProxyAdminDeployment = await getDeployment(
    'core',
    network,
    'ProxyAdmin'
  );
  const RageTradeFactoryDeployment = await getDeployment(
    'core',
    network,
    'RageTradeFactory'
  );
  const SettlementTokenDeployment = await getDeployment(
    'core',
    network,
    'SettlementToken'
  );
  const VQuoteDeployment = await getDeployment('core', network, 'VQuote');
  const VPoolWrapperLogicDeployment = await getDeployment(
    'core',
    network,
    'VPoolWrapperLogic'
  );
  const SwapSimulatorDeployment = await getDeployment(
    'core',
    network,
    'SwapSimulator'
  );

  const [
    ETH_vTokenDeployment,
    ETH_vPoolDeployment,
    ETH_vPoolWrapperDeployment,
    ETH_IndexOracleDeployment,
  ] = await getPoolDeployments(network, 'ETH');

  return {
    AccountLibraryDeployment,
    ClearingHouseDeployment,
    ClearingHouseLogicDeployment,
    InsuranceFundDeployment,
    InsuranceFundLogicDeployment,
    ProxyAdminDeployment,
    RageTradeFactoryDeployment,
    SettlementTokenDeployment,
    VQuoteDeployment,
    VPoolWrapperLogicDeployment,
    SwapSimulatorDeployment,
    ETH_vTokenDeployment,
    ETH_vPoolDeployment,
    ETH_vPoolWrapperDeployment,
    ETH_IndexOracleDeployment,
  };
}

export function getPoolDeployments(network: NetworkName, tokenSymbol: string) {
  return Promise.all([
    getDeployment('core', network, tokenSymbol + '-vToken'),
    getDeployment('core', network, tokenSymbol + '-vPool'),
    getDeployment('core', network, tokenSymbol + '-vPoolWrapper'),
    getDeployment('core', network, tokenSymbol + '-IndexOracle'),
  ]);
}
