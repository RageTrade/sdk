import { config } from 'dotenv';
import { ethers } from 'ethers';
import { getContracts, getVaultContracts } from '../dist';

config();

const arbtest = new ethers.providers.StaticJsonRpcProvider(
  'https://arb-rinkeby.g.alchemy.com/v2/' + process.env.ALCHEMY_KEY
);

describe('Lens', () => {
  it('check', async () => {
    const { curveYieldStrategy } = await getVaultContracts(arbtest);
    const accountId = await curveYieldStrategy.rageAccountNo();

    const { clearingHouseLens } = await getContracts(arbtest);
    const account = await clearingHouseLens.getAccountInfo(accountId);
    expect(account.owner).toEqual(curveYieldStrategy.address);
  });
});
