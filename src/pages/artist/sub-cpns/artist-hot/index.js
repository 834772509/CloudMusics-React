import React, { memo } from "react";
import { Wrapper } from "./style";
import ThemeHeaderSmall from "@/components/theme-header-small";

/**
 * 热门歌手
 */
export default memo(function AristHot() {
  
  return (
    <Wrapper>
      <ThemeHeaderSmall title="热门歌手"></ThemeHeaderSmall>
    </Wrapper>
  );
});
