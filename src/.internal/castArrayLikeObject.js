import isArrayLikeObject from '../Array/isArrayLikeObject.js'

/*
 * @Author: ShawnTu
 * @Date: 2020-03-16 21:20:27
 * @LastEditTime: 2020-03-17 22:35:16
 * @LastEditors: Please set LastEditors
 * @Description: Casts `value` to an empty array if it's not an array like object.
 * @FilePath: \Doraemon.js\src\.internal\castArrayLikeObject.js
 */

function castArrayLikeObject(value) {
    return isArrayLikeObject(value) ? value : []
}

export default castArrayLikeObject
