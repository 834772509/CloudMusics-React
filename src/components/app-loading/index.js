import React, { memo } from "react";
import { Spin } from "antd";
import { Wrapper } from "./style";

export default memo(function AppLoading() {
  return (
    <Wrapper>
      <Spin className="load" tip="正在加载中······" size="large" />
    </Wrapper>
  );
});
