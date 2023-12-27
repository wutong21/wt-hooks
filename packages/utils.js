/**
 *
 * @param {*} className
 * @returns 返回传入class的offsetHeight
 */
export function computeClassHeight(className) {
  return document.getElementsByClassName(className) &&
    document.getElementsByClassName(className).length > 0
    // @ts-ignore
    ? document.getElementsByClassName(className)[0].offsetHeight
    : 0;
}

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