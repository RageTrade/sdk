ethers = require('ethers');
provider = {
  mainnet: new global.ethers.getDefaultProvider(),
  arbtest: new ethers.providers.StaticJsonRpcProvider(
    'https://arb-rinkeby.g.alchemy.com/v2/gh1-tm4X9f0pxljEGsnFnPe693FZ-gim'
  ),
};
sdk = require('./');
c = {};
sdk.getContracts(provider.arbtest).then((cc) => {
  c = cc;
});
