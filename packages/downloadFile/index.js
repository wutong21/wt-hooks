/**
 * @method: 下载二进制文件
 * @param {*} data
 * @param {*} fileName
 * @param {*} type
 * @retu
 * rn {*}
 */
export function downloadFile(data, fileName, type) {
  const blob = new Blob([data], { type: type });
  let link = document.createElement("a");
  let body = document.querySelector("body");
  link.href = window.URL.createObjectURL(blob);
  link.download = fileName;
  link.style.display = "none";
  body.appendChild(link);
  link.click();
  body.removeChild(link);
  window.URL.revokeObjectURL(link.href);
}
