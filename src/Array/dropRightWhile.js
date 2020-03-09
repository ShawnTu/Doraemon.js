// import baseWhile from '../.internal/baseWhile.js'

/*
 * @Author: ShawnTu
 * @Date: 2020-03-09 22:01:37
 * @LastEditTime: 2020-03-09 22:06:39
 * @LastEditors: Please set LastEditors
 * @Description: Creates a slice of `array` excluding elements dropped from the end. Elements are dropped until `predicate` returns falsey. The predicate is invoked with three arguments: (value, index, array).
 * @FilePath: \Doraemon.js\src\Array\dropRightWhile.js
 * @exapmle
 * 
 * const users = [
 *     { 'user': 'barney', 'active': false },
 *     { 'user': 'fred', 'active': true },
 *     { 'user': 'pebbles', 'active': true }
 * ]
 * 
 * _.dropRightWhile(users, ({ active }) => active)
 * // => objects for ['barney']
 */
