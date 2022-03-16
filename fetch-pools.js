const { providers } = require('ethers');
const { getContracts, getPoolContracts, truncate } = require('./dist');
const sdk = require('./dist');

const { config } = require('dotenv');
const { writeJson } = require('fs-extra');
config();

async function main() {
  const defaultPool = await getDefaultPool();
  const poolsList = await getPoolsList();

  const result = { defaultPool, poolsList };

  await writeJson('./src/pools.json', result, { spaces: 2 });
  await writeJson('./dist/pools.json', result, { spaces: 2 });
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
      } catch {}
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
        const { rageTradeFactory } = await getContracts(provider);
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
        console.error(e);
      }
    }
    poolsList[chainName] = poolsListForChain;
  }

  return poolsList;
}

function getProvider(chainName) {
  try {
    return providers.getDefaultProvider(chainName);
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
