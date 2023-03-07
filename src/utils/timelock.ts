import {
  BigNumberish,
  BytesLike,
  ContractTransaction,
  toNumber,
  ZeroHash,
} from 'ethers';
import { TimelockControllerWithMinDelayOverride } from '../typechain';
import { newError } from './loggers';

const MIN_DELAY_DEFAULT = 2 * 24 * 3600;

export interface TimelockOptions {
  minDelay?: number;
  predecessor?: BytesLike;
  salt?: BytesLike;
}

// alias for generateTimelockSchedule
export const timelockSchedule = generateTimelockSchedule;

export async function generateTimelockSchedule(
  timelock: TimelockControllerWithMinDelayOverride,
  txArray: Array<ContractTransaction | Promise<ContractTransaction>>,
  { minDelay, predecessor, salt }: TimelockOptions = {}
) {
  if (minDelay === undefined) {
    minDelay = toNumber(await timelock.getMinDelay());
  }
  if (predecessor === undefined) {
    predecessor = ZeroHash;
  }
  if (salt === undefined) {
    salt = ZeroHash;
  }

  switch (txArray.length) {
    case 0:
      throw newError('Empty txArray');
    case 1:
      return generateTimelockScheduleSingle(
        timelock,
        txArray[0],
        minDelay,
        predecessor,
        salt
      );
    default:
      return generateTimelockScheduleBatch(
        timelock,
        txArray,
        minDelay,
        predecessor,
        salt
      );
  }
}

type OperationSingle = [
  target: string,
  value: BigNumberish,
  data: BytesLike,
  predecessor: BytesLike,
  salt: BytesLike
];

type OperationBatch = [
  targets: string[],
  values: BigNumberish[],
  datas: BytesLike[],
  predecessor: BytesLike,
  salt: BytesLike
];

async function generateTimelockScheduleSingle(
  timelock: TimelockControllerWithMinDelayOverride,
  tx: ContractTransaction | Promise<ContractTransaction>,
  minDelay: number,
  predecessor: BytesLike,
  salt: BytesLike
) {
  tx = await tx;
  if (!tx.to) {
    throw newError('tx.to is undefined');
  }

  const operation: OperationSingle = [
    tx.to,
    tx.value ?? 0,
    tx.data ?? '0x',
    predecessor,
    salt,
  ];

  const schedule = await timelock.schedule.populateTransaction(
    ...operation,
    minDelay ?? MIN_DELAY_DEFAULT
  );
  const hash = await timelock.hashOperation(...operation);
  const execute = await timelock.execute.populateTransaction(...operation);
  return { schedule, hash, execute };
}

async function generateTimelockScheduleBatch(
  timelock: TimelockControllerWithMinDelayOverride,
  txArray: Array<ContractTransaction | Promise<ContractTransaction>>,
  minDelay: number,
  predecessor: BytesLike,
  salt: BytesLike
) {
  const txArrayResolved = await Promise.all(txArray);

  const targets = txArrayResolved.map((tx) => {
    if (!tx.to) {
      throw newError('tx.to is undefined');
    }
    return tx.to;
  });

  const values = txArrayResolved.map((tx) => tx.value ?? 0);
  const datas = txArrayResolved.map((tx) => tx.data ?? '0x');

  const operation: OperationBatch = [targets, values, datas, predecessor, salt];

  const schedule = await timelock.scheduleBatch.populateTransaction(
    ...operation,
    minDelay ?? MIN_DELAY_DEFAULT
  );
  const hash = await timelock.hashOperationBatch(...operation);
  const execute = await timelock.executeBatch.populateTransaction(...operation);
  return { schedule, hash, execute };
}
