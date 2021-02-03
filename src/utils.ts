/**
 * Utilities and helper functions
 */

import { toPath } from "lodash";

type Many<T> = T | ReadonlyArray<T>

const ILLEGAL_KEYS = new Set(["constructor", "__proto__"]);

export const isIllegalKey = (key: Many<string | number | symbol>): boolean => typeof key === "string"
  ? ILLEGAL_KEYS.has(key)
  : false

export const isProtoPath = (path: Array<Many<string | number | symbol>> | Many<string | number | symbol>): boolean => Array.isArray(path)
  ? path.some(isIllegalKey)
  : typeof path === "string"
    ? isIllegalKey(path)
    : false;

export const disallowProtoPath = (paths: Array<Many<string | number | symbol>> | Many<string | number | symbol>): void => {
  const path = toPath(paths)
  if (isProtoPath(path)) {
    throw new Error(`Unsafe path encountered: ${path.toString()}`)
  }
}