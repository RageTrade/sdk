import { ethers } from 'ethers';

export interface FindBlockByTimestampOptions {
  avgBlockTime?: number;
  allowFutureTimestamp?: boolean;
}

export async function findBlockByTimestamp(
  provider: ethers.providers.Provider,
  timestampTarget: number,
  { avgBlockTime, allowFutureTimestamp }: FindBlockByTimestampOptions = {}
) {
  const latestBlock = await provider.getBlock('latest');

  if (latestBlock.timestamp < timestampTarget) {
    if (allowFutureTimestamp) {
      return latestBlock;
    } else {
      throw new Error('Timestamp is in the future');
    }
  }

  if (avgBlockTime === undefined) {
    const delta = latestBlock.number > 10000 ? 10000 : latestBlock.number - 1;
    const oldBlock = await provider.getBlock(latestBlock.number - delta);
    avgBlockTime = (latestBlock.timestamp - oldBlock.timestamp) / delta;
  }

  let blockAtHint = latestBlock;
  let hint = latestBlock.number;

  let ceiling = latestBlock.number;
  let floor = 0;

  let deltaPrevious = Number.MAX_SAFE_INTEGER;
  let deltaPreviousPrevious = Number.MAX_SAFE_INTEGER;

  while (Math.abs(timestampTarget - blockAtHint.timestamp) > avgBlockTime) {
    const delta = Math.floor(
      (timestampTarget - blockAtHint.timestamp) / avgBlockTime
    );

    if (
      delta === deltaPreviousPrevious &&
      Math.abs(delta) <= Math.abs(deltaPrevious)
    ) {
      break;
    }

    let hintNew = hint + delta;

    // cap hint between floor and ceiling
    hintNew = Math.max(Math.min(hintNew, ceiling), floor);

    const blockAtHintNew = await provider.getBlock(hintNew);

    if (!blockAtHintNew) {
      avgBlockTime =
        (latestBlock.timestamp - blockAtHint.timestamp) /
        (latestBlock.number - blockAtHint.number);
    } else {
      if (timestampTarget > blockAtHintNew.timestamp) {
        floor = hintNew;
      }
      if (timestampTarget < blockAtHintNew.timestamp) {
        ceiling = hintNew;
      }

      if (
        Math.abs(blockAtHintNew.number - blockAtHint.number) > 0 &&
        Math.abs(blockAtHintNew.timestamp - blockAtHint.timestamp) > 0
      ) {
        avgBlockTime =
          (blockAtHintNew.timestamp - blockAtHint.timestamp) /
          (blockAtHintNew.number - blockAtHint.number);
      }
      blockAtHint = blockAtHintNew;
      hint = hintNew;
      deltaPreviousPrevious = deltaPrevious;
      deltaPrevious = delta;
    }
  }

  return blockAtHint;
}
