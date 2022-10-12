export type ResultWithMetadata<Result> = {
  result: Result;
  cacheTimestamp?: number;
  syncedBlock?: number;
};

export type ApiResponse<T> = {
  result?: T;
  cacheTimestamp?: number;
  [key: string]: any;
};

export function getResultWithMetadata<T, F>(
  response: ApiResponse<T>,
  overrideResult?: (input: T) => F
): ResultWithMetadata<typeof overrideResult extends undefined ? T : F>;

export function getResultWithMetadata<T, F>(response: T): ResultWithMetadata<T>;

export function getResultWithMetadata(
  response: any,
  overrideResult?: Function
): ResultWithMetadata<any> {
  if (typeof response !== 'object') {
    return { result: response, cacheTimestamp: Math.floor(Date.now() / 1000) };
  } else if (typeof response === 'object' && 'result' in response) {
    return {
      result: overrideResult
        ? overrideResult(response.result)
        : response.result,
      cacheTimestamp: response?.cacheTimestamp || Math.floor(Date.now() / 1000),
    };
  } else {
    const error = new Error();
    error.stack = JSON.stringify(response);
    throw error;
  }
}
