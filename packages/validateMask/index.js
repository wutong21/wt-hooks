import regExp from "../regExp/index";
/**
 * @method 校验掩码
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 */
export const validateMask = (rule, value, callback) => {
  let flag = true;
  value.split(".").some((v) => {
    let binary =
      Number(v).toString(2).length < 8
        ? "0".repeat(8 - Number(v).toString(2).length) + Number(v).toString(2)
        : Number(v).toString(2);
    if (!regExp.mask.test(binary)) {
      flag = false;
      return true;
    }
  });
  if (flag && value.split(".").filter((item) => item !== "").length === 4) {
    callback();
  } else {
    callback(new Error("请输入正确的掩码"));
  }
};
