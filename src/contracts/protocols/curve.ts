import {
  ERC20PresetMinterPauser__factory,
  ICurveStableSwap__factory,
  ILPPriceGetter__factory,
} from '../../typechain';
import { newError } from '../../utils/loggers';
import {
  getChainIdFromProvider,
  getNetworkName,
  NetworkName,
  SignerOrProvider,
} from '../common';
import { getProvider } from '../providers';

export interface CurveFinanceAddresses {
  crvAddress: string;
  tricryptoAddress: string;
  quoterAddress: string;
  gaugeAddress: string;
  tricryptoPoolAddress: string;
}

export function getAddresses(
  networkNameOrChainId: NetworkName | number
): CurveFinanceAddresses {
  const networkName = getNetworkName(networkNameOrChainId);
  switch (networkName) {
    case 'arbmain':
      return {
        crvAddress: '0x11cdb42b0eb46d95f990bedd4695a6e3fa034978',
        tricryptoAddress: '0x8e0B8c8BB9db49a46697F3a5Bb8A308e744821D2',
        quoterAddress: '0x2C2FC48c3404a70F2d33290d5820Edf49CBf74a5',
        gaugeAddress: '0x97E2768e8E73511cA874545DC5Ff8067eB19B787',
        tricryptoPoolAddress: '0x960ea3e3C7FB317332d990873d354E18d7645590',
      };
    case 'arbrinkeby':
    case 'arbtest':
      return {
        crvAddress: '0xc6BeC13cBf941E3f9a0D3d21B68c5518475a3bAd',
        tricryptoAddress: '0x931073e47baA30389A195CABcf5F3549157afdc9',
        quoterAddress: '0x07E837cAbcC37A8b185051Ae0E984346CECde049',
        gaugeAddress: '0xcFe36c05f4001E01f0f549Faa3a2d248446D03D2',
        tricryptoPoolAddress: '0x07E837cAbcC37A8b185051Ae0E984346CECde049',
      };
    case 'arbgoerli':
      return {
        crvAddress: '0xF5314B52cB4c77193247f1D8fAe40ccC4953cB37',
        tricryptoAddress: '0xB642fE1abE33D2B1F58EcdfF1617fD10Cd20D5f7',
        quoterAddress: '0x16A4f7E81E02f08c5FCb5282ABE04186825817Cb',
        gaugeAddress: '0x7aF54994bC9d0e5941C8f5661811d66688755eE5',
        tricryptoPoolAddress: '0x16A4f7E81E02f08c5FCb5282ABE04186825817Cb',
      };
    default:
      throw newError(
        `curve finance addresses not present for ${networkName} network`
      );
  }
}

export async function getContracts(signerOrProvider: SignerOrProvider) {
  const chainId = await getChainIdFromProvider(signerOrProvider);
  return getContractsSync(chainId, signerOrProvider);
}

export function getContractsSync(
  networkNameOrChainId: NetworkName | number,
  signerOrProvider?: SignerOrProvider
) {
  const addresses = getAddresses(getNetworkName(networkNameOrChainId));
  if (signerOrProvider === undefined) {
    signerOrProvider = getProvider(networkNameOrChainId);
  }
  return {
    crv: ERC20PresetMinterPauser__factory.connect(
      addresses.crvAddress,
      signerOrProvider
    ),
    crv3: ERC20PresetMinterPauser__factory.connect(
      addresses.tricryptoAddress,
      signerOrProvider
    ),
    quoter: ILPPriceGetter__factory.connect(
      addresses.quoterAddress,
      signerOrProvider
    ),
    gauge: ILPPriceGetter__factory.connect(
      addresses.gaugeAddress,
      signerOrProvider
    ),
    tricryptoPool: ICurveStableSwap__factory.connect(
      addresses.tricryptoPoolAddress,
      signerOrProvider
    ),
  };
}
