import { FallbackDataSource, BaseDataSource } from '../dist';

import { config } from 'dotenv';
config();

class MockDataSource1 extends BaseDataSource {
  queries = 0;
  async getAccountIdsByAddress(_address: string): Promise<number[]> {
    this.queries++;
    return [1];
  }
}

class MockDataSource2 extends BaseDataSource {
  queries = 0;
  async getAccountIdsByAddress(_address: string): Promise<number[]> {
    this.queries++;
    return [2];
  }
}

class MockDataSourceFail extends BaseDataSource {
  queries = 0;
  async getAccountIdsByAddress(_address: string): Promise<number[]> {
    this.queries++;
    throw new Error('some issue');
  }
}

describe('fallback data source', () => {
  describe('quorum 1', () => {
    it('first req success', async () => {
      const ds1 = new MockDataSource1();

      const fds = new FallbackDataSource([ds1], { quorum: 1 });
      const resp = await fds.getAccountIdsByAddress('0x123');

      expect(resp).toEqual([1]);
      expect(ds1.queries).toEqual(1);
    });

    it('first req fail', async () => {
      const dsf = new MockDataSourceFail();
      const ds1 = new MockDataSource1();

      const fds = new FallbackDataSource([dsf, ds1], { quorum: 1 });
      const resp = await fds.getAccountIdsByAddress('0x123');

      expect(resp).toEqual([1]);
      expect(dsf.queries).toEqual(1);
      expect(ds1.queries).toEqual(1);
    });

    it('two providers both return diff value', async () => {
      const ds1 = new MockDataSource1();
      const ds2 = new MockDataSource2();

      const fds = new FallbackDataSource([ds1, ds2], { quorum: 1 });
      const resp = await fds.getAccountIdsByAddress('0x123');
      expect(resp).toEqual([1]);

      expect(ds1.queries).toEqual(1);
      expect(ds2.queries).toEqual(0);
    });

    it('three providers, returns first that works', async () => {
      const dsf = new MockDataSourceFail();
      const ds1 = new MockDataSource1();
      const ds2 = new MockDataSource2();

      const fds = new FallbackDataSource([dsf, ds1, ds2], { quorum: 1 });
      const resp = await fds.getAccountIdsByAddress('0x123');
      expect(resp).toEqual([1]);

      expect(dsf.queries).toEqual(1);
      expect(ds1.queries).toEqual(1);
      expect(ds2.queries).toEqual(0);
    });

    it('three providers, returns first', async () => {
      const ds1 = new MockDataSource1();
      const dsf = new MockDataSourceFail();
      const ds2 = new MockDataSource2();

      const fds = new FallbackDataSource([ds1, dsf, ds2], { quorum: 1 });
      const resp = await fds.getAccountIdsByAddress('0x123');
      expect(resp).toEqual([1]);

      expect(ds1.queries).toEqual(1);
      expect(dsf.queries).toEqual(0);
      expect(ds2.queries).toEqual(0);
    });

    it('all req fail', async () => {
      const dsfa = new MockDataSourceFail();
      const dsfb = new MockDataSourceFail();

      const fds = new FallbackDataSource([dsfa, dsfb], { quorum: 1 });
      try {
        await fds.getAccountIdsByAddress('0x123');
        throw new Error('should have thrown');
      } catch (e: any) {
        expect(e?.message.includes('Quorum')).toBe(true);
      }
    });
  });

  describe('quorum 2', () => {
    it('two sources', async () => {
      const ds1a = new MockDataSource1();
      const ds1b = new MockDataSource1();

      const fds = new FallbackDataSource([ds1a, ds1b], { quorum: 2 });
      const resp = await fds.getAccountIdsByAddress('0x123');
      expect(resp).toEqual([1]);

      expect(ds1a.queries).toEqual(1);
      expect(ds1b.queries).toEqual(1);
    });

    it('two sources', async () => {
      const ds1a = new MockDataSource1();
      const ds1b = new MockDataSource1();

      const fds = new FallbackDataSource([ds1a, ds1b], { quorum: 2 });
      const resp = await fds.getAccountIdsByAddress('0x123');
      expect(resp).toEqual([1]);

      expect(ds1a.queries).toEqual(1);
      expect(ds1b.queries).toEqual(1);
    });
  });
});
