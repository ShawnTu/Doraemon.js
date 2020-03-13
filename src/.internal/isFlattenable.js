import isArguments from '../Array/isArguments.js'

/** Built-in value reference. */
const spreadableSymbol = Symbol.isConcatSpreadable

/*
 * @Author: ShawnTu
 * @Date: 2020-03-13 23:42:52
 * @LastEditTime: 2020-03-13 23:51:30
 * @LastEditors: Please set LastEditors
 * @Description: Checks if `value` is a flattenable `arguments` object or array.
 * @FilePath: \Doraemon.js\src\.internal\isFlattenable.js
 */

function isFlattenable(value) {
    return Array.isArray(value) || isArguments(value) ||
        !!(value && value[spreadableSymbol])
}

export default isFlattenable
