# Rage Trade SDK

## Quick debugging

```sh
npx ragetrade
```

Opens a repl with the rage trade sdk loaded. Also the contracts are exposed as global variables.

```sh
ragetrade> sdk.fromQ128('0x0140000000000000000000000000000000')
1.25
ragetrade> await sdk.sqrtPriceX96ToPrice('0x03e08db11fa9d95156495b', 6, 18)
3500
```

## Reading data

```ts
import { StaticJsonRpcProvider } from '@ethersproject/providers';
import { getCoreContracts } from '@ragetrade/sdk';

const provider = new StaticJsonRpcProvider('arbitrum testnet node url');

// in your code

const { clearingHouse } = await getCoreContracts(provider);
const num = await clearingHouse.numAccounts();
console.log(num); // BigNumber { _hex: '0x05', _isBigNumber: true }
console.log(num.toNumber()); // 5
```

## Using Fallback Data Sources

```ts
import { getDefaultDataSourceSync, pools, VaultName } from '@ragetrade/sdk';
const ds = getDefaultDataSourceSync(
  'arbmain' /* optionally pass in ethers provider or array of ethers providers or data sources */
);

const prices = await ds.getPrices(pools.arbmain[0].poolId);
// { realPrice: number; virtualPrice: number; realTwapPrice: number; virtualTwapPrice: number; }
const vaultInfo = await ds.getVaultInfo('tricrypto' /* as VaultName */);
// { totalSupply: number; totalAssets: number; assetPrice: number; sharePrice: number; depositCap: number; vaultMarketValue: number; }
```

## Making transaction: create account

```ts
import { StaticJsonRpcProvider } from '@ethersproject/providers';
import { Wallet } from '@ethersproject/wallet';
import { getCoreContracts, parseUsdc } from '@ragetrade/sdk';

const provider = new StaticJsonRpcProvider('arbitrum testnet node url');
const signer = new Wallet('private key', provider);

// creating account

const { clearingHouse } = await getCoreContracts(signer);
const myAccountNum = await clearingHouse.callStatic.createAccount();
const tx = await clearingHouse.createAccount();
await tx.wait();
```

## Making transaction: add money to account

```ts
import { getCoreContracts, formatUsdc, parseUsdc } from '@ragetrade/sdk';

const { clearingHouse, rBase } = await getCoreContracts(signer);

const balance = await rBase.balanceOf(signer.address);
console.log(balance); // BigNumber { _hex: '0x05f5e100', _isBigNumber: true }
console.log(formatUsdc(balance)); // 100.0

const accountNo = 3;
const amount = parseUsdc('10'); // BigNumber { _hex: '0x989680', _isBigNumber: true }
const tx1 = await rBase.approve(clearingHouse.address, amount);
await tx1.wait();
const tx2 = await clearingHouse.addMargin(accountNo, amount);
const collateralTokenId = '0x' + c.rBase.address.slice(34, 42);
await c.clearingHouse.addMargin(3, collateralTokenId, amount);
await tx2.wait();
```

## Initializing new pool

```ts
await rageTradeFactory.connect(w).initializePool({
  deployVTokenParams: {
    vTokenName: 'vWETH2',
    vTokenSymbol: 'vWETH2',
    rTokenDecimals: 18,
  },
  rageTradePoolInitialSettings: {
    initialMarginRatio: 20000,
    maintainanceMarginRatio: 10000,
    twapDuration: 60,
    whitelisted: false,
    oracle: '0x7DC0A2fE40a77DD435B0AE260320E5C58c12557a',
  },
  liquidityFeePips: 500,
  protocolFeePips: 500,
});
```

## Timelock

```ts
import { getCoreContracts, generateTimelockSchedule } from '@ragetrade/sdk';

const { clearingHouse, timelock } = await getCoreContracts(signer);

// single
const schedule = await generateTimelockSchedule(timelock, [
  clearingHouse.populateTransaction.withdrawProtocolFee(),
]);

// batch
const schedule = await generateTimelockSchedule(timelock, [
  clearingHouse.populateTransaction.withdrawProtocolFee(),
  clearingHouse.populateTransaction.updateProtocolSettings(...args),
]);
```
