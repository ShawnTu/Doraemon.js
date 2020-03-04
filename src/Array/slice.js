/*
 * @Author: ShawnTu
 * @Date: 2020-03-04 22:19:21
 * @LastEditTime: 2020-03-04 22:54:13
 * @LastEditors: Please set LastEditors
 * @Description: Creates a slice of `array` from `start` up to, but not including, `end`.
 * @FilePath: \Doraemon.js\src\Array\slice.js
 * @example
 * 
 * var array = [1, 2, 3, 4]
 * 
 * _.slice(array, 2)
 * // => [3, 4]
 */

function slice(array, start, end) {
    let length = array == null ? 0 : array.length
    if (!length) {
        return []
    }

    start = start == null ? 0 : start
    end = end === undefined ? length: end

    if (start < 0) {
        start = -start > length ? 0 : (start + length)
    }
    end = end > length ? length : end
    if (end < 0) {
        end += length
    }
    length = start > end ? 0 : ((end - start) >>> 0)
    start >>>= 0

    let index = -1
    const result = new Array(length)
    while (++index < length) {
        result[index] = array[index + start]
    }

    return result
}

export default slice
