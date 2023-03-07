import { concat, toBeHex, toBigInt, Wallet, zeroPadBytes } from 'ethers';
import {
  core,
  uniswap,
  tricryptoVault,
  tokens,
  parseUsdc,
  Q128,
  getProvider,
} from '../';

import { config } from 'dotenv';

config();

const arbgoerli = getProvider('arbgoerli');

const wallet = new Wallet(
  process.env.PRIVATE_KEY ?? 'pvt key not present, pls enter it in .env file',
  arbgoerli
);

describe.skip('Uniswap quote', () => {
  it('works usdc crv3', async () => {
    const { usdc, crv3, usdt } = await tokens.getContracts(arbgoerli);
    const { curveYieldStrategy } = await tricryptoVault.getContracts(arbgoerli);
    const { uniswapV3QuoterV1 } = await uniswap.getContracts(arbgoerli);

    const inputUsdcAmount = parseUsdc('1');

    const actualPriceX128 = await curveYieldStrategy.getPriceX128();
    const expectedOutputAmount = (inputUsdcAmount * Q128) / actualPriceX128;

    const actualOutputCrv3 = (
      (await uniswapV3QuoterV1.connect(wallet)) as any
    ).quoteExactInput // TODO
      .staticCall(
        concat([
          await usdc.getAddress(),
          zeroPadBytes(toBeHex(500), 3), // uint24
          await usdt.getAddress(),
          zeroPadBytes(toBeHex(3000), 3), // uint24
          await crv3.getAddress(),
        ]),
        inputUsdcAmount
      );

    // actualOutputCrv3 should be within 3% tolerance of expectedOutputAmount
    expect(
      ((actualOutputCrv3 - expectedOutputAmount) * 100n) /
        3n /
        expectedOutputAmount ===
        0n
    ).toBe(true);
  });

  it('works weth crv3', async () => {
    const { eth_oracle } = await core.getContracts(arbgoerli);
    const { weth, usdt, crv3 } = await tokens.getContracts(arbgoerli);
    const { curveYieldStrategy } = await tricryptoVault.getContracts(arbgoerli);
    const { uniswapV3QuoterV1 } = await uniswap.getContracts(arbgoerli);

    const usdcAmount = parseUsdc('1');
    const ethPriceX128 = await eth_oracle.getTwapPriceX128(0);
    const inputEthAmount = (usdcAmount * Q128) / ethPriceX128;
    const crv3UsdPriceX128 = await curveYieldStrategy.getPriceX128();

    const expectedOutputAmount = (usdcAmount * Q128) / crv3UsdPriceX128;

    const actualOutputCrv3 = (
      (await uniswapV3QuoterV1.connect(wallet)) as any
    ).quoteExactInput // TODO
      .staticCall(
        concat([
          await weth.getAddress(),
          zeroPadBytes(toBeHex(3000), 3), // uint24
          await usdt.getAddress(),
          zeroPadBytes(toBeHex(3000), 3), // uint24
          await crv3.getAddress(),
        ]),
        inputEthAmount
      );

    // actualOutputCrv3 should be within 3% tolerance of expectedOutputAmount
    expect(
      ((actualOutputCrv3 - expectedOutputAmount) * 100n) /
        3n /
        expectedOutputAmount ===
        0n
    ).toBe(true);
  });
});
