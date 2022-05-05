/* eslint-disable jsx-a11y/anchor-has-content */
import React, { memo, useState } from "react";
import { NavLink } from "react-router-dom";
import { HeaderWrapper, HeaderLeft, HeaderRight } from "./style";
import { headerLinks } from "@/common/local-data";
import { Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import LoginDialog from "@/components/login-dialog";

/**
 * 全局页面顶部
 */
export default memo(function AppHeader() {
  /**
   * 根据是否为外部链接，自动返回 a标签 /NavLink 标签
   * @param {String} item URL地址
   */
  function showSelectItem(item) {
    if (item.link.indexOf("http") === -1) {
      return (
        <NavLink exact to={item.link}>
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      );
    } else {
      return (
        <a href={item.link} target="blank">
          {item.title}
        </a>
      );
    }
  }

  const [showLoginDialog, setShowLoginDialog] = useState(false);

  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        {/* 左侧信息 */}
        <HeaderLeft>
          <a href="/" className="logo sprite_01"></a>
          <div className="select-list">
            {headerLinks.map((item, index) => {
              return (
                <div key={item.title} className="select-item">
                  {showSelectItem(item)}
                </div>
              );
            })}
          </div>
        </HeaderLeft>

        {/* 右侧内容 */}
        <HeaderRight>
          <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} />
          <Button className="button-center" ghost>
            创作者中心
          </Button>
          <Button
            className="button-login"
            type="text"
            onClick={(e) => {
              setShowLoginDialog(!showLoginDialog);
            }}
          >
            登陆
          </Button>
        </HeaderRight>
        {/* 登录框 */}
        <LoginDialog
          isShow={showLoginDialog}
          exitCallback={(e) => setShowLoginDialog(!showLoginDialog)}
        ></LoginDialog>
      </div>
      <div className="divier"></div>
    </HeaderWrapper>
  );
});
