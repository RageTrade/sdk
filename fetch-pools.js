const { providers } = require('ethers');
const { getContracts, getPoolContracts, truncate } = require('./dist');
const sdk = require('./dist');

const { config } = require('dotenv');
const { writeJson } = require('fs-extra');
config();

async function main() {
  const [defaultPool, poolsList] = await Promise.all([
    getDefaultPool(),
    getPoolsList(),
  ]);

  await writeJson('./src/default_pools.json', defaultPool, { spaces: 2 });
  await writeJson('./dist/default_pools.json', defaultPool, { spaces: 2 });

  await writeJson('./src/pools.json', poolsList, { spaces: 2 });
  await writeJson('./dist/pools.json', poolsList, { spaces: 2 });
}

main().catch(console.error);

async function getDefaultPool() {
  const defaultPool = {};

  for (const [chainName, chainId] of Object.entries(sdk.chainIds)) {
    let defaultPoolForChain = undefined;

    const provider = getProvider(chainName);
    if (provider) {
      try {
        const contracts = await getContracts(provider);
        defaultPoolForChain = {
          poolId: truncate(contracts.eth_vToken.address),
          name: await contracts.eth_vToken.name(),
          symbol: await contracts.eth_vToken.symbol(),
          decimals: await contracts.eth_vToken.decimals(),
          vTokenAddress: contracts.eth_vToken.address,
          vPoolAddress: contracts.eth_vPool.address,
          vPoolWrapperAddress: contracts.eth_vPoolWrapper.address,
        };
      } catch (e) {
        // console.log(e);
      }
    }

    defaultPool[chainName] = defaultPoolForChain;
  }
  return defaultPool;
}

async function getPoolsList() {
  const poolsList = {};

  for (const [chainName, chainId] of Object.entries(sdk.chainIds)) {
    let poolsListForChain = [];
    const provider = getProvider(chainName);
    if (provider) {
      try {
        const providerArbiscan = getArbiscanProvider(chainName);
        const { rageTradeFactory } = await getContracts(
          providerArbiscan ?? provider
        );
        const poolContracts = await getPoolContracts(rageTradeFactory);
        poolsListForChain = await Promise.all(
          poolContracts.map(async ({ vToken, vPool, vPoolWrapper }) => ({
            poolId: truncate(vToken.address),
            name: await vToken.name(),
            symbol: await vToken.symbol(),
            decimals: await vToken.decimals(),
            vTokenAddress: vToken.address,
            vPoolAddress: vPool.address,
            vPoolWrapperAddress: vPoolWrapper.address,
          }))
        );
      } catch (e) {
        if (!e.message.includes('does not contain the deployment')) {
          console.error(e);
        }
      }
    }
    poolsList[chainName] = poolsListForChain;
  }

  return poolsList;
}

function getArbiscanProvider(chainName) {
  try {
    if (chainName === 'arbmain') throw new Error('some issue is there');
    return new sdk.ArbiscanProvider(chainName, process.env.ARBISCAN_KEY);
  } catch {}
}

function getProvider(chainName) {
  try {
    return new providers.AlchemyProvider(
      chainName,
      process.env.ALCHEMY_API_KEY
    );
  } catch {}

  if (!process.env.ALCHEMY_KEY) {
    throw new Error('Please provide ALCHEMY_KEY in .env');
  }

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
