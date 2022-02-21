const { providers } = require('ethers');
const { getContracts, getPoolContracts } = require('./');
const sdk = require('./');

const { config } = require('dotenv');
const { writeJson } = require('fs-extra');
config();

async function main() {
  const defaultPools = {};

  for (const [chainName, chainId] of Object.entries(sdk.chainIds)) {
    const provider = getProvider(chainName);

    let defaultPoolsForChain = {
      vTokenAddress: undefined,
      vPoolAddress: undefined,
      vPoolWrapperAddress: undefined,
    };

    if (provider) {
      try {
        const contracts = await getContracts(provider);
        const pools = await getPoolContracts(contracts.rageTradeFactory);
        defaultPoolsForChain = {
          vTokenAddress: pools[pools.length - 1].vToken.address,
          vPoolAddress: pools[pools.length - 1].vPool.address,
          vPoolWrapperAddress: pools[pools.length - 1].vPoolWrapper.address,
        };
      } catch {}
    }

    defaultPools[chainName] = defaultPoolsForChain;
  }

  await writeJson('./src/default-pools.json', defaultPools, { spaces: 2 });
  await writeJson('./dist/default-pools.json', defaultPools, { spaces: 2 });
}

main().catch(console.error);

function getProvider(chainName) {
  try {
    return providers.getDefaultProvider(chainName);
  } catch {}

  try {
    if (chainName === 'arbmain') {
      return new providers.StaticJsonRpcProvider(
        'https://arb-mainnet.g.alchemy.com/v2/' + process.env.ALCHEMY_KEY
      );
    } else if (chainName === 'arbtest') {
      return new providers.StaticJsonRpcProvider(
        'https://arb-rinkeby.g.alchemy.com/v2/' + process.env.ALCHEMY_KEY
      );
    } else {
      return undefined;
    }
  } catch {}
}
