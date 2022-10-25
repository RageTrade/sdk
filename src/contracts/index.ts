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
import { SignerOrProvider } from './common';

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

export async function getCoreContracts(signerOrProvider: SignerOrProvider) {
  warn('getCoreContracts is deprecated, please use core.getContracts');
  return core.getContracts(signerOrProvider);
}

export async function getTricryptoVaultContracts(
  signerOrProvider: SignerOrProvider
) {
  warn(
    'getTricryptoVaultContracts is deprecated, please use tricryptoVault.getContracts'
  );
  return tricryptoVault.getContracts(signerOrProvider);
}

export async function getGmxVaultContracts(signerOrProvider: SignerOrProvider) {
  warn('getGmxVaultContracts is deprecated, please use gmxVault.getContracts');
  return gmxVault.getContracts(signerOrProvider);
}

export async function getTokenContracts(signerOrProvider: SignerOrProvider) {
  warn('getTokenContracts is deprecated, please use tokens.getContracts');
  return tokens.getContracts(signerOrProvider);
}

export async function getUniswapContracts(signerOrProvider: SignerOrProvider) {
  warn('getUniswapContracts is deprecated, please use uniswap.getContracts');
  return uniswap.getContracts(signerOrProvider);
}
