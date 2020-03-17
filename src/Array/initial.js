import slice from './slice.js'

/*
 * @Author: ShawnTu
 * @Date: 2020-03-16 21:09:24
 * @LastEditTime: 2020-03-16 21:13:02
 * @LastEditors: Please set LastEditors
 * @Description: Gets all but the last element of `array`.
 * @FilePath: \Doraemon.js\src\Array\initial.js
 * @example
 * 
 * _.initial([1, 2, 3])
 * // => [1, 2]
 */

function initial(array) {
    const length = array == null ? 0 : array.length

    return length ? slice(array, 0, -1) : []
}

export default initial
