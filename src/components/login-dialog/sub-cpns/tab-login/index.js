/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React, { memo, useContext } from "react";
import { Wrapper } from "./style";
import { Button, Checkbox, message } from "antd";
import {
  currentIndexContext,
  TAB_IPHONE_LOGIN,
  TAB_REGISER,
  TAB_NETEASE_MAIL_LOGIN,
} from "../../index";
import { useState } from "react";

/**
 * 登录主Tab
 */
export default memo(function TabLogin() {
  const { setCurrentIndex } = useContext(currentIndexContext);
  const [isChecked, setIsChecked] = useState(false);

  function goTab(index) {
    if (!isChecked) {
      message.open({
        className: "terms",
        content: "请先勾选同意《服务条款》、《隐私政策》、《儿童隐私政策》",
      });
      return;
    }
    setCurrentIndex(index);
  }

  return (
    <Wrapper>
      <div className="left">
        <div className="image">
          <img src={require("@/assets/img/platform.png")} alt="" />
        </div>
        <Button type="primary" block onClick={(e) => goTab(TAB_IPHONE_LOGIN)}>
          手机号登录
        </Button>
        <Button block onClick={(e) => goTab(TAB_REGISER)}>
          注册
        </Button>
        <div className="terms">
          <Checkbox checked={isChecked} onChange={() => setIsChecked(!isChecked)}>
            同意
            <a href="https://st.music.163.com/official-terms/service" target="_blank">
              《服务条款》
            </a>
            <a href="http://st.music.163.com/official-terms/privacy" target="_blank">
              《隐私政策》
            </a>
            <a href="https://st.music.163.com/official-terms/children" target="_blank">
              《儿童隐私政策》
            </a>
          </Checkbox>
        </div>
      </div>
      <div className="right">
        <a
          href="https://music.163.com/api/sns/authorize?snsType=10&clientType=web2&callbackType=Login&forcelogin=true"
          target="_blank"
        >
          <i className="icon-wechat sprite_logo"></i> 微信登录
        </a>
        <a
          href="https://music.163.com/api/sns/authorize?snsType=5&clientType=web2&callbackType=Login&forcelogin=true"
          target="_blank"
        >
          <i className="icon-qq sprite_logo"></i> QQ登录
        </a>
        <a
          href="https://music.163.com/api/sns/authorize?snsType=2&clientType=web2&callbackType=Login&forcelogin=true"
          target="_blank"
        >
          <i className="icon-weibo sprite_logo"></i> 微博登录
        </a>
        <a onClick={(e) => goTab(TAB_NETEASE_MAIL_LOGIN)}>
          <i className="icon-netEase-mail sprite_logo"></i> 网易邮箱账号登录
        </a>
      </div>
    </Wrapper>
  );
});
