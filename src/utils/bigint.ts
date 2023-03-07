export function abs(val: bigint) {
  return val < 0n ? -1n * val : val;
}

export function safeDiv(numerator: bigint, denominator: bigint) {
  return denominator === 0n ? 0n : numerator / denominator;
}
