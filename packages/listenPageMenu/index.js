/**
 * @method: 监听菜单变化
 * @param {*} cb
 */
export function listenPageMenu(cb) {
  const that = this;
  let targetNode = document.querySelector("#page-menu");
  let observerOptions = {
    attributes: true, //目标节点的属性变化
  };
  let callback = (records) => {
    cb.forEach((item) => {
      that[item]();
    });
  };
  if (targetNode) {
    let observer = new MutationObserver(callback);
    observer.observe(targetNode, observerOptions);
  }
}
