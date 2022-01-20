import { Provider } from '@ethersproject/abstract-provider';
import { Signer } from 'ethers';
import {
  Account__factory,
  ClearingHouse__factory,
  IERC20Metadata__factory,
  InsuranceFund__factory,
  IOracle__factory,
  IUniswapV3Pool__factory,
  OracleMock__factory,
  ProxyAdmin__factory,
  RageTradeFactory,
  RageTradeFactory__factory,
  VBase__factory,
  VPoolWrapper__factory,
  VToken__factory,
} from './typechain-types';

export type NetworkName = 'mainnet' | 'rinkeby' | 'arbmain' | 'arbtest';

export const chainIds = {
  mainnet: 1,
  rinkeby: 4,
  arbmain: 42161,
  arbtest: 421611,
};

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
  return {
    accountLib: Account__factory.connect(
      d.AccountLibraryDeployment.address,
      signerOrProvider
    ),
    clearingHouse: ClearingHouse__factory.connect(
      d.ClearingHouseDeployment.address,
      signerOrProvider
    ),
    clearingHouseLogic: ClearingHouse__factory.connect(
      d.ClearingHouseLogicDeployment.address,
      signerOrProvider
    ),
    insuranceFund: InsuranceFund__factory.connect(
      d.InsuranceFundDeployment.address,
      signerOrProvider
    ),
    insuranceFundLogic: InsuranceFund__factory.connect(
      d.InsuranceFundLogicDeployment.address,
      signerOrProvider
    ),
    nativeOracle: IOracle__factory.connect(
      d.NativeOracleDeployment.address,
      signerOrProvider
    ),
    proxyAdmin: ProxyAdmin__factory.connect(
      d.ProxyAdminDeployment.address,
      signerOrProvider
    ),
    rageTradeFactory: RageTradeFactory__factory.connect(
      d.RageTradeFactoryDeployment.address,
      signerOrProvider
    ),
    rBase: IERC20Metadata__factory.connect(
      d.RBaseDeployment.address,
      signerOrProvider
    ),
    vBase: VBase__factory.connect(d.VBaseDeployment.address, signerOrProvider),
    vPoolWrapperLogic: VPoolWrapper__factory.connect(
      d.VPoolWrapperLogicDeployment.address,
      signerOrProvider
    ),
  };
}

export async function getPoolContracts(rageTradeFactory: RageTradeFactory) {
  const events = await rageTradeFactory.queryFilter(
    rageTradeFactory.filters.PoolInitlized()
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
  };
}

export function getEthersInterfaces() {
  return [
    Account__factory.createInterface(),
    ClearingHouse__factory.createInterface(),
    InsuranceFund__factory.createInterface(),
    OracleMock__factory.createInterface(),
    ProxyAdmin__factory.createInterface(),
    RageTradeFactory__factory.createInterface(),
    VBase__factory.createInterface(),
    VToken__factory.createInterface(),
    VPoolWrapper__factory.createInterface(),
  ];
}

export function getNetworkNameFromChainId(chainId: number): NetworkName {
  switch (chainId) {
    case chainIds.mainnet:
      return 'mainnet';
    case chainIds.rinkeby:
      return 'rinkeby';
    case chainIds.arbmain:
      return 'arbmain';
    case chainIds.arbtest:
      return 'arbtest';
    default:
      throw new Error(`chainId ${chainId} not recognized`);
  }
}

export async function getDeployment(
  networkName: NetworkName,
  name: string
): Promise<{ address: string }> {
  try {
    return await import(`../deployments/${networkName}/${name}.json`);
  } catch (e) {
    console.error(e);
    throw new Error(
      `Network ${networkName} does not the deployment ${name}. Make sure deployments are updated.`
    );
  }
}
