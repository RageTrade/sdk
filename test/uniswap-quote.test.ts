import { BigNumber, ethers } from 'ethers';
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
import { hexZeroPad } from 'ethers/lib/utils';

config();

const arbgoerli = getProvider('arbgoerli');

const wallet = new ethers.Wallet(
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
    const expectedOutputAmount = inputUsdcAmount.mul(Q128).div(actualPriceX128);

    const actualOutputCrv3 = await uniswapV3QuoterV1
      .connect(wallet)
      .callStatic.quoteExactInput(
        ethers.utils.concat([
          usdc.address,
          hexZeroPad(BigNumber.from(500).toHexString(), 3), // uint24
          usdt.address,
          hexZeroPad(BigNumber.from(3000).toHexString(), 3), // uint24
          crv3.address,
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

  it('works weth crv3', async () => {
    const { eth_oracle } = await core.getContracts(arbgoerli);
    const { weth, usdt, crv3 } = await tokens.getContracts(arbgoerli);
    const { curveYieldStrategy } = await tricryptoVault.getContracts(arbgoerli);
    const { uniswapV3QuoterV1 } = await uniswap.getContracts(arbgoerli);

    const usdcAmount = parseUsdc('1');
    const ethPriceX128 = await eth_oracle.getTwapPriceX128(0);
    const inputEthAmount = usdcAmount.mul(Q128).div(ethPriceX128);
    const crv3UsdPriceX128 = await curveYieldStrategy.getPriceX128();

    const expectedOutputAmount = usdcAmount.mul(Q128).div(crv3UsdPriceX128);

    const actualOutputCrv3 = await uniswapV3QuoterV1
      .connect(wallet)
      .callStatic.quoteExactInput(
        ethers.utils.concat([
          weth.address,
          hexZeroPad(BigNumber.from(3000).toHexString(), 3), // uint24
          usdt.address,
          hexZeroPad(BigNumber.from(3000).toHexString(), 3), // uint24
          crv3.address,
        ]),
        inputEthAmount
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
