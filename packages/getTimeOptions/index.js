/**
 * @method: 获取时间间隔数组
 * @param {*} start 开始时间 'HH:mm'
 * @param {*} end 结束时间 'HH:mm'
 * @param {*} interval 间隔时间 分钟为单位
 * @return {*}
 */
export function getTimeOptions(start, end, interval) {
  let startHour = Number(start.split(":")[0]);
  let endHour = Number(end.split(":")[0]);
  let result = [];

  for (let i = startHour; i < endHour; i++) {
    let minute = 0;
    while (minute + interval <= 60) {
      result.push(
        `${i < 10 ? "0" : ""}${i}:${minute < 10 ? "0" : ""}${minute}`
      );
      minute += interval;
    }
  }
  result.push(end);
  return result;
}
