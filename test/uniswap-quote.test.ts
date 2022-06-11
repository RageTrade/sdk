import { BigNumber, ethers } from 'ethers';
import {
  getContracts,
  getUniswapContracts,
  getVaultContracts,
  parseUsdc,
  Q128,
} from '../';

import { config } from 'dotenv';
import { hexZeroPad } from 'ethers/lib/utils';

config();

const arbtest = new ethers.providers.StaticJsonRpcProvider(
  'https://arb-rinkeby.g.alchemy.com/v2/' + process.env.ALCHEMY_KEY
);

// const wallet = new ethers.Wallet(
//   // "3d25e4d0a53c232a2ae090407dbe830392aa28bd4da58f4cec28479ef90873e4" ??
//   process.env.PRIVATE_KEY ?? 'pvt key not present, pls enter it in .env file',
//   arbtest
// );

describe('Uniswap quote', () => {
  it('works', async () => {
    const { settlementToken: usdc } = await getContracts(arbtest);
    const { curveTriCryptoLpToken, usdt, curveYieldStrategy } =
      await getVaultContracts(arbtest);
    const { quoterV1 } = getUniswapContracts(arbtest);

    const inputUsdcAmount = parseUsdc('1');

    const actualPriceX128 = await curveYieldStrategy.getPriceX128();
    const expectedOutputAmount = inputUsdcAmount.mul(Q128).div(actualPriceX128);

    const actualOutputCrv3 = await quoterV1.callStatic.quoteExactInput(
      ethers.utils.concat([
        usdc.address,
        hexZeroPad(BigNumber.from(500).toHexString(), 3), // uint24
        usdt.address,
        hexZeroPad(BigNumber.from(3000).toHexString(), 3), // uint24
        curveTriCryptoLpToken.address,
      ]),
      inputUsdcAmount
    );

    // actualOutputCrv3 should be within 3% tolerance of expectedOutputAmount
    expect(
      actualOutputCrv3
        .sub(expectedOutputAmount)
        .mul(100)
        .div(3)
        .div(expectedOutputAmount)
        .isZero()
    ).toBe(true);
  });
});
