import { BigNumber, ethers } from 'ethers';
import {
  getNetworkNameFromChainId,
  gmxProtocol,
  NetworkName,
  tokens,
} from '../../contracts';
import { IERC20Metadata__factory } from '../../typechain';

export interface MintBurnConversionIntermediateResult {
  initialAmount: BigNumber;
  usdgSupply: BigNumber;
  usdcWeight: BigNumber;
  totalWeights: BigNumber;
  feeBasisPoints: BigNumber;
  taxBasisPoints: BigNumber;
}

export async function getGlpMintBurnConversionIntermediate(
  provider: ethers.providers.Provider,
  networkName?: NetworkName
): Promise<MintBurnConversionIntermediateResult> {
  const tk = await tokens.getContracts(provider);
  const gmx = await gmxProtocol.getContracts(provider);

  if (!networkName) {
    const network = await provider.getNetwork();
    networkName = getNetworkNameFromChainId(network.chainId);
  }

  const usdgAddress = (() => {
    switch (networkName) {
      case 'arbmain':
      case 'mainnetfork':
        return '0x45096e7aA921f27590f8F19e457794EB09678141';
      case 'arbgoerli':
        return '0xef07455D59B4234EE8260048446EC92d18F09CA3';
      default:
        throw new Error('USDG address not available for this network');
    }
  })();

  const usdg = IERC20Metadata__factory.connect(usdgAddress, provider);

  const TAX_BASIS_POINTS = 50;
  const MINT_BURN_FEE_BASIS_POINTS = 25;

  let feeBasisPoints = BigNumber.from(MINT_BURN_FEE_BASIS_POINTS);
  const taxBasisPoints = BigNumber.from(TAX_BASIS_POINTS);

  const totalWeights = await gmx.gmxUnderlyingVault.totalTokenWeights();
  const usdcWeight = await gmx.gmxUnderlyingVault.tokenWeights(tk.usdc.address);

  const usdgSupply = await usdg.totalSupply();

  const initialAmount = await gmx.gmxUnderlyingVault.usdgAmounts(
    tk.usdc.address
  );

  return {
    initialAmount,
    usdgSupply,
    usdcWeight,
    totalWeights,
    feeBasisPoints,
    taxBasisPoints,
  };
}
