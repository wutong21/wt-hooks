/**
 * @method AES加密
 * @param {*} value 需要加密的数据
 * @param {*} pwd 密钥
 * @param {*} iv 
 */
export function encrypt(value, pwd, iv = "www.xxx.cn") {
  let CryptoJS = require("crypto-js");
  let key = CryptoJS.enc.Utf8.parse(pwd);
  let encrypted = CryptoJS.AES.encrypt(value, key, {
    iv: CryptoJS.enc.Utf8.parse(iv),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  // console.log(encrypted.toString(), '加密');
  // Decrypt 解密
  // var bytes = CryptoJS.AES.decrypt(encrypted.toString(), key, {
  //   iv: iv,
  //   mode: CryptoJS.mode.CBC,
  //   padding: CryptoJS.pad.Pkcs7
  // });
  // var originalText = bytes.toString(CryptoJS.enc.Utf8)

  // console.log(originalText, "解密");
  return encrypted.toString();
}
