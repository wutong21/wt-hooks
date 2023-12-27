/**
 * @method 实现将数字过千就加逗号的,过万就写四舍五入成1.3w这种
 * @param {*} number
 * @returns
 */
export function useFormatLongNumber(number) {
  let formattedNumber = "";

  const formatNumber = () => {
    if (!number) {
      formattedNumber = 0;
    } else {
      if (number > 10000) {
        formattedNumber = Math.round(number / 1000) / 10 + "w";
      } else {
        formattedNumber = number
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
    }
  };

  formatNumber();

  return formattedNumber;
}
