const { providers } = require('ethers');
const { core, truncate } = require('./dist');
const sdk = require('./dist');

const { config } = require('dotenv');
const { writeJson } = require('fs-extra');
config();

async function main() {
  const poolsList = await getPoolsList();
  const defaultPool = await getDefaultPool(poolsList);

  await writeJson('./src/default_pools.json', defaultPool, { spaces: 2 });
  await writeJson('./dist/default_pools.json', defaultPool, { spaces: 2 });

  await writeJson('./src/pools.json', poolsList, { spaces: 2 });
  await writeJson('./dist/pools.json', poolsList, { spaces: 2 });
}

main().catch(console.error);

async function getDefaultPool(poolsList) {
  const defaultPool = {};

  for (const [chainName] of Object.entries(sdk.chainIds)) {
    const defaultPoolForChain = poolsList[chainName]?.[0];
    if (defaultPoolForChain) {
      defaultPool[chainName] = defaultPoolForChain;
    }
  }
  return defaultPool;
}

async function getPoolsList() {
  const poolsList = {};

  for (const [chainName] of Object.entries(sdk.chainIds)) {
    let poolsListForChain = [];
    const provider = sdk.getProvider(chainName);
    if (provider) {
      try {
        const { rageTradeFactory } = await core.getContractsSync(
          chainName,
          provider
        );
        const events = await rageTradeFactory.queryFilter(
          rageTradeFactory.filters.PoolInitialized()
        );
        const poolContracts = events.map(
          ({ blockNumber, args: { vToken, vPool, vPoolWrapper } }) => {
            const signerOrProvider =
              rageTradeFactory.signer ?? rageTradeFactory.provider;
            return {
              vToken: sdk.typechain.VToken__factory.connect(
                vToken,
                signerOrProvider
              ),
              vPool: sdk.typechain.IUniswapV3Pool__factory.connect(
                vPool,
                signerOrProvider
              ),
              vPoolWrapper: sdk.typechain.VPoolWrapper__factory.connect(
                vPoolWrapper,
                signerOrProvider
              ),
              creationBlockNumber: blockNumber,
            };
          }
        );
        poolsListForChain = await Promise.all(
          poolContracts.map(
            async ({ vToken, vPool, vPoolWrapper, creationBlockNumber }) => ({
              poolId: truncate(vToken.address),
              name: await vToken.name(),
              symbol: await vToken.symbol(),
              decimals: await vToken.decimals(),
              vTokenAddress: vToken.address,
              vPoolAddress: vPool.address,
              vPoolWrapperAddress: vPoolWrapper.address,
              creationBlockNumber,
            })
          )
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
    return new sdk.ArbiscanProvider(chainName, process.env.ARBISCAN_KEY);
  } catch {}
}
