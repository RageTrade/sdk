export function truncate(address: string) {
  let temp = address.slice(34, 42);

  while (temp[0] === '0' && temp.length > 1) {
    temp = temp.slice(1);
  }

  return '0x' + temp;
}

export function parseName(name: string) {
  return name.slice(8).slice(0, -13);
}

export function parseSymbol(symbol: string) {
  return symbol.slice(1);
}
