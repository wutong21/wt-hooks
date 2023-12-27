/**
 * @method: 数组对象根据指定属性去重
 * @param {*} array 数组
 * @param {*} attr 指定属性名
 */
export function arrayObjRemoveDuplicateByAttr(array, attr) {
  let hash = {};
  let newArray = array.reduce((item, next) => {
    hash[next[attr]] ? "" : (hash[next[attr]] = true && item.push(next));
    return item;
  }, []);
  return newArray;
}
