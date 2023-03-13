import { ethers } from 'ethers';
import { formatUnits } from 'ethers/lib/utils';
import { chainlink } from '../../contracts';

export interface GeneralDataResult {
  usdcPrice: number;
}

export async function getGeneralData(
  provider: ethers.providers.Provider
): Promise<GeneralDataResult> {
  const { usdcUsdAggregator } = await chainlink.getContracts(provider);

  const usdcPrice = await usdcUsdAggregator
    .latestRoundData()
    .then(({ answer }) => Number(formatUnits(answer, 8)));

  return {
    usdcPrice,
  };
}
