import baseIndexOf from '../.internal/baseIndexOf.js'
import toInteger from './toInteger.js'

/*
 * @Author: ShawnTu
 * @Date: 2020-03-14 00:22:18
 * @LastEditTime: 2020-03-14 00:32:11
 * @LastEditors: Please set LastEditors
 * @Description: Gets the index at which the first occurrence of `value` is found in `array` using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero) for equality comparisons. If `fromIndex` is negative, it's used as the offset from the end of `array`.
 * @FilePath: \Doraemon.js\src\Array\indexOf.js
 * @example
 * 
 * _.indexOf([1, 2, 1, 2], 2)
 * // => 1
 * 
 * // Search from the `fromIndex`.
 * _.indexOf([1, 2, 1, 2], 2, 2)
 * // => 3
 */

function indexOf(array, value, fromIndex) {
    const length = array == null ? 0 : array.length
    if (!length) {
        return -1
    }
    let index = fromIndex == null ? 0 : toInteger(fromIndex)
    if (index < 0) {
        index = Math.max(length + index, 0)
    }

    return baseIndexOf(array, value, index)
}

export default indexOf
