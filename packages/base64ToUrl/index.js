/**
 * @method base64图片数据转换成Url地址
 * @param {*} imageContentType 图片类型
 * @param {*} base64 数据
 * @returns 
 */
export function base64ToUrl(imageContentType, base64) {
  return window.URL.createObjectURL(
    dataURLtoBlob(`data:${imageContentType};base64,${base64}`)
  );
}

