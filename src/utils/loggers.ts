const prepend = '@ragetrade/sdk:';

export function warn(message: string) {
  console.warn(prepend, message);
}

export function newError(message: string) {
  return new Error(prepend + ' ' + message);
}
