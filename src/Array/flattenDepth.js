import baseFlatten from '../.internal/baseFlatten.js'

/*
 * @Author: your name
 * @Date: 2020-03-14 00:13:00
 * @LastEditTime: 2020-03-14 00:18:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Doraemon.js\src\Array\flattenDepth.js
 * @example
 * 
 * const array = [1, [2, [3, [4]], 5]]
 * 
 * _.flattenDepth(array, 1)
 * // => [1, 2, [3, [4]], 5]
 * 
 * _.flattenDepth(array, 2)
 * // => [1, 2, 3, [4], 5]
 */

function flattenDepth(array, depth) {
    const length = array == null ? 0 : array.length
    if (!length) {
        return []
    }
    depth = depth === undefined ? 1 : +depth

    return baseFlatten(array, depth)
}

export default flattenDepth
