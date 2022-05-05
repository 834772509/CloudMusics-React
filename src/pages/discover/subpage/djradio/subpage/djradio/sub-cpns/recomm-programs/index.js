/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo } from "react";
import { Wrapper } from "./style";
import { shallowEqual, useSelector } from "react-redux";
import { getSizeImage } from "@/utils/format-utils";
import ThemeHeader from "@/components/theme-header";

/**
 * 推荐节目
 */
export default memo(function RecommPrograms() {
  // 获取数据
  const { programRecommend } = useSelector(
    (state) => ({
      programRecommend: state.getIn(["discoverDjradio", "programRecommend"]),
    }),
    shallowEqual
  );

  const program = programRecommend.programs || [];

  return (
    <Wrapper>
      {/* 头部标题 */}
      <ThemeHeader title="推荐节目" moreLink="/discover/djradio/recommend"></ThemeHeader>
      {/* 推荐节目列表 */}
      <div className="program-list">
        {program.map((item, index) => {
          return (
            <div className="program-item" key={index}>
              <a className="image" title="播放">
                <img src={getSizeImage(item.coverUrl, 40)} alt="" />
                <i className="icon-play sprite_icon"></i>
              </a>
              <div className="info">
                <h3 className="title">
                  <a title={item.name} href={`/program?id=${item.id}`}>
                    {item.name}
                  </a>
                </h3>
                <p className="sub-title">
                  <a title={item.radio.name} href={`/djradio?id=${item.radio.id}`}>
                    {item.radio.name}
                  </a>
                </p>
              </div>
              <a className="tag" href={`/discover/djradio/category?id=${item.radio.categoryId}`}>
                {item.radio.category}
              </a>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
});
