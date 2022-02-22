declare module 'default-pools.json' {
  mainnet: DefaultAddressesForChain;
  rinkeby: DefaultAddressesForChain;
  arbmain: DefaultAddressesForChain;
  arbtest: DefaultAddressesForChain;
  opmain: DefaultAddressesForChain;
  optest: DefaultAddressesForChain;
}

export interface DefaultAddressesForChain {
  vTokenAddress: string | undefined;
  vPoolAddress: string | undefined;
  vPoolWrapperAddress: string | undefined;
}
