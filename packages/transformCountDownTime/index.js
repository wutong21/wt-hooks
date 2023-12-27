/**
 * @method: 转换倒计时时间 倒计时数值转字符da串
 * @param {*} value 倒计时数值
 * @return {*} 倒计时字符串
 */
export function transformCountDownTime(value) {
  if (!value || value === "") {
    return "";
  }
  if (value / 3600 > 1) {
    return (
      parseInt(value / 3600).toString() +
      "小时 " +
      transformCountDownTime(value % 3600)
    );
  } else if (value / 60 > 1) {
    return (
      parseInt(value / 60).toString() +
      "分钟 " +
      transformCountDownTime(value % 60)
    );
  } else {
    return value.toString() + "秒 ";
  }
}
