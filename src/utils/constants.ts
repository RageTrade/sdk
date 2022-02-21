export interface DefaultPool {
  defaultPool: {
    vTokenAddress: string;
    vPoolAddress: string;
  };
}

export const ARBITRUM_ONE: DefaultPool = {
  defaultPool: {
    vTokenAddress: '',
    vPoolAddress: '',
  },
};

export const ARBITRUM_RINKEBY: DefaultPool = {
  defaultPool: {
    vTokenAddress: '0x47740811f53661d5fdfb9cc122eaa44d55467604',
    vPoolAddress: '0x89ec428218ab200e5e99d2953c8df1bc7bd947de',
  },
};
