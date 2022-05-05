import React, { memo, useRef, useState, createContext } from "react";
import { useEffect } from "react";
import { Wrapper } from "./style";
import { Tabs } from "antd";
import TabLogin from "./sub-cpns/tab-login";
import TabIphoneLogin from "./sub-cpns/tab-iphone-login";
import TabResetPassword from "./sub-cpns/tab-reset-password";
import TabRegiser from "./sub-cpns/tab-regiser";
import TabNetEaseMailLogin from "./sub-cpns/tab-netEase-mail-login";

export const currentIndexContext = createContext();

export const TAB_HOME = "0";
export const TAB_IPHONE_LOGIN = "1";
export const TAB_NETEASE_MAIL_LOGIN = "2";
export const TAB_REGISER = "3";
export const TAB_RESET_PASSWORD = "4";

/**
 * 登录对话框
 */
export default memo(function LoginDialog(props) {
  const { isShow, exitCallback } = props;
  const { TabPane } = Tabs;

  const loginDialogRef = useRef();
  const headerRef = useRef();

  if (loginDialogRef.current) {
    loginDialogRef.current.style.display = isShow ? "block" : "none";
  }

  const [currentIndex, setCurrentIndex] = useState(TAB_HOME);

  // 拖动功能
  useEffect(() => {
    let header = headerRef.current;
    let loginDialog = loginDialogRef.current;

    header.addEventListener("mousedown", (event) => {
      // 鼠标移动的时候，把鼠标在页面中的坐标，减去 鼠标在盒子内的坐标就是模态框的left和top值
      let x = event.pageX - loginDialog.offsetLeft;
      let y = event.pageY - loginDialog.offsetTop;

      document.addEventListener("mousemove", move);
      function move(event) {
        loginDialog.style.left = event.pageX - x + "px";
        loginDialog.style.top = event.pageY - y + "px";
      }

      // 鼠标弹起，就让鼠标移动事件移除
      document.addEventListener("mouseup", () => {
        document.removeEventListener("mousemove", move);
      });
    });
  }, [loginDialogRef, headerRef]);

  return (
    <Wrapper ref={loginDialogRef}>
      {/* 头部标题 */}
      <div className="header" ref={headerRef}>
        <h2>手机号登录</h2>
        <i
          className="button-close sprite_layer"
          title="关闭窗体"
          onClick={(e) => {
            loginDialogRef.current.style.display = "none";
            setCurrentIndex(TAB_HOME);
            exitCallback();
          }}
        ></i>
      </div>
      {/* 中间内容 */}
      <div className="content">
        <Tabs activeKey={currentIndex} renderTabBar={(props, DefaultTabBar) => <></>}>
          <TabPane key={TAB_HOME}>
            {/* 登录主Tab */}
            <currentIndexContext.Provider value={{ currentIndex, setCurrentIndex }}>
              <TabLogin></TabLogin>
            </currentIndexContext.Provider>
          </TabPane>
          <TabPane key={TAB_IPHONE_LOGIN}>
            {/* 手机号登录 */}
            <currentIndexContext.Provider value={{ currentIndex, setCurrentIndex }}>
              <TabIphoneLogin></TabIphoneLogin>
            </currentIndexContext.Provider>
          </TabPane>
          <TabPane key={TAB_NETEASE_MAIL_LOGIN}>
            {/* 网易邮箱登录 */}
            <currentIndexContext.Provider value={{ currentIndex, setCurrentIndex }}>
              <TabNetEaseMailLogin></TabNetEaseMailLogin>
            </currentIndexContext.Provider>
          </TabPane>
          <TabPane key={TAB_REGISER}>
            {/* 注册 */}
            <currentIndexContext.Provider value={{ currentIndex, setCurrentIndex }}>
              <TabRegiser></TabRegiser>
            </currentIndexContext.Provider>
          </TabPane>
          <TabPane key={TAB_RESET_PASSWORD}>
            {/* 重设密码 */}
            <currentIndexContext.Provider value={{ currentIndex, setCurrentIndex }}>
              <TabResetPassword></TabResetPassword>
            </currentIndexContext.Provider>
          </TabPane>
        </Tabs>
      </div>
    </Wrapper>
  );
});
