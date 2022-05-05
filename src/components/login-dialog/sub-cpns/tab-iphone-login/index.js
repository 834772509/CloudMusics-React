/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo, useContext } from "react";
import { Wrapper } from "./style";
import { Button, Select, Input, Checkbox } from "antd";
import { currentIndexContext, TAB_HOME, TAB_RESET_PASSWORD, TAB_REGISER } from "../../index";
import { countryCode } from "@/common/local-data";
import { useState } from "react";
import { loginCallPhone } from "@/services/user";

/**
 * 手机号登录
 */
export default memo(function TabIphoneLogin() {
  const { setCurrentIndex } = useContext(currentIndexContext);

  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();

  const [message, setMessage] = useState();

  const { Option } = Select;

  // 事件-点击登录按钮
  function btnLogin() {
    if (!phone) {
      setMessage("请输入手机号");
      return;
    }
    if (!password) {
      setMessage("请输入登录密码");
      return;
    }
    setMessage(null);
    loginCallPhone(phone, password)
      .then((res) => {
        const status = res.data.code;
        if (status === 502) {
          setMessage("手机号或密码错误");
          return;
        }

        console.log(res);
      })
      .catch((err) => {
        const status = err.response.status;
        console.log(err.response);
        if (status === 400) {
          setMessage("请输入正确的手机号");
          return;
        }
        if (status === 501) {
          setMessage("该手机号尚未注册");
          return;
        }
        if (status === 509) {
          setMessage("密码错误超过限制");
          return;
        }
      });
  }

  return (
    <Wrapper>
      <div className="content">
        <div className="iphone-number">
          <Input
            addonBefore={
              <Select defaultValue="+86" className="select-before">
                {countryCode.map((item, index) => {
                  return (
                    <Option key={index} value={item[1] + item[3]}>
                      {item[1]} +{item[3]}
                    </Option>
                  );
                })}
                {/* <Option value="+86">+86</Option> */}
                {/* <Option value="+852">+852</Option> */}
              </Select>
            }
            type="tel"
            placeholder="请输入手机号"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="password">
          <Input.Password
            placeholder="请输入密码"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {message && (
          <div className="message">
            <i className="sprite_icon2 icon-info"></i>
            <span>{message}</span>
          </div>
        )}

        <div className="option">
          <Checkbox>自动登录</Checkbox>
          <a onClick={(e) => setCurrentIndex(TAB_RESET_PASSWORD)}>忘记密码？</a>
        </div>
        <div className="button">
          <Button type="primary" block onClick={() => btnLogin()}>
            登录
          </Button>
        </div>
      </div>
      {/* 底部 */}
      <div className="footer">
        <a className="btn-otherlogin" onClick={(e) => setCurrentIndex(TAB_HOME)}>&lt; 其他登录方式</a>
        <a className="btn-regiser" onClick={(e) => setCurrentIndex(TAB_REGISER)}>没有帐号？免费注册 &gt; </a>
      </div>
    </Wrapper>
  );
});
