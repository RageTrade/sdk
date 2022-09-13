import { BigNumber, ethers } from 'ethers';

export function safeDiv(numerator: BigNumber, denominator: BigNumber) {
  return denominator.eq(0) ? ethers.constants.Zero : numerator.div(denominator);
}
