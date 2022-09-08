import { BigNumberish, BigNumber } from 'ethers';

export function truncate(address: string) {
  let temp = address.slice(34, 42);

  while (temp[0] === '0' && temp.length > 1) {
    temp = temp.slice(1);
  }

  return '0x' + temp.toLowerCase();
}

export function parseName(name: string) {
  return name.slice(8).slice(0, -13);
}

export function parseSymbol(symbol: string) {
  return symbol.slice(0, 1) === 'v' ? symbol.slice(1) : symbol;
}

export const parseTokenAmount = (value: BigNumberish, decimals: number) =>
  BigNumber.from(value).mul(BigNumber.from(10).pow(BigNumber.from(decimals)));
