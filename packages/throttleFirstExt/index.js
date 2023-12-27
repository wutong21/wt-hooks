/**
 * @method 节流函数
 * @param {*} fn  节流函数回调
 * @param {*} wait  节流时间间隔
 * @returns
 */
export function throttleFirstExt(fn, wait = 16) {
  let timerId = null;
  let flag = true;
  return function () {
    clearTimeout(timerId);
    if (flag) {
      fn.apply(this, arguments);
      flag = false;
    }
    timerId = setTimeout(() => {
      flag = true;
    }, wait);
  };
}
