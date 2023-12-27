import { isNull } from "../utils";
/**
 * @method 校验端口 (空值放行)
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 */
export const validatePortFormat = (rule, value, callback) => {
  if (isNaN(value)) {
    callback(new Error('请输入数字'))
  } else {
    if (Number(value) >= 0 && Number(value) <= 65535) {
      callback()
    } else {
      if (isNull(value)) {
        callback()
      } else {
        callback(new Error('端口范围为：0~65535'))
      }
    }
  }
}
