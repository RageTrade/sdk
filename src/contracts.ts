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
  VBase__factory,
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
  | 'arbmain'
  | 'arbtest'
  | 'opmain'
  | 'optest';

export const chainIds = {
  mainnet: 1,
  rinkeby: 4,
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

export async function getContractsWithDeployments(
  signerOrProvider: Signer | Provider,
  deployments: {
    AccountLibraryDeployment: ContractDeployment;
    ClearingHouseDeployment: ContractDeployment;
    ClearingHouseLogicDeployment: ContractDeployment;
    InsuranceFundDeployment: ContractDeployment;
    InsuranceFundLogicDeployment: ContractDeployment;
    NativeOracleDeployment: ContractDeployment;
    ProxyAdminDeployment: ContractDeployment;
    RageTradeFactoryDeployment: ContractDeployment;
    RBaseDeployment: ContractDeployment;
    VBaseDeployment: ContractDeployment;
    VPoolWrapperLogicDeployment: ContractDeployment;
    SwapSimulatorDeployment: ContractDeployment;
    ETH_vTokenDeployment: ContractDeployment;
    ETH_vPoolDeployment: ContractDeployment;
    ETH_vPoolWrapperDeployment: ContractDeployment;
    ETH_IndexOracleDeployment: ContractDeployment;
  }
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
    nativeOracle: IOracle__factory.connect(
      deployments.NativeOracleDeployment.address,
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
    rBase: IERC20Metadata__factory.connect(
      deployments.RBaseDeployment.address,
      signerOrProvider
    ),
    vBase: VBase__factory.connect(
      deployments.VBaseDeployment.address,
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

export async function getDeployments(network: NetworkName) {
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
  const NativeOracleDeployment = await getDeployment(network, 'NativeOracle');
  const ProxyAdminDeployment = await getDeployment(network, 'ProxyAdmin');
  const RageTradeFactoryDeployment = await getDeployment(
    network,
    'RageTradeFactory'
  );
  const RBaseDeployment = await getDeployment(network, 'RBase');
  const VBaseDeployment = await getDeployment(network, 'VBase');
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
    NativeOracleDeployment,
    ProxyAdminDeployment,
    RageTradeFactoryDeployment,
    RBaseDeployment,
    VBaseDeployment,
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
    VBase__factory.createInterface(),
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
    console.error(e);
    throw new Error(
      `Network ${networkName} does not the deployment ${name}. Make sure deployments are updated.`
    );
  }
}

export interface ContractDeployment {
  address: string;
}
