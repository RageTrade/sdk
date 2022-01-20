# Rage Trade SDK

## Reading data

```ts
import { StaticJsonRpcProvider } from '@ethersproject/providers';
import { getContracts } from '@ragetrade/sdk';

const provider = new StaticJsonRpcProvider('arbitrum testnet node url');

// in your code

const { clearingHouse } = await getContracts(provider);
const num = await clearingHouse.numAccounts();
console.log(num); // BigNumber { _hex: '0x05', _isBigNumber: true }
console.log(num.toNumber()); // 5
```

## Making transaction: create account

```ts
import { StaticJsonRpcProvider } from '@ethersproject/providers';
import { Wallet } from '@ethersproject/wallet';
import { getContracts, parseUsdc } from '@ragetrade/sdk';

const provider = new StaticJsonRpcProvider('arbitrum testnet node url');
const signer = new Wallet('private key', provider);

// creating account

const { clearingHouse } = await getContracts(signer);
const myAccountNum = await clearingHouse.callStatic.createAccount();
const tx = await clearingHouse.createAccount();
await tx.wait();
```

## Making transaction: add money to account

```ts
import { getContracts, formatUsdc, parseUsdc } from '@ragetrade/sdk';

const { clearingHouse, rBase } = await getContracts(signer);

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

# TSDX User Guide

Congrats! You just saved yourself hours of work by bootstrapping this project with TSDX. Let’s get you oriented with what’s here and how to use it.

> This TSDX setup is meant for developing libraries (not apps!) that can be published to NPM. If you’re looking to build a Node app, you could use `ts-node-dev`, plain `ts-node`, or simple `tsc`.

> If you’re new to TypeScript, checkout [this handy cheatsheet](https://devhints.io/typescript)

## Commands

TSDX scaffolds your new library inside `/src`.

To run TSDX, use:

```bash
npm start # or yarn start
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

To do a one-off build, use `npm run build` or `yarn build`.

To run tests, use `npm test` or `yarn test`.

## Configuration

Code quality is set up for you with `prettier`, `husky`, and `lint-staged`. Adjust the respective fields in `package.json` accordingly.

### Jest

Jest tests are set up to run with `npm test` or `yarn test`.

### Bundle Analysis

[`size-limit`](https://github.com/ai/size-limit) is set up to calculate the real cost of your library with `npm run size` and visualize the bundle with `npm run analyze`.

#### Setup Files

This is the folder structure we set up for you:

```txt
/src
  index.tsx       # EDIT THIS
/test
  blah.test.tsx   # EDIT THIS
.gitignore
package.json
README.md         # EDIT THIS
tsconfig.json
```

### Rollup

TSDX uses [Rollup](https://rollupjs.org) as a bundler and generates multiple rollup configs for various module formats and build settings. See [Optimizations](#optimizations) for details.

### TypeScript

`tsconfig.json` is set up to interpret `dom` and `esnext` types, as well as `react` for `jsx`. Adjust according to your needs.

## Continuous Integration

### GitHub Actions

Two actions are added by default:

- `main` which installs deps w/ cache, lints, tests, and builds on all pushes against a Node and OS matrix
- `size` which comments cost comparison of your library on every pull request using [`size-limit`](https://github.com/ai/size-limit)

## Optimizations

Please see the main `tsdx` [optimizations docs](https://github.com/palmerhq/tsdx#optimizations). In particular, know that you can take advantage of development-only optimizations:

```js
// ./types/index.d.ts
declare var __DEV__: boolean;

// inside your code...
if (__DEV__) {
  console.log('foo');
}
```

You can also choose to install and use [invariant](https://github.com/palmerhq/tsdx#invariant) and [warning](https://github.com/palmerhq/tsdx#warning) functions.

## Module Formats

CJS, ESModules, and UMD module formats are supported.

The appropriate paths are configured in `package.json` and `dist/index.js` accordingly. Please report if any issues are found.

## Named Exports

Per Palmer Group guidelines, [always use named exports.](https://github.com/palmerhq/typescript#exports) Code split inside your React app instead of your React library.

## Including Styles

There are many ways to ship styles, including with CSS-in-JS. TSDX has no opinion on this, configure how you like.

For vanilla CSS, you can include it at the root directory and add it to the `files` section in your `package.json`, so that it can be imported separately by your users and run through their bundler's loader.

## Publishing to NPM

We recommend using [np](https://github.com/sindresorhus/np).
