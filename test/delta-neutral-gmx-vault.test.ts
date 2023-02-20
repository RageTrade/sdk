import { ethers } from 'ethers';
import { hexStripZeros, hexZeroPad } from 'ethers/lib/utils';
import * as sdk from '../';

describe('delta neutral gmx vaults', () => {
  beforeEach(async () => {});

  describe('#getContracts', () => {
    const networkNames: sdk.NetworkName[] = ['arbmain', 'arbgoerli'];
    for (const networkName of networkNames) {
      it(networkName, async () => {
        const {
          dnGmxSeniorVault,
          dnGmxSeniorVaultLogic,
          dnGmxJuniorVault,
          dnGmxJuniorVaultLogic,
          dnGmxBatchingManager,
          dnGmxBatchingManagerGlp,
          dnGmxBatchingManagerLogic,
          dnGmxTraderHedgeStrategy,
          withdrawPeriphery,
          batchingManagerBypass,
          depositPeriphery,
          proxyAdmin,
        } = await sdk.deltaNeutralGmxVaults.getContracts(
          sdk.getProvider(networkName)
        );

        const addresses = [
          ethers.constants.AddressZero, // just in case something is set to zero
          dnGmxSeniorVault.address,
          dnGmxSeniorVaultLogic.address,
          dnGmxJuniorVault.address,
          dnGmxJuniorVaultLogic.address,
          dnGmxBatchingManager.address,
          dnGmxBatchingManagerGlp.address,
          dnGmxBatchingManagerLogic.address,
          dnGmxTraderHedgeStrategy.address,
          withdrawPeriphery.address,
          batchingManagerBypass.address,
          depositPeriphery.address,
          proxyAdmin.address,
        ];

        // ensure no addresses are repeated
        expect(addresses.length).toEqual(new Set(addresses).size);
      });
    }
  });

  describe('#methods', () => {
    const networkNames: sdk.NetworkName[] = ['arbmain']; // TODO 'arbgoerli'
    for (const networkName of networkNames) {
      describe(networkName, () => {
        it('junior vault should point to implementation', async () => {
          const { dnGmxJuniorVault, dnGmxJuniorVaultLogic, proxyAdmin } =
            await sdk.deltaNeutralGmxVaults.getContracts(
              sdk.getProvider(networkName)
            );

          const implementation = await proxyAdmin.getProxyImplementation(
            dnGmxJuniorVault.address
          );
          expect(implementation).toEqual(dnGmxJuniorVaultLogic.address);
        });
        it('senior vault should point to implementation', async () => {
          const { dnGmxSeniorVault, dnGmxSeniorVaultLogic, proxyAdmin } =
            await sdk.deltaNeutralGmxVaults.getContracts(
              sdk.getProvider(networkName)
            );

          const implementation = await proxyAdmin.getProxyImplementation(
            dnGmxSeniorVault.address
          );
          expect(implementation).toEqual(dnGmxSeniorVaultLogic.address);
        });
        it('batching manager usdc should point to implementation', async () => {
          const {
            dnGmxBatchingManager,
            dnGmxBatchingManagerLogic,
            proxyAdmin,
          } = await sdk.deltaNeutralGmxVaults.getContracts(
            sdk.getProvider(networkName)
          );

          const implementation = await proxyAdmin.getProxyImplementation(
            dnGmxBatchingManager.address
          );
          expect(implementation).toEqual(dnGmxBatchingManagerLogic.address);
        });
        it('batching manager glp should point to implementation', async () => {
          const {
            dnGmxBatchingManagerGlp,
            dnGmxBatchingManagerGlpLogic,
            proxyAdmin,
          } = await sdk.deltaNeutralGmxVaults.getContracts(
            sdk.getProvider(networkName)
          );

          const implementation = await proxyAdmin.getProxyImplementation(
            dnGmxBatchingManagerGlp.address
          );
          expect(implementation).toEqual(dnGmxBatchingManagerGlpLogic.address);
        });
        it('dnGmxTraderHedgeStrategy should point to implementation', async () => {
          const {
            dnGmxTraderHedgeStrategy,
            dnGmxTraderHedgeStrategyLogic,
            proxyAdmin,
          } = await sdk.deltaNeutralGmxVaults.getContracts(
            sdk.getProvider(networkName)
          );

          const implementation = await proxyAdmin.getProxyImplementation(
            dnGmxTraderHedgeStrategy.address
          );
          expect(implementation).toEqual(dnGmxTraderHedgeStrategyLogic.address);
        });
        it('junior vault is correct in senior vault', async () => {
          const { dnGmxSeniorVault, dnGmxJuniorVault } =
            await sdk.deltaNeutralGmxVaults.getContracts(
              sdk.getProvider(networkName)
            );

          const jv = await dnGmxSeniorVault.dnGmxJuniorVault();
          expect(jv).toEqual(dnGmxJuniorVault.address);
        });
        it('junior vault is correct in batching manager usdc', async () => {
          const { dnGmxBatchingManager, dnGmxJuniorVault } =
            await sdk.deltaNeutralGmxVaults.getContracts(
              sdk.getProvider(networkName)
            );

          const jv = await dnGmxBatchingManager.dnGmxJuniorVault();
          expect(jv).toEqual(dnGmxJuniorVault.address);
        });
        it('junior vault is correct in batching manager glp', async () => {
          const { dnGmxBatchingManagerGlp, dnGmxJuniorVault } =
            await sdk.deltaNeutralGmxVaults.getContracts(
              sdk.getProvider(networkName)
            );

          const jv = await dnGmxBatchingManagerGlp.dnGmxJuniorVault();
          expect(jv).toEqual(dnGmxJuniorVault.address);
        });
        it('junior vault is correct in dnGmxTraderHedgeStrategy', async () => {
          const { dnGmxTraderHedgeStrategy, dnGmxJuniorVault } =
            await sdk.deltaNeutralGmxVaults.getContracts(
              sdk.getProvider(networkName)
            );

          const jv = await dnGmxTraderHedgeStrategy.juniorVault();
          expect(jv).toEqual(dnGmxJuniorVault.address);
        });
        it('weth address is correct is dnGmxTraderHedgeStrategy', async () => {
          const { dnGmxTraderHedgeStrategy } =
            await sdk.deltaNeutralGmxVaults.getContracts(
              sdk.getProvider(networkName)
            );
          const { weth, wbtc } = await sdk.tokens.getContracts(
            sdk.getProvider(networkName)
          );

          const wethStored = await dnGmxTraderHedgeStrategy.weth();
          const wbtcStored = await dnGmxTraderHedgeStrategy.wbtc();
          expect(wethStored).toEqual(weth.address);
          expect(wbtcStored).toEqual(wbtc.address);
        });
        it('rescue fees is callable', async () => {
          const { dnGmxBatchingManager } =
            await sdk.deltaNeutralGmxVaults.getContracts(
              sdk.getProvider(networkName)
            );

          const owner = await dnGmxBatchingManager.owner();

          // should not revert
          await dnGmxBatchingManager.callStatic.rescueFees({
            from: owner,
          });
        });
        it('currentRound is non zero', async () => {
          const { dnGmxBatchingManager } =
            await sdk.deltaNeutralGmxVaults.getContracts(
              sdk.getProvider(networkName)
            );

          const currentRound = await dnGmxBatchingManager.currentRound();

          expect(currentRound.toNumber()).toBeGreaterThan(0);
        });
        it('trader hedge address should be correct in jounior vault', async () => {
          const { dnGmxJuniorVault, dnGmxTraderHedgeStrategy } =
            await sdk.deltaNeutralGmxVaults.getContracts(
              sdk.getProvider(networkName)
            );

          const value = await dnGmxJuniorVault.provider.getStorageAt(
            dnGmxJuniorVault.address,
            287
          );

          expect(hexZeroPad(hexStripZeros(value), 20)).toEqual(
            dnGmxTraderHedgeStrategy.address
          );
        });
      });
    }
  });
});
