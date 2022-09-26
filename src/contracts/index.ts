import {
  Account__factory,
  ClearingHouse__factory,
  CurveYieldStrategy__factory,
  InsuranceFund__factory,
  IOracle__factory,
  ProxyAdmin__factory,
  RageTradeFactory__factory,
  SwapSimulator__factory,
  VaultPeriphery__factory,
  VPoolWrapper__factory,
  VQuote__factory,
  VToken__factory,
} from '../typechain';

export * from './common';
export * from './vaults';
export * from './protocols';

export function getEthersInterfaces() {
  return [
    Account__factory.createInterface(),
    ClearingHouse__factory.createInterface(),
    InsuranceFund__factory.createInterface(),
    IOracle__factory.createInterface(),
    ProxyAdmin__factory.createInterface(),
    RageTradeFactory__factory.createInterface(),
    VQuote__factory.createInterface(),
    VToken__factory.createInterface(),
    VPoolWrapper__factory.createInterface(),
    SwapSimulator__factory.createInterface(),
    CurveYieldStrategy__factory.createInterface(),
    VaultPeriphery__factory.createInterface(),
  ];
}
