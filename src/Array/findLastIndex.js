import baseFindIndex from '../.internal/baseFindIndex.js'
import toInteger from './toInteger.js'

/*
 * @Author: ShawnTu
 * @Date: 2020-03-09 22:17:41
 * @LastEditTime: 2020-03-09 22:47:42
 * @LastEditors: Please set LastEditors
 * @Description: // import baseWhile from '../.internal/baseWhile.js' of `collection` from right to left.
 * @FilePath: \Doraemon.js\src\Array\findLastIndex.js
 * @example
 * 
 * const users = [
 *     { 'user': 'barney', 'active': true },
 *     { 'user': 'fred', 'active': false },
 *     { 'user': 'pebbles', 'active': false }
 * ]
 * 
 * _.findLastIndex(users, ({ user }) => user == 'pebbles')
 * // => 2
 */

function findLastIndex(array, predicate, fromIndex) {
    const length = array == null ? 0 : array.length
    if (!length) {
        return -1
    }
    let index = length -1
    if (fromIndex !== undefined) {
        index = toInteger(fromIndex)
        index = fromIndex < 0
            ? Math.max(length + index, 0)
            : Math.min(index, length - 1)
    }

    return baseFindIndex(array, predicate, index, true)
}

export default findLastIndex
