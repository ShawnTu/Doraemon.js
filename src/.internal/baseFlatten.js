import isFlattenable from './isFlattenable.js'

/*
 * @Author: ShawnTu
 * @Date: 2020-03-13 23:39:56
 * @LastEditTime: 2020-03-14 00:01:20
 * @LastEditors: Please set LastEditors
 * @Description: The base implementation of `flatten` with support for restricting flattening.
 * @FilePath: \Doraemon.js\src\.internal\baseFlatten.js
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
    predicate || (predicate = isFlattenable)
    result || (result = [])

    if (array == null) {
        return result
    }

    for (const value of array) {
        if (depth > 0 && predicate(value)) {
            if (depth > 1) {
                // Recursively flatten arrays (susceptible to call stack limits).
                baseFlatten(value, depth - 1, predicate, isStrict, result)
            } else {
                result.push(...value)
            }
        } else if (!isStrict) {
            result[result.length] = value
        }
    }

    return result
}

export default baseFlatten
