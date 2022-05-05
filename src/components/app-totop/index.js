import React, { memo } from "react";
import { Wrapper } from "./style";
import { BackTop } from "antd";

export default memo(function ToTop() {
  return (
    <Wrapper>
      <BackTop>
        <div className="backtop sprite_down"></div>
      </BackTop>
    </Wrapper>
  );
});
