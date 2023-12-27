import { computeClassHeight } from "../utils";
/**
 * @method 计算当前Dom的高度
 * @param {Array} excludeClassList 当前Dom的高度 = 100vh - excludeClassList的高度和 - Gap
 * @param {Number} Gap 自定义偏差 e.g 32
 */
export function computeDomNeedHeight(excludeClassList = [], Gap) {
  let domHeight = 0
  excludeClassList.forEach(item => {
    domHeight += computeClassHeight(item)
  })
  return `calc(100vh - ${domHeight === 0 ? domHeight : domHeight + Gap}px)`
}
