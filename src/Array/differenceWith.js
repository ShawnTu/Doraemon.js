// import baseDifference from '../.internal/baseDifference.js'
// import baseFlatten from '../.internal/baseFlatten.js'
// import isArrayLikeObject from './isArrayLikeObject.js'
// import last from './last.js'

/*
 * @Author: ShawnTu
 * @Date: 2020-03-09 21:44:07
 * @LastEditTime: 2020-03-09 21:48:18
 * @LastEditors: Please set LastEditors
 * @Description: This method is like `difference` except that it accepts `comparator` which is invoked to compare elements of `array` to `values`. The order and references of result values are determined by the first array. The comparator is invoked with two arguments: (arrVal, othVal).
 * @FilePath: \Doraemon.js\src\Array\differenceWith.js
 * @example
 * 
 * const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
 * 
 * _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual)
 * // => [{ 'x': 2, 'y': 1 }]
 */
