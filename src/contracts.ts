import { Provider } from '@ethersproject/abstract-provider';
import { Signer } from 'ethers';
import {
  AccountLibrary__factory,
  ClearingHouse__factory,
  InsuranceFund__factory,
  ProxyAdmin__factory,
  RageTradeFactory,
  RageTradeFactory__factory,
  SwapSimulator__factory,
  VQuote__factory,
} from './typechain';
import {
  IERC20Metadata__factory,
  IOracle__factory,
  IUniswapV3Pool__factory,
  OracleMock__factory,
  VPoolWrapper__factory,
  VToken__factory,
} from './typechain-types';

export type NetworkName =
  | 'mainnet'
  | 'rinkeby'
  | 'kovan'
  | 'arbmain'
  | 'arbtest'
  | 'opmain'
  | 'optest';

export const chainIds = {
  mainnet: 1,
  rinkeby: 4,
  kovan: 42,
  arbmain: 42161,
  arbtest: 421611,
  opmain: 10,
  optest: 69,
};

export function getNetworkNameFromChainId(chainId: number): NetworkName {
  for (const [key, val] of Object.entries(chainIds)) {
    if (val === chainId) {
      return key as NetworkName;
    }
  }

  throw new Error(`chainId ${chainId} not recognized`);
}

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
  return await getContractsWithChainId(signerOrProvider, network.chainId);
}

export async function getContractsWithChainId(
  signerOrProvider: Signer | Provider,
  chainId: number
) {
  const d = await getDeployments(getNetworkNameFromChainId(chainId));
  return getContractsWithDeployments(signerOrProvider, d);
}

export interface Deployments {
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
  deployments: Deployments
) {
  return {
    accountLib: AccountLibrary__factory.connect(
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
): Promise<Deployments> {
  const AccountLibraryDeployment = await getDeployment(
    network,
    'AccountLibrary'
  );
  const ClearingHouseDeployment = await getDeployment(network, 'ClearingHouse');
  const ClearingHouseLogicDeployment = await getDeployment(
    network,
    'ClearingHouseLogic'
  );
  const InsuranceFundDeployment = await getDeployment(network, 'InsuranceFund');
  const InsuranceFundLogicDeployment = await getDeployment(
    network,
    'InsuranceFundLogic'
  );
  const ProxyAdminDeployment = await getDeployment(network, 'ProxyAdmin');
  const RageTradeFactoryDeployment = await getDeployment(
    network,
    'RageTradeFactory'
  );
  const SettlementTokenDeployment = await getDeployment(
    network,
    'SettlementToken'
  );
  const VQuoteDeployment = await getDeployment(network, 'VQuote');
  const VPoolWrapperLogicDeployment = await getDeployment(
    network,
    'VPoolWrapperLogic'
  );
  const SwapSimulatorDeployment = await getDeployment(network, 'SwapSimulator');

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

export async function getPoolDeployments(
  network: NetworkName,
  tokenSymbol: string
) {
  return await Promise.all([
    getDeployment(network, tokenSymbol + '-vToken'),
    getDeployment(network, tokenSymbol + '-vPool'),
    getDeployment(network, tokenSymbol + '-vPoolWrapper'),
    getDeployment(network, tokenSymbol + '-IndexOracle'),
  ]);
}

export function getEthersInterfaces() {
  return [
    AccountLibrary__factory.createInterface(),
    ClearingHouse__factory.createInterface(),
    InsuranceFund__factory.createInterface(),
    OracleMock__factory.createInterface(),
    ProxyAdmin__factory.createInterface(),
    RageTradeFactory__factory.createInterface(),
    VQuote__factory.createInterface(),
    VToken__factory.createInterface(),
    VPoolWrapper__factory.createInterface(),
    SwapSimulator__factory.createInterface(),
  ];
}

export async function getDeployment(
  networkName: NetworkName,
  name: string
): Promise<ContractDeployment> {
  try {
    return await import(`../deployments/${networkName}/${name}.json`);
  } catch (e) {
    // console.error(e);
    throw new Error(
      `Network ${networkName} does not contain the deployment ${name}. Make sure deployments are updated.`
    );
  }
}

export interface ContractDeployment {
  address: string;
}
