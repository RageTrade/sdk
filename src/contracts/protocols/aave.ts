import { ContractRunner } from 'ethers';
import {
  IAToken__factory,
  IPoolAddressesProvider__factory,
} from '../../typechain/delta-neutral-gmx-vaults';
import { newError } from '../../utils/loggers';
import { getChainIdFromRunner, getNetworkName, NetworkName } from '../common';
import { getProvider } from '../providers';

export interface AaveAddresses {
  poolAddressProviderAddress: string;
  // usdc
  usdcATokenAddress: string;
  usdcVariableDebtTokenAddress: string;
  // usdt
  usdtATokenAddress: string;
  usdtVariableDebtTokenAddress: string;
  // wbtc
  wbtcATokenAddress: string;
  wbtcVariableDebtTokenAddress: string;
  // weth
  wethATokenAddress: string;
  wethVariableDebtTokenAddress: string;
}

export function getAddresses(
  networkNameOrChainId: NetworkName | number
): AaveAddresses {
  const networkName = getNetworkName(networkNameOrChainId);
  switch (networkName) {
    case 'arbmain':
    case 'mainnetfork':
      return {
        poolAddressProviderAddress:
          '0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb',
        // usdc
        usdcATokenAddress: '0x625E7708f30cA75bfd92586e17077590C60eb4cD',
        usdcVariableDebtTokenAddress:
          '0xFCCf3cAbbe80101232d343252614b6A3eE81C989',
        // usdt
        usdtATokenAddress: '0x6ab707Aca953eDAeFBc4fD23bA73294241490620',
        usdtVariableDebtTokenAddress:
          '0xfb00AC187a8Eb5AFAE4eACE434F493Eb62672df7',
        // wbtc
        wbtcATokenAddress: '0x078f358208685046a11C85e8ad32895DED33A249',
        wbtcVariableDebtTokenAddress:
          '0x92b42c66840C7AD907b4BF74879FF3eF7c529473',
        // weth
        wethATokenAddress: '0xe50fA9b3c56FfB159cB0FCA61F5c9D750e8128c8',
        wethVariableDebtTokenAddress:
          '0x0c84331e39d6658Cd6e6b9ba04736cC4c4734351',
      };
    case 'arbgoerli':
      return {
        poolAddressProviderAddress:
          '0xF8aa90E66B8BAe13f2e4aDe6104abAb8eeDaBfdc',
        // usdc
        usdcATokenAddress: '0x4de6918B9D2c953bb003168D64A49A6A189510D5',
        usdcVariableDebtTokenAddress:
          '0xED2c6669a19F76E1CCaE65ec121821228c3b31bD',
        // usdt
        usdtATokenAddress: '0x4c78955a00c4b2a623267eb68bec88DFCb4cb4C4',
        usdtVariableDebtTokenAddress:
          '0x0Ec8D5052Ce329198146167F2e6B0A2A58507EbA',
        // wbtc
        wbtcATokenAddress: '0x7Cc089eF07803A84Bb63C66d728A211fc9808eA6',
        wbtcVariableDebtTokenAddress:
          '0x3bf376701600ACAF865EBdf902Ef3b322BB433aE',
        // weth
        wethATokenAddress: '0x4f57EAA84fe40cC1eCaa77D3db3108A146c9a39B',
        wethVariableDebtTokenAddress:
          '0xf69Ff61eE59Cd1Fd191B094C957938C7Dd0F8c3c',
      };
    default:
      throw newError(`aave addresses not present for ${networkName} network`);
  }
}

export async function getContracts(runner: ContractRunner) {
  const chainId = await getChainIdFromRunner(runner);
  return getContractsSync(chainId, runner);
}

export function getContractsSync(
  networkNameOrChainId: NetworkName | number,
  runner?: ContractRunner
) {
  const addresses = getAddresses(getNetworkName(networkNameOrChainId));
  if (runner === undefined) {
    runner = getProvider(networkNameOrChainId);
  }
  return {
    poolAddressProvider: IPoolAddressesProvider__factory.connect(
      addresses.poolAddressProviderAddress,
      runner
    ),
    aUsdc: IAToken__factory.connect(addresses.usdcATokenAddress, runner),
    aUsdt: IAToken__factory.connect(addresses.usdtATokenAddress, runner),
    aWbtc: IAToken__factory.connect(addresses.wbtcATokenAddress, runner),
    aWeth: IAToken__factory.connect(addresses.wethATokenAddress, runner),
  };
}
