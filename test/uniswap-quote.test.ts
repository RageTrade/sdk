import { BigNumber, ethers } from 'ethers';
import { core, uniswap, tricryptoVault, tokens, parseUsdc, Q128 } from '../';

import { config } from 'dotenv';
import { hexZeroPad } from 'ethers/lib/utils';

config();

const arbtest = new ethers.providers.StaticJsonRpcProvider(
  'https://arb-rinkeby.g.alchemy.com/v2/' + process.env.ALCHEMY_KEY
);

const wallet = new ethers.Wallet(
  process.env.PRIVATE_KEY ?? 'pvt key not present, pls enter it in .env file',
  arbtest
);

describe.skip('Uniswap quote', () => {
  it('works usdc crv3', async () => {
    const { usdc, crv3, usdt } = await tokens.getContracts(arbtest);
    const { curveYieldStrategy } = await tricryptoVault.getContracts(arbtest);
    const { uniswapV3QuoterV1 } = await uniswap.getContracts(arbtest);

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
    const { eth_oracle } = await core.getContracts(arbtest);
    const { weth, usdt, crv3 } = await tokens.getContracts(arbtest);
    const { curveYieldStrategy } = await tricryptoVault.getContracts(arbtest);
    const { uniswapV3QuoterV1 } = await uniswap.getContracts(arbtest);

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
