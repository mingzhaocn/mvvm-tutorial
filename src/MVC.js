/** 模拟 Model, View, Controller */
var M = {}, V = {}, C = {};

/** Model 存储数据 */
M.data = "hello world";

/** View 将数据输出到屏幕 */
V.render = (M) => {
  alert(M.data)
}

/** Controller 作为 M 和 V 的桥梁 */
C.handleOnload = () => {
  V.render(M);
}

/** 在页面载入时调用 Controller */
window.onload = C.handleOnload;
