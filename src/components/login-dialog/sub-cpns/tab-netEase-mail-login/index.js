/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo, useContext } from "react";
import { Wrapper } from "./style";
import { Button, Input, Checkbox } from "antd";
import { currentIndexContext, TAB_HOME } from "../../index";

/**
 * 网易邮箱登录
 */
export default memo(function TabNetEaseMailLogin() {
  const { setCurrentIndex } = useContext(currentIndexContext);

  return (
    <Wrapper>
      <div className="content">
        <div className="iphone-number">
          <Input placeholder="请输入账号" />
        </div>
        <div className="password">
          <Input placeholder="请输入密码" />
        </div>
        <div className="option">
          <Checkbox>自动登录</Checkbox>
          <a href="https://reg.163.com/getpasswd/RetakePassword.jsp">忘记密码？</a>
        </div>
        <div className="button">
          <Button type="primary" block>
            登录
          </Button>
        </div>
      </div>
      {/* 底部 */}
      <div className="footer">
        <a onClick={(e) => setCurrentIndex(TAB_HOME)}>&lt; 其他登录方式</a>
      </div>
    </Wrapper>
  );
});
