#!/usr/bin/env node --experimental-repl-await
const repl = require('repl');
const ethers = require('ethers');

const mainnet = new ethers.getDefaultProvider();
const arbmain = new ethers.providers.StaticJsonRpcProvider(
  'https://arb-mainnet.g.alchemy.com/v2/gh1-tm4X9f0pxljEGsnFnPe693FZ-gim'
);
const arbtest = new ethers.providers.StaticJsonRpcProvider(
  'https://arb-rinkeby.g.alchemy.com/v2/gh1-tm4X9f0pxljEGsnFnPe693FZ-gim'
);

const state = {
  ...require('ethers-repl/loaders/ethers')(),
  ...require('ethers-repl/loaders/wallet')(),
  ...require('ethers-repl/loaders/provider')(),
  ...require('ethers-repl/loaders/contract')(),
  mainnet,
  arbmain,
  arbtest,
  sdk: require('./'),
  ...require('./'),
};

const myRepl = repl.start('rage> ');
Object.assign(myRepl.context, state);

// mainnet
state.sdk.getContracts(arbmain).then((coreMain) => {
  const _state = { ...myRepl.context, coreMain };
  Object.assign(myRepl.context, _state);
});

state.sdk.getVaultContracts(arbmain).then((vaultMain) => {
  const _state = { ...myRepl.context, vaultMain };
  Object.assign(myRepl.context, _state);
});

state.sdk.getTokenContracts(arbmain).then((tokenMain) => {
  const _state = { ...myRepl.context, tokenMain };
  Object.assign(myRepl.context, _state);
});

// testnet
state.sdk.getContracts(arbtest).then((coreTest) => {
  const _state = { ...myRepl.context, coreTest };
  Object.assign(myRepl.context, _state);
});

state.sdk.getVaultContracts(arbtest).then((vaultTest) => {
  const _state = { ...myRepl.context, vaultTest };
  Object.assign(myRepl.context, _state);
});

state.sdk.getGmxVaultContracts(arbtest).then((gmxTest) => {
  const _state = { ...myRepl.context, gmxTest };
  Object.assign(myRepl.context, _state);
});

state.sdk.getTokenContracts(arbtest).then((tokenTest) => {
  const _state = { ...myRepl.context, tokenTest };
  Object.assign(myRepl.context, _state);
});

// # node -i -e "ethers = require('ethers'); p = new ethers.providers.StaticJsonRpcProvider('https://arb-rinkeby.g.alchemy.com/v2/gh1-tm4X9f0pxljEGsnFnPe693FZ-gim');sdk = require('./');"
// node -i -e "require('./cli.initializers.js')"
