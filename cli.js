#!/usr/bin/env node --experimental-repl-await
const repl = require('repl');
const ethers = require('ethers');

const mainnet = new ethers.getDefaultProvider();
const arbmain = new ethers.JsonRpcProvider(
  'https://arb-mainnet.g.alchemy.com/v2/gh1-tm4X9f0pxljEGsnFnPe693FZ-gim'
);
const arbgoerli = new ethers.JsonRpcProvider(
  'https://arb-goerli.g.alchemy.com/v2/gh1-tm4X9f0pxljEGsnFnPe693FZ-gim'
);

const state = {
  ...require('ethers-repl/loaders/ethers')(),
  ...require('ethers-repl/loaders/wallet')(),
  // ...require('ethers-repl/loaders/provider')(),
  ...require('ethers-repl/loaders/contract')(),
  mainnet,
  arbmain,
  arbgoerli,
  sdk: require('./'),
  ...require('./'),
  addressesOf: (obj) => Object.keys(obj).map((key) => [key, obj[key].address]),
};

const myRepl = repl.start('rage> ');
Object.assign(myRepl.context, state);

// mainnet
state.sdk.core.getContracts(arbmain).then((coreMain) => {
  const _state = { ...myRepl.context, coreMain };
  Object.assign(myRepl.context, _state);
});

state.sdk.tricryptoVault.getContracts(arbmain).then((vaultMain) => {
  const _state = { ...myRepl.context, vaultMain };
  Object.assign(myRepl.context, _state);
});

state.sdk.tokens.getContracts(arbmain).then((tokenMain) => {
  const _state = { ...myRepl.context, tokenMain };
  Object.assign(myRepl.context, _state);
});

// testnet
state.sdk.core.getContracts(arbgoerli).then((coreTest) => {
  const _state = { ...myRepl.context, coreTest };
  Object.assign(myRepl.context, _state);
});

state.sdk.tricryptoVault.getContracts(arbgoerli).then((vaultTest) => {
  const _state = { ...myRepl.context, vaultTest };
  Object.assign(myRepl.context, _state);
});

state.sdk.gmxVault.getContracts(arbgoerli).then((gmxTest) => {
  const _state = { ...myRepl.context, gmxTest };
  Object.assign(myRepl.context, _state);
});

state.sdk.tokens.getContracts(arbgoerli).then((tokenTest) => {
  const _state = { ...myRepl.context, tokenTest };
  Object.assign(myRepl.context, _state);
});

// arbgoerli
state.sdk.core.getContracts(arbgoerli).then((coreGo) => {
  const _state = { ...myRepl.context, coreGo };
  Object.assign(myRepl.context, _state);
});

state.sdk.tricryptoVault.getContracts(arbgoerli).then((vaultGo) => {
  const _state = { ...myRepl.context, vaultGo };
  Object.assign(myRepl.context, _state);
});

state.sdk.gmxVault.getContracts(arbgoerli).then((gmxGo) => {
  const _state = { ...myRepl.context, gmxGo };
  Object.assign(myRepl.context, _state);
});

state.sdk.tokens.getContracts(arbgoerli).then((tokenGo) => {
  const _state = { ...myRepl.context, tokenGo };
  Object.assign(myRepl.context, _state);
});

// # node -i -e "ethers = require('ethers'); p = new ethers.providers.StaticJsonRpcProvider('https://arb-rinkeby.g.alchemy.com/v2/gh1-tm4X9f0pxljEGsnFnPe693FZ-gim');sdk = require('./');"
// node -i -e "require('./cli.initializers.js')"
