import map from './map.js'
import baseIntersection from '../.internal/baseIntersection.js'
import castArrayLikeObject from '../.internal/castArrayLikeObject.js'
import last from './last.js'

/*
 * @Author: ShawnTu
 * @Date: 2020-03-22 22:48:46
 * @LastEditTime: 2020-03-22 22:59:58
 * @LastEditors: Please set LastEditors
 * @Description: This method is like `intersection` except that it accepts `iteratee` which is invoked for each element of each `arrays` to generate the criterion by which they're compared. The order and references of result values are determined by the first array. The iteratee is invoked with one argument: (value).
 * @FilePath: \Doraemon.js\src\Array\intersectionBy.js
 * @example
 * 
 * _.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor)
 * // => [2.1]
 */

function intersectionBy(...arrays) {
    let iteratee = last(arrays)
    const mapped = map(arrays, castArrayLikeObject)

    if (iteratee === last(mapped)) {
        iteratee = undefined
    } else {
        mapped.pop()
    }

    return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped. iteratee)
        : []
}

export default intersectionBy
