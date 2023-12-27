/**
 * @method 多表单校验
 */
export async function mulFormValidate(validateFormList, refs) {
  const v = new Promise((resolve, reject) => {
    function checkForm(formName) {
      return new Promise((resolve) => {
        refs[formName].validate((res) => {
          resolve(res);
        });
      });
    }
    Promise.all(validateFormList.map(checkForm)).then((res) => {
      const validateResult = res.every((item) => !!item);
      if (validateResult) {
        resolve(validateResult);
      } else {
        reject(validateResult);
      }
    });
  });
  return v;
}
