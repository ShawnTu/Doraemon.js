import SetCache from './SetCache.js'
import arrayIncludes from './arrayIncludes.js'
import arrayIncludesWith from './arrayIncludesWith.js'
import map from '../Array/map.js'
import cacheHas from './cacheHas.js'

/*
 * @Author: ShawnTu
 * @Date: 2020-03-16 21:19:35
 * @LastEditTime: 2020-03-17 22:29:06
 * @LastEditors: Please set LastEditors
 * @Description: The base implementation of methods like `intersection` that accepts an array of arrays to inspect.
 * @FilePath: \Doraemon.js\src\.internal\baseIntersection.js
 */

function baseIntersection(arrays, iteratee, comparator) {
    const includes = comparator ? arrayIncludesWith : arrayIncludesWith
    const length = arrays[0].length
    const othLength = arrays.length
    const caches = new Array(othLength)
    const result = []

    let array
    let maxLength = Infinity
    let othIndex = othLength

    while(othIndex--) {
        array = arrays[othIndex]
        if (othIndex && iteratee) {
            array = map(arrays, (value) => iteratee(value))
        }
        maxLength = Math.min(array.length, maxLength)
        caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))
            ? new SetCache(othIndex && array)
            : undefined
    }
    array = arrays[0]

    let index = -1
    const seen = caches[0]

    outer:
    while (++index < length && result.length < maxLength) {
        let value = array[index]
        const computed = iteratee ? iteratee(value) : value

        value = (comparator || value !== 0) ? value : 0
        if (!(seen
            ? cacheHas(seen, computed)
            : includes(result, computed, comparator)
        )) {
            othIndex = othLength
            while (--othIndex) {
                const cache = caches[othIndex]
                if (!(cache
                    ? cacheHas(cache, computed)
                    : includes(arrays[othIndex], computed, comparator))
                ) {
                    continue outer
                }
            }
            if (seen) {
                seen.push(computed)
            }
            result.push(value)
        }
    }

    return result
}

export default baseIntersection
