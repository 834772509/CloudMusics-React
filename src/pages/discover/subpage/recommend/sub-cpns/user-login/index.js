/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo, useState } from "react";
import { Wrapper } from "./style";

export default memo(function UserLogin() {
  const [showLoginDialog, setShowLoginDialog] = useState(false);

  return (
    <Wrapper className="sprite_02">
      <p className="note">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
      <a
        href="#"
        className="button-login sprite_02"
        onClick={(e) => {
          setShowLoginDialog(!showLoginDialog);
        }}
      >
        用户登陆
      </a>
    </Wrapper>
  );
});
