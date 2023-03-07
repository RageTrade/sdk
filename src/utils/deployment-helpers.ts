import { Provider } from 'ethers';

export function waitForContract(
  provider: Provider,
  address: string
): Promise<void> {
  return new Promise((res) => {
    provider.on('block', async () => {
      const code = await provider.getCode(address);
      if (code && code.length > 2) {
        provider.off('block');
        res();
      }
    });
  });
}
