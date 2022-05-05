import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer.js";

// 集成 Redux-Devtools
// console.log("当前环境：", process.env.NODE_ENV);

let store;
if (
  process.env.NODE_ENV === "development" &&
  (window.__REDUX_DEVTOOLS_EXTENSION__ || window.__REDUX_DEVTOOLS_EXTENSION__)
) {
  // 开发环境且已安装 Redux-Devtools 插件
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;
  store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
} else {
  // 生产环境
  store = createStore(reducer, applyMiddleware(thunk));
}

export default store;
