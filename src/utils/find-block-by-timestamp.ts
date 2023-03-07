import { Provider } from 'ethers';
import { fetchJson } from './fetch-json';
import { newError } from './loggers';

export interface FindBlockByTimestampOptions {
  avgBlockTime?: number;
  allowFutureTimestamp?: boolean;
}

export async function getBlockByTimestamp(
  provider: Provider,
  timestamp: number
): Promise<number> {
  return (
    await findBlockByTimestamp(provider, timestamp, {
      allowFutureTimestamp: true,
    })
  ).number;
}

export async function getBlockByTimestampEtherscan(
  baseUrl: string,
  timestamp: number,
  key?: string
): Promise<number> {
  if (!key) {
    key = 'CKP2AR41G_IR584UUF27BQ9MJZ4ES4JHNTB'.replace('_', '');
  }
  while (1) {
    const request = `${baseUrl}/api?module=block&action=getblocknobytime&timestamp=${timestamp}&closest=before&apikey=${key}`;
    const resp = await fetchJson(request);
    if (resp.status === '1') {
      const result = parseInt(resp.result);
      if (!isNaN(result)) {
        return result;
      }
    }
    if (JSON.stringify(resp).includes('Max rate limit reached')) {
      await new Promise((res) =>
        setTimeout(res, 1000 + Math.floor(Math.random() * 100))
      );
      continue; // try again
    } else {
      throw new Error(
        `Arbiscan Api Failed. Request: ${request}. Response: ${JSON.stringify(
          resp
        )}`
      );
    }
  }

  throw newError(
    'this cannot happen, in utils/find-block-by-timestamp/getBlockByTimestamp'
  );
}

export async function findBlockByTimestamp(
  provider: Provider,
  timestampTarget: number,
  { avgBlockTime, allowFutureTimestamp }: FindBlockByTimestampOptions = {}
) {
  const latestBlock = await provider.getBlock('latest');

  if (latestBlock === null) {
    throw newError('latest block is null');
  }

  if (latestBlock.timestamp < timestampTarget) {
    if (allowFutureTimestamp) {
      return latestBlock;
    } else {
      throw newError('Timestamp is in the future');
    }
  }

  if (avgBlockTime === undefined) {
    const delta = latestBlock.number > 10000 ? 10000 : latestBlock.number - 1;
    const oldBlock = await provider.getBlock(latestBlock.number - delta);
    if (oldBlock === null) {
      throw newError('oldBlock is null');
    }

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
