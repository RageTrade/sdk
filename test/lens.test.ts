import { config } from 'dotenv';
import { JsonRpcProvider } from 'ethers';
import { core, getProvider, tricryptoVault } from '../dist';

config();

jest.setTimeout(200_000);

const arbmain = new JsonRpcProvider('https://arb1.arbitrum.io/rpc');

const arbgoerli = getProvider('arbgoerli');

describe('Lens', () => {
  it('arbmain', async () => {
    const { curveYieldStrategy } = await tricryptoVault.getContracts(arbmain);
    const accountId = await curveYieldStrategy.rageAccountNo();

    const { clearingHouseLens } = await core.getContracts(arbmain);
    const account = await clearingHouseLens.getAccountInfo(accountId);
    expect(account.owner).toEqual(await curveYieldStrategy.getAddress());
  });

  it('arbgoerli', async () => {
    const { curveYieldStrategy } = await tricryptoVault.getContracts(arbgoerli);
    const accountId = await curveYieldStrategy.rageAccountNo();

    const { clearingHouseLens } = await core.getContracts(arbgoerli);
    const account = await clearingHouseLens.getAccountInfo(accountId);
    expect(account.owner).toEqual(await curveYieldStrategy.getAddress());
  });
});
