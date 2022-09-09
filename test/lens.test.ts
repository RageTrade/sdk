import { config } from 'dotenv';
import { ethers } from 'ethers';
import { getCoreContracts, getTricryptoVaultContracts } from '../dist';

config();

const arbmain = new ethers.providers.StaticJsonRpcProvider(
  'https://arb1.arbitrum.io/rpc'
);

const arbtest = new ethers.providers.StaticJsonRpcProvider(
  'https://arb-rinkeby.g.alchemy.com/v2/' + process.env.ALCHEMY_KEY
);

describe('Lens', () => {
  it('arbmain', async () => {
    const { curveYieldStrategy } = await getTricryptoVaultContracts(arbmain);
    const accountId = await curveYieldStrategy.rageAccountNo();

    const { clearingHouseLens } = await getCoreContracts(arbmain);
    const account = await clearingHouseLens.getAccountInfo(accountId);
    expect(account.owner).toEqual(curveYieldStrategy.address);
  });

  it('arbtest', async () => {
    const { curveYieldStrategy } = await getTricryptoVaultContracts(arbtest);
    const accountId = await curveYieldStrategy.rageAccountNo();

    const { clearingHouseLens } = await getCoreContracts(arbtest);
    const account = await clearingHouseLens.getAccountInfo(accountId);
    expect(account.owner).toEqual(curveYieldStrategy.address);
  });
});
