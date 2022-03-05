/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from 'ethers';
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from '@nomiclabs/hardhat-ethers/types';

import * as Contracts from '.';

declare module 'hardhat/types/runtime' {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: 'ArbAggregator',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ArbAggregator__factory>;
    getContractFactory(
      name: 'ArbGasInfo',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ArbGasInfo__factory>;
    getContractFactory(
      name: 'ArbSys',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ArbSys__factory>;
    getContractFactory(
      name: 'AggregatorV3Interface',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AggregatorV3Interface__factory>;
    getContractFactory(
      name: 'ERC20Upgradeable',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Upgradeable__factory>;
    getContractFactory(
      name: 'IERC20MetadataUpgradeable',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20MetadataUpgradeable__factory>;
    getContractFactory(
      name: 'IERC20Upgradeable',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Upgradeable__factory>;
    getContractFactory(
      name: 'AccessControl',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccessControl__factory>;
    getContractFactory(
      name: 'AccessControlEnumerable',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccessControlEnumerable__factory>;
    getContractFactory(
      name: 'IAccessControl',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAccessControl__factory>;
    getContractFactory(
      name: 'IAccessControlEnumerable',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAccessControlEnumerable__factory>;
    getContractFactory(
      name: 'Ownable',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: 'IBeacon',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBeacon__factory>;
    getContractFactory(
      name: 'ERC1967Proxy',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1967Proxy__factory>;
    getContractFactory(
      name: 'ERC1967Upgrade',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1967Upgrade__factory>;
    getContractFactory(
      name: 'Proxy',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Proxy__factory>;
    getContractFactory(
      name: 'ProxyAdmin',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ProxyAdmin__factory>;
    getContractFactory(
      name: 'TransparentUpgradeableProxy',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TransparentUpgradeableProxy__factory>;
    getContractFactory(
      name: 'Pausable',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Pausable__factory>;
    getContractFactory(
      name: 'ERC20',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: 'ERC20Burnable',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Burnable__factory>;
    getContractFactory(
      name: 'ERC20Pausable',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Pausable__factory>;
    getContractFactory(
      name: 'IERC20Metadata',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: 'IERC20',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: 'ERC20PresetMinterPauser',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20PresetMinterPauser__factory>;
    getContractFactory(
      name: 'ERC165',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: 'IERC165',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: 'IUniswapV3MintCallback',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3MintCallback__factory>;
    getContractFactory(
      name: 'IUniswapV3SwapCallback',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3SwapCallback__factory>;
    getContractFactory(
      name: 'IUniswapV3Factory',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3Factory__factory>;
    getContractFactory(
      name: 'IUniswapV3Pool',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3Pool__factory>;
    getContractFactory(
      name: 'IUniswapV3PoolDeployer',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolDeployer__factory>;
    getContractFactory(
      name: 'IUniswapV3PoolActions',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolActions__factory>;
    getContractFactory(
      name: 'IUniswapV3PoolDerivedState',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolDerivedState__factory>;
    getContractFactory(
      name: 'IUniswapV3PoolEvents',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolEvents__factory>;
    getContractFactory(
      name: 'IUniswapV3PoolImmutables',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolImmutables__factory>;
    getContractFactory(
      name: 'IUniswapV3PoolOwnerActions',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolOwnerActions__factory>;
    getContractFactory(
      name: 'IUniswapV3PoolState',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolState__factory>;
    getContractFactory(
      name: 'IMulticall',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IMulticall__factory>;
    getContractFactory(
      name: 'IClearingHouseActions',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IClearingHouseActions__factory>;
    getContractFactory(
      name: 'IClearingHouseCustomErrors',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IClearingHouseCustomErrors__factory>;
    getContractFactory(
      name: 'IClearingHouseEvents',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IClearingHouseEvents__factory>;
    getContractFactory(
      name: 'IClearingHouseOwnerActions',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IClearingHouseOwnerActions__factory>;
    getContractFactory(
      name: 'IClearingHouseSystemActions',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IClearingHouseSystemActions__factory>;
    getContractFactory(
      name: 'IClearingHouseView',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IClearingHouseView__factory>;
    getContractFactory(
      name: 'IClearingHouse',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IClearingHouse__factory>;
    getContractFactory(
      name: 'IGovernable',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IGovernable__factory>;
    getContractFactory(
      name: 'IInsuranceFund',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IInsuranceFund__factory>;
    getContractFactory(
      name: 'IOracle',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IOracle__factory>;
    getContractFactory(
      name: 'IVBase',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IVBase__factory>;
    getContractFactory(
      name: 'IVPoolWrapper',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IVPoolWrapper__factory>;
    getContractFactory(
      name: 'IVToken',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IVToken__factory>;
    getContractFactory(
      name: 'Account',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Account__factory>;
    getContractFactory(
      name: 'Bisection',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Bisection__factory>;
    getContractFactory(
      name: 'Calldata',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Calldata__factory>;
    getContractFactory(
      name: 'FundingPayment',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FundingPayment__factory>;
    getContractFactory(
      name: 'LiquidityPosition',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LiquidityPosition__factory>;
    getContractFactory(
      name: 'LiquidityPositionSet',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LiquidityPositionSet__factory>;
    getContractFactory(
      name: 'PriceMath',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PriceMath__factory>;
    getContractFactory(
      name: 'SafeCast',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SafeCast__factory>;
    getContractFactory(
      name: 'Uint32L8ArrayLib',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Uint32L8ArrayLib__factory>;
    getContractFactory(
      name: 'Uint48L5ArrayLib',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Uint48L5ArrayLib__factory>;
    getContractFactory(
      name: 'UniswapV3PoolHelper',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UniswapV3PoolHelper__factory>;
    getContractFactory(
      name: 'VTokenPosition',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VTokenPosition__factory>;
    getContractFactory(
      name: 'VTokenPositionSet',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VTokenPositionSet__factory>;
    getContractFactory(
      name: 'BaseOracle',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BaseOracle__factory>;
    getContractFactory(
      name: 'ChainlinkOracle',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ChainlinkOracle__factory>;
    getContractFactory(
      name: 'ClearingHouse',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ClearingHouse__factory>;
    getContractFactory(
      name: 'ClearingHouseArbitrum',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ClearingHouseArbitrum__factory>;
    getContractFactory(
      name: 'ClearingHouseDeployer',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ClearingHouseDeployer__factory>;
    getContractFactory(
      name: 'ClearingHouseEthereum',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ClearingHouseEthereum__factory>;
    getContractFactory(
      name: 'ClearingHouseStorage',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ClearingHouseStorage__factory>;
    getContractFactory(
      name: 'ClearingHouseView',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ClearingHouseView__factory>;
    getContractFactory(
      name: 'InsuranceFund',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.InsuranceFund__factory>;
    getContractFactory(
      name: 'InsuranceFundDeployer',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.InsuranceFundDeployer__factory>;
    getContractFactory(
      name: 'RageTradeFactory',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RageTradeFactory__factory>;
    getContractFactory(
      name: 'VBase',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VBase__factory>;
    getContractFactory(
      name: 'VToken',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VToken__factory>;
    getContractFactory(
      name: 'VPoolWrapper',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VPoolWrapper__factory>;
    getContractFactory(
      name: 'VPoolWrapperDeployer',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VPoolWrapperDeployer__factory>;
    getContractFactory(
      name: 'AccountTest',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccountTest__factory>;
    getContractFactory(
      name: 'ArbitrumFixFeeTest',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ArbitrumFixFeeTest__factory>;
    getContractFactory(
      name: 'BisectionTest',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BisectionTest__factory>;
    getContractFactory(
      name: 'CalldataTest',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CalldataTest__factory>;
    getContractFactory(
      name: 'ClearingHouseTest',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ClearingHouseTest__factory>;
    getContractFactory(
      name: 'DepositTokenSetTest',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DepositTokenSetTest__factory>;
    getContractFactory(
      name: 'ExtsloadTest',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ExtsloadTest__factory>;
    getContractFactory(
      name: 'FundingPaymentTest',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FundingPaymentTest__factory>;
    getContractFactory(
      name: 'GoodAddressDeployerTest',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GoodAddressDeployerTest__factory>;
    getContractFactory(
      name: 'LiquidityPositionSetTest',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LiquidityPositionSetTest__factory>;
    getContractFactory(
      name: 'LiquidityPositionTest',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LiquidityPositionTest__factory>;
    getContractFactory(
      name: 'AccountProtocolInfoMock',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccountProtocolInfoMock__factory>;
    getContractFactory(
      name: 'ClearingHouseDummy',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ClearingHouseDummy__factory>;
    getContractFactory(
      name: 'MockAggregatorV3',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockAggregatorV3__factory>;
    getContractFactory(
      name: 'OracleMock',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OracleMock__factory>;
    getContractFactory(
      name: 'RealBaseMock',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RealBaseMock__factory>;
    getContractFactory(
      name: 'RealTokenMock',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RealTokenMock__factory>;
    getContractFactory(
      name: 'RealTokenMockDecimals',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RealTokenMockDecimals__factory>;
    getContractFactory(
      name: 'UniswapV3PoolMock',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UniswapV3PoolMock__factory>;
    getContractFactory(
      name: 'VPoolWrapperMock',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VPoolWrapperMock__factory>;
    getContractFactory(
      name: 'VPoolWrapperMock2',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VPoolWrapperMock2__factory>;
    getContractFactory(
      name: 'VPoolWrapperMockRealistic',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VPoolWrapperMockRealistic__factory>;
    getContractFactory(
      name: 'PriceMathTest',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PriceMathTest__factory>;
    getContractFactory(
      name: 'SignedFullMathTest',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SignedFullMathTest__factory>;
    getContractFactory(
      name: 'SimulateSwapTest',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SimulateSwapTest__factory>;
    getContractFactory(
      name: 'TickTest',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TickTest__factory>;
    getContractFactory(
      name: 'Uint32L8ArrayTest',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Uint32L8ArrayTest__factory>;
    getContractFactory(
      name: 'Uint48L5ArrayTest',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Uint48L5ArrayTest__factory>;
    getContractFactory(
      name: 'Uint48Test',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Uint48Test__factory>;
    getContractFactory(
      name: 'VTokenPositionSetTest',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VTokenPositionSetTest__factory>;
    getContractFactory(
      name: 'VTokenPositionSetTest2',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VTokenPositionSetTest2__factory>;
    getContractFactory(
      name: 'VTokenPositionTest',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VTokenPositionTest__factory>;
    getContractFactory(
      name: 'Extsload',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Extsload__factory>;
    getContractFactory(
      name: 'Governable',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Governable__factory>;
    getContractFactory(
      name: 'Multicall',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Multicall__factory>;
    getContractFactory(
      name: 'OptimisticGasUsedClaim',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OptimisticGasUsedClaim__factory>;
    getContractFactory(
      name: 'ProxyAdminDeployer',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ProxyAdminDeployer__factory>;
    getContractFactory(
      name: 'SwapSimulator',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SwapSimulator__factory>;
    getContractFactory(
      name: 'TxGasPriceLimit',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TxGasPriceLimit__factory>;
    getContractFactory(
      name: 'UniswapV3Pool',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UniswapV3Pool__factory>;
    getContractFactory(
      name: 'IUniswapV3PoolDeployer',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolDeployer__factory>;

    getContractAt(
      name: 'ArbAggregator',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ArbAggregator>;
    getContractAt(
      name: 'ArbGasInfo',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ArbGasInfo>;
    getContractAt(
      name: 'ArbSys',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ArbSys>;
    getContractAt(
      name: 'AggregatorV3Interface',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AggregatorV3Interface>;
    getContractAt(
      name: 'ERC20Upgradeable',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Upgradeable>;
    getContractAt(
      name: 'IERC20MetadataUpgradeable',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20MetadataUpgradeable>;
    getContractAt(
      name: 'IERC20Upgradeable',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Upgradeable>;
    getContractAt(
      name: 'AccessControl',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AccessControl>;
    getContractAt(
      name: 'AccessControlEnumerable',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AccessControlEnumerable>;
    getContractAt(
      name: 'IAccessControl',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAccessControl>;
    getContractAt(
      name: 'IAccessControlEnumerable',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAccessControlEnumerable>;
    getContractAt(
      name: 'Ownable',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: 'IBeacon',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBeacon>;
    getContractAt(
      name: 'ERC1967Proxy',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1967Proxy>;
    getContractAt(
      name: 'ERC1967Upgrade',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1967Upgrade>;
    getContractAt(
      name: 'Proxy',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Proxy>;
    getContractAt(
      name: 'ProxyAdmin',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ProxyAdmin>;
    getContractAt(
      name: 'TransparentUpgradeableProxy',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TransparentUpgradeableProxy>;
    getContractAt(
      name: 'Pausable',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Pausable>;
    getContractAt(
      name: 'ERC20',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: 'ERC20Burnable',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Burnable>;
    getContractAt(
      name: 'ERC20Pausable',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Pausable>;
    getContractAt(
      name: 'IERC20Metadata',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: 'IERC20',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: 'ERC20PresetMinterPauser',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20PresetMinterPauser>;
    getContractAt(
      name: 'ERC165',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: 'IERC165',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: 'IUniswapV3MintCallback',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3MintCallback>;
    getContractAt(
      name: 'IUniswapV3SwapCallback',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3SwapCallback>;
    getContractAt(
      name: 'IUniswapV3Factory',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3Factory>;
    getContractAt(
      name: 'IUniswapV3Pool',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3Pool>;
    getContractAt(
      name: 'IUniswapV3PoolDeployer',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3PoolDeployer>;
    getContractAt(
      name: 'IUniswapV3PoolActions',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3PoolActions>;
    getContractAt(
      name: 'IUniswapV3PoolDerivedState',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3PoolDerivedState>;
    getContractAt(
      name: 'IUniswapV3PoolEvents',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3PoolEvents>;
    getContractAt(
      name: 'IUniswapV3PoolImmutables',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3PoolImmutables>;
    getContractAt(
      name: 'IUniswapV3PoolOwnerActions',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3PoolOwnerActions>;
    getContractAt(
      name: 'IUniswapV3PoolState',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3PoolState>;
    getContractAt(
      name: 'IMulticall',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IMulticall>;
    getContractAt(
      name: 'IClearingHouseActions',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IClearingHouseActions>;
    getContractAt(
      name: 'IClearingHouseCustomErrors',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IClearingHouseCustomErrors>;
    getContractAt(
      name: 'IClearingHouseEvents',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IClearingHouseEvents>;
    getContractAt(
      name: 'IClearingHouseOwnerActions',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IClearingHouseOwnerActions>;
    getContractAt(
      name: 'IClearingHouseSystemActions',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IClearingHouseSystemActions>;
    getContractAt(
      name: 'IClearingHouseView',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IClearingHouseView>;
    getContractAt(
      name: 'IClearingHouse',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IClearingHouse>;
    getContractAt(
      name: 'IGovernable',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IGovernable>;
    getContractAt(
      name: 'IInsuranceFund',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IInsuranceFund>;
    getContractAt(
      name: 'IOracle',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IOracle>;
    getContractAt(
      name: 'IVBase',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IVBase>;
    getContractAt(
      name: 'IVPoolWrapper',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IVPoolWrapper>;
    getContractAt(
      name: 'IVToken',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IVToken>;
    getContractAt(
      name: 'Account',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Account>;
    getContractAt(
      name: 'Bisection',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Bisection>;
    getContractAt(
      name: 'Calldata',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Calldata>;
    getContractAt(
      name: 'FundingPayment',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FundingPayment>;
    getContractAt(
      name: 'LiquidityPosition',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LiquidityPosition>;
    getContractAt(
      name: 'LiquidityPositionSet',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LiquidityPositionSet>;
    getContractAt(
      name: 'PriceMath',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PriceMath>;
    getContractAt(
      name: 'SafeCast',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SafeCast>;
    getContractAt(
      name: 'Uint32L8ArrayLib',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Uint32L8ArrayLib>;
    getContractAt(
      name: 'Uint48L5ArrayLib',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Uint48L5ArrayLib>;
    getContractAt(
      name: 'UniswapV3PoolHelper',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.UniswapV3PoolHelper>;
    getContractAt(
      name: 'VTokenPosition',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.VTokenPosition>;
    getContractAt(
      name: 'VTokenPositionSet',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.VTokenPositionSet>;
    getContractAt(
      name: 'BaseOracle',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BaseOracle>;
    getContractAt(
      name: 'ChainlinkOracle',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ChainlinkOracle>;
    getContractAt(
      name: 'ClearingHouse',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ClearingHouse>;
    getContractAt(
      name: 'ClearingHouseArbitrum',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ClearingHouseArbitrum>;
    getContractAt(
      name: 'ClearingHouseDeployer',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ClearingHouseDeployer>;
    getContractAt(
      name: 'ClearingHouseEthereum',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ClearingHouseEthereum>;
    getContractAt(
      name: 'ClearingHouseStorage',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ClearingHouseStorage>;
    getContractAt(
      name: 'ClearingHouseView',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ClearingHouseView>;
    getContractAt(
      name: 'InsuranceFund',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.InsuranceFund>;
    getContractAt(
      name: 'InsuranceFundDeployer',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.InsuranceFundDeployer>;
    getContractAt(
      name: 'RageTradeFactory',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.RageTradeFactory>;
    getContractAt(
      name: 'VBase',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.VBase>;
    getContractAt(
      name: 'VToken',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.VToken>;
    getContractAt(
      name: 'VPoolWrapper',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.VPoolWrapper>;
    getContractAt(
      name: 'VPoolWrapperDeployer',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.VPoolWrapperDeployer>;
    getContractAt(
      name: 'AccountTest',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AccountTest>;
    getContractAt(
      name: 'ArbitrumFixFeeTest',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ArbitrumFixFeeTest>;
    getContractAt(
      name: 'BisectionTest',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BisectionTest>;
    getContractAt(
      name: 'CalldataTest',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CalldataTest>;
    getContractAt(
      name: 'ClearingHouseTest',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ClearingHouseTest>;
    getContractAt(
      name: 'DepositTokenSetTest',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DepositTokenSetTest>;
    getContractAt(
      name: 'ExtsloadTest',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ExtsloadTest>;
    getContractAt(
      name: 'FundingPaymentTest',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FundingPaymentTest>;
    getContractAt(
      name: 'GoodAddressDeployerTest',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GoodAddressDeployerTest>;
    getContractAt(
      name: 'LiquidityPositionSetTest',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LiquidityPositionSetTest>;
    getContractAt(
      name: 'LiquidityPositionTest',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LiquidityPositionTest>;
    getContractAt(
      name: 'AccountProtocolInfoMock',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AccountProtocolInfoMock>;
    getContractAt(
      name: 'ClearingHouseDummy',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ClearingHouseDummy>;
    getContractAt(
      name: 'MockAggregatorV3',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockAggregatorV3>;
    getContractAt(
      name: 'OracleMock',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OracleMock>;
    getContractAt(
      name: 'RealBaseMock',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.RealBaseMock>;
    getContractAt(
      name: 'RealTokenMock',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.RealTokenMock>;
    getContractAt(
      name: 'RealTokenMockDecimals',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.RealTokenMockDecimals>;
    getContractAt(
      name: 'UniswapV3PoolMock',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.UniswapV3PoolMock>;
    getContractAt(
      name: 'VPoolWrapperMock',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.VPoolWrapperMock>;
    getContractAt(
      name: 'VPoolWrapperMock2',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.VPoolWrapperMock2>;
    getContractAt(
      name: 'VPoolWrapperMockRealistic',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.VPoolWrapperMockRealistic>;
    getContractAt(
      name: 'PriceMathTest',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PriceMathTest>;
    getContractAt(
      name: 'SignedFullMathTest',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SignedFullMathTest>;
    getContractAt(
      name: 'SimulateSwapTest',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SimulateSwapTest>;
    getContractAt(
      name: 'TickTest',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TickTest>;
    getContractAt(
      name: 'Uint32L8ArrayTest',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Uint32L8ArrayTest>;
    getContractAt(
      name: 'Uint48L5ArrayTest',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Uint48L5ArrayTest>;
    getContractAt(
      name: 'Uint48Test',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Uint48Test>;
    getContractAt(
      name: 'VTokenPositionSetTest',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.VTokenPositionSetTest>;
    getContractAt(
      name: 'VTokenPositionSetTest2',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.VTokenPositionSetTest2>;
    getContractAt(
      name: 'VTokenPositionTest',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.VTokenPositionTest>;
    getContractAt(
      name: 'Extsload',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Extsload>;
    getContractAt(
      name: 'Governable',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Governable>;
    getContractAt(
      name: 'Multicall',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Multicall>;
    getContractAt(
      name: 'OptimisticGasUsedClaim',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OptimisticGasUsedClaim>;
    getContractAt(
      name: 'ProxyAdminDeployer',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ProxyAdminDeployer>;
    getContractAt(
      name: 'SwapSimulator',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SwapSimulator>;
    getContractAt(
      name: 'TxGasPriceLimit',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TxGasPriceLimit>;
    getContractAt(
      name: 'UniswapV3Pool',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.UniswapV3Pool>;
    getContractAt(
      name: 'IUniswapV3PoolDeployer',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3PoolDeployer>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
