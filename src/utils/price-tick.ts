import { TickMath } from '@uniswap/v3-sdk';
import { toBigInt, BigNumberish, toNumber, toBeHex } from 'ethers';
import JSBI from 'jsbi';
import { fromQ128, fromQ96, Q96, toQ128, toQ96 } from './fixed-point';

export declare type ERC20Decimals =
  | { decimals(): Promise<bigint> }
  | BigNumberish;

export async function getDecimals(
  contractOrValue: ERC20Decimals
): Promise<bigint> {
  if (typeof contractOrValue !== 'object') {
    return toBigInt(contractOrValue);
  } else {
    return contractOrValue.decimals();
  }
}

export async function priceToTick(
  price: number,
  vQuote: ERC20Decimals,
  vToken: ERC20Decimals,
  roundToNearestInitializableTick?: boolean
): Promise<number> {
  const vQuoteDecimals = await getDecimals(vQuote);
  const vTokenDecimals = await getDecimals(vToken);
  price *= toNumber(10n ** (vQuoteDecimals - vTokenDecimals));

  return sqrtPriceX96ToTick(
    toQ96(Math.sqrt(price)),
    roundToNearestInitializableTick
  );
}

export function sqrtPriceX96ToTick(
  sqrtPriceX96: BigNumberish,
  roundToNearestInitializableTick?: boolean
): number {
  sqrtPriceX96 = toBigInt(sqrtPriceX96);
  const tick = TickMath.getTickAtSqrtRatio(JSBI.BigInt(toBeHex(sqrtPriceX96)));
  if (roundToNearestInitializableTick) {
    return tickToNearestInitializableTick(tick);
  } else {
    return tick;
  }
}

export function tickToNearestInitializableTick(
  tick: number,
  tickSpacing: number = 10
): number {
  const tickRoundedDown = Math.floor(tick / tickSpacing) * tickSpacing;
  const roundUp = tick % tickSpacing >= tickSpacing / 2;
  return roundUp ? tickRoundedDown + tickSpacing : tickRoundedDown;
}

export function tickToSqrtPriceX96(tick: number): bigint {
  const sqrtPriceX96 = toBigInt(TickMath.getSqrtRatioAtTick(tick).toString());
  return sqrtPriceX96;
}

export async function tickToPrice(
  tick: BigNumberish,
  vQuote: ERC20Decimals,
  vToken: ERC20Decimals
): Promise<number> {
  tick = toNumber(tick);
  let price = fromQ96(tickToSqrtPriceX96(tick)) ** 2;
  const vQuoteDecimals = await getDecimals(vQuote);
  const vTokenDecimals = await getDecimals(vToken);
  price /= toNumber(10n ** (vQuoteDecimals - vTokenDecimals));
  return price;
}

/**
 * Parses human readable prices to fixed point 128
 * and also applies the decimals.
 * @param price Human readable price
 * @param vQuote VQuote contract for quering decimals
 * @param vToken VToken contract for quering decimals
 * @returns fixed point 128 and decimals applied price
 */
export async function priceToPriceX128(
  price: number,
  vQuote: ERC20Decimals,
  vToken: ERC20Decimals
): Promise<bigint> {
  const vQuoteDecimals = await getDecimals(vQuote);
  const vTokenDecimals = await getDecimals(vToken);
  let priceX128 = toQ128(price);
  priceX128 =
    (priceX128 * toBigInt(10) ** vQuoteDecimals) /
    toBigInt(10) ** vTokenDecimals;
  return priceX128;
}

/**
 * Formats the fixed point price into human readable
 * @param priceX128 fixed point 128 and decimals applied price
 * @param vQuote VQuote contract for quering decimals
 * @param vToken VToken contract for quering decimals
 * @returns human readable price
 */
export async function priceX128ToPrice(
  priceX128: BigNumberish,
  vQuote: ERC20Decimals,
  vToken: ERC20Decimals
): Promise<number> {
  priceX128 = toBigInt(priceX128);
  const vQuoteDecimals = await getDecimals(vQuote);
  const vTokenDecimals = await getDecimals(vToken);
  let price: number = fromQ128(
    (priceX128 * toBigInt(10) ** vTokenDecimals) /
      toBigInt(10) ** vQuoteDecimals
  );
  return price;
}

