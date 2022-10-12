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
        const providerArbiscan = getArbiscanProvider(chainName);
        const { rageTradeFactory } = await core.getContracts(
          providerArbiscan ?? provider
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
    if (chainName === 'arbrinkeby' || chainName === 'arbtest') {
      throw new Error('some issue is there');
    }
    return new sdk.ArbiscanProvider(chainName, process.env.ARBISCAN_KEY);
  } catch {}
}

// function getProvider(chainName) {
//   try {
//     return new providers.AlchemyProvider(
//       chainName,
//       process.env.ALCHEMY_API_KEY
//     );
//   } catch {}

//   if (!process.env.ALCHEMY_KEY) {
//     throw new Error('Please provide ALCHEMY_KEY in .env');
//   }

//   try {
//     if (chainName === 'arbmain') {
//       return new providers.StaticJsonRpcProvider(
//         'https://arb-mainnet.g.alchemy.com/v2/' + process.env.ALCHEMY_KEY
//       );
//     } else if (chainName === 'arbtest') {
//       return new providers.StaticJsonRpcProvider(
//         'https://arb-rinkeby.g.alchemy.com/v2/' + process.env.ALCHEMY_KEY
//       );
//     } else if (chainName === 'arbgoerli') {
//       return new providers.StaticJsonRpcProvider(
//         'https://arb-rinkeby.g.alchemy.com/v2/' + process.env.ALCHEMY_KEY
//       );
//     } else {
//       return undefined;
//     }
//   } catch {}
// }
