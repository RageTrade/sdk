declare module 'pools.json' {
  defaultPool: {
    mainnet: PoolInfo | undefined;
    rinkeby: PoolInfo | undefined;
    arbmain: PoolInfo | undefined;
    arbtest: PoolInfo | undefined;
    opmain: PoolInfo | undefined;
    optest: PoolInfo | undefined;
  }
  poolsList: {
    mainnet: PoolInfoArray;
    rinkeby: PoolInfoArray;
    arbmain: PoolInfoArray;
    arbtest: PoolInfoArray;
    opmain: PoolInfoArray;
    optest: PoolInfoArray;
  }
}

export type PoolInfoArray = Array<PoolInfo>;

export interface PoolInfo {
  name: string;
  symbol: string;
  decimals: number;
  vTokenAddress: string;
  vPoolAddress: string;
  vPoolWrapperAddress: string;
}
