import { isNull } from "../utils";
/**
 * @method 校验端口
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 */
export const validatePort = (rule, value, callback) => {
  if (isNull(value)) {
    callback(new Error("请输入端口"));
  } else {
    if (isNaN(value)) {
      callback(new Error("请输入数字"));
    } else {
      if (Number(value) >= 0 && Number(value) <= 65535) {
        callback();
      } else {
        callback(new Error("端口范围为：0~65535"));
      }
    }
  }
};
