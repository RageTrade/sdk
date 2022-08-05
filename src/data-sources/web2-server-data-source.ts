import { ethers } from 'ethers';

import { BaseDataSource } from './base-data-source';

export class Web2ServerDataSource extends BaseDataSource {
  _baseUrl = 'https://apis.rage.trade';
  _network: 'arbmain' | 'arbtest';

  constructor(network: 'arbmain' | 'arbtest') {
    super();
    this._network = network;
  }

  async getAccountIdsByAddress(address: string): Promise<number[]> {
    const response = await ethers.utils.fetchJson(
      `${this._baseUrl}/data/${this._network}/get-account-ids-by-address?address=${address}`
    );
    return response?.result ?? response;
  }
}
