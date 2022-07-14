import { ethers, PopulatedTransaction } from 'ethers';
import { TimelockControllerWithMinDelayOverride } from '../typechain';

const MIN_DELAY_DEFAULT = 2 * 24 * 3600;

export interface TimelockOptions {
  minDelay?: number;
  predecessor?: ethers.utils.BytesLike;
  salt?: ethers.utils.BytesLike;
}

export async function generateTimelockSchedule(
  timelock: TimelockControllerWithMinDelayOverride,
  txArray: Array<PopulatedTransaction | Promise<PopulatedTransaction>>,
  { minDelay, predecessor, salt }: TimelockOptions = {}
) {
  if (minDelay === undefined) {
    minDelay = (await timelock.getMinDelay()).toNumber();
  }
  if (predecessor === undefined) {
    predecessor = ethers.constants.HashZero;
  }
  if (salt === undefined) {
    salt = ethers.constants.HashZero;
  }

  switch (txArray.length) {
    case 0:
      throw new Error('Empty txArray');
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
  value: ethers.BigNumberish,
  data: ethers.utils.BytesLike,
  predecessor: ethers.utils.BytesLike,
  salt: ethers.utils.BytesLike
];

type OperationBatch = [
  targets: string[],
  values: ethers.BigNumberish[],
  datas: ethers.utils.BytesLike[],
  predecessor: ethers.utils.BytesLike,
  salt: ethers.utils.BytesLike
];

async function generateTimelockScheduleSingle(
  timelock: TimelockControllerWithMinDelayOverride,
  tx: PopulatedTransaction | Promise<PopulatedTransaction>,
  minDelay: number,
  predecessor: ethers.utils.BytesLike,
  salt: ethers.utils.BytesLike
) {
  tx = await tx;
  if (!tx.to) {
    throw new Error('tx.to is undefined');
  }

  const operation: OperationSingle = [
    tx.to,
    tx.value ?? 0,
    tx.data ?? '0x',
    predecessor,
    salt,
  ];

  const schedule = await timelock.populateTransaction.schedule(
    ...operation,
    minDelay ?? MIN_DELAY_DEFAULT
  );
  const hash = await timelock.hashOperation(...operation);
  const execute = await timelock.populateTransaction.execute(...operation);
  return { schedule, hash, execute };
}

async function generateTimelockScheduleBatch(
  timelock: TimelockControllerWithMinDelayOverride,
  txArray: Array<PopulatedTransaction | Promise<PopulatedTransaction>>,
  minDelay: number,
  predecessor: ethers.utils.BytesLike,
  salt: ethers.utils.BytesLike
) {
  const txArrayResolved = await Promise.all(txArray);

  const targets = txArrayResolved.map((tx) => {
    if (!tx.to) {
      throw new Error('tx.to is undefined');
    }
    return tx.to;
  });

  const values = txArrayResolved.map((tx) => tx.value ?? 0);
  const datas = txArrayResolved.map((tx) => tx.data ?? '0x');

  const operation: OperationBatch = [targets, values, datas, predecessor, salt];

  const schedule = await timelock.populateTransaction.scheduleBatch(
    ...operation,
    minDelay ?? MIN_DELAY_DEFAULT
  );
  const hash = await timelock.hashOperationBatch(...operation);
  const execute = await timelock.populateTransaction.executeBatch(...operation);
  return { schedule, hash, execute };
}
