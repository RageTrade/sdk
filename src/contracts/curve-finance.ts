import { Provider } from '@ethersproject/providers';
import { Signer } from 'ethers';
import {
  ICurveStableSwap__factory,
  IERC20Metadata__factory,
  ILPPriceGetter__factory,
} from '../typechain';
import { getChainIdFromProvider } from './common';

export interface CurveFinanceAddresses {
  crv: string;
  crv3: string;
  quoter: string;
  gauge: string;
  triCryptoPool: string;
}

export function getCurveFinanceAddresses(
  chainId: number
): CurveFinanceAddresses {
  switch (chainId) {
    case 42161: // arbmain
      return {
        crv: '0x11cdb42b0eb46d95f990bedd4695a6e3fa034978',
        crv3: '0x8e0B8c8BB9db49a46697F3a5Bb8A308e744821D2',
        quoter: '0x2C2FC48c3404a70F2d33290d5820Edf49CBf74a5',
        gauge: '0x97E2768e8E73511cA874545DC5Ff8067eB19B787',
        triCryptoPool: '0x960ea3e3C7FB317332d990873d354E18d7645590',
      };
    case 421611: // arbtest
      return {
        crv: '0x11cdb42b0eb46d95f990bedd4695a6e3fa034978',
        crv3: '0x8e0B8c8BB9db49a46697F3a5Bb8A308e744821D2',
        quoter: '0x07E837cAbcC37A8b185051Ae0E984346CECde049',
        gauge: '0xcFe36c05f4001E01f0f549Faa3a2d248446D03D2',
        triCryptoPool: '0x07E837cAbcC37A8b185051Ae0E984346CECde049',
      };
    default:
      throw new Error(
        `The curve finance addresses are not present in sdk for chainId ${chainId}.`
      );
  }
}

export async function getCurveFinanceContracts(
  signerOrProvider: Signer | Provider
) {
  const chainId = await getChainIdFromProvider(signerOrProvider);
  const addresses = getCurveFinanceAddresses(chainId);
  return {
    crv: IERC20Metadata__factory.connect(addresses.crv, signerOrProvider),
    crv3: IERC20Metadata__factory.connect(addresses.crv3, signerOrProvider),
    quoter: ILPPriceGetter__factory.connect(addresses.quoter, signerOrProvider),
    gauge: ILPPriceGetter__factory.connect(addresses.gauge, signerOrProvider),
    triCryptoPool: ICurveStableSwap__factory.connect(
      addresses.triCryptoPool,
      signerOrProvider
    ),
  };
}
