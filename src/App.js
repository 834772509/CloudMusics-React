import React, { memo, Suspense } from "react";
import AppHeader from "components/app-header";
import AppFooter from "components/app-footer";
import { renderRoutes } from "react-router-config";
import routes from "./router";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";
import AppPlayerBar from "@/pages/player/app-player-bar";
import ToTop from "@/components/app-totop";
import AppLoading from "./components/app-loading";

export default memo(function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        {/* 顶部导航栏 */}
        <AppHeader></AppHeader>
        {/* 路由占位 */}
        <Suspense fallback={<AppLoading></AppLoading>}>{renderRoutes(routes)}</Suspense>
        {/* 页尾 */}
        <AppFooter></AppFooter>
        {/* 播放器 */}
        <AppPlayerBar></AppPlayerBar>
        <ToTop></ToTop>
      </BrowserRouter>
    </Provider>
  );
});
