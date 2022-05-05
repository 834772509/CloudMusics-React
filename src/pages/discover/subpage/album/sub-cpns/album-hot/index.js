import React, { memo } from "react";
import { Wrapper } from "./style";
import ThemeHeader from "@/components/theme-header";

/**
 * 热门新碟
 */
export default memo(function AlbumHot() {
  return (
    <Wrapper>
      <ThemeHeader title="热门新碟"></ThemeHeader>
    </Wrapper>
  );
});
