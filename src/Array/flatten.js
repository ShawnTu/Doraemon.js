import baseFlatten from '../.internal/baseFlatten.js'

/*
 * @Author: ShawnTu
 * @Date: 2020-03-13 23:36:20
 * @LastEditTime: 2020-03-14 00:03:51
 * @LastEditors: Please set LastEditors
 * @Description: Flattens `array` a single level deep.
 * @FilePath: \Doraemon.js\src\Array\flatten.js
 * @example
 * 
 * _.flatten([1, [2, [3, [4]], 5]])
 * // => [1, 2, [3, [4]], 5]
 */

function flatten(array) {
    const length = array == null ? 0 : array.length

    return length ? baseFlatten(array, 1) : []
}

export default flatten
