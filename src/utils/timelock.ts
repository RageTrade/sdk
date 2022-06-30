import { ethers, PopulatedTransaction } from 'ethers';
import { TimelockControllerWithMinDelayOverride } from '../typechain';

const MIN_DELAY_DEFAULT = 2 * 24 * 3600;

export type Operation = [
  target: string,
  value: ethers.BigNumberish,
  data: ethers.utils.BytesLike,
  predecessor: ethers.utils.BytesLike,
  salt: ethers.utils.BytesLike
];

export async function generateTimelockSchedule(
  timelock: TimelockControllerWithMinDelayOverride,
  tx: PopulatedTransaction | Promise<PopulatedTransaction>,
  minDelay?: number,
  predecessor?: ethers.utils.BytesLike
) {
  tx = await tx;
  if (!tx.to) {
    throw new Error('tx.to is undefined');
  }

  const operation: Operation = [
    tx.to,
    tx.value ?? 0,
    tx.data ?? '0x',
    predecessor ?? ethers.constants.HashZero,
    ethers.constants.HashZero,
  ];

  const schedule = await timelock.populateTransaction.schedule(
    ...operation,
    minDelay ?? MIN_DELAY_DEFAULT
  );
  const hash = await timelock.hashOperation(...operation);
  const execute = await timelock.populateTransaction.execute(...operation);
  return { schedule, hash, execute };
}

export type BatchOperation = [
  targets: string[],
  values: ethers.BigNumberish[],
  datas: ethers.utils.BytesLike[],
  predecessor: ethers.utils.BytesLike,
  salt: ethers.utils.BytesLike
];

export async function generateTimelockScheduleBatch(
  timelock: TimelockControllerWithMinDelayOverride,
  txArray: Array<PopulatedTransaction | Promise<PopulatedTransaction>>,
  minDelay?: number,
  predecessor?: ethers.utils.BytesLike
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

  const operation: BatchOperation = [
    targets,
    values,
    datas,
    predecessor ?? ethers.constants.HashZero,
    ethers.constants.HashZero,
  ];

  const schedule = await timelock.populateTransaction.scheduleBatch(
    ...operation,
    minDelay ?? MIN_DELAY_DEFAULT
  );
  const hash = await timelock.hashOperationBatch(...operation);
  const execute = await timelock.populateTransaction.executeBatch(...operation);
  return { schedule, hash, execute };
}
