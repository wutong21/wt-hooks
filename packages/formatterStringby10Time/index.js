/**
 * @method: 格式化时间 时间戳转字符串 10位unix时间戳转字符串
 * @param {*} stamp 时间戳
 * @return {*} 时间字符串
 */
export function formatterStringby10Time(value) {
  if (!value || value === "") {
    return "";
  }
  var d = new Date(value * 1000);
  let month =
    d.getMonth() + 1 < 10 ? 0 + "" + (d.getMonth() + 1) : d.getMonth() + 1;
  let day = d.getDate() < 10 ? 0 + "" + d.getDate() : d.getDate();
  let hour = d.getHours() < 10 ? 0 + "" + d.getHours() : d.getHours();
  let minute = d.getMinutes() < 10 ? 0 + "" + d.getMinutes() : d.getMinutes();
  let second = d.getSeconds() < 10 ? 0 + "" + d.getSeconds() : d.getSeconds();
  let dateString =
    d.getFullYear() +
    "-" +
    month +
    "-" +
    day +
    " " +
    hour +
    ":" +
    minute +
    ":" +
    second;

  return dateString;
}
