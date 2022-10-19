import { config } from 'dotenv';
import { ethers } from 'ethers';
import { core, getProvider, tricryptoVault } from '../dist';

config();

jest.setTimeout(200_000);

const arbmain = new ethers.providers.StaticJsonRpcProvider(
  'https://arb1.arbitrum.io/rpc'
);

const arbgoerli = getProvider('arbgoerli');

describe('Lens', () => {
  it('arbmain', async () => {
    const { curveYieldStrategy } = await tricryptoVault.getContracts(arbmain);
    const accountId = await curveYieldStrategy.rageAccountNo();

    const { clearingHouseLens } = await core.getContracts(arbmain);
    const account = await clearingHouseLens.getAccountInfo(accountId);
    expect(account.owner).toEqual(curveYieldStrategy.address);
  });

  it('arbgoerli', async () => {
    const { curveYieldStrategy } = await tricryptoVault.getContracts(arbgoerli);
    const accountId = await curveYieldStrategy.rageAccountNo();

    const { clearingHouseLens } = await core.getContracts(arbgoerli);
    const account = await clearingHouseLens.getAccountInfo(accountId);
    expect(account.owner).toEqual(curveYieldStrategy.address);
  });
});
