import { newError } from './loggers';

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
    // when response is not an object, treat the object as the result
    return { result: response, cacheTimestamp: Math.floor(Date.now() / 1000) };
  } else if (typeof response === 'object' && 'result' in response) {
    // when response is an object and has a result property, use the result
    return {
      result: overrideResult
        ? overrideResult(response.result)
        : response.result,
      cacheTimestamp: response?.cacheTimestamp || Math.floor(Date.now() / 1000),
    };
  } else if (typeof response === 'object' && 'error' in response) {
    // when response has an error property, throw an error
    throw newError('error in response:' + response.error);
  } else {
    // when response does not have a result or error property, this is unexpected
    const error = newError(
      'This should not happen: utils/result/getResultWithMetadata'
    );
    error.stack = JSON.stringify(response);
    throw error;
  }
}
