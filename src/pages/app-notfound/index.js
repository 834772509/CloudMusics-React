import React, { memo } from "react";
import { Wrapper } from "./style";

export default memo(function AppNotFound() {
  return (
    <Wrapper>
      <div className="notfound">
        <i className="icon-404"></i>
        <p className="text">很抱歉，你要查找的网页找不到</p>
      </div>
    </Wrapper>
  );
});
