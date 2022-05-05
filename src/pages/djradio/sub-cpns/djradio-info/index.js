/* eslint-disable no-control-regex */
import { getSizeImage } from "@/utils/format-utils";
import React, { memo } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Wrapper, Left, Right } from "./style";
import SongOperationBar from "@/components/song-operation-bar";

/**
 * 电台基本信息
 */
export default memo(function DjradioInfo() {
  // 获取数据
  const { djradioDetail } = useSelector(
    (state) => ({
      djradioDetail: state.getIn(["djradio", "djradioDetail"]),
    }),
    shallowEqual
  );

  const djRadio = djradioDetail.djRadio || {};
  const dj = djRadio.dj || {};

  return (
    <Wrapper>
      {/* 左侧图片 */}
      <Left>
        <img src={getSizeImage(djRadio.picUrl, 200)} alt="" />
        <span className="msk sprite_covor"></span>
      </Left>
      {/* 右侧信息 */}
      <Right>
        {/* 标题 */}
        <div className="hand">
          <i className="icon-djradio sprite_icon2"></i>
          <h2 className="title">{djRadio.name}</h2>
        </div>
        {/* 用户信息 */}
        <div className="user">
          <a className="avatar-img" href={`/user/home?id=${dj.userId}`}>
            <img src={getSizeImage(dj.avatarUrl, 40)} alt="" />
          </a>
          <a className="avatar-name" href={`/user/home?id=${dj.userId}`}>
            {dj.nickname}
          </a>
        </div>
        {/* 播放控制栏 */}
        <SongOperationBar
          className="song-operation-bar"
          shareTitle={`(${djRadio.shareCount})`}
          downloadTitle=""
        ></SongOperationBar>
        <p className="intr">
          <a href={`/discover/djradio/category?id=${djRadio.categoryId}`} className="category">
            {djRadio.category}
          </a>
          <span>{djRadio.desc}</span>
        </p>
      </Right>
    </Wrapper>
  );
});
