// import baseWhile from '../.internal/baseWhile.js'

/*
 * @Author: ShawnTu
 * @Date: 2020-03-09 22:08:42
 * @LastEditTime: 2020-03-09 22:11:32
 * @LastEditors: Please set LastEditors
 * @Description: Creates a slice of `array` excluding elements dropped from the beginning. Elements are dropped until `predicate` returns falsey. The predicate is invoked with three arguments: (value, index, array).
 * @FilePath: \Doraemon.js\src\Array\dropWhile.js
 * @example
 * 
 * const users = [
 *     { 'user': 'barney', 'active': true },
 *     { 'user': 'fred', 'active': true },
 *     { 'user': 'pebbles', 'active': false }
 * ]
 * 
 * _.dropWhile(users, ({ active }) => active)
 * // => objects for ['pebbles']
 */
