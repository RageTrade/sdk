import { Web2ServerDataSource } from '../dist';

import { config } from 'dotenv';
config();

describe('web2 data source', () => {
  describe('getAccountIdsByAddress', () => {
    it('works', async () => {
      const ds = new Web2ServerDataSource('arbtest');

      const resp = await ds.getAccountIdsByAddress(
        '0xe1b8E0a8cC4a7e70061534dE6FFD504CB7cBe2df'
      );

      expect(resp).toEqual([0]);
    });
  });

  describe('findBlockByTimestamp', () => {
    it('works', async () => {
      const ds = new Web2ServerDataSource('arbtest');

      const resp = await ds.findBlockByTimestamp(1660048813);

      expect(resp).toEqual(14049177);
    });
  });
});
