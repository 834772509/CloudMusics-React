/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo, useContext } from "react";
import { Wrapper } from "./style";
import { Button, Select, Input } from "antd";
import { currentIndexContext, TAB_HOME } from "../../index";

/**
 * 重设密码
 */
export default memo(function TabResetPassword() {
  const { setCurrentIndex } = useContext(currentIndexContext);

  const { Option } = Select;

  const selectBefore = (
    <Select defaultValue="+86" className="select-before">
      <Option value="+86">+86</Option>
      <Option value="+852">+852</Option>
    </Select>
  );

  return (
    <Wrapper>
      <div className="content">
        <p>手机号：</p>
        <div className="iphone-number">
          <Input addonBefore={selectBefore} placeholder="请输入手机号" />
        </div>
        <p>密码：</p>
        <div className="password">
          <Input placeholder="请输入密码" />
        </div>
        <div className="button">
          <Button type="primary" block>
            下一步
          </Button>
        </div>
      </div>
      {/* 底部 */}
      <div className="footer">
        <a onClick={(e) => setCurrentIndex(TAB_HOME)}>&lt; 返回登录</a>
      </div>
    </Wrapper>
  );
});
