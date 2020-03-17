/*
 * @Author: ShawnTu
 * @Date: 2020-03-16 21:18:46
 * @LastEditTime: 2020-03-16 21:40:39
 * @LastEditors: Please set LastEditors
 * @Description: Creates an array of values by running each element of `array` thru `iteratee`. The iteratee is invoked with three arguments: (value, index, array).
 * @FilePath: \Doraemon.js\src\Array\map.js
 * @example
 * 
 * function square(n) {
 *   return n * n
 * }
 * 
 * _.map([4, 8], square)
 * // => [16, 64]
 */

function map(array, iteratee) {
    let index = -1
    const length = array == null ? 0 : array.length
    const result = new Array(length)

    while(++index < length) {
        result[index] = iteratee(array[index], index, array)
    }

    return result
}

export default map
