/*
 * @Author: ShawnTu
 * @Date: 2020-03-09 22:23:38
 * @LastEditTime: 2020-03-09 22:45:22
 * @LastEditors: Please set LastEditors
 * @Description: The base implementation of `findIndex` and `findLastIndex`.
 * @FilePath: \Doraemon.js\src\.internal\baseFindIndex.js
 */

function baseFindIndex(array, predicate, fromIndex, fromRight) {
    const { length } = array
    let index = fromIndex + (fromRight ? 1 : -1)

    while ((fromRight ? index-- : ++index < length)) {
        if (predicate(array[index], index, array)) {
            return index
        }
    }

    return -1
}

export default baseFindIndex
