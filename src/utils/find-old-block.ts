import { ethers } from 'ethers';

export async function findBlockNearTimestamp(
  provider: ethers.providers.Provider,
  timestamp: number
) {
  let blockEnd = await provider.getBlock('latest');
  if (timestamp > blockEnd.timestamp) {
    return blockEnd;
  }
  let start = 1;
  let end = blockEnd.number;
  let blockStart = await provider.getBlock(start);
  if (blockStart.timestamp > timestamp) {
    throw new Error(
      `first block was after timestamp, ${blockStart.timestamp} > ${timestamp}`
    );
  }
  let middlePrev;
  let blockMiddle: ethers.providers.Block;
  while (end !== start) {
    const middle = Math.floor((start + end) / 2);
    blockMiddle = await provider.getBlock(middle);
    if (blockMiddle.timestamp === timestamp) {
      return blockMiddle;
    }

    if (blockMiddle.timestamp < timestamp) {
      start = middle;
    } else if (blockMiddle.timestamp > timestamp) {
      end = middle;
    }

    if (middlePrev === middle) {
      return blockMiddle;
    }
    middlePrev = middle;
  }
  // @ts-ignore
  return blockMiddle as ethers.providers.Block;
}
