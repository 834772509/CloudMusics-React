/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo } from "react";
import { Wrapper } from "./style";

export default memo(function Mine() {
  return (
    <Wrapper>
      <div className="login">
        <a href="#" className="btn-login">立即登录</a>
      </div>
    </Wrapper>
  );
});
