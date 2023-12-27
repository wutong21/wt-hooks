/**
 * @method 判断是否为空
 * @param {*} val 
 * @returns 
 */
export function isNull(val) {
  if (val === null || val === "" || val === undefined) {
    return true;
  }
  return false;
}
