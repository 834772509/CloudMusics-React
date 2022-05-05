import React, { memo } from "react";
import { Wrapper } from "./style";
/**
 * 歌单标签
 */
export default memo(function SongTag(props) {
  const { title, href } = props;

  return (
    <Wrapper>
      <a className="tag sprite_button" href={href}>
        <i className="icon-end sprite_button">{title}</i>
      </a>
    </Wrapper>
  );
});
