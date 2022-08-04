export abstract class BaseDataSource {
  _isDataSource: boolean;
  constructor() {
    this._isDataSource = true;
  }

  getAccountIdsByAddress(_address: string): Promise<number[]> {
    throw new Error(
      `${this.constructor.name}.getAccountIdsByAddress Not implemented`
    );
  }
  getDeposits(_address: string) {
    throw new Error(`${this.constructor.name}.getDeposits Not implemented`);
  }
  getWithdrawals(_address: string) {
    throw new Error(`${this.constructor.name}.getWithdrawals Not implemented`);
  }
  findBlockByTimestamp(_timestamp: number): Promise<number> {
    throw new Error(
      `${this.constructor.name}.findBlockByTimestamp Not implemented`
    );
  }
  myPerformance(_address: string): Promise<number> {
    throw new Error(`${this.constructor.name}.myPerformance Not implemented`);
  }
  benchmarkPerformance(): Promise<number> {
    throw new Error(
      `${this.constructor.name}.benchmarkPerformance Not implemented`
    );
  }
}
