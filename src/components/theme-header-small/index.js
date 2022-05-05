import React, { memo } from "react";
import { Wrapper } from "./style";

export default memo(function ThemeHeaderSmall(props) {
  const { title, href } = props;

  return (
    <Wrapper>
      <h3>{title}</h3>
      {href !== undefined && <a href={href}>查看全部 &gt;</a>}
    </Wrapper>
  );
});
