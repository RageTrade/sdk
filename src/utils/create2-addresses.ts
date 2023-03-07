import { getAddress, isHexString, keccak256 } from 'ethers';
import { newError } from './loggers';

export function getCreate2Address(
  deployerAddress: string,
  salt: string,
  bytecode: string
): string {
  return getCreate2AddressByBytecodeHash(
    deployerAddress,
    salt,
    keccak256(bytecode)
  );
}

export function getCreate2AddressByBytecodeHash(
  deployerAddress: string,
  salt: string,
  bytecodeHash: string
): string {
  if (!isHexString(salt) || salt.length !== 66)
    throw newError(`invalid bytes32 salt for create2: ${salt}`);
  const create2Inputs = ['0xff', deployerAddress, salt, bytecodeHash];
  const sanitizedInputs = `0x${create2Inputs.map((i) => i.slice(2)).join('')}`;
  return getAddress(`0x${keccak256(sanitizedInputs).slice(-40)}`);
}
