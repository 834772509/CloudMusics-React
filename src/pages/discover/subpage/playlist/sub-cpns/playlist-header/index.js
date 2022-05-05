/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo } from "react";
import { Wrapper } from "./style";

/**
 * 歌单 顶部标题
 */
export default memo(function PlayListHeader(props) {
  return (
    <Wrapper>
      {/* 左侧标题 */}
      <h3 className="title">
        <span>全部</span>
        <button className="select-classify sprite_button" onClick={(e) => props.menuClick()}>
          <span className="sprite_button">
            选择分类<i className="icon-select sprite_icon2"></i>
          </span>
        </button>
      </h3>
      {/* 右侧按钮 */}
      <div className="right">
        <a className="btn-hot sprite_button2">热门</a>
      </div>
    </Wrapper>
  );
});
