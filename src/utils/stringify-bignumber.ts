import { BigNumber } from 'ethers';

type Replacement<M extends [any, any], T> = M extends any
  ? [T] extends [M[0]]
    ? M[1]
    : never
  : never;

export type DeepReplace<T, M extends [any, any]> = {
  [P in keyof T]: T[P] extends M[0]
    ? Replacement<M, T[P]>
    : T[P] extends object
    ? DeepReplace<T[P], M>
    : T[P];
};

export type BigNumberStringified<T> = DeepReplace<T, [BigNumber, string]>;

export function stringifyBigNumber(val: string): string;
export function stringifyBigNumber(val: number): number;
export function stringifyBigNumber(val: BigNumber): string;
export function stringifyBigNumber<T>(object: T): BigNumberStringified<T>;

export function stringifyBigNumber(val: any): any {
  if (BigNumber.isBigNumber(val)) {
    return val.toString();
  } else if (Array.isArray(val)) {
    return val.map((v: any) => stringifyBigNumber(v));
  } else if (typeof val === 'object') {
    return Object.fromEntries(
      Object.entries(val).map((entries) => [
        entries[0],
        stringifyBigNumber(entries[1]),
      ])
    );
  } else {
    return val;
  }
}
