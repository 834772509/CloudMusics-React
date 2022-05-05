import { getSizeImage } from "@/utils/format-utils";
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Wrapper } from "./style";

/**
 * 电台排行榜
 */
export default memo(function DjradioTopList() {
  // 获取数据
  const { recommendHot } = useSelector(
    (state) => ({
      recommendHot: state.getIn(["discoverDjradio", "recommendHot"]),
    }),
    shallowEqual
  );

  const djRadios = recommendHot.djRadios || [];

  return (
    <Wrapper>
      {/* 头部标题 */}
      <div className="header">
        <h3>电台排行榜</h3>
        <div className="sort">
          <a className="goup">上升最快 </a>
          <span className="line">|</span>
          <a className="newest">最热电台 </a>
        </div>
      </div>
      {/* 电台排行榜列表 */}
      <div className="djradio-list">
        {djRadios.map((item, index) => {
          return (
            <div key={index} className="djradio-item">
              <div className="image">
                <a href={`/djradio?id=${item.id}`}>
                  <img src={getSizeImage(item.picUrl, 120)} alt="" />
                </a>
              </div>
              <div className="info">
                <h3 className="title">
                  <a href={`/djradio?id=${item.id}`}>{item.name}</a>
                </h3>
                <i className="icon-user sprite_icon2"></i>
                <a className="user-name" href={`/user/home?id=${item.dj.userId}`}>
                  {item.dj.nickname}
                </a>
                <p className="count">
                  <span>共{item.programCount}期</span>
                  <span>订阅{item.subCount}次</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
});
