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

export interface ContractDeployment {
  address: string;
}

export function getNetworkNameFromChainId(chainId: number): NetworkName {
  for (const [key, val] of Object.entries(chainIds)) {
    if (val === chainId) {
      return key as NetworkName;
    }
  }

  throw new Error(`chainId ${chainId} not recognized`);
}

export async function getDeployment(
  repo: string,
  networkName: NetworkName,
  name: string
): Promise<ContractDeployment> {
  try {
    return await import(`../deployments/${repo}/${networkName}/${name}.json`);
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
