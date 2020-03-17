import map from './map.js'
import baseIntersection from '../.internal/baseIntersection.js'
import castArrayLikeObject from '../.internal/castArrayLikeObject.js'

/*
 * @Author: ShawnTu
 * @Date: 2020-03-16 21:15:10
 * @LastEditTime: 2020-03-16 21:25:21
 * @LastEditors: Please set LastEditors
 * @Description: Creates an array of unique values that are included in all given arrays using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero) for equality comparisons. The order and references of result values are determined by the first array.
 * @FilePath: \Doraemon.js\src\Array\intersection.js
 * @example
 * 
 * _.intersection([2, 1], [2, 3])
 * // => [2]
 */

function intersection(...arrays) {
    const mapped = map(arrays, castArrayLikeObject)

    return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped)
        : []
}

export default intersection
