/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo } from "react";
import { Wrapper } from "./style";
import { shallowEqual, useSelector } from "react-redux";
import ThemeHeader from "@/components/theme-header";
import { getSizeImage } from "@/utils/format-utils";
import { Progress } from "antd";

/**
 * 节目排行榜
 */
export default memo(function DjradioTopList() {
  // 获取数据
  const { programTopList } = useSelector(
    (state) => ({
      programTopList: state.getIn(["discoverDjradio", "programTopList"]),
    }),
    shallowEqual
  );
  let toplist = programTopList.toplist || [];

  return (
    <Wrapper>
      {/* 头部标题 */}
      <ThemeHeader title="节目排行榜" moreLink="/discover/djradio/rank"></ThemeHeader>

      {/* 节目排行榜列表 */}
      <div className="program-list">
        {toplist.map((item, index) => {
          return (
            <div className="program-item" key={index}>
              <div className="rank">
                <span className="num">{index + 1}</span>
              </div>
              <a className="image" title="播放">
                <img src={getSizeImage(item.program.blurCoverUrl, 40)} alt="" />
                <i className="icon-play sprite_icon"></i>
              </a>
              <div className="info">
                <h3 className="title">
                  <a title={item.program.name} href={`/program?id=${item.program.id}`}>
                    {item.program.name}
                  </a>
                </h3>
                <p className="sub-title">
                  <a title={item.program.radio.name} href={`/djradio?id=${item.program.radio.id}`}>
                    {item.program.radio.name}
                  </a>
                </p>
              </div>
              <Progress
                className="progress"
                percent={90}
                showInfo={false}
                size="small"
                strokeColor="#C7C7C7"
              />
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
});
