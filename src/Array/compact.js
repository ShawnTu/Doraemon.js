/*
 * @Author: ShawnTu
 * @Date: 2020-03-04 22:55:15
 * @LastEditTime: 2020-03-04 23:01:22
 * @LastEditors: Please set LastEditors
 * @Description: Creates an array with all falsey values removed. The values `false`, `null`, `0`, `""`, `undefined`, and `NaN` are falsey.
 * @FilePath: \Doraemon.js\src\Array\compact.js
 * @example
 * 
 * _.compact([0, 1, false, 2, '', 3])
 * // => [1, 2, 3]
 */

function compact(array) {
    let index = 0
    const result = []

    if (array == null) {
        return result
    }

    for (const value of array) {
        if (value) {
            result[index++] = value
        }
    }

    return result
}

export default compact