/**
 * Converts priceX128 (vQuote per vToken) into sqrtPriceX96 (token1 per token0)
 * @param priceX128 fixed point 128 and decimals applied price
 * @param vQuote VQuote contract determining the token0-token1
 * @param vToken VToken contract determining the token0-token1
 * @returns sqrtPriceX96 for use in uniswap
 */
export function priceX128ToSqrtPriceX96(priceX128: BigNumberish): bigint {
  priceX128 = toBigInt(priceX128);
  //   const sqrtPriceX96 = sqrt(priceX128.mul(1n << 64n)); // 96 = (128 + 64) / 2
  const sqrtPriceX96 = sqrt(priceX128 * (toBigInt(1) << 64n)); // 96 = (128 + 64) / 2
  return sqrtPriceX96;
}

export function sqrtPriceX96ToPriceX128(sqrtPriceX96: BigNumberish): bigint {
  sqrtPriceX96 = toBigInt(sqrtPriceX96);
  const priceX128 = (sqrtPriceX96 * sqrtPriceX96) / (toBigInt(1) << 64n);
  return priceX128;
}

export async function priceToSqrtPriceX96(
  price: number,
  vQuote: ERC20Decimals,
  vToken: ERC20Decimals
) {
  let priceX128 = await priceToPriceX128(price, vQuote, vToken);
  return priceX128ToSqrtPriceX96(priceX128);
}

// export async function priceToSqrtPriceX96WithoutContract(
//   price: number,
//   vQuoteDecimals: BigNumberish,
//   vTokenDecimals: BigNumberish,
// ) {
//   let priceX128 = toQ128(price);
//   priceX128 = priceX128.mul(toBigInt(10).pow(vQuoteDecimals)).div(toBigInt(10).pow(vTokenDecimals));
//   priceX128 = toBigInt(priceX128);

//   let sqrtPriceX96 = sqrt(priceX128.mul(1n << 64n)); // 96 = (128 + 64) / 2
//   return sqrtPriceX96;
// }

export async function sqrtPriceX96ToPrice(
  sqrtPriceX96: BigNumberish,
  vQuote: ERC20Decimals,
  vToken: ERC20Decimals
) {
  const priceX128 = sqrtPriceX96ToPriceX128(sqrtPriceX96);
  return priceX128ToPrice(priceX128, vQuote, vToken);
}

export async function priceToSqrtPriceX96WithoutContract(
  price: number,
  vQuoteDecimals: BigNumberish,
  vTokenDecimals: BigNumberish,
  isToken0: boolean
) {
  vQuoteDecimals = toBigInt(vQuoteDecimals);
  vTokenDecimals = toBigInt(vTokenDecimals);
  let priceX128 = toQ128(price);
  priceX128 =
    (priceX128 * toBigInt(10) ** vQuoteDecimals) /
    toBigInt(10) ** vTokenDecimals;
  priceX128 = toBigInt(priceX128);
  let sqrtPriceX96 = sqrt(priceX128 * (toBigInt(1) << 64n)); // 96 = (128 + 64) / 2

  if (isToken0) {
    sqrtPriceX96 = (Q96 * Q96) / sqrtPriceX96;
  }
  return sqrtPriceX96;
}

export function initializableTick(tick: number, tickSpacing: number) {
  return Math.floor(tick / tickSpacing) * tickSpacing;
}

export async function priceToNearestPriceX128(
  price: number,
  vQuote: ERC20Decimals,
  vToken: ERC20Decimals
): Promise<bigint> {
  return sqrtPriceX96ToPriceX128(
    tickToSqrtPriceX96(await priceToTick(price, vQuote, vToken))
  );
}

export const ONE = toBigInt(1);
export const TWO = toBigInt(2);

function sqrt(value: BigNumberish) {
  const x = toBigInt(value);
  let z = x + ONE / TWO;
  let y = x;
  while (z < y) {
    y = z;
    z = x / z + z / TWO;
  }
  return y;
}
