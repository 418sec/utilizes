import each from 'lodash/each'
import get from 'lodash/get'
import _set from 'lodash/set'
import { disallowProtoPath } from './utils'

type Many<T> = T | ReadonlyArray<T>

export const set = <T extends object>(object: T, value: any, ...paths: Array<Many<string | number | symbol>>) => {

  each(paths, path => {
    disallowProtoPath(path)
    return _set(object, path, typeof value !== 'function' ? value : value(get(object, path), path, object))
  })

  return object

}

export default set