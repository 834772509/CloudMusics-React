/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo } from "react";
import { HeaderWrapper } from "./style";

export default memo(function ThemeHeaderRCM(props) {
  const { title, keywords = [], moreLink } = props;
  return (
    <HeaderWrapper className="sprite_02">
      <div className="left">
        <h3 className="title">{title}</h3>
        <div className="keyword">
          {keywords.map((item, index) => {
            return (
              <div className="item" key={item}>
                <a href={`/discover/playlist/?cat=${item}`}>{item}</a>
                <span className="divider">|</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="right">
        <a href={moreLink}>更多</a>
        <i className="icon sprite_02"></i>
      </div>
    </HeaderWrapper>
  );
});
