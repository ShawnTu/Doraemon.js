import baseFlatten from '../.internal/baseFlatten.js'

/** Used as reference for various `Number` constants. */
const INFINITY = 1 / 0

/*
 * @Author: ShawnTu
 * @Date: 2020-03-14 00:04:56
 * @LastEditTime: 2020-03-14 00:11:27
 * @LastEditors: Please set LastEditors
 * @Description: Recursively flattens `array`.
 * @FilePath: \Doraemon.js\src\Array\flattenDeep.js
 * @example
 * 
 * _.flattenDeep([1, [2, [3, [4]], 5]])
 * // => [1, 2, 3, 4, 5]
 */

function flattenDeep(array) {
    const length = array == null ? 0 : array.length

    return length ? baseFlatten(array, INFINITY) : []
}

export default flattenDeep
