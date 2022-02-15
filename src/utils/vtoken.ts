export function truncate(address: string) {
  return '0x' + address.slice(34, 42);
}
