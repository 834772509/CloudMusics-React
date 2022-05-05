/* eslint-disable jsx-a11y/anchor-has-content */
import React, { memo } from "react";
import { Wrapper } from "./style";
import ThemeHeaderSmall from "@/components/theme-header-small";
import { hotRadios } from "@/services/recommend";
import { getSizeImage } from "@/utils/format-utils";

/**
 * 热门主播 组件
 */
export default memo(function HotAnchor() {
  return (
    <Wrapper>
      <ThemeHeaderSmall title="热门主播"></ThemeHeaderSmall>
      <div className="hotdj-list">
        {hotRadios.map((item, index) => {
          return (
            <div className="item" key={item.name}>
              <a href={item.url}>
                <img src={getSizeImage(item.picUrl,40)} alt={item.name} />
              </a>
              <div className="info">
                <a href={item.url}>{item.name}</a>
                <p className="position text-nowrap">{item.position}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
});
