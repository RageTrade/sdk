import { ContractRunner } from 'ethers';
import {
  Account__factory,
  ClearingHouse__factory,
  CurveYieldStrategy__factory,
  GMXBatchingManager__factory,
  GMXYieldStrategy__factory,
  InsuranceFund__factory,
  IOracle__factory,
  ProxyAdmin__factory,
  RageTradeFactory__factory,
  SwapSimulator__factory,
  VaultPeriphery__factory,
  VPoolWrapper__factory,
  VQuote__factory,
  VToken__factory,
  DnGmxSeniorVault__factory,
  DnGmxJuniorVault__factory,
  DnGmxBatchingManager__factory,
} from '../typechain';

import { warn } from '../utils/loggers';

export * from './common';
export * from './vaults';
export * from './protocols';
export * as protocols from './protocols';
export * from './providers';

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
    GMXYieldStrategy__factory.createInterface(),
    GMXBatchingManager__factory.createInterface(),
    DnGmxBatchingManager__factory.createInterface(),
    DnGmxJuniorVault__factory.createInterface(),
    DnGmxSeniorVault__factory.createInterface(),
  ];
}

import { core, tricryptoVault, gmxVault, tokens, uniswap } from './protocols';

export async function getCoreContracts(runner: ContractRunner) {
  warn('getCoreContracts is deprecated, please use core.getContracts');
  return core.getContracts(runner);
}

export async function getTricryptoVaultContracts(runner: ContractRunner) {
  warn(
    'getTricryptoVaultContracts is deprecated, please use tricryptoVault.getContracts'
  );
  return tricryptoVault.getContracts(runner);
}

export async function getGmxVaultContracts(runner: ContractRunner) {
  warn('getGmxVaultContracts is deprecated, please use gmxVault.getContracts');
  return gmxVault.getContracts(runner);
}

export async function getTokenContracts(runner: ContractRunner) {
  warn('getTokenContracts is deprecated, please use tokens.getContracts');
  return tokens.getContracts(runner);
}

export async function getUniswapContracts(runner: ContractRunner) {
  warn('getUniswapContracts is deprecated, please use uniswap.getContracts');
  return uniswap.getContracts(runner);
}
