/*
 * @Author: ShawnTu
 * @Date: 2020-03-09 22:50:17
 * @LastEditTime: 2020-03-09 22:54:32
 * @LastEditors: Please set LastEditors
 * @Description: Gets the first element of `array`.
 * @FilePath: \Doraemon.js\src\Array\head.js
 * @example
 * 
 * _.head([1, 2, 3])
 * // => 1
 * 
 * _.head([])
 * // => undefined
 */

function head(array) {
    return (array != null && array.length)
        ? array[0]
        : undefined
}

export default head
