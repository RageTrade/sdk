#!/usr/bin/env node --experimental-repl-await
const repl = require('repl');
const ethers = require('ethers');

const mainnet = new ethers.getDefaultProvider();
const arbtest = new ethers.providers.StaticJsonRpcProvider(
  'https://arb-rinkeby.g.alchemy.com/v2/gh1-tm4X9f0pxljEGsnFnPe693FZ-gim'
);

const state = {
  ...require('ethers-repl/loaders/ethers')(),
  ...require('ethers-repl/loaders/wallet')(),
  ...require('ethers-repl/loaders/provider')(),
  ...require('ethers-repl/loaders/contract')(),
  mainnet,
  arbtest,
  sdk: require('./'),
  c: { c: {} },
};

state.sdk.getContracts(arbtest).then((cc) => {
  state.c.c = cc;
});

const myRepl = repl.start('ragetrade> ');

Object.assign(myRepl.context, state);

// # node -i -e "ethers = require('ethers'); p = new ethers.providers.StaticJsonRpcProvider('https://arb-rinkeby.g.alchemy.com/v2/gh1-tm4X9f0pxljEGsnFnPe693FZ-gim');sdk = require('./');"
// node -i -e "require('./cli.initializers.js')"
